import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  User,
  CalendarCheck,
  Sparkles,
  RefreshCw,
  HeartHandshake,
  ArrowRight,
  Info,
  CheckCircle2,
  Clock,
  Scissors,
} from 'lucide-react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';

interface StageDetail {
  id: string;
  number: string;
  name: string;
  shortDesc: string;
  icon: React.ElementType;
  traditionalPain: string;
  aetherIntelligence: string;
  dataPoints: string[];
  metricGain: string;
}

const SALON_STAGES: StageDetail[] = [
  {
    id: 'customer',
    number: '01',
    name: 'Customer',
    shortDesc: 'Client profile, preference memory & treatment historical logging',
    icon: User,
    traditionalPain:
      'Fragmented paper cards, unrecorded allergies, forgotten formula ratios & style preferences.',
    aetherIntelligence:
      'Unified digital client dossier auto-aggregating hair/skin profiles, formula histories & visit rhythms.',
    dataPoints: [
      'Skin/Hair Diagnostic Profile',
      'Formula & Shade Archive',
      'Communication Preferences',
      'Lifetime Spend Tier',
    ],
    metricGain: '100% preference continuity',
  },
  {
    id: 'appointment',
    number: '02',
    name: 'Appointment',
    shortDesc: 'Dynamic booking optimization, buffer intelligence & no-show prevention',
    icon: CalendarCheck,
    traditionalPain:
      'Double bookings, unrealistic time slots, phone-tag friction & 18% salon no-show rates.',
    aetherIntelligence:
      'Predictive slot allocation based on stylist velocity + ML no-show risk scoring & smart confirmation protocols.',
    dataPoints: [
      'Stylist Processing Time Curves',
      'No-Show Risk Probability (94%)',
      'Chair Slot Packing Yield',
      'Deposit Safeguards',
    ],
    metricGain: '-72% booking no-shows',
  },
  {
    id: 'service',
    number: '03',
    name: 'Service',
    shortDesc: 'Stylist workstation intelligence, add-on prompts & formula accuracy',
    icon: Scissors,
    traditionalPain:
      'Stylists rush without client background, missing high-margin add-on treatments & accurate formula logs.',
    aetherIntelligence:
      'Workstation tablet prompt with previous formula mix, recent hair notes & contextual add-on treatment recommendations.',
    dataPoints: [
      'Exact Shade/Oxidant Ratio',
      'Contextual Add-on Recommendation',
      'Chair Time Tracking',
      'Stylist Workstation Sync',
    ],
    metricGain: '+28% service ticket value',
  },
  {
    id: 'rebooking',
    number: '04',
    name: 'Rebooking',
    shortDesc: 'Cycle-calculated rebooking prompts & personalized outreach',
    icon: RefreshCw,
    traditionalPain:
      'Front desk forgets to ask; clients leave and delay rebooking by 4-8 weeks, causing revenue drift.',
    aetherIntelligence:
      'Precision regrowth/fade calculation triggering automated, hyper-personalized rebooking prompts at optimal moment.',
    dataPoints: [
      'Regrowth / Fade Cycle (4.2 wks)',
      'Preferred Day/Time Matrix',
      'Stylist Roster Availability',
      '1-Tap WhatsApp Slot Reserve',
    ],
    metricGain: '84% rebooking capture rate',
  },
  {
    id: 'retention',
    number: '05',
    name: 'Retention',
    shortDesc: 'VIP loyalty nurturing, churn interception & referral compounding',
    icon: HeartHandshake,
    traditionalPain:
      'Lost clients vanish silently without notice until months later when chair utilization drops.',
    aetherIntelligence:
      'Early slippage alert system identifying overdue clients + curated revival experiences to preserve LTV.',
    dataPoints: [
      'Visit Gap Standard Deviation',
      'Sentiment & Review Tracking',
      'VIP Lifetime Value Trajectory',
      'Auto-Revival Win-Back Engine',
    ],
    metricGain: '+41% 12-month client LTV',
  },
];

export const SalonWorkflowPipeline: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('rebooking');
  const currentStage = SALON_STAGES.find((s) => s.id === activeStageId) || SALON_STAGES[0];

  return (
    <div className="space-y-8">
      {/* Interactive Pipeline Track */}
      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-rose-500/20 via-pink-500/30 to-purple-500/20 -translate-y-1/2 z-0" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 relative z-10">
          {SALON_STAGES.map((stage: StageDetail, idx: number) => {
            const Icon = stage.icon;
            const isSelected = stage.id === activeStageId;

            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`relative text-left p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-gradient-to-b from-rose-950/40 via-purple-950/30 to-black border-rose-500/60 shadow-[0_0_24px_rgba(244,63,94,0.2)]'
                    : 'bg-black/60 border-white/5 hover:border-rose-500/30 hover:bg-rose-950/10'
                }`}
              >
                {/* Header with Stage Number and Icon */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-[10px] font-mono tracking-widest font-semibold px-2 py-0.5 rounded ${
                      isSelected
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                        : 'bg-white/5 text-zinc-300'
                    }`}
                  >
                    {stage.number}
                  </span>
                  <div
                    className={`p-2 rounded-lg transition-colors ${
                      isSelected
                        ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                        : 'bg-white/5 text-zinc-300 group-hover:text-rose-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Name and Snippet */}
                <div>
                  <h4
                    className={`text-sm font-semibold mb-1 transition-colors ${
                      isSelected ? 'text-white' : 'text-zinc-300 group-hover:text-zinc-200'
                    }`}
                  >
                    {stage.name}
                  </h4>
                  <p className="text-[11px] text-zinc-300 line-clamp-2 leading-relaxed">
                    {stage.shortDesc}
                  </p>
                </div>

                {/* Bottom Step Indicator Arrow for Desktop */}
                {idx < SALON_STAGES.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-black border border-white/10 items-center justify-center text-zinc-300">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Deep-Dive Stage Drawer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStage.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
        >
          <Card className="p-6 md:p-8 bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950 border-rose-500/20 relative overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10">
              {/* Left Column: Stage Identity & Aether Impact */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400">
                    <currentStage.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="primary"
                        className="text-[10px] bg-rose-500/20 text-rose-300 border-rose-500/40"
                      >
                        STAGE {currentStage.number}
                      </Badge>
                      <span className="text-xs font-mono text-zinc-300">SALON CYCLE ENGINE</span>
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {currentStage.name}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">{currentStage.shortDesc}</p>

                <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-rose-300 text-xs font-semibold">
                    <Sparkles className="w-4 h-4 text-rose-400" />
                    <span>Benchmark Improvement</span>
                  </div>
                  <span className="text-sm font-bold text-rose-200 font-mono">
                    {currentStage.metricGain}
                  </span>
                </div>
              </div>

              {/* Middle/Right Column: Traditional Friction vs Aether Intelligence */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Traditional Pain */}
                <div className="p-4 rounded-xl bg-black/40 border border-rose-900/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-rose-400/90 uppercase tracking-wider font-mono">
                    <Clock className="w-3.5 h-3.5 text-rose-400" />
                    Traditional Bottleneck
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {currentStage.traditionalPain}
                  </p>
                </div>

                {/* Aether Intelligence */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-rose-950/30 to-purple-950/30 border border-rose-500/40 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-rose-300 uppercase tracking-wider font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" />
                    Aether Intelligence
                  </div>
                  <p className="text-xs text-zinc-200 leading-relaxed">
                    {currentStage.aetherIntelligence}
                  </p>
                </div>

                {/* Telemetry Stream */}
                <div className="md:col-span-2 p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-300">
                    <span className="flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-rose-400" />
                      Active Cycle Telemetry Vectors
                    </span>
                    <span className="text-[10px] text-zinc-300">4 Active Signals</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    {currentStage.dataPoints.map((point: string, idx: number) => (
                      <div
                        key={idx}
                        className="p-2 rounded-lg bg-black/50 border border-white/5 text-[11px] text-zinc-300 font-mono flex items-center gap-1.5"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                        <span className="truncate">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
