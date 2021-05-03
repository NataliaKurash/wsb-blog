export interface Environment{
    apiKey: string,
    production: boolean
}

export interface FirebaseResponse{
    idToken: string,
    expiresIn: string
}