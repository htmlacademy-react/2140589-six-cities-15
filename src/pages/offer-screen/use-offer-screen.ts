import { useParams } from 'react-router-dom';
import { cityCenters } from '../../const';
import { getActiveCity } from '../../store/app-data/selectors';
import { getComments, getNearbyOffers, getOfferDetail, getOfferDetailFetched } from '../../store/offer-data/selectors';
import { Point } from '../../types/location';
import { useAppSelector, useAppDisputch } from '../../hooks/custom-hooks';

function useOfferScreen() {
  const { id } = useParams();
  const activeCity = useAppSelector(getActiveCity);
  const center = cityCenters[activeCity];
  const dispatch = useAppDisputch();
  const offerLoaded = useAppSelector(getOfferDetailFetched);

  const offer = useAppSelector(getOfferDetail);
  const comments = useAppSelector(getComments);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const nearbyPoints: Point[] = nearbyOffers.map(({ id: offerId, location }) => ({ ...location, offerId }));
  if (offer) {
    nearbyPoints.push({ ...offer.location, offerId: offer.id });
  }

  return { id, center, dispatch, offerLoaded, offer, comments, nearbyOffers, nearbyPoints };
}

export default useOfferScreen;
