type OfferImageProps = {
  image: string;
  title: string;
}

function OfferImage ({image, title}: OfferImageProps) {
  return (
    <div className="offer__image-wrapper" >
      <img
        className="offer__image"
        src={image}
        alt={title}
      />
    </div>
  );
}

export default OfferImage;
