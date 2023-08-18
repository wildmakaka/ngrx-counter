import { AuthReducer } from 'src/app/auth/state/auth.reducer';
import { AUTH_STATE_NAME } from 'src/app/auth/state/auth.selector';
import { AuthState } from 'src/app/auth/state/auth.state';
import { SharedReducer } from 'src/app/store/shared/shared.reducer';
import { SHARED_STATE_NAME } from 'src/app/store/shared/shared.selector';
import { SharedState } from 'src/app/store/shared/shared.state';

export interface AppState {
  [SHARED_STATE_NAME]: SharedState;
  [AUTH_STATE_NAME]: AuthState;
}

export const appReducer = {
  [SHARED_STATE_NAME]: SharedReducer,
  [AUTH_STATE_NAME]: AuthReducer,
};
