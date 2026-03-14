interface UserSearchProps {
    value: string
    onChange: (value: string) => void
}

export default function UserSearch({ value, onChange }: UserSearchProps) {
    return (
        <div>
            <input
                id="user-search"
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder="Search by name or email..."
                className=" w-lg rounded-xl border border-slate-300 bg-white px-4 py-3 text-md outline-none flex justify-self-center shadow-xl/20"
            />
        </div>
    )
}