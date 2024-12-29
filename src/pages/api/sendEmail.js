import nodemailer from "nodemailer";
import { google } from "googleapis";
import { validateContactForm } from "@/lib/email/validation";
import { createEmailConfig } from "@/lib/email/config";

const SCOPES = ["https://www.googleapis.com/auth/gmail.send"];

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    // Example of checking payload before using it
    const payload = req.body;
    console.log("Payload:", typeof(payload));
    console.log("Request Body:", req.body);

    if (!payload || typeof payload !== 'object') {
        return res.status(400).json({ error: 'Invalid payload' });
    }

    try {
        console.log("Sending email...");
        // Validate form data
        // const validationError = validateContactForm(req.body);
        // if (validationError) {
        //     return res.status(400).json({ message: validationError });
        // }

            console.log("After Validation ...");
        // Validate environment variables
        if (!process.env.GMAIL_SERVICE_ACCOUNT_CLIENT_EMAIL || 
            !process.env.GMAIL_SERVICE_ACCOUNT_PRIVATE_KEY || 
            !process.env.GMAIL_USER) {
            throw new Error("Missing required environment variables");
        }

        console.log("After Environment Validation ...");
        // Initialize JWT client
        const auth = new google.auth.JWT(
            process.env.GMAIL_SERVICE_ACCOUNT_CLIENT_EMAIL,
            null,
            process.env.GMAIL_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, "\n"),
            SCOPES
        );

        const gmail = google.gmail({ version: "v1", auth });

         console.log("After JWT client ...");
        // //  console.log("Auth:", auth);
        // // Get access token
        // const accessToken = await auth.authorize();
        // // console.log("Access Token:", accessToken);

        // // Configure transporter
        // const transporter = nodemailer.createTransport({
        //     service: "gmail",
        //     auth: {
        //         type: "OAuth2",
        //         user: process.env.GMAIL_USER,
        //         accessToken: accessToken.access_token,
        //     },
        // });

        // console.log("After Transporter ...");
        // // Define the mail options
        // const mailOptions = {
        //     from: `therealmaraji.com <segmented77@gmail.com>`,
        //     to: process.env.GMAIL_USER, // Replace with your email or dynamic recipient
        //     subject: `New Message from ${payload.fullname}`,
        //     text: `Company: ${payload.company}\nBudget: ${payload.budget}\n\nMessage:\n${payload.message}`,
        //     html: `
        //     <p><strong>Name:</strong> ${payload.fullname}</p>
        //     <p><strong>Email:</strong> ${payload.email}</p>
        //     <p><strong>Company:</strong> ${payload.company}</p>
        //     <p><strong>Budget:</strong> ${payload.budget}</p>
        //     <p><strong>Message:</strong> ${payload.message}</p>
        //     `,
        // };
        // console.log("Mail Options:", mailOptions);
        // console.log("After Mail Options ...");
        // // Send the email
        // const result = await transporter.sendMail(mailOptions);
        const sendEmail = async () => {
            const rawMessage = createRawMessage(
                "wanmenzy@gmail.com", 
                `New Message from ${payload.fullname}`, 
                `Company: ${payload.company}\nBudget: ${payload.budget}\n\nMessage:\n${payload.message}`);
          
            try {
              const response = await gmail.users.messages.send({
                userId: "me",
                requestBody: {
                  raw: rawMessage,
                },
              });
              console.log("Email sent:", response.data);
            } catch (error) {
              console.error("Error sending email:", error);
            }
          };
          
          const createRawMessage = (to, subject, body) => {
            const messageParts = [
              `To: ${to}`,
              `Subject: ${subject}`,
              "Content-Type: text/plain; charset=UTF-8",
              "MIME-Version: 1.0",
              "",
              body,
            ];
          
            const message = messageParts.join("\n");
          
            return Buffer.from(message)
              .toString("base64")
              .replace(/\+/g, "-")
              .replace(/\//g, "_")
              .replace(/=+$/, ""); // URL-safe base64 encoding
          };
          
          sendEmail();
    
        console.log("After Sending Email ...");
        return res.status(200).json({ message: "Email sent successfully" });

    } catch (error) {
        console.error("Error sending email:", error);
        
        // Provide specific error messages based on error type
        const errorMessage = error.message === "Missing required environment variables"
            ? "Email service is not properly configured"
            : "Failed to send email";

        return res.status(500).json({ 
            message: errorMessage,
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}
