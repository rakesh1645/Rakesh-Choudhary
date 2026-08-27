import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message, inquiryType } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields (name, email, message)" },
        { status: 400 }
      );
    }

    // Configure Nodemailer Transport
    // Uses environment variables for SMTP server credentials (e.g. Gmail, SendGrid, Resend)
    const transporter = nodemailer.createTransport({
      service: process.env.EMAIL_SERVICE || "gmail",
      auth: {
        user: process.env.EMAIL_USER || "rakeshchoudhary941397@gmail.com",
        pass: process.env.EMAIL_PASS || "", // App Password
      },
    });

    // Email Mail Options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_TO || "rakeshchoudhary941397@gmail.com",
      replyTo: email,
      subject: `[Portfolio Inquiry: ${inquiryType || "General"}] ${subject || "New Message"}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #6366f1; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">New Message from Portfolio Website</h2>
          
          <p style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
          <p style="margin-bottom: 10px;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p style="margin-bottom: 10px;"><strong>Inquiry Type:</strong> <span style="background: #e0e7ff; color: #4338ca; padding: 3px 8px; border-radius: 4px; font-weight: bold;">${inquiryType || "General Inquiry"}</span></p>
          <p style="margin-bottom: 10px;"><strong>Subject:</strong> ${subject || "No Subject"}</p>
          
          <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-left: 4px solid #6366f1; border-radius: 4px;">
            <p style="margin: 0; font-size: 14px; line-height: 1.6;">${message.replace(/\n/g, "<br/>")}</p>
          </div>

          <p style="margin-top: 30px; font-size: 12px; color: #888;">This email was sent directly from your portfolio contact form at ${new Date().toLocaleString()}.</p>
        </div>
      `,
    };

    // Send Mail
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    );
  }
}
