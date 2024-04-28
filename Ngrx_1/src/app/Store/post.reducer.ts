import { createReducer, on } from "@ngrx/store";
import { AppState, Post } from "./app.state";
import * as postActions from "./post.action";

export interface postState {
    posts:Post[],
    error:string | null
}
export const initialPostState:postState = {
    posts:[],
    error:null
}
export const postReducer = createReducer(
    initialPostState,
    on(postActions.loadSuccessPost,(state,props)=>({...state,posts:props.posts,error:null})),
    on(postActions.loadErrorPost,(state,props)=>({...state,error:props.errorMessage}))
)