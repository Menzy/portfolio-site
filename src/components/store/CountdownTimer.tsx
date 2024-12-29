"use client";

import { useEffect, useState } from "react";
import FlipCard from "./FlipCard";

interface CountdownTimerProps {
    targetDate: number;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000)
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="flex flex-wrap justify-center gap-4">
            <FlipCard value={timeLeft.days} label="Days" />
            <FlipCard value={timeLeft.hours} label="Hours" />
            <FlipCard value={timeLeft.minutes} label="Minutes" />
            <FlipCard value={timeLeft.seconds} label="Seconds" />
        </div>
    );
}