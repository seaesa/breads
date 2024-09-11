import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import en from 'antd/locale/en_US';
import { ConfigProvider, theme } from 'antd';
import type { ThemeConfig } from 'antd';
import { useTheme } from './stores/theme';
import TopLoadingbar from './providers/TopLoadingbar';

const { defaultAlgorithm, darkAlgorithm } = theme;

const App = () => {
	const { theme } = useTheme();
	const themeConfig: ThemeConfig = {
		algorithm: theme === 'light' ? defaultAlgorithm : darkAlgorithm,
		hashed: false,
	};

	// switch mode theme
	useEffect(() => {
		const root = window.document.documentElement;
		root.classList.remove('light', 'dark');

		if (theme === 'system') {
			const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light';

			root.classList.add(systemTheme);
			return;
		}

		root.classList.add(theme);
	}, [theme]);

	return (
		<>
			<TopLoadingbar />
			<ConfigProvider theme={themeConfig} locale={en}>
				<Outlet />
			</ConfigProvider>
		</>
	);
};
export default App;
