import CardSection from "@/src/components/feathures/CardSection";
import { FeatureCardType } from "@/src/types/feature";

type FeatureSectionProps = {
    headingTop: string;
    headingMain: React.ReactNode;
    cards: FeatureCardType[];
};

export default function FeatureSection({
    headingTop,
    headingMain,
    cards,
}: FeatureSectionProps) {
    return (
        <section className="w-full bg-[#F3F3F3]  ">
            <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8  max-h-260.5">
                <div className="mb-10 sm:mb-14">
                    <p className="text-[24px]">
                        {headingTop}
                    </p>

                    <div className="text-[32px] font-bold">
                        {headingMain}
                    </div>
                </div>
                <div className=" max-auto w-16xl grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                    {cards.map((card) => (
                        <CardSection key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </section>
    );
}