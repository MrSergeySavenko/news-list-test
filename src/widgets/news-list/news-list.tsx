import { fetchNews } from '@/entities/model/actions/news.actions';
import { Flex } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NewsItem } from '@/features/news-item/news-item';
import { Text } from '@/shared/ui';

import { useInterObserver } from './hooks/use-inter-observer';
import { SkeletonCard } from './ui/skeleton-card';

export const NewsList: React.FC = () => {
	const { posts, isLoading } = useSelector((state: RootState) => state.news);

	const targetObserver = useInterObserver();

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		if (posts.length === 0) {
			dispatch(fetchNews());
		}
	}, []);

	return posts ? (
		<Flex vertical gap='10px'>
			{posts.map((item, i) => (
				<NewsItem
					key={`${item.title}` + `${i}`}
					title={item.title}
					body={item.body}
					reactions={item.reactions}
					tags={item.tags}
					views={item.views}
				/>
			))}
			{isLoading && (
				<>
					{Array(5)
						.fill('')
						.map((_, i) => (
							<SkeletonCard key={`skelet${i}`} />
						))}
				</>
			)}
			<div ref={targetObserver}></div>
		</Flex>
	) : (
		<Text>Новостей пока нет</Text>
	);
};
