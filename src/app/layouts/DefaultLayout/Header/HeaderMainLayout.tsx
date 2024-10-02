import { Fragment } from 'react/jsx-runtime';
import { id } from '@/lib/utils';
import { navigationConfig } from '@/configs/navigation';
import { Button } from '@/app/components/base';
import * as H from './HeaderMainLayout.styles';
import { Link } from '@/app/components/common';
const HeaderDefaultLayout: React.FC = () => {
  return (
    <>
      <H.Header vertical align='center'>
        <H.Logo justify='center' flex='none'>
          <Link to='/'>
            <H.LogoImage />
          </Link>
        </H.Logo>
        <H.Navigation vertical justify='center' flex='auto' gap={4}>
          {navigationConfig.header.map((navigation) => {
            return (
              <div style={{ position: 'relative' }} key={id()}>
                <H.Button href={navigation.href}>
                  <H.Icon icon={navigation.icon || Fragment} />
                </H.Button>
              </div>
            );
          })}
        </H.Navigation>
        <Button type='primary'>Login</Button>
      </H.Header>
    </>
  );
};

export default HeaderDefaultLayout;
