import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { IndustryData } from '../../../types';
import { SectionHeader } from '../../ui/SectionHeader';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { CafeWorkflowPipeline } from './CafeWorkflowPipeline';
import { CafeDemandDemo } from './CafeDemandDemo';
import { CafeBiDashboard } from './CafeBiDashboard';
import { IndustryBreadcrumb } from '../../common/IndustryBreadcrumb';
import { IndustryNextSteps } from '../../common/IndustryNextSteps';
import {
  Coffee,
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
  Croissant,
  PackageCheck,
  Users,
  Target,
} from 'lucide-react';
import { cn } from '../../../utils/cn';

interface CafeExperienceProps {
  industry: IndustryData;
}

export const CafeExperience: React.FC<CafeExperienceProps> = ({ industry }) => {
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
        industrySlug="cafes"
        industryName="Cafes & Bakeries"
        accentColor="amber"
      />

      {/* ========================================================================= */}
      {/* 01 CAFE HERO */}
      {/* ========================================================================= */}
      <section className="relative pt-8 sm:pt-16 pb-12 sm:pb-16 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Eyebrow Badge */}
          <div className="mb-6 flex items-center gap-2 animate-fade-in">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center border text-xs bg-amber-600/10 border-amber-600/30 text-amber-400">
              <Coffee className="w-4 h-4" />
            </div>
            <Badge variant="warning" dot size="md">
              Aether for Specialty Cafes & Coffee Bars
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
              onClick={() => scrollToSection('cafe-demo-section')}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-md"
            >
              Generate Next-Day Demand
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('solutions-section')}
              leftIcon={<Play className="w-4 h-4 text-text-muted fill-current" />}
              className="w-full sm:w-auto"
            >
              Explore 8 Solutions
            </Button>
          </div>

          {/* Key Metric Highlights */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-aether-border-subtle grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 max-w-2xl w-full">
            {industry.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-amber-300">
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
      {/* 01.5 THE AETHER CAFE OPERATIONAL PARADIGM */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-stone-900/95 via-stone-900/90 to-stone-950/95 border border-amber-500/30 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-stone-800">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Badge variant="warning" size="sm">
                  Demand, Customer & Product Architecture
                </Badge>
                <span className="text-xs font-mono text-amber-400 font-semibold">Specialty Cafe Optimization</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                How Aether Perfects Rush Velocity & Product Quality
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-text-muted bg-stone-950/80 px-3 py-1.5 rounded-lg border border-stone-800">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>Counter & Commuter Signals → Calibrated Morning Extraction</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {/* 1. Problem */}
            <div className="p-5 rounded-xl bg-rose-950/20 border border-rose-500/30 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />
                  <span>The Cafe Problem</span>
                </div>
                <h3 className="text-base font-extrabold text-white">
                  Morning Queue Drop-offs & Dairy Write-offs
                </h3>
                <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
                  During 8:00 AM rush, uncalibrated grinders, unbatched iced drinks, and single-barista bottlenecks cause 6-minute wait times. Pastries baked blindly at 6 AM turn stale by afternoon, while core oat milks run dry.
                </p>
              </div>
              <div className="pt-3 border-t border-rose-500/20 flex items-center justify-between text-[11px] font-mono text-rose-300/80">
                <span>Peak Impact:</span>
                <span className="font-bold text-rose-300">22% Commuter Walk-Away Rate</span>
              </div>
            </div>

            {/* 2. Aether Understands */}
            <div className="p-5 rounded-xl bg-amber-950/20 border border-amber-500/30 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <BrainCircuit className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Aether Understands</span>
                </div>
                <h3 className="text-base font-extrabold text-white">
                  Granular Drink & Guest Telemetry
                </h3>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  Synthesizes commuter footfall, weather shifts, whole bean roast curves, and regular customer habits:
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {['Hourly Drink Velocity', 'Commuter Rush Windows', 'Weather & Temperature Curves', 'Milk Consumption Burn', 'Roastery Degassing Dates', 'Regular Guest Pre-Orders'].map((attr, i) => (
                    <span
                      key={attr}
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-amber-500/10 border border-amber-500/25 text-amber-300"
                    >
                      {i + 1}. {attr}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-amber-500/20 flex items-center justify-between text-[11px] font-mono text-amber-300/80">
                <span>Data Precision:</span>
                <span className="font-bold text-amber-300">Sub-Second Ticket Streams</span>
              </div>
            </div>

            {/* 3. Aether Recommends */}
            <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Target className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Aether Recommends</span>
                </div>
                <h3 className="text-base font-extrabold text-white">
                  Barista & Product Directives
                </h3>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  Generates dial-in grinder recipes, par-bake schedules, smart dairy reorders, and barista rush roles:
                </p>
                <div className="mt-3 space-y-1.5">
                  {[
                    'Espresso Dial-In Calibration (Grind & Dose)',
                    'Staged Bakery Par-Bake Schedule (7AM / 11AM)',
                    'Smart Dairy & Bean Reorders (Zero Stockouts)',
                    'Rush Barista Rostering (Extraction vs Milk Staging)',
                    'Companion Pastry Upsell Intelligence (+24% Basket)',
                  ].map((rec, i) => (
                    <div key={rec} className="flex items-center gap-2 text-[11px] font-mono text-emerald-300">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{i + 1}. {rec}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-3 border-t border-emerald-500/20 flex items-center justify-between text-[11px] font-mono text-emerald-300/80">
                <span>Counter Result:</span>
                <span className="font-bold text-emerald-300">88s Drink Time • &lt; 3% Spoilage</span>
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
          badge="Counter & Bakery Friction"
          title="Core Challenges in High-Velocity Cafes"
          subtitle="The root causes behind morning queue drop-offs, bakery write-offs, and stockouts."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industry.challenges.map((item, idx) => (
            <Card key={item.id} className="p-5 flex flex-col justify-between h-full bg-stone-900/70 border-stone-800 hover:border-stone-700 transition-all">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-stone-800">
                  <span className="text-[10px] font-mono text-amber-400 font-bold">Challenge 0{idx + 1}</span>
                  <span
                    className={cn(
                      'text-[9px] uppercase font-mono px-2 py-0.5 rounded font-bold',
                      item.severity === 'critical'
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                        : item.severity === 'high'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        : 'bg-stone-800 text-stone-300'
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
          title="Transforming Cafe Friction Into Counter Velocity Multipliers"
          subtitle="How Aether diagnoses prep waste and unlocks high-throughput morning rush barista operations."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industry.opportunities.map((opp, idx) => (
            <Card key={idx} className="p-6 sm:p-7 flex flex-col justify-between h-full card-gradient-surface border-stone-800 shadow-card bg-stone-900/80">
              <div className="space-y-4">
                <div className="p-3.5 rounded-lg bg-rose-500/5 border border-rose-500/20">
                  <div className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider mb-1">
                    Diagnosed Cafe Friction
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-snug">
                    {opp.problem}
                  </p>
                </div>

                <div className="flex justify-center text-amber-400">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>

                <div className="p-3.5 rounded-lg bg-amber-500/5 border border-amber-500/25">
                  <div className="text-[11px] font-semibold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Aether Opportunity</span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-primary font-medium leading-snug">
                    {opp.opportunity}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-stone-800 flex items-center justify-between text-xs">
                <span className="text-text-muted font-mono">Projected Multiplier:</span>
                <span className="font-bold font-mono text-emerald-400">{opp.potentialMultiplier}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04 8 AETHER SOLUTIONS MAPPINGS */}
      {/* ========================================================================= */}
      <section id="solutions-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Specialty Coffee Mesh"
          title="8 Intelligent Solutions for Cafes"
          subtitle="Addressing morning rush bottlenecks, coffee calibration, bakery waste, and repeat customer habits."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industry.solutionMappings.map((mapping, idx) => (
            <Card key={idx} className="p-5 flex flex-col justify-between h-full bg-stone-900/80 border-stone-800">
              <div className="space-y-3">
                <div className="flex items-center justify-between mb-1">
                  <Badge variant="neutral" size="sm" className="font-mono text-[10px]">
                    {mapping.capabilityTag}
                  </Badge>
                  <span className="text-[10px] font-mono text-amber-400">Solution 0{idx + 1}</span>
                </div>

                <div className="text-xs text-text-muted">
                  <span className="font-semibold text-rose-400 uppercase tracking-wider text-[10px] block mb-0.5">
                    1. Friction
                  </span>
                  {mapping.problem}
                </div>

                <div className="text-xs text-text-secondary pl-2.5 border-l border-stone-700">
                  <span className="font-semibold text-amber-400 uppercase tracking-wider text-[10px] block mb-0.5">
                    2. Opportunity
                  </span>
                  {mapping.opportunity}
                </div>

                <div className="p-3 rounded-lg bg-stone-950 border border-amber-500/20 text-xs text-text-primary leading-relaxed font-medium">
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
      {/* 05 SIGNATURE WORKFLOW (Sales -> Demand -> Preparation -> Inventory -> Customer Behaviour -> Optimization) */}
      {/* ========================================================================= */}
      <section id="workflow-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <CafeWorkflowPipeline />
      </section>

      {/* ========================================================================= */}
      {/* 06 SIGNATURE INTERACTIVE DEMO (Next-Day Demand Generator) */}
      {/* ========================================================================= */}
      <section id="cafe-demo-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Signature Interactive Sandbox"
          title="Next-Day Demand & Barista Preparation Engine"
          subtitle="Generate calibrated coffee extraction volumes, bakery par-bakes, inventory restocks, and morning rush staffing rosters."
        />

        <CafeDemandDemo />
      </section>

      {/* ========================================================================= */}
      {/* 07 BUSINESS INTELLIGENCE DASHBOARD */}
      {/* ========================================================================= */}
      <section id="bi-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Live Espresso Analytics"
          title="Cafe Telemetry Dashboard"
          subtitle="Real-time simulated analytics for beverage extraction velocity, customer habit clusters, and roastery bean freshness."
        />

        <CafeBiDashboard />
      </section>

      {/* ========================================================================= */}
      {/* 08 BUSINESS IMPACT */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Value Realization"
          title="Measurable Business Impact for Cafes"
          subtitle="Quantifiable improvements delivered across morning rush output, waste reduction, and customer loyalty."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card className="p-6 bg-stone-900/60 border-stone-800">
            <div className="flex items-center gap-2.5 mb-3 text-amber-400 font-bold text-sm">
              <Clock className="w-4 h-4" />
              <span>Time Saved</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.time}
            </p>
          </Card>

          <Card className="p-6 bg-stone-900/60 border-stone-800">
            <div className="flex items-center gap-2.5 mb-3 text-sky-400 font-bold text-sm">
              <Zap className="w-4 h-4" />
              <span>Efficiency & Throughput</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.efficiency}
            </p>
          </Card>

          <Card className="p-6 bg-stone-900/60 border-stone-800">
            <div className="flex items-center gap-2.5 mb-3 text-emerald-400 font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Customer Experience</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.customerExperience}
            </p>
          </Card>

          <Card className="p-6 bg-stone-900/60 border-stone-800">
            <div className="flex items-center gap-2.5 mb-3 text-orange-400 font-bold text-sm">
              <Activity className="w-4 h-4" />
              <span>Operations & Bakery Waste</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.operations}
            </p>
          </Card>

          <Card className="p-6 bg-stone-900/60 border-stone-800">
            <div className="flex items-center gap-2.5 mb-3 text-teal-400 font-bold text-sm">
              <BrainCircuit className="w-4 h-4" />
              <span>Decision Making</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.decisionMaking}
            </p>
          </Card>

          <Card className="p-6 bg-stone-900/60 border-stone-800">
            <div className="flex items-center gap-2.5 mb-3 text-amber-300 font-bold text-sm">
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
          title="Modular Cafe & Roastery Integrations"
          subtitle="Direct connections with espresso scales, smart grinders, mobile order ahead APIs, and bakery proofing timers."
        />

        <div className="space-y-4 max-w-4xl mx-auto">
          {industry.additionalCapabilities.map((group, idx) => {
            const isOpen = openAccordionIdx === idx;
            return (
              <Card
                key={idx}
                className="p-5 sm:p-6 transition-all duration-200 border-stone-800 bg-stone-900/80"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full flex items-center justify-between text-left gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-stone-950 border border-stone-800 flex items-center justify-center text-amber-400 shrink-0">
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
                      isOpen && 'rotate-180 text-amber-400'
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="mt-5 pt-4 border-t border-stone-800 animate-fade-in">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {group.features.map((feat, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-lg bg-stone-950 border border-stone-800 text-xs text-stone-300 flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
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
        industrySlug="cafes"
        industryName="Cafes & Bakeries"
        onRequestSolution={openSolutionModal}
      />

      {/* ========================================================================= */}
      {/* 10 BOTTOM CTA */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-stone-900 border border-stone-800 p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-card-hover">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <div className="mb-4">
              <Badge variant="warning" dot size="md">
                Specialty Cafe Transformation
              </Badge>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
              Ready to Master Morning Rush Velocity?
            </h2>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl">
              Experience an intelligent cafe blueprint calibrated for your espresso machine setup, bakery turnover, and commuter traffic patterns.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={openSolutionModal}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto font-semibold shadow-md bg-amber-600 hover:bg-amber-500 text-stone-950"
              >
                Request Custom Cafe Solution
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
