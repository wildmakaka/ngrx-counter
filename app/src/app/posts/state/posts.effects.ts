import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs';
import { loadPosts, loadPostsSuccess } from 'src/app/posts/state/posts.actions';
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
} // End of class;
