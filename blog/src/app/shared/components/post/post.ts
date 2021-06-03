export interface Post{
    postId?: number,
    title: string,
    data: string,
    image: string,
    author: string,
    tag: Tags,
    description: string
}
export interface Tag{
    id?: number,
    title?: Tags,
}
export enum Tags{
    None = 'none',
    Philosophy = 'philosophy',
    Love = 'love',
    Journey = 'journey'
}

    
