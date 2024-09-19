import { memo } from 'react';
import type { ImageProps } from 'antd';
import { ImageStyle } from './Image.styles';

const Image: React.FC<ImageProps> = ({ src, ...props }) => {
  return (
    <>
      <ImageStyle
        src={src}
        preview={{
          mask: false,
          movable: false,
          scaleStep: 0,
          destroyOnClose: true,
          toolbarRender: () => null,
          imageRender: () => <img src={src} />,
        }}
        {...props}
      />
    </>
  );
};
export default memo(Image);
