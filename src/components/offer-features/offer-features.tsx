import { memo } from 'react';

type OfferFeaturesProps = {
  type: string;
  bedrooms: number;
  maxAdults: number;
}

function OfferFeatures ({type, bedrooms, maxAdults}: OfferFeaturesProps) {
  const quantity = bedrooms > 1 ? 'Bedrooms' : 'Bedroom';
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {type}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms} {quantity}
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {maxAdults} adults
      </li>
    </ul>
  );
}

export default memo(OfferFeatures);
