import { Component } from '@angular/core';
import * as postActions from './Store/post.action'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { postState } from './Store/post.reducer';
import { selectProdcutSelector } from './Store/post.selector';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ngrx_1';
  Post$:Observable<any>
  constructor(private store:Store){
    this.store.dispatch(postActions.loadPost());
    this.Post$ = this.store.select(selectProdcutSelector)
  }
}
