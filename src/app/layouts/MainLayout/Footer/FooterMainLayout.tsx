import { id } from '@/lib/utils';
import { navigationConfig } from '@/configs/navigation';
import { Typography } from 'antd';
import * as F from './FooterMainLayout.styles';
const FooterDefaultLayout = () => {
  return (
    <>
      <F.Flex align='center'>
        <F.FooterList>
          {navigationConfig.footer.map((navigation) => {
            return (
              <F.FooterItem key={id()}>
                <Typography.Link href={navigation.href}>{navigation.title}</Typography.Link>
              </F.FooterItem>
            )
          })}
        </F.FooterList>
      </F.Flex>
    </>
  );
};

export default FooterDefaultLayout;
