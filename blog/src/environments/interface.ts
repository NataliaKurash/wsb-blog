export interface Environment{
    apiKey: string,
    production: boolean,
    fbDBUrl: string
}

export interface FirebaseResponse{
    idToken: string,
    expiresIn: string
}