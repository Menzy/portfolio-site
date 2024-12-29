"use client";

import { Fragment } from "react";
import masterCard from "@/assets/images/mastercard.svg";
import cocaCola from "@/assets/images/cocacola.png";
import google from "@/assets/images/Google.png";
import primeVideo from "@/assets/images/primeVideo.png";
import lg from "@/assets/images/lg.png";
import maggi from "@/assets/images/maggi.png";
import huawei from "@/assets/images/huawei.png";
import nivea from "@/assets/images/nivea.png";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
    { name: "Quantum", image: masterCard },
    { name: "Acme Corp", image: cocaCola },
    { name: "Echo Valley", image: google },
    { name: "Pulse", image: primeVideo },
    { name: "Outside", image: lg },
    { name: "Apex", image: maggi },
    { name: "Celestial", image: huawei },
    { name: "Twice", image: nivea },
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
                            duration: 20, // change to 30
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
                                        height={50} // added myself, fix later
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
