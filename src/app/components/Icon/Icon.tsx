import type { SvgProps } from '@/types/navigation';
import styled from '@emotion/styled';

interface IconProps extends React.ComponentProps<'svg'> {
  title?: string;
  icon: SvgProps;
  light?: boolean;
}

const MyIcon: React.FC<IconProps> = ({ icon: Icon, light = false, ...props }) => {
  return (
    <>
      <Icon {...props} />
    </>
  );
};
const Icon = styled(MyIcon)`
  --fill: currentColor;
  --height: 16px;
  --width: 16px;
  height: var(--height, revert);
  width: var(--width, revert);
  fill: var(--fill, revert);
  color: ${(props) => props.color || 'inherit'};
  flex-shrink: 0;
  position: relative;
  display: block;

  ${(props) =>
    props.light &&
    `
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round; 
    `}
`;

export default Icon;
