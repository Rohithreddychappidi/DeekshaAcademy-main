'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { FAQ } from '@/types';

interface AccordionProps {
  items: FAQ[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="border border-slate-200 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className="w-full flex items-center justify-between bg-white p-4 hover:bg-slate-50 transition-colors"
          >
            <span className="text-left font-semibold text-slate-900">
              {item.question}
            </span>
            <motion.div
              animate={{ rotate: openId === item.id ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-5 w-5 text-slate-600" />
            </motion.div>
          </button>

          <AnimatePresence>
            {openId === item.id && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="border-t border-slate-200 bg-slate-50"
              >
                <p className="p-4 text-slate-600">{item.answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
