import { Draft, PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IPosts } from '@/shared/types/news/types';

import { INewsState } from './types';

const initialState: INewsState = {
	posts: [],
	isLoading: true,
	isError: false,
};

export const newsSlice = createSlice({
	name: 'shop',
	initialState: initialState,
	reducers: {
		dataFetch(state: Draft<INewsState>) {
			return { ...state, isLoading: true };
		},
		dataFetchFailure(state: Draft<INewsState>, action: PayloadAction<string>) {
			return {
				...state,
				isLoading: false,
				isError: true,
				error: action.payload,
			};
		},
		dataFetchSuccess(state: Draft<INewsState>, action: PayloadAction<IPosts[]>) {
			return {
				...state,
				isLoading: false,
				posts: [...state.posts, ...action.payload],
			};
		},
	},
});

export default newsSlice.reducer;
