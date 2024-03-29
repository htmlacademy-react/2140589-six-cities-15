import { useSort } from '../../components/offer-sort/use-sort';
import { getActiveCity } from '../../components/store/app-data/selectors';
import { getOffers, getStatus } from '../../components/store/offer-data/selectors';
import { useAppSelector } from '../../components/store/types';
import { Point } from '../../components/types/location';
import { cityCenter } from '../../const';

function useMainScreen () {
  const activeCity = useAppSelector(getActiveCity);
  const offers = useAppSelector(getOffers);
  const status = useAppSelector(getStatus);
  const offersByCity = offers.filter((offer) => offer.city.name === activeCity);
  const points:Point[] = offersByCity.map(({id, location}) => ({...location, offerId:id}));
  const center = cityCenter[activeCity];
  const placesAvalable = offersByCity.length;
  const sortedOffers = useSort(offersByCity);

  return {activeCity, offersByCity, points, center, placesAvalable, sortedOffers, status};
}

export default useMainScreen;
