import { createSlice } from '@reduxjs/toolkit';
import { Comments } from '../../types/comments';
import { OfferCardType } from '../../types/offer';
import { Nullable } from '../../types/utils';
import { fetchOffersAction, fetchPerOffer, postComment } from '../../services/api-actions';

type OfferState = {
  offers: OfferCardType[];
  status: 'idle' | 'fetching' | 'succeed' | 'failed';
  offerDetail: Nullable<OfferCardType>;
  offerDetailFetched: 'idle' | 'fetching' | 'succeed' | 'failed';
  comments: Comments[];
  nearbyOffers: OfferCardType[];
}

const initialState:OfferState = {
  offers: [],
  status: 'idle',
  offerDetail: null,
  offerDetailFetched: 'idle',
  comments: [],
  nearbyOffers: [],
};

export const offerData = createSlice({
  name: 'offerData',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
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
      });
  },
});
