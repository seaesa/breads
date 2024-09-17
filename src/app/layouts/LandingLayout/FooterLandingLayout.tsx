import { id } from '@/lib/utils';
import styles from './LandingLayout.module.less';
import { navigationConfig } from '@/configs/navigation';
import { Flex, Typography } from 'antd';
const FooterLandingLayout = () => {
  return (
    <>
      <Flex align="center" className={styles.footer}>
        <ul className={styles.footerList}>
          {navigationConfig.footer.map((navigation) => (
            <li key={id()} className={styles.footerItem}>
              <Typography.Link href={navigation.href}>{navigation.title}</Typography.Link>
            </li>
          ))}
        </ul>
      </Flex>
    </>
  );
};

export default FooterLandingLayout;
