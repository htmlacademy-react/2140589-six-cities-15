import { AuthorizationStatus } from '../../const';
import { useAppSelector } from '../store/types';

function useAuth() {
  const authStatus = useAppSelector((state) => state.authStatus);
  return {isAuth: authStatus === AuthorizationStatus.Auth};
}

export default useAuth;
