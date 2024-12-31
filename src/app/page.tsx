import Contact from "@/sections/Contact";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";
import Demographics from "@/sections/Demographics";
import Analytics from "@/sections/Analytics";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Introduction />
            <LogoTicker />
            <Features />
            <Demographics />
            <Analytics />
            {/* <Integrations /> */}
            {/* <Faqs /> */}
            <Contact />
            <Footer />
        </>
    );
}