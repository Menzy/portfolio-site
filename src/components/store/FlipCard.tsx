"use client";

import { useEffect, useState } from "react";

interface FlipCardProps {
    value: number;
    label: string;
}

export default function FlipCard({ value, label }: FlipCardProps) {
    const [flip, setFlip] = useState(false);
    const [currentValue, setCurrentValue] = useState(value);
    const [nextValue, setNextValue] = useState(value);
    
    const formattedCurrentValue = currentValue.toString().padStart(2, "0");
    const formattedNextValue = nextValue.toString().padStart(2, "0");

    useEffect(() => {
        if (value !== currentValue) {
            setFlip(true);
            setNextValue(value);
            const timer = setTimeout(() => {
                setCurrentValue(value);
                setFlip(false);
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [value, currentValue]);

    return (
        <div className="flex flex-col items-center">
            <div className="relative w-24 h-32">
                {/* Static Background */}
                <div className="absolute inset-0 bg-[#111] rounded-lg" />
                
                {/* Top Half (Static) */}
                <div className="absolute w-full h-1/2 bg-[#222] rounded-t-lg flex items-end justify-center pb-1 border-b border-[#333] overflow-hidden">
                    <span className="text-4xl font-bold">{!flip ? formattedCurrentValue : formattedNextValue}</span>
                </div>
                
                {/* Bottom Half (Static) */}
                <div className="absolute w-full h-1/2 bottom-0 bg-[#111] rounded-b-lg flex items-start justify-center pt-1 overflow-hidden">
                    <span className="text-4xl font-bold">{formattedCurrentValue}</span>
                </div>

                {/* Animated Flip Card */}
                {flip && (
                    <div className="absolute w-full h-1/2 bg-[#222] rounded-t-lg animate-flip-down origin-bottom">
                        <div className="absolute inset-0 flex items-end justify-center pb-1 border-b border-[#333]">
                            <span className="text-4xl font-bold">{formattedCurrentValue}</span>
                        </div>
                        <div className="absolute inset-0 flex items-start justify-center pt-1 bg-[#111] backface-hidden">
                            <span className="text-4xl font-bold">{formattedNextValue}</span>
                        </div>
                    </div>
                )}
            </div>
            <span className="text-gray-400 mt-2 text-sm font-medium uppercase tracking-wider">
                {label}
            </span>
        </div>
    );
}