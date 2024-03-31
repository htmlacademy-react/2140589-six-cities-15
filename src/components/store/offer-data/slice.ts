import { createSlice } from '@reduxjs/toolkit';
import { Comments } from '../../types/comments';
import { OfferCardType } from '../../types/offer';
import { Nullable } from '../../types/utils';
import { fetchFavoriteOffers, fetchOffersAction, fetchPerOffer, postComment, toggleFavoriteOffers } from '../../services/api-actions';

type OfferState = {
  offers: OfferCardType[];
  favoriteOffers: OfferCardType[];
  favoriteFetched: 'idle' | 'fetching' | 'succeed' | 'failed';
  status: 'idle' | 'fetching' | 'succeed' | 'failed';
  offerDetail: Nullable<OfferCardType>;
  offerDetailFetched: 'idle' | 'fetching' | 'succeed' | 'failed';
  comments: Comments[];
  nearbyOffers: OfferCardType[];
}

const initialState:OfferState = {
  offers: [],
  favoriteOffers: [],
  favoriteFetched: 'idle',
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
      .addCase(fetchFavoriteOffers.pending, (state) => {
        state.favoriteFetched = 'fetching';
      })
      .addCase(fetchFavoriteOffers.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
        state.favoriteFetched = 'succeed';
      })
      .addCase(toggleFavoriteOffers.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        let offerIndex = state.offers.findIndex((offer) => offer.id === updatedOffer.id);
        if (offerIndex > -1) {
          state.offers[offerIndex] = updatedOffer;
        }
        if (updatedOffer.isFavorite) {
          state.favoriteOffers.push(updatedOffer);
        } else {
          offerIndex = state.favoriteOffers.findIndex((offer) => offer.id === updatedOffer.id);
          state.favoriteOffers.splice(offerIndex, 1);
        }
        offerIndex = state.nearbyOffers.findIndex((offer) => offer.id === updatedOffer.id);
        if (offerIndex > -1) {
          state.nearbyOffers[offerIndex] = updatedOffer;
        }
        if(state.offerDetail?.id) {
          state.offerDetail.isFavorite = updatedOffer.isFavorite;
        }
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
