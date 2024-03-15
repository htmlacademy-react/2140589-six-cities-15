import { createAction } from '@reduxjs/toolkit';
import { CityName } from '../../const';
import { OfferCardType } from '../types/offer';

export const setActiveCity = createAction<CityName>('setCity');
export const fetchOffers = createAction<OfferCardType[]>('fetchOffers');
