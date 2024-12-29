"use client";

import { motion } from "framer-motion";
import CountdownTimer from "@/components/store/CountdownTimer";
import Link from "next/link";

const COUNTDOWN_TARGET = new Date().getTime() + 20 * 24 * 60 * 60 * 1000; // 20 days from now

export default function StorePage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-neutral-900 to-black flex flex-col items-center justify-center p-4">
            <Link 
                href="/"
                className="absolute top-8 left-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
                <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform"
                    stroke="currentColor" 
                    strokeWidth="2"
                >
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                Back to Home
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-2xl mx-auto"
            >
                <div className="flex items-center justify-center gap-2 mb-8">
                    <svg 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        className="w-12 h-12"
                        stroke="currentColor" 
                        strokeWidth="2"
                    >
                        <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                    <h1 className="text-4xl font-bold">StoreName</h1>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-4">
                    Something amazing is coming soon
                </h2>
                <p className="text-gray-400 text-lg mb-12">
                    We're working hard to bring you the best shopping experience. Stay tuned for our grand opening!
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-12"
            >
                <CountdownTimer targetDate={COUNTDOWN_TARGET} />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-full max-w-md"
            >
                <div className="flex flex-col items-center">
                    <div className="relative w-full mb-2">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 rounded-lg bg-[#111] border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-white"
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-white text-black rounded-md font-medium hover:bg-gray-200 transition-colors">
                            Notify Me
                        </button>
                    </div>
                    <p className="text-gray-500 text-sm mt-2">
                        Be the first to know when we launch. No spam, we promise!
                    </p>
                </div>
            </motion.div>
        </div>
    );
}