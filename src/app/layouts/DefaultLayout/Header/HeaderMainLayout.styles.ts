import styled from '@emotion/styled';
import { Flex } from 'antd';
import { Icon as MyIcon } from '@/app/components';
import { Button as MyButton } from '@/app/components/base';
import { LogoIcon } from '@/assets/icons';

export const Logo = styled(Flex)`
  width: 34px;
  height: 34px;
  padding: 15px 0;
  overflow: hidden;
`;
export const LogoImage = styled(LogoIcon)`
  cursor: pointer;
  list-style: none;
  user-select: none;
  fill: var(--primary-icon);
  transition-property: transform;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.1s linear;
  }
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

export const Header = styled(Flex)`
  position: fixed;
  top: 0;
  left: 0;
  width: var(--side-navigation-width);
  height: 100%;
  min-height: 480px;
  background-color: var(--header-background);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  z-index: 1;
  overflow: visible;
`;

export const Navigation = styled(Flex)``;
