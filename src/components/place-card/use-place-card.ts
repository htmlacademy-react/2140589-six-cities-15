import classNames from 'classnames';
import { AppRoutes } from '../../const';
import { generatePath } from 'react-router-dom';
import { ScreenVariant } from '../../types/screen-varinat';

type UsePlaceCardProps = {
  variant: ScreenVariant;
  id: string;
  onCardHover?: (id: string | null) => void;
}

function usePlaceCard ({variant, id, onCardHover}: UsePlaceCardProps) {
  const url = generatePath(AppRoutes.Offer, {id});

  const handleOnMouseEnter = () => onCardHover?.(id);
  const handleOnMouseLeve = () => onCardHover?.(null);

  let articleClassName = '';
  let imgWrapperClassName = '';

  switch (variant) {
    case 'mainScreen':
      articleClassName = 'cities__card place-card';
      imgWrapperClassName = 'cities__image-wrapper place-card__image-wrapper';
      break;
    case 'favoriteScreen':
      articleClassName = 'favorites__card place-card';
      imgWrapperClassName = 'favorites__image-wrapper place-card__image-wrapper';
      break;
    case 'offerScreen':
      articleClassName = 'near-places__card place-card';
      imgWrapperClassName = 'near-places__image-wrapper place-card__image-wrapper';
      break;
  }

  const infoWrapperClassName = classNames(variant === 'favoriteScreen' ? 'favorites__card-info' : null, 'place-card__info');

  return { url, handleOnMouseEnter, handleOnMouseLeve, articleClassName, imgWrapperClassName, infoWrapperClassName};
}

export default usePlaceCard;
