import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/posts.model';
import { getPostById } from 'src/app/posts/state/posts.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent implements OnInit {
  post$: Observable<Post | null | undefined>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.post$ = this.store.select(getPostById);
  }
}
