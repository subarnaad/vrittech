import Link from "next/link"
import { User } from "@/src/types/task3/user"

interface UserCardProps {
    user: User
}

export default function UserCard({ user }: UserCardProps) {
    return (
        <div className="group relative rounded-2xl border border-slate-200 bg-white p-6 inset-shadow-sm inset-shadow-[#C33241] shadow-xl/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-4 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-r from-[#C33241] to-[#C33241] text-lg font-semibold text-white">
                    {user.name.charAt(0)}
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-slate-900">
                        {user.name}
                    </h2>
                    <p className="text-xs text-slate-500">{user.company.name}</p>
                </div>
            </div>
            <div className="space-y-2 text-sm text-slate-600">
                <p>
                    <span className="font-medium text-slate-800">Email:</span>{" "}
                    {user.email}
                </p>

                <p>
                    <span className="font-medium text-slate-800">Company:</span>{" "}
                    {user.company.name}
                </p>
            </div>
            <div className="mt-6">
                <Link
                    href={`/task3/users/${user.id}`}
                    className=" inline-flex items-center gap-2 rounded-lg bg-linear-to-r from-[#C33241] to-purple-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:from-[#C33241]0 hover:to-purple-700 hover:shadow-lg"
                >
                    View Posts →
                </Link>
            </div>
        </div>
    )
}