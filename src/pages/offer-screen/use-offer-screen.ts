import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDisputch } from '../../components/store/types';
import { cityCenter } from '../../const';

function useOfferScreen () {
  const {id} = useParams();
  const activeCity = useAppSelector((state) => state.activeCity);
  const center = cityCenter[activeCity];
  const dispatch = useAppDisputch();
  const offerLoaded = useAppSelector((state) => state.offerDetailFetched);

  const offer = useAppSelector((state) => state.offerDetail);
  const comments = useAppSelector((state) => state.comments).slice(0, 10);
  const nearbyOffers = useAppSelector((state) => state.nearbyOffers).slice(0, 3);
  const nearbyPoints = nearbyOffers.map((item) => item.location);

  return {id, center, dispatch, offerLoaded, offer, comments, nearbyOffers, nearbyPoints };
}

export default useOfferScreen;
