import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { error } = await supabaseAdmin
      .from('contact_messages')
      .insert([{ name, email, phone, subject, message }]); 

    if (error) throw error;

    // Send Notification Email & Auto-Reply
    try {
      const { sendNotificationEmail, sendConfirmationEmail } = await import('@/lib/email');

      // 1. Send Admin Notification
      await sendNotificationEmail({
        subject: `New Inquiry: ${subject}`,
        html: `
          <div style="margin-bottom: 20px;">
            <h3 style="color: #444; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
          </div>
          <div>
            <h3 style="color: #444; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Message Content</h3>
            <p style="background: #f9fafb; padding: 15px; border-radius: 5px; font-style: italic;">"${message}"</p>
          </div>
        `,
        type: 'contact'
      });

      // 2. Send User Confirmation (Auto-Reply)
      if (email) {
        await sendConfirmationEmail({
          toEmail: email,
          userName: name
        });
      }

    } catch (e) {
      console.error('Failed to send email operations', e);
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Contact error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
