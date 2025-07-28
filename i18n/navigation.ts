import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { locales } from './request';

export const { Link, redirect, usePathname, useRouter } = createLocalizedPathnamesNavigation({
  locales,
  pathnames: {
    '/': '/',
    '/story': '/story',
    '/support': '/support', 
    '/updates': '/updates',
    '/media-kit': '/media-kit',
    '/faq': '/faq'
  }
});