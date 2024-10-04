import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const BaseLink = styled(Link)`
  border: 0 solid var(--dark-overlay);
  padding: 0;
  min-width: 0;
  margin: 0;
  min-height: 0;
  background-color: transparent;
  touch-action: manipulation;
  user-select: none;
  cursor: pointer;
  outline-style: none;
  align-items: stretch;
  border-radius: inherit;
  position: relative;
  z-index: 0;
  -webkit-tap-highlight-color: transparent;
  text-align: inherit;
  list-style-type: none;
  text-decoration: none;
  outline: none;
`;