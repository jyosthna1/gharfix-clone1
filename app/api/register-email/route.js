import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { firstName, lastName, phone, address, userType } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "gharfix407@gmail.com",
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: "gharfix407@gmail.com",
      to: "gharfixmumbai@gmail.com",
      subject: "New Registration Form Submission",
      html: `
        <h2>New Registration</h2>
        <p><b>Name:</b> ${firstName} ${lastName}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Address:</b> ${address}</p>
        <p><b>User Type:</b> ${userType}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("REGISTER EMAIL ERROR:", error);

    return Response.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}