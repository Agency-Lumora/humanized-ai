import { NextResponse } from "next/server";
import { getResend } from "@/lib/email";
import { appendLeadToSheet } from "@/lib/sheets";

export async function POST(req: Request) {
  console.log("✅ /api/send-email called");

  try {
    const data = await req.json();

    console.log("Received data:", data);

    const countryLabel = data.country || "—";

    const resend = getResend();

    const { error } = await resend.emails.send({
      from: "Lumora Digital Agency <hello@agencylumora.com>",
      to: ["hello@agencylumora.com"],
      replyTo: data.email,
      subject: `New Consultation • ${data.full_name}`,
      html: `
    <div style="font-family:Arial,sans-serif;background:#f8fafc;padding:40px;">
      <div style="max-width:650px;margin:auto;background:white;border-radius:16px;padding:40px;border:1px solid #e5e7eb;">

        <h1 style="margin:0;color:#6D5EF9;">Lumora Digital Agency</h1>

        <p style="margin-top:24px;font-size:18px;">
          A new consultation request has been received.
        </p>

        <table style="width:100%;margin-top:30px;border-collapse:collapse;">
          <tr>
            <td style="padding:10px;font-weight:bold;">Name</td>
            <td>${data.full_name}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Email</td>
            <td>${data.email}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Phone</td>
            <td>${data.phone}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Business</td>
            <td>${data.business_name}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Website</td>
            <td>${data.website}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Business Type</td>
            <td>${data.business_type}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Country</td>
            <td>${countryLabel}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Package</td>
            <td>${data.selected_plan}</td>
          </tr>

          <tr>
            <td style="padding:10px;font-weight:bold;">Budget</td>
            <td>${data.budget}</td>
          </tr>
        </table>

        <div style="margin-top:30px;padding:20px;background:#f8fafc;border-radius:12px;">
          ${data.message}
        </div>

      </div>
    </div>
  `,
    });

   const { error: clientEmailError } = await resend.emails.send({
      from: "Lumora Digital Agency <hello@agencylumora.com>",
      to: [data.email],
      subject: "We've received your consultation request",
      html: `
    <div style="font-family:Arial,sans-serif;background:#f8fafc;padding:40px;">
      <div style="max-width:650px;margin:auto;background:white;border-radius:16px;padding:40px;border:1px solid #e5e7eb;">

        <h1 style="color:#6D5EF9;margin-bottom:20px;">
          Lumora Digital Agency
        </h1>

        <h2>Hi ${data.full_name}, 👋</h2>

        <p>
          Thank you for reaching out to Lumora Digital Agency for web services.
        </p>

        <p>
          We've successfully received your consultation request and our team
          will carefully review your project requirements.
        </p>

        <p>
          You can expect a response within
          <strong>24 hours.</strong>
        </p>

        <div style="margin:30px 0;padding:20px;background:#f8fafc;border-radius:12px;">
          <strong>Your Selected Package</strong><br/>
          ${data.selected_plan}
        </div>

        <p>
          We look forward to helping bring your vision to life.
        </p>

        <br/>

        <strong>— Lumora Digital Agency</strong> 

      </div>
    </div>
  `,
    });

    if (clientEmailError) {
      console.error("Client email error:", clientEmailError);
    }

    // Append the lead to Google Sheets. Non-blocking: a Sheets failure
    // must never break the consultation submission or email flow.
    try {
      await appendLeadToSheet(data);
    } catch (sheetError) {
      console.error("Google Sheets append error:", sheetError);
    }

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to send email." },
      { status: 500 },
    );
  }
}
