// import { NextResponse } from "next/server";
// import fs from "fs";
// import path from "path";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();

//     const filePath = path.join(process.cwd(), "app/json-data/contact.json");

//     // Read existing data
//     const fileData = fs.existsSync(filePath)
//       ? JSON.parse(fs.readFileSync(filePath, "utf8"))
//       : [];

//     // Add timestamp
//     const newEntry = {
//       ...body,
//       createdAt: new Date().toISOString(),
//     };

//     fileData.push(newEntry);

//     // Write back to file
//     fs.writeFileSync(filePath, JSON.stringify(fileData, null, 2));

//     return NextResponse.json(
//       { message: "Data saved successfully" },
//       { status: 200 },
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Failed to save data" },
//       { status: 500 },
//     );
//   }
// }

// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, message } = await request.json();

    // Create transporter using your Gmail credentials
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
      },
    });

    // Email options
    const mailOptions = {
      from: `"Contact Form" <${process.env.GMAIL_USER}>`,
      to: "addan.muhammad0@gmail.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2>New Contact Form Submission</h2>
          <hr style="border: 1px solid #eee;" />
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
            ${message.replace(/\n/g, "<br />")}
          </div>
          <hr style="border: 1px solid #eee; margin-top: 20px;" />
          <p style="color: #666; font-size: 12px;">
            Received from contact form on your website.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission
===========================
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}
Message:
${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 },
    );
  }
}
