import { Fragment } from 'react/jsx-runtime';
import { Link } from 'react-router-dom';
import { id } from '@/lib/utils';
import { navigationConfig } from '@/configs/navigation';
import { Col } from 'antd';
import { Button } from '@/app/components/base';
import * as H from './HeaderDefaultLayout.styles';

const HeaderDefaultLayout: React.FC = () => {
  return (
    <>
      <H.Row align='middle' justify='space-between'>
        <Col>
          <H.Logo>
            <Link to='/'>
              <H.LogoIcon />
            </Link>
          </H.Logo>
        </Col>
        <Col>
          <H.Flex align='center'>
            {navigationConfig.header.map((navigation) => {
              return (
                <div key={id()}>
                  <H.Button href={navigation.href}>
                    <H.Icon icon={navigation.icon || Fragment} />
                  </H.Button>
                </div>
              );
            })}
          </H.Flex>
        </Col>
        <H.Col>
          <Button type='primary'>Login</Button>
        </H.Col>
      </H.Row>
    </>
  );
};

export default HeaderDefaultLayout;
