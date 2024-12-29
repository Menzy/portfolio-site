"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const COUNTDOWN_TARGET = new Date().getTime() + 20 * 24 * 60 * 60 * 1000; // 20 days from now

const FlipCard = ({ value, label }: { value: number; label: string }) => {
    const [flip, setFlip] = useState(false);
    const formattedValue = value.toString().padStart(2, "0");

    useEffect(() => {
        setFlip(true);
        const timer = setTimeout(() => setFlip(false), 600);
        return () => clearTimeout(timer);
    }, [value]);

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-24 h-32 bg-neutral-800 rounded-lg overflow-hidden">
                <div className={`absolute w-full h-full transition-transform duration-500 origin-bottom ${flip ? "animate-flip-down" : ""}`}>
                    <div className="absolute w-full h-1/2 bg-neutral-700 flex items-end justify-center pb-1 border-b border-neutral-600">
                        <span className="text-4xl font-bold">{formattedValue}</span>
                    </div>
                    <div className="absolute w-full h-1/2 top-1/2 bg-neutral-800 flex items-start justify-center pt-1">
                        <span className="text-4xl font-bold">{formattedValue}</span>
                    </div>
                </div>
            </div>
            <span className="text-neutral-400 mt-2 text-sm font-medium uppercase tracking-wider">{label}</span>
        </div>
    );
};

export default function StorePage() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = COUNTDOWN_TARGET - now;

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-neutral-900 flex flex-col items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    Store Coming <span className="text-lime-400">Soon</span>
                </h1>
                <p className="text-neutral-400 text-lg mb-12 max-w-md mx-auto">
                    We're working hard to bring you something amazing. Stay tuned!
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-4"
            >
                <FlipCard value={timeLeft.days} label="Days" />
                <FlipCard value={timeLeft.hours} label="Hours" />
                <FlipCard value={timeLeft.minutes} label="Minutes" />
                <FlipCard value={timeLeft.seconds} label="Seconds" />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12"
            >
                <form className="flex flex-col sm:flex-row gap-4 max-w-md w-full">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 rounded-lg bg-neutral-800 border border-neutral-700 text-white placeholder-neutral-400 focus:outline-none focus:border-lime-400"
                    />
                    <button className="px-6 py-3 bg-lime-400 text-neutral-900 rounded-lg font-medium hover:bg-lime-500 transition-colors">
                        Notify Me
                    </button>
                </form>
            </motion.div>
        </div>
    );
}