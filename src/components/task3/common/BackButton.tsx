import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function BackButton() {
    // const router = useRouter()

    return (
        <div className="px-4 ">
            <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-[#17A673] bg-white px-5 py-2.5 text-sm sm:text-base font-semibold text-[#17A673] shadow-sm transition-all duration-300 hover:bg-[#17A673] hover:text-white"
            >
                <ArrowLeft size={18} />
                Back
            </Link>
        </div>
    )
}