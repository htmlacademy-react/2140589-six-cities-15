import { memo } from 'react';
import OfferImage from '../offer-image/offer-image';
import { MAX_IMAGES_COUNT } from '../../const';

type OfferGalleryProps = {
  images: string[];
  title: string;
}

function OfferGallery ({images, title}: OfferGalleryProps) {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {
          images.slice(0,MAX_IMAGES_COUNT).map((image) => <OfferImage image={image} key={image} title={title}/>)
        }
      </div>
    </div>
  );
}

export default memo(OfferGallery);
