import { memo, useState } from 'react';
import type { ComponentType } from 'react';
import type { ButtonProps } from 'antd';
import { Link } from 'react-router-dom';
import * as B from './Button.styles';

type MyButtonProps = Omit<ButtonProps, 'href'>;

const ButtonWrap = <T extends ButtonProps>(Component: ComponentType<MyButtonProps>): React.FC<T> => {
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

const Button: React.FC<ButtonProps> = ({ className, children, size = 'large', type = 'text', ...props }) => {
  const [active, setActive] = useState(false);

  const handleOnMouseUp = () => {
    setActive(false);
  };

  const handleOnMouseDown = () => {
    setActive(true);
  };

  return (
    <B.Button
      className={`${active && 'active'} ${className}`}
      onMouseDown={handleOnMouseDown}
      onMouseUp={handleOnMouseUp}
      size={size}
      type={type}
      {...props}
    >
      {children}
    </B.Button>
  );
};
Button.displayName = 'Button';

export default memo(ButtonWrap(Button));
