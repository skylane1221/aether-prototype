import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { IndustryData } from '../../../types';
import { SectionHeader } from '../../ui/SectionHeader';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { SalonWorkflowPipeline } from './SalonWorkflowPipeline';
import { SalonRebookingDemo } from './SalonRebookingDemo';
import { SalonBiDashboard } from './SalonBiDashboard';
import { IndustryBreadcrumb } from '../../common/IndustryBreadcrumb';
import { IndustryNextSteps } from '../../common/IndustryNextSteps';
import {
  Scissors,
  ArrowRight,
  AlertCircle,
  Clock,
  Sparkles,
  ChevronDown,
  Activity,
  Heart,
  Calendar,
  ShieldCheck,
  Play,
  Zap,
  CheckCircle2,
  BrainCircuit,
  UserCheck,
  Target,
} from 'lucide-react';
import { cn } from '../../../utils/cn';

interface SalonExperienceProps {
  industry: IndustryData;
}

export const SalonExperience: React.FC<SalonExperienceProps> = ({ industry }) => {
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
        industrySlug="salons"
        industryName="Salons & Beauty Businesses"
        accentColor="rose"
      />

      {/* ========================================================================= */}
      {/* 01 SALON HERO */}
      {/* ========================================================================= */}
      <section className="relative pt-8 sm:pt-16 pb-12 sm:pb-16 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Eyebrow Badge */}
          <div className="mb-6 flex items-center gap-2 animate-fade-in">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center border text-xs bg-rose-500/10 border-rose-500/20 text-rose-400">
              <Scissors className="w-4 h-4" />
            </div>
            <Badge variant="primary" dot size="md">
              Aether for Salons & Beauty Businesses
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
              onClick={() => scrollToSection('rebooking-demo-section')}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-md"
            >
              Analyze Rebooking Cycle Engine
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
      {/* 01.5 THE AETHER SALON OPERATIONAL PARADIGM */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-zinc-900/95 via-black/90 to-zinc-950/95 border border-rose-500/30 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Badge variant="primary" size="sm" className="bg-rose-500/20 text-rose-300 border-rose-500/30">
                  Customer Lifecycle & Appointment Architecture
                </Badge>
                <span className="text-xs font-mono text-rose-400 font-semibold">Client Retention & Chair Yield Engine</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                How Aether Automates Salon Rebooking & Eliminates No-Shows
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-950/80 px-3 py-1.5 rounded-lg border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>Service & Formula Ingest → Precision Cycle Rebooking</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {/* 1. Problem */}
            <div className="p-5 rounded-xl bg-rose-950/20 border border-rose-500/30 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>The Salon Problem</span>
                </div>
                <h3 className="text-base font-extrabold text-white">
                  Rebooking Drift & Empty Chair Latency
                </h3>
                <p className="text-xs sm:text-sm text-zinc-300 mt-2 leading-relaxed">
                  Clients leave without rebooking and delay their next appointment by 4–8 weeks past the optimal color fade threshold. Unconfirmed bookings lead to 18% no-show rates and unrecoverable chair gaps.
                </p>
              </div>
              <div className="pt-3 border-t border-rose-500/20 flex items-center justify-between text-[11px] font-mono text-rose-300/80">
                <span>Revenue Impact:</span>
                <span className="font-bold text-rose-300">35% Chair Utilization Gap</span>
              </div>
            </div>

            {/* 2. Aether Understands */}
            <div className="p-5 rounded-xl bg-purple-950/20 border border-purple-500/30 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <BrainCircuit className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Aether Understands</span>
                </div>
                <h3 className="text-base font-extrabold text-white">
                  Formula & Regrowth Telemetry
                </h3>
                <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                  Synthesizes chemical formula records, stylist chair velocity, personal hair growth rates, and no-show patterns:
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {['Color & Toner Formula Archive', 'Regrowth & Fade Cadence (wks)', 'Preferred Stylist Sync', 'Stylist Chair Time Duration', 'No-Show Risk Signals', 'Lifetime Spend Trajectory'].map((attr, i) => (
                    <span
                      key={attr}
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-purple-500/10 border border-purple-500/25 text-purple-300"
                    >
                      {i + 1}. {attr}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-purple-500/20 flex items-center justify-between text-[11px] font-mono text-purple-300/80">
                <span>Prediction Precision:</span>
                <span className="font-bold text-purple-300">96% Rebooking Fit</span>
              </div>
            </div>

            {/* 3. Aether Recommends */}
            <div className="p-5 rounded-xl bg-rose-950/20 border border-rose-500/30 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Target className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>Aether Recommends</span>
                </div>
                <h3 className="text-base font-extrabold text-white">
                  Lifecycle Directives
                </h3>
                <p className="text-xs text-zinc-300 mt-2 leading-relaxed">
                  Triggers timed WhatsApp appointment invites, customized treatment add-ons, and dynamic slot packing:
                </p>
                <div className="mt-3 space-y-1.5">
                  {[
                    'Hyper-Personalized WhatsApp Rebooking Prompts',
                    'Contextual Treatment Add-ons (+28% Ticket)',
                    'Dynamic Mid-Day Chair Gap Filling',
                    'Stylist Workstation Formula & Note Sync',
                    'Automated VIP Churn Interception',
                  ].map((rec, i) => (
                    <div key={rec} className="flex items-center gap-2 text-[11px] font-mono text-rose-300">
                      <CheckCircle2 className="w-3 h-3 text-rose-400 shrink-0" />
                      <span>{i + 1}. {rec}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-rose-500/20 flex items-center justify-between text-[11px] font-mono text-rose-300/80">
                <span>Lifecycle Result:</span>
                <span className="font-bold text-rose-300">84% Rebooking • +41% Client LTV</span>
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
          badge="Operational Vulnerabilities"
          title="6 Core Challenges in Salon & Spa Operations"
          subtitle="The operational bottlenecks causing missed rebooking cycles, empty chairs, and lost lifetime client value."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industry.challenges.map((item, idx: number) => (
            <Card key={item.id} className="p-5 flex flex-col justify-between h-full bg-slate-900/70 border-slate-800 hover:border-slate-700 transition-all">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-800">
                  <span className="text-[10px] font-mono text-rose-400 font-bold">Problem 0{idx + 1}</span>
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
                  <p className="text-xs text-text-secondary leading-relaxed pl-4">
                    {item.cause}
                  </p>
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
          title="Transforming Salon Friction Into Chair Yield Multipliers"
          subtitle="How Aether diagnoses service cycle gaps and unlocks maximum stylist booking utilization."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industry.opportunities.map((opp, idx: number) => (
            <Card key={idx} className="p-6 sm:p-7 flex flex-col justify-between h-full card-gradient-surface border-slate-700/80 shadow-card">
              <div className="space-y-4">
                <div className="p-3.5 rounded-lg bg-rose-500/5 border border-rose-500/20">
                  <div className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider mb-1">
                    Diagnosed Salon Friction
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
                <span className="font-bold font-mono text-emerald-400">{opp.potentialMultiplier}</span>
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
          badge="Beauty Intelligence Mesh"
          title="9 Intelligent Solutions for Salons & Spas"
          subtitle="Transforming salon operations from reactive appointment booking to predictive client retention and maximum chair monetization."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industry.solutionMappings.map((mapping, idx: number) => (
            <Card key={idx} className="p-5 sm:p-6 flex flex-col justify-between h-full bg-slate-900/80 border-slate-700/80">
              <div className="space-y-3">
                <div className="flex items-center justify-between mb-1">
                  <Badge variant="neutral" size="sm" className="font-mono text-[10px]">
                    {mapping.capabilityTag}
                  </Badge>
                  <span className="text-[10px] font-mono text-rose-400">Solution 0{idx + 1}</span>
                </div>

                <div className="text-xs text-text-muted">
                  <span className="font-semibold text-rose-400 uppercase tracking-wider text-[10px] block mb-0.5">
                    1. Problem Addressed
                  </span>
                  {mapping.problem}
                </div>

                <div className="text-xs text-text-secondary pl-2.5 border-l border-slate-700">
                  <span className="font-semibold text-purple-400 uppercase tracking-wider text-[10px] block mb-0.5">
                    2. Unlocked Opportunity
                  </span>
                  {mapping.opportunity}
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-rose-500/20 text-xs sm:text-sm text-text-primary leading-relaxed font-medium">
                  <span className="font-bold text-rose-400 uppercase tracking-wider text-[10px] block mb-1">
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
      {/* 05 SIGNATURE WORKFLOW (Customer -> Appointment -> Service -> Rebooking -> Retention) */}
      {/* ========================================================================= */}
      <section id="workflow-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SalonWorkflowPipeline />
      </section>

      {/* ========================================================================= */}
      {/* 06 SIGNATURE INTERACTIVE DEMO (Rebooking & Dossier Engine) */}
      {/* ========================================================================= */}
      <section id="rebooking-demo-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Signature Interactive Sandbox"
          title="Predictive Rebooking & Client Dossier Engine"
          subtitle="Select a client profile to analyze treatment regrowth cycles, formula archives, and 1-tap automated WhatsApp rebooking outreach."
        />

        <SalonRebookingDemo />
      </section>

      {/* ========================================================================= */}
      {/* 07 BUSINESS INTELLIGENCE DASHBOARD */}
      {/* ========================================================================= */}
      <section id="bi-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Live Salon Analytics"
          title="Chair Yield & Retention Intelligence"
          subtitle="Real-time simulated analytics for multi-chair occupancy, no-show reduction, and stylist roster productivity."
        />

        <SalonBiDashboard />
      </section>

      {/* ========================================================================= */}
      {/* 08 BUSINESS IMPACT */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Value Realization"
          title="Measurable Business Impact for Salons & Spas"
          subtitle="Quantifiable improvements delivered across client lifetime value, chair utilization yield, and eliminated no-show losses."
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
            <div className="flex items-center gap-2.5 mb-3 text-purple-400 font-bold text-sm">
              <Zap className="w-4 h-4" />
              <span>Efficiency & Throughput</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.efficiency}
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-pink-400 font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Customer Experience</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.customerExperience}
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-amber-400 font-bold text-sm">
              <Activity className="w-4 h-4" />
              <span>Operations & Chairs</span>
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
              <Heart className="w-4 h-4" />
              <span>Visibility & Retention</span>
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
          title="Complete Salon Intelligence Capability Grid"
          subtitle="Expandable functional modules engineered for luxury single-location studios and multi-branch salon enterprises."
        />

        <div className="space-y-4 max-w-4xl mx-auto">
          {industry.additionalCapabilities.map((cap, idx: number) => {
            const isOpen = openAccordionIdx === idx;
            return (
              <Card key={idx} className="overflow-hidden border-slate-800">
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-slate-800/40 transition-colors"
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
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-text-secondary">
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
        industrySlug="salons"
        industryName="Salons & Beauty Businesses"
        onRequestSolution={openSolutionModal}
      />

      {/* ========================================================================= */}
      {/* 10 BOTTOM CTA */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl p-8 sm:p-12 text-center overflow-hidden border border-rose-500/30 bg-gradient-to-b from-rose-950/30 via-slate-900 to-slate-950">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <Badge variant="primary" dot size="md">
              Salon & Beauty Transformation
            </Badge>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              Ready to Eliminate Empty Chairs & Churned Clients?
            </h2>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Experience how Aether's predictive rebooking cycles and formula archiving maximize salon revenue and client loyalty from day one.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={openSolutionModal}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Schedule Custom Salon Walkthrough
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
