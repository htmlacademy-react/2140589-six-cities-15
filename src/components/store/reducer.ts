import { CityName, SortOptions } from '../../const';
import { setActiveCity, setHoverOnCardId, setSortOption } from './actions';

import { createReducer } from '@reduxjs/toolkit';
import { fetchOffersAction } from '../services/api-actions';
import { OfferCardType } from '../types/offer';

type AppState = {
  activeCity: CityName;
  offers: OfferCardType[];
  sortOption: SortOptions;
  hoverOnCardId: string | null;
  status: 'idle' | 'fetching' | 'succeed' | 'failed';
}

const initialState:AppState = {
  activeCity: CityName.Paris,
  offers: [],
  sortOption: SortOptions.POPULAR,
  hoverOnCardId: null,
  status: 'idle',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchOffersAction.pending, (state) => {
      state.status = 'fetching';
    })
    .addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.status = 'succeed';
    })
    .addCase(setSortOption, (state, action) => {
      state.sortOption = action.payload;
    })
    .addCase(setHoverOnCardId, (state, action) => {
      state.hoverOnCardId = action.payload;
    });
});
