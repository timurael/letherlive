"use client";

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales } from '@/i18n/request';
import { motion } from 'framer-motion';

export default function Navigation() {
  const t = useTranslations('navigation');
  const locale = useLocale();
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/story', label: t('story') },
    { href: '/support', label: t('support') },
    { href: '/updates', label: t('updates') },
    { href: '/media-kit', label: t('mediaKit') },
    { href: '/faq', label: t('faq') },
  ];

  const getLanguageSwitchUrl = (newLocale: string) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/';
    return `/${newLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;
  };

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <img src="/letherlive-logo.png" alt="Let Her Live" className="h-8 w-8" />
            <span className="font-heading text-xl font-bold">Let Her Live</span>
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={`/${locale}${item.href}`}
                className="text-sm hover:text-citrus transition-colors relative group"
              >
                {item.label}
                {pathname.endsWith(item.href) && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-citrus"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              {locales.map((lng) => (
                <Link
                  key={lng}
                  href={getLanguageSwitchUrl(lng)}
                  className={`uppercase hover:text-citrus transition-colors ${
                    locale === lng ? 'text-citrus font-bold' : ''
                  }`}
                >
                  {lng}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}