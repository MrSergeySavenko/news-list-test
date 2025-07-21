import { BASE_URL } from '@/shared/config';

import { IGetPostsDto } from './types';

export const newsApi = {
	getPostList: async (): Promise<IGetPostsDto> => {
		return fetch(`${BASE_URL}/posts?limit=10&skip=0`)
			.then((res) => res.json())
			.catch((err) => err);
	},
};
