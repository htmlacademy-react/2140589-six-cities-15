import PlaceCard from '../place-card/place-card';
import { OfferCardType } from '../types/offer';

type PlaceCardListProps = {
  offers: OfferCardType[];
}

function PlaceCardList ({offers}: PlaceCardListProps) {
  return (
    offers.map((offer) => <PlaceCard offer={offer} key={offer.id}/>)
  );
}

export default PlaceCardList;
