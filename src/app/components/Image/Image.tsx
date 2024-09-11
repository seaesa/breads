import { memo } from 'react';
import styles from './Image.module.less';
import { Image as AntImage } from 'antd';
import type { ImageProps } from 'antd';
import { cn } from '@/lib/utils';

const Image: React.FC<ImageProps> = ({ src, className, rootClassName, ...props }) => {
	return (
		<>
			<AntImage
				{...props}
				rootClassName={cn(styles.imagePreview, rootClassName)}
				className={cn(styles.image, className)}
				src={src}
			/>
		</>
	);
};
export default memo(Image);
