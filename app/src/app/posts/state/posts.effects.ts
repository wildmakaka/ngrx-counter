import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import {
  addPost,
  addPostSuccess,
  loadPosts,
  loadPostsSuccess,
} from 'src/app/posts/state/posts.actions';
import { PostsService } from 'src/app/services/posts.services';

@Injectable()
export class PostsEffects {
  constructor(private actions$: Actions, private postsService: PostsService) {}

  // loadPosts$ = createEffect(
  //   () => {
  //     return this.actions$.pipe(
  //       ofType(loadPosts),
  //       mergeMap((action) => {
  //         return this.postsService.getPosts().pipe(
  //           map((data) => {
  //             console.log(data);
  //           })
  //         );
  //       })
  //     );
  //   },
  //   { dispatch: false }
  // );

  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPosts),
      mergeMap((action) => {
        return this.postsService.getPosts().pipe(
          map((posts) => {
            return loadPostsSuccess({ posts });
          })
        );
      })
    );
  });

  addPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addPost),
      mergeMap((action) => {
        return this.postsService.addPost(action.post).pipe(
          map((data) => {
            const post = { ...action.post, id: data.name };
            return addPostSuccess({ post });
          })
        );
      })
    );
  });
} // End of class;
