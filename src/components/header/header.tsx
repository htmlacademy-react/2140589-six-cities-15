import { memo } from 'react';
import Logo from '../logo/logo';
import UserNavigation from '../user-navigation/user-navigation';

function Header (): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo isActive/>
          <UserNavigation />
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
