import CourseSection from "@/src/components/courses/CourseSection"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Task2() {
    return (
        <div className="mt-10 font-[Outfit]">
            <div className="px-4 ml-16">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 rounded-full border border-[#17A673] bg-white px-5 py-2.5 text-sm sm:text-base font-semibold text-[#17A673] shadow-sm transition-all duration-300 hover:bg-[#17A673] hover:text-white"
                >
                    <ArrowLeft size={18} />
                    Back to Home
                </Link>
            </div>
            <p className="text-gray-500 text-3xl ml-20">Explore our classes and master trending skills!</p>
            <h2 className="text-5xl font-extrabold ml-20 mb-32 pt-8">Dive Into <span className=" text-green-800"> What&apos;s Hot Right Now</span> 🔥</h2>
            <CourseSection />
        </div>
    )
}