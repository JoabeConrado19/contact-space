export interface IContactRequest {
    name: string
    email: string
    telephone: string
}

export interface IContactResponse {
    id: number
    name: string
    email: string
    telephone: string
    createdAt: Date
    updatedAt: Date
}