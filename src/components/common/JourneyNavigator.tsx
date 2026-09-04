import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Compass, Layers, Play, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface JourneyStep {
  id: string;
  stageNumber: string;
  label: string;
  shortDesc: string;
  path: string;
  icon: React.ReactNode;
}

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: 'discover',
    stageNumber: '01',
    label: 'Discover',
    shortDesc: 'Understand the Aether intelligence architecture',
    path: '/what-is-aether',
    icon: <Compass className="w-4 h-4" />,
  },
  {
    id: 'explore',
    stageNumber: '02',
    label: 'Explore',
    shortDesc: 'Browse 10 vertical operational models',
    path: '/industries',
    icon: <Layers className="w-4 h-4" />,
  },
  {
    id: 'experience',
    stageNumber: '03',
    label: 'Experience',
    shortDesc: 'Test simulated real-time workflows',
    path: '/demos',
    icon: <Play className="w-4 h-4" />,
  },
  {
    id: 'impact',
    stageNumber: '04',
    label: 'Understand Impact',
    shortDesc: 'Review quantified ROI & benchmark metrics',
    path: '/impact',
    icon: <TrendingUp className="w-4 h-4" />,
  },
  {
    id: 'request',
    stageNumber: '05',
    label: 'Request Solution',
    shortDesc: 'Receive a custom architecture proposal',
    path: '/contact',
    icon: <Sparkles className="w-4 h-4" />,
  },
];

interface JourneyNavigatorProps {
  currentStage?: 'discover' | 'explore' | 'experience' | 'impact' | 'request';
  className?: string;
  compact?: boolean;
}

export const JourneyNavigator: React.FC<JourneyNavigatorProps> = ({
  currentStage,
  className,
  compact = false,
}) => {
  const location = useLocation();

  // Determine current active step if not provided
  const activeStepId =
    currentStage ||
    (location.pathname === '/what-is-aether'
      ? 'discover'
      : location.pathname.startsWith('/industries')
      ? 'explore'
      : location.pathname === '/demos'
      ? 'experience'
      : location.pathname === '/impact'
      ? 'impact'
      : location.pathname === '/contact'
      ? 'request'
      : 'discover');

  const activeIndex = JOURNEY_STEPS.findIndex((s) => s.id === activeStepId);
  const nextStep = activeIndex >= 0 && activeIndex < JOURNEY_STEPS.length - 1 ? JOURNEY_STEPS[activeIndex + 1] : null;

  if (compact) {
    return (
      <div className={cn('p-4 rounded-xl bg-slate-900/60 border border-aether-border flex flex-col sm:flex-row items-center justify-between gap-4', className)}>
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider font-semibold block">
              Suggested Next Step
            </span>
            <p className="text-xs sm:text-sm font-semibold text-text-primary">
              {nextStep ? `Continue to ${nextStep.label}: ${nextStep.shortDesc}` : 'Ready to configure your solution?'}
            </p>
          </div>
        </div>

        {nextStep ? (
          <Link
            to={nextStep.path}
            className="px-4 py-2 rounded-lg bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 border border-sky-500/30 hover:border-sky-500/50 text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0"
          >
            <span>Proceed to {nextStep.label}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        ) : (
          <Link
            to="/contact"
            className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-xs flex items-center gap-1.5 transition-all shrink-0"
          >
            <span>Request Custom Solution</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    );
  }

  return (
    <div className={cn('w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10', className)}>
      <div className="p-6 sm:p-8 rounded-2xl bg-aether-card card-gradient-surface border border-slate-700/80 shadow-card">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-aether-border-subtle gap-2">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              Guided Transformation Journey
            </span>
            <h3 className="text-base sm:text-lg font-bold text-text-primary mt-1">
              How to Navigate the Aether Platform
            </h3>
          </div>
          <span className="text-xs text-text-muted hidden md:inline font-mono">
            Stage {activeIndex + 1} of 5
          </span>
        </div>

        {/* 5 Stages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-6">
          {JOURNEY_STEPS.map((step, idx) => {
            const isCurrent = step.id === activeStepId;
            const isCompleted = idx < activeIndex;

            return (
              <Link
                key={step.id}
                to={step.path}
                className={cn(
                  'p-4 rounded-xl border transition-all flex flex-col justify-between group relative',
                  isCurrent
                    ? 'bg-sky-500/10 border-sky-500/50 shadow-glow-subtle'
                    : isCompleted
                    ? 'bg-aether-surface/60 border-slate-700/60 hover:border-slate-600'
                    : 'bg-aether-surface/30 border-aether-border/60 hover:border-slate-700'
                )}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={cn(
                        'text-[10px] font-mono font-bold px-1.5 py-0.5 rounded',
                        isCurrent
                          ? 'bg-sky-500 text-slate-950'
                          : isCompleted
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : 'bg-slate-800 text-text-muted'
                      )}
                    >
                      {step.stageNumber}
                    </span>

                    <div
                      className={cn(
                        'p-1.5 rounded-lg border',
                        isCurrent
                          ? 'bg-sky-500/20 border-sky-500/40 text-sky-300'
                          : isCompleted
                          ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                          : 'bg-slate-900 border-slate-800 text-text-muted group-hover:text-text-secondary'
                      )}
                    >
                      {isCompleted ? <CheckCircle2 className="w-3.5 h-3.5" /> : step.icon}
                    </div>
                  </div>

                  <h4
                    className={cn(
                      'text-sm font-bold transition-colors',
                      isCurrent
                        ? 'text-sky-300'
                        : isCompleted
                        ? 'text-text-primary'
                        : 'text-text-secondary group-hover:text-text-primary'
                    )}
                  >
                    {step.label}
                  </h4>
                  <p className="text-xs text-text-muted leading-relaxed mt-1 line-clamp-2">
                    {step.shortDesc}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-aether-border-subtle flex items-center justify-between text-[11px]">
                  <span
                    className={cn(
                      'font-medium',
                      isCurrent
                        ? 'text-sky-400'
                        : isCompleted
                        ? 'text-emerald-400'
                        : 'text-text-muted group-hover:text-text-secondary'
                    )}
                  >
                    {isCurrent ? 'Current Stage' : isCompleted ? 'Completed' : 'Explore'}
                  </span>
                  <ArrowRight
                    className={cn(
                      'w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5',
                      isCurrent ? 'text-sky-400' : 'text-text-muted'
                    )}
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
