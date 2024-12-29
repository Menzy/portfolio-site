import nodemailer from "nodemailer";
import { google } from "googleapis";
import { validateContactForm } from "@/lib/email/validation";
import { createEmailConfig } from "@/lib/email/config";

const SCOPES = ["https://www.googleapis.com/auth/gmail.send"];

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        // Validate form data
        const validationError = validateContactForm(req.body);
        if (validationError) {
            return res.status(400).json({ message: validationError });
        }

        // Validate environment variables
        if (!process.env.GMAIL_SERVICE_ACCOUNT_CLIENT_EMAIL || 
            !process.env.GMAIL_SERVICE_ACCOUNT_PRIVATE_KEY || 
            !process.env.GMAIL_USER) {
            throw new Error("Missing required environment variables");
        }

        // Initialize JWT client
        const auth = new google.auth.JWT(
            process.env.GMAIL_SERVICE_ACCOUNT_CLIENT_EMAIL,
            null,
            process.env.GMAIL_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, "\n"),
            SCOPES
        );

        // Get access token
        const accessToken = await auth.authorize();

        // Configure transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: process.env.GMAIL_USER,
                accessToken: accessToken.access_token,
            },
        });

        // Create email config
        const emailConfig = createEmailConfig(req.body);

        // Send email
        const result = await transporter.sendMail(emailConfig);

        return res.status(200).json({ 
            message: "Email sent successfully",
            messageId: result.messageId 
        });

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