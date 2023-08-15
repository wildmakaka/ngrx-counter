import { counterReducer } from 'src/app/counter/counter/state/counter.reducer';
import { CounterState } from 'src/app/counter/counter/state/counter.state';
import { postsReducer } from 'src/app/posts/state/posts.reducer';
import { PostsState } from 'src/app/posts/state/posts.state';

export interface AppState {
  counter: CounterState;
  posts: PostsState;
}

export const appReducer = {
  counter: counterReducer,
  posts: postsReducer,
};
