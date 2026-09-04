import { PlatformImpactMetric } from '../types';

export const PLATFORM_IMPACT_METRICS: PlatformImpactMetric[] = [
  {
    id: 'time',
    dimension: 'Time',
    metric: '76%',
    label: 'Manual Admin Reduction',
    subtext: 'Replaces repetitive manual scheduling, intake paperwork, and follow-up emails with autonomous multi-agent execution.',
    summary: 'Hours recovered across operational teams weekly.',
  },
  {
    id: 'efficiency',
    dimension: 'Efficiency',
    metric: '+28%',
    label: 'Capacity & Throughput Gain',
    subtext: 'Nests dead calendar gaps, balances rush-hour queues, and optimizes seat, chair, and bay turnover in real-time.',
    summary: 'Direct expansion of billable operational capacity.',
  },
  {
    id: 'customer-experience',
    dimension: 'Customer Experience',
    metric: '< 15s',
    label: 'Instant Response Latency',
    subtext: 'Engages inbound leads, guest inquiries, and appointment requests in seconds with intelligent conversational triage.',
    summary: 'Down from traditional 3.8-hour email and callback delays.',
  },
  {
    id: 'opportunity',
    dimension: 'Opportunity',
    metric: '84%',
    label: 'Dropped Slot Recovery',
    subtext: 'Automatically contacts standby queues to backfill last-minute cancellations, preserving high-margin revenue.',
    summary: 'Recovers lost shift and chair revenue before it perishes.',
  },
  {
    id: 'decision-making',
    dimension: 'Decision Making',
    metric: '3.4x',
    label: 'Forecast Precision',
    subtext: 'Models customer surge patterns, weather shifts, and inventory burn rates ahead of time, eliminating guesswork.',
    summary: 'Forward-looking predictive planning replaces reactive gut feel.',
  },
  {
    id: 'visibility',
    dimension: 'Visibility',
    metric: '100%',
    label: 'Unified Telemetry Mesh',
    subtext: 'Maintains a single real-time audit ledger across all operational touchpoints with zero software silos.',
    summary: 'Complete executive visibility into end-to-end business flow.',
  },
];

export const BENCHMARK_COMPARISONS = [
  {
    dimension: 'Inbound Lead Qualification',
    traditional: '4 to 8 hours manual email/phone lag',
    withAether: 'Instant 15-second cognitive scoring & tour booking',
    impactMultiplier: '99% faster',
  },
  {
    dimension: 'Schedule & Capacity Optimization',
    traditional: 'Static calendars with 15-25% unfilled gap waste',
    withAether: 'Dynamic autonomous standby fill and schedule nesting',
    impactMultiplier: '+24% billable hours',
  },
  {
    dimension: 'Customer Churn Prevention',
    traditional: 'Exit surveys sent after account is already lost',
    withAether: 'Early warning behavioral tracking & automated re-activation',
    impactMultiplier: '42% churn reduction',
  },
  {
    dimension: 'Inventory & Prep Planning',
    traditional: 'Spreadsheet estimates resulting in 8-12% waste',
    withAether: 'Weather- and demand-aware predictive replenishment',
    impactMultiplier: '-65% waste cost',
  },
];
