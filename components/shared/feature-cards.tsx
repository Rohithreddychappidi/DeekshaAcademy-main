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
            <Card className="h-full transition-all hover:shadow-lg hover:border-blue-200">
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600">
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
