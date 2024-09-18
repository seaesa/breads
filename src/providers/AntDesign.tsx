import en from 'antd/locale/en_US';
import { ConfigProvider, theme } from 'antd';
import type { ThemeConfig } from 'antd';
import { useTheme } from '@/stores/theme';
import '@/assets/styles/variable.less';

const { defaultAlgorithm, darkAlgorithm, compactAlgorithm } = theme;

const AntDesign = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  const themeConfig: ThemeConfig = {
    algorithm: theme === 'light' ? [defaultAlgorithm, compactAlgorithm] : [darkAlgorithm, compactAlgorithm],
    hashed: false,
    token: {
      motion: false,
      borderRadius: 10,
      fontSize: 15,
      fontFamily: 'var(--font-family-system)',
      colorPrimary: 'var(--base-color)',
      colorTextBase: 'var(--text-primary)',
      colorBgMask: 'var(--dark-backdrop-background)',
      controlOutline: 'var(--primary-outline)',
    },
    components: {
      Modal: {
        padding: 0,
      },
      Typography: {
        fontSize: 15,
      },
      Divider: {
        margin: 0,
        marginLG: 0,
      },
    },
  };

  return (
    <>
      <ConfigProvider theme={themeConfig} locale={en} wave={{ disabled: true }}>
        {children}
      </ConfigProvider>
    </>
  );
};

export default AntDesign;
