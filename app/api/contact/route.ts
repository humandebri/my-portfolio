// app/api/contact/route.ts
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail", // 他のSMTPでもOK
    auth: {
      user: process.env.MAIL_USER, // Gmailアドレスなど
      pass: process.env.MAIL_PASS, // アプリパスワード or SMTPパスワード
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.MAIL_USER,
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending mail:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
