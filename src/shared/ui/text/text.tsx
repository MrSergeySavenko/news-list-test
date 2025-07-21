import React from 'react';

import styles from './text.module.scss';

interface IProps {
	children: string;
}

export const Text: React.FC<IProps> = ({ children }) => {
	return <p className={styles.hidenText}>{children}</p>;
};
