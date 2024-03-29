import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CityName, SortOptions } from '../../../const';
import { Nullable } from 'vitest';

type AppData = {
  activeCity: CityName;
  sortOption: SortOptions;
  hoverOnCardId: Nullable<string>;
}

const initialState:AppData = {
  activeCity: CityName.Paris,
  sortOption: SortOptions.POPULAR,
  hoverOnCardId: null,
};

export const appData = createSlice({
  name: 'appData',
  initialState,
  reducers: {
    setActiveCity: (state, action: PayloadAction<CityName>) => {
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
