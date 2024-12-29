import CallToAction from "@/sections/CallToAction";
import Contact from "@/sections/Contact";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Integrations from "@/sections/Integrations";
import Analytics from "@/sections/Analytics";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Introduction />
            <LogoTicker />
            <Features />
            <Integrations />
            <Analytics />
            {/* <Faqs /> */}
            <Contact />
            <CallToAction />
            <Footer />
        </>
    );
}
