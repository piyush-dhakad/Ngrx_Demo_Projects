import * as postActions from "./post.action";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import { Observable, catchError, map, of, switchMap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Post } from "./modle";
@Injectable()
export class PostEffect {
    constructor(private Action$:Actions, private http: HttpClient){}
    loadPosts = createEffect(()=>
        this.Action$.pipe(
            ofType(postActions.loadPost),
            switchMap(()=>{
                return this.getPost().pipe(
                    map((res)=>{
                        return postActions.loadSuccessPost({posts:res})
                    }),
                    catchError((err)=>{return of(postActions.loadErrorPost({errorMessage:'something went wrong while loading posts...'}))})
                )
            })
        )
    );
    addPosteffect = createEffect(()=>
        this.Action$.pipe(
            ofType(postActions.addPost),
            switchMap((props)=>{
                return this.addPost(props.post).pipe(
                    map((res)=>{
                        return postActions.addSuccessPost({posts:res})
                    }),
                    catchError((err)=>{return of(postActions.loadErrorPost({errorMessage:'something went wrong while loading posts...'}))})
                )
            })
        )
    );
    // addPosteffect = createEffect(()=>{
    //     return this.Action$.pipe(
    //         ofType(postActions.addPost),
    //         switchMap((props)=>{
    //             return this.addPost(props.post).pipe(
    //                 map((res)=>{
    //                     postActions.addSuccessPost({posts:res}),
    //                     catchError((err)=>{return of(postActions.loadErrorPost({errorMessage:'something went wrong while loading posts...'}))})
    //                 })
    //             )
    //         })
    //     )
    // })
    getPost():Observable<Post[]> {
        return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    }
    addPost(parem:Post):Observable<Post> {
        return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts',parem)
    }
}