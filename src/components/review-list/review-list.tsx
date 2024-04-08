import { memo } from 'react';
import CommentForm from '../comment-form/comment-form';
import useAuth from '../hooks/use-auth';
import ReviewItem from '../review-item/review-item';
import { Comments } from '../types/comments';
import { MAX_COMMENTS_LENGTH } from '../../const';

type ReviewListProps = {
  comments: Comments[];
}

function ReviewList ({comments}: ReviewListProps): JSX.Element {
  const {isAuth} = useAuth();
  const quantityReviews = comments.length > 1 ? 'Reviews' : 'Review';
  const maxCommentsShown = comments.slice(0, MAX_COMMENTS_LENGTH);

  return(
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        {quantityReviews} &middot; <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {
          maxCommentsShown.map((review) => <ReviewItem review={review} key={review.id}/>)
        }
      </ul>
      {
        isAuth && <CommentForm />
      }
    </section>
  );
}

export default memo(ReviewList);
