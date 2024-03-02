import { useState } from 'react';
import ReviewsRatingFormStars from '../reviews-rating-form-stars/reviews-rating-form-stars';
import { rates } from '../../const';

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
      <ReviewsRatingFormStars rates={rates} rating={rating} onRateChange={handleRatingChange}/>

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
