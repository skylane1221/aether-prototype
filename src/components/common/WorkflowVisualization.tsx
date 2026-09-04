import React, { useState } from 'react';
import { WorkflowStep } from '../../types';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Radio, BrainCircuit, Cog, CheckCircle2, ArrowRight } from 'lucide-react';
import { cn } from '../../utils/cn';

const PHASE_ICONS: Record<string, React.ReactNode> = {
  'Signal Ingestion': <Radio className="w-4 h-4 text-sky-400" />,
  'Cognitive Diagnosis': <BrainCircuit className="w-4 h-4 text-indigo-400" />,
  'Autonomous Orchestration': <Cog className="w-4 h-4 text-amber-400" />,
  'Measured Outcome': <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
};

export interface WorkflowVisualizationProps {
  steps: WorkflowStep[];
  title?: string;
  className?: string;
}

export const WorkflowVisualization: React.FC<WorkflowVisualizationProps> = ({
  steps,
  title = 'Aether 4-Phase Transformation Pipeline',
  className,
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const currentStep = steps[activeStep] || steps[0];

  return (
    <div className={cn('w-full', className)}>
      {/* Step Indicators Bar */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
        {steps.map((step, idx) => {
          const isActive = idx === activeStep;
          return (
            <button
              key={step.stepNumber}
              onClick={() => setActiveStep(idx)}
              className={cn(
                'p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between group',
                isActive
                  ? 'bg-aether-card border-sky-500/50 shadow-glow-subtle'
                  : 'bg-aether-surface border-aether-border hover:border-slate-700 opacity-80 hover:opacity-100'
              )}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono font-semibold text-text-muted">
                  PHASE 0{step.stepNumber}
                </span>
                <span className="shrink-0">{PHASE_ICONS[step.phase]}</span>
              </div>
              <p
                className={cn(
                  'text-xs font-semibold line-clamp-1 transition-colors',
                  isActive ? 'text-text-primary' : 'text-text-secondary group-hover:text-text-primary'
                )}
              >
                {step.title}
              </p>
            </button>
          );
        })}
      </div>

      {/* Active Phase Deep Dive Card */}
      <Card className="p-6 sm:p-8 card-gradient-surface border-slate-700/80">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-aether-border-subtle mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-900 border border-aether-border flex items-center justify-center">
              {PHASE_ICONS[currentStep.phase]}
            </div>
            <div>
              <span className="text-xs font-semibold text-sky-400 font-mono">
                STAGE 0{currentStep.stepNumber} &bull; {currentStep.phase}
              </span>
              <h4 className="text-lg font-bold text-text-primary">{currentStep.title}</h4>
            </div>
          </div>
          <Badge variant="neutral" size="sm" className="font-mono self-start sm:self-auto">
            Autonomous State: Active
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h5 className="text-xs font-semibold uppercase tracking-wider text-text-muted">
              Operational Context
            </h5>
            <p className="text-sm text-text-secondary leading-relaxed">
              {currentStep.description}
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/80 border border-aether-border-subtle space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-400">
              <Cog className="w-3.5 h-3.5 animate-spin text-sky-400" />
              <span>Aether Execution Kernel Action</span>
            </div>
            <p className="text-xs font-mono text-text-primary leading-relaxed">
              {currentStep.systemAction}
            </p>
          </div>
        </div>

        {/* Step Navigation Controls */}
        <div className="mt-6 pt-4 border-t border-aether-border-subtle flex items-center justify-between">
          <button
            disabled={activeStep === 0}
            onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
            className="text-xs text-text-secondary hover:text-text-primary disabled:opacity-30 transition-opacity"
          >
            &larr; Previous Stage
          </button>
          <div className="flex gap-1.5">
            {steps.map((_, idx) => (
              <span
                key={idx}
                className={cn(
                  'w-1.5 h-1.5 rounded-full transition-all',
                  idx === activeStep ? 'w-4 bg-sky-400' : 'bg-slate-700'
                )}
              />
            ))}
          </div>
          <button
            disabled={activeStep === steps.length - 1}
            onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
            className="text-xs text-sky-400 hover:text-sky-300 disabled:opacity-30 transition-opacity font-medium"
          >
            Next Stage &rarr;
          </button>
        </div>
      </Card>
    </div>
  );
};
