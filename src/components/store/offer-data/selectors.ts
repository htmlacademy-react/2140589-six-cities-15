import { RootState } from '..';

type OfferState = Pick<RootState, 'offerData'>;

export const getComments = (state: OfferState) => state.offerData.comments;
export const getNearbyOffers = (state: OfferState) => state.offerData.nearbyOffers;
export const getOfferDetail = (state: OfferState) => state.offerData.offerDetail;
export const getOfferDetailFetched = (state: OfferState) => state.offerData.offerDetailFetched;
export const getOffers = (state: OfferState) => state.offerData.offers;
export const getStatus = (state: OfferState) => state.offerData.status;

