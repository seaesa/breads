import Logo from '@/assets/logo.svg?react';
import { Button } from 'antd';
import styles from './LandingLayout.module.less';
import { cn, id } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faMagnifyingGlass, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

const { headerLayout, logo, button, svg, login, navigationLayout, buttonClick } = styles;

const ButtonNavigation = ({ icon, link = '' }: { icon: IconProp; link?: string }) => {
	const [active, setActive] = useState(false);
	const handleMouseDown = () => {
		setActive(true);
	};
	const handleMouseUp = () => {
		setActive(false);
	};
	return (
		<>
			<div>
				<Link to={link}>
					<Button
						onMouseDown={handleMouseDown}
						onMouseUp={handleMouseUp}
						className={cn(button, { [buttonClick]: active })}
						type="text"
						size="large"
					>
						<FontAwesomeIcon icon={icon} className={svg} />
					</Button>
				</Link>
			</div>
		</>
	);
};
const navigation = [
	{
		link: '/',
		icon: faHouse,
	},
	{
		link: '/search',
		icon: faMagnifyingGlass,
	},
	{
		icon: faPenToSquare,
	},
	{
		icon: faHeart,
	},
	{
		icon: faUser,
	},
];
const HeaderLandingLayout = () => {
	return (
		<>
			<header className={cn(headerLayout)}>
				<div className={cn(logo)}>
					<Logo />
				</div>
				<div className={cn(navigationLayout)}>
					{navigation.map((navigate) => (
						<ButtonNavigation icon={navigate.icon} link={navigate.link} key={id()} />
					))}
				</div>
				<div className={cn(login)}>
					<Button type="primary">Login</Button>
				</div>
			</header>
		</>
	);
};
const LandingLayout = ({ children }: { children: JSX.Element }) => {
	return (
		<>
			<HeaderLandingLayout />
			{children}
		</>
	);
};

export default LandingLayout;
