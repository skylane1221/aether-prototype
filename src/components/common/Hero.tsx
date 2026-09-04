import React from 'react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';
import { ArrowRight, Play, Shield, Terminal } from 'lucide-react';

export interface HeroProps {
  badge?: string;
  badgeVariant?: 'default' | 'primary' | 'success' | 'warning' | 'neutral';
  title: string | React.ReactNode;
  subtitle: string | React.ReactNode;
  primaryAction?: {
    label: string;
    onClick?: () => void;
    href?: string;
    icon?: React.ReactNode;
  };
  secondaryAction?: {
    label: string;
    onClick?: () => void;
    href?: string;
    icon?: React.ReactNode;
  };
  metrics?: {
    label: string;
    value: string;
  }[];
  children?: React.ReactNode;
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({
  badge = 'AI Business Transformation Engine',
  badgeVariant = 'primary',
  title,
  subtitle,
  primaryAction,
  secondaryAction,
  metrics,
  children,
  className,
}) => {
  return (
    <section className={cn('relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow Badge */}
        {badge && (
          <div className="mb-6 animate-fade-in">
            <Badge variant={badgeVariant} dot size="md">
              {badge}
            </Badge>
          </div>
        )}

        {/* H1 Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.1] max-w-4xl">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl font-normal">
          {subtitle}
        </p>

        {/* CTA Actions */}
        {(primaryAction || secondaryAction) && (
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            {primaryAction && (
              <Button
                variant="primary"
                size="lg"
                onClick={primaryAction.onClick}
                rightIcon={primaryAction.icon || <ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto shadow-md"
              >
                {primaryAction.label}
              </Button>
            )}
            {secondaryAction && (
              <Button
                variant="secondary"
                size="lg"
                onClick={secondaryAction.onClick}
                leftIcon={secondaryAction.icon || <Play className="w-4 h-4 text-text-muted" />}
                className="w-full sm:w-auto"
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>
        )}

        {/* Optional Metric Stat Pills */}
        {metrics && metrics.length > 0 && (
          <div className="mt-12 sm:mt-16 pt-8 border-t border-aether-border-subtle grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 max-w-2xl w-full">
            {metrics.map((m, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary font-mono">
                  {m.value}
                </span>
                <span className="text-xs text-text-muted mt-1 uppercase tracking-wider font-medium">
                  {m.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Custom Visual Slot (e.g. interactive mockups/diagrams) */}
        {children && <div className="mt-12 sm:mt-16 w-full">{children}</div>}
      </div>
    </section>
  );
};
