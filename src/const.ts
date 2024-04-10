import { Location } from './types/location';
import leaflet from 'leaflet';

export enum AppRoutes {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Page_Error = '/page-not-found',
  Server_Error = '/server-error',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  No_Auth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum CityNames {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const cityCenters: Record<CityNames, Location> = {
  [CityNames.Paris]: {
    'latitude': 48.85661,
    'longitude': 2.351499,
    'zoom': 13
  },
  [CityNames.Cologne]: {
    'latitude': 50.938361,
    'longitude': 6.959974,
    'zoom': 13
  },
  [CityNames.Brussels]: {
    'latitude': 50.846557,
    'longitude': 4.351697,
    'zoom': 13
  },
  [CityNames.Amsterdam]: {
    'latitude': 52.37454,
    'longitude': 4.897976,
    'zoom': 13
  },
  [CityNames.Hamburg]: {
    'latitude': 53.550341,
    'longitude': 10.000654,
    'zoom': 13
  },
  [CityNames.Dusseldorf]: {
    'latitude': 51.225402,
    'longitude': 6.776314,
    'zoom': 13
  },
};

export enum SortOptions {
  POPULAR = 'Popular',
  PRICE__LOW__TO__HIGH = 'Price: low to high',
  PRICE__HIGH__TO__LOW = 'Price: high to low',
  TOP__RATED__FIRST = 'Top rated first',
}

export const defaultPin = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [12, 20],
});

export const activePin = leaflet.icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [12, 20],
});

export enum APIRoutes {
  Offers = '/offers',
  Login = '/login',
  Logout = '/logout',
  Offer = '/offer',
  Comments = '/comments',
  Favorite = '/favorite',
}

export enum ErrorTypes {
  Page_Not_Found = 404,
  Server_Error = 500,
}

export const CommentLenght = {
  MinCommentLength: 50,
  MaxCommentLength: 300,
} as const;

export const MAX_COMMENTS_LENGTH = 10;
export const MAX_NEARBY_CITIES = 3;
export const ERR_NETWORK = 'ERR_NETWORK';
export const ERR_BAD_REQUEST = 'ERR_BAD_REQUEST';
export const MAX_IMAGES_COUNT = 6;
