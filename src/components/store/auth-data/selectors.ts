import { RootState } from '..';

type AuthState = Pick<RootState, 'authData'>

export const getAuthStatus = (state:AuthState) => state.authData.authStatus;
export const getUserAuthData = (state:AuthState) => state.authData.userAuthData;
export const getUserStatus = (state:AuthState) => state.authData.userStatus;
