import ReviewsRatingFormStars from '../reviews-rating-form-stars/reviews-rating-form-stars';
import useCommentForm from './use-comment-form';
import './styles.css';

function CommentForm () {
  const {comment, rating, handleCommentChange, handleRatingChange, isSubmitDisabled, handleFormSubmit, formRef, commentFetchingStatus} = useCommentForm();
  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit} ref={formRef}>
      <label className="reviews__label form__label" htmlFor="review">
                    Your review
      </label>
      <ReviewsRatingFormStars rating={rating} onRateChange={handleRatingChange}/>

      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={handleCommentChange}
        disabled={commentFetchingStatus === 'fetching'}
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
