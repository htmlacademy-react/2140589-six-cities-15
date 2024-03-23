import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, CityName, SortOptions } from '../../const';

export const setActiveCity = createAction<CityName>('setCity');
export const setSortOption = createAction<SortOptions>('setSortOption');
export const setHoverOnCardId = createAction<string | null>('setHoverOnCardId');
export const setAuthStatus = createAction<AuthorizationStatus>('setAuthStatus');
