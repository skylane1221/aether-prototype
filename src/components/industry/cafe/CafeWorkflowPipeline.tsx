import React, { useState } from 'react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import {
  Coffee,
  TrendingUp,
  Croissant,
  PackageCheck,
  Users,
  SlidersHorizontal,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { cn } from '../../../utils/cn';

interface CafeWorkflowStep {
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

const CAFE_STEPS: CafeWorkflowStep[] = [
  {
    stepNumber: '01',
    id: 'sales',
    title: 'Sales Telemetry',
    subtitle: 'High-speed drink transaction stream',
    icon: <Coffee className="w-5 h-5 text-amber-500" />,
    traditionalDrag:
      'POS records total daily cash, but misses bean grams per shot and modifier demand spikes.',
    aetherIntelligence:
      'Captures sub-second drink ticket streams, oat milk modifiers, cup sizes, and takeaway ratios.',
    metricLabel: 'Capture Latency',
    metricValue: 'Real-Time Stream',
  },
  {
    stepNumber: '02',
    id: 'demand',
    title: 'Demand Curve',
    subtitle: 'Commuter rush & weather modeling',
    icon: <TrendingUp className="w-5 h-5 text-sky-400" />,
    traditionalDrag:
      '7:30 AM morning rush hits without warning; baristas get slammed with unbatched complex iced drinks.',
    aetherIntelligence:
      'Projects exact hourly beverage curves, distinguishing cold brew vs flat white demand by morning temperature.',
    metricLabel: 'Rush Accuracy',
    metricValue: '99.1% Forecast Fit',
  },
  {
    stepNumber: '03',
    id: 'preparation',
    title: 'Preparation',
    subtitle: 'Espresso calibration & bakery par-bakes',
    icon: <Croissant className="w-5 h-5 text-orange-400" />,
    traditionalDrag:
      'Baking 100 croissants at 6 AM leads to afternoon staleness; cold brew runs dry by 1:00 PM.',
    aetherIntelligence:
      'Schedules 6:15 AM first-bake batches, cold brew keg charge timings, and grinder micron calibrations.',
    metricLabel: 'Bakery Spoilage',
    metricValue: '< 3.1% Total Waste',
  },
  {
    stepNumber: '04',
    id: 'inventory',
    title: 'Inventory Ledger',
    subtitle: 'Bean roast dates & fresh dairy burn',
    icon: <PackageCheck className="w-5 h-5 text-emerald-400" />,
    traditionalDrag:
      'Running out of oat milk or coffee cups mid-Saturday morning forces 86ing core lattes.',
    aetherIntelligence:
      'Monitors whole bean roast decay windows, milk carton depletion, and auto-dispatches roastery reorders.',
    metricLabel: 'Stockout Frequency',
    metricValue: '0 Mid-Rush Stockouts',
  },
  {
    stepNumber: '05',
    id: 'customer-behaviour',
    title: 'Customer Behaviour',
    subtitle: 'Habit clustering & loyalty cycles',
    icon: <Users className="w-5 h-5 text-indigo-400" />,
    traditionalDrag:
      'Commuter regulars wait in standard retail queues; high queue walk-aways during 8:00 AM peak.',
    aetherIntelligence:
      'Recognizes regular morning commuter orders and triggers one-tap mobile pre-orders upon approach.',
    metricLabel: 'Repeat Frequency',
    metricValue: '84% Daily Retention',
  },
  {
    stepNumber: '06',
    id: 'optimization',
    title: 'Station Optimization',
    subtitle: 'Barista role & counter throughput',
    icon: <SlidersHorizontal className="w-5 h-5 text-amber-300" />,
    traditionalDrag:
      'Single barista handles grinding, steaming, and register simultaneously, causing 6-minute wait lines.',
    aetherIntelligence:
      'Dynamically divides extraction, milk pitcher staging, and expeditor hand-offs during peak surge.',
    metricLabel: 'Drink Velocity',
    metricValue: '88s Average Extraction',
  },
];

export const CafeWorkflowPipeline: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<CafeWorkflowStep>(CAFE_STEPS[1]);

  return (
    <div className="space-y-6">
      {/* Subheader */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-aether-border-subtle">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="warning" size="sm">
              Artisan Coffee Engine
            </Badge>
            <span className="text-xs font-mono text-text-muted">6-Stage Cafe Lifecycle</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-text-primary">
            From High-Speed Counter Signals to Perfect Morning Extractions
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary mt-1">
            How Aether orchestrates morning rush velocity, bean roast freshness, and bakery
            par-bakes.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-text-muted bg-slate-900/80 px-3 py-1.5 rounded-lg border border-aether-border shrink-0">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>6-Stage Cafe Intelligence Loop</span>
        </div>
      </div>

      {/* Visual Flow Indicator */}
      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between gap-1 overflow-x-auto text-xs font-mono">
        {['Sales', 'Demand', 'Preparation', 'Inventory', 'Customer', 'Optimization'].map(
          (step, idx, arr) => (
            <React.Fragment key={step}>
              <button
                onClick={() => setSelectedStep(CAFE_STEPS[idx])}
                className={cn(
                  'flex items-center gap-1.5 px-2.5 py-1 rounded-lg shrink-0 transition-colors cursor-pointer',
                  selectedStep.id === CAFE_STEPS[idx]?.id
                    ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40'
                    : 'text-slate-400 hover:text-white'
                )}
              >
                <span className="text-[10px] text-amber-400 font-bold">0{idx + 1}</span>
                <span>{step}</span>
              </button>
              {idx < arr.length - 1 && (
                <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0" />
              )}
            </React.Fragment>
          )
        )}
      </div>

      {/* Steps Selector Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {CAFE_STEPS.map((step) => {
          const isSelected = selectedStep.id === step.id;
          return (
            <button
              key={step.id}
              onClick={() => setSelectedStep(step)}
              className={cn(
                'group relative p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[95px]',
                isSelected
                  ? 'bg-amber-950/40 border-amber-500/80 shadow-glow-subtle'
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
                    isSelected
                      ? 'bg-amber-500/10'
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
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-amber-500 rotate-45 rounded-sm pointer-events-none" />
              )}
            </button>
          );
        })}
      </div>

      {/* Step Detail Card */}
      <Card className="p-6 sm:p-7 border-amber-900/50 bg-slate-950/90 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

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

            <div className="pt-2 p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-[10px] font-mono text-text-muted uppercase block">
                Cafe Velocity Metric
              </span>
              <span className="text-amber-300 font-bold font-mono text-sm">
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
                  <span>Manual Counter Friction</span>
                </div>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {selectedStep.traditionalDrag}
                </p>
              </div>
              <div className="mt-3 text-[10px] font-mono text-text-muted">
                Status Quo: Queue walk-aways & cold brew stockouts
              </div>
            </div>

            <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Aether Barista Intelligence</span>
                </div>
                <p className="text-xs sm:text-sm text-text-primary font-medium leading-relaxed">
                  {selectedStep.aetherIntelligence}
                </p>
              </div>
              <div className="mt-3 text-[10px] font-mono text-amber-400 flex items-center gap-1">
                <ChevronRight className="w-3 h-3" />
                <span>Precision counter flow calibration</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
