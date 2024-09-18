import { Flex, Modal, Typography } from 'antd';
import { Icon, Image } from '@/app/components';
import { AngleRightIcon, PostIcon } from '@/assets/icons';
import { instagramUrl } from '@/assets/images';
import { cn } from '@/lib/utils';
import { styles } from './Dialog.styles';
export const ContinueWithInstagram = () => {
  return (
    <>
      <Flex align="center" justify="space-between" className={'instagramWrap'}>
        <Image width={45} height={45} preview={false} src={instagramUrl} alt="instagram" />
        <Typography.Title className={'name'} level={4}>
          Continue with instagram
        </Typography.Title>
        <Icon icon={AngleRightIcon} className={cn('classSvg', 'icon')} />
      </Flex>
    </>
  );
};
const Dialog = () => {
  return (
    <>
      <Modal open={true} closeIcon={false} footer={false} maskClosable css={styles}>
        <Flex vertical align="center" className={'dialog'}>
          <Flex vertical className={'modalContent'} align="center">
            <div className={'icon'}>
              <Icon icon={PostIcon} />
            </div>
            <Typography.Title level={1}>Say more with Threads</Typography.Title>
            <Typography.Text className={'text'}>
              Join Threads to share thoughts, find out what's going on, follow your people and more.
            </Typography.Text>
          </Flex>
          <ContinueWithInstagram />
        </Flex>
      </Modal>
    </>
  );
};
export default Dialog;
