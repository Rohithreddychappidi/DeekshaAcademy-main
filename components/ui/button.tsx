import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

    const variants = {
      default: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-600',
      secondary:
        'bg-slate-200 text-slate-900 hover:bg-slate-300 focus-visible:ring-slate-200',
      outline:
        'border border-slate-200 bg-white hover:bg-slate-100 focus-visible:ring-slate-200',
      ghost: 'hover:bg-slate-100 focus-visible:ring-slate-200',
      destructive:
        'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600',
    };

    const sizes = {
      default: 'h-10 px-4 py-2 text-sm',
      sm: 'h-9 px-3 text-xs',
      lg: 'h-12 px-8 text-base',
      icon: 'h-10 w-10 p-0',
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export default Button;
