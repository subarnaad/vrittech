import { create } from "zustand"
import { Post } from "@/src/types/task3/post"

interface PostsStore {
    postsByUserId: Record<number, Post[]>
    setPosts: (userId: number, apiPosts: Post[]) => void
    addPost: (userId: number, title: string, body: string) => void
}



function getLocalStorageKey(userId: number) {
    return `user-posts-${userId}`
}

function loadLocalPosts(userId: number): Post[] {
    if (typeof window === "undefined") {
        return []
    }
    const savedPosts = localStorage.getItem(getLocalStorageKey(userId))
    if (!savedPosts) {
        return []
    }
    try {
        return JSON.parse(savedPosts) as Post[]
    } catch {
        return []
    }
}

function saveLocalPosts(userId: number, posts: Post[]) {
    if (typeof window === "undefined") {
        return
    }
    localStorage.setItem(getLocalStorageKey(userId), JSON.stringify(posts))
}

export const usePostsStore = create<PostsStore>((set, get) => ({
    postsByUserId: {},
    setPosts: (userId, apiPosts) => {
        const localPosts = loadLocalPosts(userId)
        const mergedPosts = [...localPosts, ...apiPosts]
        set((state) => ({
            postsByUserId: {
                ...state.postsByUserId,
                [userId]: mergedPosts,
            },
        }))
    },

    addPost: (userId, title, body) => {
        const currentPosts = get().postsByUserId[userId] || []
        const localPosts = loadLocalPosts(userId)
        const newPost: Post = {
            userId,
            postId: Date.now(),
            title,
            body,
        }
        const updatedLocalPosts = [newPost, ...localPosts]
        const updatedAllPosts = [newPost, ...currentPosts]
        saveLocalPosts(userId, updatedLocalPosts)
        set((state) => ({
            postsByUserId: {
                ...state.postsByUserId,
                [userId]: updatedAllPosts,
            },
        }))
    },
}))