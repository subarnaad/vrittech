import { LOCAL_POSTS_KEY_PREFIX } from "@/src/lib/constant"
import { Post } from "@/src/types/task3/post"

function getStorageKey(userId: number) {
    return `${LOCAL_POSTS_KEY_PREFIX}${userId}`
}

export function getLocalPosts(userId: number): Post[] {
    if (typeof window === "undefined") return []

    try {
        const stored = localStorage.getItem(getStorageKey(userId))
        return stored ? JSON.parse(stored) : []
    } catch {
        return []
    }
}

export function saveLocalPosts(userId: number, posts: Post[]) {
    if (typeof window === "undefined") return

    try {
        localStorage.setItem(getStorageKey(userId), JSON.stringify(posts))
    } catch {
        // silently fail for now
    }
}

export function addLocalPost(userId: number, post: Post) {
    const existingPosts = getLocalPosts(userId)
    const updatedPosts = [post, ...existingPosts]
    saveLocalPosts(userId, updatedPosts)
    return updatedPosts
}