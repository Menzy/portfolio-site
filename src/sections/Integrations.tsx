import Tag from "@/components/Tag";
import figmaIcon from "@/assets/images/figma-logo.svg";
import notionIcon from "@/assets/images/notion-logo.svg";
import slackIcon from "@/assets/images/slack-logo.svg";
// import relumeIcon from "@/assets/images/relume-logo.svg";
// import framerIcon from "@/assets/images/framer-logo.svg";
// import githubIcon from "@/assets/images/github-logo.svg";
import IntegrationsColumn from "@/components/IntegrationsColumn";

const integrations = [
    {
        name: "Women",
        icon: figmaIcon,
        description: "Figma is a collaborative interface design tool.",
        stat: "80%"
    },
    {
        name: "Men",
        icon: notionIcon,
        description: "Notion is an all-in-one workspace for notes and docs.",
        stat: "20%"
    },
    {
        name: "Age 18-24",
        icon: slackIcon,
        description: "Slack is a powerful team communication platform.",
        stat: "20%"
    },
    {
        name: "Age 25-34",
        icon: slackIcon,
        description: "Slack is a powerful team communication platform.",
        stat: "70%"
    },
    {
        name: "Age 35-44",
        icon: slackIcon,
        description: "Slack is a powerful team communication platform.",
        stat: "10%"
    },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section id="integrations" className="py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div>
                        <Tag>Audience Demographics</Tag>
                        <h2 className="text-6xl font-medium mt-6">
                            See {" "}
                            <span className="text-lime-400">who</span>
                           {" "} engages with our content
                        </h2>
                        <p className="text-white/50 mt-4 text-lg">
                            Layers seemlessly connects with your favorite tools,
                            making it easy to plug into any workflow and
                            collaborate across platforms
                        </p>
                    </div>
                    <div>
                        <div className="h-[400px] lg:h-[800px] mt-8  lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                            <IntegrationsColumn integrations={integrations} />
                            <IntegrationsColumn
                                integrations={integrations.slice().reverse()}
                                reverse
                                className="hidden md:flex"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
