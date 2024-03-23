import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import FavoritePlaceList from '../../components/favorite-place-list/favorite-place-list';
import { useAppSelector } from '../../components/store/types';
import UserNavigation from '../../components/user-navigation/user-navigation';


function FavoritesScreen(): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const favOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <UserNavigation />
          </div>
        </div>
      </header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritePlaceList offers={favOffers}/>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
