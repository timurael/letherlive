"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import DonationMeter from '@/components/DonationMeter';

export default function SupportPage() {
  const t = useTranslations('support');

  const costs = [
    { key: 'housing', amount: 300 },
    { key: 'medical', amount: 150 },
    { key: 'essentials', amount: 200 },
  ];

  const donationMethods = [
    { 
      key: 'card',
      color: 'bg-citrus',
      textColor: 'text-black',
      url: '#',
      message: 'GoFundMe link will be available soon'
    },
    { 
      key: 'bank',
      color: 'bg-grape',
      textColor: 'text-white',
      details: 'Contact us for bank transfer details'
    },
    { 
      key: 'paypal',
      color: 'bg-neonPink',
      textColor: 'text-white',
      url: '#',
      message: 'PayPal link will be available soon'
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-12"
          >
            <DonationMeter goal={10000} raised={0} donors={0} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-bold mb-6">{t('breakdown.title')}</h2>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <div className="space-y-4">
                {costs.map((cost) => (
                  <div key={cost.key} className="flex justify-between items-center">
                    <span className="text-white/80">{t(`breakdown.${cost.key}`)}</span>
                    <span className="font-bold">
                      €{cost.amount} {t('breakdown.perMonth')}
                    </span>
                  </div>
                ))}
                <div className="border-t border-white/10 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-citrus">
                      €650 {t('breakdown.perMonth')}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-white/60 mt-6">
                {t('breakdown.note')}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6">{t('methods.title')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {donationMethods.map((method, index) => (
                <motion.div
                  key={method.key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`${method.color} ${method.textColor} rounded-lg p-6 text-center cursor-pointer hover:scale-105 transition-transform`}
                  onClick={() => method.url && window.open(method.url, '_blank')}
                >
                  <h3 className="text-xl font-bold mb-2">
                    {t(`methods.${method.key}`)}
                  </h3>
                  {method.details && (
                    <p className="text-sm opacity-80">
                      {method.details}
                    </p>
                  )}
                  {method.message && (
                    <p className="text-sm opacity-80 mt-2">
                      {method.message}
                    </p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-center text-xl font-bold"
          >
            <p>{t('goal')}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}