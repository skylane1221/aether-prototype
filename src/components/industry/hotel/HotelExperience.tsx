import React, { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { IndustryData } from '../../../types';
import { SectionHeader } from '../../ui/SectionHeader';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { IndustryBreadcrumb } from '../../common/IndustryBreadcrumb';
import { IndustryNextSteps } from '../../common/IndustryNextSteps';
import { HotelWorkflowPipeline } from './HotelWorkflowPipeline';
import { HotelOperationsDemo } from './HotelOperationsDemo';
import { HotelBiDashboard } from './HotelBiDashboard';
import {
  BedDouble,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Zap,
  Play,
  Clock,
  Sparkles,
  ChevronDown,
  Activity,
  Layers,
  BrainCircuit,
  Eye,
  CalendarCheck,
  TrendingUp,
  UserCheck,
  Coffee,
  HeartHandshake,
  DollarSign,
  ShieldCheck,
} from 'lucide-react';
import { cn } from '../../../utils/cn';

interface HotelExperienceProps {
  industry: IndustryData;
}

export const HotelExperience: React.FC<HotelExperienceProps> = ({ industry }) => {
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
        industrySlug="hotels"
        industryName="Hotels & Hospitality"
        accentColor="teal"
      />

      {/* ========================================================================= */}
      {/* 01 INDUSTRY HERO */}
      {/* ========================================================================= */}
      <section className="relative pt-8 sm:pt-16 pb-12 sm:pb-16 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Eyebrow Badge */}
          <div className="mb-6 flex items-center gap-2 animate-fade-in">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center border text-xs bg-teal-500/10 border-teal-500/20 text-teal-400">
              <BedDouble className="w-4 h-4" />
            </div>
            <Badge variant="primary" dot size="md" className="bg-teal-500/20 text-teal-300 border-teal-500/30">
              Aether for Hotels & Hospitality
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
              onClick={() => scrollToSection('hotel-demo-section')}
              leftIcon={<Play className="w-4 h-4 fill-current" />}
              className="w-full sm:w-auto shadow-md font-semibold bg-teal-500 hover:bg-teal-400 text-slate-950"
            >
              Simulate Hotel Operations
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('hotel-solutions-section')}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Explore 9 Hospitality Solutions
            </Button>
          </div>

          {/* Key Metric Highlights */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-aether-border-subtle grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 max-w-2xl w-full">
            {industry.stats.map((stat, idx: number) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-teal-300">
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
      {/* 01.5 THE AETHER HOTEL ARCHITECTURAL STORY */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-950/95 border border-teal-500/30 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Badge variant="primary" size="sm" className="bg-teal-500/20 text-teal-300 border-teal-500/30">
                  Core Hospitality Thesis
                </Badge>
                <span className="text-xs font-mono text-teal-400 font-semibold">Autonomous Operations & Yield Engine</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                "Turn booking and guest signals into smarter operational decisions."
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-text-muted bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
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
              <h4 className="text-xs font-bold text-white leading-snug">
                Volatile Pacing & Turn Delays
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Last-minute OTA cancellations, unforeseen check-in surges, and static housekeeping shifts cause room turnaround bottlenecks and lost RevPAR.
              </p>
              <span className="text-[10px] font-mono text-rose-400 pt-1 border-t border-rose-500/20">
                14-22% RevPAR Leakage
              </span>
            </div>

            {/* 2. Opportunity */}
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[10px] uppercase font-mono">
                <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                <span>2. Opportunity</span>
              </div>
              <h4 className="text-xs font-bold text-white leading-snug">
                Dynamic Yield & Room Flow
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Pre-empt no-shows with algorithmic overbooking buffers while dynamically dispatching cleaning pods ahead of peak arrival windows.
              </p>
              <span className="text-[10px] font-mono text-amber-300 pt-1 border-t border-amber-500/20">
                48-Hour Yield Window
              </span>
            </div>

            {/* 3. Aether Intelligence */}
            <div className="p-4 rounded-xl bg-teal-950/20 border border-teal-500/30 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center gap-1.5 text-teal-400 font-bold text-[10px] uppercase font-mono">
                <BrainCircuit className="w-3.5 h-3.5 shrink-0" />
                <span>3. Intelligence</span>
              </div>
              <h4 className="text-xs font-bold text-white leading-snug">
                PMS & Telemetry Synthesis
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Aggregates booking channels, flight arrival feeds, guest profile stay history, VIP tags, and real-time floor status into one operational brain.
              </p>
              <span className="text-[10px] font-mono text-teal-300 pt-1 border-t border-teal-500/20">
                Unified Hospitality Mesh
              </span>
            </div>

            {/* 4. Recommendation */}
            <div className="p-4 rounded-xl bg-sky-950/20 border border-sky-500/30 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center gap-1.5 text-sky-400 font-bold text-[10px] uppercase font-mono">
                <CalendarCheck className="w-3.5 h-3.5 shrink-0" />
                <span>4. Recommendation</span>
              </div>
              <h4 className="text-xs font-bold text-white leading-snug">
                Dynamic Staffing & Pricing
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Computes optimal housekeeping unit allocations, front-desk peak staffing hours, and dynamic rate adjustments across direct & OTA channels.
              </p>
              <span className="text-[10px] font-mono text-sky-300 pt-1 border-t border-sky-500/20">
                Precision Pod Schedules
              </span>
            </div>

            {/* 5. Action */}
            <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/30 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center gap-1.5 text-indigo-400 font-bold text-[10px] uppercase font-mono">
                <Zap className="w-3.5 h-3.5 shrink-0" />
                <span>5. Action</span>
              </div>
              <h4 className="text-xs font-bold text-white leading-snug">
                Autonomous Roster & Rate Push
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Pushes priority turnover queues directly to staff mobile handsets, triggers corporate waitlists, and syncs rates across channel managers.
              </p>
              <span className="text-[10px] font-mono text-indigo-300 pt-1 border-t border-indigo-500/20">
                Instant System Sync
              </span>
            </div>

            {/* 6. Impact */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[10px] uppercase font-mono">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>6. Impact</span>
              </div>
              <h4 className="text-xs font-bold text-white leading-snug">
                +14.2% RevPAR & Zero Delays
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                60% reduction in check-in turnover bottlenecks, 98% VIP room readiness on arrival, and sustained direct booking margin expansion.
              </p>
              <span className="text-[10px] font-mono text-emerald-400 pt-1 border-t border-emerald-500/20">
                Maximum Guest Lifetime Value
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 8 REALISTIC HOTEL PROBLEMS */}
      {/* ========================================================================= */}
      <section id="challenges-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Hospitality Friction"
          title="8 Core Challenges in Hotel & Resort Operations"
          subtitle="The systemic bottlenecks across occupancy volatility, housekeeping turnover delays, and fragmented guest preferences eroding RevPAR."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industry.challenges.map((item, idx: number) => (
            <Card
              key={item.id}
              className="p-5 flex flex-col justify-between h-full bg-slate-900/70 border-slate-800 hover:border-slate-700 transition-all"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-800">
                  <span className="text-[10px] font-mono text-teal-400 font-bold">
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
                  <p className="text-xs text-text-secondary leading-relaxed pl-4">
                    {item.cause}
                  </p>
                </div>

                <div className="pt-1">
                  <div className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-1 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    <span>Business Consequence</span>
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
          title="Transforming Hospitality Friction Into Yield Multipliers"
          subtitle="How Aether turns cancellation risks and housekeeping bottlenecks into automated room turnaround and direct booking retention."
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
                    Diagnosed Hotel Friction
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-snug">
                    {opp.problem}
                  </p>
                </div>

                <div className="flex justify-center text-teal-400">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>

                <div className="p-3.5 rounded-lg bg-teal-500/5 border border-teal-500/25">
                  <div className="text-[11px] font-semibold text-teal-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
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
      {/* 04 9 AETHER HOTEL SOLUTIONS */}
      {/* ========================================================================= */}
      <section id="hotel-solutions-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Platform Solutions"
          title="9 Intelligent Solutions for Hotel Operations"
          subtitle="Autonomous capabilities spanning multi-channel booking intelligence, cancellation protection, housekeeping routing, and dynamic RevPAR yield."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industry.solutionMappings.map((mapping, idx: number) => (
            <Card
              key={idx}
              className="p-5 sm:p-6 flex flex-col justify-between h-full bg-slate-900/80 border-slate-700/80 hover:border-teal-500/40 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between mb-1">
                  <Badge variant="neutral" size="sm" className="font-mono text-[10px]">
                    {mapping.capabilityTag}
                  </Badge>
                  <span className="text-[10px] font-mono text-teal-300">
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
                  <span className="font-semibold text-teal-400 uppercase tracking-wider text-[10px] block mb-0.5">
                    2. Unlocked Opportunity
                  </span>
                  {mapping.opportunity}
                </div>

                <div className="p-3 rounded-lg bg-slate-950/90 border border-teal-500/20 text-xs text-text-primary leading-relaxed font-medium">
                  <span className="font-bold text-emerald-400 uppercase tracking-wider text-[10px] block mb-1">
                    3. Aether Autonomous Solution
                  </span>
                  {mapping.solution}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05 SIGNATURE WORKFLOW (Booking -> Occupancy -> Guest -> Operations -> Experience -> Retention) */}
      {/* ========================================================================= */}
      <section id="workflow-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HotelWorkflowPipeline />
      </section>

      {/* ========================================================================= */}
      {/* 06 SIGNATURE INTERACTIVE DEMO (Hotel Operations Scenario) */}
      {/* ========================================================================= */}
      <section id="hotel-demo-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Signature Interactive Sandbox"
          title="Simulate Daily Hotel Operations & Shift Intelligence"
          subtitle="Select a date to model expected occupancy, predict OTA cancellations, calculate housekeeping turnover load, and auto-dispatch staff allocations."
        />

        <HotelOperationsDemo />
      </section>

      {/* ========================================================================= */}
      {/* 07 BUSINESS INTELLIGENCE DASHBOARD */}
      {/* ========================================================================= */}
      <section id="bi-dashboard-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HotelBiDashboard />
      </section>

      {/* ========================================================================= */}
      {/* 08 BUSINESS IMPACT (Time, Efficiency, Customer Experience, Operations, Decision Making, Visibility) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Value Realization"
          title="Business Impact & ROI in Hotel Operations"
          subtitle="Quantifiable RevPAR expansion, labor efficiency gains, and direct booking retention delivered across hotel properties."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Time */}
          <Card className="p-6 bg-slate-900/70 border-slate-800">
            <div className="flex items-center gap-2.5 mb-3 text-teal-400 font-bold text-sm">
              <Clock className="w-4 h-4" />
              <span>Time Saved</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.time}
            </p>
          </Card>

          {/* Efficiency */}
          <Card className="p-6 bg-slate-900/70 border-slate-800">
            <div className="flex items-center gap-2.5 mb-3 text-sky-400 font-bold text-sm">
              <Zap className="w-4 h-4" />
              <span>Room Turnover Speed</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.efficiency}
            </p>
          </Card>

          {/* Customer Experience */}
          <Card className="p-6 bg-slate-900/70 border-slate-800">
            <div className="flex items-center gap-2.5 mb-3 text-emerald-400 font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Guest Experience & CSAT</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.customerExperience}
            </p>
          </Card>

          {/* Operations */}
          <Card className="p-6 bg-slate-900/70 border-slate-800">
            <div className="flex items-center gap-2.5 mb-3 text-amber-400 font-bold text-sm">
              <Activity className="w-4 h-4" />
              <span>Operations & Rostering</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.operations}
            </p>
          </Card>

          {/* Decision Making */}
          <Card className="p-6 bg-slate-900/70 border-slate-800">
            <div className="flex items-center gap-2.5 mb-3 text-indigo-400 font-bold text-sm">
              <BrainCircuit className="w-4 h-4" />
              <span>Revenue & Yield Management</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.decisionMaking}
            </p>
          </Card>

          {/* Visibility */}
          <Card className="p-6 bg-slate-900/70 border-slate-800">
            <div className="flex items-center gap-2.5 mb-3 text-teal-300 font-bold text-sm">
              <Eye className="w-4 h-4" />
              <span>Single-Pane PMS Visibility</span>
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
          badge="Extended Hospitality Mesh"
          title="Additional Capabilities for Hotels & Resorts"
          subtitle="Modular architectural extensions connecting Opera PMS, Salto digital keycards, GDS channels, and in-room IoT."
        />

        <div className="space-y-4 max-w-4xl mx-auto">
          {industry.additionalCapabilities.map((group, idx: number) => {
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
                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-aether-border flex items-center justify-center text-teal-400 shrink-0">
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
                      isOpen && 'rotate-180 text-teal-400'
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="mt-5 pt-4 border-t border-aether-border-subtle animate-fade-in">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {group.features.map((feat: string, i: number) => (
                        <div
                          key={i}
                          className="p-3 rounded-lg bg-aether-surface border border-aether-border text-xs text-text-secondary flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
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
        industrySlug="hotels"
        industryName="Hotels & Hospitality"
        onRequestSolution={openSolutionModal}
      />

      {/* ========================================================================= */}
      {/* 10 BOTTOM CTA */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-aether-card card-gradient-surface border border-slate-700/80 p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-card-hover">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <div className="mb-4">
              <Badge variant="primary" dot size="md" className="bg-teal-500/20 text-teal-300 border-teal-500/30">
                Hospitality Executive Briefing
              </Badge>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
              Elevate Guest Experiences & Maximize Hotel RevPAR
            </h2>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl">
              Eliminate check-in friction, predict cancellations, and dynamically route housekeeping workflows with a cognitive engine custom-tailored to your property footprint.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={openSolutionModal}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto font-semibold shadow-md bg-teal-500 hover:bg-teal-400 text-slate-950"
              >
                Request Custom Hospitality Architecture
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
