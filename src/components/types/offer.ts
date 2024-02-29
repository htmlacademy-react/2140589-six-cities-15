import { Host } from './host';
import { Location } from './location';


export type OfferCardType = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: {
    name: string;
    location: Location;
  };
  location: Location;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: Host;
  images: string[];
  maxAdults: number;
}
