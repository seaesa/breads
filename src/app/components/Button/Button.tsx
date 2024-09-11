import { memo, useCallback, useState } from 'react';
import type { ComponentType } from 'react';
import { Button as AntButton } from 'antd';
import type { ButtonProps } from 'antd';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import styles from './Button.module.less';

type MyButtonProps = Omit<ButtonProps, 'href'>;

const ButtonWrap = <T extends ButtonProps>(ButtonComponent: ComponentType<MyButtonProps>): React.FC<T> => {
	return ({ href, ...props }) => {
		return (
			<>
				{href ? (
					<Link to={href}>
						<ButtonComponent {...props} />
					</Link>
				) : (
					<ButtonComponent {...props} />
				)}
			</>
		);
	};
};

const Button: React.FC<MyButtonProps> = ({ className, children, size = 'large', type = 'text', ...props }) => {
	const [active, setActive] = useState(false);

	const handleOnMouseUp = useCallback(() => {
		setActive(false);
	}, []);

	const handleOnMouseDown = useCallback(() => {
		setActive(true);
	}, []);

	return (
		<AntButton
			{...props}
			className={cn({ [styles.active]: active }, className)}
			onMouseDown={handleOnMouseDown}
			onMouseUp={handleOnMouseUp}
			size={size}
			type={type}
		>
			{children}
		</AntButton>
	);
};

export default memo(ButtonWrap(Button));
