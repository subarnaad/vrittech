
import { Post } from "@/src/types/task3/post"

export const API_BASE_URL = "https://jsonplaceholder.typicode.com"

export const POSTS_PER_PAGE = 5

export const LOCAL_POSTS_KEY_PREFIX = "user_posts_"

export async function fetchPostsByUserId(userId: number): Promise<Post[]> {
    const response = await fetch(`${API_BASE_URL}/posts?userId=${userId}`, {
        next: { revalidate: 300 },
    })

    if (!response.ok) {
        throw new Error("Failed to fetch posts")
    }

    return response.json()
}