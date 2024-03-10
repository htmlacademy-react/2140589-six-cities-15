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
