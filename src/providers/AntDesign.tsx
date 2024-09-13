import en from 'antd/locale/en_US';
import { ConfigProvider, theme } from 'antd';
import type { ThemeConfig } from 'antd';
import { useTheme } from '@/stores/theme';
import '@/assets/styles/variable.less';

const { defaultAlgorithm, darkAlgorithm, compactAlgorithm } = theme;

const AntDesign = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();
  const themeConfig: ThemeConfig = {
    algorithm: theme === 'light' ? compactAlgorithm : [darkAlgorithm, compactAlgorithm],
    hashed: false,
    token: {
      // seedToken
      motion: false,
      borderRadius: 10,
      fontSize: 15,
      fontFamily: 'var(--font-family-system)',
      colorPrimary: theme === 'light' ? '#000' : '#fff',
      colorTextBase: theme === 'light' ? '#000' : '#fff',
      colorTextLightSolid: theme === 'light' ? '#fff' : '#000',
      // mapToken
      colorBgMask: 'var(--mask-background-color)',
      borderRadiusLG: 16,
      borderRadiusSM: 12,
      borderRadiusXS: 8,
      colorBgElevated: 'var(--backround-color-primary)',
    },
    components: {
      Modal: {
        // contentBg: 'var(--backround-color-primary)',
        // borderRadiusLG: 16,
        // colorBgMask: 'var(--backdrop-background-color)'
      },
      Button: {
        borderRadiusLG: 10,
        // borderRadiusSM: 10,
        // borderRadiusXS: 8
      },
    },
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
