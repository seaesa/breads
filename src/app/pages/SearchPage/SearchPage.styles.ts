import { Icon as MyIcon } from '@/app/components';
import styled from '@emotion/styled';
import { Flex } from 'antd';

// width: calc(@search-width + 34px);
export const Search = styled(Flex)`
  width: 100%;
  border-radius: 20px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  padding: 14px 16px;
`;

export const Icon = styled(MyIcon)`
  --fill: transparent;
`;

export const Input = styled('input')`
  outline: none;
  background: transparent;
  height: 100%;
  width: 100%;
  border: none;
`;
