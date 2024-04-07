import { memo } from 'react';
import { User } from '../types/user';
import UserStatus from '../user-status/user-status';

type OfferHostProps = {
  user: User;
  description: string;
}

function OfferHost ({user, description}: OfferHostProps) {
  return (
    <div className="offer__host">
      <h2 className="offer__host-title">Meet the host</h2>
      <UserStatus variant='host' user={user}/>
      <div className="offer__description">
        <p className="offer__text">
          {description}
        </p>
      </div>
    </div>
  );
}

export default memo(OfferHost);
