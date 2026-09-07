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
    default: 'bg-aether-beige text-text-primary border border-aether-border-bright',
    primary: 'bg-aether-clay/10 text-aether-clay border border-aether-clay/25',
    success: 'bg-aether-success/15 text-aether-success border border-aether-success/30',
    warning: 'bg-aether-yellow/20 text-[#7A6218] border border-aether-yellow/40',
    neutral: 'bg-aether-card text-text-secondary border border-aether-border',
    outline: 'bg-transparent text-text-secondary border border-aether-border',
  };

  const sizes = {
    sm: 'text-[11px] px-2 py-0.5 gap-1.5',
    md: 'text-xs px-2.5 py-0.5 gap-1.5',
    lg: 'text-sm px-3.5 py-1 gap-2',
  };

  const dotColors = {
    default: 'bg-aether-cocoa',
    primary: 'bg-aether-clay',
    success: 'bg-aether-success',
    warning: 'bg-aether-yellow',
    neutral: 'bg-text-muted',
    outline: 'bg-aether-clay',
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
