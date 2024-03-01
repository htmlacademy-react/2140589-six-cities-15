import { Fragment, useState } from 'react';

const rates = [
  {value: 5, title: 'prefectly'},
  {value: 4, title: 'well'},
  {value: 3, title: 'not bad'},
  {value: 2, title: 'badly'},
  {value: 1, title: 'terribly'},
];

function CommentForm () {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(NaN);
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value);
  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => setRating(Number(e.target.value));
  const isSubmitDisabled = Number.isNaN(rating) || comment.length < 50 || comment.length > 300;
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
                    Your review
      </label>
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

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleCommentChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                      To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
                      your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled}
        >
                      Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
