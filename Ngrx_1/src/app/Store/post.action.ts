import { createAction, props } from "@ngrx/store";
import { Post } from "./modle";

export const loadPost =  createAction('[post] loadpost');
export const loadSuccessPost =  createAction('[post] SuccessPost',props<{posts:Post[]}>());
export const loadErrorPost =  createAction('[post] ErrorPost',props<{errorMessage:string}>());

export const addPost =  createAction('[post] addpost',props<{post:Post}>());
export const addSuccessPost =  createAction('[post] addSuccessPost',props<{posts:Post}>());
