import styled from '@emotion/styled';
import { Button as AntButton } from 'antd';

export const Button = styled(AntButton)`
  ${(props) =>
    props.className?.includes('active') &&
    `
      transform: scale(0.9) matrix(1, 0, 0, 1, 0, 0) translateX(0);
      transition: transform 0.2s cubic-bezier(0.5, 0, 0, 1); 
    `}
`;