import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { getToken } from './token';
import browserHistory from '../../browser-history';
import { AppRoutes, ERR_NETWORK, ErrorTypes } from '../../const';

const BACKEND_URL = 'https://15.design.htmlacademy.pro/six-cities';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error.response?.status === ErrorTypes.Page_Not_Found) {
        browserHistory.push(AppRoutes.Page_Error);
        throw error;
      }
      if (error.code === ERR_NETWORK) {
        browserHistory.push(AppRoutes.Server_Error);
        throw error;
      }
      throw error;
    }
  );
  return api;
};
