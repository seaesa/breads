import styled from '@emotion/styled';
import { Link as ReactLink } from 'react-router-dom';
export const Post = styled('div')`
  padding: 12px 0;
`;
export const Avatar = styled('div')`
  padding-top: 4px;
  position: relative;
`;
export const Time = styled('time')`
  color: var(--secondary-text);
  font-size: 1.3rem;
`;
export const Title = styled('div')``;
export const Link = styled(ReactLink)`
  color: var(--primary-text);
  overflow: visible;
  max-width: 100%;
  font-size: 15px;
  text-align: start;
  font-weight: 600;
  position: relative;
  white-space: pre-line;
  word-break: break-all;
  line-height: 1.4;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
export const ImageWrap = styled('div')``;
export const Image = styled('div')``;
export const Content = styled('div')`
  ${Title} {
    margin-top: 6px;
    display: block;
  }
  ${ImageWrap} {
    margin-top: 8px;
  }
  ${Image} {
    --image-max-height: 430px;
    max-height: var(--image-max-height);
    display: grid;
    grid-template-rows: minmax(0, 1fr);
    grid-template-columns: minmax(0, 1fr);
    user-select: none;
    border-radius: 8px;
    overflow: hidden;
  }
`;
export const Action = styled('div')`
  margin: 10px 0 0 -16px;
`;
