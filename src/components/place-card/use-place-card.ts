import classNames from 'classnames';
import { AppRoutes } from '../../const';
import { OfferVariant } from './place-card';
import { generatePath } from 'react-router-dom';

type UsePlaceCardProps = {
  variant: OfferVariant;
  id: string;
  onCardHover?: (id: string | null) => void;
}

function usePlaceCard ({variant, id, onCardHover}: UsePlaceCardProps) {
  let height: number;
  let width: number;

  if (variant === 'place') {
    height = 200;
    width = 260;
  } else {
    height = 110;
    width = 150;
  }

  const url = generatePath(AppRoutes.Offer, {id});

  const handleOnMouseEnter = () => onCardHover?.(id);
  const handleOnMouseLeve = () => onCardHover?.(null);

  const articleClassName = classNames(variant === 'place' ? 'cities__card' : 'favorites__card', 'place-card');
  const imgWrapperClassName = classNames(variant === 'place' ? 'cities__image-wrapper' : 'favorites__image-wrapper', 'place-card__image-wrapper');
  const infoWrapperClassName = classNames(variant === 'favorite' ? 'favorites__card-info' : null, 'place-card__info');

  return { url, handleOnMouseEnter, handleOnMouseLeve, width, height, articleClassName, imgWrapperClassName, infoWrapperClassName};
}

export default usePlaceCard;
