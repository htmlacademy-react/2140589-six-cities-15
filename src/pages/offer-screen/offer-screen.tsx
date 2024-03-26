import { Helmet } from 'react-helmet-async';
import Logo from '../../components/logo/logo';
import { Navigate } from 'react-router-dom';
import OfferGallery from '../../components/offer-gallery/offer-gallery';
import OfferInsideList from '../../components/offer-inside/offer-inside';
import OfferFeatures from '../../components/offer-features/offer-features';
import OfferHost from '../../components/offer-host/offer-host';
import PremiumLabel from '../../components/premium-label/premium-label';
import CardRating from '../../components/card-rating/card-rating';
import PlacePrice from '../../components/place-price/place-price';
import BookmarkButton from '../../components/bookmark-button/bookmark-button';
import ReviewList from '../../components/review-list/review-list';
import Map from '../../components/map/map';
import PlaceCardList from '../../components/place-card-list/place-card-list';
import UserNavigation from '../../components/user-navigation/user-navigation';
import { useEffect } from 'react';
import { fetchPerOffer } from '../../components/services/api-actions';
import OfferSpinner from '../../components/offer-spinner/offer-spinner';
import useOfferScreen from './use-offer-screen';

function OfferScreen(): JSX.Element {
  const {id, center, dispatch, offerLoaded, offer, comments, nearbyOffers, nearbyPoints } = useOfferScreen();

  useEffect(() => {
    if (id) {
      dispatch(fetchPerOffer(id));
    }
  },[dispatch,id]);

  if(offerLoaded === 'fetching' || offerLoaded === 'idle') {
    return <OfferSpinner variant='pageScreen'/>;
  }

  if (!offer) {
    return <Navigate to='offer-not-found'/>;
  }

  const {rating, title, isPremium, type, price, images, bedrooms, maxAdults, goods, description, host, isFavorite} = offer;

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: {title}</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <UserNavigation />
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
          <Map points={nearbyPoints} city={center} variant='offerScreen'/>
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
