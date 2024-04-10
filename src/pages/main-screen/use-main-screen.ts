import { useAppSelector } from '../../hooks/custom-hooks';
import { useSort } from '../../components/offer-sort/use-sort';
import { getActiveCity } from '../../store/app-data/selectors';
import { getOffers, getStatus } from '../../store/offer-data/selectors';
import { Point } from '../../types/location';
import { cityCenters } from '../../const';

function useMainScreen () {
  const activeCity = useAppSelector(getActiveCity);
  const offers = useAppSelector(getOffers);
  const status = useAppSelector(getStatus);
  const offersByCity = offers.filter((offer) => offer.city.name === activeCity);
  const points:Point[] = offersByCity.map(({id, location}) => ({...location, offerId:id}));
  const center = cityCenters[activeCity];
  const placesAvalable = offersByCity.length;
  const sortedOffers = useSort(offersByCity);
  const quantity = placesAvalable > 1 ? 'places' : 'place';

  return {activeCity, offersByCity, points, center, placesAvalable, sortedOffers, status, quantity};
}

export default useMainScreen;
