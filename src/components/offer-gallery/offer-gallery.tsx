import OfferImage from '../offer-image/offer-image';

type OfferGalleryProps = {
  images: string[];
}

function OfferGallery ({images}: OfferGalleryProps) {
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {
          images.slice(0,6).map((image) => <OfferImage image={image} key={image}/>)
        }
      </div>
    </div>
  );
}

export default OfferGallery;
