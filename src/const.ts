import { Location } from './components/types/location';

const AppSettings = {
  placeCardCount: 5,
} as const;

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

const formatDate = (date: string) => new Intl.DateTimeFormat('en-US', {month: 'long', year: 'numeric'}).format(new Date(date));

export {AppSettings, AppRoutes, AuthorizationStatus, formatDate};

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const cityCenter: Record <CityName, Location> = {
  [CityName.Paris]: {
    'latitude': 48.85661,
    'longitude': 2.351499,
    'zoom': 13
  },
  [CityName.Cologne]: {
    'latitude': 50.938361,
    'longitude': 6.959974,
    'zoom': 13
  },
  [CityName.Brussels]: {
    'latitude': 50.846557,
    'longitude': 4.351697,
    'zoom': 13
  },
  [CityName.Amsterdam]: {
    'latitude': 52.37454,
    'longitude': 4.897976,
    'zoom': 13
  },
  [CityName.Hamburg]: {
    'latitude': 53.550341,
    'longitude': 10.000654,
    'zoom': 13
  },
  [CityName.Dusseldorf]: {
    'latitude': 51.225402,
    'longitude': 6.776314,
    'zoom': 13
  },
};

