/* eslint-disable @typescript-eslint/no-shadow */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import { AppRoutes, AuthorizationStatus } from '../../const';
import PageErrorScreen from '../../pages/page-error-screen/page-error-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';

function App(): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoutes.Main} element={<MainScreen />} />
          <Route path={AppRoutes.Login} element={<LoginScreen />} />
          <Route path={AppRoutes.Favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.Auth}><FavoritesScreen /></PrivateRoute>} />
          <Route path={AppRoutes.Offer} element={<OfferScreen/>} />
          <Route path='*' element={<PageErrorScreen />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;