import { CityName } from '../../const';
import { fetchOffers, setActiveCity } from './actions';
import { offers } from '../mocks/offers';
import { OfferCardType } from '../types/offer';
import { createReducer } from '@reduxjs/toolkit';

type AppState = {
  activeCity: CityName;
  offers: OfferCardType[];
}

const initialState:AppState = {
  activeCity: CityName.Paris,
  offers: offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchOffers, (state, action) => {
      state.offers = action.payload;
    });
});
