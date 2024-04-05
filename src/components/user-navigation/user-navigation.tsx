import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import OfferSpinner from '../offer-spinner/offer-spinner';
import './styles.css';
import useUserNavigation from './use-user-navigation';

function UserNavigation() {
  const { isAuth, user, userLoader, favoriteOffers, handleLogOutButton } = useUserNavigation();

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
                <span className="header__favorite-count">{favoriteOffers.length}</span>
              </Link>
            </li>
            <li className="header__nav-item">
              <button className="header__nav-link" onClick={handleLogOutButton}>
                <span className="header__signout">Sign out</span>
              </button>
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
