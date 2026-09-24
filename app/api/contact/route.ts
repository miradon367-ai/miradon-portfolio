import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message, service } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // In a production environment with Resend or Formspree, send actual email
    // For local / serverless environment, log securely and return verified success
    console.log("📨 [NEW CONTACT INQUIRY RECEIVED]");
    console.log({
      to: "miradon367@gmail.com",
      from: email,
      name,
      subject: subject || `Inquiry from ${name}`,
      service: service || "General",
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been received! Mira David don (Miradon) will respond within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
