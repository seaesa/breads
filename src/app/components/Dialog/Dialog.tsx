import { Flex, Modal, Typography } from 'antd';
import { Icon } from '@/app/components';
import ContinueWithInstagram from '../ContinueWithInstagram/ContinueWithInstagram';
import { PostIcon } from '@/assets/icons';

const Dialog = () => {
  return (
    <>
      <Modal open={true} closeIcon={false} footer={false} maskClosable>
        <Flex vertical align='center' className={'dialog'}>
          <Flex vertical className={'modalContent'} align='center'>
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
