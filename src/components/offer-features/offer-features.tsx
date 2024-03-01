type OfferFeaturesProps = {
  type: string;
  bedrooms: number;
  maxAdults: number;
}

function OfferFeatures ({type, bedrooms, maxAdults}: OfferFeaturesProps) {
  return (
    <ul className="offer__features">
      <li className="offer__feature offer__feature--entire">
        {type}
      </li>
      <li className="offer__feature offer__feature--bedrooms">
        {bedrooms}
      </li>
      <li className="offer__feature offer__feature--adults">
        {maxAdults}
      </li>
    </ul>
  );
}

export default OfferFeatures;
