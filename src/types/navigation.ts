export interface HeaderConfig {
	title?: string;
	href?: string;
	icon?: React.FunctionComponent<React.ComponentProps<'svg'> & { title?: string }>;
}
export interface FooterConfig extends HeaderConfig {}
