"use client";

import Button from "@/components/Button";
import { motion } from "framer-motion";
import cursorYouImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
    const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault();
          const contactSection = document.getElementById('contact');
          if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
          }
      };
  
    return (
        <section
            id="home"
            className="py-24 overflow-x-clip"
            style={{
                cursor: `url(${cursorYouImage.src}), auto`,
            }}
        >
            <div className="container relative">
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center"
                >
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        {/* ✨ $7.5M seed round raised */}
                    </div>
                </motion.div>
                <motion.h1 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6"
                >
                    Impactful stories, lasting impressions
                </motion.h1>
                <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto"
                >
                    Storytelling tools shouldn’t hold you back. Discover the right stories to tell. Bring your business to the forefront of minds and eyes everywhere.
                </motion.p>
                {/* <motion.form 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto"
                >
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="bg-transparent px-4 md:flex-1 w-full"
                    />
                    <Button
                        type="submit"
                        variant="primary"
                        className="whitespace-nowrap"
                    >
                        Get In Touch
                    </Button>
                </motion.form> */}
              <Button
                        onClick={handleContactClick}
                        variant="primary"
                        className="whitespace-nowrap flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto"
                    >
                        Get In Touch
                    </Button>
            </div>
        </section>
    );
}

