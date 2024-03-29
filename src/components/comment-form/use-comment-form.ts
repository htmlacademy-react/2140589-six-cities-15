import { FormEvent, useRef, useState } from 'react';
import { useAppDisputch } from '../store/types';
import { postComment } from '../services/api-actions';
import { NewComment } from '../types/comments';

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
    dispatch(postComment(newComment)).then(resetForm).finally(handleFormDisabler);
  };

  return { comment, rating, handleCommentChange, handleRatingChange, isSubmitDisabled, handleFormSubmit, formRef };
}

export default useCommentForm;
