import React, { useState } from 'react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import {
  UserCheck,
  FileSearch,
  Zap,
  Building2,
  CalendarCheck,
  Repeat,
  Trophy,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { cn } from '../../../utils/cn';

interface JourneyStage {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  frictionInManual: string;
  aetherIntelligence: string;
  typicalDuration: string;
  aetherSpeed: string;
  telemetryMetric: string;
}

const JOURNEY_STAGES: JourneyStage[] = [
  {
    id: 'lead',
    stepNumber: '01',
    title: 'Lead Ingestion',
    subtitle: 'Omni-channel signal capture',
    icon: <UserCheck className="w-5 h-5 text-cyan-400" />,
    frictionInManual:
      'Leads scattered across WhatsApp, 99acres, MagicBricks; 4+ hour initial response latency.',
    aetherIntelligence:
      'Unified cognitive webhook dedupes and ingests multi-portal inquiries in real time.',
    typicalDuration: '4.2 hours',
    aetherSpeed: '< 5 seconds',
    telemetryMetric: '100% Capture Rate',
  },
  {
    id: 'requirement',
    stepNumber: '02',
    title: 'Requirement Extraction',
    subtitle: 'Natural language entity parsing',
    icon: <FileSearch className="w-5 h-5 text-indigo-400" />,
    frictionInManual:
      'Manual tele-calling scripts; prospective buyers drop off during repetitive interrogations.',
    aetherIntelligence:
      'Extracts 6+ parameters (budget, location, carpet area, parking, possession) without forms.',
    typicalDuration: '24-48 hours',
    aetherSpeed: '< 10 seconds',
    telemetryMetric: '98.2% Entity Accuracy',
  },
  {
    id: 'intent',
    stepNumber: '03',
    title: 'Intent & Readiness',
    subtitle: 'Predictive qualification scoring',
    icon: <Zap className="w-5 h-5 text-amber-400" />,
    frictionInManual:
      'Brokers waste 60% of weekend bandwidth touring unvetted or low-intent window shoppers.',
    aetherIntelligence:
      'Scores home-loan pre-approval, closing urgency, and budget elasticity into a single score.',
    typicalDuration: '3-5 days',
    aetherSpeed: 'Instantaneous',
    telemetryMetric: '94% Intent Precision',
  },
  {
    id: 'property-match',
    stepNumber: '04',
    title: 'Property Match',
    subtitle: 'Semantic multi-factor ranking',
    icon: <Building2 className="w-5 h-5 text-sky-400" />,
    frictionInManual:
      'Brokers search memory or static PDF brochures, frequently showing mismatched specs.',
    aetherIntelligence:
      'Ranks active developer inventory by floor plate, view, carpet area, and payment plan fit.',
    typicalDuration: '1-2 days',
    aetherSpeed: 'Sub-second',
    telemetryMetric: '4.6x Higher Match Rate',
  },
  {
    id: 'site-visit',
    stepNumber: '05',
    title: 'Site Visit',
    subtitle: 'Autonomous slot & gate pass dispatch',
    icon: <CalendarCheck className="w-5 h-5 text-emerald-400" />,
    frictionInManual:
      'Back-and-forth SMS coordination; gate entry delays and 40% site visit no-show rate.',
    aetherIntelligence:
      'Self-locks calendar windows, notifies site sales managers, and issues digital QR passes.',
    typicalDuration: '3-4 calls',
    aetherSpeed: '1-Click Booking',
    telemetryMetric: '-85% No-Show Rate',
  },
  {
    id: 'follow-up',
    stepNumber: '06',
    title: 'Follow-up Cadence',
    subtitle: 'Contextual nurturing intelligence',
    icon: <Repeat className="w-5 h-5 text-violet-400" />,
    frictionInManual:
      'Agents forget follow-ups or spam buyers with generic "Are you still interested?" pings.',
    aetherIntelligence:
      'Analyzes viewing feedback telemetry and dispatches tailored comparison sheets & payment plans.',
    typicalDuration: 'Inconsistent',
    aetherSpeed: 'Autonomous Nurture',
    telemetryMetric: '3.1x Higher Re-engagement',
  },
  {
    id: 'conversion',
    stepNumber: '07',
    title: 'Conversion & Token',
    subtitle: 'Digital closing enablement',
    icon: <Trophy className="w-5 h-5 text-amber-300" />,
    frictionInManual:
      'Paperwork friction, delayed cost-sheet iterations, and prolonged KYC negotiation cycles.',
    aetherIntelligence:
      'Generates instant dynamic payment schedules, stamp duty breakdowns, and token reservation locks.',
    typicalDuration: '14-21 days',
    aetherSpeed: '< 48 hours',
    telemetryMetric: '+38% Close Velocity',
  },
];

export const RealEstateJourneyPipeline: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<JourneyStage>(JOURNEY_STAGES[0]);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-aether-border-subtle">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="primary" size="sm">
              Core Business Journey
            </Badge>
            <span className="text-xs font-mono text-text-muted">Real Estate Lifecycle</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-text-primary">
            From Fragmented Inbound to Closed Token
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary mt-1">
            How Aether orchestrates each stage of the real estate buyer qualification and inventory
            matching lifecycle.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-text-muted bg-slate-900/80 px-3 py-1.5 rounded-lg border border-aether-border shrink-0">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>7-Stage Cognitive Journey</span>
        </div>
      </div>

      {/* Visual Flow Indicator */}
      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-1 overflow-x-auto text-xs font-mono">
        {[
          'Lead',
          'Requirement',
          'Intent',
          'Property Match',
          'Site Visit',
          'Follow-up',
          'Conversion',
        ].map((step, idx, arr) => (
          <React.Fragment key={step}>
            <div
              className={cn(
                'flex items-center gap-1.5 px-2.5 py-1 rounded-lg shrink-0 transition-colors',
                selectedStage.id === JOURNEY_STAGES[idx]?.id
                  ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              )}
            >
              <span className="text-[10px] text-cyan-400 font-bold">0{idx + 1}</span>
              <span>{step}</span>
            </div>
            {idx < arr.length - 1 && (
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Interactive Pipeline Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {JOURNEY_STAGES.map((stage) => {
          const isSelected = selectedStage.id === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setSelectedStage(stage)}
              className={cn(
                'group relative p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[90px]',
                isSelected
                  ? 'bg-slate-900 border-cyan-500/80 shadow-glow-subtle'
                  : 'bg-aether-surface/60 border-aether-border hover:border-slate-600 hover:bg-slate-900/40'
              )}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span
                  className={cn(
                    'text-[10px] font-mono font-bold px-1.5 py-0.5 rounded',
                    isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-text-muted'
                  )}
                >
                  {stage.stepNumber}
                </span>
                <div
                  className={cn(
                    'p-1 rounded-md transition-colors',
                    isSelected
                      ? 'bg-cyan-500/10'
                      : 'text-text-muted group-hover:text-text-secondary'
                  )}
                >
                  {stage.icon}
                </div>
              </div>

              <div>
                <div
                  className={cn(
                    'text-xs font-bold tracking-tight leading-tight line-clamp-1',
                    isSelected ? 'text-white' : 'text-slate-300'
                  )}
                >
                  {stage.title}
                </div>
                <div className="text-[10px] text-text-muted truncate mt-0.5">{stage.subtitle}</div>
              </div>

              {isSelected && (
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rotate-45 rounded-sm pointer-events-none" />
              )}
            </button>
          );
        })}
      </div>

      {/* Stage Detail Card */}
      <Card className="p-6 sm:p-7 border-slate-700 bg-slate-900/90 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column: Stage Info */}
          <div className="lg:col-span-4 space-y-3 pb-4 lg:pb-0 lg:border-r border-aether-border-subtle lg:pr-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                Stage {selectedStage.stepNumber} of 07
              </span>
              <Badge variant="neutral" size="sm" className="font-mono text-[10px]">
                {selectedStage.telemetryMetric}
              </Badge>
            </div>

            <h4 className="text-xl sm:text-2xl font-bold text-text-primary flex items-center gap-2.5">
              {selectedStage.icon}
              <span>{selectedStage.title}</span>
            </h4>

            <p className="text-xs sm:text-sm text-text-muted">{selectedStage.subtitle}</p>

            <div className="pt-2 grid grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                <span className="text-[10px] text-text-muted uppercase block">
                  Traditional Time
                </span>
                <span className="text-rose-400 font-bold">{selectedStage.typicalDuration}</span>
              </div>
              <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30">
                <span className="text-[10px] text-cyan-400 uppercase block">Aether Velocity</span>
                <span className="text-emerald-400 font-bold">{selectedStage.aetherSpeed}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Traditional Friction vs Aether Transformation */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Traditional Friction */}
            <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-rose-400" />
                  <span>Traditional Friction</span>
                </div>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {selectedStage.frictionInManual}
                </p>
              </div>
              <div className="mt-3 text-[10px] font-mono text-text-muted">
                Status Quo: High drop-off & manual delay
              </div>
            </div>

            {/* Aether Transformation */}
            <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Aether Transformation</span>
                </div>
                <p className="text-xs sm:text-sm text-text-primary font-medium leading-relaxed">
                  {selectedStage.aetherIntelligence}
                </p>
              </div>
              <div className="mt-3 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <ChevronRight className="w-3 h-3" />
                <span>Autonomous cognitive execution</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
