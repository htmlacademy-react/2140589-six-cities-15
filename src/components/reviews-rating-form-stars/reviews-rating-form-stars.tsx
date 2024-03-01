import { Fragment } from 'react';
import { Rates } from '../types/rates';

type ReviewsRatingFormStarsProps = {
  rates: Rates[];
  rating: number;
  handleRatingChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ReviewsRatingFormStars ({rates, rating, handleRatingChange}: ReviewsRatingFormStarsProps) {
  return (
    <div className="reviews__rating-form form__rating">
      {
        rates.map((rate) => {
          const id = `${rate.value}-stars`;
          return (
            <Fragment key={rate.value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                defaultValue={rate.value}
                id={id}
                type="radio"
                checked={rate.value === rating}
                onChange={handleRatingChange}
              />
              <label
                htmlFor={id}
                className="reviews__rating-label form__rating-label"
                title="perfect"
              >
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </Fragment>
          );
        }
        )
      }
    </div>
  );
}

export default ReviewsRatingFormStars;
