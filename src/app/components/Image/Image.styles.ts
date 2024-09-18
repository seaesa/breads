import { css } from '@emotion/react';

export const styles = css`
  .image {
    width: auto !important;
    height: 100% !important;
    border-radius: 8px;
    object-fit: contain;
  }

  .rootClassName {
    max-width: min-content;
    cursor: pointer;
  }

  .preview {
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    background-color: #000;
  }

  .previewImage {
    -webkit-user-drag: none;
    user-select: none;
    pointer-events: none !important;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
