import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from '../Store/modle';
import * as postActions from '../Store/post.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  
  constructor(private store:Store){
  }
  addPost(event: any){
    let parem:Post = {
      userId: 1,
      id: 2,
      title: event,
      body: 'one two three'
    }
    this.store.dispatch(postActions.addPost({post:parem}))
    this.store.dispatch(postActions.loadPost())
  }

}
