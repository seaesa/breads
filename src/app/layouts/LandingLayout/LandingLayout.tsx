import styles from './LandingLayout.module.less';
import HeaderLandingLayout from './HeaderLandingLayout';
import FooterLandingLayout from './FooterLandingLayout';
import { Flex } from 'antd';

const LandingLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <Flex vertical>
        <HeaderLandingLayout />
        <Flex vertical style={{ zIndex: 0 }}>
          <div className={styles.containerWrap}>
            <Flex wrap flex={1} vertical className={styles.container}>
              <div className={styles.main}>{children}</div>
              <FooterLandingLayout />
            </Flex>
          </div>
        </Flex>
      </Flex>
    </>
  );
};

export default LandingLayout;
