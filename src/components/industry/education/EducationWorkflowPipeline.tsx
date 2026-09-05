import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HelpCircle,
  Target,
  BookOpen,
  Send,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Info,
  CheckCircle2,
  Clock,
  Award,
  Users,
} from 'lucide-react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';

interface EducationStageDetail {
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

const EDUCATION_STAGES: EducationStageDetail[] = [
  {
    id: 'inquiry',
    number: '01',
    name: 'Inquiry',
    shortDesc: 'Multi-channel prospect capture, source attribution & intent prioritization',
    icon: HelpCircle,
    traditionalPain:
      'Inbound inquiries languish in CRM queues for 3–5 business days before an admissions advisor calls.',
    aetherIntelligence:
      'Instant 24/7 conversational advisor capturing candidate goals, scoring intent, and answering prerequisite questions in <45s.',
    dataPoints: [
      'Inbound Channel Attribution',
      'Prospect Intent Score (94/100)',
      'Target Career Trajectory',
      'Schedule & Budget Preference',
    ],
    metricGain: '4x faster response speed',
  },
  {
    id: 'requirement',
    number: '02',
    name: 'Requirement',
    shortDesc: 'Cognitive transcript parsing, prerequisite audits & learning style discovery',
    icon: Target,
    traditionalPain:
      'Admissions staff manually inspect PDF transcripts and certificates, taking days to verify degree eligibility.',
    aetherIntelligence:
      'Automated OCR transcript analysis parsing GPA, transfer credits, and prerequisite coursework against program catalog.',
    dataPoints: [
      'Undergraduate GPA (3.82)',
      'Prerequisite Course Match',
      'Transfer Credit Approvals',
      'Time Commitment Feasibility',
    ],
    metricGain: '82% faster app triage',
  },
  {
    id: 'course_matching',
    number: '03',
    name: 'Course Matching',
    shortDesc: 'AI curriculum alignment, elective personalization & scholarship calculation',
    icon: BookOpen,
    traditionalPain:
      'Students get lost in complex course catalogs; mismatched program enrollments lead to early dropouts.',
    aetherIntelligence:
      'Curriculum matching engine recommending optimal degree tracks, modular certifications, and merit scholarship packages.',
    dataPoints: [
      'Curriculum Fit Score (98.5%)',
      'Cohort Schedule Compatibility',
      'Merit Scholarship Package ($4k)',
      'Career Placement Alignment',
    ],
    metricGain: '+19.5% enrollment yield',
  },
  {
    id: 'followup',
    number: '04',
    name: 'Follow-up',
    shortDesc: 'Contextual WhatsApp & email admissions packages, faculty invites & lab passes',
    icon: Send,
    traditionalPain:
      'Generic bulk email blasts with <12% open rates; prospective students matriculate with responsive competitors.',
    aetherIntelligence:
      'Personalized multi-touch admissions sequences with tailored syllabus previews, faculty 1-on-1 bookings, and lab tour passes.',
    dataPoints: [
      'Customized Syllabus PDF',
      'Dean Orientation Invite Link',
      'Tuition Financing Calculator',
      'Dynamic Response Timing Engine',
    ],
    metricGain: '3.2x higher matriculation',
  },
  {
    id: 'enrollment',
    number: '05',
    name: 'Enrollment',
    shortDesc: 'Frictionless digital registration, tuition ledger sync & orientation staging',
    icon: GraduationCap,
    traditionalPain:
      'Paper enrollment slips, manual fee reconciliation, and backlogged registrar paperwork.',
    aetherIntelligence:
      'Instant 1-tap digital enrollment packet with automated student ID issuance, SIS sync, and payment plan setup.',
    dataPoints: [
      'Digital Signature Timestamp',
      'SIS Student ID Generation',
      'Payment Schedule Ledgering',
      'Faculty Mentor Assignment',
    ],
    metricGain: '< 12 min full enrollment',
  },
  {
    id: 'engagement',
    number: '06',
    name: 'Engagement',
    shortDesc: 'Continuous LMS telemetry monitoring, assignment pacing & retention watchdog',
    icon: Sparkles,
    traditionalPain:
      'Struggling learners drop out unnoticed mid-semester until failing final assessments.',
    aetherIntelligence:
      'Continuous LMS activity tracking detecting assignment delays at Week 3 and triggering proactive faculty intervention.',
    dataPoints: [
      'LMS Login Frequency Index',
      'Assignment Velocity Scoring',
      'Peer Collaboration Telemetry',
      'Early Dropout Risk Alarm',
    ],
    metricGain: '+22% course completion rate',
  },
];

export const EducationWorkflowPipeline: React.FC = () => {
  const [activeStageId, setActiveStageId] = useState<string>('course_matching');
  const currentStage = EDUCATION_STAGES.find((s) => s.id === activeStageId) || EDUCATION_STAGES[0];

  return (
    <div className="space-y-8">
      {/* Interactive Pipeline Track */}
      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-6 right-6 h-0.5 bg-gradient-to-r from-rose-500/20 via-pink-500/30 to-purple-500/20 -translate-y-1/2 z-0" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
          {EDUCATION_STAGES.map((stage: EducationStageDetail, idx: number) => {
            const Icon = stage.icon;
            const isSelected = stage.id === activeStageId;

            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`relative text-left p-3.5 rounded-xl border transition-all duration-300 flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-gradient-to-b from-rose-950/50 via-pink-950/30 to-black border-rose-500/60 shadow-[0_0_24px_rgba(244,63,94,0.25)]'
                    : 'bg-black/60 border-white/5 hover:border-rose-500/30 hover:bg-rose-950/10'
                }`}
              >
                {/* Header with Stage Number and Icon */}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-[10px] font-mono tracking-widest font-semibold px-1.5 py-0.5 rounded ${
                      isSelected
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                        : 'bg-white/5 text-zinc-400'
                    }`}
                  >
                    {stage.number}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg transition-colors ${
                      isSelected
                        ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                        : 'bg-white/5 text-zinc-400 group-hover:text-rose-400'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Name and Snippet */}
                <div>
                  <h4
                    className={`text-xs font-semibold mb-1 transition-colors ${
                      isSelected ? 'text-white' : 'text-zinc-300 group-hover:text-zinc-200'
                    }`}
                  >
                    {stage.name}
                  </h4>
                  <p className="text-[10px] text-zinc-400 line-clamp-2 leading-relaxed">
                    {stage.shortDesc}
                  </p>
                </div>

                {/* Step Connector Arrow for Desktop */}
                {idx < EDUCATION_STAGES.length - 1 && (
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
                        size="sm"
                        className="text-[10px] bg-rose-500/20 text-rose-300 border-rose-500/40"
                      >
                        STAGE {currentStage.number}
                      </Badge>
                      <span className="text-xs font-mono text-zinc-400">LEARNER LIFECYCLE</span>
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
                    <span>Academic Benchmark Yield</span>
                  </div>
                  <span className="text-sm font-bold text-rose-200 font-mono">
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
                <div className="p-4 rounded-xl bg-gradient-to-br from-rose-950/30 to-purple-950/30 border border-rose-500/40 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-rose-300 uppercase tracking-wider font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" />
                    Aether Admissions Engine
                  </div>
                  <p className="text-xs text-zinc-200 leading-relaxed">
                    {currentStage.aetherIntelligence}
                  </p>
                </div>

                {/* Telemetry Stream */}
                <div className="md:col-span-2 p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                    <span className="flex items-center gap-1.5">
                      <Info className="w-3.5 h-3.5 text-rose-400" />
                      Active Student Telemetry Signals
                    </span>
                    <span className="text-[10px] text-zinc-400">4 Synchronized Streams</span>
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
