import { AuthorizationStatus } from '../const';
import { getAuthStatus } from '../store/auth-data/selectors';
import { useAppSelector } from './custom-hooks';

function useAuth() {
  const authStatus = useAppSelector(getAuthStatus);
  return {isAuth: authStatus === AuthorizationStatus.Auth};
}

export default useAuth;
