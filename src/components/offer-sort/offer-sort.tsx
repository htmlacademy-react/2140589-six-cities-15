import { memo, useEffect } from 'react';
import { SortOptions } from '../../const';
import classNames from 'classnames';
import useOfferSort from './use-offer-sort';

function OfferSort() {
  const {currentSortOption, sortIsOpened, handleSortIsOpened, handleSortOption, handleKeyDown, handleOutsideClick, sortRef} = useOfferSort();

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('click', handleOutsideClick);
    };
  },[handleKeyDown, handleOutsideClick]);

  return (
    <form className="places__sorting" action="#" method="get" ref={sortRef}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleSortIsOpened}>
        {currentSortOption}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={classNames('places__options places__options--custom', {['places__options--opened']:sortIsOpened})}>
        {
          Object.values(SortOptions).map((option) => (
            <li className={classNames('places__option', {['places__option--active']:option === currentSortOption})} tabIndex={0} key={option} onClick={() => {
              handleSortOption(option);
            }}
            >
              {option}
            </li>
          ))
        }
      </ul>
    </form>
  );
}

export default memo(OfferSort);
