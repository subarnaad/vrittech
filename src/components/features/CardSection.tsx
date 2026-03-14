"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FeatureCardType, FeatureSlideType } from "@/src/types/feature";

type FeatureCardProps = {
    card: FeatureCardType;
};

function SlideContent({
    slide,
    bgColor,
    hasMultipleSlides,
    showSideCurves = false,
    onClick,
    onPrev,
    onNext,
    showArrows = false,
}: {
    slide: FeatureSlideType;
    bgColor: string;
    hasMultipleSlides: boolean;
    showSideCurves?: boolean;
    onClick?: () => void;
    onPrev?: () => void;
    onNext?: () => void;
    showArrows?: boolean;
}) {
    const isLeftImage = slide.contentPosition === "left-image";
    const fallbackImagePosition =
        slide.contentPosition === "left-image"
            ? "absolute -left-8 bottom-0 w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px]"
            : "absolute right-0 bottom-0 w-[220px] sm:w-[240px] md:w-[260px] lg:w-[280px]";

    const finalImagePosition = slide.imagePosition || fallbackImagePosition;

    return (
        <div
            className="relative h-85 overflow-visible rounded-[28px] shadow-[0_18px_40px_rgba(0,0,0,0.08)]"
            style={{ backgroundColor: bgColor }}
            onClick={onClick}
        >
            {hasMultipleSlides && showSideCurves && (
                <>
                    <div className="absolute left-0 top-1/2 z-30 h-14 w-7 -translate-x-1/2 -translate-y-1/2 rounded-r-full bg-[#F3F3F3]" />
                    <div className="absolute right-0 top-1/2 z-30 h-14 w-7 translate-x-1/2 -translate-y-1/2 rounded-l-full bg-[#F3F3F3]" />
                </>
            )}
            {hasMultipleSlides && showArrows && onPrev && onNext && (
                <>
                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            onPrev();
                        }}
                        className="absolute left-0 top-1/2 z-40 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="h-5 w-5 text-[#444]" />
                    </button>

                    <button
                        type="button"
                        onClick={(e) => {
                            e.stopPropagation();
                            onNext();
                        }}
                        className="absolute right-0 top-1/2 z-40 flex h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="h-5 w-5 text-[#444]" />
                    </button>
                </>
            )}
            <div className={finalImagePosition}>
                <Image
                    src={`/${slide.image}`}
                    alt={slide.imageAlt || slide.title}
                    width={500}
                    height={500}
                    priority
                    className="object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.18)]"
                />
            </div>
            <div
                className={`relative z-10 h-full px-8 py-8 sm:px-10 sm:py-10  ${isLeftImage
                    ? "pl-[42%] sm:pl-[38%] md:pl-[45%]"
                    : "pr-[6%] sm:pr-[30%] md:pr-[35%]"
                    }`}
            >
                <h3 className="text-[#FAFAFA] text-[24px] sm:text-[28px] md:text-[32px] font-extrabold tracking-[-0.02em] leading-tight">
                    {slide.title}
                </h3>

                {slide.subtitle && (
                    <p className="mt-3 text-white text-[16px] sm:text-[18px] md:text-[22px] font-semibold leading-snug">
                        {slide.subtitle}
                    </p>
                )}

                {slide.description && (
                    <p className="mt-4 text-white/95 text-[13px] sm:text-[14px] md:text-[18px] leading-[1.55] max-w-[95%]">
                        {slide.description}
                    </p>
                )}
            </div>
        </div>
    );
}

export default function CardSection({ card }: FeatureCardProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [previewIndex, setPreviewIndex] = useState(
        card.slides.length > 1 ? 1 : 0
    );
    const [hovered, setHovered] = useState(false);

    const hasMultipleSlides = card.slides.length > 1;
    const hasMoreThanTwo = card.slides.length > 2;

    const activeSlide = card.slides[activeIndex];
    const previewSlide = card.slides[previewIndex];

    useEffect(() => {
        if (!hasMultipleSlides) return;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPreviewIndex((activeIndex + 1) % card.slides.length);
    }, [activeIndex, card.slides.length, hasMultipleSlides]);

    const goPreviewNext = () => {
        setPreviewIndex((prev) => (prev + 1) % card.slides.length);
    };

    const goPreviewPrev = () => {
        setPreviewIndex((prev) => (prev - 1 + card.slides.length) % card.slides.length);
    };

    const commitPreview = () => {
        setActiveIndex(previewIndex);
        setHovered(false);
    };

    return (
        <div
            className="relative"
            onMouseEnter={() => {
                if (!hasMultipleSlides) return;
                setHovered(true);
            }}
            onMouseLeave={() => {
                if (!hasMultipleSlides) return;
                setHovered(false);
            }}
        >
            <div className="relative h-100">
                {hasMultipleSlides && (
                    <div
                        className={`absolute inset-0 z-10 transition-all duration-3s ease-in-out ${hovered
                            ? "translate-y-0 opacity-100"
                            : "translate-y-6 opacity-0 pointer-events-none"
                            }`}
                    >
                        <SlideContent
                            slide={previewSlide}
                            bgColor={card.bgColor}
                            hasMultipleSlides={hasMultipleSlides}
                            showSideCurves
                            onClick={commitPreview}
                            onPrev={hasMoreThanTwo ? goPreviewPrev : undefined}
                            onNext={hasMoreThanTwo ? goPreviewNext : undefined}
                            showArrows={hasMoreThanTwo}
                        />
                    </div>
                )}
                <div
                    className={`absolute inset-0 z-20 transition-all duration-500 ease-in-out ${hovered && hasMultipleSlides
                        ? "-translate-y-[115%] opacity-0 pointer-events-none"
                        : "translate-y-0 opacity-100"
                        }`}
                >
                    <SlideContent
                        slide={activeSlide}
                        bgColor={card.bgColor}
                        hasMultipleSlides={hasMultipleSlides}
                        showSideCurves={hasMultipleSlides}
                    />
                </div>
            </div>
            {hasMultipleSlides && (
                <div className="mt-4 flex justify-center gap-2">
                    {card.slides.map((_, index) => {
                        const isActive = index === activeIndex;
                        const isPreview = hovered && index === previewIndex;

                        return (
                            <button
                                key={index}
                                type="button"
                                onClick={() => {
                                    setActiveIndex(index);
                                    setHovered(false);
                                }}
                                className={`h-2.5 rounded-full transition-all duration-300 ${isActive
                                    ? "w-6 bg-[#17A673]"
                                    : isPreview
                                        ? "w-4 bg-[#17A673]/60"
                                        : "w-2.5 bg-[#D0D0D0]"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}