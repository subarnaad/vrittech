"use client"

import { useEffect, useMemo, useState } from "react"
import { Post } from "@/src/types/task3/post"
import PostCard from "@/src/components/task3/post/PostCard"
import AddPostForm from "@/src/components/task3/post/AddPostForm"
import Pagination from "@/src/components/task3/common/Pagination"
import { usePostsStore } from "@/src/store/post.store"

interface PostListProps {
    posts: Post[]
    userId: number
}

export default function PostList({ posts, userId }: PostListProps) {
    const { postsByUserId, setPosts } = usePostsStore()
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 5

    useEffect(() => {
        setPosts(userId, posts)
    }, [posts, setPosts, userId])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const allPosts = postsByUserId[userId] || []

    const sortedPosts = useMemo(() => {
        return [...allPosts].sort((a, b) => b.id - a.id)
    }, [allPosts])

    const totalPages = Math.ceil(sortedPosts.length / postsPerPage)

    const paginatedPosts = useMemo(() => {
        const startIndex = (currentPage - 1) * postsPerPage
        const endIndex = startIndex + postsPerPage

        return sortedPosts.slice(startIndex, endIndex)
    }, [currentPage, sortedPosts])
    // console.log('paginated post', paginatedPosts)

    useEffect(() => {
        if (currentPage > totalPages && totalPages > 0) {
            setCurrentPage(totalPages)
            return
        }
        if (currentPage !== 1) {
            setCurrentPage(1)
        }
    }, [sortedPosts.length, totalPages])

    return (
        <section className="space-y-6">
            <AddPostForm userId={userId} />

            <div className="space-y-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Posts</h2>

                    <div className="text-sm text-slate-500">
                        <span>
                            {sortedPosts.length} {sortedPosts.length === 1 ? "post" : "posts"}
                        </span>
                        {totalPages > 1 && (
                            <span className="ml-2">
                                • Page {currentPage} of {totalPages}
                            </span>
                        )}
                    </div>
                </div>
                {sortedPosts.length === 0 ? (
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                        <p className="text-slate-600">No posts found for this user.</p>
                    </div>
                ) : (
                    <>
                        <div className="grid gap-4">
                            {paginatedPosts.map((post) => (
                                <PostCard key={post.id} post={post} />
                            ))}
                        </div>
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    </>
                )}
            </div>
        </section>
    )
}


