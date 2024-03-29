import { AuthorizationStatus, CityName, SortOptions } from '../../const';
import { setActiveCity, setAuthStatus, setHoverOnCardId, setSortOption } from './actions';

import { createReducer } from '@reduxjs/toolkit';
import { fetchOffersAction, fetchPerOffer, fetchUser, loginUser, postComment } from '../services/api-actions';
import { OfferCardType } from '../types/offer';
import { UserAuthData } from '../types/auth';
import { Comments } from '../types/comments';

type AppState = {
  activeCity: CityName;
  offers: OfferCardType[];
  sortOption: SortOptions;
  hoverOnCardId: string | null;
  status: 'idle' | 'fetching' | 'succeed' | 'failed';
  authStatus: AuthorizationStatus;
  userStatus: 'idle' | 'fetching' | 'succeed' | 'failed';
  userAuthData: UserAuthData | null;
  offerDetail: OfferCardType | null;
  offerDetailFetched: 'idle' | 'fetching' | 'succeed' | 'failed';
  comments: Comments[];
  nearbyOffers: OfferCardType[];
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
  offerDetail: null,
  offerDetailFetched: 'idle',
  comments: [],
  nearbyOffers: [],
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
    .addCase(fetchPerOffer.rejected, (state) => {
      state.offerDetailFetched = 'failed';
    })
    .addCase(fetchPerOffer.pending, (state) => {
      state.offerDetailFetched = 'fetching';
    })
    .addCase(fetchPerOffer.fulfilled, (state, action) => {
      state.offerDetail = action.payload.offerDetail;
      state.comments = action.payload.comments;
      state.nearbyOffers = action.payload.nearbyOffers;
      state.offerDetailFetched = 'succeed';
    })
    .addCase(postComment.fulfilled, (state, action) => {
      state.comments.push(action.payload);
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
