import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'dorianszafranski12@gmail.com',
      subject: `Nowe zapytanie: ${subject}`,
      text: `Imię i nazwisko: ${name}\nEmail: ${email}\nTemat: ${subject}\n\nTreść:\n${message}`,
    });
    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (err) {
    // Type assertion to specify `err` as an Error
    const errorMessage = (err as Error).message || 'Unknown error occurred';
    console.error(err); // Log the error for debugging
    return NextResponse.json({ error: 'Failed to send email', details: errorMessage }, { status: 500 });
  }
}
