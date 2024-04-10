type UseCardRating = {
  rating: number;
  variant: 'offerPage' | 'placeCard' | 'reviewsRating';
}

const VariantCardClassName = {
  offerPage: 'offer__rating rating',
  placeCard: 'place-card__rating rating',
  reviewsRating: 'reviews__rating rating',
};

const VariantStarsClassName = {
  offerPage: 'offer__stars rating__stars ',
  placeCard: 'place-card__stars rating__stars',
  reviewsRating: 'reviews__stars rating__stars',
};

function useCardRating ({rating, variant}: UseCardRating) {
  const width = `${Math.round(rating) * 20}%`;
  const cardClassName = VariantCardClassName[variant];
  const starsClassName = VariantStarsClassName[variant];

  return {width, cardClassName, starsClassName};
}

export default useCardRating;
