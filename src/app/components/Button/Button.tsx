import { ComponentType, memo, useCallback, useState } from 'react';
import { Button as AntButton } from 'antd';
import type { ButtonProps } from 'antd';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

import styles from './Button.module.less';

interface MyButtonProps extends ButtonProps {
	href?: string;
}

const ButtonWrap = <T extends MyButtonProps>(
	ButtonComponent: ComponentType<Omit<T, 'href'>>,
): React.FC<T> => {
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

const Button: React.FC<MyButtonProps> = ({
	className,
	children,
	size = 'large',
	type = 'text',
	...props
}) => {
	const [active, setActive] = useState(false);
	const handleOnMouseUp = useCallback(() => {
		setActive(false);
	}, []);
	const handleOnMouseDown = useCallback(() => {
		setActive(true);
	}, []);
	return (
		<AntButton
			className={cn(styles.button, { [styles.active]: active }, className)}
			onMouseDown={handleOnMouseDown}
			onMouseUp={handleOnMouseUp}
			size={size}
			type={type}
			{...props}
		>
			{children}
		</AntButton>
	);
};

export default memo(ButtonWrap(Button));
