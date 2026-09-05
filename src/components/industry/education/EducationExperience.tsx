import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { IndustryData } from '../../../types';
import { SectionHeader } from '../../ui/SectionHeader';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { EducationWorkflowPipeline } from './EducationWorkflowPipeline';
import { EducationInquiryDemo } from './EducationInquiryDemo';
import { EducationBiDashboard } from './EducationBiDashboard';
import { IndustryBreadcrumb } from '../../common/IndustryBreadcrumb';
import { IndustryNextSteps } from '../../common/IndustryNextSteps';
import {
  GraduationCap,
  ArrowRight,
  AlertCircle,
  Clock,
  Sparkles,
  ChevronDown,
  Activity,
  Calendar,
  ShieldCheck,
  Play,
  Zap,
  BookOpen,
  Award,
  Target,
} from 'lucide-react';
import { cn } from '../../../utils/cn';

interface EducationExperienceProps {
  industry: IndustryData;
}

export const EducationExperience: React.FC<EducationExperienceProps> = ({ industry }) => {
  const { openSolutionModal } = useOutletContext<{ openSolutionModal: () => void }>();
  const [openAccordionIdx, setOpenAccordionIdx] = useState<number | null>(0);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleAccordion = (idx: number) => {
    setOpenAccordionIdx(openAccordionIdx === idx ? null : idx);
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* Breadcrumb Navigation Trail */}
      <IndustryBreadcrumb
        industrySlug="education"
        industryName="Education & Training Centers"
        accentColor="rose"
      />

      {/* ========================================================================= */}
      {/* 01 EDUCATION HERO */}
      {/* ========================================================================= */}
      <section className="relative pt-8 sm:pt-16 pb-12 sm:pb-16 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Eyebrow Badge */}
          <div className="mb-6 flex items-center gap-2 animate-fade-in">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center border text-xs bg-rose-500/10 border-rose-500/20 text-rose-400">
              <GraduationCap className="w-4 h-4" />
            </div>
            <Badge variant="primary" dot size="md">
              Aether for Education & Training Centers
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.15] max-w-4xl">
            {industry.heroHeadline}
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl font-normal">
            {industry.heroSubheadline}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('inquiry-demo-section')}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-md"
            >
              Analyze Admissions & Course Match Engine
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('solutions-section')}
              leftIcon={<Play className="w-4 h-4 text-text-muted fill-current" />}
              className="w-full sm:w-auto"
            >
              Explore 10 Solutions
            </Button>
          </div>

          {/* Key Metric Highlights */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-aether-border-subtle grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 max-w-2xl w-full">
            {industry.stats.map((stat, idx: number) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-rose-400">
                  {stat.value}
                </span>
                <span className="text-xs text-text-muted mt-1 uppercase tracking-wider font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 01.5 THE AETHER EDUCATION ARCHITECTURAL STORY */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-950/95 border border-rose-500/30 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <Badge
                  variant="primary"
                  size="sm"
                  className="bg-rose-500/20 text-rose-300 border-rose-500/30"
                >
                  Admissions Intelligence Thesis
                </Badge>
                <span className="text-xs font-mono text-rose-400 font-semibold">
                  Student Lifecycle & Enrollment Orchestration
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                "Match prospective students to the right course pathways and prevent drop-offs with
                instant guidance."
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-text-muted bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>Problem → Opportunity → Intelligence → Recommendation → Action → Impact</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3.5 pt-6">
            {/* 1. Problem */}
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center gap-1.5 text-rose-400 font-bold text-[10px] uppercase font-mono">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>1. Problem</span>
              </div>
              <h4 className="text-xs font-bold text-white leading-snug">72-Hour Response Lag</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Prospective students submit web inquiries and wait 3 days for a generic course PDF,
                losing momentum to competing academies.
              </p>
              <span className="text-[10px] font-mono text-rose-400 pt-1 border-t border-rose-500/20">
                42% Lead Decay
              </span>
            </div>

            {/* 2. Opportunity */}
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[10px] uppercase font-mono">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>2. Opportunity</span>
              </div>
              <h4 className="text-xs font-bold text-white leading-snug">Instant Syllabus & Fit</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Profile candidate skills in real-time, generate customized curriculum pathways, and
                deliver scholarship reviews in &lt;2 minutes.
              </p>
              <span className="text-[10px] font-mono text-amber-300 pt-1 border-t border-amber-500/20">
                &lt;2 Min Response
              </span>
            </div>

            {/* 3. Aether Intelligence */}
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center gap-1.5 text-rose-400 font-bold text-[10px] uppercase font-mono">
                <BookOpen className="w-3.5 h-3.5 shrink-0" />
                <span>3. Intelligence</span>
              </div>
              <h4 className="text-xs font-bold text-white leading-snug">Aspiration & Skill Mesh</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Synthesizes educational background, current work profile, target learning format,
                budget constraints, and syllabus prerequisites.
              </p>
              <span className="text-[10px] font-mono text-rose-300 pt-1 border-t border-rose-500/20">
                Candidate Graph
              </span>
            </div>

            {/* 4. Recommendation */}
            <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center gap-1.5 text-purple-400 font-bold text-[10px] uppercase font-mono">
                <Target className="w-3.5 h-3.5 shrink-0" />
                <span>4. Recommendation</span>
              </div>
              <h4 className="text-xs font-bold text-white leading-snug">Precision Course Match</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Ranks best-fit degree programs, assigns lead priority score (0-100), and formulates
                tailored scholarship incentives.
              </p>
              <span className="text-[10px] font-mono text-purple-300 pt-1 border-t border-purple-500/20">
                98% Program Fit
              </span>
            </div>

            {/* 5. Action */}
            <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/30 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center gap-1.5 text-indigo-400 font-bold text-[10px] uppercase font-mono">
                <Zap className="w-3.5 h-3.5 shrink-0" />
                <span>5. Action</span>
              </div>
              <h4 className="text-xs font-bold text-white leading-snug">
                Automated Advisor Briefing
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Dispatches personalized WhatsApp consultation invites with 1-click calendar
                reservation for academic advisors.
              </p>
              <span className="text-[10px] font-mono text-indigo-300 pt-1 border-t border-indigo-500/20">
                Auto-Calendar Dispatch
              </span>
            </div>

            {/* 6. Impact */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[10px] uppercase font-mono">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>6. Impact</span>
              </div>
              <h4 className="text-xs font-bold text-white leading-snug">
                +34% Enrolments & 94% Retention
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Accelerates application velocity from 18 days to 4 days, lowers drop-out rates, and
                unlocks higher student lifetime value.
              </p>
              <span className="text-[10px] font-mono text-emerald-400 pt-1 border-t border-emerald-500/20">
                Institutional Growth
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 BUSINESS PROBLEMS & OPERATIONAL BOTTLENECKS */}
      {/* ========================================================================= */}
      <section id="challenges-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Admissions Bottlenecks"
          title="Core Challenges in Education & Training Operations"
          subtitle="The operational bottlenecks causing prospective student drop-off, manual transcript delays, and unnoticed mid-semester withdrawals."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industry.challenges.map((item, idx: number) => (
            <Card
              key={item.id}
              className="p-5 flex flex-col justify-between h-full bg-slate-900/70 border-slate-800 hover:border-slate-700 transition-all"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-800">
                  <span className="text-[10px] font-mono text-rose-400 font-bold">
                    Challenge 0{idx + 1}
                  </span>
                  <span
                    className={cn(
                      'text-[9px] uppercase font-mono px-2 py-0.5 rounded font-bold',
                      item.severity === 'critical'
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                        : item.severity === 'high'
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : 'bg-slate-800 text-slate-300'
                    )}
                  >
                    {item.severity}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-text-primary tracking-tight">
                  {item.problem}
                </h4>

                <div>
                  <div className="text-[10px] font-semibold text-rose-400 uppercase tracking-wider mb-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>Root Cause</span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed pl-4">{item.cause}</p>
                </div>

                <div className="pt-1">
                  <div className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-1 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    <span>Consequence</span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed pl-4">
                    {item.consequence}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03 AETHER OPPORTUNITIES */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Opportunity Discovery"
          title="Transforming Academic Admissions Drag Into Enrollment Multipliers"
          subtitle="How Aether diagnoses application latency and matches student aspirations to optimal course pathways."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industry.opportunities.map((opp, idx: number) => (
            <Card
              key={idx}
              className="p-6 sm:p-7 flex flex-col justify-between h-full card-gradient-surface border-slate-700/80 shadow-card"
            >
              <div className="space-y-4">
                <div className="p-3.5 rounded-lg bg-rose-500/5 border border-rose-500/20">
                  <div className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider mb-1">
                    Diagnosed Admissions Friction
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-snug">
                    {opp.problem}
                  </p>
                </div>

                <div className="flex justify-center text-rose-400">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>

                <div className="p-3.5 rounded-lg bg-rose-500/5 border border-rose-500/25">
                  <div className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Aether Opportunity</span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-primary font-medium leading-snug">
                    {opp.opportunity}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-aether-border-subtle flex items-center justify-between text-xs">
                <span className="text-text-muted font-mono">Projected Multiplier:</span>
                <span className="font-bold font-mono text-emerald-400">
                  {opp.potentialMultiplier}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04 10 AETHER SOLUTIONS MAPPINGS */}
      {/* ========================================================================= */}
      <section id="solutions-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Education Intelligence Mesh"
          title="10 Intelligent Solutions for Education & Training"
          subtitle="Transforming institutional operations from slow admissions queues to instant candidate guidance, automated credential verification, and retention watchdog monitoring."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {industry.solutionMappings.map((mapping, idx: number) => (
            <Card
              key={idx}
              className="p-4 sm:p-5 flex flex-col justify-between h-full bg-slate-900/80 border-slate-700/80"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between mb-1">
                  <Badge variant="neutral" size="sm" className="font-mono text-[9px]">
                    {mapping.capabilityTag}
                  </Badge>
                  <span className="text-[10px] font-mono text-rose-400">Sol 0{idx + 1}</span>
                </div>

                <div className="text-xs text-text-muted">
                  <span className="font-semibold text-rose-400 uppercase tracking-wider text-[9px] block mb-0.5">
                    Problem
                  </span>
                  <p className="line-clamp-2">{mapping.problem}</p>
                </div>

                <div className="text-xs text-text-secondary pl-2 border-l border-slate-700">
                  <span className="font-semibold text-pink-400 uppercase tracking-wider text-[9px] block mb-0.5">
                    Opportunity
                  </span>
                  <p className="line-clamp-2">{mapping.opportunity}</p>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-950 border border-rose-500/20 text-xs text-text-primary leading-relaxed font-medium">
                  <span className="font-bold text-rose-400 uppercase tracking-wider text-[9px] block mb-1">
                    Aether Solution
                  </span>
                  <p className="line-clamp-4">{mapping.solution}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05 SIGNATURE WORKFLOW (Inquiry -> Requirement -> Course Matching -> Follow-up -> Enrollment -> Engagement) */}
      {/* ========================================================================= */}
      <section id="workflow-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EducationWorkflowPipeline />
      </section>

      {/* ========================================================================= */}
      {/* 06 SIGNATURE INTERACTIVE DEMO (Admissions & Course Matching Engine) */}
      {/* ========================================================================= */}
      <section id="inquiry-demo-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Signature Interactive Sandbox"
          title="Student Inquiry Triage & Course Matching Engine"
          subtitle="Select a prospective student lead to analyze goal discovery, prerequisite audits, AI course matching, and automated personalized follow-up outreach."
        />

        <EducationInquiryDemo />
      </section>

      {/* ========================================================================= */}
      {/* 07 BUSINESS INTELLIGENCE DASHBOARD */}
      {/* ========================================================================= */}
      <section id="bi-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Live Institutional Analytics"
          title="Admissions Velocity & Retention Intelligence"
          subtitle="Real-time simulated analytics for application pipeline turnaround, admissions advisor productivity, and LMS retention watchdog success."
        />

        <EducationBiDashboard />
      </section>

      {/* ========================================================================= */}
      {/* 08 BUSINESS IMPACT */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Value Realization"
          title="Measurable Business Impact for Educational Institutions"
          subtitle="Quantifiable improvements delivered across prospective student enrollment yields, admissions turnaround speed, and course completion rates."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-rose-400 font-bold text-sm">
              <Clock className="w-4 h-4" />
              <span>Time Saved</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.time}
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-pink-400 font-bold text-sm">
              <Zap className="w-4 h-4" />
              <span>Efficiency & Turnaround</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.efficiency}
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-purple-400 font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Student Experience</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.customerExperience}
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-amber-400 font-bold text-sm">
              <Activity className="w-4 h-4" />
              <span>Operations & Registrar</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.operations}
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-emerald-400 font-bold text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Decision Making</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.decisionMaking}
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-cyan-400 font-bold text-sm">
              <Award className="w-4 h-4" />
              <span>Visibility & Yield</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.visibility}
            </p>
          </Card>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 09 ADDITIONAL CAPABILITIES ACCORDION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Enterprise Modular Architecture"
          title="Complete Academic & Academy Capability Grid"
          subtitle="Expandable functional modules engineered for professional training academies, technical bootcamps, and university faculties."
        />

        <div className="space-y-4 max-w-4xl mx-auto">
          {industry.additionalCapabilities.map((cap, idx: number) => {
            const isOpen = openAccordionIdx === idx;
            return (
              <Card key={idx} className="overflow-hidden border-slate-800">
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg"
                >
                  <div>
                    <span className="text-[10px] font-mono text-rose-400 font-semibold block mb-1">
                      CAPABILITY MODULE 0{idx + 1}
                    </span>
                    <h4 className="text-base font-bold text-text-primary">{cap.groupTitle}</h4>
                    <p className="text-xs text-text-secondary mt-1">{cap.summary}</p>
                  </div>
                  <div
                    className={cn(
                      'w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-text-muted shrink-0 transition-transform duration-200',
                      isOpen && 'rotate-180 text-rose-400 border-rose-500/40'
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-2 border-t border-slate-800/80 bg-slate-950/40">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {cap.features.map((feature: string, fIdx: number) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2 text-xs text-text-secondary"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      </section>

      {/* Guided Progression Next Steps */}
      <IndustryNextSteps
        industrySlug="education"
        industryName="Education & Training Centers"
        onRequestSolution={openSolutionModal}
      />

      {/* ========================================================================= */}
      {/* 10 BOTTOM CTA */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl p-8 sm:p-12 text-center overflow-hidden border border-rose-500/30 bg-gradient-to-b from-rose-950/30 via-slate-900 to-slate-950">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <Badge variant="primary" dot size="md">
              Education & Admissions Transformation
            </Badge>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              Ready to Accelerate Admissions & Ensure Student Success?
            </h2>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Deploy Aether with your SIS and LMS to triage student inquiries 24/7, parse
              transcripts automatically, and retain learners through graduation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={openSolutionModal}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Schedule Custom Academic Demo
              </Button>
              <Link to="/industries">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Explore Other Industries
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
