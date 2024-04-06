import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../components/hooks/use-auth';
import { loginUser } from '../../components/services/api-actions';
import { appData } from '../../components/store/app-data/slice';
import { useAppDisputch } from '../../components/store/types';
import { UserCredentionals } from '../../components/types/auth';
import { CityName, AppRoutes } from '../../const';

function useLoginScreen () {
  const dispatch = useAppDisputch();
  const {isAuth} = useAuth();
  const navigate = useNavigate();

  const handleLoginSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);
    const credentionals = Object.fromEntries(formData) as UserCredentionals;
    dispatch(loginUser(credentionals));
  };

  const cityNames = Object.values(CityName);
  const randomIndex = Math.floor(Math.random() * (cityNames.length - 1));
  const randomCity = cityNames[randomIndex];

  const navigateToRandomCityOffers = () => {
    navigate(AppRoutes.Main);
    dispatch(appData.actions.setActiveCity(randomCity));
  };

  return {isAuth, handleLoginSubmit, navigateToRandomCityOffers, randomCity};
}

export default useLoginScreen;
