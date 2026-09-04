import React, { useState, useEffect } from 'react';
import { useOutletContext, Link, useSearchParams, useNavigate } from 'react-router-dom';
import { Hero } from '../components/common/Hero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { CTASection } from '../components/common/CTASection';
import { JourneyNavigator } from '../components/common/JourneyNavigator';
import { ALL_10_INDUSTRY_DEMOS, UniversalDemoWorkflow } from '../data/demos';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  BrainCircuit, 
  Activity, 
  Layers, 
  Clock, 
  Sparkles,
  Zap,
  Building2,
  Utensils,
  Coffee,
  Dumbbell,
  Scissors,
  ShoppingBag,
  BedDouble,
  Stethoscope,
  Car,
  GraduationCap,
  ArrowLeft
} from 'lucide-react';
import { cn } from '../utils/cn';
import { motion, AnimatePresence } from 'framer-motion';

const INDUSTRY_ICONS: Record<string, React.ReactNode> = {
  'real-estate': <Building2 className="w-4 h-4" />,
  'restaurants': <Utensils className="w-4 h-4" />,
  'cafes': <Coffee className="w-4 h-4" />,
  'gyms': <Dumbbell className="w-4 h-4" />,
  'salons': <Scissors className="w-4 h-4" />,
  'retail': <ShoppingBag className="w-4 h-4" />,
  'hotels': <BedDouble className="w-4 h-4" />,
  'healthcare': <Stethoscope className="w-4 h-4" />,
  'automotive': <Car className="w-4 h-4" />,
  'education': <GraduationCap className="w-4 h-4" />,
};

export const DemosPage: React.FC = () => {
  const { openSolutionModal } = useOutletContext<{ openSolutionModal: () => void }>();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlIndustry = searchParams.get('industry');

  const [selectedIndustrySlug, setSelectedIndustrySlug] = useState<string>(
    urlIndustry && ALL_10_INDUSTRY_DEMOS.some((d) => d.industrySlug === urlIndustry)
      ? urlIndustry
      : 'real-estate'
  );
  const [simulationState, setSimulationState] = useState<'idle' | 'running' | 'completed'>('idle');
  const [activeStageStep, setActiveStageStep] = useState<number>(1);

  // Sync state if URL query param changes
  useEffect(() => {
    if (urlIndustry && ALL_10_INDUSTRY_DEMOS.some((d) => d.industrySlug === urlIndustry)) {
      setSelectedIndustrySlug(urlIndustry);
      setSimulationState('idle');
      setActiveStageStep(1);
    }
  }, [urlIndustry]);

  const handleSelectIndustry = (slug: string) => {
    setSelectedIndustrySlug(slug);
    setSearchParams({ industry: slug }, { replace: true });
    handleResetSimulation();
  };

  const demo: UniversalDemoWorkflow = 
    ALL_10_INDUSTRY_DEMOS.find((d) => d.industrySlug === selectedIndustrySlug) || ALL_10_INDUSTRY_DEMOS[0];

  const handleRunSimulation = () => {
    setSimulationState('running');
    setActiveStageStep(1);

    // Simulate multi-step autonomous execution
    setTimeout(() => setActiveStageStep(2), 400);
    setTimeout(() => setActiveStageStep(3), 850);
    setTimeout(() => setActiveStageStep(4), 1300);
    setTimeout(() => setActiveStageStep(5), 1750);
    setTimeout(() => {
      setActiveStageStep(6);
      setSimulationState('completed');
    }, 2200);
  };

  const handleResetSimulation = () => {
    setSimulationState('idle');
    setActiveStageStep(1);
  };

  const stages = [
    { num: 1, label: 'Input', subtitle: 'Raw Telemetry Ingest' },
    { num: 2, label: 'Processing', subtitle: 'Cognitive Pipeline' },
    { num: 3, label: 'Understanding', subtitle: 'Bottleneck Diagnosis' },
    { num: 4, label: 'Recommendation', subtitle: 'Optimal Strategy' },
    { num: 5, label: 'Action', subtitle: 'Autonomous Execution' },
    { num: 6, label: 'Result', subtitle: 'Quantified Realization' },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Breadcrumb Navigation Trail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center justify-between py-2 border-b border-aether-border-subtle">
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <Link to="/" className="hover:text-text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/industries" className="hover:text-text-primary transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-text-primary font-medium">Interactive Demo Hub</span>
          </div>

          <Link to="/industries">
            <Button variant="ghost" size="sm" leftIcon={<ArrowLeft className="w-3.5 h-3.5" />} className="text-xs">
              Back to Industries
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <Hero
        badge="Central Interactive Demo Hub"
        title={
          <>
            Simulate Aether Across{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-300">
              All 10 Enterprise Verticals
            </span>
          </>
        }
        subtitle="Experience Aether's 6-stage universal cognitive pipeline in real time. Select any industry to witness how raw operational signals are ingested, diagnosed, and executed into verified business outcomes."
        primaryAction={{
          label: 'Request Custom Sandbox',
          onClick: openSolutionModal,
        }}
        secondaryAction={{
          label: 'View Solution Pillars',
          onClick: () => navigate('/solutions'),
        }}
      />

      {/* 10 Industry Selector Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
            STEP 1: SELECT AN INDUSTRY DOMAIN
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary mt-1">
            Choose a Sector to Launch its Representative Pipeline
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {ALL_10_INDUSTRY_DEMOS.map((item) => {
            const isSelected = item.industrySlug === selectedIndustrySlug;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectIndustry(item.industrySlug)}
                className={cn(
                  'p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between group',
                  isSelected
                    ? 'bg-slate-800 border-sky-500 shadow-md shadow-sky-950/40 text-text-primary'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40 text-text-secondary'
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={cn(
                    'w-7 h-7 rounded-lg flex items-center justify-center border text-xs',
                    isSelected ? 'bg-sky-500/20 border-sky-500/40 text-sky-300' : 'bg-slate-800 border-slate-700 text-text-muted group-hover:text-text-primary'
                  )}>
                    {INDUSTRY_ICONS[item.industrySlug]}
                  </div>
                  {isSelected && (
                    <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                  )}
                </div>
                <div>
                  <h4 className={cn(
                    'text-xs font-bold leading-tight line-clamp-1',
                    isSelected ? 'text-white' : 'text-text-primary group-hover:text-sky-300'
                  )}>
                    {item.industryName}
                  </h4>
                  <span className="text-[10px] text-text-muted font-mono block mt-0.5 truncate">
                    {item.badge}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Interactive Demo Simulator Panel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-6 sm:p-10 bg-slate-900/90 border-slate-700/80 space-y-8 relative overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Badge variant="primary" size="sm" className="font-mono text-[10px]">
                  {demo.badge}
                </Badge>
                <span className="text-xs text-text-muted font-mono">• {demo.industryName}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
                {demo.title}
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary mt-1 max-w-2xl">
                {demo.description}
              </p>
              <div className="mt-2.5">
                <Link
                  to={`/industries/${demo.industrySlug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 transition-colors"
                >
                  <span>Read full {demo.industryName} operational deep-dive</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Simulation Trigger Controls */}
            <div className="flex items-center gap-3 shrink-0">
              {simulationState === 'running' ? (
                <Button variant="secondary" size="md" disabled className="gap-2 font-mono text-xs">
                  <Cpu className="w-4 h-4 animate-spin text-sky-400" />
                  Executing Stage 0{activeStageStep}...
                </Button>
              ) : simulationState === 'completed' ? (
                <div className="flex items-center gap-2">
                  <Button variant="secondary" size="md" onClick={handleResetSimulation} leftIcon={<RotateCcw className="w-4 h-4" />}>
                    Reset Simulator
                  </Button>
                  <Link to={`/industries/${demo.industrySlug}`}>
                    <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                      Explore Full Page
                    </Button>
                  </Link>
                </div>
              ) : (
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleRunSimulation}
                  leftIcon={<Play className="w-4 h-4 fill-current" />}
                  className="shadow-lg shadow-sky-950/50"
                >
                  Run Autonomous Simulation
                </Button>
              )}
            </div>
          </div>

          {/* 6-Stage Universal Progress Pipeline */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {stages.map((st) => {
              const isPassed = simulationState === 'completed' || (simulationState === 'running' && activeStageStep >= st.num);
              const isCurrent = simulationState === 'running' && activeStageStep === st.num;

              return (
                <div
                  key={st.num}
                  className={cn(
                    'p-3 rounded-xl border text-left transition-all duration-300',
                    isCurrent
                      ? 'bg-sky-950/40 border-sky-500 shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                      : isPassed
                      ? 'bg-slate-800/80 border-slate-700 text-text-primary'
                      : 'bg-slate-950/40 border-slate-800/60 opacity-60'
                  )}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                    <span className={cn('font-bold', isCurrent ? 'text-sky-400' : isPassed ? 'text-emerald-400' : 'text-text-muted')}>
                      STAGE 0{st.num}
                    </span>
                    {isPassed && !isCurrent ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    ) : isCurrent ? (
                      <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                    ) : null}
                  </div>
                  <div className="text-xs font-bold text-text-primary">{st.label}</div>
                  <div className="text-[10px] text-text-muted truncate">{st.subtitle}</div>
                </div>
              );
            })}
          </div>

          {/* Detailed 6-Stage Telemetry Feed & Execution Log */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Column 1: Input & Processing */}
            <div className="space-y-4">
              {/* STAGE 1: INPUT */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-slate-800">
                  <span className="text-sky-400 font-bold flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    01. Incoming Input Signal
                  </span>
                  <span className="text-[10px] text-text-muted">{demo.input.timestamp}</span>
                </div>
                <div className="text-[11px] text-text-muted font-mono">Source: {demo.input.source}</div>
                <div className="space-y-1.5 pt-1">
                  {Object.entries(demo.input.rawPayload).map(([key, val]) => (
                    <div key={key} className="p-2 rounded bg-slate-900 border border-slate-800/80 text-xs">
                      <span className="text-[10px] uppercase font-mono text-text-muted block">{key}</span>
                      <span className="text-text-primary font-medium">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* STAGE 2: PROCESSING */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-slate-800">
                  <span className="text-indigo-400 font-bold flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    02. Cognitive Processing
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono">{demo.processing.latencyMs}ms latency</span>
                </div>
                <div className="text-xs text-text-secondary">
                  Stream: <span className="text-text-primary font-mono">{demo.processing.telemetryStream}</span>
                </div>
                <div className="flex flex-wrap gap-1 pt-1">
                  {demo.processing.modelsActive.map((model, idx) => (
                    <span key={idx} className="text-[10px] px-2 py-0.5 rounded bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 font-mono">
                      ⚙ {model}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 2: Understanding & Recommendation */}
            <div className="space-y-4">
              {/* STAGE 3: UNDERSTANDING */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-slate-800">
                  <span className="text-amber-400 font-bold flex items-center gap-1.5">
                    <BrainCircuit className="w-3.5 h-3.5" />
                    03. Cognitive Diagnosis
                  </span>
                  <span className="text-[10px] text-amber-300 font-mono">{demo.understanding.confidence}</span>
                </div>
                <p className="text-xs text-text-primary font-medium leading-relaxed">
                  {demo.understanding.diagnosis}
                </p>
                <div className="p-2 rounded bg-amber-950/20 border border-amber-500/20 text-[11px] text-amber-200/90 font-mono">
                  {demo.understanding.riskOrOpportunityScored}
                </div>
                <div className="space-y-1 pt-1">
                  {demo.understanding.factors.map((f, idx) => (
                    <div key={idx} className="text-[11px] text-text-muted flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* STAGE 4: RECOMMENDATION */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-slate-800">
                  <span className="text-purple-400 font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    04. Recommended Action
                  </span>
                  <span className="text-[10px] text-purple-300 font-mono">Conf: {demo.recommendation.confidenceScore}</span>
                </div>
                <p className="text-xs text-text-primary leading-relaxed font-semibold">
                  {demo.recommendation.actionProposed}
                </p>
                <div className="text-[11px] text-purple-200/80 font-mono">
                  Target Outcome: {demo.recommendation.expectedImpact}
                </div>
              </div>
            </div>

            {/* Column 3: Action & Result */}
            <div className="space-y-4">
              {/* STAGE 5: ACTION */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-slate-800">
                  <span className="text-rose-400 font-bold flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    05. Autonomous Execution
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono">Auto-Triggered</span>
                </div>
                <div className="space-y-1.5">
                  {demo.action.stepsExecuted.map((step, idx) => (
                    <div key={idx} className="text-xs text-text-secondary flex items-start gap-2 bg-slate-900 p-2 rounded border border-slate-800">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
                <div className="text-[10px] text-text-muted font-mono pt-1">
                  Systems Synced: {demo.action.systemsTargeted.join(' • ')}
                </div>
              </div>

              {/* STAGE 6: RESULT */}
              <div className="p-4 rounded-xl bg-gradient-to-br from-emerald-950/30 to-slate-950 border border-emerald-500/40 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono pb-2 border-b border-emerald-500/30">
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    06. Measured Business Impact
                  </span>
                  <span className="text-[10px] text-emerald-300 font-mono">{demo.result.timeToImpact}</span>
                </div>
                <p className="text-xs text-white font-medium leading-relaxed">
                  {demo.result.primaryOutcome}
                </p>
                <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-center">
                  <span className="text-[10px] font-mono text-emerald-300 uppercase block">Quantified Value Realization</span>
                  <div className="text-sm font-bold text-white font-mono mt-0.5">{demo.result.quantifiedGain}</div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Simulated Architecture Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-secondary">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>
              <strong>Simulated Data Sandbox:</strong> These interactive demonstrations operate on isolated synthetic state models. No live customer credentials, real APIs, or production databases are connected.
            </span>
          </div>
          <Badge variant="neutral" size="sm" className="shrink-0 font-mono">
            Showcase Architecture v2.0
          </Badge>
        </div>
      </section>

      {/* Guided Progression Journey */}
      <JourneyNavigator currentStage="experience" />

      {/* CTA */}
      <CTASection
        badge="Next Stage: Business Impact"
        title="Ready to evaluate quantitative ROI for your organization?"
        description="Review our verified benchmark models across labor savings, capacity expansion, and customer churn reduction."
        primaryButtonText="Request Executive Consultation"
        secondaryButtonText="Explore Business Impact"
        onPrimaryClick={openSolutionModal}
        secondaryTo="/impact"
      />
    </div>
  );
};
