import React from 'react';
import { cn } from '../../utils/cn';
import { Badge } from './Badge';

export interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: 'default' | 'primary' | 'success' | 'warning' | 'outline' | 'neutral';
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeVariant = 'primary',
  title,
  subtitle,
  align = 'center',
  className,
}) => {
  return (
    <div
      className={cn(
        'max-w-3xl mb-12 sm:mb-16',
        align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start',
        'flex flex-col',
        className
      )}
    >
      {badge && (
        <div className="mb-3.5">
          <Badge variant={badgeVariant} dot size="md">
            {badge}
          </Badge>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3.5 text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
