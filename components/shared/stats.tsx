'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView, useCounter } from '@/hooks';

interface StatsProps {
  stats: Array<{
    label: string;
    value: number;
    suffix?: string;
  }>;
  title?: string;
}

export default function Stats({ stats, title }: StatsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center text-3xl font-bold text-slate-900 sm:text-4xl"
          >
            {title}
          </motion.h2>
        )}

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <StatCounter
                value={stat.value}
                label={stat.label}
                suffix={stat.suffix}
                isInView={isInView}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface StatCounterProps {
  value: number;
  label: string;
  suffix?: string;
  isInView: boolean;
}

function StatCounter({ value, label, suffix = '', isInView }: StatCounterProps) {
  const count = useCounter(value, 2000, isInView);

  return (
    <div>
      <p className="mb-2 text-4xl font-bold text-blue-600 sm:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="text-slate-600">{label}</p>
    </div>
  );
}
