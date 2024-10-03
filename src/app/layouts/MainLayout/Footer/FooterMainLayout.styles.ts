import styled from '@emotion/styled';
import { Flex as AntFlex } from 'antd';
export const Flex = styled(AntFlex)`
  height: 70px;
  width: 100%;
  padding: 0 16px;
`;
export const FooterList = styled('ul')`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  display: inline-block;
`;
export const FooterItem = styled('li')`
  display: inline-block;
  &:first-of-type > a {
    text-decoration: none;
    cursor: text;
  }
  & + & {
    margin-left: 12px;
  }
  & > a {
    color: var(--secondary-text);
    font-size: 1.2rem;
    overflow: visible;
    min-width: 0;
    max-width: 100%;
    line-height: 1.4;
    font-weight: 400;
    text-align: start;
    word-wrap: break-word;
    position: relative;
    white-space: pre-line;
  }
`;
