"use client"

import BackButton from "@/src/components/task3/common/BackButton"

export default function ErrorPage({
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                <BackButton />

                <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-6 shadow-sm">
                    <p className="font-medium text-red-700">Something went wrong</p>

                    <button
                        onClick={reset}
                        className="mt-4 rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        </main>
    )
}