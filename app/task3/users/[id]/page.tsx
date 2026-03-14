import { notFound } from "next/navigation"
import { fetchPostsByUserId, fetchUserById } from "@/src/lib/api"
import BackButton from "@/src/components/task3/common/BackButton"
import PostList from "@/src/components/task3/post/PostList"

interface UserPostsPageProps {
    params: Promise<{
        id: string
    }>
}

export default async function UserPostsPage({ params }: UserPostsPageProps) {
    const { id } = await params
    const userId = Number(id)

    if (Number.isNaN(userId)) {
        notFound()
    }

    const [user, posts] = await Promise.all([
        fetchUserById(userId),
        fetchPostsByUserId(userId),
    ])

    if (!user) {
        notFound()
    }

    return (
        <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                <BackButton />

                <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h1 className="text-2xl font-bold sm:text-3xl">{user.name}&apos;s Posts</h1>

                    <div className="mt-3 space-y-1 text-sm text-slate-600 sm:text-base">
                        <p>
                            <span className="font-medium text-slate-800">Email:</span> {user.email}
                        </p>
                        <p>
                            <span className="font-medium text-slate-800">Company:</span> {user.company.name}
                        </p>
                    </div>
                </div>

                <div className="mt-8">
                    <PostList posts={posts} userId={userId} />
                </div>
            </div>
        </main>
    )
}
