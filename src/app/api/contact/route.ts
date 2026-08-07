import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  // Honeypot — a real field in the form's markup but hidden from sighted
  // users via CSS and skipped in tab order. Legitimate visitors never
  // populate it; most simple bots do. No external service or credential
  // required, unlike reCAPTCHA (which the repository has no keys for).
  company?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(payload: ContactPayload) {
  const errors: Record<string, string> = {};
  if (!payload.name?.trim()) errors.name = "Please enter your name.";
  if (!payload.email?.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_PATTERN.test(payload.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!payload.message?.trim()) errors.message = "Please enter a message.";
  return errors;
}

/**
 * Real submission requires two environment variables this repository does
 * not currently define: `RESEND_API_KEY` and `CONTACT_TO_EMAIL` (see
 * `.env.example`). Until both are set, this route validates and honeypot-
 * checks every submission for real, then reports back that email delivery
 * isn't configured yet — it never pretends to have sent something it
 * didn't, and never fabricates a credential to make it appear to work.
 */
export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_body" }, { status: 400 });
  }

  if (payload.company?.trim()) {
    // Honeypot tripped — report success without sending anything, so the
    // bot has no signal to distinguish this from a real submission.
    return NextResponse.json({ ok: true });
  }

  const errors = validate(payload);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, error: "validation", fields: errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "Pixelocracy <hello@thepixelocracy.com>";

  if (!apiKey || !toEmail) {
    return NextResponse.json({ ok: false, error: "not_configured" }, { status: 500 });
  }

  const { name, email, phone, subject, message } = payload;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: subject?.trim() ? `New enquiry: ${subject.trim()}` : `New enquiry from ${name}`,
        text: [
          `Name: ${name}`,
          `Email: ${email}`,
          phone?.trim() ? `Phone: ${phone.trim()}` : null,
          subject?.trim() ? `Subject: ${subject.trim()}` : null,
          "",
          message,
        ]
          .filter(Boolean)
          .join("\n"),
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 502 });
  }
}
