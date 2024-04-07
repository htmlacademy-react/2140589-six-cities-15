import { Link } from 'react-router-dom';
import { AppRoutes, CityNames } from '../../const';
import classNames from 'classnames';
import { getActiveCity } from '../store/app-data/selectors';
import { appData } from '../store/app-data/slice';
import { memo, useCallback } from 'react';
import { useAppSelector, useAppDisputch } from '../hooks/custom-hooks';


function CityTabs(): JSX.Element {
  const activeCity = useAppSelector(getActiveCity);
  const dispatch = useAppDisputch();
  const handleCityTabsClick = useCallback((city: CityNames) => {
    dispatch(appData.actions.setActiveCity(city));
  }, [dispatch]);
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {
            Object.values(CityNames).map((city) => (
              <li className="locations__item" key={city} onClick={() => handleCityTabsClick(city)}>
                <Link className={classNames('locations__item-link tabs__item', { ['tabs__item tabs__item--active']: city === activeCity })} to={AppRoutes.Main}>
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

export default memo(CityTabs);
