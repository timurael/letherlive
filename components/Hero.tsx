"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Hero() {
  const t = useTranslations('homepage.hero');
  const locale = useLocale();

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-10" />
      
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-8"
          initial="hidden"
          animate="visible"
        >
          <motion.span
            custom={0}
            variants={textVariants}
            className="block glitch"
            data-text="Let Her Live"
          >
            Let Her Live
          </motion.span>
        </motion.h1>

        <div className="space-y-4 mb-12">
          <motion.p
            custom={1}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-white/80"
          >
            {t('line1')}
          </motion.p>
          <motion.p
            custom={2}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl text-white/80"
          >
            {t('line2')}
          </motion.p>
          <motion.p
            custom={3}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl font-bold"
          >
            {t('line3')}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link
            href={`/${locale}/support`}
            className="inline-flex items-center px-8 py-4 bg-citrus text-black font-bold rounded-lg hover:bg-citrus/90 transition-all transform hover:scale-105 group"
          >
            {t('donateNow')}
            <motion.span
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-20" />
    </section>
  );
}