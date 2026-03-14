import Link from "next/link"
import { User } from "@/src/types/task3/user"

interface UserCardProps {
    user: User
}

export default function UserCard({ user }: UserCardProps) {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="space-y-2">
                <h2 className="text-xl font-semibold text-slate-900">{user.name}</h2>

                <p className="text-sm text-slate-600">
                    <span className="font-medium text-slate-800">Email:</span> {user.email}
                </p>

                <p className="text-sm text-slate-600">
                    <span className="font-medium text-slate-800">Company:</span> {user.company.name}
                </p>
            </div>

            <div className="mt-5">
                <Link
                    href={`/users/${user.id}`}
                    className="inline-flex rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
                >
                    View Posts
                </Link>
            </div>
        </div>
    )
}