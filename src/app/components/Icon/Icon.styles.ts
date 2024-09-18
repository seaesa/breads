import { css } from '@emotion/react';

export const styles = css`
  :root {
    --fill: currentColor;
    --height: 16px;
    --width: 16px;
  }

  #idSvg {
    height: var(--height, revert);
    width: var(--width, revert);
    fill: var(--fill, revert);
    color: inherit;
    flex-shrink: 0;
    position: relative;
    display: block;
  }
`;
