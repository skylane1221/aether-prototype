import React, { useState, useEffect } from 'react';
import { useOutletContext, Link, useSearchParams, useNavigate } from 'react-router-dom';
import { Hero } from '../components/common/Hero';
import { CTASection } from '../components/common/CTASection';
import { JourneyNavigator } from '../components/common/JourneyNavigator';
import { SEO } from '../components/common/SEO';
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
  Zap,
  Building2,
  Utensils,
  Dumbbell,
  Scissors,
  Coffee,
  ShoppingBag,
  BedDouble,
  Stethoscope,
  Car,
  GraduationCap,
  ArrowLeft,
  Target,
} from 'lucide-react';
import { cn } from '../utils/cn';

// 10 Industries in Exact Specified Sequence
const INDUSTRY_ORDER: { slug: string; name: string; icon: React.ReactNode }[] = [
  { slug: 'real-estate', name: 'Real Estate', icon: <Building2 className="w-4 h-4" /> },
  { slug: 'restaurants', name: 'Restaurants', icon: <Utensils className="w-4 h-4" /> },
  { slug: 'gyms', name: 'Gyms', icon: <Dumbbell className="w-4 h-4" /> },
  { slug: 'salons', name: 'Salons', icon: <Scissors className="w-4 h-4" /> },
  { slug: 'cafes', name: 'Cafes', icon: <Coffee className="w-4 h-4" /> },
  { slug: 'retail', name: 'Retail', icon: <ShoppingBag className="w-4 h-4" /> },
  { slug: 'hotels', name: 'Hotels', icon: <BedDouble className="w-4 h-4" /> },
  { slug: 'healthcare', name: 'Healthcare', icon: <Stethoscope className="w-4 h-4" /> },
  { slug: 'automotive', name: 'Automotive', icon: <Car className="w-4 h-4" /> },
  { slug: 'education', name: 'Education', icon: <GraduationCap className="w-4 h-4" /> },
];

export const DemosPage: React.FC = () => {
  const { openSolutionModal } = useOutletContext<{ openSolutionModal: () => void }>();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlIndustry = searchParams.get('industry');

  const [selectedIndustrySlug, setSelectedIndustrySlug] = useState<string>(
    urlIndustry && INDUSTRY_ORDER.some((d) => d.slug === urlIndustry) ? urlIndustry : 'real-estate'
  );
  const [demoState, setDemoState] = useState<'idle' | 'analyzing' | 'executed'>('idle');

  // Sync state if URL query param changes
  useEffect(() => {
    if (urlIndustry && INDUSTRY_ORDER.some((d) => d.slug === urlIndustry)) {
      setSelectedIndustrySlug(urlIndustry);
      setDemoState('idle');
    }
  }, [urlIndustry]);

  const handleSelectIndustry = (slug: string) => {
    setSelectedIndustrySlug(slug);
    setSearchParams({ industry: slug }, { replace: true });
    setDemoState('idle');
  };

  const demo: UniversalDemoWorkflow =
    ALL_10_INDUSTRY_DEMOS.find((d) => d.industrySlug === selectedIndustrySlug) ||
    ALL_10_INDUSTRY_DEMOS[0];

  const handleRunAether = () => {
    setDemoState('analyzing');
    setTimeout(() => {
      setDemoState('executed');
    }, 550);
  };

  const handleReset = () => {
    setDemoState('idle');
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      <SEO
        title="Interactive Demos & Live Sandbox | Aether"
        description="Test real-time simulated cognitive workflows and observe autonomous signal processing across multiple industries."
        canonicalPath="/demos"
      />
      {/* Breadcrumb Navigation Trail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center justify-between py-2 border-b border-aether-border-subtle">
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <Link to="/" className="hover:text-text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/industries" className="hover:text-text-primary transition-colors">
              Industries
            </Link>
            <span>/</span>
            <span className="text-text-primary font-medium">Interactive Demo Hub</span>
          </div>

          <Link to="/industries">
            <Button
              variant="ghost"
              size="sm"
              leftIcon={<ArrowLeft className="w-3.5 h-3.5" />}
              className="text-xs"
            >
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

      {/* ========================================================================= */}
      {/* 10 INDUSTRY SELECTOR (EXACT SPECIFIED ORDER) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-bold">
            STEP 1: SELECT AN INDUSTRY DOMAIN
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary mt-1">
            Choose a Sector to Launch its Dedicated Interactive Demo
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3">
          {INDUSTRY_ORDER.map((item) => {
            const isSelected = item.slug === selectedIndustrySlug;
            return (
              <button
                key={item.slug}
                onClick={() => handleSelectIndustry(item.slug)}
                className={cn(
                  'p-3.5 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between group relative',
                  isSelected
                    ? 'bg-slate-800 border-sky-500 shadow-lg shadow-sky-950/40 text-text-primary'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-850 text-text-secondary'
                )}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={cn(
                      'w-7 h-7 rounded-lg flex items-center justify-center border text-xs transition-colors',
                      isSelected
                        ? 'bg-sky-500/20 border-sky-500/40 text-sky-300'
                        : 'bg-slate-800 border-slate-700 text-text-muted group-hover:text-text-primary'
                    )}
                  >
                    {item.icon}
                  </div>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />}
                </div>
                <div>
                  <h4
                    className={cn(
                      'text-xs font-bold leading-tight',
                      isSelected ? 'text-white' : 'text-text-primary group-hover:text-sky-300'
                    )}
                  >
                    {item.name}
                  </h4>
                  <span className="text-[10px] text-text-muted font-mono block mt-0.5">
                    {isSelected ? 'Active Demo' : 'Click to Load'}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MAIN INTERACTIVE DEMO SANDBOX */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-slate-700/80 p-0 overflow-hidden shadow-2xl bg-slate-950">
          {/* Top Demo Bar */}
          <div className="bg-slate-900/95 px-4 sm:px-6 py-3.5 border-b border-aether-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5 shrink-0">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {/* High-visibility SIMULATED DEMO DATA Badge */}
                <Badge
                  variant="outline"
                  size="sm"
                  className="bg-sky-500/10 border-sky-400/40 text-sky-300 font-mono text-[10px] tracking-widest font-bold uppercase py-0.5 px-2.5"
                >
                  SIMULATED DEMO DATA
                </Badge>
                <span className="text-xs font-mono text-text-muted hidden md:inline">
                  aether-engine // {demo.industrySlug} // showcase-sandbox
                </span>
              </div>
            </div>

            {/* Action Controls */}
            <div className="flex items-center gap-2">
              {demoState === 'idle' ? (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleRunAether}
                  leftIcon={<Play className="w-3.5 h-3.5 fill-current" />}
                  className="shadow-glow-subtle font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950"
                >
                  Run Aether
                </Button>
              ) : demoState === 'analyzing' ? (
                <Button
                  variant="secondary"
                  size="sm"
                  disabled
                  className="gap-1.5 font-mono text-xs"
                >
                  <Cpu className="w-3.5 h-3.5 animate-spin text-sky-400" />
                  <span>Analyzing...</span>
                </Button>
              ) : (
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleReset}
                    leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
                    className="text-xs border-slate-700 text-slate-200"
                  >
                    Reset Demo
                  </Button>
                  <Link to={`/industries/${demo.industrySlug}`}>
                    <Button
                      variant="secondary"
                      size="sm"
                      rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                      className="text-xs hidden sm:inline-flex"
                    >
                      Industry Deep Dive
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Sandbox Body */}
          <div className="p-5 sm:p-8 space-y-6">
            {/* Scenario Header */}
            <div className="pb-5 border-b border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="primary" size="sm" className="text-[10px] font-mono">
                    {demo.badge}
                  </Badge>
                  <span className="text-xs font-mono text-text-muted">• {demo.industryName}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-text-primary">{demo.title}</h3>
                <p className="text-xs sm:text-sm text-text-secondary mt-1 max-w-3xl">
                  {demo.description}
                </p>
              </div>

              {/* Pitch Highlights Box */}
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono shrink-0 space-y-1">
                <div className="text-[10px] text-text-muted uppercase tracking-wider">
                  Presenter 60s Focus:
                </div>
                <div className="text-sky-300 font-semibold">{demo.result.quantifiedGain}</div>
                <div className="text-slate-400 text-[11px]">
                  Impact in {demo.result.timeToImpact}
                </div>
              </div>
            </div>

            {/* ========================================================================= */}
            {/* 6-STAGE VALUE CHAIN DISPLAY */}
            {/* INPUT → AETHER ANALYZES → INSIGHT → RECOMMENDATION → ACTION → RESULT */}
            {/* ========================================================================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* STAGE 1: INPUT */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-800 text-xs font-mono">
                    <span className="text-sky-400 font-bold flex items-center gap-1.5 uppercase">
                      <Activity className="w-3.5 h-3.5" />
                      1. INPUT
                    </span>
                    <span className="text-[10px] text-text-muted">{demo.input.timestamp}</span>
                  </div>
                  <div className="text-[11px] text-text-muted font-mono mt-2 mb-2">
                    Source: <span className="text-slate-200">{demo.input.source}</span>
                  </div>
                  <div className="space-y-1.5">
                    {Object.entries(demo.input.rawPayload).map(([key, val]) => (
                      <div
                        key={key}
                        className="p-2 rounded bg-slate-950 border border-slate-800/80 text-xs"
                      >
                        <span className="text-[10px] uppercase font-mono text-text-muted block">
                          {key}
                        </span>
                        <span className="text-text-primary font-medium">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2 text-[10px] font-mono text-sky-400/80 flex items-center gap-1">
                  <span>Raw Signal Ingested</span>
                </div>
              </div>

              {/* STAGE 2: AETHER ANALYZES */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-800 text-xs font-mono">
                    <span className="text-indigo-400 font-bold flex items-center gap-1.5 uppercase">
                      <Cpu className="w-3.5 h-3.5" />
                      2. AETHER ANALYZES
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">
                      {demoState === 'idle' ? 'Ready' : `${demo.processing.latencyMs}ms`}
                    </span>
                  </div>

                  {demoState === 'idle' ? (
                    <div className="py-8 text-center space-y-2">
                      <Cpu className="w-8 h-8 text-indigo-400/60 mx-auto animate-pulse" />
                      <div className="text-xs text-text-muted">Aether Engine Ready</div>
                      <p className="text-[11px] text-slate-400">
                        Click <strong className="text-sky-300">Run Aether</strong> to execute
                        multi-model analysis.
                      </p>
                    </div>
                  ) : demoState === 'analyzing' ? (
                    <div className="py-8 text-center space-y-2 animate-fade-in">
                      <div className="w-6 h-6 border-2 border-indigo-400 border-t-transparent animate-spin mx-auto" />
                      <div className="text-xs font-bold text-indigo-300">
                        Analyzing Telemetry...
                      </div>
                      <p className="text-[10px] font-mono text-text-muted">
                        {demo.processing.telemetryStream}
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3 pt-2 animate-fade-in">
                      <div className="text-xs text-text-secondary">
                        Telemetry Stream:{' '}
                        <span className="text-text-primary font-mono block mt-0.5">
                          {demo.processing.telemetryStream}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] uppercase font-mono text-text-muted">
                          Active AI Kernels:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {demo.processing.modelsActive.map((model, idx) => (
                            <span
                              key={idx}
                              className="text-[10px] px-2 py-0.5 rounded bg-indigo-950/40 border border-indigo-500/30 text-indigo-300 font-mono"
                            >
                              ⚙ {model}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="pt-2 text-[10px] font-mono text-indigo-400/80 flex items-center gap-1">
                  <span>Cross-Model Synthesis</span>
                </div>
              </div>

              {/* STAGE 3: INSIGHT (INSIGHT FOUND) */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-800 text-xs font-mono">
                    <span className="text-amber-400 font-bold flex items-center gap-1.5 uppercase">
                      <BrainCircuit className="w-3.5 h-3.5" />
                      3. INSIGHT
                    </span>
                    {demoState === 'executed' && (
                      <Badge
                        variant="warning"
                        size="sm"
                        className="text-[9px] font-mono font-bold uppercase py-0 px-1.5"
                      >
                        Insight Found
                      </Badge>
                    )}
                  </div>

                  {demoState !== 'executed' ? (
                    <div className="py-8 text-center text-text-muted text-xs">
                      Awaiting analysis trigger...
                    </div>
                  ) : (
                    <div className="space-y-2.5 pt-2 animate-fade-in">
                      <p className="text-xs text-text-primary font-medium leading-relaxed">
                        {demo.understanding.diagnosis}
                      </p>
                      <div className="p-2 rounded bg-amber-950/25 border border-amber-500/30 text-[11px] text-amber-200 font-mono">
                        {demo.understanding.riskOrOpportunityScored}
                      </div>
                      <div className="space-y-1 pt-1">
                        {demo.understanding.factors.map((f, idx) => (
                          <div
                            key={idx}
                            className="text-[11px] text-text-muted flex items-start gap-1.5"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <div className="pt-2 text-[10px] font-mono text-amber-400/80 flex items-center justify-between">
                  <span>Confidence: {demo.understanding.confidence}</span>
                </div>
              </div>

              {/* STAGE 4: RECOMMENDATION */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-800 text-xs font-mono">
                    <span className="text-purple-400 font-bold flex items-center gap-1.5 uppercase">
                      <Target className="w-3.5 h-3.5" />
                      4. RECOMMENDATION
                    </span>
                    {demoState === 'executed' && (
                      <span className="text-[10px] text-purple-300 font-mono">
                        Match: {demo.recommendation.confidenceScore}
                      </span>
                    )}
                  </div>

                  {demoState !== 'executed' ? (
                    <div className="py-8 text-center text-text-muted text-xs">
                      Awaiting recommendation synthesis...
                    </div>
                  ) : (
                    <div className="space-y-2.5 pt-2 animate-fade-in">
                      <div className="p-2.5 rounded-lg bg-purple-950/20 border border-purple-500/30 text-xs text-white font-semibold leading-snug">
                        {demo.recommendation.actionProposed}
                      </div>
                      <div className="text-[11px] text-purple-200/90 font-mono pt-1">
                        Expected Impact:{' '}
                        <span className="text-slate-200">{demo.recommendation.expectedImpact}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="pt-2 text-[10px] font-mono text-purple-400/80">
                  <span>Algorithmic Optimization</span>
                </div>
              </div>

              {/* STAGE 5: ACTION (RECOMMENDED ACTION) */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-800 text-xs font-mono">
                    <span className="text-rose-400 font-bold flex items-center gap-1.5 uppercase">
                      <Zap className="w-3.5 h-3.5" />
                      5. ACTION
                    </span>
                    {demoState === 'executed' && (
                      <Badge
                        variant="primary"
                        size="sm"
                        className="text-[9px] font-mono font-bold uppercase py-0 px-1.5 bg-rose-500/20 text-rose-300 border-rose-500/30"
                      >
                        Recommended Action
                      </Badge>
                    )}
                  </div>

                  {demoState !== 'executed' ? (
                    <div className="py-8 text-center text-text-muted text-xs">
                      Awaiting autonomous execution steps...
                    </div>
                  ) : (
                    <div className="space-y-2 pt-2 animate-fade-in">
                      {demo.action.stepsExecuted.map((step, idx) => (
                        <div
                          key={idx}
                          className="text-xs text-text-secondary flex items-start gap-2 bg-slate-950 p-2 rounded border border-slate-800"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{step}</span>
                        </div>
                      ))}
                      <div className="text-[10px] text-text-muted font-mono pt-1">
                        Systems Synced:{' '}
                        <span className="text-slate-300">
                          {demo.action.systemsTargeted.join(' • ')}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="pt-2 text-[10px] font-mono text-rose-400/80">
                  <span>Autonomous Multi-System Push</span>
                </div>
              </div>

              {/* STAGE 6: RESULT */}
              <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-emerald-950/30 via-slate-900/80 to-slate-950 border border-emerald-500/40 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-2.5 border-b border-emerald-500/30 text-xs font-mono">
                    <span className="text-emerald-400 font-bold flex items-center gap-1.5 uppercase">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      6. RESULT
                    </span>
                    {demoState === 'executed' && (
                      <span className="text-[10px] text-emerald-300 font-mono font-bold">
                        {demo.result.timeToImpact}
                      </span>
                    )}
                  </div>

                  {demoState !== 'executed' ? (
                    <div className="py-8 text-center text-text-muted text-xs">
                      Awaiting impact calculation...
                    </div>
                  ) : (
                    <div className="space-y-3 pt-2 animate-fade-in">
                      <p className="text-xs text-white font-medium leading-relaxed">
                        {demo.result.primaryOutcome}
                      </p>
                      <div className="p-3 rounded-lg bg-emerald-950/50 border border-emerald-500/40 text-center">
                        <span className="text-[10px] font-mono text-emerald-300 uppercase block font-semibold">
                          Illustrative Outcome (Demo Scenario)
                        </span>
                        <div className="text-base font-extrabold text-white font-mono mt-0.5">
                          {demo.result.quantifiedGain}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="pt-2 text-[10px] font-mono text-emerald-400/80">
                  <span>Simulated ROI Projection</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Showcase Note */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-secondary">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
            <span>
              <strong>Showcase Sandbox Notice:</strong> This central showcase operates on simulated
              enterprise telemetry. Live customer credentials, third-party APIs, and real tenant
              databases are not connected.
            </span>
          </div>
          <Badge
            variant="outline"
            size="sm"
            className="shrink-0 font-mono text-[10px] text-sky-300 border-sky-400/30"
          >
            SIMULATED DEMO DATA
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
