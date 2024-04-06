import { Fragment, memo } from 'react';

export type Rates = {
  value: number;
  title: string;
}

const rates: Rates[] = [
  {value: 5, title: 'prefectly'},
  {value: 4, title: 'well'},
  {value: 3, title: 'not bad'},
  {value: 2, title: 'badly'},
  {value: 1, title: 'terribly'},
];

type ReviewsRatingFormStarsProps = {
  rating: number;
  onRateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ReviewsRatingFormStars ({ rating, onRateChange}: ReviewsRatingFormStarsProps) {
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
                onChange={onRateChange}
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

export default memo(ReviewsRatingFormStars);
