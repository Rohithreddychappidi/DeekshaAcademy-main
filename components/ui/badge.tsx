import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'success' | 'warning' | 'destructive';
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const variants = {
      default: 'bg-blue-100 text-blue-700',
      secondary: 'bg-slate-100 text-slate-700',
      success: 'bg-green-100 text-green-700',
      warning: 'bg-yellow-100 text-yellow-700',
      destructive: 'bg-red-100 text-red-700',
    };

    return (
      <div
        className={cn(
          'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
          variants[variant],
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Badge.displayName = 'Badge';

export default Badge;
