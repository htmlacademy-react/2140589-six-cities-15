import { combineReducers } from '@reduxjs/toolkit';
import { appData } from './app-data/slice';
import { authData } from './auth-data/slice';
import { offerData } from './offer-data/slice';

export const rootReducers = combineReducers({
  appData: appData.reducer,
  authData: authData.reducer,
  offerData: offerData.reducer,
});
