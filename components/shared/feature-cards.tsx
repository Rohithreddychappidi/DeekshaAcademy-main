'use client';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureCardsProps {
  features: Array<{
    id: string;
    title: string;
    description: string;
    icon: string;
  }>;
}

export default function FeatureCards({ features }: FeatureCardsProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => {
        // Dynamically get icon from lucide-react
        const IconComponent = (Icons as any)[feature.icon] || Icons.Zap;

        return (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full liquid-glass-card rounded-2xl border border-white/85 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_35px_-8px_rgba(15,23,42,0.1)]">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/15 via-cyan-500/15 to-emerald-500/20 border border-blue-500/20 text-blue-600 shadow-sm">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-slate-900 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
