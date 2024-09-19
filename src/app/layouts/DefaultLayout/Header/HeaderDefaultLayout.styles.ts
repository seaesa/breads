import { Icon as MyIcon } from '@/app/components';
import { Button as MyButton } from '@/app/components/base';
import { LogoIcon as MyLogoIcon } from '@/assets/icons';
import styled from '@emotion/styled';
import { Row as AntRow, Flex as AntFlex, Col as AntCol } from 'antd';

export const Logo = styled('div')`
  margin-left: 19px;
  width: 32px;
  height: 32px;
`;
export const LogoIcon = styled(MyLogoIcon)`
  cursor: pointer;
  transition-property: transform;
  list-style: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  fill: var(--primary-icon);

  &:hover {
    transform: scale(1.1);
    transition: transform 0.1s linear;
  }
`;
export const Row = styled(AntRow)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: var(--desktop-header-height);
  max-width: var(--large-screen-max-page-width);
  margin: auto auto;
  backdrop-filter: blur(28.5px);
  z-index: 1;
  background-color: var(--header-background);
`;
export const Flex = styled(AntFlex)`
  height: 100%;
  max-width: var(--large-screen-max-width);
  width: 100vw;
  padding: 0 70px;
`;
export const Col = styled(AntCol)`
  margin-right: 13px;
`;
export const Button = styled(MyButton)`
  text-decoration: none;
  padding: 20px 32px;
  margin: 4px 2px;
  height: inherit;
  touch-action: manipulation;
  user-select: none;
  color: var(--secondary-icon);
`;
export const Icon = styled(MyIcon)`
  --width: 26px;
  --height: 26px;
  --fill: transparent;
`;
