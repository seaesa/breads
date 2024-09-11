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
				<div className={cn(styles.navbar)}>
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
const footer = [
	{
		name: '© 2024',
	},
	{
		name: 'Threads Terms',
		link: '...',
	},
	{
		name: 'Privacy Policy',
		link: '...',
	},
	{
		name: 'Cookies Policy',
		link: '...',
	},
	{
		name: 'Report a problem',
		link: '...',
	},
];
const FooterLandingLayout = () => {
	return (
		<>
			<div className={styles.footerWrap}>
				<ul className={styles.footer}>
					{footer.map((footer) =>
						!footer.link ? (
							<li key={id()} className={styles.footerName}>
								{footer.name}
							</li>
						) : (
							<li key={id()} className={styles.footerName}>
								<Link to={footer.link}>{footer.name}</Link>
							</li>
						),
					)}
				</ul>
			</div>
		</>
	);
};
const LandingLayout = ({ children }: { children: JSX.Element }) => {
	return (
		<>
			<HeaderLandingLayout />
			<div className={styles.containerWrap}>
				<div className={styles.containerChild}>
					<div className={styles.container}>
						<div className={styles.main}>{children}</div>
						<FooterLandingLayout />
					</div>
				</div>
			</div>
		</>
	);
};

export default LandingLayout;
