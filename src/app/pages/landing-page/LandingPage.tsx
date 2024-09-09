import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
import LandingLayout from '@/app/layouts/landing-layout/LandingLayout';
import { cn } from '@/lib/utils';
import styles from './LandingPage.module.less';
import EllipsisIcon from '@/assets/icons/ellipsis.svg?react';

import { Image } from 'antd';
const Post = () => {
	return (
		<>
			<div className={styles.postWrap}>
				<div className={styles.avatar}>
					<Link to="">
						<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
					</Link>
				</div>
				<div className={styles.title}>
					<div className={styles.titleHeading}>
						<Link className={styles.titleLink} to="">
							james_photography89
						</Link>
						<div>
							<time dateTime={new Date().toLocaleDateString()} title="time">
								<span className={styles.time}>14h</span>
							</time>
						</div>
					</div>
					<div>
						<EllipsisIcon className={cn(styles.icon)} />
					</div>
				</div>
				<div className={styles.content}>
					<div>
						<span className={styles.contentTitle}>
							Angel Reese announces she will not play the rest of her rookie season
							due to injury - what a rough moment in an otherwise incredible year. She
							will be back, and she will be back dazzling.
						</span>
						<div className={styles.contentImageWrap}>
							<div className={styles.contentImage}>
								<Image
									className={styles.image}
									src="https://images.pexels.com/photos/25189483/pexels-photo-25189483/free-photo-of-close-up-of-orchids.jpeg"
								/>
							</div>
						</div>
						<div className={styles.action}>
							<div className={styles.actionIcon}></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

const LangdingPage = () => {
	return (
		<>
			<LandingLayout>
				<div className={styles.containerWrap}>
					<div className={styles.containerChild}>
						<div className={cn(styles.container)}>
							<div className={cn(styles.contentWrap)}>
								<Post />
							</div>
						</div>
					</div>
				</div>
			</LandingLayout>
		</>
	);
};
export default LangdingPage;
