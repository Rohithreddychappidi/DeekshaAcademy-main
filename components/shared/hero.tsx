'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  backgroundImage?: string;
  primaryCTA?: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
}

export default function Hero({
  title,
  subtitle,
  description,
  backgroundImage,
  primaryCTA,
  secondaryCTA,
}: HeroProps) {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }
          : { backgroundColor: '#0F172A' }
      }
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-900/70 to-slate-950/90 backdrop-blur-[1px]" />

      {/* Liquid Ambient Light Orbs for Glassmorphism Depth */}
      <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-emerald-500/20 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 h-80 w-80 rounded-full bg-blue-600/25 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 h-64 w-64 rounded-full bg-cyan-400/15 blur-[90px] pointer-events-none" />

      {/* Content */}
      <div className="relative flex min-h-screen items-center justify-center py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              {title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="mb-6 text-base sm:text-xl lg:text-2xl text-blue-200/95 font-medium">
              {subtitle}
            </p>
          </motion.div>

          {description && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="mb-8 text-sm sm:text-base lg:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
                {description}
              </p>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-3.5 sm:flex-row sm:justify-center items-center"
          >
            {primaryCTA && (
              <a
                href={primaryCTA.href}
                target={primaryCTA.href.startsWith('http') ? '_blank' : undefined}
                rel={primaryCTA.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-full sm:w-auto inline-flex items-center justify-center min-h-[48px] rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 py-3.5 font-bold text-white shadow-[0_10px_25px_-5px_rgba(37,99,235,0.4)] transition-all hover:scale-105 hover:shadow-[0_15px_30px_-5px_rgba(37,99,235,0.6)] active:scale-95 text-center"
              >
                {primaryCTA.label}
              </a>
            )}
            {secondaryCTA && (
              <a
                href={secondaryCTA.href}
                target={secondaryCTA.href.startsWith('http') ? '_blank' : undefined}
                rel={secondaryCTA.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="btn-whatsapp w-full sm:w-auto inline-flex items-center justify-center gap-2.5 min-h-[48px] rounded-xl px-8 py-3.5 font-bold text-white text-center cursor-pointer"
              >
                {secondaryCTA.href.includes('wa.me') && (
                  <svg className="h-5 w-5 fill-white flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                )}
                <span>{secondaryCTA.label}</span>
              </a>
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-white">
          <p className="text-sm">Scroll to explore</p>
          <ChevronDown className="h-6 w-6" />
        </div>
      </motion.div>
    </section>
  );
}
