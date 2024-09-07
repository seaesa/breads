import { Link } from 'react-router-dom';
import { Avatar } from 'antd';
import LandingLayout from '@/app/layouts/landing-layout/LandingLayout';
import { cn } from '@/lib/utils';
import styles from './LandingPage.module.less';
const { container, contentWrap, postWrap, containerWrap, containerChild } = styles;

const Post = () => {
	return (
		<>
			<div className={postWrap}>
				<div>
					<Link to="">
						<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
					</Link>
				</div>
				<div>
					<div>
						<Link to="">james_photography89</Link>
					</div>
					<div></div>
				</div>
				<div></div>
			</div>
		</>
	);
};

const LangdingPage = () => {
	return (
		<>
			<LandingLayout>
				<div className={containerWrap}>
					<div className={containerChild}>
						<div className={cn(container)}>
							<div className={cn(contentWrap)}>
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
