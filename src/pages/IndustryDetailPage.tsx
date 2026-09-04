import React, { useState } from 'react';
import { useParams, Navigate, useOutletContext, Link } from 'react-router-dom';
import { INDUSTRIES } from '../data/industries';
import { INDUSTRY_THEMES } from '../types/theme';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import {
  Building2,
  Utensils,
  Dumbbell,
  Sparkles,
  Coffee,
  ShoppingBag,
  BedDouble,
  Stethoscope,
  Car,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Zap,
  Play,
  RotateCcw,
  Radio,
  Cpu,
  BrainCircuit,
  Workflow,
  Clock,
  TrendingUp,
  Target,
  Eye,
  ShieldCheck,
  ChevronDown,
  Activity,
  Layers,
  Compass,
} from 'lucide-react';
import { cn } from '../utils/cn';
import { RealEstateExperience } from '../components/industry/real-estate/RealEstateExperience';
import { RestaurantExperience } from '../components/industry/restaurant/RestaurantExperience';
import { CafeExperience } from '../components/industry/cafe/CafeExperience';
import { GymExperience } from '../components/industry/gym/GymExperience';
import { SalonExperience } from '../components/industry/salon/SalonExperience';
import { HealthcareExperience } from '../components/industry/healthcare/HealthcareExperience';
import { AutomotiveExperience } from '../components/industry/automotive/AutomotiveExperience';
import { EducationExperience } from '../components/industry/education/EducationExperience';
import { IndustryBreadcrumb } from '../components/common/IndustryBreadcrumb';
import { IndustryNextSteps } from '../components/common/IndustryNextSteps';

const ICON_MAP: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-5 h-5" />,
  Utensils: <Utensils className="w-5 h-5" />,
  Dumbbell: <Dumbbell className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Coffee: <Coffee className="w-5 h-5" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5" />,
  BedDouble: <BedDouble className="w-5 h-5" />,
  Stethoscope: <Stethoscope className="w-5 h-5" />,
  Car: <Car className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
};

export const IndustryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openSolutionModal } = useOutletContext<{ openSolutionModal: () => void }>();

  // Interactive Demo State
  const [demoState, setDemoState] = useState<'idle' | 'analyzing' | 'executed'>('idle');

  // Additional Capabilities Accordion State (open groups)
  const [openAccordionIdx, setOpenAccordionIdx] = useState<number | null>(0);

  const industry = INDUSTRIES.find((ind) => ind.slug === slug);

  if (!industry) {
    return <Navigate to="/industries" replace />;
  }

  // Specialized industry experiences
  if (industry.slug === 'real-estate') {
    return <RealEstateExperience industry={industry} />;
  }
  if (industry.slug === 'restaurants') {
    return <RestaurantExperience industry={industry} />;
  }
  if (industry.slug === 'cafes') {
    return <CafeExperience industry={industry} />;
  }
  if (industry.slug === 'gyms') {
    return <GymExperience industry={industry} />;
  }
  if (industry.slug === 'salons') {
    return <SalonExperience industry={industry} />;
  }
  if (industry.slug === 'healthcare') {
    return <HealthcareExperience industry={industry} />;
  }
  if (industry.slug === 'automotive') {
    return <AutomotiveExperience industry={industry} />;
  }
  if (industry.slug === 'education') {
    return <EducationExperience industry={industry} />;
  }

  const theme = INDUSTRY_THEMES[industry.accentColor] || INDUSTRY_THEMES.cyan;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleRunDemo = () => {
    setDemoState('analyzing');
    setTimeout(() => {
      setDemoState('executed');
    }, 1000);
  };

  const handleResetDemo = () => {
    setDemoState('idle');
  };

  const toggleAccordion = (idx: number) => {
    setOpenAccordionIdx(openAccordionIdx === idx ? null : idx);
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* Breadcrumb Navigation Trail */}
      <IndustryBreadcrumb
        industrySlug={industry.slug}
        industryName={industry.name}
        accentColor={industry.accentColor}
      />

      {/* ========================================================================= */}
      {/* 01 INDUSTRY HERO */}
      {/* ========================================================================= */}
      <section className="relative pt-8 sm:pt-16 pb-12 sm:pb-16 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Eyebrow Badge with Industry Icon */}
          <div className="mb-6 flex items-center gap-2 animate-fade-in">
            <div
              className={cn(
                'w-7 h-7 rounded-lg flex items-center justify-center border text-xs',
                theme.badgeBg,
                theme.badgeBorder,
                theme.accentText
              )}
            >
              {ICON_MAP[industry.iconName] || <Zap className="w-4 h-4" />}
            </div>
            <Badge variant="primary" dot size="md">
              Aether for {industry.name}
            </Badge>
          </div>

          {/* Headline / Transformation Statement */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.15] max-w-4xl">
            {industry.heroHeadline}
          </h1>

          {/* Short Description */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl font-normal">
            {industry.description}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('solutions-section')}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-md"
            >
              Explore Solutions
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('interactive-demo')}
              leftIcon={<Play className="w-4 h-4 text-text-muted fill-current" />}
              className="w-full sm:w-auto"
            >
              Try Interactive Demo
            </Button>
          </div>

          {/* Key Metric Highlights */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-aether-border-subtle grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 max-w-2xl w-full">
            {industry.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-text-primary">
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
      {/* 02 BUSINESS CHALLENGES (Problem, Cause, Consequence) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Operational Friction"
          title={`Core Challenges in ${industry.shortName}`}
          subtitle="The underlying root causes and business consequences creating operational drag."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industry.challenges.map((item) => (
            <Card key={item.id} className="p-6 sm:p-7 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2 pb-3 border-b border-aether-border-subtle">
                  <h4 className="text-base font-bold text-text-primary tracking-tight">
                    {item.problem}
                  </h4>
                  <Badge variant="warning" size="sm" className="text-[10px] uppercase font-mono shrink-0">
                    {item.severity}
                  </Badge>
                </div>

                <div>
                  <div className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Root Cause</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-text-secondary leading-relaxed pl-5">
                    {item.cause}
                  </p>
                </div>

                <div className="pt-2">
                  <div className="text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    <span>Business Consequence</span>
                  </div>
                  <p className="text-xs sm:text-[13px] text-text-secondary leading-relaxed pl-5">
                    {item.consequence}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03 AETHER OPPORTUNITIES (Problem -> Opportunity) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Opportunity Discovery"
          title="Transforming Friction Into Opportunity"
          subtitle="How Aether diagnoses hidden operational drag and unlocks high-leverage business value."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industry.opportunities.map((opp, idx) => (
            <Card key={idx} className="p-6 sm:p-7 flex flex-col justify-between h-full card-gradient-surface border-slate-700/80">
              <div className="space-y-4">
                {/* Diagnosed Problem */}
                <div className="p-3.5 rounded-lg bg-rose-500/5 border border-rose-500/20">
                  <div className="text-[11px] font-semibold text-rose-400 uppercase tracking-wider mb-1">
                    Diagnosed Friction
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-snug">
                    {opp.problem}
                  </p>
                </div>

                {/* Down Arrow Indicator */}
                <div className="flex justify-center text-sky-400">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>

                {/* Unlocked Opportunity */}
                <div className="p-3.5 rounded-lg bg-sky-500/5 border border-sky-500/25">
                  <div className="text-[11px] font-semibold text-sky-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Aether Opportunity</span>
                  </div>
                  <p className="text-xs sm:text-sm text-text-primary font-medium leading-snug">
                    {opp.opportunity}
                  </p>
                </div>
              </div>

              {/* Multiplier Badge */}
              <div className="mt-5 pt-3 border-t border-aether-border-subtle flex items-center justify-between text-xs">
                <span className="text-text-muted font-mono">Projected Multiplier:</span>
                <span className="font-bold font-mono text-emerald-400">{opp.potentialMultiplier}</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04 AETHER SOLUTIONS (Problem -> Opportunity -> Solution) */}
      {/* ========================================================================= */}
      <section id="solutions-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Solution Architecture"
          title="End-to-End Solution Mappings"
          subtitle="Mapping operational challenges directly to intelligent automated capabilities."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industry.solutionMappings.map((mapping, idx) => (
            <Card key={idx} className="p-6 sm:p-7 flex flex-col justify-between h-full">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="neutral" size="sm" className="font-mono text-[10px]">
                    {mapping.capabilityTag}
                  </Badge>
                  <span className="text-[10px] font-mono text-text-muted">Phase 0{idx + 1}</span>
                </div>

                {/* 1. Problem */}
                <div className="text-xs text-text-muted">
                  <span className="font-semibold text-rose-400 uppercase tracking-wider text-[10px] block mb-0.5">
                    1. Problem
                  </span>
                  {mapping.problem}
                </div>

                {/* 2. Opportunity */}
                <div className="text-xs text-text-secondary pl-3 border-l border-slate-700">
                  <span className="font-semibold text-sky-400 uppercase tracking-wider text-[10px] block mb-0.5">
                    2. Opportunity
                  </span>
                  {mapping.opportunity}
                </div>

                {/* 3. Solution */}
                <div className="p-3 rounded-lg bg-slate-900/90 border border-sky-500/20 text-xs sm:text-sm text-text-primary leading-relaxed font-medium">
                  <span className="font-bold text-emerald-400 uppercase tracking-wider text-[10px] block mb-1">
                    3. Aether Solution
                  </span>
                  {mapping.solution}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05 INTELLIGENT WORKFLOW (Input -> Intelligence -> Recommendation -> Action -> Result) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Autonomous Pipeline"
          title={`5-Stage Intelligent Workflow`}
          subtitle={`How Aether processes signals in ${industry.shortName} from raw input to verified business outcome.`}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {/* Stage 1: Input */}
          <Card className="p-4 sm:p-5 flex flex-col justify-between h-full bg-slate-900/60 border-aether-border">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-aether-border-subtle mb-3">
                <span className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-sky-400" />
                  <span>1. Input Signal</span>
                </span>
                <span className="text-[10px] font-mono text-text-muted">Ingest</span>
              </div>
              <div className="text-[11px] font-mono text-sky-400 mb-1">{industry.workflowPipeline.input.source}</div>
              <p className="text-xs text-text-secondary leading-snug mb-2">
                {industry.workflowPipeline.input.details}
              </p>
              <div className="p-2 rounded bg-slate-950/80 text-[10px] font-mono text-slate-300">
                {industry.workflowPipeline.input.rawSignal}
              </div>
            </div>
          </Card>

          {/* Stage 2: Intelligence */}
          <Card className="p-4 sm:p-5 flex flex-col justify-between h-full bg-slate-900/60 border-indigo-500/30">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-aether-border-subtle mb-3">
                <span className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                  <span>2. Intelligence</span>
                </span>
                <span className="text-[10px] font-mono text-indigo-400">Diagnosis</span>
              </div>
              <p className="text-xs text-text-secondary leading-snug mb-2">
                {industry.workflowPipeline.intelligence.diagnosis}
              </p>
              <Badge variant="primary" size="sm" className="font-mono text-[10px] w-full justify-center">
                {industry.workflowPipeline.intelligence.metricScored}
              </Badge>
            </div>
          </Card>

          {/* Stage 3: Recommendation */}
          <Card className="p-4 sm:p-5 flex flex-col justify-between h-full bg-slate-900/60 border-amber-500/30">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-aether-border-subtle mb-3">
                <span className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
                  <BrainCircuit className="w-3.5 h-3.5 text-amber-400" />
                  <span>3. Recommendation</span>
                </span>
                <span className="text-[10px] font-mono text-amber-400">Logic</span>
              </div>
              <p className="text-xs text-text-secondary leading-snug mb-2">
                {industry.workflowPipeline.recommendation.actionProposed}
              </p>
              <div className="text-[10px] font-mono text-amber-300 mt-2">
                Confidence: {industry.workflowPipeline.recommendation.confidence}
              </div>
            </div>
          </Card>

          {/* Stage 4: Action */}
          <Card className="p-4 sm:p-5 flex flex-col justify-between h-full bg-slate-900/60 border-sky-500/30">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-aether-border-subtle mb-3">
                <span className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-sky-400" />
                  <span>4. Action</span>
                </span>
                <span className="text-[10px] font-mono text-sky-400">Execution</span>
              </div>
              <div className="space-y-1 text-[11px] text-text-secondary mb-2">
                {industry.workflowPipeline.action.stepsExecuted.map((st, i) => (
                  <div key={i} className="flex items-start gap-1">
                    <span className="text-sky-400 font-bold">&bull;</span>
                    <span className="line-clamp-2">{st}</span>
                  </div>
                ))}
              </div>
              <div className="text-[10px] font-mono text-text-muted">
                Target: {industry.workflowPipeline.action.targetSystem}
              </div>
            </div>
          </Card>

          {/* Stage 5: Result */}
          <Card className="p-4 sm:p-5 flex flex-col justify-between h-full bg-emerald-500/5 border-emerald-500/30">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-aether-border-subtle mb-3">
                <span className="text-xs font-semibold text-emerald-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>5. Result</span>
                </span>
                <span className="text-[10px] font-mono text-emerald-400">Verified</span>
              </div>
              <p className="text-xs text-slate-200 font-medium leading-snug mb-2">
                {industry.workflowPipeline.result.outcome}
              </p>
              <div className="p-1.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-300 text-center">
                Speed: {industry.workflowPipeline.result.timeToImpact}
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 06 INTERACTIVE DEMO */}
      {/* ========================================================================= */}
      <section id="interactive-demo" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Representative Sandbox"
          title={`Simulate Aether in ${industry.shortName}`}
          subtitle="Test how Aether ingests live operational signals and executes autonomous workflows in real-time."
        />

        <Card className="border-slate-700/80 p-0 overflow-hidden shadow-card-hover">
          {/* Top Bar */}
          <div className="bg-slate-950 px-4 sm:px-6 py-3.5 border-b border-aether-border flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-xs font-mono text-text-muted hidden sm:inline">
                aether-engine // {industry.slug} // simulated-environment
              </span>
            </div>

            <div className="flex items-center gap-2">
              {demoState === 'idle' ? (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleRunDemo}
                  leftIcon={<Play className="w-3.5 h-3.5 fill-current" />}
                >
                  Simulate Workflow
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleResetDemo}
                  leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
                >
                  Reset State
                </Button>
              )}
            </div>
          </div>

          {/* Sandbox Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="border-b border-aether-border-subtle pb-4">
              <div className="flex items-center gap-2 mb-1.5">
                <Badge variant="primary" size="sm">
                  {industry.name} Telemetry
                </Badge>
                <span className="text-xs font-mono text-text-muted">Live Sandbox</span>
              </div>
              <h3 className="text-lg font-bold text-text-primary">
                {industry.interactiveDemo.scenarioTitle}
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary mt-1">
                {industry.interactiveDemo.scenarioSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {/* Telemetry Ingest Box */}
              <div className="p-4 rounded-xl bg-aether-surface border border-aether-border flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-text-primary flex items-center gap-1.5 pb-2 border-b border-aether-border-subtle mb-3">
                    <Radio className="w-3.5 h-3.5 text-sky-400" />
                    <span>Simulated Inbound Telemetry</span>
                  </div>
                  <div className="p-3 rounded bg-slate-950/80 border border-slate-800 text-xs font-mono space-y-1.5 text-slate-300">
                    {Object.entries(industry.interactiveDemo.simulatedSignal).map(([k, v]) => (
                      <div key={k}>
                        <span className="text-text-muted">{k}: </span>
                        <span className="text-slate-200">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 pt-2 border-t border-aether-border-subtle text-[10px] text-text-muted font-mono">
                  Telemetry: Ingested & Normalized
                </div>
              </div>

              {/* Cognitive Reasoning Box */}
              <div
                className={cn(
                  'p-4 rounded-xl border flex flex-col justify-between transition-all duration-300',
                  demoState === 'idle'
                    ? 'bg-aether-surface/40 border-aether-border opacity-50'
                    : 'bg-aether-surface border-indigo-500/40 shadow-glow-subtle'
                )}
              >
                <div>
                  <div className="text-xs font-semibold text-text-primary flex items-center gap-1.5 pb-2 border-b border-aether-border-subtle mb-3">
                    <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Cognitive Diagnosis</span>
                  </div>
                  {demoState === 'idle' ? (
                    <div className="text-xs text-text-muted font-mono py-8 text-center">
                      Awaiting simulation trigger...
                    </div>
                  ) : (
                    <div className="text-xs text-text-secondary leading-relaxed animate-fade-in space-y-2">
                      <div className="text-[11px] font-semibold text-indigo-400 uppercase tracking-wider">
                        Diagnosis & Reasoning:
                      </div>
                      <p>{industry.interactiveDemo.engineReasoning}</p>
                    </div>
                  )}
                </div>
                <div className="mt-4 pt-2 border-t border-aether-border-subtle text-[10px] text-text-muted font-mono">
                  Model: Industry Knowledge Kernel
                </div>
              </div>

              {/* Execution Outcome Box */}
              <div
                className={cn(
                  'p-4 rounded-xl border flex flex-col justify-between transition-all duration-300',
                  demoState !== 'executed'
                    ? 'bg-aether-surface/40 border-aether-border opacity-50'
                    : 'bg-emerald-500/5 border-emerald-500/40 shadow-glow-subtle'
                )}
              >
                <div>
                  <div className="text-xs font-semibold text-text-primary flex items-center gap-1.5 pb-2 border-b border-aether-border-subtle mb-3">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Autonomous Actions</span>
                  </div>
                  {demoState !== 'executed' ? (
                    <div className="text-xs text-text-muted font-mono py-8 text-center">
                      {demoState === 'analyzing' ? 'Executing workflows...' : 'Pending diagnosis...'}
                    </div>
                  ) : (
                    <div className="space-y-2 text-xs animate-fade-in">
                      <div className="space-y-1">
                        {industry.interactiveDemo.automatedActions.map((act, i) => (
                          <div key={i} className="flex items-start gap-1.5 text-slate-300 text-[11px]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{act}</span>
                          </div>
                        ))}
                      </div>
                      <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] font-medium mt-2">
                        {industry.interactiveDemo.verifiedOutcome}
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-4 pt-2 border-t border-aether-border-subtle text-[10px] text-emerald-400 font-mono">
                  Latency: {industry.interactiveDemo.executionDuration}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* ========================================================================= */}
      {/* 07 BUSINESS INTELLIGENCE (Insights, Predictions, Risks, Opportunities, Recommendations) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Cognitive Analytics"
          title={`Business Intelligence for ${industry.shortName}`}
          subtitle="Continuous forward-looking insights that replace static reporting dashboards."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {/* Insights */}
          <Card className="p-5 flex flex-col justify-between h-full bg-slate-900/60 border-sky-500/30">
            <div>
              <div className="flex items-center gap-2 text-sky-400 font-semibold text-xs mb-3 pb-2 border-b border-aether-border-subtle">
                <Compass className="w-4 h-4" />
                <span>1. Insights</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {industry.businessIntelligence.insights}
              </p>
            </div>
          </Card>

          {/* Predictions */}
          <Card className="p-5 flex flex-col justify-between h-full bg-slate-900/60 border-indigo-500/30">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 font-semibold text-xs mb-3 pb-2 border-b border-aether-border-subtle">
                <TrendingUp className="w-4 h-4" />
                <span>2. Predictions</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {industry.businessIntelligence.predictions}
              </p>
            </div>
          </Card>

          {/* Risks */}
          <Card className="p-5 flex flex-col justify-between h-full bg-slate-900/60 border-rose-500/30">
            <div>
              <div className="flex items-center gap-2 text-rose-400 font-semibold text-xs mb-3 pb-2 border-b border-aether-border-subtle">
                <AlertCircle className="w-4 h-4" />
                <span>3. Risks</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {industry.businessIntelligence.risks}
              </p>
            </div>
          </Card>

          {/* Opportunities */}
          <Card className="p-5 flex flex-col justify-between h-full bg-slate-900/60 border-amber-500/30">
            <div>
              <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs mb-3 pb-2 border-b border-aether-border-subtle">
                <Target className="w-4 h-4" />
                <span>4. Opportunities</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {industry.businessIntelligence.opportunities}
              </p>
            </div>
          </Card>

          {/* Recommendations */}
          <Card className="p-5 flex flex-col justify-between h-full bg-slate-900/60 border-emerald-500/30">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 font-semibold text-xs mb-3 pb-2 border-b border-aether-border-subtle">
                <CheckCircle2 className="w-4 h-4" />
                <span>5. Prescriptions</span>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                {industry.businessIntelligence.recommendations}
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 08 BUSINESS IMPACT (Time, Efficiency, Customer Experience, Operations, Decision Making, Visibility) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Value Realization"
          title={`Qualitative & Quantitative Impact in ${industry.shortName}`}
          subtitle="How Aether creates measurable improvements across every organizational dimension."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Time */}
          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-sky-400 font-bold text-sm">
              <Clock className="w-4 h-4" />
              <span>Time Saved</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.time}
            </p>
          </Card>

          {/* Efficiency */}
          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-indigo-400 font-bold text-sm">
              <Zap className="w-4 h-4" />
              <span>Efficiency & Throughput</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.efficiency}
            </p>
          </Card>

          {/* Customer Experience */}
          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-emerald-400 font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Customer Experience</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.customerExperience}
            </p>
          </Card>

          {/* Operations */}
          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-amber-400 font-bold text-sm">
              <Activity className="w-4 h-4" />
              <span>Operations & Rostering</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.operations}
            </p>
          </Card>

          {/* Decision Making */}
          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-teal-400 font-bold text-sm">
              <BrainCircuit className="w-4 h-4" />
              <span>Decision Making</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.decisionMaking}
            </p>
          </Card>

          {/* Visibility */}
          <Card className="p-6">
            <div className="flex items-center gap-2.5 mb-3 text-sky-300 font-bold text-sm">
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
      {/* 09 ADDITIONAL CAPABILITIES (Expandable / Accordion Solution Groups) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Extended Mesh"
          title={`Additional Capabilities for ${industry.shortName}`}
          subtitle="Modular architectural extensions that plug directly into industry-specific software ecosystems."
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
                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-aether-border flex items-center justify-center text-sky-400 shrink-0">
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
                      isOpen && 'rotate-180 text-sky-400'
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
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
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
        industrySlug={industry.slug}
        industryName={industry.name}
        onRequestSolution={openSolutionModal}
      />

      {/* ========================================================================= */}
      {/* 10 FINAL CTA (What Could Aether Do For Your Business? -> Request Solution) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-aether-card card-gradient-surface border border-slate-700/80 p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-card-hover">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <div className="mb-4">
              <Badge variant="primary" dot size="md">
                {industry.name} Briefing
              </Badge>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
              What Could Aether Do For Your Business?
            </h2>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl">
              Experience a simulated transformation blueprint configured specifically for your {industry.shortName.toLowerCase()} operations.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={openSolutionModal}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto font-semibold shadow-md"
              >
                Request Solution
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
