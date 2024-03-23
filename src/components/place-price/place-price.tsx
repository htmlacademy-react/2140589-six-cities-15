type PlacePriceProps = {
  price: number;
  variant: 'offerPage' | 'placeCard';
}

function PlacePrice ({price, variant}: PlacePriceProps) {
  const classPrefix = variant === 'offerPage' ? 'offer' : 'place-card';
  return (
    <div className={`${classPrefix}__price`}>
      <b className={`${classPrefix}__price-value`}>€{price}</b>
      <span className={`${classPrefix}__price-text`}>
        {
          variant === 'placeCard' &&
        '/'
        }&nbsp;night
      </span>
    </div>
  );
}

export default PlacePrice;
