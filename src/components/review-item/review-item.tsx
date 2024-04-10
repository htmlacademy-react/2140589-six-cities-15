import CardRating from '../card-rating/card-rating';
import { Comments } from '../../types/comments';
import UserStatus from '../user-status/user-status';
import { formatDate } from '../../utils/utils';

type ReviewItemProps = {
  review: Comments;
}

function ReviewItem ({review}: ReviewItemProps) {
  const {user, comment, date, rating } = review;
  const formatedDate = formatDate(date);
  return (
    <li className="reviews__item">
      <UserStatus variant='user' user={user}/>
      <div className="reviews__info">
        <CardRating rating={rating} variant='reviewsRating'/>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>
          {formatedDate}
        </time>
      </div>
    </li>
  );
}

export default ReviewItem;
