import React, { useState } from 'react';
import { useOutletContext, Link, useNavigate } from 'react-router-dom';
import { Hero } from '../components/common/Hero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { CTASection } from '../components/common/CTASection';
import { JourneyNavigator } from '../components/common/JourneyNavigator';
import { PLATFORM_SOLUTION_CATEGORIES, SolutionItemDetail } from '../data/solutions';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Modal } from '../components/ui/Modal';
import {
  BrainCircuit,
  Users,
  Workflow,
  TrendingUp,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Layers,
  ChevronRight,
  ShieldCheck,
  Cpu,
  Building2,
  UtensilsCrossed,
  Dumbbell,
  Scissors,
  Coffee,
  ShoppingBag,
  Hotel,
  Stethoscope,
  Wrench,
  GraduationCap,
} from 'lucide-react';
import { cn } from '../utils/cn';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'AI Intelligence': <BrainCircuit className="w-5 h-5" />,
  'Customer Intelligence': <Users className="w-5 h-5" />,
  'Operational Intelligence': <Cpu className="w-5 h-5" />,
  'Workflow Automation': <Workflow className="w-5 h-5" />,
  'Business Intelligence': <TrendingUp className="w-5 h-5" />,
  'Communication Intelligence': <MessageSquare className="w-5 h-5" />,
};

const CATEGORY_THEMES: Record<string, { badge: string; border: string; text: string; bg: string }> =
  {
    'AI Intelligence': {
      badge: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400',
      border: 'border-cyan-500/40',
      text: 'text-cyan-400',
      bg: 'from-cyan-950/30',
    },
    'Customer Intelligence': {
      badge: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
      border: 'border-emerald-500/40',
      text: 'text-emerald-400',
      bg: 'from-emerald-950/30',
    },
    'Operational Intelligence': {
      badge: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
      border: 'border-amber-500/40',
      text: 'text-amber-400',
      bg: 'from-amber-950/30',
    },
    'Workflow Automation': {
      badge: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400',
      border: 'border-indigo-500/40',
      text: 'text-indigo-400',
      bg: 'from-indigo-950/30',
    },
    'Business Intelligence': {
      badge: 'bg-sky-500/10 border-sky-500/20 text-sky-400',
      border: 'border-sky-500/40',
      text: 'text-sky-400',
      bg: 'from-sky-950/30',
    },
    'Communication Intelligence': {
      badge: 'bg-rose-500/10 border-rose-500/20 text-rose-400',
      border: 'border-rose-500/40',
      text: 'text-rose-400',
      bg: 'from-rose-950/30',
    },
  };

const INDUSTRY_ICONS: Record<string, React.ReactNode> = {
  'real-estate': <Building2 className="w-3.5 h-3.5" />,
  restaurants: <UtensilsCrossed className="w-3.5 h-3.5" />,
  gyms: <Dumbbell className="w-3.5 h-3.5" />,
  salons: <Scissors className="w-3.5 h-3.5" />,
  cafes: <Coffee className="w-3.5 h-3.5" />,
  retail: <ShoppingBag className="w-3.5 h-3.5" />,
  hotels: <Hotel className="w-3.5 h-3.5" />,
  healthcare: <Stethoscope className="w-3.5 h-3.5" />,
  automotive: <Wrench className="w-3.5 h-3.5" />,
  education: <GraduationCap className="w-3.5 h-3.5" />,
};

export const SolutionsPage: React.FC = () => {
  const { openSolutionModal } = useOutletContext<{ openSolutionModal: () => void }>();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSolution, setSelectedSolution] = useState<SolutionItemDetail | null>(null);

  const categories = [
    'all',
    'AI Intelligence',
    'Customer Intelligence',
    'Operational Intelligence',
    'Workflow Automation',
    'Business Intelligence',
    'Communication Intelligence',
  ];

  const filteredCategories = PLATFORM_SOLUTION_CATEGORIES.filter((cat) => {
    if (activeCategory === 'all') return true;
    return cat.category === activeCategory;
  });

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Breadcrumb & Navigation Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center justify-between py-2 border-b border-aether-border-subtle">
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <Link to="/" className="hover:text-text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-text-primary font-medium">Platform Solutions</span>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/industries">
              <Button
                variant="ghost"
                size="sm"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                className="text-xs"
              >
                Explore 10 Industries
              </Button>
            </Link>
            <Link to="/demos">
              <Button
                variant="ghost"
                size="sm"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                className="text-xs"
              >
                Central Demo Hub
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero: Framing Solutions ("What can Aether do?") vs Industries ("Where can Aether work?") */}
      <Hero
        badge="Modular Solution Architecture"
        title={
          <>
            What Can Aether Do?{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-300">
              Platform Solutions
            </span>
          </>
        }
        subtitle="Explore Aether's 6 operational intelligence disciplines. Solutions answer 'What can Aether do?' while our 10 industry experiences show 'Where can Aether work?'—two connected views of the exact same cognitive platform."
        primaryAction={{
          label: 'Request Architecture Scope',
          onClick: openSolutionModal,
        }}
        secondaryAction={{
          label: 'Explore 10 Industries',
          onClick: () => navigate('/industries'),
        }}
      />

      {/* Two Views Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-sky-950/40 via-slate-900 to-indigo-950/40 border border-sky-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xs font-mono font-semibold text-sky-300 uppercase tracking-wider">
                Two Views of One Cognitive System
              </div>
              <p className="text-xs text-text-secondary">
                <strong className="text-text-primary">Solutions</strong> describe our modular
                capabilities, while <strong className="text-text-primary">Industries</strong>{' '}
                demonstrate their real-world application in specialized operational journeys.
              </p>
            </div>
          </div>

          <Link to="/industries" className="shrink-0">
            <Button
              variant="outline"
              size="sm"
              rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              className="text-xs"
            >
              View Industry Verticals
            </Button>
          </Link>
        </div>
      </section>

      {/* Category Switcher Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 border flex items-center gap-2',
                  isSelected
                    ? 'bg-slate-800 text-text-primary border-sky-500/50 shadow-sm'
                    : 'bg-slate-900/40 text-text-secondary border-slate-800 hover:border-slate-700 hover:text-text-primary'
                )}
              >
                {cat !== 'all' && <span className="text-xs">{CATEGORY_ICONS[cat]}</span>}
                <span>{cat === 'all' ? 'All 6 Solution Disciplines' : cat}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Categorized Solutions List / Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredCategories.map((catGroup) => {
          const theme = CATEGORY_THEMES[catGroup.category] || CATEGORY_THEMES['AI Intelligence'];

          return (
            <div key={catGroup.id} className="space-y-6">
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div
                    className={cn(
                      'w-10 h-10 rounded-xl flex items-center justify-center border',
                      theme.badge
                    )}
                  >
                    {CATEGORY_ICONS[catGroup.category]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold tracking-wider text-text-muted uppercase">
                        SOLUTION DISCIPLINE
                      </span>
                      <Badge variant="neutral" size="sm" className="text-[10px] font-mono">
                        {catGroup.solutions.length} Capabilities
                      </Badge>
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
                      {catGroup.category}
                    </h2>
                  </div>
                </div>
                <p className="text-xs text-text-secondary max-w-md leading-relaxed sm:text-right">
                  {catGroup.description}
                </p>
              </div>

              {/* Solution Cards - Connected with Direct Industry Exploration Links */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {catGroup.solutions.map((sol) => (
                  <Card
                    key={sol.id}
                    className="p-6 flex flex-col justify-between h-full bg-slate-900/80 border-slate-800 hover:border-slate-700 transition-all group"
                  >
                    <div className="space-y-5">
                      {/* Top Header */}
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span
                            className={cn(
                              'text-[10px] font-mono font-bold uppercase tracking-wider block mb-1',
                              theme.text
                            )}
                          >
                            {catGroup.category}
                          </span>
                          <h3 className="text-lg font-bold text-text-primary group-hover:text-sky-300 transition-colors">
                            {sol.name}
                          </h3>
                        </div>
                        <Badge
                          variant="success"
                          size="sm"
                          className="font-mono text-[10px] shrink-0"
                        >
                          {sol.impactMetric}
                        </Badge>
                      </div>

                      {/* 1. What It Does */}
                      <div className="space-y-1.5">
                        <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-sky-400">
                          What It Does
                        </div>
                        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                          {sol.whatItDoes}
                        </p>
                      </div>

                      {/* 2. What Problem It Addresses */}
                      <div className="p-3.5 rounded-xl bg-slate-950/80 border border-rose-500/20 space-y-1.5">
                        <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-rose-400">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>Problem It Addresses</span>
                        </div>
                        <p className="text-xs text-text-muted leading-relaxed">
                          {sol.problemItAddresses}
                        </p>
                      </div>

                      {/* 3. Example Application */}
                      <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                        <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-emerald-400">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>Example Application</span>
                        </div>
                        <div className="text-xs space-y-1 text-text-secondary">
                          <p>
                            <strong className="text-text-primary">Scenario:</strong>{' '}
                            {sol.exampleApplication.scenario}
                          </p>
                          <p>
                            <strong className="text-sky-300">Action:</strong>{' '}
                            {sol.exampleApplication.action}
                          </p>
                          <p>
                            <strong className="text-emerald-400">Outcome:</strong>{' '}
                            {sol.exampleApplication.outcome}
                          </p>
                        </div>
                      </div>

                      {/* 4. Which Industries Can Use It & Explore Links */}
                      <div className="space-y-2 pt-2 border-t border-slate-800/80">
                        <div className="flex items-center justify-between">
                          <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-text-muted">
                            Applicable Industries:
                          </span>
                          <span className="text-[10px] font-mono text-sky-400">
                            {sol.applicableIndustries.length} Verticals
                          </span>
                        </div>

                        {/* Interactive Industry Exploration Buttons */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                          {sol.applicableIndustries.map((ind) => (
                            <Link
                              key={ind.slug}
                              to={`/industries/${ind.slug}`}
                              className="p-2 rounded-lg bg-slate-950/90 border border-slate-800 hover:border-sky-500/50 hover:bg-slate-800/60 transition-all flex items-center justify-between group/link"
                            >
                              <div className="flex items-center gap-2 min-w-0">
                                <span className="text-text-muted group-hover/link:text-sky-400 transition-colors">
                                  {INDUSTRY_ICONS[ind.slug] || (
                                    <ChevronRight className="w-3.5 h-3.5" />
                                  )}
                                </span>
                                <span className="text-xs font-medium text-text-primary truncate">
                                  {ind.name}
                                </span>
                              </div>
                              <span className="text-[10px] font-mono font-semibold text-sky-400 group-hover/link:translate-x-0.5 transition-transform flex items-center gap-0.5 shrink-0 ml-2">
                                Explore <ArrowRight className="w-3 h-3" />
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Footer Deep-Dive Trigger */}
                    <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedSolution(sol)}
                        className="text-xs font-mono font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
                      >
                        <span>View Technical Architecture</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={openSolutionModal}
                        className="text-xs"
                      >
                        Request Solution
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Deep Dive Solution Detail Modal */}
      {selectedSolution && (
        <Modal
          isOpen={!!selectedSolution}
          onClose={() => setSelectedSolution(null)}
          title={selectedSolution.name}
          description={selectedSolution.tagline}
          maxWidth="2xl"
        >
          <div className="space-y-6 pt-2">
            {/* Category & Impact Banner */}
            <div className="p-4 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase font-mono text-text-muted">
                  Solution Discipline
                </span>
                <div className="text-sm font-bold text-sky-400">{selectedSolution.category}</div>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-mono text-text-muted">
                  Illustrative Benchmark (Simulated Data)
                </span>
                <div className="text-xs font-bold font-mono text-emerald-400">
                  {selectedSolution.impactMetric}
                </div>
              </div>
            </div>

            {/* 1. What It Does */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-sky-400 font-mono">
                1. What It Does
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {selectedSolution.whatItDoes}
              </p>
            </div>

            {/* 2. Problem It Addresses */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-rose-400 font-mono">
                2. Operational Problems It Solves
              </h4>
              <div className="p-3 rounded-lg bg-slate-950 border border-rose-500/20 text-xs text-text-secondary mb-2">
                <strong className="text-text-primary">Primary Focus:</strong>{' '}
                {selectedSolution.problemItAddresses}
              </div>
              <div className="space-y-1.5">
                {selectedSolution.problemsItSolves.map((prob, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                    <span>{prob}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Technical Capabilities & Algorithms */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 font-mono">
                3. Technical Capabilities & Algorithms
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedSolution.keyCapabilities.map((cap, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-text-primary flex items-center gap-2 font-mono"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Example Application */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-400 font-mono">
                4. Example Scenario & Outcome
              </h4>
              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5 text-xs">
                <p>
                  <strong className="text-text-primary">Operational Scenario:</strong>{' '}
                  {selectedSolution.exampleApplication.scenario}
                </p>
                <p>
                  <strong className="text-sky-300">Aether Action:</strong>{' '}
                  {selectedSolution.exampleApplication.action}
                </p>
                <p>
                  <strong className="text-emerald-400">Illustrative Outcome:</strong>{' '}
                  {selectedSolution.exampleApplication.outcome}
                </p>
              </div>
            </div>

            {/* 5. Applicable Industries & Direct Explore Links */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-400 font-mono">
                5. Applicable Industry Implementations
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedSolution.applicableIndustries.map((ind) => (
                  <Link
                    key={ind.slug}
                    to={`/industries/${ind.slug}`}
                    onClick={() => setSelectedSolution(null)}
                    className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-sky-500/50 flex flex-col justify-between gap-1 group/btn transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-text-primary group-hover/btn:text-sky-400 transition-colors">
                        {ind.name}
                      </span>
                      <span className="text-[10px] font-mono text-sky-400 flex items-center gap-0.5">
                        {ind.buttonLabel} <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                    <p className="text-[11px] text-text-muted leading-tight">{ind.useCase}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
              <Button variant="secondary" onClick={() => setSelectedSolution(null)}>
                Close
              </Button>
              <Button
                variant="primary"
                onClick={openSolutionModal}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Request Solution Briefing
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* Cross-Platform Integration Architecture */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Integration Simplicity"
          title="Designed for Frictionless Overlay"
          subtitle="Aether connects to your existing POS, CRM, EHR, DMS, PMS, and LMS without migration overhead."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Card className="p-6">
            <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-3">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-semibold text-text-primary mb-1">
              Universal Connector API
            </h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              Standardized two-way ingestion adapters for POS, CRM, ERP, and scheduling software
              with zero disruption.
            </p>
          </Card>

          <Card className="p-6">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-semibold text-text-primary mb-1">Asynchronous Event Bus</h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              Processes high-frequency operational telemetry with sub-50ms latency across
              multi-location fleets.
            </p>
          </Card>

          <Card className="p-6">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-semibold text-text-primary mb-1">Enterprise Guardrails</h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              Strict deterministic bounds ensuring all autonomous actions comply with company rules
              and human review gates.
            </p>
          </Card>
        </div>
      </section>

      {/* Guided Progression Journey */}
      <JourneyNavigator currentStage="discover" />

      {/* CTA */}
      <CTASection
        badge="Next Stage: Live Demonstration"
        title="Deploy Aether’s solution architecture in your environment"
        description="Let our architects model your workflows and show you the exact efficiency gains available to your team."
        primaryButtonText="Request Solution Architecture"
        secondaryButtonText="Explore 10 Verticals"
        onPrimaryClick={openSolutionModal}
        secondaryTo="/industries"
      />
    </div>
  );
};
