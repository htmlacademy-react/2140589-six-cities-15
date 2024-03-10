import CommentForm from '../comment-form/comment-form';
import ReviewItem from '../review-item/review-item';
import { Comment } from '../types/comment';

type ReviewListProps = {
  comments: Comment[];
}

function ReviewList ({comments}: ReviewListProps): JSX.Element {
  return(
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">{comments.length}</span>
      </h2>
      <ul className="reviews__list">
        {
          comments.map((review) => <ReviewItem review={review} key={review.id}/>)
        }
      </ul>
      <CommentForm />
    </section>
  );
}

export default ReviewList;
