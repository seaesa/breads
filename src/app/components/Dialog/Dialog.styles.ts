import { css } from '@emotion/react';
export const styles = css`
  .instagramWrap {
    padding: 20px 12px 20px;
    border: 1px solid var(--primary-outline);
    border-radius: 16px;
    user-select: none;
    background-color: transparent;
    min-width: 0;
    min-height: 0;
    width: 100%;
    cursor: pointer;
    .icon {
      margin: 8px;
    }
  }
  .name {
    flex-grow: 1;
    text-align: center;
    margin-bottom: 0 !important;
  }
  .dialog {
    padding: 48px 56px 40px;
    .modalContent {
      text-align: center;
      padding-bottom: 32px;
    }
    .icon {
      padding-bottom: 20px;
    }
    .text {
      color: var(--secondary-text);
    }
  }
`;
