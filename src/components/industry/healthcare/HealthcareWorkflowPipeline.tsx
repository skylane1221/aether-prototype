import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  MessageSquare, 
  UserCheck, 
  HeartHandshake, 
  FileText, 
  ArrowRight, 
  Info,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';

interface HealthcareStageDetail {
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

const HEALTHCARE_STAGES: HealthcareStageDetail[] = [
  {
    id: 'appointment',
    number: '01',
    name: 'Appointment',
    shortDesc: 'Specialist schedule alignment, clinical slot allocation & triage booking',
    icon: Calendar,
    traditionalPain: 'Fragmented phone booking, double-booked consultation slots, and rigid 15-min blocks that create cascading clinic delays.',
    aetherIntelligence: 'Dynamic provider schedule pacing based on historical case complexity + instant cancellation gap backfilling in <5 minutes.',
    dataPoints: ['Provider Consultation Velocity', 'Historical Case Duration (28 min avg)', 'Specialty Capacity Load', 'Urgent Standby Waitlist Queue'],
    metricGain: '84% recovered open slots'
  },
  {
    id: 'communication',
    number: '02',
    name: 'Communication',
    shortDesc: 'Multi-touch conversational reminders, prep instructions & digital check-in',
    icon: MessageSquare,
    traditionalPain: 'Robotic auto-calls ignored by patients, missing fasting/prep requirements, and 18%+ outpatient clinic no-show rates.',
    aetherIntelligence: 'Contextual WhatsApp/SMS briefings with interactive 1-tap confirmation checkpoints and pre-visit insurance/photo ingestion.',
    dataPoints: ['Pre-Op Fasting Confirmation', 'Digital Insurance OCR Scan', '1-Tap SMS Slot Lock', 'Multilingual Patient Scripting'],
    metricGain: '-78% clinic no-shows'
  },
  {
    id: 'attendance',
    number: '03',
    name: 'Attendance',
    shortDesc: 'Frictionless reception check-in, queue pacing & examination room routing',
    icon: UserCheck,
    traditionalPain: 'Waiting room clipboard queues, redundant paper forms, and patients waiting 40+ minutes past appointment time.',
    aetherIntelligence: 'Instant mobile kiosk check-in with auto-synced EHR symptom intake and intelligent room readiness routing.',
    dataPoints: ['Mobile Check-In Timestamp', 'EHR Intake Ingestion Status', 'Exam Room Cleanliness Telemetry', 'Provider Ready Indicator'],
    metricGain: '< 4.5 min avg wait time'
  },
  {
    id: 'followup',
    number: '04',
    name: 'Follow-up',
    shortDesc: 'Automated care plan adherence, lab review notifications & referral tracking',
    icon: HeartHandshake,
    traditionalPain: 'Patients leave without clear next steps, missing critical 30-day reviews and diagnostic lab follow-ups.',
    aetherIntelligence: 'Automated post-visit digital check-ins, lab portal sync alerts, and smart recurring appointment pre-reservations.',
    dataPoints: ['30-Day Medication Review Cadence', 'Lab Result Turnaround Alerts', 'Referral Routing Tracker', 'Patient Adherence Feedback'],
    metricGain: '96% on-time review adherence'
  },
  {
    id: 'administration',
    number: '05',
    name: 'Administration',
    shortDesc: 'EHR documentation structuring, insurance ledger sync & operational telemetry',
    icon: FileText,
    traditionalPain: 'Physicians spend 2+ hours daily on manual administrative charting; clinic managers face blind spots on room utilization.',
    aetherIntelligence: 'Automated administrative workflow orchestration, structured note exports to EHR, and real-time clinic capacity telemetry.',
    dataPoints: ['Structured CCDA Note Export', 'Insurance Pre-Auth Reconciliation', 'Provider Utilization Yield', 'Exam Room Turn Speed'],
    metricGain: '12 hrs/wk admin saved'
  }
];

export const HealthcareWorkflowPipeline: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('appointment');
  const currentStage = HEALTHCARE_STAGES.find((s) => s.id === activeStageId) || HEALTHCARE_STAGES[0];

  return (
    <div className="space-y-8">
      {/* Interactive Pipeline Track */}
      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-cyan-500/20 via-teal-500/30 to-sky-500/20 -translate-y-1/2 z-0" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 relative z-10">
          {HEALTHCARE_STAGES.map((stage: HealthcareStageDetail, idx: number) => {
            const Icon = stage.icon;
            const isSelected = stage.id === activeStageId;

            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`relative text-left p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-gradient-to-b from-cyan-950/40 via-teal-950/30 to-black border-cyan-500/60 shadow-[0_0_24px_rgba(6,182,212,0.2)]'
                    : 'bg-black/60 border-white/5 hover:border-cyan-500/30 hover:bg-cyan-950/10'
                }`}
              >
                {/* Header with Stage Number and Icon */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono tracking-widest font-semibold px-2 py-0.5 rounded ${
                    isSelected ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40' : 'bg-white/5 text-zinc-400'
                  }`}>
                    {stage.number}
                  </span>
                  <div className={`p-2 rounded-lg transition-colors ${
                    isSelected ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30' : 'bg-white/5 text-zinc-400 group-hover:text-cyan-400'
                  }`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Name and Snippet */}
                <div>
                  <h4 className={`text-sm font-semibold mb-1 transition-colors ${
                    isSelected ? 'text-white' : 'text-zinc-300 group-hover:text-zinc-200'
                  }`}>
                    {stage.name}
                  </h4>
                  <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed">
                    {stage.shortDesc}
                  </p>
                </div>

                {/* Bottom Step Indicator Arrow for Desktop */}
                {idx < HEALTHCARE_STAGES.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-black border border-white/10 items-center justify-center text-zinc-500">
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
          <Card className="p-6 md:p-8 bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950 border-cyan-500/20 relative overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10">
              {/* Left Column: Stage Identity & Aether Impact */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                    <currentStage.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge variant="primary" size="sm" className="text-[10px] bg-cyan-500/20 text-cyan-300 border-cyan-500/40">
                        STAGE {currentStage.number}
                      </Badge>
                      <span className="text-xs font-mono text-zinc-400">CLINICAL OPS ENGINE</span>
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{currentStage.name}</h3>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {currentStage.shortDesc}
                </p>

                <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-cyan-300 text-xs font-semibold">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>Administrative Benchmark Gain</span>
                  </div>
                  <span className="text-sm font-bold text-cyan-200 font-mono">
                    {currentStage.metricGain}
                  </span>
                </div>
              </div>

              {/* Middle/Right Column: Traditional Friction vs Aether Intelligence */}
              <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Traditional Pain */}
                <div className="p-4 rounded-xl bg-black/40 border border-red-900/30 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-rose-400 uppercase tracking-wider font-mono">
                    <Clock className="w-3.5 h-3.5 text-rose-400" />
                    Traditional Bottleneck
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {currentStage.traditionalPain}
                  </p>
                </div>

                {/* Aether Intelligence */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-950/30 to-teal-950/30 border border-cyan-500/40 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300 uppercase tracking-wider font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                    Aether Administrative Flow
                  </div>
                  <p className="text-xs text-zinc-200 leading-relaxed">
                    {currentStage.aetherIntelligence}
                  </p>
                </div>

                {/* Telemetry Stream */}
                <div className="md:col-span-2 p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-cyan-400" />
                      Active Administrative Telemetry Signals
                    </span>
                    <span className="text-[10px] text-zinc-400">Operational Signals</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    {currentStage.dataPoints.map((point: string, idx: number) => (
                      <div key={idx} className="p-2 rounded-lg bg-black/50 border border-white/5 text-[11px] text-zinc-300 font-mono flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
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
