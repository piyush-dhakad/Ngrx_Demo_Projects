export interface Post {
    userId:number,
    id: number,
    title: string,
    body: string
}
export interface AppState {
    postsState:Post[],
    error:string
}