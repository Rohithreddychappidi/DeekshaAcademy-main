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
      className={`relative overflow-hidden py-14 sm:py-16 lg:py-24 ${
        darkBg
          ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white'
          : 'bg-gradient-to-b from-slate-50/70 via-white to-slate-50/50 text-slate-900'
      } ${className}`}
    >
      {/* Liquid Ambient Light Orbs */}
      {darkBg ? (
        <>
          <div className="absolute top-1/4 left-1/6 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/6 h-80 w-80 rounded-full bg-emerald-500/10 blur-[110px] pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute top-10 right-10 h-72 w-72 rounded-full bg-blue-500/5 blur-[90px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 h-72 w-72 rounded-full bg-emerald-500/5 blur-[90px] pointer-events-none" />
        </>
      )}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 sm:mb-14 text-center max-w-3xl mx-auto"
          >
            {title && (
              <h2 className={`mb-3.5 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight ${
                darkBg ? 'text-white' : 'text-slate-900'
              }`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-sm sm:text-base lg:text-lg leading-relaxed ${
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
