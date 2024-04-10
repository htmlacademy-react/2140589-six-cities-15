import { AuthState } from './types';

export const getAuthStatus = (state:AuthState) => state.authData.authStatus;
export const getUserAuthData = (state:AuthState) => state.authData.userAuthData;
export const getUserStatus = (state:AuthState) => state.authData.userStatus;
