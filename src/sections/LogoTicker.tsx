"use client";

import { Fragment } from "react";
import masterCard from "@/assets/images/mastercard.svg";
import acmeCorp from "@/assets/images/acme-corp.svg";
import echoValley from "@/assets/images/echo-valley.svg";
import pulse from "@/assets/images/pulse.svg";
import outside from "@/assets/images/outside.svg";
import apex from "@/assets/images/apex.svg";
import celestial from "@/assets/images/celestial.svg";
import twice from "@/assets/images/twice.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
    { name: "Quantum", image: masterCard },
    { name: "Acme Corp", image: acmeCorp },
    { name: "Echo Valley", image: echoValley },
    { name: "Pulse", image: pulse },
    { name: "Outside", image: outside },
    { name: "Apex", image: apex },
    { name: "Celestial", image: celestial },
    { name: "Twice", image: twice },
];

export default function LogoTicker() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container">
                <h3 className="text-center text-white/50 text-xl">
                    Proudly featured in skits for these renowned brands
                </h3>
                <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        animate={{
                            x: "-50%",
                        }}
                        transition={{
                            duration: 20,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="flex gap-24 pr-24"
                    >
                        {Array.from({ length: 2 }).map((_, i) => (
                            <Fragment key={i}>
                                {logos.map((logo) => (
                                    <Image
                                        src={logo.image}
                                        key={logo.name}
                                        alt={logo.name}
                                        width={120}
                                        height={50}
                                        className="h-12 w-auto"
                                    />
                                ))}
                            </Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}