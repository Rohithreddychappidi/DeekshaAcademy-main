'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '@/assets/images/courses/logo.jpeg';

export default function SiteIntroLoader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only play intro once per browser session
    try {
      const hasSeenIntro = sessionStorage.getItem('dta_intro_seen');
      if (!hasSeenIntro) {
        setIsVisible(true);
        const timer = setTimeout(() => {
          setIsVisible(false);
          sessionStorage.setItem('dta_intro_seen', 'true');
        }, 1300);
        return () => clearTimeout(timer);
      }
    } catch {
      // In case storage is blocked in iframe/incognito
      setIsVisible(false);
    }
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="site-intro"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-slate-950 text-white"
        >
          {/* Subtle Ambient Glowing Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.18)_0%,_rgba(15,23,42,0.95)_70%)]" />

          {/* Logo & Emblem Animation */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative flex flex-col items-center text-center"
          >
            <div className="relative mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-slate-900/90 p-2 shadow-2xl shadow-cyan-500/30 ring-2 ring-cyan-400/40">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-400 opacity-30 blur-md animate-pulse" />
              <div className="relative h-full w-full overflow-hidden rounded-xl">
                <Image
                  src={logoImg}
                  alt="Deeksha Tech Academy"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="text-2xl font-bold tracking-tight text-white sm:text-3xl"
            >
              Deeksha Tech Academy
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="mt-1 text-sm font-medium tracking-widest text-cyan-400 uppercase"
            >
              Learn. Build. Lead.
            </motion.p>

            {/* Glowing Tech Scan Line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 140, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6, ease: 'easeInOut' }}
              className="mt-4 h-0.5 rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-sm shadow-cyan-400"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
