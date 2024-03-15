import { Link } from 'react-router-dom';
import { AppRoutes, CityName } from '../../const';
import { useAppSelector } from '../store/types';
import { useDispatch } from 'react-redux';
import { setActiveCity } from '../store/actions';
import classNames from 'classnames';


function CityTabs (): JSX.Element {
  const activeCity = useAppSelector((state) => state.activeCity);
  const dispatch = useDispatch();
  const handleCityTabsClick = (city:CityName) => dispatch(setActiveCity(city));
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Object.values(CityName).map((city) => (
              <li className="locations__item" key={city} onClick={() => handleCityTabsClick(city)}>
                <Link className={classNames('locations__item-link tabs__item', {['tabs__item tabs__item--active']:city === activeCity})} to={AppRoutes.Main}>
                  <span>{city}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </section>
    </div>
  );
}

export default CityTabs;
