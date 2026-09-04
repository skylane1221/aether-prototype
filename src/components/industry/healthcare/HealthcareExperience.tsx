import React, { useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { IndustryData } from '../../../types';
import { SectionHeader } from '../../ui/SectionHeader';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { HealthcareWorkflowPipeline } from './HealthcareWorkflowPipeline';
import { HealthcareAppointmentDemo } from './HealthcareAppointmentDemo';
import { HealthcareBiDashboard } from './HealthcareBiDashboard';
import { IndustryBreadcrumb } from '../../common/IndustryBreadcrumb';
import { IndustryNextSteps } from '../../common/IndustryNextSteps';
import {
  Stethoscope,
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
  FileText
} from 'lucide-react';
import { cn } from '../../../utils/cn';

interface HealthcareExperienceProps {
  industry: IndustryData;
}

export const HealthcareExperience: React.FC<HealthcareExperienceProps> = ({ industry }) => {
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
        industrySlug="healthcare"
        industryName="Healthcare & Clinics"
        accentColor="cyan"
      />

      {/* ========================================================================= */}
      {/* 01 HEALTHCARE HERO */}
      {/* ========================================================================= */}
      <section className="relative pt-8 sm:pt-16 pb-12 sm:pb-16 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Eyebrow Badge */}
          <div className="mb-6 flex items-center gap-2 animate-fade-in">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center border text-xs bg-cyan-500/10 border-cyan-500/20 text-cyan-400">
              <Stethoscope className="w-4 h-4" />
            </div>
            <Badge variant="primary" dot size="md">
              Aether for Healthcare & Clinics
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

          {/* Disclaimer Banner: Administrative Workflows Only */}
          <div className="mt-4 px-4 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Administrative & Operational Practice Workflows • Non-Diagnostic</span>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('appointment-demo-section')}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-md"
            >
              Analyze Appointment & No-Show Engine
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
            {industry.stats.map((stat, idx: number) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-cyan-400">
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
      {/* 02 CORE WORKFLOW (Appointment -> Communication -> Attendance -> Follow-up -> Administration) */}
      {/* ========================================================================= */}
      <section id="workflow-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HealthcareWorkflowPipeline />
      </section>

      {/* ========================================================================= */}
      {/* 03 3 BUSINESS CHALLENGES */}
      {/* ========================================================================= */}
      <section id="challenges-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Administrative Bottlenecks"
          title="Core Challenges in Outpatient & Clinic Operations"
          subtitle="The operational frictions causing intake delays, provider idle time, and last-minute cancellation gaps."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industry.challenges.map((item, idx: number) => (
            <Card key={item.id} className="p-5 flex flex-col justify-between h-full bg-slate-900/70 border-slate-800 hover:border-slate-700 transition-all">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-800">
                  <span className="text-[10px] font-mono text-cyan-400 font-bold">Challenge 0{idx + 1}</span>
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
      {/* 04 INTERACTIVE DEMO (Appointment & No-Show Engine) */}
      {/* ========================================================================= */}
      <section id="appointment-demo-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Interactive Sandbox"
          title="Clinical Appointment & No-Show Interception Engine"
          subtitle="Select an upcoming clinic appointment to analyze calculated attendance risk, pre-visit digital checklists, and automated 1-tap reminders."
        />

        <HealthcareAppointmentDemo />
      </section>

      {/* ========================================================================= */}
      {/* 05 8 SOLUTIONS MAPPINGS */}
      {/* ========================================================================= */}
      <section id="solutions-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Operational Intelligence Mesh"
          title="8 Intelligent Solutions for Healthcare & Clinics"
          subtitle="Streamlining outpatient operations from reactive scheduling to predictive clinic capacity and administrative automation."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industry.solutionMappings.map((mapping, idx: number) => (
            <Card key={idx} className="p-5 flex flex-col justify-between h-full bg-slate-900/80 border-slate-700/80">
              <div className="space-y-3">
                <div className="flex items-center justify-between mb-1">
                  <Badge variant="neutral" size="sm" className="font-mono text-[10px]">
                    {mapping.capabilityTag}
                  </Badge>
                  <span className="text-[10px] font-mono text-cyan-400">Solution 0{idx + 1}</span>
                </div>

                <div className="text-xs text-text-muted">
                  <span className="font-semibold text-rose-400 uppercase tracking-wider text-[10px] block mb-0.5">
                    1. Problem Addressed
                  </span>
                  {mapping.problem}
                </div>

                <div className="text-xs text-text-secondary pl-2.5 border-l border-slate-700">
                  <span className="font-semibold text-cyan-400 uppercase tracking-wider text-[10px] block mb-0.5">
                    2. Unlocked Opportunity
                  </span>
                  {mapping.opportunity}
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-cyan-500/20 text-xs text-text-primary leading-relaxed font-medium">
                  <span className="font-bold text-cyan-400 uppercase tracking-wider text-[10px] block mb-1">
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
      {/* 06 BUSINESS INTELLIGENCE DASHBOARD */}
      {/* ========================================================================= */}
      <section id="bi-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Live Clinic Analytics"
          title="Clinical Capacity & Operational Intelligence"
          subtitle="Real-time simulated analytics for examination room occupancy, no-show rate reduction, and departmental wait times."
        />

        <HealthcareBiDashboard />
      </section>

      {/* ========================================================================= */}
      {/* 07 BUSINESS IMPACT */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Value Realization"
          title="Measurable Administrative Impact for Outpatient Clinics"
          subtitle="Quantifiable improvements delivered across provider schedule fill rates, administrative hours saved, and patient waiting room velocity."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-cyan-400 font-bold text-sm">
              <Clock className="w-4 h-4" />
              <span>Time Saved</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.time}
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-teal-400 font-bold text-sm">
              <Zap className="w-4 h-4" />
              <span>Efficiency & Throughput</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.efficiency}
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-sky-400 font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Patient Experience</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.customerExperience}
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-rose-400 font-bold text-sm">
              <Activity className="w-4 h-4" />
              <span>Operations & Rosters</span>
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
            <div className="flex items-center gap-2.5 mb-3 text-indigo-400 font-bold text-sm">
              <Calendar className="w-4 h-4" />
              <span>Visibility & Continuity</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.visibility}
            </p>
          </Card>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 08 ADDITIONAL CAPABILITIES ACCORDION */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Enterprise Modular Architecture"
          title="Complete Clinical Practice Capability Grid"
          subtitle="Expandable functional modules engineered for independent outpatient practices and multi-facility hospital networks."
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
                    <span className="text-[10px] font-mono text-cyan-400 font-semibold block mb-1">
                      CAPABILITY MODULE 0{idx + 1}
                    </span>
                    <h4 className="text-base font-bold text-text-primary">{cap.groupTitle}</h4>
                    <p className="text-xs text-text-secondary mt-1">{cap.summary}</p>
                  </div>
                  <div
                    className={cn(
                      'w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-text-muted shrink-0 transition-transform duration-200',
                      isOpen && 'rotate-180 text-cyan-400 border-cyan-500/40'
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
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-1.5" />
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
        industrySlug="healthcare"
        industryName="Healthcare & Clinics"
        onRequestSolution={openSolutionModal}
      />

      {/* ========================================================================= */}
      {/* 09 BOTTOM CTA */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl p-8 sm:p-12 text-center overflow-hidden border border-cyan-500/30 bg-gradient-to-b from-cyan-950/30 via-slate-900 to-slate-950">
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <Badge variant="primary" dot size="md">
              Practice Administration Transformation
            </Badge>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              Ready to Eliminate Clipboard Delays & Unfilled Provider Slots?
            </h2>

            <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
              Deploy Aether alongside your current EHR or practice management system to automate administrative intake, recover open slots, and eliminate no-shows.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={openSolutionModal}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto"
              >
                Schedule Custom Clinic Demo
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
