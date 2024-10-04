export type SvgProps = React.FunctionComponent<React.ComponentProps<'svg'> & { title?: string }>;
export interface HeaderConfig {
  title: string;
  href?: string;
  icon: SvgProps;
  [name: string]: unknown;
}
export interface FooterConfig extends Pick<HeaderConfig, 'href' | 'title'> { }