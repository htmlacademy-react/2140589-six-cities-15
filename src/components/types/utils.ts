import { store } from '../store';

export type Nullable<T> = T | null;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
