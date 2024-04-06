import { memo } from 'react';
import useBookmarkButton from './use-bookmark-button';

type BookmarkButtonProp = {
  isFavorite: boolean;
  variant: 'offerPage' | 'placeCard';
  onButtonClick: () => void;
}

function BookmarkButton ({isFavorite, variant, onButtonClick}: BookmarkButtonProp) {
  const {height, width, bookmarkButtonVariant, bookmarkButton, bookmarkLocation, handleClick} = useBookmarkButton({variant, isFavorite, onButtonClick});

  return (
    <button
      className={bookmarkButton}
      type="button"
      onClick={handleClick}
    >
      <svg
        className={`${bookmarkButtonVariant}__bookmark-icon`}
        width={width}
        height={height}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">{bookmarkLocation}</span>
    </button>
  );
}

export default memo(BookmarkButton);
