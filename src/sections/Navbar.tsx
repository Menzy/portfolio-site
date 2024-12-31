"use client";

import Button from "@/components/Button";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
    { label: "Home", href: "home" },
    { label: "Contact", href: "contact" },
    { label: "Store", href: "/store", isPage: true },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isPage?: boolean) => {
        e.preventDefault();
        setIsOpen(false);
        
        if (isPage) {
            window.location.href = href;
            return;
        }
        
        const element = document.getElementById(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
    };

    return (
        <>
            <section className={twMerge(
                "py-4 md:py-6 fixed w-full top-0 z-50 transition-all duration-300",
                scrolled && "py-2 md:py-3 backdrop-blur-lg"
            )}>
                <div className="container max-w-5xl">
                    <div className={twMerge(
                        "border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/70 backdrop-blur transition-all duration-300",
                        scrolled && "bg-neutral-950/90"
                    )}>
                        <div className="grid grid-cols-2 md:grid-cols-3 p-2 px-4 md:pr-2 items-center">
                            <div>
                                <h1 className="text-3xl font-bold md:text-4xl transition-all duration-300">
                                    Maraji
                                </h1>
                            </div>
                            <div className="hidden md:flex justify-center items-center">
                                <nav className="flex gap-6 font-medium">
                                    {navLinks.map((link) => (
                                        <a
                                            href={link.isPage ? link.href : `#${link.href}`}
                                            key={link.label}
                                            onClick={(e) => handleScroll(e, link.href, link.isPage)}
                                            className="hover:text-lime-400 transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                            <div className="flex justify-end gap-4">
                                <button
                                    className="md:hidden"
                                    onClick={() => setIsOpen(!isOpen)}
                                    aria-label="Toggle menu"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <line x1="3" y1="6" x2="21" y2="6" className={twMerge("origin-left transition", isOpen && "rotate-45 translate-y-2")}></line>
                                        <line x1="3" y1="12" x2="21" y2="12" className={twMerge("transition", isOpen && "opacity-0")}></line>
                                        <line x1="3" y1="18" x2="21" y2="18" className={twMerge("origin-left transition", isOpen && "-rotate-45 -translate-y-2")}></line>
                                    </svg>
                                </button>
                                <Button
                                    variant="primary"
                                    className="hidden md:inline-flex items-center"
                                    onClick={handleContactClick}
                                >
                                    Contact Us
                                </Button>
                            </div>
                        </div>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.div
                                    initial={{ height: 0 }}
                                    animate={{ height: "auto" }}
                                    exit={{ height: 0 }}
                                    className="overflow-hidden md:hidden"
                                >
                                    <div className="flex flex-col items-center gap-4 py-4">
                                        {navLinks.map((link) => (
                                            <a
                                                href={link.isPage ? link.href : `#${link.href}`}
                                                key={link.label}
                                                onClick={(e) => handleScroll(e, link.href, link.isPage)}
                                                className="hover:text-lime-400 transition-colors"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                        <Button 
                                            variant="primary"
                                            onClick={handleContactClick}
                                        >
                                            Contact Us
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
            <div className="pb-[86px] md:pb-[98px]"></div>
        </>
    );
}