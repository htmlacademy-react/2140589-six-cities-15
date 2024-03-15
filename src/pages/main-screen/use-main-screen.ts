import { useAppSelector } from '../../components/store/types';
import { cityCenter } from '../../const';

function useMainScreen () {
  const activeCity = useAppSelector((state) => state.activeCity);
  const offers = useAppSelector((state) => state.offers);
  const offersByCity = offers.filter((offer) => offer.city.name === activeCity);
  const points = offersByCity.map((offer) => offer.location);
  const center = cityCenter[activeCity];
  const placesAvalable = offersByCity.length;

  return {activeCity, offers, offersByCity, points, center, placesAvalable};
}

export default useMainScreen;
