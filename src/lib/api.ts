import { API_BASE_URL } from "@/src/lib/constant"
import { Post } from "@/src/types/task3/post"
import { User } from "@/src/types/task3/user"

export async function fetchUsers(): Promise<User[]> {
    const response = await fetch(`${API_BASE_URL}/users`, {
        next: { revalidate: 60 },
    })
    if (!response.ok) {
        throw new Error("Failed to fetch users")
    }
    return response.json()
}

export async function fetchUserById(userId: number): Promise<User | null> {
    const response = await fetch(`${API_BASE_URL}/users/${userId}`, {
        cache: "no-store",
    })
    if (response.status === 404) {
        return null
    }
    if (!response.ok) {
        throw new Error("Failed to fetch user")
    }
    return response.json()
}

export async function fetchPostsByUserId(userId: number): Promise<Post[]> {
    const response = await fetch(`${API_BASE_URL}/posts?userId=${userId}`, {
        cache: "no-store",
    })
    // console.log('hħ', response)
    if (!response.ok) {
        throw new Error("Failed to fetch posts")
    }

    return response.json()
}