import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import classNames from 'classnames';
import { memo } from 'react';

type LogoProps = {
  isActive?: boolean;
}

function Logo({isActive}: LogoProps): JSX.Element {
  const className = classNames('header__logo-link', {'header__logo-link--active': isActive});
  return (
    <div className="header__left">
      <Link className="header__logo-link header__logo-link--active" to={AppRoutes.Main}>
        <img
          className={className}
          src="img/logo.svg"
          alt="6 cities logo"
          width={81}
          height={41}
        />
      </Link>
    </div>
  );
}

export default memo(Logo);
