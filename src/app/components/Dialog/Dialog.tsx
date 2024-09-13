import { Flex, Typography } from 'antd';
import { Icon, Image, Modal } from '@/app/components';
import { AngleRightIcon } from '@/assets/icons';
import { instagramUrl } from '@/assets/images';

import styles from './Dialog.module.less';

const Dialog = () => {
  return (
    <>
      <Modal>
        <Flex vertical align="center">
          <div className={styles.modalContent}>
            <Typography.Title level={2}>Say more with Threads</Typography.Title>
            <div>
              <Typography.Text>
                Join Threads to share thoughts, find out what's going on, follow your people and more.
              </Typography.Text>
            </div>
          </div>
          <Flex align="center" justify="space-between">
            <Image width={45} height={45} preview={false} src={instagramUrl} alt="instagram" />
            <Typography.Title level={3}>Continue with instagram</Typography.Title>
            <Icon icon={AngleRightIcon} className="classSvg" />
          </Flex>
        </Flex>
      </Modal>
    </>
  );
};
export default Dialog;
