import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import useAuth from '../hooks/use-auth';
import { useAppSelector } from '../store/types';
import OfferSpinner from '../offer-spinner/offer-spinner';
import { getUserAuthData, getUserStatus } from '../store/auth-data/selectors';

function UserNavigation() {
  const {isAuth} = useAuth();
  const user = useAppSelector(getUserAuthData);
  const userLoader = useAppSelector(getUserStatus);

  return (
    <nav className="header__nav">
      {
        userLoader === 'fetching' && !user ? <OfferSpinner variant='user'/> : undefined
      }

      {
        isAuth && user ?
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link
                className="header__nav-link header__nav-link--profile"
                to={AppRoutes.Favorites}
              >
                <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${user.avatarUrl})`, borderRadius: '50%'}}></div>
                <span className="header__user-name user__name">
                  {user.email}
                </span>
                <span className="header__favorite-count">3</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">
                <span className="header__signout">Sign out</span>
              </a>
            </li>
          </ul>
          :
          <Link className="header__nav-link" to={AppRoutes.Login}>
            <span className="header__signout">Sign in</span>
          </Link>
      }
    </nav>
  );
}

export default UserNavigation;
