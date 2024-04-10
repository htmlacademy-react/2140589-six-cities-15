import { FormEvent, useRef, useState } from 'react';
import { postComment } from '../../services/api-actions';
import { NewComment } from '../../types/comments';
import { useAppDisputch, useAppSelector } from '../../hooks/custom-hooks';
import { getCommentsStatus } from '../../store/offer-data/selectors';
import { AxiosError } from 'axios';
import { CommentLenght } from '../../const';

function useCommentForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useAppDisputch();
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(NaN);
  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setComment(e.target.value);
  const handleRatingChange = (e: React.ChangeEvent<HTMLInputElement>) => setRating(Number(e.target.value));
  const isSubmitDisabled = Number.isNaN(rating) || comment.length < CommentLenght.MinCommentLength || comment.length > CommentLenght.MaxCommentLength;
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
    const newComment: NewComment = { rating, comment };
    handleFormDisabler();
    dispatch(postComment(newComment)).unwrap().catch((error) => {
      if (error instanceof AxiosError) {
        throw error;
      }
    }).then(resetForm).finally(handleFormDisabler);
  };

  return { comment, rating, handleCommentChange, handleRatingChange, isSubmitDisabled, handleFormSubmit, formRef, commentFetchingStatus };
}

export default useCommentForm;
