import type { SvgProps } from '@/types/navigation';
import { cn } from '@/lib/utils';
import { styles } from './Icon.styles';

interface IconProps extends React.ComponentProps<'svg'> {
  title?: string;
  icon: SvgProps;
}

const Icon: React.FC<IconProps> = ({ icon: Icon, className, ...props }) => {
  return <Icon css={styles} id={'idSvg'} className={cn('classSvg', className)} {...props} />;
};

export default Icon;
