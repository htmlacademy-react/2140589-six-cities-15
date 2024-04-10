import { AppState } from './types';

export const getActiveCity = (state: AppState) => state.appData.activeCity;
export const getHoverOnCardId = (state: AppState) => state.appData.hoverOnCardId;
export const getSortOption = (state: AppState) => state.appData.sortOption;
