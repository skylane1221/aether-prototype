import React, { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { SectionHeader } from '../components/ui/SectionHeader';
import { IndustryCard } from '../components/common/IndustryCard';
import { SolutionCard } from '../components/common/SolutionCard';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { INDUSTRIES } from '../data/industries';
import { PLATFORM_SOLUTIONS } from '../data/solutions';
import { PLATFORM_IMPACT_METRICS } from '../data/impact';
import { DEMO_SCENARIOS } from '../data/demos';
import { JourneyNavigator } from '../components/common/JourneyNavigator';
import { WhyAetherSection } from '../components/common/WhyAetherSection';
import {
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  Workflow,
  Radio,
  CheckCircle2,
  TrendingUp,
  BrainCircuit,
  Eye,
  Clock,
  Zap,
  Play,
  RotateCcw,
  Target,
  ShieldCheck,
} from 'lucide-react';
import { cn } from '../utils/cn';

export const HomePage: React.FC = () => {
  const { openSolutionModal } = useOutletContext<{ openSolutionModal: () => void }>();

  // Interactive Demo Preview State
  const [selectedDemoIndex, setSelectedDemoIndex] = useState(0);
  const [demoState, setDemoState] = useState<'idle' | 'analyzing' | 'executed'>('idle');

  const currentDemo = DEMO_SCENARIOS[selectedDemoIndex] || DEMO_SCENARIOS[0];

  const handleRunDemo = () => {
    setDemoState('analyzing');
    setTimeout(() => {
      setDemoState('executed');
    }, 1000);
  };

  const handleResetDemo = () => {
    setDemoState('idle');
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 6 Impact Dimension Icons
  const IMPACT_DIMENSION_ICONS: Record<string, React.ReactNode> = {
    Time: <Clock className="w-5 h-5 text-sky-400" />,
    Efficiency: <Zap className="w-5 h-5 text-indigo-400" />,
    'Customer Experience': <Sparkles className="w-5 h-5 text-emerald-400" />,
    Opportunity: <Target className="w-5 h-5 text-amber-400" />,
    'Decision Making': <BrainCircuit className="w-5 h-5 text-teal-400" />,
    'Operational Visibility': <Eye className="w-5 h-5 text-sky-300" />,
    Visibility: <Eye className="w-5 h-5 text-sky-300" />,
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-8 sm:pt-16 pb-12 sm:pb-20 overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Eyebrow Pill */}
          <div className="mb-6 animate-fade-in">
            <Badge variant="primary" dot size="md">
              AI-Powered Business Transformation
            </Badge>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.1] max-w-4xl">
            Turn Business Problems Into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-300">
              Intelligent Solutions.
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl font-normal">
            Aether understands how businesses operate, identifies opportunities for AI and automation, and transforms them into intelligent workflows.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection('industries-preview')}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-md"
            >
              Explore Industries
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('demo-preview')}
              leftIcon={<Play className="w-4 h-4 text-text-muted fill-current" />}
              className="w-full sm:w-auto"
            >
              See Aether in Action
            </Button>
          </div>

          {/* Visual Workflow: BUSINESS -> UNDERSTAND -> IDENTIFY -> TRANSFORM -> OPTIMIZE */}
          <div className="mt-14 sm:mt-20 w-full max-w-5xl">
            <div className="text-[11px] font-mono uppercase tracking-widest text-text-muted mb-4">
              Autonomous Transformation Pipeline
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 sm:gap-3 p-3 sm:p-4 rounded-2xl bg-aether-card card-gradient-surface border border-slate-700/80 shadow-card">
              {/* Step 1: Business */}
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-aether-border flex flex-col items-center justify-center text-center group hover:border-slate-600 transition-colors">
                <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider mb-1">
                  Step 01
                </span>
                <span className="text-xs sm:text-sm font-bold tracking-tight text-text-primary">
                  BUSINESS
                </span>
                <span className="text-[11px] text-text-muted mt-1 line-clamp-1">
                  Operational Signals
                </span>
              </div>

              {/* Step 2: Understand */}
              <div className="p-3.5 rounded-xl bg-sky-500/10 border border-sky-500/25 flex flex-col items-center justify-center text-center group hover:border-sky-500/40 transition-colors">
                <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider mb-1">
                  Step 02
                </span>
                <span className="text-xs sm:text-sm font-bold tracking-tight text-sky-300">
                  UNDERSTAND
                </span>
                <span className="text-[11px] text-text-muted mt-1 line-clamp-1">
                  Telemetry & Context
                </span>
              </div>

              {/* Step 3: Identify */}
              <div className="p-3.5 rounded-xl bg-indigo-500/10 border border-indigo-500/25 flex flex-col items-center justify-center text-center group hover:border-indigo-500/40 transition-colors">
                <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider mb-1">
                  Step 03
                </span>
                <span className="text-xs sm:text-sm font-bold tracking-tight text-indigo-300">
                  IDENTIFY
                </span>
                <span className="text-[11px] text-text-muted mt-1 line-clamp-1">
                  Friction & Leaks
                </span>
              </div>

              {/* Step 4: Transform */}
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/25 flex flex-col items-center justify-center text-center group hover:border-amber-500/40 transition-colors">
                <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider mb-1">
                  Step 04
                </span>
                <span className="text-xs sm:text-sm font-bold tracking-tight text-amber-300">
                  TRANSFORM
                </span>
                <span className="text-[11px] text-text-muted mt-1 line-clamp-1">
                  Intelligent Logic
                </span>
              </div>

              {/* Step 5: Optimize */}
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 flex flex-col items-center justify-center text-center group hover:border-emerald-500/40 transition-colors">
                <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-1">
                  Step 05
                </span>
                <span className="text-xs sm:text-sm font-bold tracking-tight text-emerald-300">
                  OPTIMIZE
                </span>
                <span className="text-[11px] text-text-muted mt-1 line-clamp-1">
                  Compounding Gain
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. WHAT AETHER DOES (01 Understand, 02 Identify, 03 Transform, 04 Optimize) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="How It Works"
          title="What Aether Does"
          subtitle="A continuous four-stage methodology turning operational complexity into autonomous simplicity."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Step 01: Understand */}
          <Card className="p-6 flex flex-col justify-between h-full">
            <div>
              <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center font-mono font-bold text-sm mb-4">
                01
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Understand</h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Aether connects to existing business data streams—schedules, communications, sales, and inventory—understanding operational reality without disruptive system overhauls.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-aether-border-subtle text-xs text-sky-400 font-medium">
              Zero-friction telemetry
            </div>
          </Card>

          {/* Step 02: Identify */}
          <Card className="p-6 flex flex-col justify-between h-full">
            <div>
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-mono font-bold text-sm mb-4">
                02
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Identify</h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                The cognitive engine detects hidden friction points, capacity dead zones, delayed lead responses, and client churn risks before they damage margins.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-aether-border-subtle text-xs text-indigo-400 font-medium">
              Real-time bottleneck diagnosis
            </div>
          </Card>

          {/* Step 03: Transform */}
          <Card className="p-6 flex flex-col justify-between h-full">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center font-mono font-bold text-sm mb-4">
                03
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Transform</h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Aether converts diagnosed opportunities into autonomous workflows that qualify leads in seconds, backfill cancellations, and dispatch resources seamlessly.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-aether-border-subtle text-xs text-amber-400 font-medium">
              Autonomous multi-agent execution
            </div>
          </Card>

          {/* Step 04: Optimize */}
          <Card className="p-6 flex flex-col justify-between h-full">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-mono font-bold text-sm mb-4">
                04
              </div>
              <h3 className="text-lg font-bold text-text-primary mb-2">Optimize</h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                Continuously models surge patterns, refines operational throughput, and reports verifiable business impact on a unified executive dashboard.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-aether-border-subtle text-xs text-emerald-400 font-medium">
              Compounding operational gains
            </div>
          </Card>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2.5 WHY AETHER? (Traditional Approach vs Aether & 6 Principles) */}
      {/* ========================================================================= */}
      <WhyAetherSection />

      {/* ========================================================================= */}
      {/* 3. INDUSTRIES PREVIEW (All 10 Industries) */}
      {/* ========================================================================= */}
      <section id="industries-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <Badge variant="primary" dot size="md" className="mb-3">
              Application Demonstrations
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
              10 Industry Applications
            </h2>
            <p className="mt-2 text-sm sm:text-base text-text-secondary max-w-xl">
              Aether is the product. See how the exact same cognitive engine powers distinct operational workflows across ten diverse business domains.
            </p>
          </div>
          <Link to="/industries">
            <Button variant="outline" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
              View All Verticals
            </Button>
          </Link>
        </div>

        {/* 10 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {INDUSTRIES.map((industry) => (
            <IndustryCard key={industry.slug} industry={industry} />
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. SOLUTIONS PREVIEW (6 Major Solution Categories) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Platform Solutions"
          title="Intelligent Operational Capabilities"
          subtitle="Six unified solution disciplines delivering end-to-end cognitive automation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLATFORM_SOLUTIONS.map((solution: any) => (
            <div
              key={solution.id}
            >
              <SolutionCard solution={solution} />
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. DEMO PREVIEW (Input -> Aether understands -> Recommendation -> Action) */}
      {/* ========================================================================= */}
      <section id="demo-preview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Live Simulation"
          title="See How Aether Transforms in Seconds"
          subtitle="Watch incoming operational signals transition into cognitive understanding and autonomous execution."
        />

        {/* Interactive Demo Sandbox Frame */}
        <Card className="border-slate-700/80 p-0 overflow-hidden shadow-card-hover">
          {/* Top Bar with Industry Scenario Selector */}
          <div className="bg-slate-950 px-4 sm:px-6 py-3.5 border-b border-aether-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              {DEMO_SCENARIOS.map((sc: any, idx: number) => {
                const isSelected = idx === selectedDemoIndex;
                return (
                  <button
                    key={sc.id}
                    onClick={() => {
                      setSelectedDemoIndex(idx);
                      setDemoState('idle');
                    }}
                    className={cn(
                      'px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap border',
                      isSelected
                        ? 'bg-aether-card text-text-primary border-sky-500/60 font-semibold shadow-sm'
                        : 'bg-aether-surface text-text-secondary border-aether-border hover:border-slate-700'
                    )}
                  >
                    <span className="text-sky-400 mr-1.5 font-mono">{sc.industryName}:</span>
                    <span>{sc.badge}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {demoState === 'idle' ? (
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleRunDemo}
                  leftIcon={<Play className="w-3.5 h-3.5 fill-current" />}
                >
                  Simulate
                </Button>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleResetDemo}
                  leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
                >
                  Reset
                </Button>
              )}
            </div>
          </div>

          {/* 4-Stage Flow: Input -> Aether understands -> Recommendation -> Action */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="border-b border-aether-border-subtle pb-4">
              <h3 className="text-lg font-bold text-text-primary">{currentDemo.title}</h3>
              <p className="text-xs sm:text-sm text-text-secondary mt-1">
                {currentDemo.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* 1. Input */}
              <div className="p-4 rounded-xl bg-aether-surface border border-aether-border flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-text-primary flex items-center gap-1.5 mb-2 pb-2 border-b border-aether-border-subtle">
                    <Radio className="w-3.5 h-3.5 text-sky-400" />
                    <span>1. Input Signal</span>
                  </div>
                  <div className="text-[11px] font-mono text-sky-400 mb-1">
                    {currentDemo.incomingSignal.source}
                  </div>
                  <div className="p-2 rounded bg-slate-950/90 text-[11px] font-mono text-slate-300 space-y-1">
                    {Object.entries(currentDemo.incomingSignal.payload).slice(0, 3).map(([k, v]: [string, any]) => (
                      <div key={k} className="line-clamp-1">
                        <span className="text-text-muted">{k}: </span>
                        <span>{String(v)}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-3 text-[10px] text-text-muted font-mono">Status: Ingested</div>
              </div>

              {/* 2. Aether Understands */}
              <div
                className={cn(
                  'p-4 rounded-xl border flex flex-col justify-between transition-all duration-300',
                  demoState === 'idle'
                    ? 'bg-aether-surface/40 border-aether-border opacity-60'
                    : 'bg-aether-surface border-indigo-500/40 shadow-glow-subtle'
                )}
              >
                <div>
                  <div className="text-xs font-semibold text-text-primary flex items-center gap-1.5 mb-2 pb-2 border-b border-aether-border-subtle">
                    <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                    <span>2. Aether Understands</span>
                  </div>
                  {demoState === 'idle' ? (
                    <div className="text-xs text-text-muted font-mono py-4 text-center">
                      Awaiting trigger...
                    </div>
                  ) : (
                    <div className="text-xs text-text-secondary space-y-1.5 animate-fade-in">
                      <div className="text-rose-400 font-medium text-[11px]">Diagnosed Drag:</div>
                      <p className="text-[11px] leading-relaxed line-clamp-3">
                        {currentDemo.cognitiveAnalysis.detectedBottleneck}
                      </p>
                    </div>
                  )}
                </div>
                <div className="mt-3 text-[10px] text-text-muted font-mono">
                  Confidence: {currentDemo.cognitiveAnalysis.confidenceScore}
                </div>
              </div>

              {/* 3. Recommendation */}
              <div
                className={cn(
                  'p-4 rounded-xl border flex flex-col justify-between transition-all duration-300',
                  demoState === 'idle'
                    ? 'bg-aether-surface/40 border-aether-border opacity-60'
                    : 'bg-aether-surface border-amber-500/40 shadow-glow-subtle'
                )}
              >
                <div>
                  <div className="text-xs font-semibold text-text-primary flex items-center gap-1.5 mb-2 pb-2 border-b border-aether-border-subtle">
                    <BrainCircuit className="w-3.5 h-3.5 text-amber-400" />
                    <span>3. Recommendation</span>
                  </div>
                  {demoState === 'idle' ? (
                    <div className="text-xs text-text-muted font-mono py-4 text-center">
                      Awaiting trigger...
                    </div>
                  ) : (
                    <div className="text-xs text-text-secondary space-y-1.5 animate-fade-in">
                      <div className="text-amber-400 font-medium text-[11px]">Prescribed Flow:</div>
                      <p className="text-[11px] leading-relaxed line-clamp-3">
                        {currentDemo.cognitiveAnalysis.recommendedAction}
                      </p>
                    </div>
                  )}
                </div>
                <div className="mt-3 text-[10px] text-text-muted font-mono">Model: Synthesized</div>
              </div>

              {/* 4. Action */}
              <div
                className={cn(
                  'p-4 rounded-xl border flex flex-col justify-between transition-all duration-300',
                  demoState !== 'executed'
                    ? 'bg-aether-surface/40 border-aether-border opacity-60'
                    : 'bg-emerald-500/5 border-emerald-500/40 shadow-glow-subtle'
                )}
              >
                <div>
                  <div className="text-xs font-semibold text-text-primary flex items-center gap-1.5 mb-2 pb-2 border-b border-aether-border-subtle">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>4. Action Executed</span>
                  </div>
                  {demoState !== 'executed' ? (
                    <div className="text-xs text-text-muted font-mono py-4 text-center">
                      {demoState === 'analyzing' ? 'Executing logic...' : 'Pending...'}
                    </div>
                  ) : (
                    <div className="text-xs space-y-1.5 animate-fade-in">
                      <div className="text-emerald-400 font-medium text-[11px]">Outcome Verified:</div>
                      <p className="text-[11px] text-slate-200 leading-relaxed line-clamp-3">
                        {currentDemo.automatedExecution.resultingOutcome}
                      </p>
                    </div>
                  )}
                </div>
                <div className="mt-3 text-[10px] text-emerald-400 font-mono">
                  Time: {currentDemo.automatedExecution.timeElapsed}
                </div>
              </div>
            </div>

            {/* Sandbox CTA */}
            <div className="pt-4 border-t border-aether-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-text-muted">
                Explore interactive simulations across all 10 business domains.
              </span>
              <Link to="/demos">
                <Button variant="primary" size="md" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Explore Interactive Demos
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </section>

      {/* ========================================================================= */}
      {/* 6. IMPACT PREVIEW (Time, Efficiency, Customer Experience, Opportunity, Decision Making, Visibility) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Business Value"
          title="Illustrative Impact Across Six Dimensions"
          subtitle="Modeled operational gains across simulated enterprise environments without increasing headcount or overhead."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {PLATFORM_IMPACT_METRICS.map((item) => (
            <Card key={item.id} className="p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 border border-aether-border flex items-center justify-center">
                    {IMPACT_DIMENSION_ICONS[item.dimension]}
                  </div>
                  <Badge variant="neutral" size="sm" className="font-mono text-[11px]">
                    {item.dimension}
                  </Badge>
                </div>

                <div className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-text-primary mb-1">
                  {item.metric}
                </div>

                <h4 className="text-base font-semibold text-text-primary mb-2">{item.label}</h4>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {item.subtext}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-aether-border-subtle text-xs text-text-muted font-medium">
                {item.summary}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Guided Progression Journey */}
      <JourneyNavigator currentStage="discover" />

      {/* ========================================================================= */}
      {/* 7. FINAL CTA (What Could Aether Do For Your Business? -> Request an Aether Solution) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-aether-card card-gradient-surface border border-slate-700/80 p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-card-hover">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <div className="mb-4">
              <Badge variant="primary" dot size="md">
                Executive Pitch Prototype
              </Badge>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
              What Could Aether Do For Your Business?
            </h2>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl">
              Discover where operational friction is holding back your growth. Request a simulated transformation blueprint tailored to your specific business model.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={openSolutionModal}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto font-semibold shadow-md"
              >
                Request an Aether Solution
              </Button>
              <Link to="/what-is-aether" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  How Aether Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
