import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { z } from 'zod';

// Zod validation schema for leads
const leadSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().regex(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian phone number'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(5, 'Message must be at least 5 characters'),
});

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

    const leadData = {
      ...result.data,
      id: `lead_${Date.now()}`,
      timestamp: new Date().toISOString(),
    };

    // Save lead to local JSON file (simulating MERN lead collection)
    const dirPath = path.join(process.cwd(), 'data');
    const filePath = path.join(dirPath, 'leads.json');

    // Create 'data' folder if it doesn't exist
    await fs.mkdir(dirPath, { recursive: true });

    let leads = [];
    try {
      const fileData = await fs.readFile(filePath, 'utf-8');
      leads = JSON.parse(fileData);
    } catch {
      // File does not exist yet or is empty
    }

    leads.push(leadData);
    await fs.writeFile(filePath, JSON.stringify(leads, null, 2), 'utf-8');

    return NextResponse.json({
      success: true,
      message: 'Enquiry submitted successfully. Our relationship manager will reach out shortly.',
      leadId: leadData.id,
    }, { status: 201 });

  } catch (error) {
    console.error('Lead submission API error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
