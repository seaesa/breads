export type SvgProps = React.FunctionComponent<React.ComponentProps<'svg'> & { title?: string }>;
export interface HeaderConfig {
  title?: string;
  href?: string;
  icon?: SvgProps;
}
export interface FooterConfig extends HeaderConfig {}
