import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  Send,
  MessageSquare,
  ShieldCheck,
  Target,
  Award,
  Users,
  Briefcase,
} from 'lucide-react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { EDUCATION_INQUIRIES, StudentInquiryProfile } from '../../../data/educationData';

export const EducationInquiryDemo: React.FC = () => {
  const [selectedInqId, setSelectedInqId] = useState<string>(EDUCATION_INQUIRIES[0].id);
  const [demoState, setDemoState] = useState<'idle' | 'analyzing' | 'dispatched'>('idle');
  const [activeTab, setActiveTab] = useState<'requirements' | 'courses'>('requirements');

  const inquiry: StudentInquiryProfile =
    EDUCATION_INQUIRIES.find((i: StudentInquiryProfile) => i.id === selectedInqId) ||
    EDUCATION_INQUIRIES[0];

  const handleRunAether = () => {
    setDemoState('analyzing');
    setTimeout(() => {
      setDemoState('dispatched');
    }, 500);
  };

  const handleReset = () => {
    setDemoState('idle');
  };

  const handleSelectInq = (id: string) => {
    setSelectedInqId(id);
    setDemoState('idle');
  };

  return (
    <div className="space-y-6">
      {/* Top Demo Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
        <div className="flex items-center gap-2.5 flex-wrap">
          <Badge
            variant="outline"
            size="sm"
            className="bg-rose-500/10 border-rose-400/40 text-rose-300 font-mono text-[10px] tracking-widest font-bold uppercase py-0.5 px-2.5"
          >
            SIMULATED DEMO
          </Badge>
          <span className="text-xs font-mono text-text-muted">
            Signature Journey:{' '}
            <strong className="text-rose-300">
              Student Inquiry → Requirement → Course Match → Follow-up
            </strong>
          </span>
        </div>

        <div className="flex items-center gap-2">
          {demoState === 'idle' ? (
            <Button
              variant="primary"
              size="sm"
              onClick={handleRunAether}
              leftIcon={<Sparkles className="w-3.5 h-3.5" />}
              className="bg-rose-500 hover:bg-rose-400 text-slate-950 font-semibold shadow-glow-subtle"
            >
              Run Aether
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              className="text-xs border-slate-700 text-slate-200"
            >
              Reset Demo
            </Button>
          )}
        </div>
      </div>

      {/* Student Inquiry Selector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {EDUCATION_INQUIRIES.map((i: StudentInquiryProfile) => {
          const isSelected = i.id === selectedInqId;
          const priorityBadge =
            i.priorityTier === 'High Priority (Immediate Action)'
              ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
              : i.priorityTier === 'Warm Candidate'
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : 'bg-purple-500/20 text-purple-300 border-purple-500/40';

          return (
            <button
              key={i.id}
              onClick={() => handleSelectInq(i.id)}
              className={`p-4 rounded-xl text-left border transition-all duration-300 relative group flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-b from-rose-950/50 via-pink-950/30 to-black border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.25)]'
                  : 'bg-zinc-900/60 border-white/5 hover:border-rose-500/30 hover:bg-rose-950/10'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-zinc-400 font-semibold">
                    {i.background}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border ${priorityBadge}`}
                  >
                    {i.leadPriorityScore}/100 Priority
                  </span>
                </div>
                <div className="font-semibold text-white text-sm group-hover:text-rose-300 transition-colors">
                  {i.studentName}
                </div>
                <div className="text-xs text-zinc-400 flex items-center gap-1.5 mt-0.5">
                  <BookOpen className="w-3 h-3 text-rose-400" />
                  <span className="truncate">{i.targetProgram}</span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-zinc-400 font-mono text-[11px]">{i.inquiryChannel}</span>
                <span className="text-rose-400 font-mono font-bold text-[11px]">
                  {i.matchedCourses.length} Matched
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Student Dossier & Admissions Engine */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Student Requirements & Course Matching */}
        <div className="lg:col-span-7 space-y-6">
          <Card className="p-6 bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950 border-white/10 space-y-6">
            {/* Header / Prospect Dossier Card */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-rose-500 to-pink-600 p-0.5">
                  <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center text-rose-400 font-bold text-base">
                    {inquiry.avatarInitials}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">{inquiry.studentName}</h3>
                    <Badge
                      variant="primary"
                      size="sm"
                      className="text-[10px] bg-rose-500/20 text-rose-300 border-rose-500/30"
                    >
                      {inquiry.priorityTier.split(' (')[0]}
                    </Badge>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Background: <span className="text-zinc-200">{inquiry.background}</span> •
                    Channel: <span className="text-zinc-300">{inquiry.inquiryChannel}</span>
                  </p>
                </div>
              </div>

              {/* Quick Status Chips */}
              <div className="flex items-center gap-3 text-right">
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-zinc-400 uppercase font-mono">Lead Score</div>
                  <div className="text-xs font-bold text-rose-400 font-mono">
                    {inquiry.leadPriorityScore}/100
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-zinc-400 uppercase font-mono">
                    Target Program
                  </div>
                  <div className="text-xs font-bold text-white font-mono">
                    {inquiry.targetDegree}
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-tab Switcher: Requirements vs Matched Courses */}
            <div className="flex items-center gap-2 border-b border-white/5 pb-2">
              <button
                onClick={() => setActiveTab('requirements')}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                  activeTab === 'requirements'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Target className="w-3.5 h-3.5" />
                Student Requirements & Background Discovery
              </button>
              <button
                onClick={() => setActiveTab('courses')}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                  activeTab === 'courses'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                AI Matched Curriculum & Specializations ({inquiry.matchedCourses.length})
              </button>
            </div>

            {/* Tab 1: Requirements Discovery */}
            {activeTab === 'requirements' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-zinc-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-rose-400" />
                      Format & Timeline
                    </span>
                    <p className="text-xs font-bold text-white pt-0.5">
                      {inquiry.requirements.formatPreference}
                    </p>
                    <span className="text-[11px] text-rose-300 font-mono">
                      {inquiry.requirements.timeline}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-zinc-400 flex items-center gap-1">
                      <Award className="w-3 h-3 text-rose-400" />
                      Budget & Scholarship
                    </span>
                    <p className="text-xs font-bold text-white pt-0.5">
                      {inquiry.requirements.budgetOrScholarship}
                    </p>
                    <span className="text-[11px] text-zinc-400 font-mono">
                      Financial aid pre-approved
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <span className="text-[10px] uppercase font-mono text-zinc-400">
                    Current Skill Baseline & Prerequisite Discovery
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed pt-1">
                    {inquiry.requirements.currentSkillBaseline}
                  </p>
                </div>
              </div>
            )}

            {/* Tab 2: Matched Courses */}
            {activeTab === 'courses' && (
              <div className="space-y-3">
                {inquiry.matchedCourses.map((crs, idx: number) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-2 hover:border-rose-500/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-white">{crs.courseTitle}</h4>
                      <Badge
                        variant="primary"
                        size="sm"
                        className="text-[10px] bg-rose-500/20 text-rose-300 border-rose-500/30 font-mono"
                      >
                        {crs.matchScore}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono text-zinc-400 pt-1">
                      <div>
                        Duration: <span className="text-zinc-200">{crs.duration}</span>
                      </div>
                      <div>
                        Cohort Start: <span className="text-rose-300">{crs.cohortStart}</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-emerald-400 font-mono flex items-center gap-1.5 pt-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{crs.prerequisiteStatus}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Follow-Up Action Brief */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-rose-950/20 via-pink-950/20 to-black border border-rose-500/20 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-300 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-rose-400" />
                  <strong>Admissions Strategy: {inquiry.recommendedFollowUp.actionCTA}</strong>
                </span>
                <span className="font-mono text-rose-300 text-[11px]">
                  Timing: {inquiry.recommendedFollowUp.timing}
                </span>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Aether Automated Admissions Outreach */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="p-6 bg-gradient-to-br from-rose-950/30 via-zinc-950 to-black border-rose-500/30 space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/40">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Aether Admissions Outreach</h4>
                  <span className="text-[10px] font-mono text-zinc-400">
                    Automated Student Advisor Engine
                  </span>
                </div>
              </div>
              <Badge
                variant="primary"
                size="sm"
                className="text-[10px] bg-rose-500/20 text-rose-300 border-rose-500/40 font-mono"
              >
                Lead Score {inquiry.leadPriorityScore}
              </Badge>
            </div>

            {/* Recommended Action Settings */}
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 space-y-1">
                <span className="text-[10px] uppercase font-mono text-zinc-400 flex items-center gap-1">
                  <Award className="w-3 h-3 text-rose-400" />
                  Recommended Admissions Step
                </span>
                <div className="text-xs font-bold text-white">
                  {inquiry.recommendedFollowUp.actionCTA}
                </div>
              </div>

              {/* Outreach Channel & Timing */}
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                  <div className="text-[10px] text-zinc-400 font-mono uppercase">Channel</div>
                  <div className="text-xs font-bold text-white flex items-center gap-1 mt-0.5">
                    <MessageSquare className="w-3 h-3 text-emerald-400" />
                    {inquiry.recommendedFollowUp.channel}
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                  <div className="text-[10px] text-zinc-400 font-mono uppercase">Timing</div>
                  <div className="text-xs font-bold text-white flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3 text-rose-400" />
                    {inquiry.recommendedFollowUp.timing.split(' (')[0]}
                  </div>
                </div>
              </div>
            </div>

            {/* Generated Script Preview */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Send className="w-3 h-3 text-rose-400" />
                  Generated {inquiry.recommendedFollowUp.channel} Admissions Script
                </span>
                <span className="text-[10px] text-emerald-400">1-Tap Direct Send</span>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-emerald-100/90 font-mono leading-relaxed relative">
                <div className="absolute top-2 right-2 flex items-center gap-1 text-[10px] text-emerald-400">
                  <ShieldCheck className="w-3 h-3" />
                  Verified
                </div>
                "{inquiry.recommendedFollowUp.messageScript}"
              </div>
            </div>

            {/* Action Trigger */}
            <div className="pt-2">
              <AnimatePresence mode="wait">
                {demoState === 'analyzing' ? (
                  <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-500/40 text-center space-y-2">
                    <div className="w-5 h-5 border-2 border-rose-400 border-t-transparent animate-spin mx-auto" />
                    <p className="text-xs text-rose-200 font-mono">
                      Matching syllabus prerequisites & evaluating scholarship eligibility...
                    </p>
                  </div>
                ) : demoState === 'dispatched' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-center space-y-2"
                  >
                    <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      Result: Admissions Package & Syllabus Dispatched
                    </div>
                    <p className="text-[11px] text-emerald-200/80">
                      Tailored syllabus, scholarship review, and orientation invite sent to{' '}
                      {inquiry.studentName}.
                    </p>
                    <div className="pt-1 flex items-center justify-center gap-2">
                      <span className="text-[10px] font-mono text-emerald-300">
                        Recommended Action: Consultation Scheduled
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleReset}
                        className="text-[10px] py-0.5 px-2 h-auto border-emerald-500/40 text-emerald-300"
                      >
                        Reset Demo
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <Button
                    onClick={handleRunAether}
                    variant="primary"
                    className="w-full justify-center gap-2 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 shadow-lg shadow-rose-900/30 font-semibold"
                  >
                    <Send className="w-4 h-4" />
                    Recommended Action: Dispatch Course Package & Follow-Up
                  </Button>
                )}
              </AnimatePresence>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
