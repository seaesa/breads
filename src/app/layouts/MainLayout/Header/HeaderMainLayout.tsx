import { id } from '@/lib/utils';
import { navigationConfig } from '@/configs/navigation';
import * as B from './HeaderMainLayout.styles';
import { Link } from '@/app/components/common';
import { Flex } from 'antd';
import { MoreIcon, PinIcon } from '@/assets/icons';
import { Icon } from '@/app/components';
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
            const { href, ...props } = navigation;
            return (
              <B.Button key={id()} href={href}>
                <B.Icon {...props} />
              </B.Button>
            );
          })}
        </Flex>
        <Flex vertical flex={1}>
          <B.Button>
            <Icon icon={PinIcon} width={26} height={26} fill='transparent' />
          </B.Button>
          <B.Button>
            <Icon icon={MoreIcon} width={24} height={24} fill='currentColor' color='var(--primary-icon)' />
          </B.Button>
        </Flex>
      </B.Header>
    </>
  );
};

export default HeaderMainLayout;
