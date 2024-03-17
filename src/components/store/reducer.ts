import { CityName, SortOptions } from '../../const';
import { fetchOffers, setActiveCity, setSortOption } from './actions';
import { offers } from '../mocks/offers';
import { OfferCardType } from '../types/offer';
import { createReducer } from '@reduxjs/toolkit';

type AppState = {
  activeCity: CityName;
  offers: OfferCardType[];
  sortOption: SortOptions;
}

const initialState:AppState = {
  activeCity: CityName.Paris,
  offers: offers,
  sortOption: SortOptions.POPULAR,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setSortOption, (state, action) => {
      state.sortOption = action.payload;
    });
});
