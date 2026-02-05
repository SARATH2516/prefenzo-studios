import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, phoneNumber, message } = await request.json();

        // Validate input
        if (!name || !email || !phoneNumber || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Create transporter
        // NOTE: You need to set EMAIL_USER and EMAIL_PASS in your .env file
        // EMAIL_USER=prefenzostudios@gmail.com
        // EMAIL_PASS=your-app-specific-password
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER || 'prefenzostudios@gmail.com', // Fallback for testing, but mostly should be env
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER || 'prefenzostudios@gmail.com',
            to: 'prefenzostudios@gmail.com',
            subject: `New Inquiry from ${name}`,
            text: `
Name: ${name}
Email: ${email}
Phone: ${phoneNumber}

Message:
${message}
            `,
            html: `
<h3>New Inquiry Received</h3>
<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phoneNumber}</p>
<br/>
<p><strong>Message:</strong></p>
<p>${message.replace(/\n/g, '<br>')}</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send email. Ensure EMAIL_PASS is set in .env' },
            { status: 500 }
        );
    }
}
