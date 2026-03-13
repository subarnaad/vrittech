export type FeatureCardType = {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    bgColor: string;
    image: string;
    imageAlt: string;
    imagePosition: string;
    contentPosition: "left-image" | "right-image";
};