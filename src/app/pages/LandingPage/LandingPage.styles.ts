import { css } from '@emotion/react';

export const row = css`
  padding: 12px 0;
`;
export const avatar = css`
  padding-top: 4px;
  position: relative;
`;

export const titleLink = css`
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
`;
export const time = css`
  color: var(--secondary-text);
  font-size: 1.3rem;
`;
export const icon = css`
  color: var(--secondary-icon);
`;
