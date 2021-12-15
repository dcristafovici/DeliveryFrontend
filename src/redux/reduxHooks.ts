import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { rootReducer } from './rootReducer';

type RootState = ReturnType<typeof rootReducer>

export const useTypeSelector:TypedUseSelectorHook<RootState> = useSelector;
