import classNames from 'classnames';
import useAuth from '../../hooks/use-auth';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../const';

type UseBookmarkButtonProps = {
  variant: 'offerPage' | 'placeCard';
  isFavorite: boolean;
  onButtonClick: () => void;
}

function useBookmarkButton ({variant, isFavorite, onButtonClick}: UseBookmarkButtonProps) {
  const {isAuth} = useAuth();
  const navigateToLoginPage = useNavigate();
  const bookmarkButtonVariant = classNames(variant === 'placeCard' ? 'place-card' : 'offer');
  const bookmarkButton = classNames(isFavorite ? `${bookmarkButtonVariant}__bookmark-button--active` : null, `${bookmarkButtonVariant}__bookmark-button button`);
  const bookmarkLocation = (isFavorite ? 'Remove from favorites.' : 'Add to favorites.');
  let height: number;
  let width: number;

  if (variant === 'placeCard') {
    height = 19;
    width = 18;
  } else {
    height = 33;
    width = 31;
  }

  const handleClick = () => {
    if (isAuth) {
      onButtonClick();
    } else {
      navigateToLoginPage(AppRoutes.Login);
    }
  };

  return {height, width, bookmarkButtonVariant, bookmarkButton, bookmarkLocation, handleClick};
}

export default useBookmarkButton;
