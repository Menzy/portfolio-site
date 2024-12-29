import { EmailConfig, ContactFormData } from './types';

export function createEmailConfig(formData: ContactFormData): EmailConfig {
    const { name, email, company, budget, message } = formData;
    
    return {
        to: process.env.GMAIL_USER || '',
        from: `${name} <${process.env.GMAIL_USER || ''}>`,
        subject: `New Message from ${name}`,
        text: `
            Name: ${name}
            Email: ${email}
            Company: ${company}
            Budget: ${budget}
            Message: ${message}
        `,
        html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Budget:</strong> ${budget}</p>
            <p><strong>Message:</strong> ${message}</p>
        `
    };
}