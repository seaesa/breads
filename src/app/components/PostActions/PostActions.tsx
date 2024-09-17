import { memo } from 'react';
import HeartLightIcon from '@/assets/icons/heart-light.svg?react';
import CommentIcon from '@/assets/icons/comment.svg?react';
import RepostIcon from '@/assets/icons/repost.svg?react';
import ShareIcon from '@/assets/icons/share.svg?react';

import styles from './PostActions.module.less';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const PostActions = () => {
  return (
    <>
      <div className={styles.actionWrap}>
        <Button shape="round" size="middle">
          <Icon icon={HeartLightIcon} className="classSvg"></Icon>
        </Button>
        <Button shape="round" size="middle">
          <Icon icon={CommentIcon} className="classSvg"></Icon>
        </Button>
        <Button shape="round" size="middle">
          <Icon icon={RepostIcon}></Icon>
        </Button>
        <Button shape="round" size="middle">
          <Icon icon={ShareIcon} className="classSvg"></Icon>
        </Button>
      </div>
    </>
  );
};
export default memo(PostActions);
