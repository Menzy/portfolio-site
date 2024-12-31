"use client";

import { motion } from "framer-motion";

interface AnalyticsCardProps {
    name: string;
    stat: string;
    delay?: number;
}

export default function AnalyticsCard({ name, stat, delay = 0 }: AnalyticsCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="bg-neutral-900 p-8 rounded-3xl border border-white/10"
        >
            <div className="text-4xl font-bold text-lime-400 mb-2">{stat}</div>
            <div className="text-white/50">{name}</div>
        </motion.div>
    );
}