import React from 'react';
import { ProblemTransformation } from '../../types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { AlertCircle, CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface ProblemCardProps {
  problem: ProblemTransformation;
  className?: string;
}

export const ProblemCard: React.FC<ProblemCardProps> = ({ problem, className }) => {
  const severityBadge: Record<
    'critical' | 'high' | 'moderate',
    { variant: 'warning' | 'default' | 'neutral'; label: string }
  > = {
    critical: { variant: 'warning', label: 'Critical Friction' },
    high: { variant: 'default', label: 'High Inefficiency' },
    moderate: { variant: 'neutral', label: 'Operational Drag' },
  };

  return (
    <Card className={cn('p-5 sm:p-6 flex flex-col justify-between', className)}>
      <div>
        {/* Header */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <h4 className="text-base font-semibold text-text-primary tracking-tight">
            {problem.title}
          </h4>
          <Badge
            variant={severityBadge[problem.severity].variant}
            size="sm"
            className="text-[10px] shrink-0"
          >
            {severityBadge[problem.severity].label}
          </Badge>
        </div>

        {/* Traditional Friction Block */}
        <div className="p-3.5 rounded-lg bg-rose-500/5 border border-rose-500/20 mb-3.5">
          <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 mb-1">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            <span>Traditional Operational Friction</span>
          </div>
          <p className="text-xs text-text-secondary leading-relaxed pl-5">
            {problem.traditionalPain}
          </p>
        </div>

        {/* Aether Transformation Block */}
        <div className="p-3.5 rounded-lg bg-sky-500/5 border border-sky-500/20">
          <div className="flex items-center gap-2 text-xs font-semibold text-sky-400 mb-1">
            <Zap className="w-3.5 h-3.5 shrink-0" />
            <span>Aether Intelligent Transformation</span>
          </div>
          <p className="text-xs text-text-secondary leading-relaxed pl-5">
            {problem.aetherTransformation}
          </p>
        </div>
      </div>

      {/* Outcome Metric */}
      <div className="mt-4 pt-3 border-t border-aether-border-subtle flex items-center justify-between text-xs">
        <span className="text-text-muted font-medium">Measured Efficiency Gain:</span>
        <span className="font-semibold font-mono text-emerald-400">
          {problem.efficiencyGain}
        </span>
      </div>
    </Card>
  );
};
