import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import DonationMeter from '@/components/DonationMeter';
import Link from 'next/link';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <div className="min-h-screen">
      <Hero />
      
      <section className="container mx-auto px-4 py-20">
        <HomepageIntro locale={locale} />
      </section>

      <section className="container mx-auto px-4 pb-20">
        <DonationMeter goal={10000} raised={1250} donors={42} />
      </section>

      <section className="container mx-auto px-4 pb-20">
        <QuickLinks locale={locale} />
      </section>
    </div>
  );
}

function HomepageIntro({ locale }: { locale: string }) {
  const t = useTranslations('homepage.intro');

  return (
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
        {t('title')}
      </h2>
      <p className="text-lg text-white/80 leading-relaxed">
        {t('text')}
      </p>
    </div>
  );
}

function QuickLinks({ locale }: { locale: string }) {
  const t = useTranslations('navigation');

  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
      <Link
        href={`/${locale}/story`}
        className="group bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-citrus/50 transition-all"
      >
        <h3 className="text-xl font-bold mb-2 group-hover:text-citrus transition-colors">
          {t('story')}
        </h3>
        <p className="text-white/60">Learn about Cemre's journey and why she needs help</p>
      </Link>

      <Link
        href={`/${locale}/support`}
        className="group bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-citrus/50 transition-all"
      >
        <h3 className="text-xl font-bold mb-2 group-hover:text-citrus transition-colors">
          {t('support')}
        </h3>
        <p className="text-white/60">Multiple ways to donate and make a difference</p>
      </Link>

      <Link
        href={`/${locale}/media-kit`}
        className="group bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-citrus/50 transition-all"
      >
        <h3 className="text-xl font-bold mb-2 group-hover:text-citrus transition-colors">
          {t('mediaKit')}
        </h3>
        <p className="text-white/60">Share Cemre's story and spread awareness</p>
      </Link>
    </div>
  );
}