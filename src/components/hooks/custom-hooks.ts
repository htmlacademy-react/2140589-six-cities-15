import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../types/app-dispatch';
import { RootState } from '../types/root-state';


export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
export const useAppDisputch = () => useDispatch<AppDispatch>();
