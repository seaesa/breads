import en from 'antd/locale/en_US';
import { ConfigProvider, theme } from 'antd';
import type { ThemeConfig } from 'antd';
import { useTheme } from '@/stores/theme';

const { defaultAlgorithm, darkAlgorithm } = theme;

const AntDesign = ({ children }: { children: React.ReactNode }) => {
	const { theme } = useTheme();

	const themeConfig: ThemeConfig = {
		algorithm: theme === 'light' ? defaultAlgorithm : darkAlgorithm,
		hashed: false,
	};

	return (
		<>
			<ConfigProvider theme={themeConfig} locale={en}>
				{children}
			</ConfigProvider>
		</>
	);
};
export default AntDesign;
