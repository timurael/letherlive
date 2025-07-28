"use client";

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img src="/letherlive-logo.png" alt="Let Her Live" className="h-6 w-6 opacity-50" />
            <span className="text-sm text-white/50">{t('tagline')}</span>
          </div>
          <div className="flex items-center space-x-6 text-sm text-white/50">
            <a href="/privacy" className="hover:text-white transition-colors">
              {t('privacy')}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              #LetHerLive
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}