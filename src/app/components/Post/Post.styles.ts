import { css } from '@emotion/react';

export const styles = css`
  .post {
    padding: 12px 0;
  }
  .avatar {
    padding-top: 4px;
    position: relative;
  }
  .titleLink {
    color: var(--primary-text);
    overflow: visible;
    max-width: 100%;
    font-size: 15px;
    text-align: start;
    font-weight: 600;
    position: relative;
    white-space: pre-line;
    word-break: break-all;
    line-height: 1.4;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
  .time {
    color: var(--secondary-text);
    font-size: 1.3rem;
  }
  .icon {
    color: var(--secondary-icon);
  }

  .contentTitle {
    margin-top: 6px;
    display: block;
  }

  .contentImageWrap {
    margin-top: 8px;

    .contentImage {
      max-height: @image-maxHeight;
      display: grid;
      grid-template-rows: minmax(0, 1fr);
      grid-template-columns: minmax(0, 1fr);
      user-select: none;
      border-radius: 8px;
      overflow: hidden;
    }
  }

  .action {
    margin: 10px 0 0 -16px;
  }
`;
