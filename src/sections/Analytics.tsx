import Tag from "@/components/Tag";
import AnalyticsCard from "@/components/AnalyticsCard";

const analyticsData = [
    {
        name: "Average Followers",
        stat: "10k"
    },
    {
        name: "Average Reach",
        stat: "20k"
    },
    {
        name: "Average Impressions",
        stat: "30k"
    },
    {
        name: "Engagement Rate",
        stat: "40%"
    }
];

export default function Analytics() {
    return (
        <section id="analytics" className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Social Media Analytics</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                     <span className="text-lime-400">Performance</span> Insights
                </h2>
                <p className="text-white/50 text-center mt-4 text-lg max-w-2xl mx-auto">
                    Gain a clear view of your campaign’s impact with detailed social media analytics. From reach and impressions to engagement rates, we provide transparent data to measure success and refine your strategy.
                </p>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {analyticsData.map((item, index) => (
                        <AnalyticsCard
                            key={item.name}
                            name={item.name}
                            stat={item.stat}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}


