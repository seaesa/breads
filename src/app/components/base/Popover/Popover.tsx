import type { PopoverProps } from 'antd';
import { MyPopover } from './Popover.styles';

const Popover: React.FC<PopoverProps> = ({ children, ...props }) => {
  return (
    <>
      <MyPopover {...props}>{children}</MyPopover>
    </>
  );
};

export default Popover;
