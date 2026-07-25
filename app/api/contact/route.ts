import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { z } from 'zod';
import nodemailer from 'nodemailer';

// Zod validation schema for site visit and enquiry leads
const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian phone number (starting with 6-9)'),
  email: z.string().email('Please enter a valid email address'),
  configuration: z.string().optional(),
  timeline: z.string().optional(),
  agreeWhatsapp: z.boolean().optional(),
  message: z.string().optional(),
});

async function sendBrochureEmail(recipientEmail: string, recipientName: string, directPdfUrl: string) {
  const brochurePath = path.join(process.cwd(), 'public', 'Codename-Cascade-Mini-Brochure.pdf');
  
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (host && user && pass) {
    try {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
      });

      await transporter.sendMail({
        from: `"${process.env.EMAIL_FROM_NAME || 'Codename Sanskruti'}" <${process.env.EMAIL_FROM_ADDRESS || user}>`,
        to: recipientEmail,
        subject: 'Codename Sanskruti - PDF Brochure Download',
        text: `Dear ${recipientName},\n\nThank you for your interest in Codename Sanskruti! Attached is your official PDF brochure.\n\nDirect PDF Download: ${directPdfUrl}\n\nWarm regards,\nCodename Sanskruti Sales Team`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1f2937; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #c2410c; padding: 24px; text-align: center; color: #ffffff;">
              <h1 style="margin: 0; font-size: 24px; letter-spacing: 2px;">CODENAME SANSKRUTI</h1>
              <p style="margin: 4px 0 0 0; font-size: 14px; opacity: 0.9;">Heritage Meets Modern Luxury</p>
            </div>
            <div style="padding: 24px; background-color: #fafaf9;">
              <h2 style="color: #9a3412; font-size: 18px; margin-top: 0;">Dear ${recipientName},</h2>
              <p style="line-height: 1.6; font-size: 14px;">
                Thank you for inquiring about <strong>Codename Sanskruti</strong>. Your PDF brochure is attached to this email and ready for instant download below.
              </p>
              <div style="margin: 24px 0; text-align: center;">
                <a href="${directPdfUrl}" download="Codename-Cascade-Mini-Brochure.pdf" style="background-color: #c2410c; color: white; padding: 14px 28px; text-decoration: none; border-radius: 4px; font-weight: bold; font-size: 14px; display: inline-block;">
                  📥 Download PDF Brochure Directly
                </a>
              </div>
              <p style="line-height: 1.6; font-size: 13px; color: #6b7280;">
                If you have any questions or would like to schedule a guided site visit, feel free to reply directly to this email or contact our sales team.
              </p>
            </div>
            <div style="background-color: #f3f4f6; padding: 16px; text-align: center; font-size: 12px; color: #9ca3af;">
              © ${new Date().getFullYear()} Codename Sanskruti. All rights reserved.
            </div>
          </div>
        `,
        attachments: [
          {
            filename: 'Codename-Cascade-Mini-Brochure.pdf',
            path: brochurePath,
            contentType: 'application/pdf',
          },
        ],
      });

      return { success: true, mode: 'smtp' };
    } catch (err) {
      console.error('Failed to send SMTP email:', err);
      return { success: false, error: String(err) };
    }
  } else {
    console.log(`[SMTP Not Configured] Simulated brochure PDF download email dispatched to: ${recipientEmail}`);
    return { success: true, mode: 'simulated' };
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate inputs
    const result = leadSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // Dynamic host detection for cross-platform/multi-device compatibility (Mobile, PC, Production domain)
    const host = request.headers.get('x-forwarded-host') || request.headers.get('host') || 'localhost:3000';
    const proto = request.headers.get('x-forwarded-proto') || (host.includes('localhost') || host.includes('127.0.0.1') ? 'http' : 'https');
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || `${proto}://${host}`;
    const directPdfUrl = `${baseUrl}/Codename-Cascade-Mini-Brochure.pdf`;

    const emailDispatch = await sendBrochureEmail(result.data.email, result.data.name, directPdfUrl);
    
    const whatsappMsg = `Hello ${result.data.name}, thank you for your enquiry for Codename Sanskruti! Direct PDF Brochure Download: ${directPdfUrl}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=91${result.data.phone}&text=${encodeURIComponent(whatsappMsg)}`;

    const leadData = {
      ...result.data,
      id: `lead_${Date.now()}`,
      timestamp: new Date().toISOString(),
      brochureDelivered: true,
      emailSentMode: emailDispatch.mode,
      whatsappUrl,
      directPdfUrl,
    };

    // Save lead to local JSON file
    const dirPath = path.join(process.cwd(), 'data');
    const filePath = path.join(dirPath, 'leads.json');

    await fs.mkdir(dirPath, { recursive: true });

    let leads = [];
    try {
      const fileData = await fs.readFile(filePath, 'utf-8');
      leads = JSON.parse(fileData);
    } catch {
      // File does not exist yet
    }

    leads.push(leadData);
    await fs.writeFile(filePath, JSON.stringify(leads, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      message: 'Enquiry registered! PDF brochure download initiated.',
      leadId: leadData.id,
      brochureUrl: '/Codename-Cascade-Mini-Brochure.pdf',
      whatsappUrl,
      emailSent: emailDispatch.success,
    }, { status: 201 });

  } catch (error) {
    console.error('Lead submission API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
