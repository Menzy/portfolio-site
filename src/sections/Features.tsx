import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import Key from "@/components/Key";

const services = [
    {
        title: "Comedy Skit",
        description: "A custom-made, engaging, and humorous video tailored to promote your brand or product. Perfect for storytelling that entertains and resonates with audiences.",
        rate: "$3,000"
    },
    {
        title: "Talking Head Video",
        description: "A direct-to-camera video where I authentically discuss your product or service, highlighting its key benefits and value. Perfect for building trust and connecting with your audience. The video is optimized for Instagram but can be repurposed for other platforms.",
        rate: "$1,000"
    },
    {
        title: "YouTube Product Integration",
        description: "Seamlessly feature your product or service within a YouTube video as part of the storyline or review. Ideal for long-form content to reach a wider audience.",
        rate: "$2,000"
    },
    {
        title: "TikTok Video",
        description: "A trendy and entertaining TikTok video created to align with your brand's message, leveraging TikTok's unique style to maximize reach and engagement.",
        rate: "$1,500"
    },
    {
        title: "Crosspost Skit Across All Social Media",
        description: "Your comedy skit will be strategically shared across all my social media platforms (Instagram, YouTube, TikTok, and Facebook) for maximum exposure and impact.",
        rate: "$4,500"
    },
    {
        title: "Instagram Stories - 3 Slides",
        description: "Three engaging Instagram Story slides featuring your product or service. Includes swipe-up links or tags to drive traffic and interaction.",
        rate: "$500"
    }
];

export default function Features() {
    return (
        <section id="features" className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Services & Rates</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                    <span className="text-lime-400">Tailored Services</span>{" "} Designed to Fit your Brand
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <FeatureCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            className="group"
                        >
                            <div className="aspect-video flex items-center justify-center">
                                <div className="text-4xl font-bold text-lime-400 group-hover:scale-110 transition-transform duration-300">
                                    {service.rate}
                                </div>
                            </div>
                        </FeatureCard>
                    ))}
                </div>
            </div>
        </section>
    );
}