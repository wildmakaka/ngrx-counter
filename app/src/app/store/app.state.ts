import { SharedReducer } from 'src/app/store/shared/shared.reducer';
import { SHARED_STATE_NAME } from 'src/app/store/shared/shared.selector';
import { SharedState } from 'src/app/store/shared/shared.state';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
};
