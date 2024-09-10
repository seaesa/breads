import { ConfigProvider, theme } from 'antd';
import type { ThemeConfig } from 'antd';
import en from 'antd/locale/en_US';
import { useTheme } from './stores/theme';
import { useEffect } from 'react';
const { defaultAlgorithm, darkAlgorithm } = theme;
import '/node_modules/antd/dist/reset.css';
function App({ children }: { children: React.ReactNode }) {
	const { theme } = useTheme((state) => ({
		theme: state.theme,
		setTheme: state.setTheme,
	}));
	const themeConfig: ThemeConfig = {
		algorithm: theme === 'light' ? defaultAlgorithm : darkAlgorithm,
		hashed: false,
		cssVar: true,
	};
	useEffect(() => {
		const root = window.document.documentElement;

		root.classList.remove('light', 'dark');

		if (theme === 'system') {
			const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

			root.classList.add(systemTheme);
			return;
		}

		root.classList.add(theme);
	}, [theme]);
	return (
		<>
			<ConfigProvider theme={themeConfig} locale={en}>
				{children}
			</ConfigProvider>
		</>
	);
}

export default App;
