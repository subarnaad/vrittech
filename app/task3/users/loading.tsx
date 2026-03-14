export default function Loading() {
    const apiIsLoading = true

    return (
        <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold sm:text-4xl">User Dashboard</h1>
                </div>

                {apiIsLoading && (
                    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                        <p className="text-slate-700">Loading users...</p>
                    </div>
                )}
            </div>
        </main>
    )
}