import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../types/utils';


export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
export const useAppDisputch = () => useDispatch<AppDispatch>();
