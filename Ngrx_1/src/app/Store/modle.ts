export interface Post {
    userId:number,
    id: number,
    title: string,
    body: string
}

export interface postsState {
    posts:Post[],
    error:string
    post:Post
}