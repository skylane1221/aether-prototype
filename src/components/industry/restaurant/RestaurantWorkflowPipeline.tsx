import React, { useState } from 'react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import {
  History,
  TrendingUp,
  ChefHat,
  Boxes,
  Flame,
  Users,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { cn } from '../../../utils/cn';

interface WorkflowStep {
  stepNumber: string;
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  traditionalFriction: string;
  aetherIntelligence: string;
  metricLabel: string;
  metricValue: string;
}

const RESTAURANT_STEPS: WorkflowStep[] = [
  {
    stepNumber: '01',
    id: 'sales-history',
    title: 'Sales History',
    subtitle: 'Telemetry & POS ingestion',
    icon: <History className="w-5 h-5 text-amber-400" />,
    traditionalFriction: 'Static daily totals logged in spreadsheets; no hourly item-level consumption pattern analysis.',
    aetherIntelligence: 'Ingests granular transaction records, dish order velocity, modifier choices, and table turn timestamps.',
    metricLabel: 'Telemetry Ingest',
    metricValue: '100% Item Granularity',
  },
  {
    stepNumber: '02',
    id: 'demand-forecast',
    title: 'Demand Forecast',
    subtitle: 'Weather & event-aware modeling',
    icon: <TrendingUp className="w-5 h-5 text-sky-400" />,
    traditionalFriction: 'Head chef estimates covers based on intuition; fails to anticipate rain spikes or local event surges.',
    aetherIntelligence: 'Simulates item-level demand incorporating weather, reservation book, delivery trends, and holiday seasonality.',
    metricLabel: 'Forecast Accuracy',
    metricValue: '98.4% Precision',
  },
  {
    stepNumber: '03',
    id: 'preparation',
    title: 'Preparation',
    subtitle: 'Staged batch & par-level planning',
    icon: <ChefHat className="w-5 h-5 text-emerald-400" />,
    traditionalFriction: 'Kitchen over-preps expensive gravies and cut proteins at 7 AM; high end-of-night spoilage.',
    aetherIntelligence: 'Calculates two-stage prep par levels, sauce simmer quantities, and butchery cuts to minimize holding degradation.',
    metricLabel: 'Waste Reduction',
    metricValue: '-68% Kitchen Waste',
  },
  {
    stepNumber: '04',
    id: 'inventory',
    title: 'Inventory',
    subtitle: 'Recipe-level supplier procurement',
    icon: <Boxes className="w-5 h-5 text-indigo-400" />,
    traditionalFriction: 'Morning walk-in stockouts cause emergency high-cost retail purchases and mid-service 86ing.',
    aetherIntelligence: 'Converts dish forecast into exact gram-level raw material orders and automatically dispatches supplier POs.',
    metricLabel: 'Stockout Rate',
    metricValue: 'Zero 86 Incidents',
  },
  {
    stepNumber: '05',
    id: 'kitchen-ops',
    title: 'Kitchen Operations',
    subtitle: 'Station load pacing & ticket cadence',
    icon: <Flame className="w-5 h-5 text-rose-400" />,
    traditionalFriction: 'Simultaneous 40-cover dining rush and delivery aggregator spikes choke sauté, grill, and tandoor stations.',
    aetherIntelligence: 'Paces incoming tickets dynamically across line stations and adjusts delivery driver lead times in real time.',
    metricLabel: 'Ticket Speed',
    metricValue: '12.4m Avg Ticket Time',
  },
  {
    stepNumber: '06',
    id: 'customer-intel',
    title: 'Customer Intelligence',
    subtitle: 'Loyalty & preference tracking',
    icon: <Users className="w-5 h-5 text-violet-400" />,
    traditionalFriction: 'Regular guests treated as first-time walk-ins; no memory of favorite tables, wine, or allergies.',
    aetherIntelligence: 'Synthesizes dining history, dietary profiles, and visit frequency to prompt VIP touches and re-engagement tasting invites.',
    metricLabel: 'Repeat Dining',
    metricValue: '+34% Loyalty Return',
  },
];

export const RestaurantWorkflowPipeline: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<WorkflowStep>(RESTAURANT_STEPS[1]);

  return (
    <div className="space-y-6">
      {/* Section Sub-header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-aether-border-subtle">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="primary" size="sm">
              Culinary Core Pipeline
            </Badge>
            <span className="text-xs font-mono text-text-muted">6-Stage Restaurant Lifecycle</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-text-primary">
            From Historical POS Data to Precision Kitchen Service
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary mt-1">
            How Aether aligns dining room demand with back-of-house butchery, simmering, and line station execution.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-text-muted bg-slate-900/80 px-3 py-1.5 rounded-lg border border-aether-border shrink-0">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Synchronized Restaurant Loop</span>
        </div>
      </div>

      {/* Interactive Step Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {RESTAURANT_STEPS.map((step) => {
          const isSelected = selectedStep.id === step.id;
          return (
            <button
              key={step.id}
              onClick={() => setSelectedStep(step)}
              className={cn(
                'group relative p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[95px]',
                isSelected
                  ? 'bg-slate-900 border-amber-500/80 shadow-glow-subtle'
                  : 'bg-aether-surface/60 border-aether-border hover:border-slate-600 hover:bg-slate-900/40'
              )}
            >
              <div className="flex items-center justify-between w-full mb-2">
                <span
                  className={cn(
                    'text-[10px] font-mono font-bold px-1.5 py-0.5 rounded',
                    isSelected ? 'bg-amber-500/20 text-amber-300' : 'bg-slate-800 text-text-muted'
                  )}
                >
                  {step.stepNumber}
                </span>
                <div
                  className={cn(
                    'p-1 rounded-md transition-colors',
                    isSelected ? 'bg-amber-500/10' : 'text-text-muted group-hover:text-text-secondary'
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
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-amber-400 rotate-45 rounded-sm pointer-events-none" />
              )}
            </button>
          );
        })}
      </div>

      {/* Step Detail Card */}
      <Card className="p-6 sm:p-7 border-slate-700 bg-slate-900/90 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-3 pb-4 lg:pb-0 lg:border-r border-aether-border-subtle lg:pr-6">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
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
              <span className="text-[10px] font-mono text-text-muted uppercase block">Aether Performance Metric</span>
              <span className="text-amber-300 font-bold font-mono text-sm">{selectedStep.metricLabel}: {selectedStep.metricValue}</span>
            </div>
          </div>

          {/* Right Column: Traditional Drag vs Aether Intelligence */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-rose-500/5 border border-rose-500/20 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-rose-400 uppercase tracking-wider mb-2">
                  <span className="w-2 h-2 rounded-full bg-rose-400" />
                  <span>Traditional Kitchen Friction</span>
                </div>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {selectedStep.traditionalFriction}
                </p>
              </div>
              <div className="mt-3 text-[10px] font-mono text-text-muted">
                Status Quo: High food waste & ticket delays
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Aether Culinary Intelligence</span>
                </div>
                <p className="text-xs sm:text-sm text-text-primary font-medium leading-relaxed">
                  {selectedStep.aetherIntelligence}
                </p>
              </div>
              <div className="mt-3 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <ChevronRight className="w-3 h-3" />
                <span>Autonomous station calibration</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
