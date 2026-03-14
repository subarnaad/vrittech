import Link from "next/link"

export default function NotFoundPage() {
    return (
        <main className="flex min-h-screen items-center justify-center px-4 py-8">
            <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
                <h1 className="text-3xl font-bold text-slate-900">404</h1>
                <p className="mt-3 text-slate-600">The page you are looking for does not exist.</p>

                <Link
                    href="/"
                    className="mt-6 inline-flex rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
                >
                    Go Back Home
                </Link>
            </div>
        </main>
    )
}