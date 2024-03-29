import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDisputch } from '../../components/store/types';
import { cityCenter } from '../../const';
import { getActiveCity } from '../../components/store/app-data/selectors';
import { getComments, getNearbyOffers, getOfferDetail, getOfferDetailFetched } from '../../components/store/offer-data/selectors';

function useOfferScreen () {
  const {id} = useParams();
  const activeCity = useAppSelector(getActiveCity);
  const center = cityCenter[activeCity];
  const dispatch = useAppDisputch();
  const offerLoaded = useAppSelector(getOfferDetailFetched);

  const offer = useAppSelector(getOfferDetail);
  const comments = useAppSelector(getComments).slice(0, 10);
  const nearbyOffers = useAppSelector(getNearbyOffers).slice(0, 3);
  const nearbyPoints = nearbyOffers.map((item) => item.location);

  return {id, center, dispatch, offerLoaded, offer, comments, nearbyOffers, nearbyPoints };
}

export default useOfferScreen;
