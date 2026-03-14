"use client"

import { useEffect, useMemo, useState } from "react"
import UserCard from "@/src/components/task3/UserCard"
import UserSearch from "@/src/components/task3/UserSearch"
import { useUsersStore } from "@/src/store/users.store"
import { User } from "@/src/types/task3/user"

interface UserListProps {
    users: User[]
}

export default function UserList({ users }: UserListProps) {
    const [searchTerm, setSearchTerm] = useState("")
    const { setUsers } = useUsersStore()

    useEffect(() => {
        setUsers(users)
    }, [users, setUsers])

    const filteredUsers = useMemo(() => {
        const normalizedSearch = searchTerm.trim().toLowerCase()

        if (!normalizedSearch) {
            return users
        }

        return users.filter((user) => {
            const matchesName = user.name.toLowerCase().includes(normalizedSearch)
            const matchesEmail = user.email.toLowerCase().includes(normalizedSearch)
            return matchesName || matchesEmail
        })
    }, [searchTerm, users])

    return (
        <section className="space-y-6">
            <UserSearch value={searchTerm} onChange={setSearchTerm} />

            {filteredUsers.length === 0 ? (
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-slate-600">No users found.</p>
                </div>
            ) : (
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                    {filteredUsers.map((user) => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>
            )}
        </section>
    )
}