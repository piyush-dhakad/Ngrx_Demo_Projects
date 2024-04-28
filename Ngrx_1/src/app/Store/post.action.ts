import { createAction, props } from "@ngrx/store";
import { AppState, Post } from "./app.state";

export const loadPost =  createAction('[post] loadpost');
export const loadSuccessPost =  createAction('[post] SuccessPost',props<{posts:any}>());
export const loadErrorPost =  createAction('[post] ErrorPost',props<{errorMessage:string}>());