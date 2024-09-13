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
        rootClassName={cn(styles.rootClassName, rootClassName)}
        className={cn(styles.image, className)}
        src={src}
        preview={{
          className: styles.preview,
          mask: false,
          movable: false,
          scaleStep: 0,
          destroyOnClose: true,
          toolbarRender: () => null,
          imageRender: () => <img src={src} className={styles.previewImage} />,
          icons: {
            close: <CloseIcon className={cn('stroke')} />,
          },
        }}
        {...props}
      />
    </>
  );
};
export default memo(Image);
