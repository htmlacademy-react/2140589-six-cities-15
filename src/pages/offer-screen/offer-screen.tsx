import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import { Link, Navigate, useParams } from 'react-router-dom';
import { offers } from '../../components/mocks/offers';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferInsideList from '../../components/offer-inside/offer-inside';
import OfferFeatures from '../../components/offer-features/offer-features';
import OfferHost from '../../components/offer-host/offer-host';
import PremiumLabel from '../../components/premium-label/premium-label';
import CardRating from '../../components/card-rating/card-rating';
import PlacePrice from '../../components/place-price/place-price';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import ReviewList from '../../components/review-list/review-list';
import { comments } from '../../components/mocks/comments';
import Map from '../../components/map/map';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import { AppRoutes } from '../../const';

function OfferScreen(): JSX.Element {
  const {id} = useParams();
  const offer = offers.find((offerInfo) => offerInfo.id === id);
  if (!offer) {
    return <Navigate to='offer-not-found'/>;
  }
  const {rating, title, isPremium, type, price, images, bedrooms, maxAdults, goods, description, host, isFavorite} = offer;

  const nearbyOffers = offers.filter((item) => item.id !== id);
  const nearbyPoints = nearbyOffers.map((item) => item.location);

  const city = {
    'latitude': 52.37454,
    'longitude': 4.897976,
    'zoom': 11
  };

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: {title}</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
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
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferGallery images={images} title={title}/>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <PremiumLabel isPremium={isPremium} variant='offerPage'/>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                <BookmarkButton isFavorite={isFavorite} variant='offerPage'/>
              </div>
              <CardRating rating={rating} variant='offerPage'/>
              <OfferFeatures type={type} bedrooms={bedrooms} maxAdults={maxAdults}/>
              <PlacePrice price={price} variant='offerPage'/>
              <OfferInsideList goods={goods} />
              <OfferHost user={host} description={description}/>
              <ReviewList comments={comments}/>
            </div>
          </div>
          <Map points={nearbyPoints} city={city} variant='offerScreen'/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">
              Other places in the neighbourhood
            </h2>
            <PlaceCardList offers={nearbyOffers} variant='offerScreen'/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;
