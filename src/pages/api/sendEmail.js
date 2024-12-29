import emailjs from 'emailjs-com';

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const payload = req.body;


    try {
        const serviceID = process.env.EMAILJS_SERVICE_ID;
        const templateID = process.env.EMAILJS_TEMPLATE_ID;
        const userID = process.env.EMAILJS_USER_ID;

        if (!serviceID || !templateID || !userID) {
            throw new Error("Missing required environment variables");
        }

        const templateParams = {
            fullname: payload.fullname,
            email: payload.email,
            company: payload.company,
            budget: payload.budget,
            message: payload.message,
        };

        await emailjs.send(serviceID, templateID, templateParams, userID);

        return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);

        const errorMessage = error.message === "Missing required environment variables"
            ? "Email service is not properly configured"
            : "Failed to send email";

        return res.status(500).json({ 
            message: errorMessage,
            error: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
}
