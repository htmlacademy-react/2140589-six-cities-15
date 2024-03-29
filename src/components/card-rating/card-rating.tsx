import useCardRating from './use-card-rating';

type CardRatingProps = {
  rating: number;
  variant: 'offerPage' | 'placeCard' | 'reviewsRating';
}

function CardRating ({rating, variant}: CardRatingProps) {
  const {width, cardClassName, starsClassName} = useCardRating({rating, variant});
  return (
    <div className={cardClassName}>
      <div className={starsClassName}>
        <span style={{ width }} />
        <span className="visually-hidden">Rating</span>
      </div>
      { variant === 'offerPage' &&
        <span className='offer__rating-value rating__value'>{rating}</span>}
    </div>
  );
}

export default CardRating;
