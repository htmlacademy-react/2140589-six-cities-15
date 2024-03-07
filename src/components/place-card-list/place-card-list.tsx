import { useState } from 'react';
import PlaceCard from '../place-card/place-card';
import { OfferCardType } from '../types/offer';

type PlaceCardListProps = {
  offers: OfferCardType[];
}

function PlaceCardList ({offers}: PlaceCardListProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [hoverCard, setHoverCard] = useState<string | null>(null);
  const handleHoverCard = (id: string | null) => setHoverCard(id);
  return (
    offers.map((offer) => <PlaceCard offer={offer} key={offer.id} onCardHover={handleHoverCard} variant='place'/>)
  );
}

export default PlaceCardList;
