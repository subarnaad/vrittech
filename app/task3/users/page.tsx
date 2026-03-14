import { fetchUsers } from "@/src/lib/api"
import UserList from "@/src/components/task3/users/UserList"
import BackButton from "@/src/components/task3/common/BackButton"

export default async function HomePage() {
    const users = await fetchUsers()

    return (
        <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
            <div >
                <div className="mb-8 ">
                    <BackButton />
                    <h1 className="text-3xl font-bold sm:text-4xl justify-self-center">User Dashboard</h1>
                    <p className="mt-2 text-sm text-slate-600 sm:text-base justify-self-center">
                        list of user and their Posts
                    </p>
                </div>
            </div>
            <UserList users={users} />
        </main>
    )
}