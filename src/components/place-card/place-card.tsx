import { Link } from 'react-router-dom';
import { OfferCardType } from '../types/offer';
import PremiumLabel from '../premium-label/premium-label';
import CardRating from '../card-rating/card-rating';
import PlacePrice from '../place-price/place-price';
import usePlaceCard from './use-place-card';
import BookmarkButton from '../bookmark-button/bookmark-button';
import { screenVariant } from '../types/screen-varinat';
import './styles.css';

type PlaceCardProps = {
  offer: OfferCardType;
  onCardHover?: (id: string | null) => void;
  variant: screenVariant;
}

function PlaceCard ({offer, onCardHover, variant}: PlaceCardProps): JSX.Element {
  const {isPremium ,previewImage, title, price, type, rating, id, isFavorite} = offer;
  const {url, handleOnMouseEnter, handleOnMouseLeve, articleClassName, imgWrapperClassName, infoWrapperClassName} = usePlaceCard({id, variant, onCardHover});
  return (
    <article className={articleClassName}>
      <PremiumLabel isPremium={isPremium} variant='placeCard'/>
      <div className={imgWrapperClassName}>
        <Link to={url}>
          <img
            className="place-card__image"
            src={previewImage}
            alt={title}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeve}
          />
        </Link>
      </div>
      <div className={infoWrapperClassName}>
        <div className="place-card__price-wrapper">
          <PlacePrice price={price} variant='placeCard'/>
          <BookmarkButton isFavorite={isFavorite} variant='placeCard'/>
        </div>
        <CardRating rating={rating} variant='placeCard'/>
        <h2 className="place-card__name">
          <Link to={url}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}


export default PlaceCard;
