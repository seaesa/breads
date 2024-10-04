import styled from '@emotion/styled';
import { Flex } from 'antd';
import { Icon as MyIcon } from '@/app/components';
import { Button as MyButton } from '@/app/components/base';
import { LogoIcon } from '@/assets/icons';
export const Logo = styled(Flex)`
  width: 34px;
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
  height: 60px;
  width: 60px;
  touch-action: manipulation;
  user-select: none;
  color: var(--secondary-icon);
  @media screen and (max-height: 600px) {
    height: 50px;
  }
`;
export const Icon = styled(MyIcon)`
  --width: 24px;
  --height: 24px;
  --fill: transparent;
  color:var(--navigation-icon);
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