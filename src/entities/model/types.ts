import { IPosts } from '@/shared/types/news/types';

export interface INewsState {
	posts: IPosts[] | [];
	isLoading: boolean;
	isError: boolean;
}
