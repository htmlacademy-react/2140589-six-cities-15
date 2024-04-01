import { useNavigate, useParams } from 'react-router-dom';
import { useAppSelector, useAppDisputch } from '../../components/store/types';
import { cityCenter } from '../../const';
import { getActiveCity } from '../../components/store/app-data/selectors';
import { getComments, getNearbyOffers, getOfferDetail, getOfferDetailFetched } from '../../components/store/offer-data/selectors';
import { Point } from '../../components/types/location';
import useAuth from '../../components/hooks/use-auth';

function useOfferScreen () {
  const {id} = useParams();
  const activeCity = useAppSelector(getActiveCity);
  const center = cityCenter[activeCity];
  const dispatch = useAppDisputch();
  const offerLoaded = useAppSelector(getOfferDetailFetched);

  const offer = useAppSelector(getOfferDetail);
  const comments = useAppSelector(getComments);
  const nearbyOffers = useAppSelector(getNearbyOffers);
  const nearbyPoints: Point[] = nearbyOffers.map(({id: offerId, location}) => ({...location, offerId}));
  if(offer) {
    nearbyPoints.push({...offer.location, offerId: offer.id});
  }

  const {isAuth} = useAuth();
  const navigateToLoginPage = useNavigate();

  return {id, center, dispatch, offerLoaded, offer, comments, nearbyOffers, nearbyPoints, isAuth, navigateToLoginPage };
}

export default useOfferScreen;
