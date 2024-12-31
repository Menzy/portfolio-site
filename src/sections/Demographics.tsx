import Tag from "@/components/Tag";
import DemographicsCarousel from "@/components/DemographicsCarousel";

export default function Demographics() {
    return (
        <section id="demographics" className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Audience Demographics</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                    See <span className="text-lime-400">Who Engages</span> With Our Content
                </h2>
                <p className="text-white/50 text-center mt-4 text-lg max-w-2xl mx-auto">
                Our audience spans a vibrant mix of demographics, ensuring your brand reaches the right people. Tailor your message to an audience that’s eager, engaged, and ready to act!                
                </p>
              <p className="text-white/50 text-center mt-4 text-lg max-w-2xl mx-auto">Here’s a snapshot: </p>
                <div className="mt-10">
                    <DemographicsCarousel />
                </div>
            </div>
        </section>
    );
}
