import { forwardRef } from 'react';
import { BaseLink } from './Link.styles';
import type { LinkProps } from 'react-router-dom';

const Link = forwardRef<HTMLAnchorElement, LinkProps>(({ to = '', ...props }, ref) => {
  return <BaseLink to={to} ref={ref} {...props} />;
});

export default Link;
