import classNames from 'classnames';
import { getFavoriteOffers } from '../../components/store/offer-data/selectors';
import { useAppSelector } from '../../components/store/types';

function useFavoritesScreen () {
  const offers = useAppSelector(getFavoriteOffers);

  const favEmptyScreen = (
    <section className="favorites favorites--empty">
      <h1 className="visually-hidden">Favorites (empty)</h1>
      <div className="favorites__status-wrapper">
        <b className="favorites__status">Nothing yet saved.</b>
        <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
      </div>
    </section>
  );

  const pageClass = classNames('page', {['page--favorites-empty']: offers.length === 0});
  const mainClass = classNames('page__main page__main--favorites', {['page__main--favorites-empty']: offers.length === 0});

  return {offers, favEmptyScreen, pageClass, mainClass};
}

export default useFavoritesScreen;
