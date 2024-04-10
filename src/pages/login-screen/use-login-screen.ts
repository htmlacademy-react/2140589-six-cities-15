import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/use-auth';
import { loginUser } from '../../services/api-actions';
import { appData } from '../../store/app-data/slice';
import { UserCredentionals } from '../../types/auth';
import { CityNames, AppRoutes } from '../../const';
import { useAppDisputch } from '../../hooks/custom-hooks';

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

  const cityNames = Object.values(CityNames);
  const randomIndex = Math.floor(Math.random() * (cityNames.length - 1));
  const randomCity = cityNames[randomIndex];

  const handleToRandomCityOffers = () => {
    navigate(AppRoutes.Main);
    dispatch(appData.actions.setActiveCity(randomCity));
  };

  return {isAuth, handleLoginSubmit, handleToRandomCityOffers, randomCity};
}

export default useLoginScreen;
