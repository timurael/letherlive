"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function UpdatesPage() {
  const t = useTranslations('updates');

  const updates = [
    {
      id: 1,
      date: '2025-01-28',
      title: 'Campaign Launch',
      content: 'We launched the campaign to help Cemre find safety and stability.',
      image: null,
    },
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

        <div className="max-w-3xl mx-auto">
          {updates.length > 0 ? (
            <div className="space-y-8">
              {updates.map((update, index) => (
                <motion.article
                  key={update.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
                >
                  <time className="text-sm text-citrus">
                    {new Date(update.date).toLocaleDateString()}
                  </time>
                  <h2 className="text-2xl font-bold mt-2 mb-4">{update.title}</h2>
                  <p className="text-white/80">{update.content}</p>
                </motion.article>
              ))}
            </div>
          ) : (
            <p className="text-center text-white/60">{t('empty')}</p>
          )}
        </div>
      </div>
    </div>
  );
}