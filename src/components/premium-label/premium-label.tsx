import { memo } from 'react';

type PremiumLabelProps = {
  isPremium: boolean;
  variant: 'offerPage' | 'placeCard';
}

function PremiumLabel ({isPremium, variant}: PremiumLabelProps) {
  const classPrefix = variant === 'placeCard' ? 'place-card' : 'offer';
  return (
    isPremium &&
      <div className={`${classPrefix}__mark`}>
        <span>Premium</span>
      </div>
  );
}

export default memo(PremiumLabel);
