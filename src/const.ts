import { Rates } from './components/types/rates';

const AppSettings = {
  placeCardCount: 5,
} as const;

const rates: Rates[] = [
  {value: 5, title: 'prefectly'},
  {value: 4, title: 'well'},
  {value: 3, title: 'not bad'},
  {value: 2, title: 'badly'},
  {value: 1, title: 'terribly'},
];

enum AppRoutes {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  No_Auth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export {AppSettings, AppRoutes, AuthorizationStatus, rates};
