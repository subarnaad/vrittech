import { z } from "zod"

export const postSchema = z.object({
    title: z
        .string()
        .trim()
        .min(3, "Title must be at least 3 characters")
        .max(100, "Title must not exceed 100 characters"),
    body: z
        .string()
        .trim()
        .min(10, "Body must be at least 10 characters")
        .max(500, "Body must not exceed 500 characters"),
})

export type AddPostFormData = z.infer<typeof postSchema>