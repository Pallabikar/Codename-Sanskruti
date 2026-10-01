import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { z } from 'zod';
import { Resend } from 'resend';
import nodemailer from 'nodemailer';

// Zod validation schema for site visit and enquiry leads
const leadSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .regex(/^[a-zA-Z\s.]+$/, 'Full Name can only contain letters and spaces'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian phone number (starting with 6-9)'),
  email: z.string().email('Please enter a valid email address'),
  configuration: z.string().optional(),
  timeline: z.string().optional(),
  agreeWhatsapp: z.boolean().optional(),
  message: z.string().optional(),
});

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Gmail SMTP Transporter Fallback
function getSmtpTransporter() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 465;
  const user = process.env.SMTP_USER || 'beyondrealty9@gmail.com';
  const pass = process.env.SMTP_PASS || 'ohbzgdmuuortwhva';

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

// Unified mail sender: Tries Resend API first, falls back seamlessly to Nodemailer Gmail SMTP
async function sendMailHelper({
  to,
  subject,
  html,
  text,
  attachments,
}: {
  to: string;
  subject: string;
  html: string;
  text?: string;
  attachments?: Array<{ filename: string; path: string; contentType?: string }>;
}) {
  const fromName = process.env.EMAIL_FROM_NAME || 'Codename Sanskruti';
  // Note: Resend requires using onboarding@resend.dev unless a custom domain is verified in Resend dashboard
  const fromAddress = process.env.EMAIL_FROM_ADDRESS || 'onboarding@resend.dev';
  const fromHeader = `"${fromName}" <${fromAddress}>`;

  // 1. Attempt Resend SDK First
  if (resend) {
    try {
      let resendAttachments: Array<{ filename: string; content: Buffer }> | undefined = undefined;

      if (attachments && attachments.length > 0) {
        resendAttachments = await Promise.all(
          attachments.map(async (att) => {
            const content = await fs.readFile(att.path);
            return {
              filename: att.filename,
              content,
            };
          })
        );
      }

      const resendRes = await resend.emails.send({
        from: fromHeader,
        to,
        subject,
        html,
        text,
        attachments: resendAttachments,
      });

      if (!resendRes.error) {
        console.log('Email sent successfully via Resend API:', resendRes.data?.id);
        return { success: true, provider: 'resend', id: resendRes.data?.id };
      }

      console.warn('Resend API returned an error (e.g. domain/recipient restriction), attempting SMTP fallback:', resendRes.error);
    } catch (resendErr) {
      console.warn('Resend API call thrown error, attempting SMTP fallback:', resendErr);
    }
  }

  // 2. Fallback to Nodemailer Gmail SMTP if Resend fails or is unavailable
  try {
    const transporter = getSmtpTransporter();
    const smtpFrom = `"${fromName}" <${process.env.SMTP_USER || 'beyondrealty9@gmail.com'}>`;

    const info = await transporter.sendMail({
      from: smtpFrom,
      to,
      subject,
      text,
      html,
      attachments,
    });

    console.log('Email sent successfully via Nodemailer Gmail SMTP:', info.messageId);
    return { success: true, provider: 'smtp', id: info.messageId };
  } catch (smtpErr) {
    console.error('Nodemailer SMTP also failed:', smtpErr);
    return { success: false, error: String(smtpErr) };
  }
}

// 1. Send E-Brochure to User's Registered Email Address
async function sendBrochureEmail(recipientEmail: string, recipientName: string, directPdfUrl: string) {
  const brochurePath = path.join(process.cwd(), 'public', 'Codename-Cascade-Mini-Brochure.pdf');

  return await sendMailHelper({
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
            If you have any questions or would like to schedule a guided site visit, feel free to reply directly to this email or contact our sales team at +91 97779 79501.
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
}

// 2. Send Real-Time Lead Notification to Admin (beyondrealty9@gmail.com)
async function sendAdminNotificationEmail(leadData: {
  name: string;
  phone: string;
  email: string;
  configuration?: string;
  timeline?: string;
  id: string;
  timestamp: string;
}) {
  const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL || 'beyondrealty9@gmail.com';
  const formattedDate = new Date(leadData.timestamp).toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  const whatsappDirectLink = `https://wa.me/91${leadData.phone}?text=${encodeURIComponent(`Hello ${leadData.name}, thank you for your enquiry for Codename Sanskruti!`)}`;

  return await sendMailHelper({
    to: adminEmail,
    subject: `🏡 New Site Visit Lead: ${leadData.name} (${leadData.phone})`,
    text: `New Lead Notification!\n\nName: ${leadData.name}\nPhone: ${leadData.phone}\nEmail: ${leadData.email}\nConfiguration: ${leadData.configuration || 'Not specified'}\nTimeline: ${leadData.timeline || 'Not specified'}\nSubmitted At: ${formattedDate}\nLead ID: ${leadData.id}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1f2937; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; background-color: #ffffff;">
        <div style="background-color: #9a3412; padding: 20px; text-align: center; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px; text-transform: uppercase; letter-spacing: 1px;">🏡 New Site Visit / Brochure Enquiry</h2>
          <p style="margin: 4px 0 0 0; font-size: 13px; opacity: 0.9;">Codename Sanskruti Lead Capture</p>
        </div>
        
        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; font-weight: bold; color: #4b5563; width: 35%;">Customer Name:</td>
              <td style="padding: 10px 0; color: #111827; font-weight: 600;">${leadData.name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; font-weight: bold; color: #4b5563;">Mobile Number:</td>
              <td style="padding: 10px 0; color: #111827;">
                <a href="tel:+91${leadData.phone}" style="color: #c2410c; text-decoration: none; font-weight: bold;">+91 ${leadData.phone}</a>
                &nbsp;
                <a href="${whatsappDirectLink}" target="_blank" style="background-color: #16a34a; color: white; padding: 3px 8px; text-decoration: none; border-radius: 4px; font-size: 11px; font-weight: bold;">Chat on WhatsApp</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; font-weight: bold; color: #4b5563;">Email Address:</td>
              <td style="padding: 10px 0; color: #111827;">
                <a href="mailto:${leadData.email}" style="color: #2563eb; text-decoration: none;">${leadData.email}</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; font-weight: bold; color: #4b5563;">Configuration:</td>
              <td style="padding: 10px 0; color: #111827; font-weight: 600;">${leadData.configuration || 'Not specified'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; font-weight: bold; color: #4b5563;">Purchase Timeline:</td>
              <td style="padding: 10px 0; color: #111827;">${leadData.timeline || 'Not specified'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; font-weight: bold; color: #4b5563;">Submission Time:</td>
              <td style="padding: 10px 0; color: #6b7280; font-size: 12px;">${formattedDate}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #4b5563;">Lead ID:</td>
              <td style="padding: 10px 0; color: #9ca3af; font-family: monospace; font-size: 12px;">${leadData.id}</td>
            </tr>
          </table>
        </div>

        <div style="background-color: #f9fafb; padding: 14px; text-align: center; font-size: 12px; color: #6b7280; border-top: 1px solid #e5e7eb;">
          Motwani Constructions Lead Notification System
        </div>
      </div>
    `,
  });
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

    // Dynamic host detection for cross-platform/multi-device compatibility
    const host = request.headers.get('x-forwarded-host') || request.headers.get('host') || 'localhost:3000';
    const proto = request.headers.get('x-forwarded-proto') || (host.includes('localhost') || host.includes('127.0.0.1') ? 'http' : 'https');
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || `${proto}://${host}`;
    const directPdfUrl = `${baseUrl}/Codename-Cascade-Mini-Brochure.pdf`;

    const leadData = {
      ...result.data,
      id: `lead_${Date.now()}`,
      timestamp: new Date().toISOString(),
      brochureDelivered: true,
      directPdfUrl,
    };

    // 1. Dispatch brochure email to customer
    const userEmailResult = await sendBrochureEmail(result.data.email, result.data.name, directPdfUrl);

    // 2. Dispatch real-time lead notification to admin (beyondrealty9@gmail.com)
    await sendAdminNotificationEmail(leadData);

    const whatsappMsg = `Hello ${result.data.name}, thank you for your enquiry for Codename Sanskruti! Direct PDF Brochure Download: ${directPdfUrl}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=91${result.data.phone}&text=${encodeURIComponent(whatsappMsg)}`;

    const finalLeadRecord = {
      ...leadData,
      whatsappUrl,
      customerEmailSent: userEmailResult.success,
    };

    // Safely attempt local JSON file storage
    try {
      const isVercel = process.env.VERCEL || process.env.NODE_ENV === 'production';
      const dirPath = isVercel ? path.join('/tmp', 'data') : path.join(process.cwd(), 'data');
      const filePath = path.join(dirPath, 'leads.json');

      await fs.mkdir(dirPath, { recursive: true });

      let leads = [];
      try {
        const fileData = await fs.readFile(filePath, 'utf-8');
        leads = JSON.parse(fileData);
      } catch {
        // File does not exist yet
      }

      leads.push(finalLeadRecord);
      await fs.writeFile(filePath, JSON.stringify(leads, null, 2), 'utf-8');
    } catch (fsErr) {
      console.warn('Lead file saving skipped in serverless/read-only environment:', fsErr);
    }

    return NextResponse.json({
      success: true,
      message: 'Enquiry registered! PDF brochure download initiated.',
      leadId: leadData.id,
      brochureUrl: '/Codename-Cascade-Mini-Brochure.pdf',
      whatsappUrl,
      emailSent: userEmailResult.success,
    }, { status: 201 });

  } catch (error) {
    console.error('Lead submission API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
