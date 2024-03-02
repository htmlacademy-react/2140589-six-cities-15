import classNames from 'classnames';

type BookmarkButtonProp = {
  isFavorite: boolean;
}

function BookmarkButton ({isFavorite}: BookmarkButtonProp) {
  const bookmarkButton = classNames(isFavorite === true ? 'place-card__bookmark-button--active' : null, 'place-card__bookmark-button button');

  return (
    <button
      className={bookmarkButton}
      type="button"
    >
      <svg
        className="place-card__bookmark-icon"
        width={18}
        height={19}
      >
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">In bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
