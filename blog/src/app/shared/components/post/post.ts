export interface Post{
    postId?: number,
    title: string,
    data: string,
    image: string,
    author: string,
    tags: Tags,
    description: string
}
export interface Tag{
    id?: number,
    title?: Tags
}
export enum Tags{
    Philosophy = 'philosophy',
    Love = 'love',
    Journey = 'journey'
}

    
