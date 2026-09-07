import React from 'react';
import { PlatformSolution } from '../../types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Cpu, Workflow, BarChart3, BrainCircuit, MessageSquareText } from 'lucide-react';
import { cn } from '../../utils/cn';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'AI Intelligence': <Cpu className="w-5 h-5 text-aether-clay" />,
  'Workflow Automation': <Workflow className="w-5 h-5 text-aether-cocoa" />,
  'Customer Intelligence': <BrainCircuit className="w-5 h-5 text-aether-clay" />,
  'Business Intelligence': <BarChart3 className="w-5 h-5 text-[#8A6F1D]" />,
  'Communication Intelligence': <MessageSquareText className="w-5 h-5 text-[#6D7A60]" />,
};

export interface SolutionCardProps {
  solution: PlatformSolution;
  className?: string;
}

export const SolutionCard: React.FC<SolutionCardProps> = ({ solution, className }) => {
  return (
    <Card className={cn('flex flex-col justify-between h-full p-6 sm:p-7', className)}>
      <div>
        {/* Category & Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-lg bg-aether-surface border border-aether-border flex items-center justify-center">
            {CATEGORY_ICONS[solution.category] || <Cpu className="w-5 h-5 text-aether-clay" />}
          </div>
          <Badge variant="neutral" size="sm" className="font-mono text-[11px]">
            {solution.category}
          </Badge>
        </div>

        {/* Title & Tagline */}
        <h3 className="text-xl font-bold tracking-tight text-text-primary mb-2">
          {solution.title}
        </h3>
        <p className="text-sm font-medium text-aether-clay mb-3 leading-snug">{solution.tagline}</p>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
          {solution.description}
        </p>

        {/* Technical Capabilities */}
        <div className="space-y-2 pt-4 border-t border-aether-border-subtle mb-6">
          <div className="text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-2">
            Key Capabilities
          </div>
          {solution.capabilities.map((cap, idx) => (
            <div key={idx} className="text-xs text-text-secondary flex items-start gap-2">
              <span className="text-aether-clay font-bold">&bull;</span>
              <span>{cap}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Measured Impact Box */}
      <div className="pt-3.5 border-t border-aether-border-subtle bg-aether-surface/50 -mx-6 -mb-6 p-4 rounded-b-xl border-b border-aether-border">
        <div className="text-[11px] font-semibold text-aether-success uppercase tracking-wider flex items-center gap-1.5 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-aether-success" />
          Measured Outcome
        </div>
        <p className="text-xs text-text-secondary font-medium">{solution.metricsImpact}</p>
      </div>
    </Card>
  );
};
