import React, { HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  interactive?: boolean;
  glow?: boolean;
  surface?: 'default' | 'surface' | 'glass';
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { className, interactive = false, glow = false, surface = 'default', children, ...props },
    ref
  ) => {
    const surfaceStyles = {
      default: 'bg-aether-card card-gradient-surface',
      surface: 'bg-aether-surface',
      glass: 'bg-aether-card/80 backdrop-blur-md',
    };

    return (
      <div
        ref={ref}
        className={cn(
          'relative rounded-xl border border-aether-border p-6 shadow-card transition-all duration-200',
          surfaceStyles[surface],
          interactive &&
            'cursor-pointer hover:border-aether-border-bright hover:shadow-card-hover hover:-translate-y-0.5',
          glow && 'hover:border-aether-clay/40 hover:shadow-glow-subtle',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5 pb-4', className)} {...props}>
      {children}
    </div>
  )
);
CardHeader.displayName = 'CardHeader';

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, children, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-lg font-semibold tracking-tight text-text-primary', className)}
      {...props}
    >
      {children}
    </h3>
  )
);
CardTitle.displayName = 'CardTitle';

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => (
  <p ref={ref} className={cn('text-sm text-text-secondary leading-relaxed', className)} {...props}>
    {children}
  </p>
));
CardDescription.displayName = 'CardDescription';

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('pt-0', className)} {...props}>
      {children}
    </div>
  )
);
CardContent.displayName = 'CardContent';

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center pt-4 border-t border-aether-border-subtle mt-4', className)}
      {...props}
    >
      {children}
    </div>
  )
);
CardFooter.displayName = 'CardFooter';
