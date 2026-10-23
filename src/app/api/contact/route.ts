import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, message, honeypot } = body;

    // Honeypot spam check
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Message received." });
    }

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Email, Message)." },
        { status: 400 }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Log inquiry server-side
    console.log("[CLW Contact Submission]:", {
      name,
      company,
      email,
      message,
      timestamp: new Date().toISOString(),
    });

    // Production integration boundary:
    // If RESEND_API_KEY or SENDGRID_API_KEY is configured in Vercel environment variables,
    // dispatch an email to contact@counelabworks.com.
    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      // Dispatch via Resend API
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "CLW Inquiries <inquiries@counelabworks.com>",
            to: ["contact@counelabworks.com"],
            reply_to: email,
            subject: `New Project Inquiry from ${name} (${company || "Individual"})`,
            text: `Name: ${name}\nCompany: ${company || "-"}\nEmail: ${email}\n\nMessage:\n${message}`,
          }),
        });
      } catch (err) {
        console.error("Failed to forward email via Resend:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been delivered to Coune LabWorks.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "An error occurred while submitting your message." },
      { status: 500 }
    );
  }
}
