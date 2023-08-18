import { createReducer, on } from '@ngrx/store';
import { setLoadingSpinner } from 'src/app/store/shared/shared.actions';
import { initialState } from 'src/app/store/shared/shared.state';

const _sharedReducer = createReducer(
  initialState,
  on(setLoadingSpinner, (state, action) => {
    return {
      state,
      showLoading: action.status,
    };
  })
);

export function SharedReducer(state, action) {
  return _sharedReducer(state, action);
}
