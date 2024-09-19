import styled from '@emotion/styled';
import { Flex } from 'antd';

export const ContainerWrap = styled('div')`
  position: relative;
  top: var(--desktop-header-height);
  min-height: calc(100vh - var(--desktop-header-height));
`;
export const Container = styled(Flex)`
  margin: 0 auto;
  width: 100%;
  z-index: 1;
  height: auto;

  @media screen and (min-width: 700px) {
    max-width: var(--large-screen-max-width);
    padding: 0 24px;
  }
`;
export const Main = styled('div')`
  min-height: calc(100vh - var(--desktop-header-height) - 74px);
`;
