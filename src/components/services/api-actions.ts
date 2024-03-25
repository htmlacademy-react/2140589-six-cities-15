import { AxiosInstance } from 'axios';
import { OfferCardType } from '../types/offer';
import { APIRoutes } from '../../const';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserAuthData, UserCredentionals } from '../types/auth';
import { saveToken } from './token';
import { toast } from 'react-toastify';
import { Comments, NewComment } from '../types/comments';
import { RootState } from '../store';

export const fetchOffersAction = createAsyncThunk<OfferCardType[], undefined, {
  extra: AxiosInstance;
}>(
  'data/fetchOffersAction',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferCardType[]>(APIRoutes.Offers);
    return data;
  },
);

export const fetchPerOffer = createAsyncThunk<{offerDetail: OfferCardType; comments: Comments[]; nearbyOffers: OfferCardType[]}, string, {
  extra: AxiosInstance;
}>(
  'data/fetchPerOffer',
  async (offerId, { extra: api }) => {
    const { data:offerDetail } = await api.get<OfferCardType>(`${APIRoutes.Offers}/${offerId}`);
    const { data:comments } = await api.get<Comments[]>(`${APIRoutes.Comments}/${offerId}`);
    const { data:nearbyOffers } = await api.get<OfferCardType[]>(`${APIRoutes.Offers}/${offerId}/nearby`);
    return {offerDetail, comments, nearbyOffers};
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
    } catch (error: unknown) {
      const firstError: unknown = error.response.data.details[0].messages[0];
      const secondError: unknown = error.response.data.details[0].messages[1];
      const thirdError: unknown = error.response.data.details[0].messages[2];
      const fourthError: unknown = error.response.data.details[1].messages[0];
      const fifthError: unknown = error.response.data.details[1].messages[1];
      toast.error(firstError);
      toast.error(secondError);
      toast.error(thirdError);
      toast.error(fourthError);
      toast.error(fifthError);

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

export const postComment = createAsyncThunk<Comments, NewComment, {
    extra: AxiosInstance; state:RootState;
  }>(
    'data/postComment',
    async (newComment, { extra: api, getState }) => {
      try {
        const state = getState();
        const offerId = state.offerDetail?.id;
        const { data } = await api.post<Comments>(`${APIRoutes.Comments}/${offerId}`, newComment);
        return data;
      } catch (error: unknown) {
        toast.error(error.response.data.message);
        throw error;
      }
    });
