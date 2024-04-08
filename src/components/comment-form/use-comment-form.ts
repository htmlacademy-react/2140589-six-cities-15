import { FormEvent, useRef, useState } from 'react';
import { postComment } from '../services/api-actions';
import { NewComment } from '../types/comments';
import { useAppDisputch, useAppSelector } from '../hooks/custom-hooks';
import { getCommentsStatus } from '../store/offer-data/selectors';

const MIN__COMMENT__LENGTH = 50;
const MAX__COMMENT__LENGTH = 300;

function useCommentForm () {
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useAppDisputch();
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(NaN);
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value);
  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => setRating(Number(e.target.value));
  const isSubmitDisabled = Number.isNaN(rating) || comment.length < MIN__COMMENT__LENGTH || comment.length > MAX__COMMENT__LENGTH;
  const commentFetchingStatus = useAppSelector(getCommentsStatus);
  const handleFormDisabler = () => {
    formRef.current?.classList.toggle('form-disabled');
  };

  const resetForm = () => {
    setComment('');
    setRating(NaN);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const newComment: NewComment = {rating, comment};
    handleFormDisabler();
    dispatch(postComment(newComment)).unwrap().catch((error) => {
      throw error;
    }).then(resetForm).finally(handleFormDisabler);
  };

  return { comment, rating, handleCommentChange, handleRatingChange, isSubmitDisabled, handleFormSubmit, formRef, commentFetchingStatus };
}

export default useCommentForm;
