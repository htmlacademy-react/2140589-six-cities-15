type useCardRating = {
  rating: number;
  variant: 'offerPage' | 'placeCard' | 'reviewsRating';
}

const variantCardClassName = {
  offerPage: 'offer__rating rating',
  placeCard: 'place-card__rating rating',
  reviewsRating: 'reviews__rating rating',
};

const variantStarsClassName = {
  offerPage: 'offer__stars rating__stars ',
  placeCard: 'place-card__stars rating__stars',
  reviewsRating: 'reviews__stars rating__stars',
};

function useCardRating ({rating, variant}: useCardRating) {
  const width = `${Math.round(rating * 20)}%`;
  const cardClassName = variantCardClassName[variant];
  const starsClassName = variantStarsClassName[variant];

  return {width, cardClassName, starsClassName};
}

export default useCardRating;
