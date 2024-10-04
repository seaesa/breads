import { HomePrimaryIcon, SearchIcon, HeartIcon, UserIcon, PlusIcon } from '@/assets/icons';
import type { FooterConfig, HeaderConfig } from '@/types/navigation';
export interface NavigationConfig {
  header: HeaderConfig[];
  footer: FooterConfig[];
}
export const navigationConfig: NavigationConfig = {
  header: [
    { title: 'Home', href: '/', icon: HomePrimaryIcon, fill: 'currentColor' },
    { title: 'Search', href: '/search', icon: SearchIcon },
    { title: 'Create', icon: PlusIcon },
    { title: 'Activity', href: '/activity', icon: HeartIcon },
    { title: 'User', href: '/:user', icon: UserIcon },
  ],
  footer: [
    { title: '© 2024' },
    {
      title: 'Threads Terms',
      href: 'https://help.instagram.com/769983657850450',
    },
    {
      title: 'Privacy Policy',
      href: 'https://help.instagram.com/515230437301944',
    },
    {
      title: 'Cookies Policy',
      href: 'https://privacycenter.instagram.com/policies/cookies/',
    },
    { title: 'Report a problem' },
  ],
};
