import { css } from '@emotion/react';

export const styles = css`
  width: calc(@search-width + 34px);
  .searchWrap {
    .searchIcon {
      --fill: transparent;
      --width: 16px;
      --height: 16px;
    }

    .searchBox {
      width: 100%;
      border-radius: 20px;
      border: 1px solid #ccc;
      display: flex;
      align-items: center;
      padding: 14px 16px;
    }

    .searchInput {
      outline: none;
      background: transparent;
      height: 100%;
      width: 100%;
      border: none;
    }
  }
`;
