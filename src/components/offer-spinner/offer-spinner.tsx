import { Watch } from 'react-loader-spinner';
import './styles.css';

function OfferSpinner (): JSX.Element {
  return (
    <Watch
      visible
      height="80"
      width="80"
      radius="48"
      color="#4fa94d"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClass="waiting-spinner"
    />
  );
}

export default OfferSpinner;
