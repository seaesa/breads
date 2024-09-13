import { id } from '@/lib/utils';
import styles from './LandingLayout.module.less';
import { navigationConfig } from '@/configs/navigation';
import { Link } from 'react-router-dom';
const FooterLandingLayout = () => {
  return (
    <>
      <div className={styles.footerWrap}>
        <ul className={styles.footer}>
          {navigationConfig.footer.map((navigation) =>
            !navigation.href ? (
              <li key={id()} className={styles.footerName}>
                {navigation.title}
              </li>
            ) : (
              <li key={id()} className={styles.footerName}>
                <Link to={navigation.href}>{navigation.title}</Link>
              </li>
            ),
          )}
        </ul>
      </div>
    </>
  );
};

export default FooterLandingLayout;
