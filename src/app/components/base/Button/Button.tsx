import { forwardRef, useState } from 'react';
import type { ButtonProps } from 'antd';
import * as B from './Button.styles';
// const ButtonWrap = <T extends null>(Component: ComponentType<any>): React.FC<T> => {
//   return ({ href, ...props }) => {
//     return (
//       <>
//         {href ? (
//           <Link to={href}>
//             <Component {...props} />
//           </Link>
//         ) : (
//           <Component {...props} />
//         )}
//       </>
//     );
//   };
// };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, size = 'large', type = 'text', ...props }, ref) => {
    const [active, setActive] = useState(false);

    const handleOnMouseUp = () => {
      setActive(false);
    };

    const handleOnMouseDown = () => {
      setActive(true);
    };

    return (
      <B.Button
        ref={ref}
        aria-checked={active}
        onMouseDown={handleOnMouseDown}
        onMouseUp={handleOnMouseUp}
        size={size}
        type={type}
        {...props}
      >
        {children}
      </B.Button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
