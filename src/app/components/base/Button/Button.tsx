import styled from '@emotion/styled';
import { forwardRef } from 'react';
import type { ButtonProps } from 'antd';
import { Button as AntButton } from 'antd';
import { Link } from '@/app/components/common';

const ButtonWrap = <T extends ButtonProps>(Component: React.ComponentType<ButtonProps>): React.FC<T> => {
  return ({ href, ...props }) => {
    return (
      <>
        {href ? (
          <Link to={href}>
            <Component {...props} />
          </Link>
        ) : (
          <Component {...props} />
        )}
      </>
    );
  };
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, size = 'large', type = 'text', ...props }, ref) => {
    return (
      <BaseButton ref={ref} size={size} type={type} {...props}>
        {children}
      </BaseButton>
    );
  },
);
const BaseButton = styled(AntButton)`
  &:active {
    transform: scale(0.9) matrix(1, 0, 0, 1, 0, 0) translateX(0);
    transition: transform 0.2s cubic-bezier(0.5, 0, 0, 1);
  }
`;
Button.displayName = 'Button';

export default ButtonWrap(Button);
