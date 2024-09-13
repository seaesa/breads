import { memo } from 'react';
import styles from './Image.module.less';
import { Image as AntImage } from 'antd';
import type { ImageProps } from 'antd';
import { cn } from '@/lib/utils';
import { CloseIcon } from '@/assets/icons';

const Image: React.FC<ImageProps> = ({ src, className, rootClassName, ...props }) => {
  return (
    <>
      <AntImage
        {...props}
        rootClassName={cn(styles.imagePreview, rootClassName)}
        className={cn(styles.image, className)}
        src={src}
        preview={{
          movable: false,
          scaleStep: 0,
          destroyOnClose: true,
          toolbarRender: () => null,
          icons: {
            close: <CloseIcon />,
          },
        }}
      />
    </>
  );
};
export default memo(Image);
