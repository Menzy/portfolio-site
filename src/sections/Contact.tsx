"use client"; // Add this line to mark as client component
import { FormEvent, useState } from "react";
import emailjs from 'emailjs-com';


const Contact = () => {
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        company: "",
        budget: "",
        message: "",
    });
    const [status, setStatus] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
            const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

            if (!serviceID || !templateID || !userID) {
                throw new Error("Missing required environment variables");
            }

            const templateParams = {
                fullname: formData.fullname,
                email: formData.email,
                company: formData.company,
                budget: formData.budget,
                message: formData.message,
            };

            await emailjs.send(serviceID, templateID, templateParams, userID);
            setStatus("Message sent successfully!");
        } catch (error) {
            setStatus(`Failed to send message. ${error}. Please try again.`);
        }
    };

    return (
        <section id="contact" className="py-16 px-4 max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="text-6xl font-bold mb-4">Work With Me</h2>
                <p className="text-xl text-gray-400">
                    Let&apos;s create something amazing together
                </p>
            </div>

            <form
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto space-y-6"
            >
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                        Name
                    </label>
                    <input
                        type="text"
                        placeholder="Your name"
                        className="w-full p-3 border bg-transparent border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                        value={formData.fullname}
                        onChange={(e) =>
                            setFormData({ ...formData, fullname: e.target.value })
                        }
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full p-3 border bg-transparent border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                        Company
                    </label>
                    <input
                        type="text"
                        placeholder="Your company"
                        className="w-full p-3 border bg-transparent border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                        value={formData.company}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                company: e.target.value,
                            })
                        }
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                        Budget Range
                    </label>
                    <input
                        type="text"
                        placeholder="e.g. $2,000 - $5,000"
                        className="w-full p-3 border bg-transparent border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                        value={formData.budget}
                        onChange={(e) =>
                            setFormData({ ...formData, budget: e.target.value })
                        }
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2 text-gray-300">
                        Message
                    </label>
                    <textarea
                        placeholder="Tell me about your project"
                        className="w-full p-3 border bg-transparent border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none h-32"
                        value={formData.message}
                        onChange={(e) =>
                            setFormData({
                                ...formData,
                                message: e.target.value,
                            })
                        }
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-lime-400 text-black font-semibold py-3 px-6 rounded-lg hover:bg-lime-500 transition-colors"
                >
                    Send Message
                </button>
                {status && <p className="text-center mt-4 text-gray-400">{status}</p>}
            </form>
        </section>
    );
};

export default Contact;