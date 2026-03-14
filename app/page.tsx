import Link from "next/link"
import { ArrowRight } from "lucide-react"

const tasks = [
  {
    id: 1,
    title: "Task 1",
    description: " Feathure",
    href: "/task1",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Stats",
    href: "/task2",
  },
  {
    id: 3,
    title: "Task 3",
    description: "User & Posts Dashboard",
    href: "/task3/users",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-linear-to-br from-[#fff7f5] via-white to-[#fef2f2] px-6 py-10 sm:px-10 lg:px-16 ">
      <div className=" mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl flex-col justify-center ">
        <div className="mb-12 text-center">
          <p className="mb-3 inline-flex rounded-full border border-red-200 bg-white px-4 py-1 text-sm font-medium text-red-600 shadow-sm">
            Hello Vrittech
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
            Task Galery
          </h1>

        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {tasks.map((task) => (
            <Link
              key={task.id}
              href={task.href}
              className="group relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-6  backdrop-blur-sm transition-all duration-300 inset-shadow-sm inset-shadow-red-500 hover:-translate-y-2 hover:shadow-2xl sm:p-8"
            >
              <div className="absolute inset-0 bg-linear-to-br from-red-50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10 flex h-full flex-col justify-between">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-lg font-bold text-white shadow-md">
                    {task.id}
                  </div>

                  <h2 className="text-2xl font-bold text-[#1A1A1A] sm:text-3xl">
                    {task.title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
                    {task.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-wide text-red-600">
                    Open Task
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}