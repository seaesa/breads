import { memo } from 'react';
import { Image as AntImage } from 'antd';
import type { ImageProps } from 'antd';
import { cn } from '@/lib/utils';
import { CloseIcon } from '@/assets/icons';
import { styles } from './Image.styles';

const Image: React.FC<ImageProps> = ({ src, className, rootClassName, ...props }) => {
  return (
    <>
      <AntImage
        css={styles}
        rootClassName={cn('rootClassName', rootClassName)}
        className={cn('image', className)}
        src={src}
        preview={{
          className: 'preview',
          mask: false,
          movable: false,
          scaleStep: 0,
          destroyOnClose: true,
          toolbarRender: () => null,
          imageRender: () => <img src={src} className="previewImage" />,
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
