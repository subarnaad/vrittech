import Image from "next/image";
import { FeatureCardType } from "@/src/types/feature";

type FeatureCardProps = {
    card: FeatureCardType;
};

export default function CardSection({ card }: FeatureCardProps) {
    const isLeftImage = card.contentPosition === "left-image";

    return (
        <div
            className="relative overflow-visible rounded-[28px] shadow-[0_18px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,0.12)]"
            style={{ backgroundColor: card.bgColor }}
        >
            <div className={card.imagePosition}>
                <Image
                    src={card.image}
                    alt={card.imageAlt}
                    width={400}
                    height={400}
                    priority
                    className=" object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.18)]"
                />
            </div>
            <div
                className={`relative z-10 px-8 py-10 sm:px-10 sm:py-12 md:px-12 ${isLeftImage
                    ? "pl-[42%] sm:pl-[38%] md:pl-[38%]"
                    : "pr-[0%] sm:pr-[30%] md:pr-[35%]"
                    }`}
            >
                <h3 className="text-[#FAFAFA] text-[32px] sm:text-[34px] md:text-[32px] font-extrabold  tracking-[-0.02em]">
                    {card.title}
                </h3>

                <p className="mt-4 text-white text-[18px] sm:text-[22px] md:text-[24px] font-semibold leading-snug">
                    {card.subtitle}
                </p>

                <p className="mt-5 text-white/95 text-[14px] sm:text-[16px] md:text-[18px] leading-[1.6]  ">
                    {card.description}
                </p>
            </div>
        </div>
    );
}