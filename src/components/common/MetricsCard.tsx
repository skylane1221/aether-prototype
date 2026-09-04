import React from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { TrendingUp, ArrowUpRight, CheckCircle } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface MetricsCardProps {
  value: string;
  label: string;
  change?: string;
  subtext?: string;
  category?: string;
  className?: string;
}

export const MetricsCard: React.FC<MetricsCardProps> = ({
  value,
  label,
  change,
  subtext,
  category,
  className,
}) => {
  return (
    <Card className={cn('p-5 sm:p-6 flex flex-col justify-between', className)}>
      <div>
        <div className="flex items-center justify-between mb-3">
          {category && (
            <span className="text-[11px] font-mono uppercase tracking-wider text-text-muted">
              {category}
            </span>
          )}
          {change && (
            <Badge variant="success" size="sm" className="font-mono text-[11px]">
              {change}
            </Badge>
          )}
        </div>

        <div className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-text-primary mb-1">
          {value}
        </div>

        <h4 className="text-sm font-semibold text-text-primary mb-1">{label}</h4>
      </div>

      {subtext && (
        <p className="mt-3 pt-3 border-t border-aether-border-subtle text-xs text-text-secondary leading-relaxed">
          {subtext}
        </p>
      )}
    </Card>
  );
};
