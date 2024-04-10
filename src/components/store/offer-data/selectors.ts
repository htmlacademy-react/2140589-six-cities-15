import { createSelector } from '@reduxjs/toolkit';
import { MAX_NEARBY_CITIES } from '../../../const';
import { OfferState } from './types';

export const getComments = createSelector((state: OfferState) => state.offerData.comments,
  (comments) => comments.toSorted((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())
);
export const getNearbyOffers = createSelector((state: OfferState) => state.offerData.nearbyOffers,
  (nearbyOffers) => nearbyOffers.slice(0, MAX_NEARBY_CITIES)
);
export const getOfferDetail = (state: OfferState) => state.offerData.offerDetail;
export const getOfferDetailFetched = (state: OfferState) => state.offerData.offerDetailFetched;
export const getOffers = (state: OfferState) => state.offerData.offers;
export const getStatus = (state: OfferState) => state.offerData.status;
export const getFavoriteOffers = (state: OfferState) => state.offerData.favoriteOffers;
export const getCommentsStatus = (state: OfferState) => state.offerData.postCommentStatus;
