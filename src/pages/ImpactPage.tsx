import React, { useState } from 'react';
import { useOutletContext, Link, useNavigate } from 'react-router-dom';
import { Hero } from '../components/common/Hero';
import { SectionHeader } from '../components/ui/SectionHeader';
import { CTASection } from '../components/common/CTASection';
import { JourneyNavigator } from '../components/common/JourneyNavigator';
import { PLATFORM_IMPACT_METRICS, BENCHMARK_COMPARISONS } from '../data/impact';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { 
  Clock, 
  Zap, 
  Sparkles, 
  Target, 
  ShieldCheck, 
  Eye, 
  TrendingUp, 
  DollarSign, 
  CheckCircle2, 
  ArrowRight,
  Calculator,
  AlertCircle,
  Building2,
  ArrowLeft
} from 'lucide-react';
import { cn } from '../utils/cn';

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  Time: <Clock className="w-5 h-5 text-rose-400" />,
  Efficiency: <Zap className="w-5 h-5 text-indigo-400" />,
  'Customer Experience': <Sparkles className="w-5 h-5 text-cyan-400" />,
  Opportunity: <Target className="w-5 h-5 text-emerald-400" />,
  'Decision Making': <ShieldCheck className="w-5 h-5 text-purple-400" />,
  'Operational Visibility': <Eye className="w-5 h-5 text-amber-400" />,
  Visibility: <Eye className="w-5 h-5 text-amber-400" />,
};

const PILLAR_DETAILS: Record<string, { title: string; subtitle: string; whyItMatters: string; traditionalFriction: string; aetherGain: string; illustrativeStat: string }> = {
  Time: {
    title: 'Time: Potential Recovery of 8–15 Admin Hours Weekly',
    subtitle: 'Eliminate repetitive telephone tag, paperwork transcription, and manual follow-up drafting.',
    whyItMatters: 'Operational staff often spend up to 40% of their day manually copying data between scheduling apps, CRM inboxes, and paper clipboards rather than directly serving clients.',
    traditionalFriction: 'Receptionists, admissions officers, and service advisors spend hours daily sending manual reminders and rescheduling dropped appointments.',
    aetherGain: 'Aether autonomously captures incoming signals, extracts requirements, and dispatches 1-tap interactive confirmations with minimal manual latency.',
    illustrativeStat: 'Illustrative: Up to 76% reduction in repetitive admin tasks',
  },
  Efficiency: {
    title: 'Efficiency: Potential Capacity Expansion by +24% to +31%',
    subtitle: 'Pack idle calendar valleys and balance workload across chairs, lifts, bays, and staff.',
    whyItMatters: 'Unbalanced operations leave high-cost provider hours idle while morning counters and express intake queues suffer bottlenecks.',
    traditionalFriction: 'Rigid fixed-length booking templates create 15–30 min unusable gaps between chemical hair services, clinical consults, or vehicle lifts.',
    aetherGain: 'Dynamic slot-packing algorithms nest appointments based on real-time operational flow, maximizing daily throughput without adding headcount.',
    illustrativeStat: 'Example Scenario: +24% to +31% throughput expansion',
  },
  'Customer Experience': {
    title: 'Customer Experience: Rapid Response Latency & Seamless Memory',
    subtitle: 'Near-instant engagement with automated memory of formulas, preferences, and history.',
    whyItMatters: 'Modern clients expect rapid communication on messaging channels, minimal waiting queues, and personalized continuity across visits.',
    traditionalFriction: 'Prospective buyers wait hours for portal responses; salon and clinic clients repeatedly re-explain past formulas and allergies.',
    aetherGain: 'Conversational intake triages customer requirements in seconds, pre-stages room comfort, and archives exact formulas for instant staff recall.',
    illustrativeStat: 'Simulated Target: < 15s initial triage response latency',
  },
  Opportunity: {
    title: 'Opportunity: Recapture Latent Demand & Recover Dropped Slots',
    subtitle: 'Re-engage cold inquiries, overdue maintenance schedules, and unbooked regular clients.',
    whyItMatters: 'Every uncontacted inquiry, missed rebooking interval, or delayed service notice represents uncaptured revenue.',
    traditionalFriction: 'Sales reps give up after a single call; repair workshops rarely reach out until a customer vehicle suffers a breakdown.',
    aetherGain: 'Autonomous background triggers compute optimal contact intervals, dispatching personalized re-engagement messages that recover latent appointments.',
    illustrativeStat: 'Prototype Benchmark: Up to 84% standby slot fill rate',
  },
  'Decision Making': {
    title: 'Decision Making: Shift from Reactive Guesswork to Proactive Strategy',
    subtitle: 'Prescriptive operational diagnostics delivered before bottlenecks escalate.',
    whyItMatters: 'Managers frequently make staffing and purchasing decisions based on delayed historical reports rather than live operational telemetry.',
    traditionalFriction: 'Restaurant kitchens over-prep before rainy shifts; gym owners fail to notice disengaged members until cancellation requests arrive.',
    aetherGain: 'Cognitive models correlate weather, event calendars, and historical velocity to provide predictive prep and staffing recommendations.',
    illustrativeStat: 'Illustrative: 3.4x precision gain in demand forecasting',
  },
  'Operational Visibility': {
    title: 'Operational Visibility: Cross-Location Telemetry Transparency',
    subtitle: 'Continuous telemetry stream across all locations, bays, and service queues.',
    whyItMatters: 'Multi-location operators often face delayed visibility into daily labor utilization, food cost variance, and cohort retention decay.',
    traditionalFriction: 'Executives only discover high client churn or technician downtime weeks after revenue has already declined.',
    aetherGain: 'Real-time telemetry streams monitor check-in rates, ticket velocities, and chair occupancy across all branches in a centralized view.',
    illustrativeStat: 'Prototype Mesh: Unified telemetry across all branches',
  },
  Visibility: {
    title: 'Operational Visibility: Cross-Location Telemetry Transparency',
    subtitle: 'Continuous telemetry stream across all locations, bays, and service queues.',
    whyItMatters: 'Multi-location operators often face delayed visibility into daily labor utilization, food cost variance, and cohort retention decay.',
    traditionalFriction: 'Executives only discover high client churn or technician downtime weeks after revenue has already declined.',
    aetherGain: 'Real-time telemetry streams monitor check-in rates, ticket velocities, and chair occupancy across all branches in a centralized view.',
    illustrativeStat: 'Prototype Mesh: Unified telemetry across all branches',
  },
};

export const ImpactPage: React.FC = () => {
  const { openSolutionModal } = useOutletContext<{ openSolutionModal: () => void }>();
  const navigate = useNavigate();

  // Interactive ROI Calculator State
  const [teamSize, setTeamSize] = useState<number>(12);
  const [hourlyRate, setHourlyRate] = useState<number>(35);
  const [selectedVertical, setSelectedVertical] = useState<string>('General Operations');

  const hoursPerWeekPerPerson = 8.5; // illustrative average in modeled scenarios
  const annualHoursSaved = Math.round(teamSize * hoursPerWeekPerPerson * 50);
  const annualCostSaved = Math.round(annualHoursSaved * hourlyRate);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Breadcrumb Trail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center justify-between py-2 border-b border-aether-border-subtle">
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <Link to="/" className="hover:text-text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-text-primary font-medium">Business Impact & Potential Value</span>
          </div>

          <Link to="/demos">
            <Button variant="ghost" size="sm" leftIcon={<ArrowLeft className="w-3.5 h-3.5" />} className="text-xs">
              Back to Live Demos
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <Hero
        badge="Illustrative Value Modeling"
        title={
          <>
            Why Should a Business Care About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-300">
              Aether?
            </span>
          </>
        }
        subtitle="Aether transforms reactive, paper-heavy operations into self-balancing, autonomous workflows—helping businesses identify potential capacity gains, reduce administrative drag, and elevate customer retention."
        primaryAction={{
          label: 'Request Value Briefing',
          onClick: openSolutionModal,
        }}
        secondaryAction={{
          label: 'Explore Central Demo Hub',
          onClick: () => navigate('/demos'),
        }}
      />

      {/* Core Executive Thesis: Why Business Care */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-slate-700/80 space-y-6">
          <div className="max-w-3xl space-y-3">
            <Badge variant="primary" dot size="md">
              Operational Focus
            </Badge>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-text-primary tracking-tight">
              Most businesses don't just have a sales problem. <br />
              <span className="text-sky-400">They have an operational leakage problem.</span>
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed pt-2">
              Every day, operational friction slows down inquiry response times, leaves schedule gaps unmonetized, risks customer drift, and consumes staff hours in manual paperwork. Aether demonstrates how cognitive overlays can help resolve these bottlenecks without disruptive migrations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-xs font-mono text-rose-400 font-bold uppercase">The Friction</span>
              <p className="text-xs text-text-secondary">
                Delayed inquiry responses, unbooked schedule gaps, and manual data transcription.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-xs font-mono text-sky-400 font-bold uppercase">Aether Layer</span>
              <p className="text-xs text-text-secondary">
                Autonomous triage, predictive reminders, and dynamic slot packing.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase">Illustrative Outcome</span>
              <p className="text-xs text-text-secondary">
                Recovered operational hours and higher asset utilization in modeled scenarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Key Impact Pillars Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeader
          badge="Six Operational Pillars"
          title="Where Aether Delivers Measurable Impact"
          subtitle="A structured breakdown of tangible operational gains across time, capacity, customer satisfaction, and executive visibility."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLATFORM_IMPACT_METRICS.map((metric) => {
            const detail = PILLAR_DETAILS[metric.dimension] || PILLAR_DETAILS['Time'];
            const icon = PILLAR_ICONS[metric.dimension] || <Clock className="w-5 h-5 text-sky-400" />;

            return (
              <Card
                key={metric.id}
                className="p-6 sm:p-7 flex flex-col justify-between h-full bg-slate-900/80 border-slate-800 hover:border-slate-700 transition-all space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                      {icon}
                    </div>
                    <Badge variant="neutral" size="sm" className="font-mono text-xs font-bold">
                      {metric.dimension}
                    </Badge>
                  </div>

                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight">
                      {metric.metric}
                    </span>
                    <h3 className="text-base font-bold text-text-primary mt-1">
                      {metric.label}
                    </h3>
                  </div>

                  <p className="text-xs text-text-secondary leading-relaxed">
                    {detail.whyItMatters}
                  </p>

                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-2 text-xs">
                    <div>
                      <span className="text-[10px] font-mono uppercase text-rose-400 font-bold block">
                        Traditional Friction:
                      </span>
                      <p className="text-text-muted text-[11px] leading-snug">
                        {detail.traditionalFriction}
                      </p>
                    </div>
                    <div className="pt-1.5 border-t border-slate-900">
                      <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold block">
                        Aether Transformation:
                      </span>
                      <p className="text-text-secondary text-[11px] leading-snug">
                        {detail.aetherGain}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <span className="text-text-muted">Impact Benchmark:</span>
                  <span className="text-emerald-400 font-bold">{detail.illustrativeStat}</span>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Interactive Value & ROI Estimator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Illustrative Scenario Estimator"
          title="Estimate Potential Time & Value Recovered"
          subtitle="Model sample team parameters to explore illustrative operational hours saved and potential capacity unlocked."
        />

        <div className="p-6 sm:p-10 rounded-2xl bg-slate-900/90 border border-slate-700/80 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Team Members Handling Scheduling & Admin
                  </label>
                  <span className="text-sm font-bold font-mono text-sky-400">{teamSize} Staff Members</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="50"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Average Fully-Loaded Hourly Cost ($)
                  </label>
                  <span className="text-sm font-bold font-mono text-sky-400">${hourlyRate}/hour</span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="120"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-400"
                />
              </div>

              <div className="pt-2">
                <span className="text-xs text-text-muted block mb-2 font-mono uppercase">Select Primary Industry Focus</span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {['Healthcare', 'Automotive', 'Salons & Spas', 'Fitness Clubs', 'Real Estate', 'Education'].map((vert) => (
                    <button
                      key={vert}
                      onClick={() => setSelectedVertical(vert)}
                      className={cn(
                        'px-3 py-1.5 rounded-lg text-xs font-mono border transition-all text-left truncate',
                        selectedVertical === vert
                          ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                          : 'bg-slate-950 border-slate-800 text-text-muted hover:text-text-primary'
                      )}
                    >
                      {vert}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Calculated Output Display */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-black border border-slate-800 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono text-text-muted uppercase">Illustrative Model Projection</span>
                  <h4 className="text-lg font-bold text-white mt-0.5">{selectedVertical} Scenario</h4>
                </div>
                <Badge variant="neutral" size="sm" className="font-mono text-[10px]">
                  Example Outcome
                </Badge>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <span className="text-[10px] font-mono text-text-muted uppercase block">Potential Recovered Hours / Yr</span>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-sky-400 mt-1">
                    {annualHoursSaved.toLocaleString()} hrs
                  </div>
                  <span className="text-[11px] text-text-muted mt-0.5 block">~{Math.round(annualHoursSaved / 50)} hrs/week (illustrative)</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <span className="text-[10px] font-mono text-text-muted uppercase block">Potential Labor Value</span>
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-400 mt-1">
                    ${annualCostSaved.toLocaleString()}
                  </div>
                  <span className="text-[11px] text-emerald-400/80 mt-0.5 block font-mono">Modeled capacity value</span>
                </div>
              </div>

              <p className="text-xs text-text-secondary leading-relaxed">
                Modeled for demonstration purposes assuming an illustrative recovery of 8.5 administrative hours per team member weekly through automated scheduling, pre-visit intake, and cycle follow-ups.
              </p>

              <Button
                variant="primary"
                size="md"
                onClick={openSolutionModal}
                rightIcon={<ArrowRight className="w-4 h-4" />}
                className="w-full justify-center"
              >
                Schedule Custom Architecture Briefing
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benchmark Comparisons Matrix */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <SectionHeader
          badge="Illustrative Benchmark Comparisons"
          title="Traditional Operations vs Aether Intelligence"
          subtitle="Side-by-side analysis of key operational workflows before and after deploying Aether in representative prototype simulations."
        />

        <div className="space-y-3">
          {BENCHMARK_COMPARISONS.map((b, idx) => (
            <Card key={idx} className="p-5 bg-slate-900/70 border-slate-800">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                <div className="md:col-span-3">
                  <span className="text-xs font-mono font-bold text-text-muted uppercase block mb-0.5">Workflow Zone</span>
                  <h4 className="text-sm font-bold text-text-primary">{b.dimension}</h4>
                </div>

                <div className="md:col-span-4 p-3 rounded-lg bg-black/40 border border-red-950/40">
                  <span className="text-[10px] font-mono text-rose-400 uppercase font-bold block mb-1">Traditional Method</span>
                  <p className="text-xs text-text-muted leading-relaxed">{b.traditional}</p>
                </div>

                <div className="md:col-span-4 p-3 rounded-lg bg-sky-950/20 border border-sky-500/30">
                  <span className="text-[10px] font-mono text-sky-400 uppercase font-bold block mb-1">With Aether Autonomous Layer</span>
                  <p className="text-xs text-text-secondary leading-relaxed font-medium">{b.withAether}</p>
                </div>

                <div className="md:col-span-1 text-right md:text-center">
                  <span className="text-xs font-bold font-mono text-emerald-400 block">{b.impactMultiplier}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Clear Methodology & Simulation Labeling */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-text-secondary">
          <div className="flex items-start sm:items-center gap-3">
            <AlertCircle className="w-5 h-5 text-sky-400 shrink-0 mt-0.5 sm:mt-0" />
            <p className="leading-relaxed">
              <strong>Methodology & Simulation Disclaimer:</strong> Metrics shown in this prototype are illustrative demonstrations and are not guaranteed production results. Aether presents these scenarios as representative models of potential impact. Actual operational outcomes depend on transaction volume, staff adoption, and specific business parameters.
            </p>
          </div>
          <Badge variant="neutral" size="sm" className="shrink-0 font-mono text-[10px]">
            Illustrative Prototype Data
          </Badge>
        </div>
      </section>

      {/* Guided Progression Journey */}
      <JourneyNavigator currentStage="impact" />

      {/* CTA */}
      <CTASection
        badge="Next Stage: Custom Architecture"
        title="Ready to model Aether's impact on your business?"
        description="Let our architects review your operational workflows and provide a tailored value realization roadmap."
        primaryButtonText="Request Executive Value Briefing"
        secondaryButtonText="Explore All 10 Verticals"
        onPrimaryClick={openSolutionModal}
        secondaryTo="/industries"
      />
    </div>
  );
};
