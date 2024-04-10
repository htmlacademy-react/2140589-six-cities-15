import { AxiosError, AxiosInstance } from 'axios';
import { OfferCardType } from '../types/offer';
import { APIRoutes } from '../const';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserAuthData, UserCredentionals } from '../types/auth';
import { dropToken, saveToken } from './token';
import { toast } from 'react-toastify';
import { Comments, NewComment } from '../types/comments';
import { RootState } from '../types/root-state';

type MessageLoginErrorMessage = {
  errorType: string;
  message: string;
  details: [{
    property: string;
    value: string;
    messages: string[];
  }];
}

function getLoginUserErrorMessage(error: unknown) {
  if (error instanceof AxiosError) {
    const errorMessage = error.response?.data as MessageLoginErrorMessage;
    const result = errorMessage.details.reduce((acc: string[], current) => {
      current.messages.forEach((item) => acc.push(item));
      return acc;
    }, []);
    return result;
  }
}

export const fetchOffersAction = createAsyncThunk<OfferCardType[], undefined, {
  extra: AxiosInstance;
}>(
  'data/fetchOffersAction',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferCardType[]>(APIRoutes.Offers);
    return data;
  },
);

export const fetchFavoriteOffers = createAsyncThunk<OfferCardType[], undefined, {
  extra: AxiosInstance;
}>(
  'data/fetchFavoriteOffers',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<OfferCardType[]>(APIRoutes.Favorite);
    return data;
  },
);

export const fetchPerOffer = createAsyncThunk<{ offerDetail: OfferCardType; comments: Comments[]; nearbyOffers: OfferCardType[] }, string, {
  extra: AxiosInstance;
}>(
  'data/fetchPerOffer',
  async (offerId, { extra: api }) => {
    const { data: offerDetail } = await api.get<OfferCardType>(`${APIRoutes.Offers}/${offerId}`);
    const { data: comments } = await api.get<Comments[]>(`${APIRoutes.Comments}/${offerId}`);
    const { data: nearbyOffers } = await api.get<OfferCardType[]>(`${APIRoutes.Offers}/${offerId}/nearby`);
    return { offerDetail, comments, nearbyOffers };
  },
);

export const loginUser = createAsyncThunk<UserAuthData, UserCredentionals, {
  extra: AxiosInstance;
}>(
  'data/loginUser',
  async (userCredentionals, { extra: api, dispatch }) => {
    try {
      const { data } = await api.post<UserAuthData>(APIRoutes.Login, userCredentionals);
      dispatch(fetchFavoriteOffers());
      saveToken(data.token);
      return data;
    } catch (error: unknown) {
      toast.error(getLoginUserErrorMessage(error)?.join());
      throw (error);
    }
  },
);

export const fetchUser = createAsyncThunk<UserAuthData, undefined, {
  extra: AxiosInstance;
}>(
  'data/fetchUser',
  async (_arg, { extra: api, dispatch }) => {
    const { data } = await api.get<UserAuthData>(APIRoutes.Login);
    dispatch(fetchFavoriteOffers());
    saveToken(data.token);
    return data;
  });

export const postComment = createAsyncThunk<Comments, NewComment, {
  extra: AxiosInstance; state: RootState;
}>(
  'data/postComment',
  async (newComment, { extra: api, getState }) => {
    try {
      const state = getState();
      const offerId = state.offerData.offerDetail?.id;
      const { data } = await api.post<Comments>(`${APIRoutes.Comments}/${offerId}`, newComment);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error.message;
        toast.error(errorMessage);
      }
      throw error;
    }
  });

export const toggleFavoriteOffers = createAsyncThunk<OfferCardType, OfferCardType, {
  extra: AxiosInstance;
}>(
  'data/toggleFavoriteOffers',
  async (offer, { extra: api }) => {
    const changeFavoriteStatus = offer.isFavorite ? 0 : 1;
    const { data } = await api.post<OfferCardType>(`${APIRoutes.Favorite}/${offer.id}/${changeFavoriteStatus}`);
    return data;
  },
);

export const logoutUser = createAsyncThunk<void, undefined, {
  extra: AxiosInstance;
}>(
  'data/logoutUser',
  async (_, { extra: api, dispatch }) => {
    await api.delete(APIRoutes.Logout);
    dropToken();
    dispatch(fetchOffersAction());
  },
);
