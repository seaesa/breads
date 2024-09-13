import type { SvgProps } from '@/types/navigation';
import styles from './Icon.module.less';
import { cn } from '@/lib/utils';

interface IconProps extends React.ComponentProps<'svg'> {
  title?: string;
  icon: SvgProps;
}

const Icon: React.FC<IconProps> = ({ icon: Icon, className, ...props }) => {
  return <Icon id={styles.idSvg} className={cn(styles.classSvg, className)} {...props} />;
};

export default Icon;
