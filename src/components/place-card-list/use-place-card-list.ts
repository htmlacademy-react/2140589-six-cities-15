import { ScreenVariant } from '../types/screen-varinat';
import { appData } from '../store/app-data/slice';
import { useCallback } from 'react';
import { useAppDisputch } from '../hooks/custom-hooks';

type usePlaceCardListProps = {
  variant: ScreenVariant;
}

function usePlaceCardList({variant}: usePlaceCardListProps) {
  const dispatch = useAppDisputch();
  const isHoverEnabled = variant === 'mainScreen';
  const handleHoverCard = useCallback((id: string | null) => {
    if (isHoverEnabled) {
      dispatch(appData.actions.setHoverOnCardId(id));
    }
  }, [isHoverEnabled, dispatch]);

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

  return {handleHoverCard, isHoverEnabled, listClassName};
}

export default usePlaceCardList;
