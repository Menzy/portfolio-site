"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
    {
        id: 1,
        title: "Female Audience",
        percentage: "80%",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 mb-4">
                <path d="M12 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14zM5 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0z" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 16v6M9 19h6" stroke="currentColor" strokeWidth="2"/>
            </svg>
        )
    },
    {
        id: 2,
        title: "Male Audience",
        percentage: "20%",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16 mb-4">
                <circle cx="12" cy="7" r="5" stroke="currentColor" strokeWidth="2"/>
                <path d="M15 14l4 4m0-4l-4 4M5 14h8v8H5v-8z" stroke="currentColor" strokeWidth="2"/>
            </svg>
        )
    },
    {
        id: 3,
        title: "Age Distribution",
        chart: [
            { age: "18-24", percentage: 20 },
            { age: "25-34", percentage: 70 },
            { age: "35-44", percentage: 10 }
        ]
    }
];

export default function DemographicsCarousel() {
    const [current, setCurrent] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    useEffect(() => {
        if (!autoplay) return;
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [autoplay]);

    return (
        <div className="relative h-[400px] w-full">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="text-center">
                        {slides[current].icon && (
                            <div className="flex justify-center text-lime-400">
                                {slides[current].icon}
                            </div>
                        )}
                        <h3 className="text-2xl font-bold mb-4">{slides[current].title}</h3>
                        {slides[current].percentage ? (
                            <p className="text-5xl font-bold text-lime-400">{slides[current].percentage}</p>
                        ) : (
                            <div className="space-y-4">
                                {slides[current].chart?.map((item) => (
                                    <div key={item.age} className="text-left">
                                        <div className="flex justify-between mb-1">
                                            <span>{item.age}</span>
                                            <span>{item.percentage}%</span>
                                        </div>
                                        <div className="h-2 bg-neutral-800 rounded-full overflow-hidden">
                                            <div 
                                                className="h-full bg-lime-400 rounded-full transition-all duration-500"
                                                style={{ width: `${item.percentage}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all ${
                            index === current ? "bg-lime-400 w-4" : "bg-neutral-700"
                        }`}
                        onClick={() => {
                            setCurrent(index);
                            setAutoplay(false);
                        }}
                    />
                ))}
            </div>
        </div>
    );
}