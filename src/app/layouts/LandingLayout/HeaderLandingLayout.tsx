import { Fragment } from 'react/jsx-runtime';
import { LogoIcon } from '@/assets/icons';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components';
import { navigationConfig } from '@/configs/navigation';
import styles from './LandingLayout.module.less';

const HeaderLandingLayout = () => {
	return (
		<>
			<header className={cn(styles.headerLayout)}>
				<div className={cn(styles.logoWrap)}>
					<Link to="/">
						<LogoIcon className={cn(styles.logo)} />
					</Link>
				</div>
				<div className={cn(styles.navbar)}>
					{navigationConfig.header.map((navigation) => {
						const Icon = navigation.icon ? navigation.icon : Fragment;
						return (
							<div>
								<Button href={navigation.href} className={styles.button}>
									<Icon />
								</Button>
							</div>
						);
					})}
				</div>
				<div className={cn(styles.login)}>
					<Button type="dashed">Login</Button>
				</div>
			</header>
		</>
	);
};
export default HeaderLandingLayout;
