import { Fragment } from 'react/jsx-runtime';
import { id } from '@/lib/utils';
import { navigationConfig } from '@/configs/navigation';
import * as B from './HeaderMainLayout.styles';
import { Link } from '@/app/components/common';
import { Flex } from 'antd';
const HeaderMainLayout: React.FC = () => {
  return (
    <>
      <B.Header vertical align='center'>
        <Link to='/'>
          <B.Logo justify='center' flex='none'>
            <B.LogoImage />
          </B.Logo>
        </Link>
        <Flex vertical justify='center' flex='auto' gap={4}>
          {navigationConfig.header.map((navigation) => {
            return (
              <B.Button key={id()} href={navigation.href}>
                <B.Icon icon={navigation.icon || Fragment} />
              </B.Button>
            );
          })}
        </Flex>
        <Flex flex={1}>
          <B.Button></B.Button>
        </Flex>
      </B.Header>
    </>
  );
};

export default HeaderMainLayout;
