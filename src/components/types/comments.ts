import { User } from './user';

export type Comments = {
  id: string;
  date: string;
  user: User;
  comment: string;
  rating: number;
  };

export type NewComment = {
    rating: number;
    comment: string;
  }
