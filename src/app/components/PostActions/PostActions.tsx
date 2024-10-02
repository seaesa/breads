import { memo } from 'react';
import { HeartFapIcon, CommentIcon, RepostIcon, ShareIcon } from '@/assets/icons/';
import { Icon } from '@/app/components';
import styled from '@emotion/styled';
import { Button } from '@/app/components/base';

const PostActions = () => {
  return (
    <>
      <PostAction>
        <Button shape='round' size='middle'>
          <Icon icon={HeartFapIcon} light></Icon>
        </Button>
        <Button shape='round' size='middle'>
          <Icon icon={CommentIcon} light></Icon>
        </Button>
        <Button shape='round' size='middle'>
          <Icon icon={RepostIcon}></Icon>
        </Button>
        <Button shape='round' size='middle'>
          <Icon icon={ShareIcon} light></Icon>
        </Button>
      </PostAction>
    </>
  );
};

export const PostAction = styled('div')`
  display: flex;
`;

export default memo(PostActions);
