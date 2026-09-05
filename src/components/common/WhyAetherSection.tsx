import React from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { SectionHeader } from '../ui/SectionHeader';
import {
  BrainCircuit,
  Layers,
  Search,
  Sparkles,
  Zap,
  TrendingUp,
  XCircle,
  CheckCircle2,
} from 'lucide-react';
import { cn } from '../../utils/cn';

interface WhyAetherSectionProps {
  className?: string;
  showSectionHeader?: boolean;
}

export const WhyAetherSection: React.FC<WhyAetherSectionProps> = ({
  className,
  showSectionHeader = true,
}) => {
  const SIX_PRINCIPLES = [
    {
      num: '01',
      title: 'Understand',
      tagline: 'Operational Context First',
      description: 'Ingests real-time business signals, schedules, customer interactions, and resource constraints without disrupting daily operations.',
      icon: <BrainCircuit className="w-5 h-5 text-sky-400" />,
      accent: 'border-sky-500/30 text-sky-400 bg-sky-500/10',
    },
    {
      num: '02',
      title: 'Connect',
      tagline: 'Unified Intelligence Layer',
      description: 'Bridges fragmented software tools—POS, CRM, PMS, EHR, and ERP—into a coherent, live intelligence stream.',
      icon: <Layers className="w-5 h-5 text-indigo-400" />,
      accent: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10',
    },
    {
      num: '03',
      title: 'Identify',
      tagline: 'Friction & Leak Diagnosis',
      description: 'Pinpoints hidden bottlenecks, unutilized capacity, delayed lead response, and silent customer churn before margins suffer.',
      icon: <Search className="w-5 h-5 text-rose-400" />,
      accent: 'border-rose-500/30 text-rose-400 bg-rose-500/10',
    },
    {
      num: '04',
      title: 'Recommend',
      tagline: 'Contextual Action Guidance',
      description: 'Synthesizes mathematically sound, high-margin next-best-actions tailored to current operational load.',
      icon: <Sparkles className="w-5 h-5 text-amber-400" />,
      accent: 'border-amber-500/30 text-amber-400 bg-amber-500/10',
    },
    {
      num: '05',
      title: 'Act',
      tagline: 'Autonomous Execution',
      description: 'Executes communication, calendar packing, inventory alerts, and triage workflows with deterministic guardrails.',
      icon: <Zap className="w-5 h-5 text-teal-400" />,
      accent: 'border-teal-500/30 text-teal-400 bg-teal-500/10',
    },
    {
      num: '06',
      title: 'Optimize',
      tagline: 'Compounding Business Impact',
      description: 'Continuously measures realized outcomes, refines predictive models, and compounds efficiency over time.',
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      accent: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
    },
  ];

  return (
    <section className={cn('space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)}>
      {showSectionHeader && (
        <SectionHeader
          badge="Why Aether?"
          title="Traditional Automation Starts with a Task. Aether Starts with the Business."
          subtitle="Most tools force businesses into rigid, predefined rule trees. Aether is designed around how your specific business actually operates."
        />
      )}

      {/* 1. THE CORE ARCHITECTURAL COMPARISON */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Traditional Approach */}
        <Card className="p-6 sm:p-8 bg-slate-950/70 border-rose-900/30 relative flex flex-col justify-between overflow-hidden">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-rose-900/20 mb-6">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs sm:text-sm tracking-wide uppercase font-mono">
                <XCircle className="w-4 h-4" />
                <span>Traditional Approach</span>
              </div>
              <Badge variant="warning" size="sm" className="font-mono text-[10px]">
                Task-Centric & Fragile
              </Badge>
            </div>

            {/* Pipeline Steps */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 mb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono font-semibold">
                <div className="px-3 py-2 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 w-full sm:w-auto text-center">
                  Task
                </div>
                <div className="hidden sm:block text-text-muted">→</div>
                <div className="px-3 py-2 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 w-full sm:w-auto text-center">
                  Rule
                </div>
                <div className="hidden sm:block text-text-muted">→</div>
                <div className="px-3 py-2 rounded-lg bg-rose-500/10 border border-rose-500/20 text-rose-300 w-full sm:w-auto text-center">
                  Automation
                </div>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-text-secondary leading-relaxed">
              <p>
                <strong className="text-text-primary">Starts with an isolated chore:</strong> A single repetitive task (e.g. sending a generic email or copying spreadsheet data) is hard-coded into an if-then rule.
              </p>
              <p>
                <strong className="text-rose-300">The Problem:</strong> Has zero awareness of operational state, capacity limits, customer history, or changing margins. The moment an exception occurs or a schedule changes, static rules break, forcing staff back to manual firefighting.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-rose-900/20 text-[11px] font-mono text-rose-400/90 flex items-center gap-1.5">
            <span>Result:</span> Rigid scripts that break when real-world conditions shift.
          </div>
        </Card>

        {/* Aether Approach */}
        <Card className="p-6 sm:p-8 bg-gradient-to-b from-sky-950/20 via-slate-900/90 to-slate-950 border-sky-500/40 relative flex flex-col justify-between overflow-hidden shadow-glow-subtle">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-sky-500/20 mb-6">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-xs sm:text-sm tracking-wide uppercase font-mono">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Aether Approach</span>
              </div>
              <Badge variant="primary" size="sm" className="font-mono text-[10px]">
                Business-First & Adaptive
              </Badge>
            </div>

            {/* Pipeline Steps */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-sky-500/30 mb-6 overflow-x-auto scrollbar-none">
              <div className="flex items-center gap-2 text-[11px] font-mono font-bold whitespace-nowrap min-w-max">
                <span className="px-2.5 py-1.5 rounded-lg bg-sky-500/20 border border-sky-500/40 text-sky-300">
                  Business
                </span>
                <span className="text-sky-400/60">→</span>
                <span className="px-2.5 py-1.5 rounded-lg bg-slate-800 text-text-primary border border-slate-700">
                  Understand
                </span>
                <span className="text-sky-400/60">→</span>
                <span className="px-2.5 py-1.5 rounded-lg bg-slate-800 text-text-primary border border-slate-700">
                  Identify Problem
                </span>
                <span className="text-sky-400/60">→</span>
                <span className="px-2.5 py-1.5 rounded-lg bg-slate-800 text-text-primary border border-slate-700">
                  Discover Opportunity
                </span>
                <span className="text-sky-400/60">→</span>
                <span className="px-2.5 py-1.5 rounded-lg bg-slate-800 text-text-primary border border-slate-700">
                  Design Solution
                </span>
                <span className="text-sky-400/60">→</span>
                <span className="px-2.5 py-1.5 rounded-lg bg-slate-800 text-text-primary border border-slate-700">
                  Recommend Action
                </span>
                <span className="text-sky-400/60">→</span>
                <span className="px-2.5 py-1.5 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300">
                  Optimize
                </span>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-text-secondary leading-relaxed">
              <p>
                <strong className="text-text-primary">Starts with the entire operating reality:</strong> Continuously understands customer intent, provider capacity, and margin dynamics before formulating action.
              </p>
              <p>
                <strong className="text-sky-300">The Advantage:</strong> Synthesizes context-aware recommendations, self-heals around real-world disruptions (cancellations, late arrivals, inventory stockouts), and measures actual business ROI.
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-sky-500/20 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
            <span>Result:</span> Resilient operational intelligence that compounds over time.
          </div>
        </Card>
      </div>

      {/* 2. THE SIX PRINCIPLES */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto">
          <Badge variant="neutral" size="sm" className="font-mono text-xs mb-2">
            The 6 Principles of Aether Intelligence
          </Badge>
          <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
            How Aether Operates
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SIX_PRINCIPLES.map((principle) => (
            <Card key={principle.num} className="p-5 sm:p-6 flex flex-col justify-between h-full bg-slate-900/60 border-slate-800 hover:border-slate-700 transition-all">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={cn('w-9 h-9 rounded-xl border flex items-center justify-center', principle.accent)}>
                    {principle.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-text-muted">
                    {principle.num}
                  </span>
                </div>

                <h4 className="text-base font-bold text-text-primary mb-1">
                  {principle.title}
                </h4>
                <div className="text-xs font-mono text-sky-400/90 mb-3">
                  {principle.tagline}
                </div>

                <p className="text-xs text-text-secondary leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* 3. CORE TAKEAWAY CALLOUT */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-sky-500/25 text-center max-w-4xl mx-auto shadow-sm">
        <span className="text-xs font-mono font-semibold uppercase tracking-widest text-sky-400 block mb-2">
          Core Architecture Principle
        </span>
        <h3 className="text-lg sm:text-2xl font-bold text-text-primary tracking-tight mb-3">
          Aether is designed around the business, not around a predefined feature.
        </h3>
        <p className="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-2xl mx-auto font-normal">
          Instead of asking you to force your team into static forms and rigid triggers, Aether models itself around how your specific business operates—identifying where intelligence creates verifiable operational yield.
        </p>
      </div>
    </section>
  );
};

