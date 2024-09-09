import Logo from '@/assets/logo.svg?react';
import HomeIcon from '@/assets/icons/home-primary.svg?react';
import SearchIcon from '@/assets/icons/search.svg?react';
import PencilIcon from '@/assets/icons/pencil.svg?react';
import HeartIcon from '@/assets/icons/heart.svg?react';
import UserIcon from '@/assets/icons/user.svg?react';

import styles from './LandingLayout.module.less';
import { cn, id } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components';

type IconProps = React.FunctionComponent<React.ComponentProps<'svg'> & { title?: string }>;
interface ButtonProps {
	icon: IconProps;
	link?: string;
}
const ButtonNavigation: React.FC<ButtonProps> = ({ icon: Icon, link }) => {
	return (
		<>
			<div>
				<Button href={link} className={styles.button}>
					<Icon />
				</Button>
			</div>
		</>
	);
};
const navigation = [
	{
		link: '/',
		icon: HomeIcon,
	},
	{
		link: '/search',
		icon: SearchIcon,
	},
	{
		icon: PencilIcon,
	},
	{
		icon: HeartIcon,
	},
	{
		icon: UserIcon,
	},
];
const HeaderLandingLayout = () => {
	return (
		<>
			<header className={cn(styles.headerLayout)}>
				<div className={cn(styles.logoWrap)}>
					<Link to="/">
						<Logo className={cn(styles.logo)} />
					</Link>
				</div>
				<div className={cn(styles.navigationLayout)}>
					{navigation.map((navigate) => (
						<ButtonNavigation icon={navigate.icon} link={navigate.link} key={id()} />
					))}
				</div>
				<div className={cn(styles.login)}>
					<Button type="dashed">Login</Button>
				</div>
			</header>
		</>
	);
};
const FooterLandingLayout = () => {
	return <></>;
};
const LandingLayout = ({ children }: { children: JSX.Element }) => {
	return (
		<>
			<HeaderLandingLayout />
			{children}
			<FooterLandingLayout />
		</>
	);
};

export default LandingLayout;
