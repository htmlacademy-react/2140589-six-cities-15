import { memo } from 'react';
import { User } from '../../types/user';
import useUserStatus from './user-status-info';

type UserStatusProps = {
  variant: 'host' | 'user';
  user: User;
}

function UserStatus({ variant, user }: UserStatusProps) {
  const { width, height, userWrapperClassName, imgUserWpapperClassName, imgClassName, userNameClassName, avatarUrl, name, isPro } = useUserStatus({ variant, user });
  return (
    <div className={userWrapperClassName}>
      <div className={imgUserWpapperClassName}>
        <img
          className={imgClassName}
          src={avatarUrl}
          width={width}
          height={height}
          alt={name}
        />
      </div>
      <span className={userNameClassName}>{name}</span>
      { isPro && variant === 'host' &&
        <span className="offer__user-status">{isPro && 'Pro'}</span>}
    </div>
  );
}

export default memo(UserStatus);
