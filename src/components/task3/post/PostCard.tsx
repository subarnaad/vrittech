import { Post } from "@/src/types/task3/post"

interface PostCardProps {
    post: Post
}

export default function PostCard({ post }: PostCardProps) {
    return (
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">{post.title}</h2>

                {post.isLocal && (
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                        Local Post
                    </span>
                )}
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                {post.body}
            </p>
        </article>
    )
}