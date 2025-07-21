import { Card, Flex, Skeleton } from 'antd';
import React from 'react';

import styles from './skeleton-card.module.scss';

export const SkeletonCard: React.FC = () => {
	return (
		<Card title={<Skeleton.Input active size={'small'} className={styles.input} />}>
			<Flex>
				<Skeleton title={false} paragraph={{ rows: 1 }} className={styles.tag} />
				<Skeleton title={false} paragraph={{ rows: 1 }} className={styles.tag} />
				<Skeleton title={false} paragraph={{ rows: 1 }} className={styles.tag} />
			</Flex>
			<Skeleton title={false} />
			<Flex justify='space-between'>
				<Flex>
					<Skeleton title={false} paragraph={{ rows: 1 }} className={styles.tag} />
					<Skeleton title={false} paragraph={{ rows: 1 }} className={styles.tag} />
				</Flex>
				<Skeleton title={false} paragraph={{ rows: 1 }} className={styles.views} />
			</Flex>
		</Card>
	);
};
