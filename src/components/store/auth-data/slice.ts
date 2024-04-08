import { AuthorizationStatus } from '../../../const';
import { fetchUser, loginUser, logoutUser } from '../../services/api-actions';
import { UserAuthData } from '../../types/auth';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Nullable } from '../../types/nullable';

type AuthData = {
  authStatus: AuthorizationStatus;
  userStatus: 'idle' | 'fetching' | 'succeed' | 'failed';
  userAuthData: Nullable<UserAuthData>;
}

const initialState:AuthData = {
  authStatus: AuthorizationStatus.Unknown,
  userStatus: 'idle',
  userAuthData: null,
};

export const authData = createSlice({
  name: 'authData',
  initialState,
  reducers: {
    setAuthStatus: (state, action: PayloadAction<AuthorizationStatus>) => {
      state.authStatus = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.userStatus = 'fetching';
      })
      .addCase(fetchUser.rejected, (state) => {
        state.userStatus = 'failed';
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.userAuthData = action.payload;
        state.authStatus = AuthorizationStatus.Auth;
        state.userStatus = 'succeed';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.userAuthData = action.payload;
        state.authStatus = AuthorizationStatus.Auth;
        state.userStatus = 'succeed';
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.authStatus = AuthorizationStatus.No_Auth;
      });
  },
});
