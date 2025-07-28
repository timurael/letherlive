"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function FAQPage() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = ['real', 'money', 'safe'];

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
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="text-lg font-bold">
                    {t(`items.${item}.question`)}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    className="text-citrus"
                  >
                    ↓
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-4 text-white/80">
                    {t(`items.${item}.answer`)}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-white/60 mb-6">
              Have more questions? We're here to help.
            </p>
            <a
              href="mailto:info@letherlive.org"
              className="inline-flex items-center px-6 py-3 bg-citrus text-black font-bold rounded-lg hover:bg-citrus/90 transition-all"
            >
              Contact Us →
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}