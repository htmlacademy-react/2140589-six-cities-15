import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import Map from '../../components/map/map';
import CityTabs from '../../components/city-tabs/city-tabs';
import EmptyScreen from '../empty-screen/empty-screen';
import useMainScreen from './use-main-screen';
import OfferSort from '../../components/offer-sort/offer-sort';
import OfferSpinner from '../../components/offer-spinner/offer-spinner';

function MainScreen (): JSX.Element {
  const {activeCity, offersByCity, points, center, placesAvalable, sortedOffers, status} = useMainScreen();

  {
    if (offersByCity.length === 0 && status !== 'fetching') {
      return <EmptyScreen activeCity={activeCity}/>;
    }

  }

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo isActive/>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoutes.Favorites}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                  Oliver.conner@gmail.com
                    </span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs />
        <div className="cities">
          {
            status === 'fetching' ? (<OfferSpinner />) : (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{placesAvalable} places to stay in {activeCity}</b>
                  <OfferSort />
                  <PlaceCardList offers={sortedOffers} variant='mainScreen'/>
                </section>
                <div className="cities__right-section">
                  <Map city={center} points={points} variant='mainScreen'/>
                </div>
              </div>
            )
          }
        </div>
      </main>
    </div>

  );
}

export default MainScreen;
