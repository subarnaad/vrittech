import { create } from "zustand"
import { User } from "@/src/types/task3/user"

interface UsersState {
    users: User[]
    setUsers: (users: User[]) => void
}

export const useUsersStore = create<UsersState>((set) => ({
    users: [],
    setUsers: (users) => set({ users }),
}))