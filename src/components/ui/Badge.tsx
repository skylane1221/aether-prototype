import React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'outline' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
  dotColor?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  size = 'md',
  dot = false,
  dotColor,
  icon,
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center font-medium transition-colors select-none rounded-full tracking-wide';

  const variants = {
    default: 'bg-slate-800/60 text-slate-300 border border-slate-700/60',
    primary: 'bg-sky-500/10 text-sky-400 border border-sky-500/25',
    success: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25',
    warning: 'bg-amber-500/10 text-amber-400 border border-amber-500/25',
    neutral: 'bg-slate-900/80 text-slate-400 border border-slate-800',
    outline: 'bg-transparent text-slate-300 border border-slate-700/70',
  };

  const sizes = {
    sm: 'text-[11px] px-2 py-0.5 gap-1.5',
    md: 'text-xs px-2.5 py-0.5 gap-1.5',
    lg: 'text-sm px-3.5 py-1 gap-2',
  };

  const dotColors = {
    default: 'bg-slate-400',
    primary: 'bg-sky-400',
    success: 'bg-emerald-400',
    warning: 'bg-amber-400',
    neutral: 'bg-slate-500',
    outline: 'bg-slate-400',
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {dot && (
        <span className="relative flex h-1.5 w-1.5 shrink-0">
          <span
            className={cn(
              'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
              dotColor || dotColors[variant]
            )}
          />
          <span
            className={cn(
              'relative inline-flex rounded-full h-1.5 w-1.5',
              dotColor || dotColors[variant]
            )}
          />
        </span>
      )}
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
