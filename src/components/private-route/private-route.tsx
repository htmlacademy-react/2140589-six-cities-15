import { Navigate } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../hooks/custom-hooks';
import { getUserStatus } from '../store/auth-data/selectors';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps) {
  const { authorizationStatus, children } = props;
  const userStatusLoading = useAppSelector(getUserStatus);
  if (userStatusLoading !== 'fetching') {
    return (authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={AppRoutes.Login} />);
  }
}

export default PrivateRoute;
