import nodemailer from "nodemailer";
import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/gmail.send"];

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message, company, budget } = req.body;

  try {
    // Initialize JWT client
    const auth = new google.auth.JWT(
      process.env.GMAIL_SERVICE_ACCOUNT_CLIENT_EMAIL,
      null,
      process.env.GMAIL_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, "\n"),
      SCOPES
    );

    // Get the access token
    const accessToken = await auth.authorize();

    // Configure the nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.GMAIL_USER, // Gmail address you're sending from
        accessToken: accessToken.access_token,
      },
    });

    // Define the mail options
    const mailOptions = {
      from: `Your Website <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // Replace with your email or dynamic recipient
      subject: `New Message from ${name}`,
      text: `Company: ${company}\nBudget: ${budget}\n\nMessage:\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send the email
    const result = await transporter.sendMail(mailOptions);

    return res.status(200).json({ message: "Email sent successfully", result });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Failed to send email", error });
  }
}