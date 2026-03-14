"use client"

import { useState } from "react"
import { usePostsStore } from "@/src/store/post.store"
import { postSchema, AddPostFormData } from '@/src/schema/post.schema'

interface AddPostFormProps {
    userId: number
}

export default function AddPostForm({ userId }: AddPostFormProps) {
    const { addPost } = usePostsStore()
    const [formData, setFormData] = useState<AddPostFormData>({
        title: "",
        body: "",
    })
    const [errors, setErrors] = useState<Partial<Record<keyof AddPostFormData, string>>>({})
    const [isSubmitting, setIsSubmitting] = useState(false)
    const handleChange = (field: keyof AddPostFormData, value: string) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
        if (errors[field]) {
            setErrors((prev) => ({
                ...prev,
                [field]: "",
            }))
        }
    }

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        setIsSubmitting(true)
        const validationResult = postSchema.safeParse(formData)
        if (!validationResult.success) {
            const fieldErrors = validationResult.error.flatten().fieldErrors
            setErrors({
                title: fieldErrors.title?.[0] || "",
                body: fieldErrors.body?.[0] || "",
            })

            setIsSubmitting(false)
            return
        }
        addPost(userId, validationResult.data.title, validationResult.data.body)
        setFormData({
            title: "",
            body: "",
        })
        setErrors({})
        setIsSubmitting(false)
    }

    return (
        <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5">
                <h2 className="text-xl font-semibold text-slate-900 sm:text-2xl">Add New Post</h2>

            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="title" className="mb-2 block text-sm font-medium text-slate-700">
                        Title
                    </label>
                    <input
                        id="title"
                        type="text"
                        value={formData.title}
                        onChange={(e) => handleChange("title", e.target.value)}
                        placeholder="Enter post title"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500"
                    />

                    {errors.title && (
                        <p className="mt-2 text-sm text-red-600">{errors.title}</p>
                    )}
                </div>

                <div>
                    <label htmlFor="body" className="mb-2 block text-sm font-medium text-slate-700">
                        Body
                    </label>

                    <textarea
                        id="body"
                        rows={5}
                        value={formData.body}
                        onChange={(e) => handleChange("body", e.target.value)}
                        placeholder="Enter post body"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500"
                    />
                    {errors.body && (
                        <p className="mt-2 text-sm text-red-600">{errors.body}</p>
                    )}
                </div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {isSubmitting ? "Submitting..." : "Add Post"}
                </button>
            </form>
        </section>
    )
}