import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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
        user: process.env.EMAIL_USER || 'afritechx@gmail.com',
        pass: process.env.EMAIL_PASS, // This needs to be a Gmail App Password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || 'afritechx@gmail.com', // Sender address (your authenticated email)
      to: 'afritechx@gmail.com', // The destination email where you want to receive inquiries
      replyTo: email, // The customer's email
      subject: `New Contact Form Inquiry: ${subject} - from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #0056b3; padding-bottom: 10px;">New Inquiry via Afrixtech Contact Form</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject Area:</strong> <span style="text-transform: capitalize;">${subject}</span></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0056b3; margin-top: 20px; border-radius: 4px;">
            <p style="margin: 0; white-space: pre-wrap; font-size: 16px; color: #444;">${message}</p>
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
