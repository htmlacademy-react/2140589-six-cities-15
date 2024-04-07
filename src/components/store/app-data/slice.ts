import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CityNames, SortOptions } from '../../../const';
import { Nullable } from 'vitest';

type AppData = {
  activeCity: CityNames;
  sortOption: SortOptions;
  hoverOnCardId: Nullable<string>;
}

const initialState:AppData = {
  activeCity: CityNames.Paris,
  sortOption: SortOptions.POPULAR,
  hoverOnCardId: null,
};

export const appData = createSlice({
  name: 'appData',
  initialState,
  reducers: {
    setActiveCity: (state, action: PayloadAction<CityNames>) => {
      state.activeCity = action.payload;
    },
    setSortOption: (state, action: PayloadAction<SortOptions>) => {
      state.sortOption = action.payload;
    },
    setHoverOnCardId: (state, action: PayloadAction<Nullable<string>>) => {
      state.hoverOnCardId = action.payload;
    },
  }
});
