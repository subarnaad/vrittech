// import Image from "next/image"
// import { ArrowRight } from "lucide-react";

// interface Props {
//     card: { id: number; title: string; number: string; description: string }
//     active: boolean
//     onClick: () => void
//     images: string[]
// }

// export default function CourseCard({
//     card,
//     active,
//     onClick,
//     images,
// }: Props) {
//     const titleWords = card.title.split(" ")
//     const firstWord = titleWords[0] || ""
//     const remainingWords = titleWords.slice(1).join(" ")

//     return (
//         <div
//             onClick={onClick}
//             className={`relative cursor-pointer overflow-hidden rounded-3xl h-80 sm:h-95 lg:h-130 transition-all duration-500
//         ${active
//                     ? "w-full lg:w-1/2 bg-[#C33241] text-white"
//                     : "w-full sm:w-full lg:w-1/4 bg-[#E9DCDC] text-[#C33241]"
//                 }`}
//         >
//             <div
//                 className={`relative z-20 h-full flex flex-col p-5 sm:p-7 lg:p-10 transition-transform duration-500
//           ${active
//                         ? "rotate-0 justify-between"
//                         : "rotate-0 lg:-rotate-90 justify-between items-center text-center"
//                     }`}
//             >
//                 {active ? (
//                     <>
//                         <div className="flex justify-end text-sm sm:text-xl lg:text-3xl font-bold group cursor-pointer text-right">
//                             <span>View all Courses</span>
//                             <span className="ml-2 text-2xl sm:text-4xl lg:text-6xl leading-none transition-transform duration-300 group-hover:translate-x-2 animate-pulse">
//                                 <ArrowRight size={40} />
//                             </span>
//                         </div>
//                         <div className="flex flex-wrap gap-3 sm:gap-5 lg:gap-8 mt-4 sm:mt-6 justify-center lg:justify-start">
//                             {images.map((img, i) => (
//                                 <Image
//                                     key={i}
//                                     src={img}
//                                     alt={`Course image ${i + 1}`}
//                                     width={150}
//                                     height={150}
//                                     className="w-17.5 h-17.5 sm:w-25 sm:h-25 lg:w-37.5 lg:h-37.5 object-contain hover:animate-spin"
//                                 />
//                             ))}
//                         </div>
//                         <div className="flex flex-col lg:flex-row lg:items-end gap-4 sm:gap-6 lg:gap-10 xl:gap-16">
//                             <h1 className="text-[56px] sm:text-[80px] lg:text-[120px] font-bold leading-none shrink-0">
//                                 {card.number}
//                             </h1>

//                             <div className="ml-10">
//                                 <h2 className="  text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
//                                     {card.title}
//                                 </h2>
//                                 <p className="text-sm sm:text-base lg:text-2xl mt-2 sm:mt-3 opacity-90 max-w-full lg:max-w-65 leading-relaxed">
//                                     {card.description}
//                                 </p>
//                             </div>
//                         </div>
//                     </>
//                 ) : (
//                     <>
//                         <div className="flex flex-row-reverse items-center justify-between h-full w-full text-center  gap-12 ">
//                             <div className="flex flex-col items-center">
//                                 <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold leading-tight">
//                                     {firstWord}
//                                     {remainingWords && (
//                                         <>
//                                             <br />
//                                             {remainingWords}
//                                         </>
//                                     )}
//                                 </h2>

//                                 <p className="text-sm sm:text-base lg:text-3xl mt-2 sm:mt-3  sm:max-w-55 leading-snug">
//                                     {card.description}
//                                 </p>
//                             </div>

//                             <h1 className=" flex flex-row text-[56px] sm:text-[80px] lg:text-[100px] font-bold leading-none">
//                                 {card.number}
//                             </h1>
//                         </div>
//                     </>
//                 )}
//             </div>
//         </div>
//     )
// }


"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Props {
    card: { id: number; title: string; number: string; description: string };
    active: boolean;
    onClick: () => void;
    images: string[];
}

export default function CourseCard({ card, active, onClick, images }: Props) {
    const titleWords = card.title.split(" ");
    const firstWord = titleWords[0] || "";
    const remainingWords = titleWords.slice(1).join(" ");

    return (
        <div
            onClick={onClick}
            className={`relative cursor-pointer overflow-hidden rounded-3xl transition-all duration-500
      h-80 sm:h-90 lg:h-130
      ${active
                    ? "w-full lg:w-1/2 bg-[#C33241] text-white"
                    : "w-full sm:w-full lg:w-1/4 bg-[#E9DCDC] text-[#C33241]"
                }`}
        >
            <div
                className={`relative z-20 flex h-full flex-col p-5 sm:p-7 lg:p-10 transition-transform duration-500
        ${active
                        ? "rotate-0 justify-between"
                        : "rotate-0 lg:-rotate-90 items-center justify-between text-center"
                    }`}
            >
                {active ? (
                    <>
                        {/* View courses */}
                        <div className="group flex cursor-pointer justify-end text-sm font-bold sm:text-xl lg:text-3xl">
                            <span>View all Courses</span>
                            <span className="ml-2 text-2xl sm:text-4xl lg:text-6xl transition-transform duration-300 group-hover:translate-x-2">
                                <ArrowRight size={36} />
                            </span>
                        </div>

                        {/* Images */}
                        <div className="mt-4 flex flex-wrap justify-center gap-4 sm:gap-6 lg:justify-start lg:gap-8">
                            {images.map((img, i) => (
                                <Image
                                    key={i}
                                    src={img}
                                    alt={`Course image ${i + 1}`}
                                    width={150}
                                    height={150}
                                    className="h-[70px] w-[70px] object-contain transition-transform hover:scale-110 sm:h-[90px] sm:w-[90px] lg:h-[140px] lg:w-[140px]"
                                />
                            ))}
                        </div>

                        {/* Bottom section */}
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:gap-10 xl:gap-16">
                            <h1 className="shrink-0 text-[56px] font-bold leading-none sm:text-[80px] lg:text-[120px]">
                                {card.number}
                            </h1>

                            <div className="lg:ml-6">
                                <h2 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-5xl">
                                    {card.title}
                                </h2>

                                <p className="mt-2 max-w-full text-sm leading-relaxed opacity-90 sm:text-base lg:max-w-[260px] lg:text-xl">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="flex h-full w-full flex-row-reverse items-center justify-between gap-10 text-center">
                            <div className="flex flex-col items-center">
                                <h2 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-5xl">
                                    {firstWord}
                                    {remainingWords && (
                                        <>
                                            <br />
                                            {remainingWords}
                                        </>
                                    )}
                                </h2>

                                <p className="mt-2 text-sm leading-snug sm:mt-3 sm:max-w-[220px] sm:text-base lg:text-2xl">
                                    {card.description}
                                </p>
                            </div>

                            <h1 className="flex text-[56px] font-bold leading-none sm:text-[80px] lg:text-[100px]">
                                {card.number}
                            </h1>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}