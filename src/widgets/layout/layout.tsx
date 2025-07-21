import React from 'react';

import styles from './layout.module.scss';

interface IProps {
	children: React.ReactNode;
}

export const Layout: React.FC<IProps> = ({ children }) => {
	return <div className={styles.wrapper}>{children}</div>;
};
