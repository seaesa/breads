import type { PopoverProps } from 'antd';
import { MyPopover } from './Popover.styles';

const Popover: React.FC<PopoverProps> = ({ ...props }) => {
  return <MyPopover {...props} />;
};

export default Popover;
