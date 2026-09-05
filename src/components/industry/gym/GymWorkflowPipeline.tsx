import React, { useState } from 'react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import {
  UserCheck,
  Activity,
  Zap,
  AlertTriangle,
  ShieldCheck,
  RefreshCw,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { cn } from '../../../utils/cn';

interface GymStep {
  stepNumber: string;
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  traditionalDrag: string;
  aetherIntelligence: string;
  metricLabel: string;
  metricValue: string;
}

const GYM_STEPS: GymStep[] = [
  {
    stepNumber: '01',
    id: 'member',
    title: 'Member Profile',
    subtitle: 'Unified telemetry & joiner onboarding',
    icon: <UserCheck className="w-5 h-5 text-emerald-400" />,
    traditionalDrag:
      'New members enter basic contact info on paper contracts; no historical athletic goal tracking.',
    aetherIntelligence:
      'Constructs a 360° fitness dossier tracking baseline BMI, preferred class times, trainer match, and motivation profile.',
    metricLabel: 'Member Profiling',
    metricValue: '100% Digital Dossier',
  },
  {
    stepNumber: '02',
    id: 'activity',
    title: 'Activity Stream',
    subtitle: 'Turnstile & workout telemetry',
    icon: <Activity className="w-5 h-5 text-sky-400" />,
    traditionalDrag:
      'Turnstile logs scan timestamps without correlating workout duration, class attendance, or rest intervals.',
    aetherIntelligence:
      'Continuously streams RFID turnstile check-ins, app workout logs, heart-rate zones, and class participation.',
    metricLabel: 'Telemetry Resolution',
    metricValue: 'Sub-second Sync',
  },
  {
    stepNumber: '03',
    id: 'engagement',
    title: 'Engagement Index',
    subtitle: 'Habit consistency & community bond',
    icon: <Zap className="w-5 h-5 text-amber-400" />,
    traditionalDrag:
      'Clubs measure engagement by total headcounts, missing the gradual decline in individual member visit frequency.',
    aetherIntelligence:
      'Computes dynamic engagement velocity scores, detecting habit breaks when visits drop 25%+ below baseline.',
    metricLabel: 'Habit Tracking',
    metricValue: '96.2% Precision',
  },
  {
    stepNumber: '04',
    id: 'risk',
    title: 'Risk Modeling',
    subtitle: 'Predictive churn vulnerability',
    icon: <AlertTriangle className="w-5 h-5 text-rose-400" />,
    traditionalDrag:
      'Staff only discover member dissatisfaction when formal cancellation or chargeback requests land at front desk.',
    aetherIntelligence:
      'Forecasts churn vulnerability 45 days in advance using neural activity curve decay modeling.',
    metricLabel: 'Early Warning',
    metricValue: '45 Days Advance Lead',
  },
  {
    stepNumber: '05',
    id: 'retention',
    title: 'Retention Protocol',
    subtitle: 'Autonomous high-touch recovery',
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
    traditionalDrag:
      'Generic marketing blast emails sent to all members; zero coach personalization or recovery incentive.',
    aetherIntelligence:
      'Triggers assigned coach wellness check-ins, complimentary hydro-massage vouchers, or class VIP priority access.',
    metricLabel: 'Recovery Rate',
    metricValue: '89.4% Cohort Preserved',
  },
  {
    stepNumber: '06',
    id: 'renewal',
    title: 'Renewal Lock',
    subtitle: 'Contract & autopay lifecycle',
    icon: <RefreshCw className="w-5 h-5 text-teal-300" />,
    traditionalDrag:
      'Manual phone calls 3 days before expiry; high cancellation rates due to perceived lack of value.',
    aetherIntelligence:
      'Automates 30-day milestone renewal prompts with milestone badge summaries and tailored multi-tier perks.',
    metricLabel: 'Renewal Uplift',
    metricValue: '+18% Annual LTV',
  },
];

export const GymWorkflowPipeline: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<GymStep>(GYM_STEPS[3]);

  return (
    <div className="space-y-6">
      {/* Subheader */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-aether-border-subtle">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="success" size="sm">
              Fitness Retention Pipeline
            </Badge>
            <span className="text-xs font-mono text-text-muted">6-Stage Member Lifecycle</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-text-primary">
            From Turnstile Ingest to Autonomous Annual Renewal
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary mt-1">
            How Aether identifies silent drop-off patterns and re-engages at-risk fitness members.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-text-muted bg-slate-900/80 px-3 py-1.5 rounded-lg border border-aether-border shrink-0">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
          <span>6-Stage Retention Loop</span>
        </div>
      </div>

      {/* Visual Flow Indicator */}
      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-1 overflow-x-auto text-xs font-mono">
        {['Member', 'Activity', 'Engagement', 'Risk', 'Retention', 'Renewal'].map(
          (step, idx, arr) => (
            <React.Fragment key={step}>
              <button
                onClick={() => setSelectedStep(GYM_STEPS[idx])}
                className={cn(
                  'flex items-center gap-1.5 px-2.5 py-1 rounded-lg shrink-0 transition-colors cursor-pointer',
                  selectedStep.id === GYM_STEPS[idx]?.id
                    ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40'
                    : 'text-slate-400 hover:text-white'
                )}
              >
                <span className="text-[10px] text-emerald-400 font-bold">0{idx + 1}</span>
                <span>{step}</span>
              </button>
              {idx < arr.length - 1 && (
                <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              )}
            </React.Fragment>
          )
        )}
      </div>

      {/* Step Buttons Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {GYM_STEPS.map((step) => {
          const isSelected = selectedStep.id === step.id;
          return (
            <button
              key={step.id}
              onClick={() => setSelectedStep(step)}
              className={cn(
                'group relative p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[95px]',
                isSelected
                  ? 'bg-slate-900 border-emerald-500/80 shadow-glow-subtle'
                  : 'bg-aether-surface/60 border-aether-border hover:border-slate-600 hover:bg-slate-900/40'
              )}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span
                  className={cn(
                    'text-[10px] font-mono font-bold px-1.5 py-0.5 rounded',
                    isSelected
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : 'bg-slate-800 text-text-muted'
                  )}
                >
                  {step.stepNumber}
                </span>
                <div
                  className={cn(
                    'p-1 rounded-md transition-colors',
                    isSelected
                      ? 'bg-emerald-500/10'
                      : 'text-text-muted group-hover:text-text-secondary'
                  )}
                >
                  {step.icon}
                </div>
              </div>

              <div>
                <div
                  className={cn(
                    'text-xs font-bold tracking-tight leading-tight line-clamp-1',
                    isSelected ? 'text-white' : 'text-slate-300'
                  )}
                >
                  {step.title}
                </div>
                <div className="text-[10px] text-text-muted truncate mt-0.5">{step.subtitle}</div>
              </div>

              {isSelected && (
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-emerald-400 rotate-45 rounded-sm pointer-events-none" />
              )}
            </button>
          );
        })}
      </div>

      {/* Detail Card */}
      <Card className="p-6 sm:p-7 border-emerald-900/50 bg-slate-900/90 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-3 pb-4 lg:pb-0 lg:border-r border-aether-border-subtle lg:pr-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Step {selectedStep.stepNumber} of 06
              </span>
              <Badge variant="neutral" size="sm" className="font-mono text-[10px]">
                {selectedStep.metricValue}
              </Badge>
            </div>

            <h4 className="text-xl sm:text-2xl font-bold text-text-primary flex items-center gap-2.5">
              {selectedStep.icon}
              <span>{selectedStep.title}</span>
            </h4>

            <p className="text-xs sm:text-sm text-text-muted">{selectedStep.subtitle}</p>

            <div className="pt-2 p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-[10px] font-mono text-text-muted uppercase block">
                Retention Multiplier
              </span>
              <span className="text-emerald-300 font-bold font-mono text-sm">
                {selectedStep.metricLabel}: {selectedStep.metricValue}
              </span>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-rose-400" />
                  <span>Traditional Club Drag</span>
                </div>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {selectedStep.traditionalDrag}
                </p>
              </div>
              <div className="mt-3 text-[10px] font-mono text-text-muted">
                Status Quo: 40% unobserved annual member churn
              </div>
            </div>

            <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Aether Retention Engine</span>
                </div>
                <p className="text-xs sm:text-sm text-text-primary font-medium leading-relaxed">
                  {selectedStep.aetherIntelligence}
                </p>
              </div>
              <div className="mt-3 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <ChevronRight className="w-3 h-3" />
                <span>Autonomous intervention loop</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
