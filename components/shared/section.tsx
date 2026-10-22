'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  title?: string;
  subtitle?: string;
  id?: string;
  darkBg?: boolean;
}

export default function Section({
  children,
  className = '',
  title,
  subtitle,
  id,
  darkBg = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-12 sm:py-16 lg:py-20 ${
        darkBg ? 'bg-slate-900 text-white' : 'bg-white'
      } ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            {title && (
              <h2 className={`mb-4 text-3xl font-bold sm:text-4xl ${
                darkBg ? 'text-white' : 'text-slate-900'
              }`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg ${
                darkBg ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {subtitle}
              </p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
