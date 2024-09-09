import { ConfigProvider, theme } from 'antd';
import type { ThemeConfig } from 'antd';

import en from 'antd/locale/en_US';
// import vn from 'antd/locale/vi_VN';
const { defaultAlgorithm } = theme;

function App({ children }: { children: React.ReactNode }) {
	const themeConfig: ThemeConfig = {
		algorithm: defaultAlgorithm,
		hashed: false,
		cssVar: true,
	};
	return (
		<>
			<ConfigProvider theme={themeConfig} locale={en} wave={{ disabled: false }}>
				{children}
			</ConfigProvider>
		</>
	);
}

export default App;
