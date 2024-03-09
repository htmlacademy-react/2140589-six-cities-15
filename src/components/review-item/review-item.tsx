import { formatDate } from '../../const';
import CardRating from '../card-rating/card-rating';
import { Comment } from '../types/comment';

type ReviewItemProps = {
  review: Comment;
}

function ReviewItem ({review}: ReviewItemProps) {
  const {user, comment, date, rating } = review;
  const formatedDate = formatDate(date);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width={54}
            height={54}
            alt={user.name}
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
        {user.isPro &&
          <span className="offer__user-status">Pro</span>}
      </div>
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
