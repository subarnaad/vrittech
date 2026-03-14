interface UserSearchProps {
    value: string
    onChange: (value: string) => void
}

export default function UserSearch({ value, onChange }: UserSearchProps) {
    return (
        <div>
            <label htmlFor="user-search" className="mb-2 block text-sm font-medium text-slate-700">
                Search Users
            </label>

            <input
                id="user-search"
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search by name or email..."
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-slate-500"
            />
        </div>
    )
}