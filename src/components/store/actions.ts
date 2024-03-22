import { createAction } from '@reduxjs/toolkit';
import { CityName, SortOptions } from '../../const';
import { OfferCardType } from '../types/offer';

export const setActiveCity = createAction<CityName>('setCity');
export const fetchOffers = createAction<OfferCardType[]>('fetchOffers');
export const setSortOption = createAction<SortOptions>('setSortOption');
export const setHoverOnCardId = createAction<string | null>('setHoverOnCardId');
