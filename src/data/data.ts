import { FeatureCardType } from "../types/feature";

export const task1Data: FeatureCardType[] = [
    {
        id: 1,
        bgColor: "#F45B5B",
        slides: [
            {
                id: 1,
                title: "Start with Clarity",
                subtitle: "Step into a better learning path.",
                description: "Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth.",
                image: "c1p1.svg",
                imageAlt: "Start with Clarity illustration",
                imagePosition: "absolute -left-15 top-4 bottom-0 w-[240px] sm:w-[220px] md:w-[250px] lg:w-[250px]",
                contentPosition: "left-image",
            },
            {
                id: 2,
                title: "Clarity unlocked—stickers, sips, and skills all in one go!",
                contentPosition: "left-image",
                imagePosition: "absolute left-3 bottom-0 w-[240px] sm:w-[220px] md:w-[250px] lg:w-[250px]",
                image: "c1p2.svg",
            }
        ]
    },
    {
        id: 2,
        bgColor: "#5492A0",
        slides: [
            {
                id: 1,
                title: "Learn by Doing",
                subtitle: "Practical skills, real projects.",
                description: "Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery.",
                image: "c2p1.svg",
                imageAlt: "Learn by Doing illustration",
                imagePosition: "absolute right-0 top-4 w-[240px] sm:w-[180px] md:w-[230px] lg:w-[225px]",
                contentPosition: "right-image",
            },
            {
                id: 2,
                title: "Focused faces—learning mode: ON!",
                contentPosition: "right-image",
                image: "c2p2.svg",
                imagePosition: "absolute right-0 top-14 buttom-0 w-[240px] sm:w-[180px] md:w-[230px] lg:w-[390px]",
            },
            {
                id: 3,
                title: "Laptops, lessons, and a whole lot of growth!",
                contentPosition: "left-image",
                image: "c2p3.svg",
                imagePosition: "absolute  bottom-0 w-[240px] sm:w-[220px] md:w-[250px] lg:w-[300px]",
            },
        ]
    },
    {
        id: 3,
        bgColor: "#6C64A8",
        slides: [
            {
                id: 1,
                title: "Get Mentored & Supported",
                subtitle: "You're not learning alone.",
                description: "Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live support, interactive discussions, and expert insights. You're never on your own.",
                image: "c3p1.svg",
                imageAlt: "Get Mentored illustration",
                imagePosition: "absolute -left-14 top-18 bottom-0 w-[240px] sm:w-[220px] md:w-[250px] lg:w-[250px]",
                contentPosition: "left-image",
            }
        ]
    },
    {
        id: 4,
        bgColor: "#A88964",
        slides: [{
            id: 1,
            title: "Achieve & Showcase",
            subtitle: "Build your portfolio, get job-ready.",
            description: "Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture.",
            image: "c4p1.svg",
            imageAlt: "Achieve and Showcase illustration",
            imagePosition: "absolute right-0 -bottom-15 w-[240px] sm:w-[250px] md:w-[250px] lg:w-[250px] ",
            contentPosition: "right-image",
        }]

    },
];

