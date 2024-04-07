import { User } from './user';
import { Location } from './location';
import { CityNames } from '../../const';


export type OfferCardType = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: {
    name: CityNames;
    location: Location;
  };
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: User;
  images: string[];
  maxAdults: number;
}
