import { Helmet } from 'react-helmet-async';
import FavoritePlaceList from '../../components/favorite-place-list/favorite-place-list';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import useFavoritesScreen from './use-favorites-screen';

function FavoritesScreen(): JSX.Element {
  const {offers, favEmptyScreen, pageClass, mainClass} = useFavoritesScreen();
  return (
    <div className={pageClass}>
      <Helmet>
        <title>6 cities: favorites</title>
      </Helmet>
      <Header isActive={false}/>
      <main className={mainClass}>
        <div className="page__favorites-container container">
          {
            offers.length === 0 ?
              (favEmptyScreen)
              :
              (
                <section className="favorites">
                  <h1 className="favorites__title">Saved listing</h1>
                  <FavoritePlaceList offers={offers} />
                </section>
              )
          }
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default FavoritesScreen;
