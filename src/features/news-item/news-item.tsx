import { DislikeFilled, LikeFilled } from '@ant-design/icons';
import { Card, Flex, Tag } from 'antd';
import React from 'react';

import { Text } from '@/shared/ui';

import styles from './news-item.module.scss';

export interface IProps {
	title: string;
	body: string;
	tags?: string[];
	reactions: {
		likes: number;
		dislikes: number;
	};
	views: number;
}

export const NewsItem: React.FC<IProps> = ({ title, body, tags, reactions, views }) => {
	return (
		<Card title={title}>
			<Flex vertical gap='8px'>
				<Flex gap='4px 0'>
					{tags?.map((item, i) => {
						return (
							<Tag
								key={`${item}` + `${i}`}
								className={styles.background}
								color='default'
								bordered={false}
							>
								{item}
							</Tag>
						);
					})}
				</Flex>
				<Text>{body}</Text>
				<Flex justify='space-between'>
					<Flex gap='4px 0'>
						<Tag icon={<LikeFilled />} color='success'>
							{reactions.likes}
						</Tag>
						<Tag icon={<DislikeFilled />} color='error'>
							{reactions.dislikes}
						</Tag>
					</Flex>
					<Tag color='default'>{`Просмотров ${views}`}</Tag>
				</Flex>
			</Flex>
		</Card>
	);
};
