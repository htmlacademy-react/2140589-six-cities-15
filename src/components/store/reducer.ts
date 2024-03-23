import { AuthorizationStatus, CityName, SortOptions } from '../../const';
import { setActiveCity, setAuthStatus, setHoverOnCardId, setSortOption } from './actions';

import { createReducer } from '@reduxjs/toolkit';
import { fetchOffersAction, fetchUser, loginUser } from '../services/api-actions';
import { OfferCardType } from '../types/offer';
import { UserAuthData } from '../types/auth';

type AppState = {
  activeCity: CityName;
  offers: OfferCardType[];
  sortOption: SortOptions;
  hoverOnCardId: string | null;
  status: 'idle' | 'fetching' | 'succeed' | 'failed';
  authStatus: AuthorizationStatus;
  userStatus: 'idle' | 'fetching' | 'succeed' | 'failed';
  userAuthData: UserAuthData | null;
}

const initialState:AppState = {
  activeCity: CityName.Paris,
  offers: [],
  sortOption: SortOptions.POPULAR,
  hoverOnCardId: null,
  status: 'idle',
  authStatus: AuthorizationStatus.Unknown,
  userStatus: 'idle',
  userAuthData: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchOffersAction.pending, (state) => {
      state.status = 'fetching';
    })
    .addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.status = 'succeed';
    })
    .addCase(setSortOption, (state, action) => {
      state.sortOption = action.payload;
    })
    .addCase(setHoverOnCardId, (state, action) => {
      state.hoverOnCardId = action.payload;
    })
    .addCase(setAuthStatus, (state, action) => {
      state.authStatus = action.payload;
    })
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
    });
});
