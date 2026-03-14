export interface Company {
    name: string
    catchPhrase: string
    bs: string
}

export interface User {
    id: number
    name: string
    email: string
    company: Company
}