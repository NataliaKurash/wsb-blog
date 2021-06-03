import { Tag } from "./post/post";

export interface User{
    email: string,
    password: string,
    returnSecureToken?: boolean
}

export interface Post{
    id?: string,
    title: string,
    text: string,
    author?: string,
    date: Date,
    image?: any,
    tag: Tag,
}

export interface FbCreateResponse{
    name: string
}