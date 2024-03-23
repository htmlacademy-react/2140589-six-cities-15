import { AxiosInstance } from 'axios';
import { OfferCardType } from '../types/offer';
import { APIRoutes } from '../../const';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserAuthData, UserCredentionals } from '../types/auth';
import { saveToken } from './token';
import { toast } from 'react-toastify';

export const fetchOffersAction = createAsyncThunk<OfferCardType[], undefined, {
  extra: AxiosInstance;
}>(
  'data/fetchOffersAction',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferCardType[]>(APIRoutes.Offers);
    return data;
  },
);

export const loginUser = createAsyncThunk<UserAuthData, UserCredentionals, {
  extra: AxiosInstance;
}>(
  'data/loginUser',
  async (userCredentionals, { extra: api }) => {
    try {
      const { data } = await api.post<UserAuthData>(APIRoutes.Login, userCredentionals);
      saveToken(data.token);
      return data;
    } catch (error) {
      toast.error('Ошибка, введите валидный email / пароль');
      throw (error);
    }
  },
);

export const fetchUser = createAsyncThunk<UserAuthData, undefined, {
  extra: AxiosInstance;
}>(
  'data/fetchUser',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserAuthData>(APIRoutes.Login);
    saveToken(data.token);
    return data;
  });
