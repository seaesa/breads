import { memo, useState } from 'react';
import type { ComponentType } from 'react';
import type { ButtonProps } from 'antd';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from './Button.styles';

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

const MyButton: React.FC<MyButtonProps> = ({ className, children, size = 'large', type = 'text', ...props }) => {
  const [active, setActive] = useState(false);

  const handleOnMouseUp = () => {
    setActive(false);
  };

  const handleOnMouseDown = () => {
    setActive(true);
  };

  return (
    <Button
      className={cn({ active: active }, className)}
      onMouseDown={handleOnMouseDown}
      onMouseUp={handleOnMouseUp}
      size={size}
      type={type}
      {...props}
    >
      {children}
    </Button>
  );
};
MyButton.displayName = 'Button';

export default memo(ButtonWrap(MyButton));
