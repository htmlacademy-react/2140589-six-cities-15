import CommentForm from '../comment-form/comment-form';
import useAuth from '../hooks/use-auth';
import ReviewItem from '../review-item/review-item';
import { Comments } from '../types/comments';

type ReviewListProps = {
  comments: Comments[];
}

function ReviewList ({comments}: ReviewListProps): JSX.Element {
  const {isAuth} = useAuth();
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
      {
        isAuth && <CommentForm />
      }
    </section>
  );
}

export default ReviewList;
