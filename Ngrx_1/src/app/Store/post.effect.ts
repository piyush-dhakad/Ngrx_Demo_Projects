import { Action, Store } from "@ngrx/store";
import * as postActions from "./post.action";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { catchError, map, of, switchMap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { AppState, Post } from "./app.state";
@Injectable()
export class PostEffect {
    constructor(private Action$:Actions, private http: HttpClient){
    }
    postEffect$ = createEffect(()=>
        this.Action$.pipe(
            ofType(postActions.loadPost),
            switchMap(()=> 
                this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(
                    map((res)=> postActions.loadSuccessPost({posts:res})),
                    catchError((error)=>of(postActions.loadErrorPost({errorMessage:"faild to load"})))
            )
        )
    ));
}