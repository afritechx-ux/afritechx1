import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { CONTACT } from '@/data/site';

const esc = (v: unknown) => String(v ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, subject, message } = await req.json();

    if (!firstName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Configure the SMTP transport
    // This expects the environment variables to be set in Vercel
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can use other services here
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // This needs to be a Gmail App Password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender: the authenticated mailbox set in EMAIL_USER
      to: process.env.CONTACT_TO || CONTACT.email, // Where inquiries are delivered (set CONTACT_TO to override)
      replyTo: email, // The customer's email
      subject: `New Contact Form Inquiry: ${subject} - from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #0056b3; padding-bottom: 10px;">New Inquiry via Afrixtech Contact Form</h2>
          <p><strong>Name:</strong> ${esc(firstName)} ${esc(lastName)}</p>
          <p><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
          <p><strong>Subject Area:</strong> <span style="text-transform: capitalize;">${esc(subject)}</span></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0056b3; margin-top: 20px; border-radius: 4px;">
            <p style="margin: 0; white-space: pre-wrap; font-size: 16px; color: #444;">${esc(message)}</p>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #888;">This email was automatically generated from the Contact page on afrixtech.com.</p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
