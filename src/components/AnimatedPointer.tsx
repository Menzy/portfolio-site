"use client";

import { motion } from "framer-motion";
import Pointer from "./Pointer";

type AnimatedPointerProps = {
    name: string;
    color?: "red" | "blue";
    initialX: number;
    initialY: number;
    delay?: number;
};

export default function AnimatedPointer({ name, color, initialX, delay = 0 }: AnimatedPointerProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 100, x: initialX }}
            animate={{
                opacity: 1,
                y: 0,
                x: 0,
                transition: { duration: 0.5, delay }
                // y: [0, 16, 0],
                // transition: { duration: 0.5, ease: "easeInOut", delay }
            }}
            className="absolute"
        >
            <Pointer name={name} color={color} />
        </motion.div>
    );
}