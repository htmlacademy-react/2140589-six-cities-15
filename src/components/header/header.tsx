import { memo } from 'react';
import Logo from '../logo/logo';
import UserNavigation from '../user-navigation/user-navigation';

type LogoProps = {
  isActive: boolean;
}

function Header ({isActive}: LogoProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Logo isActive={isActive}/>
          <UserNavigation />
        </div>
      </div>
    </header>
  );
}

export default memo(Header);
