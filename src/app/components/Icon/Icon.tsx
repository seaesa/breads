import type { SvgProps } from '@/types/navigation';
import styled from '@emotion/styled';
import { forwardRef } from 'react';

interface IconProps extends React.ComponentProps<'svg'> {
  title?: string;
  icon: SvgProps;
  light?: boolean;
}

const MyIcon = forwardRef<SVGSVGElement, IconProps>(({ icon: Icon, light = false, ...props }, ref) => {
  return <Icon ref={ref} {...props} />;
});

const Icon = styled(MyIcon)((props) => ({
  position: 'relative',
  display: 'block',
  height: `${props.height || 'var(--height,revert)'}`,
  width: `${props.width || 'var(--width,revert)'}`,
  fill: `${props.fill || 'var(--fill,revert)'}`,
  color: `${props.height || 'inherit'}`,
  // [`${props.light}`]: {
  //   stroke: 'currentColor',
  //   strokeWidth: 2,
  //   strokeLinecap: 'round',
  //   strokeLinejoin: 'round',
  // },
}));

export default Icon;
