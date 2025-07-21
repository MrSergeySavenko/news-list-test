import { IPosts } from '@/shared/types/news/types';

export interface IGetPostsDto {
	posts: IPosts[];
	total: number;
	skip: number;
	limit: number;
}
