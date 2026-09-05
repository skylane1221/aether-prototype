import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { IndustryData } from '../../../types';
import { SectionHeader } from '../../ui/SectionHeader';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { GymWorkflowPipeline } from './GymWorkflowPipeline';
import { GymMemberRetentionDemo } from './GymMemberRetentionDemo';
import { GymBiDashboard } from './GymBiDashboard';
import { IndustryBreadcrumb } from '../../common/IndustryBreadcrumb';
import { IndustryNextSteps } from '../../common/IndustryNextSteps';
import {
  Dumbbell,
  ArrowRight,
  AlertCircle,
  Clock,
  Sparkles,
  ChevronDown,
  Activity,
  Layers,
  BrainCircuit,
  Eye,
  Play,
  Zap,
  CheckCircle2,
  Users,
  ShieldCheck,
  RefreshCw,
  Target,
} from 'lucide-react';
import { cn } from '../../../utils/cn';

interface GymExperienceProps {
  industry: IndustryData;
}

export const GymExperience: React.FC<GymExperienceProps> = ({ industry }) => {
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
        industrySlug="gyms"
        industryName="Gyms & Fitness Centers"
        accentColor="emerald"
      />

      {/* ========================================================================= */}
      {/* 01 GYM HERO */}
      {/* ========================================================================= */}
      <section className="relative pt-8 sm:pt-16 pb-12 sm:pb-16 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Eyebrow Badge */}
          <div className="mb-6 flex items-center gap-2 animate-fade-in">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center border text-xs bg-emerald-500/10 border-emerald-500/20 text-emerald-400">
              <Dumbbell className="w-4 h-4" />
            </div>
            <Badge variant="success" dot size="md">
              Aether for Gyms & Fitness Centers
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
              onClick={() => scrollToSection('retention-demo-section')}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-md"
            >
              Analyze Member Churn Risk
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('solutions-section')}
              leftIcon={<Play className="w-4 h-4 text-text-muted fill-current" />}
              className="w-full sm:w-auto"
            >
              Explore 9 Solutions
            </Button>
          </div>

          {/* Key Metric Highlights */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-aether-border-subtle grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 max-w-2xl w-full">
            {industry.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-emerald-400">
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
      {/* 01.5 THE AETHER GYM OPERATIONAL PARADIGM */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-950/95 border border-emerald-500/30 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Badge variant="success" size="sm">
                  Member Retention & Churn Architecture
                </Badge>
                <span className="text-xs font-mono text-emerald-400 font-semibold">
                  Proactive Fitness Intelligence
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                How Aether Eliminates Member Drop-Off & Maximizes LTV
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-text-muted bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800">
              <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              <span>Turnstile RFID Ingest → Autonomous Coach Intervention</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {/* 1. Problem */}
            <div className="p-5 rounded-xl bg-rose-950/20 border border-rose-500/30 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>The Retention Problem</span>
                </div>
                <h3 className="text-base font-extrabold text-white">
                  Silent Disengagement & Churn Blindspots
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Members drop from 4 visits/week down to 0 visits over 3 weeks without front-desk
                  detection. Staff only discover disengagement when members cancel auto-renewal,
                  resulting in 40%+ annual churn.
                </p>
              </div>
              <div className="pt-3 border-t border-rose-500/20 flex items-center justify-between text-[11px] font-mono text-rose-300/80">
                <span>Annual Impact:</span>
                <span className="font-bold text-rose-300">42% Annual Membership Bleed</span>
              </div>
            </div>

            {/* 2. Aether Understands */}
            <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <BrainCircuit className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Aether Understands</span>
                </div>
                <h3 className="text-base font-extrabold text-white">
                  Turnstile & Engagement Ingestion
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Synthesizes turnstile RFID check-ins, habit decay intervals, and studio class
                  booking curves:
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {[
                    'Weekly Visit Velocity',
                    'Habit Break Thresholds',
                    'Favorite Workout Styles',
                    'Assigned Coach Sync',
                    'Studio Class Fill Rates',
                    'Renewal Countdown Days',
                  ].map((attr, i) => (
                    <span
                      key={attr}
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-emerald-500/10 border border-emerald-500/25 text-emerald-300"
                    >
                      {i + 1}. {attr}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-emerald-500/20 flex items-center justify-between text-[11px] font-mono text-emerald-300/80">
                <span>Lead Time:</span>
                <span className="font-bold text-emerald-300">45 Days Advance Warning</span>
              </div>
            </div>

            {/* 3. Aether Recommends */}
            <div className="p-5 rounded-xl bg-teal-950/20 border border-teal-500/30 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 text-teal-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Target className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Aether Recommends</span>
                </div>
                <h3 className="text-base font-extrabold text-white">
                  Targeted Retention Protocols
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Triggers personalized coach recovery tasks, incentive vouchers, and proactive
                  renewal incentives:
                </p>
                <div className="mt-3 space-y-1.5">
                  {[
                    'Assigned Coach WhatsApp Touchpoints',
                    'Recovery Vouchers (Hydro-Massage & Saunas)',
                    'Dynamic Studio Class Rebalancing',
                    'Trainer Priority Schedule Alerts',
                    'Proactive 30-Day Milestone Renewal Locks',
                  ].map((rec, i) => (
                    <div
                      key={rec}
                      className="flex items-center gap-2 text-[11px] font-mono text-teal-300"
                    >
                      <CheckCircle2 className="w-3 h-3 text-teal-400 shrink-0" />
                      <span>
                        {i + 1}. {rec}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-teal-500/20 flex items-center justify-between text-[11px] font-mono text-teal-300/80">
                <span>Retention Result:</span>
                <span className="font-bold text-teal-300">89.4% Cohort Preserved • +18% LTV</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 BUSINESS PROBLEMS & OPERATIONAL BOTTLENECKS */}
      {/* ========================================================================= */}
      <section id="challenges-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Club Friction"
          title="7 Core Challenges in Fitness Operations"
          subtitle="The root causes leading to member habit breaks, class booking drop-offs, and missed renewals."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industry.challenges.map((item, idx) => (
            <Card
              key={item.id}
              className="p-5 flex flex-col justify-between h-full bg-slate-900/70 border-slate-800 hover:border-slate-700 transition-all"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-800">
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">
                    Problem 0{idx + 1}
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
          title="Transforming Gym Friction Into Membership Velocity Multipliers"
          subtitle="How Aether diagnoses early attendance decay and converts vulnerable members into long-term fitness renewals."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industry.opportunities.map((opp, idx) => (
            <Card
              key={idx}
              className="p-6 sm:p-7 flex flex-col justify-between h-full card-gradient-surface border-slate-700/80 shadow-card"
            >
              <div className="space-y-4">
                <div className="p-3.5 rounded-lg bg-rose-500/5 border border-rose-500/20">
                  <div className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider mb-1">
                    Diagnosed Club Friction
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-snug">
                    {opp.problem}
                  </p>
                </div>

                <div className="flex justify-center text-emerald-400">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>

                <div className="p-3.5 rounded-lg bg-emerald-500/5 border border-emerald-500/25">
                  <div className="text-[11px] font-semibold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
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
      {/* 04 9 AETHER SOLUTIONS MAPPINGS */}
      {/* ========================================================================= */}
      <section id="solutions-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Fitness Intelligence Mesh"
          title="9 Intelligent Solutions for Gyms & Studios"
          subtitle="Transforming club operations from reactive cancellation processing to predictive member habit nurturing."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industry.solutionMappings.map((mapping, idx) => (
            <Card
              key={idx}
              className="p-5 sm:p-6 flex flex-col justify-between h-full bg-slate-900/80 border-slate-700/80"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between mb-1">
                  <Badge variant="neutral" size="sm" className="font-mono text-[10px]">
                    {mapping.capabilityTag}
                  </Badge>
                  <span className="text-[10px] font-mono text-emerald-400">
                    Solution 0{idx + 1}
                  </span>
                </div>

                <div className="text-xs text-text-muted">
                  <span className="font-semibold text-rose-400 uppercase tracking-wider text-[10px] block mb-0.5">
                    1. Problem Addressed
                  </span>
                  {mapping.problem}
                </div>

                <div className="text-xs text-text-secondary pl-2.5 border-l border-slate-700">
                  <span className="font-semibold text-emerald-400 uppercase tracking-wider text-[10px] block mb-0.5">
                    2. Unlocked Opportunity
                  </span>
                  {mapping.opportunity}
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-emerald-500/20 text-xs sm:text-sm text-text-primary leading-relaxed font-medium">
                  <span className="font-bold text-emerald-400 uppercase tracking-wider text-[10px] block mb-1">
                    3. Aether Capability
                  </span>
                  {mapping.solution}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05 SIGNATURE WORKFLOW (Member -> Activity -> Engagement -> Risk -> Retention -> Renewal) */}
      {/* ========================================================================= */}
      <section id="workflow-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GymWorkflowPipeline />
      </section>

      {/* ========================================================================= */}
      {/* 06 SIGNATURE INTERACTIVE DEMO (Member Risk & Retention Engine) */}
      {/* ========================================================================= */}
      <section id="retention-demo-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Signature Interactive Sandbox"
          title="Member Retention & Inactivity Interception Engine"
          subtitle="Select a simulated member profile to analyze turnstile attendance decay, churn vulnerability, and automated coach outreach."
        />

        <GymMemberRetentionDemo />
      </section>

      {/* ========================================================================= */}
      {/* 07 BUSINESS INTELLIGENCE DASHBOARD */}
      {/* ========================================================================= */}
      <section id="bi-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Live Club Analytics"
          title="Club Operations & Cohort Intelligence"
          subtitle="Real-time simulated analytics for cohort retention, churn archetypes, class capacity, and trainer monetization."
        />

        <GymBiDashboard />
      </section>

      {/* ========================================================================= */}
      {/* 08 BUSINESS IMPACT */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Value Realization"
          title="Measurable Business Impact for Fitness Clubs"
          subtitle="Quantifiable improvements delivered across member lifetime value, studio fill rates, and recurring revenue preservation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-emerald-400 font-bold text-sm">
              <Clock className="w-4 h-4" />
              <span>Time Saved</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.time}
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-sky-400 font-bold text-sm">
              <Zap className="w-4 h-4" />
              <span>Efficiency & Throughput</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.efficiency}
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-teal-400 font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Customer Experience</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.customerExperience}
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-rose-400 font-bold text-sm">
              <Activity className="w-4 h-4" />
              <span>Operations & Churn</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.operations}
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-amber-400 font-bold text-sm">
              <BrainCircuit className="w-4 h-4" />
              <span>Decision Making</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.decisionMaking}
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-emerald-300 font-bold text-sm">
              <Eye className="w-4 h-4" />
              <span>Single-Pane Visibility</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.visibility}
            </p>
          </Card>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 09 ADDITIONAL CAPABILITIES */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Extended Mesh"
          title="Modular Fitness Integrations"
          subtitle="Direct connections with RFID turnstiles, wearable devices, trainer booking boards, and gym billing gateways."
        />

        <div className="space-y-4 max-w-4xl mx-auto">
          {industry.additionalCapabilities.map((group, idx) => {
            const isOpen = openAccordionIdx === idx;
            return (
              <Card
                key={idx}
                className="p-5 sm:p-6 transition-all duration-200 border-slate-700/80 card-gradient-surface"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between text-left gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-aether-border flex items-center justify-center text-emerald-400 shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-text-primary">{group.groupTitle}</h4>
                      <p className="text-xs text-text-muted mt-0.5">{group.summary}</p>
                    </div>
                  </div>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 text-text-muted transition-transform duration-200 shrink-0',
                      isOpen && 'rotate-180 text-emerald-400'
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="mt-5 pt-4 border-t border-aether-border-subtle animate-fade-in">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {group.features.map((feat, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-lg bg-aether-surface border border-aether-border text-xs text-text-secondary flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
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
        industrySlug="gyms"
        industryName="Gyms & Fitness Centers"
        onRequestSolution={openSolutionModal}
      />

      {/* ========================================================================= */}
      {/* 10 BOTTOM CTA */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-aether-card card-gradient-surface border border-slate-700/80 p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-card-hover">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <div className="mb-4">
              <Badge variant="success" dot size="md">
                Fitness Club Transformation
              </Badge>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
              Ready to Intercept Member Churn Automatically?
            </h2>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl">
              Experience an intelligent retention blueprint configured for your membership tiers,
              studio capacity, and coaching staff.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={openSolutionModal}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto font-semibold shadow-md"
              >
                Request Custom Gym Solution
              </Button>
              <Link to="/industries" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Explore Other Verticals
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
