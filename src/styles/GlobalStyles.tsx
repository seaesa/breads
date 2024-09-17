import { css, Global } from '@emotion/react';
import { resetCss } from './resetCss';

const GlobalStyles = () => {
  return <Global styles={globalStyles} />;
};

const globalStyles = css`
  ${resetCss}

  :root {
    --base-color: rgb(0, 0, 0);
    --secondary-color: rgb(255, 255, 255);
    // text
    --primary-text: var(--base-color);
    --secondary-text: rgb(153, 153, 153);
    // background
    --primary-background: var(--secondary-color);
    --secondary-background: rgb(250, 250, 250);
    --header-background: rgba(255, 255, 255, 0.85);

    // button
    --primary-button-text: var(--secondary-color);
    --primary-button-background: var(--base-color);

    // outline
    --primary-outline: rgba(0, 0, 0, 0.15);
    // navigation & icon
    --primary-icon: var(--primary-text);
    --secondary-icon: var(--secondary-text);
    --charcoal-icon: rgb(66, 66, 66);
    --charcoal-text: var(--charcoal-icon);
    --navigation-icon: rgb(184, 184, 184);
    --navigation-item-hover-background: rgba(0, 0, 0, 0.04);

    --dark-backdrop-background: rgba(0, 0, 0, 0.7);
    --font-family-system: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
      'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';

    &.dark {
      --base-color: rgb(255, 255, 255);
      --secondary-color: rgb(0, 0, 0);
      // text
      --primary-text: rgb(243, 245, 247);
      --secondary-text: rgb(119, 119, 119);
      // background
      --primary-background: rgb(16, 16, 16);
      --secondary-background: rgb(10, 10, 10);
      --header-background: rgba(16, 16, 16, 0.85);
      --elevated-background: rgb(24, 24, 24);
      // button
      --primary-button-text: var(--secondary-color);
      --primary-button-background: var(--base-color);
      // outline
      --primary-outline: rgba(243, 245, 247, 0.15);
      // navigation & icon
      --primary-icon: var(--primary-text);
      --secondary-icon: var(--secondary-text);
      --charcoal-icon: rgb(204, 204, 204);
      --charcoal-text: var(--charcoal-icon);
      --navigation-icon: rgb(77, 77, 77);
      --navigation-item-hover-background: rgba(255, 255, 255, 0.05);
    }
  }

  body {
    font-family: 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial',
      'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    font-weight: 400;
    font-style: normal;
    background-color: #fff;
    color: #000;
  }

  html {
    font-size: 62.5%;
    overflow-y: scroll !important;
    touch-action: manipulation;
  }
  ::-webkit-scrollbar {
    background-color: #fff;
  }
  .classSvg {
    stroke: currentColor;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;

export default GlobalStyles;
