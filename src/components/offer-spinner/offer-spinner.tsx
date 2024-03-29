import { ThreeDots, Watch } from 'react-loader-spinner';
import './styles.css';

type OfferSpinnerProps = {
  variant: 'pageScreen' | 'user';
}

function OfferSpinner ({variant}: OfferSpinnerProps): JSX.Element {
  const spinnerLocation = (variant === 'pageScreen' ? (
    <Watch
      visible
      height="80"
      width="80"
      radius="48"
      color="#4fa94d"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClass="waiting__clock-spinner"
    />)

    :
    (
      <ThreeDots
        visible
        height="20"
        width="80"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass="waiting__dots-spinner"
      />)

  );

  return (
    spinnerLocation
  );
}

export default OfferSpinner;
