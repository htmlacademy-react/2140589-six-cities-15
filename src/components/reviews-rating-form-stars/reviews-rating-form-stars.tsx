import { Fragment, memo } from 'react';
import { useAppSelector } from '../hooks/custom-hooks';
import { getCommentsStatus } from '../store/offer-data/selectors';

export type Rates = {
  value: number;
  title: string;
}

const rates: Rates[] = [
  {value: 5, title: 'perfect'},
  {value: 4, title: 'good'},
  {value: 3, title: 'not bad'},
  {value: 2, title: 'badly'},
  {value: 1, title: 'terribly'},
];

type ReviewsRatingFormStarsProps = {
  rating: number;
  onRateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ReviewsRatingFormStars ({ rating, onRateChange}: ReviewsRatingFormStarsProps) {
  const commentFetchingStatus = useAppSelector(getCommentsStatus);

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
                value={rate.value}
                id={id}
                type="radio"
                checked={rate.value === rating}
                onChange={onRateChange}
                disabled={commentFetchingStatus === 'fetching'}
              />
              <label
                htmlFor={id}
                className="reviews__rating-label form__rating-label"
                title={rate.title}
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
