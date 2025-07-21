import { fetchNews } from '@/entities/model/actions/news.actions';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useInterObserver = () => {
	const { isLoading } = useSelector((state: RootState) => state.news);
	const observerRef = useRef<IntersectionObserver | null>(null);
	const targetObserverRef = useRef<HTMLDivElement>(null);

	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		if (isLoading) {
			return;
		}

		if (observerRef.current) {
			observerRef.current.disconnect();
		}

		observerRef.current = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				dispatch(fetchNews());
			}
		});

		if (targetObserverRef.current) {
			observerRef.current.observe(targetObserverRef.current);
		}

		return () => {
			if (observerRef.current) {
				observerRef.current.disconnect();
			}
		};
	}, [isLoading]);

	return targetObserverRef;
};
