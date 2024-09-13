import { Modal as AntModal } from 'antd';
import type { ModalProps } from 'antd/lib';

const Modal: any = ({}) => {
  return (
    <>
      <AntModal open={true} footer={false} closeIcon={false}></AntModal>
    </>
  );
};
export default Modal;
