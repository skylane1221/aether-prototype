import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      leftIcon,
      rightIcon,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-aether-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-aether-bg disabled:pointer-events-none disabled:opacity-50 select-none active:scale-[0.98] rounded-lg';

    const variants = {
      primary:
        'bg-slate-100 text-slate-950 hover:bg-white hover:shadow-glow-sm shadow-sm border border-white/20 font-semibold',
      secondary:
        'bg-aether-card hover:bg-aether-card-hover text-text-primary border border-aether-border hover:border-aether-border-bright shadow-card',
      outline:
        'bg-transparent hover:bg-slate-800/40 text-text-secondary hover:text-text-primary border border-aether-border hover:border-slate-600',
      ghost:
        'bg-transparent hover:bg-slate-800/50 text-text-secondary hover:text-text-primary',
      accent:
        'bg-aether-primary/10 hover:bg-aether-primary/20 text-aether-primary border border-aether-primary/30 hover:border-aether-primary/60 shadow-glow-subtle font-medium',
    };

    const sizes = {
      sm: 'h-8 px-3 text-xs gap-1.5',
      md: 'h-10 px-4 text-sm gap-2',
      lg: 'h-12 px-6 text-base gap-2.5',
      icon: 'h-9 w-9 p-0',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin text-current" />
        ) : (
          leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="inline-flex shrink-0 transition-transform duration-200 group-hover:translate-x-0.5">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
