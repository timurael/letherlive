"use client";

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import * as Progress from '@radix-ui/react-progress';

interface DonationMeterProps {
  goal: number;
  raised: number;
  donors: number;
}

export default function DonationMeter({ goal, raised, donors }: DonationMeterProps) {
  const t = useTranslations('homepage.donation');
  const percentage = Math.min((raised / goal) * 100, 100);

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm text-white/60">{t('raised')}</p>
          <p className="text-2xl font-bold">€{raised.toLocaleString()}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-white/60">{t('goal')}</p>
          <p className="text-2xl font-bold">€{goal.toLocaleString()}</p>
        </div>
      </div>

      <Progress.Root
        className="relative overflow-hidden bg-white/10 rounded-full w-full h-3"
        style={{ transform: 'translateZ(0)' }}
        value={percentage}
      >
        <Progress.Indicator
          className="bg-citrus w-full h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]"
          style={{ transform: `translateX(-${100 - percentage}%)` }}
        >
          <div className="absolute inset-0 shimmer" />
        </Progress.Indicator>
      </Progress.Root>

      <div className="flex justify-between items-center mt-4">
        <p className="text-sm text-white/60">
          {Math.round(percentage)}% {t('percentComplete')}
        </p>
        <p className="text-sm text-white/60">
          {donors} {t('donors')}
        </p>
      </div>
    </div>
  );
}