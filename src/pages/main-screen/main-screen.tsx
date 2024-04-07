import { Helmet } from 'react-helmet-async';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import Map from '../../components/map/map';
import CityTabs from '../../components/city-tabs/city-tabs';
import EmptyScreen from '../empty-screen/empty-screen';
import useMainScreen from './use-main-screen';
import OfferSort from '../../components/offer-sort/offer-sort';
import OfferSpinner from '../../components/offer-spinner/offer-spinner';
import Header from '../../components/header/header';

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
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CityTabs />
        <div className="cities">
          {
            status === 'fetching' ? (<OfferSpinner variant='pageScreen'/>) : (
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
