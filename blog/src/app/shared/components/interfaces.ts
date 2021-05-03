export interface User{
    email: string,
    password: string,
    returnSecureToken?: boolean
}

export interface Post{
    id?: number,
    title: string,
    text: string,
    author?: string,
    date: Date
}