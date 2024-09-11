import { memo } from 'react';
import HeartLightIcon from '@/assets/icons/heart-light.svg?react';
import CommentIcon from '@/assets/icons/comment.svg?react';
import RepostIcon from '@/assets/icons/repost.svg?react';
import ShareIcon from '@/assets/icons/share.svg?react';

import styles from './PostActions.module.less';
import Button from '../Button/Button';

const PostActions = () => {
	return (
		<>
			<div className={styles.actionWrap}>
				<Button shape="round" size="middle">
					<HeartLightIcon />
				</Button>
				<Button shape="round" size="middle">
					<CommentIcon />
				</Button>
				<Button shape="round" size="middle">
					<RepostIcon />
				</Button>
				<Button shape="round" size="middle">
					<ShareIcon />
				</Button>
			</div>
		</>
	);
};
export default memo(PostActions);
