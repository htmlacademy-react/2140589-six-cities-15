import { AxiosInstance } from 'axios';
import { OfferCardType } from '../types/offer';
import { APIRoutes } from '../../const';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchOffersAction = createAsyncThunk<OfferCardType, undefined, {
  extra: AxiosInstance;
}>(
  'data/fetchOffersAction',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<OfferCardType>(APIRoutes.Offers);
    return data;
  },
);
