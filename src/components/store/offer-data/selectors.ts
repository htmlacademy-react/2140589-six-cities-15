import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '..';
import { MAX_COMMENTS_LENGTH, MAX_NEARBY_CITIES } from '../../../const';

type OfferState = Pick<RootState, 'offerData'>;

export const getComments = createSelector((state: OfferState) => state.offerData.comments,
  (comments) => comments.slice(0, MAX_COMMENTS_LENGTH)
);
export const getNearbyOffers = createSelector((state: OfferState) => state.offerData.nearbyOffers,
  (nearbyOffers) => nearbyOffers.slice(0, MAX_NEARBY_CITIES)
);
export const getOfferDetail = (state: OfferState) => state.offerData.offerDetail;
export const getOfferDetailFetched = (state: OfferState) => state.offerData.offerDetailFetched;
export const getOffers = (state: OfferState) => state.offerData.offers;
export const getStatus = (state: OfferState) => state.offerData.status;
export const getFavoriteOffers = (state: OfferState) => state.offerData.favoriteOffers;
export const getFavoriteStatus = (state: OfferState) => state.offerData.favoriteFetched;
