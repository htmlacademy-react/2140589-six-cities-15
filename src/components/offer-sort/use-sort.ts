import { SortOptions } from '../../const';
import { useAppSelector } from '../hooks/custom-hooks';
import { getSortOption } from '../store/app-data/selectors';
import { OfferCardType } from '../types/offer';


export function useSort (offers: OfferCardType[]) {
  const currentSorting = useAppSelector(getSortOption);

  switch(currentSorting){
    case SortOptions.POPULAR:
      return offers;
    case SortOptions.PRICE__HIGH__TO__LOW:
      return offers.toSorted((a,b) => b.price - a.price);
    case SortOptions.PRICE__LOW__TO__HIGH:
      return offers.toSorted((a,b) => a.price - b.price);
    case SortOptions.TOP__RATED__FIRST:
      return offers.toSorted((a,b) => b.rating - a.rating);
  }
}
