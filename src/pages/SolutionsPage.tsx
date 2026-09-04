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
  ArrowLeft
} from 'lucide-react';
import { cn } from '../utils/cn';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'AI Intelligence': <BrainCircuit className="w-5 h-5" />,
  'Customer Intelligence': <Users className="w-5 h-5" />,
  'Workflow Automation': <Workflow className="w-5 h-5" />,
  'Business Intelligence': <TrendingUp className="w-5 h-5" />,
  'Communication Intelligence': <MessageSquare className="w-5 h-5" />,
};

const CATEGORY_THEMES: Record<string, { badge: string; border: string; text: string; bg: string }> = {
  'AI Intelligence': { badge: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400', border: 'border-cyan-500/40', text: 'text-cyan-400', bg: 'from-cyan-950/30' },
  'Customer Intelligence': { badge: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400', border: 'border-emerald-500/40', text: 'text-emerald-400', bg: 'from-emerald-950/30' },
  'Workflow Automation': { badge: 'bg-indigo-500/10 border-indigo-500/20 text-indigo-400', border: 'border-indigo-500/40', text: 'text-indigo-400', bg: 'from-indigo-950/30' },
  'Business Intelligence': { badge: 'bg-amber-500/10 border-amber-500/20 text-amber-400', border: 'border-amber-500/40', text: 'text-amber-400', bg: 'from-amber-950/30' },
  'Communication Intelligence': { badge: 'bg-rose-500/10 border-rose-500/20 text-rose-400', border: 'border-rose-500/40', text: 'text-rose-400', bg: 'from-rose-950/30' },
};

export const SolutionsPage: React.FC = () => {
  const { openSolutionModal } = useOutletContext<{ openSolutionModal: () => void }>();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedSolution, setSelectedSolution] = useState<SolutionItemDetail | null>(null);

  const categories = ['all', 'AI Intelligence', 'Customer Intelligence', 'Workflow Automation', 'Business Intelligence', 'Communication Intelligence'];

  const filteredCategories = PLATFORM_SOLUTION_CATEGORIES.filter((cat) => {
    if (activeCategory === 'all') return true;
    return cat.category === activeCategory;
  });

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Breadcrumb Trail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center justify-between py-2 border-b border-aether-border-subtle">
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <Link to="/" className="hover:text-text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-text-primary font-medium">Platform Solutions</span>
          </div>

          <Link to="/demos">
            <Button variant="ghost" size="sm" rightIcon={<ArrowRight className="w-3.5 h-3.5" />} className="text-xs">
              Central Demo Hub
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <Hero
        badge="Enterprise Platform Solutions"
        title={
          <>
            Modular Cognitive Capabilities for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-300">
              Autonomous Operations
            </span>
          </>
        }
        subtitle="Explore Aether's 5 core operational intelligence disciplines. Each module solves specific operational bottlenecks and integrates seamlessly across your business infrastructure."
        primaryAction={{
          label: 'Request Architecture Scope',
          onClick: openSolutionModal,
        }}
        secondaryAction={{
          label: 'Explore Central Demo Hub',
          onClick: () => navigate('/demos'),
        }}
      />


      {/* Category Pill Switcher */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  'px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all duration-200 border flex items-center gap-2',
                  isSelected
                    ? 'bg-slate-800 text-text-primary border-sky-500/50 shadow-sm'
                    : 'bg-slate-900/40 text-text-secondary border-slate-800 hover:border-slate-700 hover:text-text-primary'
                )}
              >
                {cat !== 'all' && (
                  <span className="text-xs">{CATEGORY_ICONS[cat]}</span>
                )}
                <span>{cat === 'all' ? 'All 5 Solution Pillars' : cat}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Categorized Solutions Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {filteredCategories.map((catGroup) => {
          const theme = CATEGORY_THEMES[catGroup.category] || CATEGORY_THEMES['AI Intelligence'];

          return (
            <div key={catGroup.id} className="space-y-6">
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center border', theme.badge)}>
                    {CATEGORY_ICONS[catGroup.category]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold tracking-wider text-text-muted uppercase">
                        SOLUTIONS PILLAR
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

              {/* Solution Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {catGroup.solutions.map((sol) => (
                  <Card
                    key={sol.id}
                    className="p-5 sm:p-6 flex flex-col justify-between h-full bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:shadow-card-hover transition-all group cursor-pointer"
                    onClick={() => setSelectedSolution(sol)}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className={cn('text-[10px] font-mono font-bold uppercase tracking-wider', theme.text)}>
                          {catGroup.category}
                        </span>
                        <ChevronRight className="w-4 h-4 text-text-muted group-hover:text-text-primary group-hover:translate-x-0.5 transition-all" />
                      </div>

                      <h3 className="text-base font-bold text-text-primary group-hover:text-sky-300 transition-colors">
                        {sol.name}
                      </h3>

                      <p className="text-xs text-text-secondary leading-relaxed line-clamp-3">
                        {sol.whatItDoes}
                      </p>

                      {/* Problems It Solves Preview */}
                      <div className="pt-2 border-t border-slate-800 space-y-1.5">
                        <span className="text-[10px] font-semibold text-rose-400 uppercase tracking-wider block">
                          Key Problem Solved
                        </span>
                        <p className="text-xs text-text-muted line-clamp-2">
                          {sol.problemsItSolves[0]}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 pt-3 border-t border-slate-800/80 space-y-2">
                      <div className="flex flex-wrap gap-1">
                        {sol.applicableIndustries.slice(0, 2).map((ind, idx) => (
                          <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-text-muted">
                            {ind.split(' & ')[0]}
                          </span>
                        ))}
                        {sol.applicableIndustries.length > 2 && (
                          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800/60 text-text-muted">
                            +{sol.applicableIndustries.length - 2}
                          </span>
                        )}
                      </div>

                      <div className="text-[11px] font-mono text-emerald-400 font-semibold truncate pt-1">
                        ★ {sol.impactMetric}
                      </div>
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
                <span className="text-[10px] uppercase font-mono text-text-muted">Solution Pillar</span>
                <div className="text-sm font-bold text-sky-400">{selectedSolution.category}</div>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-mono text-text-muted">Measured Benchmark</span>
                <div className="text-xs font-bold font-mono text-emerald-400">{selectedSolution.impactMetric}</div>
              </div>
            </div>

            {/* What It Does */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-sky-400 font-mono">
                1. What It Does
              </h4>
              <p className="text-sm text-text-secondary leading-relaxed">
                {selectedSolution.whatItDoes}
              </p>
            </div>

            {/* Problems It Solves */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-rose-400 font-mono">
                2. Operational Problems It Solves
              </h4>
              <div className="space-y-1.5">
                {selectedSolution.problemsItSolves.map((prob, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-text-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0 mt-1.5" />
                    <span>{prob}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Capabilities */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-emerald-400 font-mono">
                3. Technical Capabilities & Algorithms
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedSolution.keyCapabilities.map((cap, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-text-primary flex items-center gap-2 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applicable Industries */}
            <div className="space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-400 font-mono">
                4. Applicable Industry Verticals
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedSolution.applicableIndustries.map((ind, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-xs text-text-primary font-mono">
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-slate-800 flex justify-end gap-3">
              <Button variant="secondary" onClick={() => setSelectedSolution(null)}>
                Close
              </Button>
              <Button variant="primary" onClick={openSolutionModal} rightIcon={<ArrowRight className="w-4 h-4" />}>
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
            <h4 className="text-sm font-semibold text-text-primary mb-1">Universal Connector API</h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              Standardized two-way ingestion adapters for POS, CRM, ERP, and scheduling software with zero disruption.
            </p>
          </Card>

          <Card className="p-6">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-semibold text-text-primary mb-1">Asynchronous Event Bus</h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              Processes high-frequency operational telemetry with sub-50ms latency across multi-location fleets.
            </p>
          </Card>

          <Card className="p-6">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-semibold text-text-primary mb-1">Enterprise Guardrails</h4>
            <p className="text-xs text-text-secondary leading-relaxed">
              Strict deterministic bounds ensuring all autonomous actions comply with company rules and human review gates.
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
