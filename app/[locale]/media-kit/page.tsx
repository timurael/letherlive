"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function MediaKitPage() {
  const t = useTranslations('mediaKit');

  const resources = [
    {
      key: 'graphics',
      files: ['Instagram Story', 'Instagram Post', 'Twitter Banner'],
    },
    {
      key: 'captions',
      content: 'Pre-written captions in multiple languages for social media posts.',
    },
    {
      key: 'hashtags',
      content: '#LetHerLive #TransRights #TransLivesMatter #Turkey #LGBTQ',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-heading font-bold text-center mb-4"
        >
          {t('title')}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-center text-white/80 mb-12"
        >
          {t('subtitle')}
        </motion.p>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.key}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-4">
                  {t(resource.key)}
                </h3>
                {resource.files ? (
                  <ul className="space-y-2">
                    {resource.files.map((file) => (
                      <li key={file} className="flex items-center justify-between">
                        <span className="text-white/80">{file}</span>
                        <button className="text-citrus hover:text-citrus/80 transition-colors">
                          {t('download')} →
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-white/80">{resource.content}</p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 bg-gradient-to-r from-citrus/20 to-neonPink/20 p-8 rounded-lg border border-white/10 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">{t('press')}</h3>
            <p className="text-white/80 mb-6">
              For press inquiries and additional materials, please contact us.
            </p>
            <a
              href="mailto:press@letherlive.org"
              className="inline-flex items-center px-6 py-3 bg-citrus text-black font-bold rounded-lg hover:bg-citrus/90 transition-all"
            >
              Contact Press Team →
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}