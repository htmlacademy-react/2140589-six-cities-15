import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { rootReducers } from './root-reducers';

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
