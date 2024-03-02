type CardRatingProps = {
  rating: number;
  variant: 'offerPage' | 'placeCard';
}

function CardRating ({rating, variant}: CardRatingProps) {
  const width = `${Math.round(rating * 20)}%`;
  const classPrefix = variant === 'placeCard' ? 'place-card' : 'offer';
  return (
    <div className={`${classPrefix}__rating rating`}>
      <div className={`${classPrefix}__stars rating__stars`}>
        <span style={{ width }} />
        <span className="visually-hidden">Rating</span>
      </div>
      { variant === 'offerPage' &&
        <span className={`${classPrefix}__rating-value rating__value`}>{rating}</span>}
    </div>
  );
}

export default CardRating;
