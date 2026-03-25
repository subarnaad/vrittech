import BackButton from "@/src/components/task3/common/BackButton"

export default function Loading() {
    const apiIsLoading = true

    return (
        <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                <BackButton />
                <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h1 className="text-2xl font-bold sm:text-3xl">User Posts</h1>
                </div>
                {apiIsLoading && (
                    <div className="mt-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                        <p className="text-slate-700">Loading users post...</p>
                    </div>
                )}
            </div>
        </main>
    )
}