import { memo } from 'react';
import PlaceCard from '../place-card/place-card';
import { OfferCardType } from '../types/offer';
import { screenVariant } from '../types/screen-varinat';
import usePlaceCardList from './use-place-card-list';

type PlaceCardListProps = {
  offers: OfferCardType[];
  variant: screenVariant;
}

function PlaceCardList ({offers, variant}: PlaceCardListProps) {
  const {handleHoverCard, isHoverEnabled, listClassName} = usePlaceCardList({variant});

  return (
    <div className={listClassName}>
      {offers.map((offer) => <PlaceCard offer={offer} key={offer.id} onCardHover={isHoverEnabled ? handleHoverCard : undefined} variant={variant}/>)}
    </div>
  );
}

export default memo(PlaceCardList);
