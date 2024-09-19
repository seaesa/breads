import { Flex, Typography } from 'antd';
import Image from '../base/Image/Image';
import Icon from '../Icon/Icon';
import { AngleRightIcon } from '@/assets/icons';
import { instagramUrl } from '@/assets/images';

const ContinueWithInstagram = () => {
  return (
    <>
      <Flex align='center' justify='space-between' className={'instagramWrap'}>
        <Image width={45} height={45} preview={false} src={instagramUrl} alt='instagram' />
        <Typography.Title className={'name'} level={4}>
          Continue with instagram
        </Typography.Title>
        <Icon icon={AngleRightIcon} />
      </Flex>
    </>
  );
};
export default ContinueWithInstagram;
