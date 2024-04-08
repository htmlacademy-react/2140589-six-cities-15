import { useRef, useState } from 'react';
import { SortOptions } from '../../const';
import { getSortOption } from '../store/app-data/selectors';
import { appData } from '../store/app-data/slice';
import { useAppSelector, useAppDisputch } from '../hooks/custom-hooks';

function useOfferSort () {
  const sortRef = useRef<HTMLFormElement | null>(null);
  const currentSortOption = useAppSelector(getSortOption);
  const [sortIsOpened, setSortIsOpened] = useState(false);
  const handleSortIsOpened = () => setSortIsOpened(!sortIsOpened);
  const dispatch = useAppDisputch();
  const handleSortOption = (option:SortOptions) => {
    dispatch(appData.actions.setSortOption(option)); setSortIsOpened(false);
  };

  const handleOutsideClick = (evt: MouseEvent) => {
    if (sortRef.current && !sortRef.current.contains(evt.target as Node)) {
      setSortIsOpened(false);
    }
  };

  const handleKeyDown = (evt:KeyboardEvent) => {
    if (evt.key === 'Escape') {
      setSortIsOpened(false);
    }
  };

  return {currentSortOption, sortIsOpened, handleSortIsOpened, handleSortOption, handleKeyDown, handleOutsideClick, sortRef};
}

export default useOfferSort;
