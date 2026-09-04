import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { JourneyNavigator } from '../components/common/JourneyNavigator';
import {
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  Workflow,
  Radio,
  CheckCircle2,
  XCircle,
  BrainCircuit,
  Eye,
  TrendingUp,
  Target,
  Zap,
  Activity,
  Compass,
  GitMerge,
  ShieldCheck,
  Building,
  ArrowLeft
} from 'lucide-react';
import { cn } from '../utils/cn';

export const WhatIsAetherPage: React.FC = () => {
  const { openSolutionModal } = useOutletContext<{ openSolutionModal: () => void }>();

  // 6 Stages of the Aether Process
  const AETHER_STAGES = [
    {
      number: '01',
      title: 'Understand the business',
      desc: 'Connects to operational telemetry across schedules, customer inquiries, inventory, and staff rosters to understand real-world business dynamics.',
      badge: 'Context Ingestion',
      accent: 'text-sky-400',
      bgAccent: 'bg-sky-500/10 border-sky-500/25',
    },
    {
      number: '02',
      title: 'Map processes',
      desc: 'Constructs an operational topology mapping how customers, staff, physical resources, and third-party tools interact across every touchpoint.',
      badge: 'Topology Mapping',
      accent: 'text-indigo-400',
      bgAccent: 'bg-indigo-500/10 border-indigo-500/25',
    },
    {
      number: '03',
      title: 'Identify problems',
      desc: 'Pinpoints hidden friction points, capacity dead zones, delayed lead responses, and client churn signals that human operators overlook.',
      badge: 'Friction Diagnosis',
      accent: 'text-rose-400',
      bgAccent: 'bg-rose-500/10 border-rose-500/25',
    },
    {
      number: '04',
      title: 'Discover opportunities',
      desc: 'Identifies high-leverage areas where autonomous orchestration and cognitive decision-making can produce immediate multiplier gains.',
      badge: 'Opportunity Discovery',
      accent: 'text-amber-400',
      bgAccent: 'bg-amber-500/10 border-amber-500/25',
    },
    {
      number: '05',
      title: 'Design intelligent solutions',
      desc: 'Architects and deploys adaptive, multi-agent workflows that execute customer communication, calendar nesting, and task routing autonomously.',
      badge: 'Autonomous Synthesis',
      accent: 'text-teal-400',
      bgAccent: 'bg-teal-500/10 border-teal-500/25',
    },
    {
      number: '06',
      title: 'Measure and improve',
      desc: 'Continuously logs verifiable business ROI, models future demand shifts, and compounds operational efficiency over time.',
      badge: 'Continuous Optimization',
      accent: 'text-emerald-400',
      bgAccent: 'bg-emerald-500/10 border-emerald-500/25',
    },
  ];

  // 5 Core Intelligence Pillars
  const CORE_INTELLIGENCE_PILLARS = [
    {
      id: 'business',
      title: 'Business Intelligence',
      icon: <Building className="w-5 h-5 text-sky-400" />,
      tagline: 'Operational capacity & margin dynamics',
      description:
        'Understands unit economics, asset yield limits, shift margins, and organizational constraints to ensure every automation maximizes net business value.',
      keyAspects: ['Capacity yield modeling', 'Shift margin optimization', 'Resource constraint mapping'],
    },
    {
      id: 'customer',
      title: 'Customer Intelligence',
      icon: <BrainCircuit className="w-5 h-5 text-indigo-400" />,
      tagline: 'Intent velocity & churn interception',
      description:
        'Monitors subtle behavioral deviations, booking frequencies, and purchase trends to proactively detect churn risk and capitalize on high-intent conversion windows.',
      keyAspects: ['Behavioral drift detection', 'Intent scoring & qualification', 'Client lifecycle tracking'],
    },
    {
      id: 'operational',
      title: 'Operational Intelligence',
      icon: <Activity className="w-5 h-5 text-amber-400" />,
      tagline: 'Live floor, staff & inventory balancing',
      description:
        'Maintains real-time awareness of seat turnover, chair availability, lift bay utilization, and inventory burn rates to eliminate idle downtime.',
      keyAspects: ['Dynamic schedule nesting', 'Standby queue backfilling', 'Real-time throughput pacing'],
    },
    {
      id: 'workflow',
      title: 'Workflow Intelligence',
      icon: <Workflow className="w-5 h-5 text-emerald-400" />,
      tagline: 'Adaptive multi-agent execution',
      description:
        'Replaces brittle linear scripts with cognitive multi-agent workflows capable of handling messy exceptions, multi-day journeys, and edge cases autonomously.',
      keyAspects: ['Stateful multi-day orchestration', 'Context-aware exception handling', 'Human-in-the-loop checkpoints'],
    },
    {
      id: 'predictive',
      title: 'Predictive Intelligence',
      icon: <TrendingUp className="w-5 h-5 text-teal-400" />,
      tagline: 'Forward-looking demand forecasting',
      description:
        'Anticipates rush-hour surges, weather-driven cancellations, and perishable replenishment needs days in advance, replacing guesswork with precision.',
      keyAspects: ['Surge volume forecasting', 'Perishable burn prediction', 'Dynamic pricing simulations'],
    },
  ];

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* Breadcrumb Trail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center justify-between py-2 border-b border-aether-border-subtle">
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <Link to="/" className="hover:text-text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-text-primary font-medium">What is Aether?</span>
          </div>

          <Link to="/industries">
            <Button variant="ghost" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />} className="text-xs">
              Explore Industries
            </Button>
          </Link>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative pt-8 sm:pt-16 pb-12 sm:pb-16 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="mb-6 animate-fade-in">
            <Badge variant="primary" dot size="md">
              Philosophy & Intelligence
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary leading-[1.1] max-w-4xl">
            A New Way to Think About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-300">
              Business Automation
            </span>
          </h1>

          <div className="mt-8 max-w-3xl mx-auto space-y-4 text-base sm:text-lg text-text-secondary leading-relaxed font-normal">
            <p className="text-text-primary font-medium text-lg sm:text-xl">
              Traditional automation starts with predefined tasks. Aether starts with understanding the business.
            </p>
            <p>
              Instead of forcing organizations into rigid rule trees that break whenever real-world conditions shift, Aether acts as a cognitive transformation layer—continuously understanding operational reality, diagnosing friction, and executing self-healing workflows.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <Link to="/industries" className="w-full sm:w-auto">
              <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />} className="w-full sm:w-auto shadow-md">
                Explore 10 Vertical Models
              </Button>
            </Link>
            <Link to="/demos" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                Test Live Workflows
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. THE FUNDAMENTAL SHIFT: TRADITIONAL VS AETHER */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Architectural Comparison"
          title="Why Legacy Automation Breaks Down"
          subtitle="Fixed rule trees fail the moment customer behaviors or physical constraints diverge from expectations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Traditional Automation Card */}
          <Card className="p-6 sm:p-8 border-rose-900/30 bg-gradient-to-b from-rose-950/10 to-aether-card relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-rose-900/20 mb-6">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm tracking-wide uppercase">
                <XCircle className="w-4 h-4" />
                <span>Traditional Automation</span>
              </div>
              <Badge variant="warning" size="sm" className="font-mono text-[10px]">
                Rigid & Fragile
              </Badge>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-xs font-mono font-bold text-rose-400 shrink-0">
                  01
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-primary">Predefined Task</h4>
                  <p className="text-xs text-text-muted">Assumes perfect, unchanging human workflows.</p>
                </div>
              </div>

              <div className="pl-4 text-text-muted text-xs font-mono">↓</div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-xs font-mono font-bold text-rose-400 shrink-0">
                  02
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-primary">Hard-Coded Rule Tree</h4>
                  <p className="text-xs text-text-muted">Breaks when an edge case or exception occurs.</p>
                </div>
              </div>

              <div className="pl-4 text-text-muted text-xs font-mono">↓</div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-xs font-mono font-bold text-rose-400 shrink-0">
                  03
                </div>
                <div>
                  <h4 className="text-sm font-bold text-text-primary">Static Script Execution</h4>
                  <p className="text-xs text-text-muted">Zero awareness of live capacity, margins, or context.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-slate-950/60 border border-rose-900/30 text-xs text-rose-300 leading-relaxed">
              <strong>The Problem:</strong> When a customer cancels 10 minutes prior, or requests a custom alteration, static rules crash or send irrelevant auto-replies, forcing staff back to manual firefighting.
            </div>
          </Card>

          {/* Aether Cognitive Layer Card */}
          <Card className="p-6 sm:p-8 border-sky-500/40 bg-gradient-to-b from-sky-950/20 to-aether-card relative overflow-hidden shadow-glow-subtle">
            <div className="flex items-center justify-between pb-4 border-b border-sky-500/20 mb-6">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-sm tracking-wide uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Aether Cognitive Architecture</span>
              </div>
              <Badge variant="primary" size="sm" className="font-mono text-[10px]">
                Adaptive & Context-Aware
              </Badge>
            </div>

            <div className="space-y-3">
              {[
                { num: '01', title: 'Business Context Ingestion', desc: 'Ingests schedules, menus, lead channels, and staff capacity.' },
                { num: '02', title: 'Continuous Understanding', desc: 'Synthesizes real-time state vs. historical baselines.' },
                { num: '03', title: 'Problem & Drag Diagnosis', desc: 'Locates revenue leaks, calendar gaps, and churn risk.' },
                { num: '04', title: 'Opportunity Discovery', desc: 'Identifies high-margin actions & VIP rebooking moments.' },
                { num: '05', title: 'Autonomous Solution Orchestration', desc: 'Dispatches multi-channel execution with zero latency.' },
                { num: '06', title: 'Closed-Loop Optimization', desc: 'Compounds operational accuracy and ROI over time.' },
              ].map((step) => (
                <div key={step.num} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-xs font-mono font-bold text-sky-400 shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-text-primary">{step.title}</h4>
                    <p className="text-[11px] text-text-secondary">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 rounded-xl bg-slate-950/80 border border-sky-500/30 text-xs text-sky-300 leading-relaxed">
              <strong>The Advantage:</strong> Aether dynamically re-routes schedules, drafts contextual responses, and optimizes resources without human hand-holding.
            </div>
          </Card>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. THE 6 STAGES OF THE AETHER PROCESS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Transformation Lifecycle"
          title="The 6 Stages of Aether Intelligence"
          subtitle="How Aether systematically transforms complex business operations into resilient, self-healing workflows."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AETHER_STAGES.map((stage) => (
            <Card key={stage.number} className="p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={cn('text-2xl font-mono font-extrabold', stage.accent)}>
                    {stage.number}
                  </span>
                  <Badge variant="neutral" size="sm" className="font-mono text-[10px]">
                    {stage.badge}
                  </Badge>
                </div>

                <h3 className="text-lg font-bold text-text-primary mb-2">{stage.title}</h3>
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                  {stage.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-aether-border-subtle flex items-center justify-between text-[11px] text-text-muted">
                <span>Phase Status</span>
                <span className="text-emerald-400 font-mono">Continuous</span>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. CORE INTELLIGENCE PILLARS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Cognitive Taxonomy"
          title="Five Core Dimensions of Intelligence"
          subtitle="A unified intelligence stack architected to eliminate operational drag across the entire business lifecycle."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_INTELLIGENCE_PILLARS.map((pillar, idx) => (
            <Card
              key={pillar.id}
              className={cn(
                'p-6 sm:p-7 flex flex-col justify-between',
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              )}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-aether-border flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-primary">{pillar.title}</h3>
                    <span className="text-xs text-sky-400 font-mono">{pillar.tagline}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <div className="space-y-2 pt-4 border-t border-aether-border-subtle">
                  <div className="text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-2">
                    Core Cognitive Functions
                  </div>
                  {pillar.keyAspects.map((aspect, i) => (
                    <div key={i} className="text-xs text-text-secondary flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                      <span>{aspect}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. GUIDED JOURNEY NAVIGATOR */}
      {/* ========================================================================= */}
      <JourneyNavigator currentStage="discover" />

      {/* ========================================================================= */}
      {/* 6. FINAL MESSAGE & CTA */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-aether-card card-gradient-surface border border-slate-700/80 p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-card-hover">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <div className="mb-4">
              <Badge variant="primary" dot size="md">
                The Aether Vision
              </Badge>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
              Aether is not one fixed automation tool.
            </h2>

            <p className="mt-4 text-base sm:text-xl text-sky-300 font-medium leading-relaxed max-w-2xl">
              It is a framework for discovering and implementing intelligent business solutions.
            </p>

            <p className="mt-3 text-xs sm:text-sm text-text-secondary leading-relaxed max-w-xl">
              Explore how this exact cognitive transformation architecture applies across ten major modern business verticals.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
              <Link to="/industries" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />} className="w-full sm:w-auto shadow-md font-semibold">
                  Explore 10 Verticals
                </Button>
              </Link>
              <Button
                variant="secondary"
                size="lg"
                onClick={openSolutionModal}
                className="w-full sm:w-auto"
              >
                Request Custom Briefing
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
