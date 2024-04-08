import { Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import { AppRoutes } from '../../const';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import ServerErrorScreen from '../../pages/server-error-screen/server-error-screen';
import PageNotFoundScreen from '../../pages/page-not-found-screen/page-not-found-screen';
import { useAppSelector } from '../hooks/custom-hooks';
import { getAuthStatus } from '../store/auth-data/selectors';

function App(): JSX.Element {
  const userAuth = useAppSelector(getAuthStatus);
  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <Routes>
          <Route path={AppRoutes.Main} element={<MainScreen />} />
          <Route path={AppRoutes.Login} element={<LoginScreen />} />
          <Route path={AppRoutes.Favorites} element={<PrivateRoute authorizationStatus={userAuth}><FavoritesScreen /></PrivateRoute>} />
          <Route path={AppRoutes.Offer} element={<OfferScreen />} />
          <Route path={AppRoutes.Page_Error} element={<PageNotFoundScreen />} />
          <Route path={AppRoutes.Server_Error} element={<ServerErrorScreen />} />
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
