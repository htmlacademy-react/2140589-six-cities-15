import { User } from '../../types/user';

type useUserStatusProps = {
  variant: 'host' | 'user';
  user: User;
}

function useUserStatus ({user, variant}: useUserStatusProps) {
  let width: number;
  let height: number;
  let userWrapperClassName = '';
  let imgUserWpapperClassName = '';
  let imgClassName = '';
  let userNameClassName = '';


  const {avatarUrl, isPro, name} = user;

  const isHostPro = isPro ? 'offer__avatar-wrapper--pro' : '';

  switch (variant) {
    case 'host':
      width = 74;
      height = 74;
      userWrapperClassName = 'offer__host-user user';
      imgUserWpapperClassName = `${isHostPro} offer__avatar-wrapper user__avatar-wrapper`;
      imgClassName = 'offer__avatar user__avatar';
      userNameClassName = 'offer__user-name';
      break;
    case 'user':
      width = 54;
      height = 54;
      userWrapperClassName = 'reviews__user user';
      imgUserWpapperClassName = 'reviews__avatar-wrapper user__avatar-wrapper';
      imgClassName = 'reviews__avatar user__avatar';
      userNameClassName = 'reviews__user-name';
      break;
  }

  return {width, height, userWrapperClassName, imgUserWpapperClassName, imgClassName, userNameClassName, avatarUrl, name, isPro};
}

export default useUserStatus;
