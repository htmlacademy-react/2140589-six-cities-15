import { screenVariant } from '../types/screen-varinat';
import { useAppDisputch } from '../store/types';
import { appData } from '../store/app-data/slice';

type usePlaceCardListProps = {
  variant: screenVariant;
}

function usePlaceCardList({variant}: usePlaceCardListProps) {
  const dispatch = useAppDisputch();
  const handleHoverCard = (id: string | null) => dispatch(appData.actions.setHoverOnCardId(id));
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

  return {handleHoverCard, isHoverEnabled, listClassName};
}

export default usePlaceCardList;

