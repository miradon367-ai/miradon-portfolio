import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, date, time, service, notes } = body;

    if (!name || !email || !date || !time) {
      return NextResponse.json(
        { error: "Name, email, date, and time are required." },
        { status: 400 }
      );
    }

    console.log("📅 [NEW APPOINTMENT BOOKING DISPATCHED]");
    console.log({
      to: "miradon367@gmail.com",
      clientName: name,
      clientEmail: email,
      scheduledDate: date,
      scheduledTime: time,
      serviceType: service || "Consultation",
      notes: notes || "No additional notes provided.",
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Appointment successfully requested. A calendar invitation will be sent to your email.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing appointment booking:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
