import { memo } from 'react';

type OfferFeaturesProps = {
  type: string;
  bedrooms: number;
  maxAdults: number;
}

function OfferFeatures ({type, bedrooms, maxAdults}: OfferFeaturesProps) {
  const quantityBedroomsText = bedrooms > 1 ? 'Bedrooms' : 'Bedroom';
  const quantityAdultsText = maxAdults > 1 ? 'adults' : 'adult';
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {type}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms} {quantityBedroomsText}
      </li>
      <li className="offer__feature offer__feature--adults">
        Max {maxAdults} {quantityAdultsText}
      </li>
    </ul>
  );
}

export default memo(OfferFeatures);
