import { Component } from '@angular/core';
import * as postActions from './Store/post.action'
import { Store } from '@ngrx/store';
import { selectProdcutSelector } from './Store/post.selector';
import { Post } from './Store/modle';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ngrx_1';
  Posts:Post[] = [];
  constructor(private store:Store){
    this.store.dispatch(postActions.loadPost());
   this.store.select(selectProdcutSelector).subscribe((res)=>{
    this.Posts = res.slice(0,10);
   })
  }
}
