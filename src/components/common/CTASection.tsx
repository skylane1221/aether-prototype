import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ArrowRight, Sparkles } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface CTASectionProps {
  badge?: string;
  title?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  primaryTo?: string;
  secondaryTo?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({
  badge = 'Pitch Showcase & Executive Briefing',
  title = 'Ready to see Aether transform your business operations?',
  description = 'Experience how Aether’s cognitive engine identifies operational drag and orchestrates automated workflows across your specific industry.',
  primaryButtonText = 'Request Custom Solution',
  secondaryButtonText = 'Explore Live Demos',
  primaryTo,
  secondaryTo,
  onPrimaryClick,
  onSecondaryClick,
  className,
}) => {
  const navigate = useNavigate();

  const handlePrimary = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    } else if (primaryTo) {
      navigate(primaryTo);
    }
  };

  const handleSecondary = () => {
    if (onSecondaryClick) {
      onSecondaryClick();
    } else if (secondaryTo) {
      navigate(secondaryTo);
    }
  };

  return (
    <section className={cn('py-12 sm:py-20', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-aether-card card-gradient-surface border border-slate-700/70 p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-card-hover">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {badge && (
              <div className="mb-4">
                <Badge variant="primary" dot size="md">
                  {badge}
                </Badge>
              </div>
            )}

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary leading-tight">
              {title}
            </h2>

            <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed max-w-2xl">
              {description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={handlePrimary}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                {primaryButtonText}
              </Button>
              {secondaryButtonText && (
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleSecondary}
                  className="w-full sm:w-auto"
                >
                  {secondaryButtonText}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
