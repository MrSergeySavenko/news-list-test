import { Layout } from '@/widgets/layout/layout';
import { AppProps } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from './store/store';

export const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
};
