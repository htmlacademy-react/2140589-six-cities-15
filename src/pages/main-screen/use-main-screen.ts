import { useSort } from '../../components/offer-sort/use-sort';
import { useAppSelector } from '../../components/store/types';
import { cityCenter } from '../../const';

function useMainScreen () {
  const activeCity = useAppSelector((state) => state.activeCity);
  const offers = useAppSelector((state) => state.offers);
  const offersByCity = offers.filter((offer) => offer.city.name === activeCity);
  const points = offersByCity.map((offer) => offer.location);
  const center = cityCenter[activeCity];
  const placesAvalable = offersByCity.length;
  const sortedOffers = useSort(offersByCity);

  return {activeCity, offersByCity, points, center, placesAvalable, sortedOffers};
}

export default useMainScreen;
