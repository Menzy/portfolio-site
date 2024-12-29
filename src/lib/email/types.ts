export interface EmailConfig {
    to: string;
    from: string;
    subject: string;
    text: string;
    html: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    company: string;
    budget: string;
    message: string;
}