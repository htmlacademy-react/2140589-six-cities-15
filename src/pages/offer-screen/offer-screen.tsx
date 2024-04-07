import { Helmet } from 'react-helmet-async';
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
import { useEffect } from 'react';
import { fetchPerOffer, toggleFavoriteOffers } from '../../components/services/api-actions';
import OfferSpinner from '../../components/offer-spinner/offer-spinner';
import useOfferScreen from './use-offer-screen';
import Header from '../../components/header/header';
import { appData } from '../../components/store/app-data/slice';
import { AppRoutes } from '../../const';

function OfferScreen(): JSX.Element {
  const {id, center, dispatch, offerLoaded, offer, comments, nearbyOffers, nearbyPoints } = useOfferScreen();

  useEffect(() => {
    if (id) {
      dispatch(fetchPerOffer(id)).unwrap().catch();
      dispatch(appData.actions.setHoverOnCardId(id));
    }
    return () => {
      dispatch(appData.actions.setHoverOnCardId(null));
    };
  },[dispatch,id]);

  if(offerLoaded === 'fetching' || offerLoaded === 'idle') {
    return <OfferSpinner variant='pageScreen'/>;
  }

  if (!offer) {
    return <Navigate to={AppRoutes.Page_Error}/>;
  }

  const {rating, title, isPremium, type, price, images, bedrooms, maxAdults, goods, description, host, isFavorite} = offer;
  const handleFavoriteButton = () => {
    dispatch(toggleFavoriteOffers(offer));
  };

  return (
    <div className="page">
      <Helmet>
        <title>6 cities: {title}</title>
      </Helmet>
      <Header />
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
                <BookmarkButton isFavorite={isFavorite} variant='offerPage' onButtonClick={handleFavoriteButton}/>
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
