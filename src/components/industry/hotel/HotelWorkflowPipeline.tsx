import React, { useState } from 'react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { SectionHeader } from '../../ui/SectionHeader';
import {
  CalendarCheck,
  TrendingUp,
  UserCheck,
  Sparkles,
  Coffee,
  HeartHandshake,
  ArrowRight,
  ShieldCheck,
  Activity,
  BedDouble,
} from 'lucide-react';
import { cn } from '../../../utils/cn';
import { HOTEL_JOURNEY_STEPS, HotelJourneyStep } from '../../../data/hotelData';

const STEP_ICONS: Record<string, React.ReactNode> = {
  CalendarCheck: <CalendarCheck className="w-4 h-4" />,
  TrendingUp: <TrendingUp className="w-4 h-4" />,
  UserCheck: <UserCheck className="w-4 h-4" />,
  Sparkles: <Sparkles className="w-4 h-4" />,
  Coffee: <Coffee className="w-4 h-4" />,
  HeartHandshake: <HeartHandshake className="w-4 h-4" />,
};

export const HotelWorkflowPipeline: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState<string>('occupancy');

  const activeStep =
    HOTEL_JOURNEY_STEPS.find((s) => s.id === activeStepId) || HOTEL_JOURNEY_STEPS[1];

  return (
    <div className="space-y-8">
      <SectionHeader
        badge="Signature Hospitality Workflow"
        title="6-Stage Autonomous Guest & Operations Pipeline"
        subtitle="How Aether unifies multi-channel booking signals, housekeeping dispatch, in-stay concierge intelligence, and direct guest retention."
      />

      {/* 6-Step Horizontal Stage Stepper */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {HOTEL_JOURNEY_STEPS.map((step) => {
          const isActive = step.id === activeStepId;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStepId(step.id)}
              className={cn(
                'p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between group relative overflow-hidden',
                isActive
                  ? 'bg-teal-500/10 border-teal-500/50 shadow-glow-subtle'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
              )}
            >
              {isActive && (
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 to-sky-400" />
              )}
              <div className="flex items-center justify-between gap-1 mb-2">
                <span
                  className={cn(
                    'text-[10px] font-mono font-bold px-1.5 py-0.5 rounded',
                    isActive ? 'bg-teal-500/20 text-teal-300' : 'bg-slate-800 text-slate-400'
                  )}
                >
                  {step.stepNumber}
                </span>
                <div
                  className={cn(
                    'transition-colors',
                    isActive ? 'text-teal-400' : 'text-slate-500 group-hover:text-slate-400'
                  )}
                >
                  {STEP_ICONS[step.iconName]}
                </div>
              </div>

              <div>
                <div
                  className={cn(
                    'text-xs font-bold tracking-tight line-clamp-1',
                    isActive ? 'text-text-primary' : 'text-slate-300'
                  )}
                >
                  {step.stageName}
                </div>
                <div className="text-[10px] text-text-muted mt-0.5 line-clamp-1 font-mono">
                  {step.metricValue}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Step Detail Spotlight Card */}
      <Card className="p-6 sm:p-8 border-slate-700/80 bg-slate-900/80 card-gradient-surface shadow-card">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-aether-border-subtle">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center shrink-0 mt-1 shadow-inner-bevel">
              {STEP_ICONS[activeStep.iconName]}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="primary" size="sm" className="font-mono text-[10px] bg-teal-500/20 text-teal-300 border-teal-500/30">
                  Stage {activeStep.stepNumber} of 06
                </Badge>
                <span className="text-xs font-mono text-teal-400 font-semibold uppercase tracking-wider">
                  {activeStep.title}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-text-primary tracking-tight">
                {activeStep.subtitle}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-950/80 border border-slate-800 px-4 py-3 rounded-xl shrink-0">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
                {activeStep.metricLabel}
              </span>
              <span className="text-sm font-bold font-mono text-teal-300">
                {activeStep.metricValue}
              </span>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div className="flex items-center gap-1.5 text-xs text-teal-400 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Hospitality Kernel Active</span>
            </div>
          </div>
        </div>

        {/* Traditional Friction vs Aether Cognitive Execution */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Traditional Hotel Drag */}
          <div className="p-4 sm:p-5 rounded-xl bg-rose-500/5 border border-rose-500/20 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                <span>Traditional Operational Drag</span>
              </div>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                {activeStep.traditionalDrag}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-rose-500/15 text-[11px] text-rose-300/80 font-mono">
              Status: Legacy PMS silos & walkie-talkie delays
            </div>
          </div>

          {/* Aether Autonomous Intelligence */}
          <div className="p-4 sm:p-5 rounded-xl bg-teal-500/5 border border-teal-500/25 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Aether Cognitive Transformation</span>
              </div>
              <p className="text-xs sm:text-sm text-text-primary font-medium leading-relaxed">
                {activeStep.aetherIntelligence}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-teal-500/15 text-[11px] text-emerald-400 font-mono flex items-center justify-between">
              <span>Status: Autonomous Operations</span>
              <span className="text-slate-400">Zero Check-In Wait Times</span>
            </div>
          </div>
        </div>

        {/* Step Progression Pills */}
        <div className="mt-6 pt-4 border-t border-aether-border-subtle flex items-center justify-between">
          <span className="text-xs text-text-muted font-mono hidden sm:inline">
            Booking → Occupancy → Guest → Operations → Experience → Retention
          </span>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            {HOTEL_JOURNEY_STEPS.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => setActiveStepId(s.id)}
                className={cn(
                  'w-2 h-2 rounded-full transition-all',
                  s.id === activeStepId ? 'bg-teal-400 w-6' : 'bg-slate-700 hover:bg-slate-600'
                )}
                aria-label={`Go to step ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
