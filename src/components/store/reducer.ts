import { CityName, SortOptions } from '../../const';
import { fetchOffers, setActiveCity, setHoverOnCardId, setSortOption } from './actions';
import { offers } from '../mocks/offers';
import { OfferCardType } from '../types/offer';
import { createReducer } from '@reduxjs/toolkit';

type AppState = {
  activeCity: CityName;
  offers: OfferCardType[];
  sortOption: SortOptions;
  hoverOnCardId: string | null;
}

const initialState:AppState = {
  activeCity: CityName.Paris,
  offers: offers,
  sortOption: SortOptions.POPULAR,
  hoverOnCardId: null,
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
    })
    .addCase(setHoverOnCardId, (state, action) => {
      state.hoverOnCardId = action.payload;
    });
});
