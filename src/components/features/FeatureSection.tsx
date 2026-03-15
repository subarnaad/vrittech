import CardSection from "@/src/components/features/CardSection";
import { FeatureCardType } from "@/src/types/feature";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

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
            <div className="mx-auto max-w-10/12 sm:px-6 lg:px-2">
                <div className="">
                    <div className="px-4 sm:px-6 lg:px-10 pt-2">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 rounded-full border border-[#17A673] bg-white px-5 py-2.5 text-sm sm:text-base font-semibold text-[#17A673] shadow-sm transition-all duration-300 hover:bg-[#17A673] hover:text-white"
                        >
                            <ArrowLeft size={18} />
                            Back to Home
                        </Link>
                    </div>
                    <p className="text-[24px]">
                        {headingTop}
                    </p>

                    <div className="text-[32px] font-bold">
                        {headingMain}
                    </div>
                </div>
                <div className=" max-auto w-6xl grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {cards.map((card) => (
                        <CardSection key={card.id} card={card} />
                    ))}
                </div>
            </div>
        </section>
    );
}