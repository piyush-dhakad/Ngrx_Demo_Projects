import { createReducer, on, props } from "@ngrx/store";
import * as postActions from "./post.action";
import { Post, postsState } from "./modle";

export const initialPostState:postsState = {
    posts:[],
    error:'',
    post:{
        id:0,
        userId:0,
        title:'',
        body:''
    }
}
export const postReducer = createReducer(
    initialPostState,
    on(postActions.loadSuccessPost,(state,props)=>({...state,posts:props.posts,error:''})),
    on(postActions.loadErrorPost,(state,props)=>({...state,error:props.errorMessage}))
)
export const addPostReducer = createReducer(
    initialPostState,
    on(postActions.addSuccessPost,(state,props)=>({...state}))
)