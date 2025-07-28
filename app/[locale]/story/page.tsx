"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function StoryPage() {
  const t = useTranslations('story');

  const timelineItems = [
    { key: 'rejection', icon: '💔' },
    { key: 'homeless', icon: '🏠' },
    { key: 'violence', icon: '⚠️' },
    { key: 'temporary', icon: '🏘️' },
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-12"
        >
          {t('title')}
        </motion.h1>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-2">
                    {t(`timeline.${item.key}.title`)}
                  </h3>
                  <p className="text-white/80">
                    {t(`timeline.${item.key}.text`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 bg-gradient-to-r from-citrus/20 to-neonPink/20 p-8 rounded-lg border border-white/10"
          >
            <blockquote className="text-xl italic text-center">
              "{t('quote')}"
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-lg text-white/80">
              {t('context')}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}