export type FeatureSlideType = {
    id: number;
    title: string;
    subtitle?: string;
    description?: string;
    image: string;
    imageAlt?: string;
    imagePosition?: string;
    contentPosition: "left-image" | "right-image";
};
export type FeatureCardType = {
    id: number;
    bgColor: string;
    slides: FeatureSlideType[];
};
