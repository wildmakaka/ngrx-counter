import { createReducer } from '@ngrx/store';
import { initialState } from 'src/app/auth/state/auth.state';

const _authReducer = createReducer(initialState);

export function AuthReducer(state, action) {
  return _authReducer(state, action);
}
