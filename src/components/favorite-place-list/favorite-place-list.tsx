import PlaceCard from '../place-card/place-card';
import { OfferCardType } from '../types/offer';

type FavoritePlaceListProps = {
  offers: OfferCardType[];
}

function FavoritePlaceList ({offers}: FavoritePlaceListProps) {
  const locations = [...new Set(offers.map(({city}) => city.name))];
  return (
    <ul className="favorites__list">
      {
        locations.map((city) => {
          const favOffersByCity = offers.filter((offer) => offer.city.name === city);
          return (
            <li className="favorites__locations-items" key={city}>
              <div className="favorites__locations locations locations--current">
                <div className="locations__item">
                  <a className="locations__item-link" href="#">
                    <span>{city}</span>
                  </a>
                </div>
              </div>
              <div className="favorites__places">
                {
                  favOffersByCity.map((offer) => <PlaceCard offer={offer} key={offer.id} variant='favorite'/>)
                }
              </div>
            </li>
          );
        })
      }
    </ul>
  );
}

export default FavoritePlaceList;
