import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Car, 
  FileText, 
  Wrench, 
  Bell, 
  Calendar, 
  Cpu, 
  HeartHandshake, 
  ArrowRight, 
  Info,
  CheckCircle2,
  Clock,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';

interface AutomotiveStageDetail {
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

const AUTOMOTIVE_STAGES: AutomotiveStageDetail[] = [
  {
    id: 'vehicle',
    number: '01',
    name: 'Vehicle',
    shortDesc: 'Digital vehicle passport, telematics sync, VIN specs & diagnostic status',
    icon: Car,
    traditionalPain: 'Fragmented paper service books, unrecorded aftermarket modifications, and unknown vehicle maintenance baselines.',
    aetherIntelligence: 'Unified digital vehicle passport compiling telematics, odometer telemetry, OEM technical service bulletins, and full repair history.',
    dataPoints: ['Live Odometer & Telematics Feed', 'OBD-II Fault History (DTC Log)', 'OEM Service Interval Matrix', 'Factory Warranty & Recall Status'],
    metricGain: '100% vehicle lifecycle visibility'
  },
  {
    id: 'service_history',
    number: '02',
    name: 'Service History',
    shortDesc: 'Historical repair order analysis, wear velocity & parts longevity tracking',
    icon: FileText,
    traditionalPain: 'Previous repair notes scattered across disconnected dealer software; repeated unnecessary diagnostic labor.',
    aetherIntelligence: 'Intelligent multi-visit component wear modeling calculating exact degradation rates for brake pads, rotors, filters, and fluids.',
    dataPoints: ['Prior Repair Order Line Items', 'Component Replacement Timestamps', 'Technician Diagnostic Annotations', 'Fleet Vehicle Wear Variance'],
    metricGain: '-40% diagnostic time'
  },
  {
    id: 'service_prediction',
    number: '03',
    name: 'Service Prediction',
    shortDesc: 'Proactive component wear calculation & major service interval forecasting',
    icon: Wrench,
    traditionalPain: 'Unanticipated component failures and emergency roadside breakdowns that frustrate vehicle owners.',
    aetherIntelligence: 'Predictive maintenance engine forecasting exact mileage milestones (30k/60k/90k) and flagging upcoming preventative replacements.',
    dataPoints: ['Brake Pad Lining Remaining (3mm)', 'Transmission Fluid Viscosity Curve', 'Tire Tread Depth Telemetry', 'Seasonal Battery Health Metric'],
    metricGain: '+38% preventative repair conversion'
  },
  {
    id: 'reminder',
    number: '04',
    name: 'Reminder',
    shortDesc: 'Automated WhatsApp & SMS service invitations with pre-calculated estimates',
    icon: Bell,
    traditionalPain: 'Generic postcard reminders sent months too late; customers switch to independent quick-lube chains.',
    aetherIntelligence: 'Contextual WhatsApp/SMS alerts timed to exact vehicle mileage with transparent line-item estimates and 1-tap bay booking.',
    dataPoints: ['Odometer Projection Algorithm', 'Pre-Calculated Job Estimate ($)', 'Preferred Customer Drop-off Day', '1-Tap Digital Booking Token'],
    metricGain: '+36% routine service retention'
  },
  {
    id: 'appointment',
    number: '05',
    name: 'Appointment',
    shortDesc: 'Smart drop-off scheduling, loaner car allocation & customer check-in',
    icon: Calendar,
    traditionalPain: 'Advisors double-book morning drop-offs; customers wait in service lane queues while paperwork is manually typed.',
    aetherIntelligence: 'Dynamic intake slot reservation matching customer arrival times with certified technician availability and loaner fleet schedules.',
    dataPoints: ['Estimated Labor Duration (2.5 hrs)', 'Express vs Heavy Bay Allocation', 'Customer Mobility / Loaner Pass', 'Digital Drop-Off Check-In Pass'],
    metricGain: '< 3 min morning intake'
  },
  {
    id: 'workshop',
    number: '06',
    name: 'Workshop',
    shortDesc: 'Lift bay balancing, technician skill routing & pre-staged parts verification',
    icon: Cpu,
    traditionalPain: 'Cars put on lifts before parts arrive; master technicians bottlenecked while express bays sit empty.',
    aetherIntelligence: 'Autonomous bay-and-parts orchestration verifying warehouse stock and routing repair orders to certified master techs.',
    dataPoints: ['Lift Bay Capacity Status (Bay 4 Held)', 'Parts Counter Pre-Staging Scan', 'Master Tech Skill Certification', 'Live Tablet RO Job Timer'],
    metricGain: '92.5% bay capacity utilization'
  },
  {
    id: 'retention',
    number: '07',
    name: 'Retention',
    shortDesc: 'Multi-point video inspection walk-throughs, loyalty perks & repeat cycle loop',
    icon: HeartHandshake,
    traditionalPain: 'Customers feel overcharged due to opaque repair advice; low post-warranty dealership retention.',
    aetherIntelligence: 'Transparent multi-point video inspection approvals, post-service digital health cards, and automated loyalty tier perks.',
    dataPoints: ['Video Inspection Approval Rate (88%)', 'Customer Satisfaction (CSAT 4.9/5)', '12-Month Vehicle RO Trajectory', 'Post-Service Feedback Engine'],
    metricGain: '+$185 avg repair order uplift'
  }
];

export const AutomotiveWorkflowPipeline: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('workshop');
  const currentStage = AUTOMOTIVE_STAGES.find((s) => s.id === activeStageId) || AUTOMOTIVE_STAGES[0];

  return (
    <div className="space-y-8">
      {/* Interactive Pipeline Track */}
      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-6 right-6 h-0.5 bg-gradient-to-r from-indigo-500/20 via-blue-500/30 to-violet-500/20 -translate-y-1/2 z-0" />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2.5 relative z-10">
          {AUTOMOTIVE_STAGES.map((stage: AutomotiveStageDetail, idx: number) => {
            const Icon = stage.icon;
            const isSelected = stage.id === activeStageId;

            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`relative text-left p-3.5 rounded-xl border transition-all duration-300 flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-gradient-to-b from-indigo-950/50 via-blue-950/30 to-black border-indigo-500/60 shadow-[0_0_24px_rgba(99,102,241,0.25)]'
                    : 'bg-black/60 border-white/5 hover:border-indigo-500/30 hover:bg-indigo-950/10'
                }`}
              >
                {/* Header with Stage Number and Icon */}
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-mono tracking-widest font-semibold px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40' : 'bg-white/5 text-zinc-400'
                  }`}>
                    {stage.number}
                  </span>
                  <div className={`p-1.5 rounded-lg transition-colors ${
                    isSelected ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30' : 'bg-white/5 text-zinc-400 group-hover:text-indigo-400'
                  }`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Name and Snippet */}
                <div>
                  <h4 className={`text-xs font-semibold mb-1 transition-colors ${
                    isSelected ? 'text-white' : 'text-zinc-300 group-hover:text-zinc-200'
                  }`}>
                    {stage.name}
                  </h4>
                  <p className="text-[10px] text-zinc-400 line-clamp-2 leading-relaxed">
                    {stage.shortDesc}
                  </p>
                </div>

                {/* Step Connector Arrow for Desktop */}
                {idx < AUTOMOTIVE_STAGES.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2.5 top-1/2 -translate-y-1/2 z-20 w-5 h-5 rounded-full bg-black border border-white/10 items-center justify-center text-zinc-500 text-[10px]">
                    <ArrowRight className="w-2.5 h-2.5" />
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
          <Card className="p-6 md:p-8 bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950 border-indigo-500/20 relative overflow-hidden">
            {/* Background ambient glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10">
              {/* Left Column: Stage Identity & Aether Impact */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                    <currentStage.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge variant="primary" size="sm" className="text-[10px] bg-indigo-500/20 text-indigo-300 border-indigo-500/40">
                        STAGE {currentStage.number}
                      </Badge>
                      <span className="text-xs font-mono text-zinc-400">SERVICE LIFECYCLE</span>
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight">{currentStage.name}</h3>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed">
                  {currentStage.shortDesc}
                </p>

                <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/30 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-indigo-300 text-xs font-semibold">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    <span>Workshop Benchmark Yield</span>
                  </div>
                  <span className="text-sm font-bold text-indigo-200 font-mono">
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
                    Dealership Pain Point
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {currentStage.traditionalPain}
                  </p>
                </div>

                {/* Aether Intelligence */}
                <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-950/30 to-blue-950/30 border border-indigo-500/40 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-indigo-300 uppercase tracking-wider font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                    Aether Service Engine
                  </div>
                  <p className="text-xs text-zinc-200 leading-relaxed">
                    {currentStage.aetherIntelligence}
                  </p>
                </div>

                {/* Telemetry Stream */}
                <div className="md:col-span-2 p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-indigo-400" />
                      Active Workshop Telemetry Vectors
                    </span>
                    <span className="text-[10px] text-zinc-400">4 Synchronized Streams</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    {currentStage.dataPoints.map((point: string, idx: number) => (
                      <div key={idx} className="p-2 rounded-lg bg-black/50 border border-white/5 text-[11px] text-zinc-300 font-mono flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
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
