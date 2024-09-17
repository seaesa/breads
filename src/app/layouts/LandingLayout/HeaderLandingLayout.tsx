import { Fragment } from 'react/jsx-runtime';
import { Link } from 'react-router-dom';
import { LogoIcon } from '@/assets/icons';
import { cn, id } from '@/lib/utils';
import { Button, Icon } from '@/app/components';
import { navigationConfig } from '@/configs/navigation';
import styles from './LandingLayout.module.less';
import { Col, Flex, Row } from 'antd';

const HeaderLandingLayout = () => {
  return (
    <>
      <Row align="middle" justify="space-between" className={cn(styles.headerLayout)}>
        <Col>
          <div className={cn(styles.logoWrap)}>
            <Link to="/">
              <LogoIcon className={cn(styles.logo)} />
            </Link>
          </div>
        </Col>
        <Col>
          <Flex align="center" className={cn(styles.navbar)}>
            {navigationConfig.header.map((navigation) => {
              return (
                <div key={id()}>
                  <Button href={navigation.href} className={styles.button}>
                    <Icon icon={navigation.icon || Fragment} className={styles.icon} />
                  </Button>
                </div>
              );
            })}
          </Flex>
        </Col>
        <Col
          style={{
            marginRight: '13px',
          }}
        >
          <Button type="primary">Login</Button>
        </Col>
      </Row>
    </>
  );
};

export default HeaderLandingLayout;
