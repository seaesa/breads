import styles from './LandingLayout.module.less';
import HeaderLandingLayout from './HeaderLandingLayout';
import FooterLandingLayout from './FooterLandingLayout';

const LandingLayout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <HeaderLandingLayout />
      <div className={styles.containerWrap}>
        <div className={styles.containerChild}>
          <div className={styles.container}>
            <div className={styles.main}>{children}</div>
            <FooterLandingLayout />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingLayout;
