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
      // seedToken
      motion: false,
      borderRadius: 10,
      fontSize: 15,
      // fontFamily: 'var(--font-family-system)',
      // colorPrimary: 'var(--base-color)',
      // colorTextBase: 'var(--primary-text)',
      // // controlHeight: height of button,

      // // mapToken
      // // colorTextLightSolid: 'fff',
      // colorBgMask: 'var(--dark-backdrop-background)',
      // borderRadiusLG: 16,
      // borderRadiusSM: 12,
      // borderRadiusXS: 8,
      // colorBgElevated: 'var(--primary-background)',

      // // controlOutline: 'var(--primary-outline)'
      // screenXL: 1230
      margin: 0,
      padding: 0,
    },
    components: {
      Modal: {
        padding: 0,
        // paddingMD: 0,
        // paddingContentHorizontalLG: 0
      },
      //   Button: {
      //     borderRadiusLG: 10,
      //   },
      Typography: {
        //     colorText: 'var(--primary-text)',
        //     colorTextHeading: 'var(--primary-text)',
        //     colorLink: 'var(--primary-text)',
        //     colorLinkHover: 'var(--primary-text)',
        //     colorLinkActive: 'var(--primary-text)',
        fontSize: 15,
        //     fontWeightStrong: 800,
        //     linkHoverDecoration: 'underline',
        //     titleMarginBottom: 0,
        //     titleMarginTop: 0,
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
