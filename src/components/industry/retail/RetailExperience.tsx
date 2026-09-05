import React, { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { IndustryData } from '../../../types';
import { SectionHeader } from '../../ui/SectionHeader';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { IndustryBreadcrumb } from '../../common/IndustryBreadcrumb';
import { IndustryNextSteps } from '../../common/IndustryNextSteps';
import { RetailWorkflowPipeline } from './RetailWorkflowPipeline';
import { RetailInventoryDemo } from './RetailInventoryDemo';
import { RetailBiDashboard } from './RetailBiDashboard';
import {
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Zap,
  Play,
  Clock,
  Sparkles,
  ChevronDown,
  Activity,
  Layers,
  BrainCircuit,
  Eye,
  Target,
  TrendingUp,
  Package,
  Boxes,
  Truck,
  Users,
  Tag,
  Store,
  LineChart,
} from 'lucide-react';
import { cn } from '../../../utils/cn';

interface RetailExperienceProps {
  industry: IndustryData;
}

export const RetailExperience: React.FC<RetailExperienceProps> = ({ industry }) => {
  const { openSolutionModal } = useOutletContext<{ openSolutionModal: () => void }>();
  const [openAccordionIdx, setOpenAccordionIdx] = useState<number | null>(0);
  const [selectedSolutionFilter, setSelectedSolutionFilter] = useState<string>('all');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleAccordion = (idx: number) => {
    setOpenAccordionIdx(openAccordionIdx === idx ? null : idx);
  };

  const filteredSolutions = industry.solutionMappings.filter((sol) => {
    if (selectedSolutionFilter === 'all') return true;
    return sol.capabilityTag.toLowerCase().includes(selectedSolutionFilter.toLowerCase());
  });

  return (
    <div className="space-y-24 sm:space-y-32 pb-16">
      {/* Breadcrumb Navigation Trail */}
      <IndustryBreadcrumb
        industrySlug="retail"
        industryName="Retail Businesses"
        accentColor="sky"
      />

      {/* ========================================================================= */}
      {/* 01 INDUSTRY HERO */}
      {/* ========================================================================= */}
      <section className="relative pt-8 sm:pt-16 pb-12 sm:pb-16 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          {/* Eyebrow Badge */}
          <div className="mb-6 flex items-center gap-2 animate-fade-in">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center border text-xs bg-sky-500/10 border-sky-500/20 text-sky-400">
              <ShoppingBag className="w-4 h-4" />
            </div>
            <Badge variant="primary" dot size="md">
              Aether for Retail Businesses
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
              onClick={() => scrollToSection('retail-demo-section')}
              leftIcon={<Play className="w-4 h-4 fill-current" />}
              className="w-full sm:w-auto shadow-md font-semibold"
            >
              Simulate Inventory Reorder Demo
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('retail-solutions-section')}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto"
            >
              Explore 11 Retail Solutions
            </Button>
          </div>

          {/* Key Metric Highlights */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-aether-border-subtle grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 max-w-2xl w-full">
            {industry.stats.map((stat, idx: number) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-sky-400">
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
      {/* 01.5 THE AETHER RETAIL ARCHITECTURAL STORY */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-12">
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-950/95 border border-sky-500/30 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Badge variant="primary" size="sm">
                  Core Retail Thesis
                </Badge>
                <span className="text-xs font-mono text-sky-400 font-semibold">
                  Autonomous Inventory Orchestration
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                "Prevent inventory problems before they affect sales."
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-text-muted bg-slate-950/80 px-3 py-1.5 rounded-lg border border-slate-800">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
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
                Stockouts & Blind Overstock
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Manual reorders and ununified store telemetry cause fast-sellers to 86 mid-surge
                while capital is trapped in slow-movers.
              </p>
              <span className="text-[10px] font-mono text-rose-400 pt-1 border-t border-rose-500/20">
                12-18% Lost Sales
              </span>
            </div>

            {/* 2. Opportunity */}
            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold text-[10px] uppercase font-mono">
                <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                <span>2. Opportunity</span>
              </div>
              <h4 className="text-xs font-bold text-white leading-snug">
                Predictive Velocity Capture
              </h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Anticipate replenishment windows 14 days ahead using store-level sell-through curves
                and local demand signals.
              </p>
              <span className="text-[10px] font-mono text-amber-300 pt-1 border-t border-amber-500/20">
                14-Day Advance Lead
              </span>
            </div>

            {/* 3. Aether Intelligence */}
            <div className="p-4 rounded-xl bg-sky-950/20 border border-sky-500/30 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center gap-1.5 text-sky-400 font-bold text-[10px] uppercase font-mono">
                <BrainCircuit className="w-3.5 h-3.5 shrink-0" />
                <span>3. Intelligence</span>
              </div>
              <h4 className="text-xs font-bold text-white leading-snug">SKU-Level Telemetry</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Synthesizes store checkouts, footfall, lead times, safety stocks, and customer
                shopping basket affinity.
              </p>
              <span className="text-[10px] font-mono text-sky-300 pt-1 border-t border-sky-500/20">
                Granular Item Mesh
              </span>
            </div>

            {/* 4. Recommendation */}
            <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/30 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center gap-1.5 text-indigo-400 font-bold text-[10px] uppercase font-mono">
                <Target className="w-3.5 h-3.5 shrink-0" />
                <span>4. Recommendation</span>
              </div>
              <h4 className="text-xs font-bold text-white leading-snug">Exact Quantity Orders</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Calculates optimal reorder batch sizes, supplier safety thresholds, and inter-store
                inventory balancing.
              </p>
              <span className="text-[10px] font-mono text-indigo-300 pt-1 border-t border-indigo-500/20">
                Optimal Reorder Units
              </span>
            </div>

            {/* 5. Action */}
            <div className="p-4 rounded-xl bg-violet-950/20 border border-violet-500/30 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center gap-1.5 text-violet-400 font-bold text-[10px] uppercase font-mono">
                <Zap className="w-3.5 h-3.5 shrink-0" />
                <span>5. Action</span>
              </div>
              <h4 className="text-xs font-bold text-white leading-snug">Automated PO Dispatch</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                1-click EDI supplier dispatch, warehouse truck route scheduling, and markdown
                triggers for slow inventory.
              </p>
              <span className="text-[10px] font-mono text-violet-300 pt-1 border-t border-violet-500/20">
                Zero-Lag Execution
              </span>
            </div>

            {/* 6. Impact */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex flex-col justify-between space-y-2.5">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-[10px] uppercase font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>6. Impact</span>
              </div>
              <h4 className="text-xs font-bold text-white leading-snug">Maximized Sell-Through</h4>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Eliminates stockouts, frees trapped working capital, and accelerates gross
                merchandise profit margins.
              </p>
              <span className="text-[10px] font-mono text-emerald-400 font-bold pt-1 border-t border-emerald-500/20">
                +22% GMV • -65% Stockouts
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 8 REALISTIC RETAIL PROBLEMS */}
      {/* ========================================================================= */}
      <section id="challenges-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Operational Bottlenecks"
          title="8 Core Challenges in Retail & Omnichannel Commerce"
          subtitle="The systemic friction points in demand uncertainty, manual stock checks, and untracked customer behavior damaging retail margins."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {industry.challenges.map((item, idx: number) => (
            <Card
              key={item.id}
              className="p-5 flex flex-col justify-between h-full bg-slate-900/70 border-slate-800 hover:border-slate-700 transition-all"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-slate-800">
                  <span className="text-[10px] font-mono text-sky-400 font-bold">
                    Problem 0{idx + 1}
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
                    <span>Business Consequence</span>
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
          title="Transforming Retail Friction Into Growth Multipliers"
          subtitle="How Aether converts inventory blindspots and lost footfall into lean inventory turnover and higher customer lifetime value."
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
                    Diagnosed Retail Friction
                  </div>
                  <p className="text-xs sm:text-sm text-text-secondary leading-snug">
                    {opp.problem}
                  </p>
                </div>

                <div className="flex justify-center text-sky-400">
                  <ArrowRight className="w-4 h-4 rotate-90" />
                </div>

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
      {/* 04 11 AETHER RETAIL SOLUTIONS */}
      {/* ========================================================================= */}
      <section id="retail-solutions-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Platform Solutions"
          title="11 Intelligent Solutions for Retail Operations"
          subtitle="End-to-end cognitive capabilities across demand forecasting, stock balancing, customer segmentation, dynamic pricing, and store analytics."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industry.solutionMappings.map((mapping, idx: number) => (
            <Card
              key={idx}
              className="p-5 sm:p-6 flex flex-col justify-between h-full bg-slate-900/80 border-slate-700/80 hover:border-sky-500/40 transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between mb-1">
                  <Badge variant="neutral" size="sm" className="font-mono text-[10px]">
                    {mapping.capabilityTag}
                  </Badge>
                  <span className="text-[10px] font-mono text-sky-400">
                    Solution {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </span>
                </div>

                <div className="text-xs text-text-muted">
                  <span className="font-semibold text-rose-400 uppercase tracking-wider text-[10px] block mb-0.5">
                    1. Problem Addressed
                  </span>
                  {mapping.problem}
                </div>

                <div className="text-xs text-text-secondary pl-2.5 border-l border-slate-700">
                  <span className="font-semibold text-sky-400 uppercase tracking-wider text-[10px] block mb-0.5">
                    2. Unlocked Opportunity
                  </span>
                  {mapping.opportunity}
                </div>

                <div className="p-3 rounded-lg bg-slate-950/90 border border-sky-500/20 text-xs text-text-primary leading-relaxed font-medium">
                  <span className="font-bold text-emerald-400 uppercase tracking-wider text-[10px] block mb-1">
                    3. Aether Autonomous Solution
                  </span>
                  {mapping.solution}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05 SIGNATURE WORKFLOW (Customer -> Purchase -> Demand -> Inventory -> Stock Risk -> Reorder -> Customer Intelligence) */}
      {/* ========================================================================= */}
      <section id="workflow-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RetailWorkflowPipeline />
      </section>

      {/* ========================================================================= */}
      {/* 06 SIGNATURE INTERACTIVE DEMO (Simulated Product Inventory Demo) */}
      {/* ========================================================================= */}
      <section id="retail-demo-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Signature Interactive Sandbox"
          title="Simulate Product Inventory & Reorder Intelligence"
          subtitle="Test how Aether monitors live stock levels, calculates daily demand velocity, detects stockout risk, and auto-dispatches supplier purchase orders."
        />

        <RetailInventoryDemo />
      </section>

      {/* ========================================================================= */}
      {/* 07 BUSINESS INTELLIGENCE DASHBOARD */}
      {/* ========================================================================= */}
      <section id="bi-dashboard-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RetailBiDashboard />
      </section>

      {/* ========================================================================= */}
      {/* 08 BUSINESS IMPACT (Time, Efficiency, Customer Experience, Operations, Decision Making, Visibility) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Value Realization"
          title="Business Impact & ROI in Retail Operations"
          subtitle="Quantifiable efficiency gains, margin protections, and customer retention metrics delivered across organizational dimensions."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Time */}
          <Card className="p-6 bg-slate-900/70 border-slate-800">
            <div className="flex items-center gap-2.5 mb-3 text-sky-400 font-bold text-sm">
              <Clock className="w-4 h-4" />
              <span>Time Saved</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.time}
            </p>
          </Card>

          {/* Efficiency */}
          <Card className="p-6 bg-slate-900/70 border-slate-800">
            <div className="flex items-center gap-2.5 mb-3 text-indigo-400 font-bold text-sm">
              <Zap className="w-4 h-4" />
              <span>Throughput & Inventory Turn</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.efficiency}
            </p>
          </Card>

          {/* Customer Experience */}
          <Card className="p-6 bg-slate-900/70 border-slate-800">
            <div className="flex items-center gap-2.5 mb-3 text-emerald-400 font-bold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Customer Experience</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.customerExperience}
            </p>
          </Card>

          {/* Operations */}
          <Card className="p-6 bg-slate-900/70 border-slate-800">
            <div className="flex items-center gap-2.5 mb-3 text-amber-400 font-bold text-sm">
              <Activity className="w-4 h-4" />
              <span>Operations & Replenishment</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.operations}
            </p>
          </Card>

          {/* Decision Making */}
          <Card className="p-6 bg-slate-900/70 border-slate-800">
            <div className="flex items-center gap-2.5 mb-3 text-teal-400 font-bold text-sm">
              <BrainCircuit className="w-4 h-4" />
              <span>Predictive Decision Making</span>
            </div>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {industry.businessImpact.decisionMaking}
            </p>
          </Card>

          {/* Visibility */}
          <Card className="p-6 bg-slate-900/70 border-slate-800">
            <div className="flex items-center gap-2.5 mb-3 text-sky-300 font-bold text-sm">
              <Eye className="w-4 h-4" />
              <span>Omnichannel Visibility</span>
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
          badge="Extended Retail Mesh"
          title="Additional Capabilities for Retail Enterprises"
          subtitle="Modular architectural extensions connecting ERPs, POS hardware, RFID sensors, and carrier fulfillment networks."
        />

        <div className="space-y-4 max-w-4xl mx-auto">
          {industry.additionalCapabilities.map((group, idx: number) => {
            const isOpen = openAccordionIdx === idx;
            return (
              <Card
                key={idx}
                className="p-5 sm:p-6 transition-all duration-200 border-slate-700/80 card-gradient-surface"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-lg"
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
                      {group.features.map((feat: string, i: number) => (
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
        industrySlug="retail"
        industryName="Retail Businesses"
        onRequestSolution={openSolutionModal}
      />

      {/* ========================================================================= */}
      {/* 10 BOTTOM CTA */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-aether-card card-gradient-surface border border-slate-700/80 p-8 sm:p-12 lg:p-16 text-center overflow-hidden shadow-card-hover">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <div className="mb-4">
              <Badge variant="primary" dot size="md">
                Retail Executive Briefing
              </Badge>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-text-primary leading-tight">
              Transform Your Retail Operations With Aether
            </h2>

            <p className="mt-4 text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed max-w-2xl">
              Eliminate stockouts, optimize purchase order timing, and unify omnichannel stock with
              an autonomous cognitive engine tailored to your store footprint.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={openSolutionModal}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full sm:w-auto font-semibold shadow-md"
              >
                Request Custom Retail Architecture
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
