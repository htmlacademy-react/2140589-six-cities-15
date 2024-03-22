import { createAction } from '@reduxjs/toolkit';
import { CityName, SortOptions } from '../../const';

export const setActiveCity = createAction<CityName>('setCity');
export const setSortOption = createAction<SortOptions>('setSortOption');
export const setHoverOnCardId = createAction<string | null>('setHoverOnCardId');
