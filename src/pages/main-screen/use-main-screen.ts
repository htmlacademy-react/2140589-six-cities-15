import { useSort } from '../../components/offer-sort/use-sort';
import { useAppSelector } from '../../components/store/types';
import { Point } from '../../components/types/location';
import { cityCenter } from '../../const';

function useMainScreen () {
  const activeCity = useAppSelector((state) => state.activeCity);
  const offers = useAppSelector((state) => state.offers);
  const offersByCity = offers.filter((offer) => offer.city.name === activeCity);
  const points:Point[] = offersByCity.map(({id, location}) => ({...location, offerId:id}));
  const center = cityCenter[activeCity];
  const placesAvalable = offersByCity.length;
  const sortedOffers = useSort(offersByCity);

  return {activeCity, offersByCity, points, center, placesAvalable, sortedOffers};
}

export default useMainScreen;
