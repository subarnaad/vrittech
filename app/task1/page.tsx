


import FeatureSection from "@/src/components/feathures/FeatureSection"
import { task1Data } from "@/src/data/data";

export default function HomePage() {
    return (
        <main>
            <FeatureSection
                headingTop="Your SkillShikshya Journey"
                headingMain={
                    <>
                        <span className="text-[#17A673]">Step</span>{" "}
                        <span className="text-[#222222]">In.</span>{" "}
                        <span className="text-[#17A673]">Skill</span>{" "}
                        <span className="text-[#222222]">Up.</span>{" "}
                        <span className="text-[#17A673]">Stand</span>{" "}
                        <span className="text-[#222222]">Out.</span>{" "}
                        <span className="inline-block">🚀</span>
                    </>
                }
                cards={task1Data}
            />
        </main>
    );
}