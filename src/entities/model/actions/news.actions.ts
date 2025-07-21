import { newsApi } from '@/entities/api/api';

import { newsSlice } from '../news.slice';

export const fetchNews = () => async (dispatch: AppDispatch) => {
	try {
		dispatch(newsSlice.actions.dataFetch());

		const response = await newsApi.getPostList();

		if (response) {
			dispatch(newsSlice.actions.dataFetchSuccess(response.posts));
		}
	} catch (err: unknown) {
		dispatch(newsSlice.actions.dataFetchFailure(err as string));
	}
};
