import { useState } from 'react';

const MIN__COMMENT__LENGTH = 50;
const MAX__COMMENT__LENGTH = 300;

function useCommentForm () {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(NaN);
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value);
  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => setRating(Number(e.target.value));
  const isSubmitDisabled = Number.isNaN(rating) || comment.length < MIN__COMMENT__LENGTH || comment.length > MAX__COMMENT__LENGTH;

  return { comment, rating, handleCommentChange, handleRatingChange, isSubmitDisabled };
}

export default useCommentForm;
