import classNames from 'classnames';

type UseBookmarkButtonProps = {
  variant: 'offerPage' | 'placeCard';
  isFavorite: boolean;
}

function useBookmarkButton ({variant, isFavorite}: UseBookmarkButtonProps) {
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

  return {height, width, bookmarkButtonVariant, bookmarkButton, bookmarkLocation};
}

export default useBookmarkButton;
