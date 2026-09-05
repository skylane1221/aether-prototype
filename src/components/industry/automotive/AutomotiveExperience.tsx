import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { IndustryData } from '../../../types';
import { SectionHeader } from '../../ui/SectionHeader';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { AutomotiveWorkflowPipeline } from './AutomotiveWorkflowPipeline';
import { AutomotiveServiceDemo } from './AutomotiveServiceDemo';
import { AutomotiveBiDashboard } from './AutomotiveBiDashboard';
import { IndustryBreadcrumb } from '../../common/IndustryBreadcrumb';
import { IndustryNextSteps } from '../../common/IndustryNextSteps';
import {
  Car,
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
  Wrench,
  Cpu,
  Layers,
} from 'lucide-react';
import { cn } from '../../../utils/cn';

interface AutomotiveExperienceProps {
  industry: IndustryData;
}

export const AutomotiveExperience: React.FC<AutomotiveExperienceProps> = ({ industry }) => {
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
        industrySlug="automotive"
        industryName="Automotive / Car Service Businesses"
        accentColor="indigo"
      />

      {/* ========================================================================= */}
      {/* 01 AUTOMOTIVE HERO */}
      {/* ========================================================================= */}
      <section className="relative pt-8 sm:pt-16 pb-12 sm:pb-16 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Eyebrow Badge */}
          <div className="mb-6 flex items-center gap-2 animate-fade-in">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center border text-xs bg-indigo-500/10 border-indigo-500/20 text-indigo-400">
              <Car className="w-4 h-4" />
            </div>
            <Badge variant="primary" dot size="md">
              Aether for Automotive & Car Service
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
              onClick={() => scrollToSection('service-demo-section')}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-md"
            >
              Analyze Workshop & Parts Engine
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
                <span className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-indigo-400">
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
      {/* 01.5 THE AETHER AUTOMOTIVE ARCHITECTURAL STORY */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-950/95 border border-indigo-500/30 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                <Badge
                  variant="primary"
                  size="sm"
                  className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
                >
                  Workshop Intelligence Thesis
                </Badge>
                <span className="text-xs font-mono text-indigo-400 font-semibold">
                  Predictive Maintenance & Workshop Orchestration
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                "Predict maintenance needs and parts requirements before the vehicle enters the
                service bay."
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-text-muted bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
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
                Bay Hold-Overs & Missing Parts
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Vehicles sit stranded on service lifts waiting for stockroom parts while master
                technicians remain bottlenecked on routine oil changes.
              </p>
              <span className="text-[10px] font-mono text-rose-400 pt-1 border-t border-rose-500/20">
                35% Bay Idleness
              </span>
            </div>

            {/* 2. Opportunity */}
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[10px] uppercase font-mono">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>2. Opportunity</span>
              </div>
              <h4 className="text-xs font-bold text-white leading-snug">Pre-Kitted Maintenance</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Forecast component wear and upcoming mileage triggers to stage exact OEM parts kits
                24 hours prior to customer arrival.
              </p>
              <span className="text-[10px] font-mono text-amber-300 pt-1 border-t border-amber-500/20">
                Zero Parts Wait Latency
              </span>
            </div>

            {/* 3. Aether Intelligence */}
            <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/30 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center gap-1.5 text-indigo-400 font-bold text-[10px] uppercase font-mono">
                <Layers className="w-3.5 h-3.5 shrink-0" />
                <span>3. Intelligence</span>
              </div>
              <h4 className="text-xs font-bold text-white leading-snug">Vehicle Telemetry Mesh</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Synthesizes vehicle service logs, daily odometer velocity, OEM service bulletins,
                workshop bay load, and technician skill certifications.
              </p>
              <span className="text-[10px] font-mono text-indigo-300 pt-1 border-t border-indigo-500/20">
                Live Garage Graph
              </span>
            </div>

            {/* 4. Recommendation */}
            <div className="p-4 rounded-xl bg-sky-950/20 border border-sky-500/30 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center gap-1.5 text-sky-400 font-bold text-[10px] uppercase font-mono">
                <Wrench className="w-3.5 h-3.5 shrink-0" />
                <span>4. Recommendation</span>
              </div>
              <h4 className="text-xs font-bold text-white leading-snug">
                Precision Bay & Tech Routing
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Matches vehicle job complexity to dedicated lift bays (Mechanical vs Diagnostic) and
                reserves parts kits directly from warehouse ERP.
              </p>
              <span className="text-[10px] font-mono text-sky-300 pt-1 border-t border-sky-500/20">
                Optimal Labor Yield
              </span>
            </div>

            {/* 5. Action */}
            <div className="p-4 rounded-xl bg-violet-950/20 border border-violet-500/30 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center gap-1.5 text-violet-400 font-bold text-[10px] uppercase font-mono">
                <Zap className="w-3.5 h-3.5 shrink-0" />
                <span>5. Action</span>
              </div>
              <h4 className="text-xs font-bold text-white leading-snug">
                Proactive Service Dispatch
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Sends personalized WhatsApp service alerts with pre-calculated estimates and instant
                1-tap slot confirmation to vehicle owner.
              </p>
              <span className="text-[10px] font-mono text-violet-300 pt-1 border-t border-violet-500/20">
                1-Tap WhatsApp Booking
              </span>
            </div>

            {/* 6. Impact */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[10px] uppercase font-mono">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>6. Impact</span>
              </div>
              <h4 className="text-xs font-bold text-white leading-snug">
                +28% Bay Yield & 91% Same-Day
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Eliminates bay hold-overs, delivers 91% on-time same-day return, and drives 88%
                repeat service customer retention.
              </p>
              <span className="text-[10px] font-mono text-emerald-400 pt-1 border-t border-emerald-500/20">
                Max Dealership ROI
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
          badge="Workshop Bottlenecks"
          title="Core Challenges in Automotive Service Operations"
          subtitle="The operational bottlenecks causing technician downtime, stalled vehicle hold-overs, and lost maintenance retention."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industry.challenges.map((item, idx: number) => (
            <Card
              key={item.id}
              className="p-5 flex flex-col justify-between h-full bg-slate-900/70 border-slate-800 hover:border-slate-700 transition-all"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-800">
                  <span className="text-[10px] font-mono text-indigo-400 font-bold">
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
          title="Transforming Garage Drag Into Service Velocity Multipliers"
          subtitle="How Aether diagnoses bay hold-over latency and synchronizes parts delivery with technician schedules."
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
                    Diagnosed Garage Friction
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-snug">
                    {opp.problem}
                  </p>
                </div>

                <div className="flex justify-center text-indigo-400">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>

                <div className="p-3.5 rounded-lg bg-indigo-500/5 border border-indigo-500/25">
                  <div className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
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
          badge="Automotive Intelligence Mesh"
          title="9 Intelligent Solutions for Auto Service & Dealerships"
          subtitle="Transforming workshop operations from chaotic floor queues to synchronized parts staging, technician skill routing, and customer retention."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industry.solutionMappings.map((mapping, idx: number) => (
            <Card
              key={idx}
              className="p-5 sm:p-6 flex flex-col justify-between h-full bg-slate-900/80 border-slate-700/80"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between mb-1">
                  <Badge variant="neutral" size="sm" className="font-mono text-[10px]">
                    {mapping.capabilityTag}
                  </Badge>
                  <span className="text-[10px] font-mono text-indigo-400">Solution 0{idx + 1}</span>
                </div>

                <div className="text-xs text-text-muted">
                  <span className="font-semibold text-rose-400 uppercase tracking-wider text-[10px] block mb-0.5">
                    1. Problem Addressed
                  </span>
                  {mapping.problem}
                </div>

                <div className="text-xs text-text-secondary pl-2.5 border-l border-slate-700">
                  <span className="font-semibold text-indigo-400 uppercase tracking-wider text-[10px] block mb-0.5">
                    2. Unlocked Opportunity
                  </span>
                  {mapping.opportunity}
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-indigo-500/20 text-xs sm:text-sm text-text-primary leading-relaxed font-medium">
                  <span className="font-bold text-indigo-400 uppercase tracking-wider text-[10px] block mb-1">
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
      {/* 05 SIGNATURE WORKFLOW (Vehicle -> Service History -> Service Prediction -> Reminder -> Appointment -> Workshop -> Retention) */}
      {/* ========================================================================= */}
      <section id="workflow-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AutomotiveWorkflowPipeline />
      </section>

      {/* ========================================================================= */}
      {/* 06 SIGNATURE INTERACTIVE DEMO (Service Prediction & Bay Staging Engine) */}
      {/* ========================================================================= */}
      <section id="service-demo-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Signature Interactive Sandbox"
          title="Vehicle Service Prediction & Workshop Bay Allocation"
          subtitle="Select a customer vehicle to analyze mileage wear degradation, OEM parts readiness, lift bay reservation, and automated reminder outreach."
        />

        <AutomotiveServiceDemo />
      </section>

      {/* ========================================================================= */}
      {/* 07 BUSINESS INTELLIGENCE DASHBOARD */}
      {/* ========================================================================= */}
      <section id="bi-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Live Workshop Analytics"
          title="Bay Utilization & Parts Velocity Intelligence"
          subtitle="Real-time simulated analytics for lift occupancy, technician flag-hour pacing, and parts pre-allocation efficiency."
        />

        <AutomotiveBiDashboard />
      </section>

      {/* ========================================================================= */}
      {/* 08 BUSINESS IMPACT */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Value Realization"
          title="Measurable Business Impact for Auto Service Centers"
          subtitle="Quantifiable improvements delivered across daily completed repair orders, parts hold-over reductions, and recurring customer retention."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-indigo-400 font-bold text-sm">
              <Clock className="w-4 h-4" />
              <span>Time Saved</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.time}
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-blue-400 font-bold text-sm">
              <Zap className="w-4 h-4" />
              <span>Efficiency & Throughput</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.efficiency}
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-cyan-400 font-bold text-sm">
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
              <span>Operations & Lifts</span>
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
            <div className="flex items-center gap-2.5 mb-3 text-violet-400 font-bold text-sm">
              <Calendar className="w-4 h-4" />
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
          title="Complete Auto Dealership Capability Grid"
          subtitle="Expandable functional modules engineered for independent specialized garages and multi-dealership automotive groups."
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
                    <span className="text-[10px] font-mono text-indigo-400 font-semibold block mb-1">
                      CAPABILITY MODULE 0{idx + 1}
                    </span>
                    <h4 className="text-base font-bold text-text-primary">{cap.groupTitle}</h4>
                    <p className="text-xs text-text-secondary mt-1">{cap.summary}</p>
                  </div>
                  <div
                    className={cn(
                      'w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-text-muted shrink-0 transition-transform duration-200',
                      isOpen && 'rotate-180 text-indigo-400 border-indigo-500/40'
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
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 mt-1.5" />
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
        industrySlug="automotive"
        industryName="Automotive / Car Service Businesses"
        onRequestSolution={openSolutionModal}
      />

      {/* ========================================================================= */}
      {/* 10 BOTTOM CTA */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl p-8 sm:p-12 text-center overflow-hidden border border-indigo-500/30 bg-gradient-to-b from-indigo-950/30 via-slate-900 to-slate-950">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <Badge variant="primary" dot size="md">
              Automotive Service Transformation
            </Badge>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              Ready to Maximize Lift Bay Output & Eliminate Parts Delays?
            </h2>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Integrate Aether with your DMS and parts ERP to unlock predictive maintenance
              reminders, automated technician routing, and zero-holdover workshops.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={openSolutionModal}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Schedule Custom Dealership Demo
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
