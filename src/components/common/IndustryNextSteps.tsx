import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Play, TrendingUp, Layers, Sparkles, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface IndustryNextStepsProps {
  industrySlug: string;
  industryName: string;
  onRequestSolution: () => void;
  className?: string;
}

export const IndustryNextSteps: React.FC<IndustryNextStepsProps> = ({
  industrySlug,
  industryName,
  onRequestSolution,
  className,
}) => {
  return (
    <section className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8', className)}>
      <div className="p-6 sm:p-10 rounded-2xl bg-aether-card border border-aether-border shadow-warm-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-aether-border-subtle gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Badge variant="primary" dot size="sm">
                Next Steps for {industryName}
              </Badge>
              <span className="text-xs text-text-muted font-mono hidden sm:inline">
                Aether Progression Path
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-text-primary">
              Where would you like to go next?
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary mt-1">
              Choose your path to test live workflows, review benchmarks, or configure your
              solution.
            </p>
          </div>

          <Button
            variant="primary"
            size="lg"
            onClick={onRequestSolution}
            rightIcon={<Sparkles className="w-4 h-4" />}
            className="shrink-0"
          >
            Request {industryName} Solution
          </Button>
        </div>

        {/* 3 Transition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6">
          {/* Option 1: Live Demo */}
          <Link
            to={`/demos?industry=${industrySlug}`}
            className="p-5 rounded-xl bg-aether-surface border border-aether-border hover:border-aether-clay/50 hover:bg-aether-clay/5 transition-all group flex flex-col justify-between shadow-warm-xs"
          >
            <div>
              <div className="w-9 h-9 rounded-lg bg-aether-clay/10 border border-aether-clay/30 flex items-center justify-center text-aether-clay mb-3 group-hover:scale-105 transition-transform">
                <Play className="w-4 h-4 fill-current" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-aether-clay font-semibold block mb-1">
                Step 1: Experience
              </span>
              <h4 className="text-base font-bold text-text-primary group-hover:text-aether-clay transition-colors">
                Run {industryName} Demo
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed mt-1.5">
                Interact with the 6-stage telemetry and automated orchestration pipeline in our live
                simulation sandbox.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-aether-border-subtle flex items-center justify-between text-xs font-semibold text-aether-clay">
              <span>Launch Demo Hub</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Option 2: Business Impact */}
          <Link
            to="/impact"
            className="p-5 rounded-xl bg-aether-surface border border-aether-border hover:border-[#4D6B53]/50 hover:bg-[#4D6B53]/5 transition-all group flex flex-col justify-between shadow-warm-xs"
          >
            <div>
              <div className="w-9 h-9 rounded-lg bg-[#4D6B53]/10 border border-[#4D6B53]/30 flex items-center justify-center text-[#4D6B53] mb-3 group-hover:scale-105 transition-transform">
                <TrendingUp className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#4D6B53] font-semibold block mb-1">
                Step 2: Evaluate
              </span>
              <h4 className="text-base font-bold text-text-primary group-hover:text-[#4D6B53] transition-colors">
                Calculate ROI & Impact
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed mt-1.5">
                Review verified industry benchmarks, labor savings estimators, and operational yield
                models.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-aether-border-subtle flex items-center justify-between text-xs font-semibold text-[#4D6B53]">
              <span>View Impact Analysis</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Option 3: Explore other industries */}
          <Link
            to="/industries"
            className="p-5 rounded-xl bg-aether-surface border border-aether-border hover:border-aether-border hover:bg-aether-surface/80 transition-all group flex flex-col justify-between shadow-warm-xs"
          >
            <div>
              <div className="w-9 h-9 rounded-lg bg-aether-card border border-aether-border flex items-center justify-center text-text-secondary mb-3 group-hover:scale-105 transition-transform">
                <Layers className="w-4 h-4" />
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-text-muted font-semibold block mb-1">
                Step 3: Compare
              </span>
              <h4 className="text-base font-bold text-text-primary group-hover:text-text-primary transition-colors">
                Explore All 10 Verticals
              </h4>
              <p className="text-xs text-text-secondary leading-relaxed mt-1.5">
                Discover how Aether adapts its cognitive intelligence across dining, fitness,
                healthcare, hospitality, and retail.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-aether-border-subtle flex items-center justify-between text-xs font-semibold text-text-secondary group-hover:text-text-primary">
              <span>Back to All Industries</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
