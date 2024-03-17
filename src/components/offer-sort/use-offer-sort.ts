import { useState } from 'react';
import { SortOptions } from '../../const';
import { setSortOption } from '../store/actions';
import { useAppDisputch, useAppSelector } from '../store/types';

function useOfferSort () {
  const currentSortOption = useAppSelector((state) => state.sortOption);
  const [sortIsOpened, setSortIsOpened] = useState(false);
  const handleSortIsOpened = () => setSortIsOpened(!sortIsOpened);
  const dispatch = useAppDisputch();
  const handleSortOption = (option:SortOptions) => {
    dispatch(setSortOption(option)); setSortIsOpened(false);
  };

  const handleKeyDown = (evt:KeyboardEvent) => {
    if (evt.key === 'Escape') {
      setSortIsOpened(false);
    }
  };

  return {currentSortOption, sortIsOpened, handleSortIsOpened, handleSortOption, handleKeyDown};
}

export default useOfferSort;
