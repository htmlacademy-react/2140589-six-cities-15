import { useState } from 'react';
import { screenVariant } from '../types/screen-varinat';

type usePlaceCardListProps = {
  variant: screenVariant;
}

function usePlaceCardList({variant}: usePlaceCardListProps) {
  const [hoverCard, setHoverCard] = useState<string | null>(null);
  const handleHoverCard = (id: string | null) => setHoverCard(id);
  const isHoverEnabled = variant === 'mainScreen';

  let listClassName = '';

  switch (variant) {
    case 'favoriteScreen':
      listClassName = 'favorites__places';
      break;
    case 'mainScreen':
      listClassName = 'cities__places-list places__list tabs__content';
      break;
    case 'offerScreen':
      listClassName = 'near-places__list places__list';
  }

  return {handleHoverCard, isHoverEnabled, listClassName, hoverCard};
}

export default usePlaceCardList;

