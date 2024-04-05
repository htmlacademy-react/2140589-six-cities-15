import useAuth from '../hooks/use-auth';
import { logoutUser } from '../services/api-actions';
import { getUserAuthData, getUserStatus } from '../store/auth-data/selectors';
import { getFavoriteOffers } from '../store/offer-data/selectors';
import { useAppDisputch, useAppSelector } from '../store/types';

function useUserNavigation () {
  const { isAuth } = useAuth();
  const user = useAppSelector(getUserAuthData);
  const userLoader = useAppSelector(getUserStatus);
  const favoriteOffers = useAppSelector(getFavoriteOffers);
  const dispatch = useAppDisputch();
  const handleLogOutButton = () => {
    dispatch(logoutUser());
  };

  return { isAuth, user, userLoader, favoriteOffers, handleLogOutButton };
}

export default useUserNavigation;
