import { PlatformImpactMetric } from '../types';

export const PLATFORM_IMPACT_METRICS: PlatformImpactMetric[] = [
  {
    id: 'time',
    dimension: 'Time',
    metric: 'Up to 76%',
    label: 'Illustrative Admin Time Reduction',
    subtext:
      'Replaces repetitive manual scheduling, intake paperwork, and follow-up emails with autonomous multi-agent execution.',
    summary:
      'Example scenario: 8–15 administrative hours potentially recovered weekly per operational team member.',
  },
  {
    id: 'efficiency',
    dimension: 'Efficiency',
    metric: '+24% to +31%',
    label: 'Potential Capacity & Throughput Expansion',
    subtext:
      'Nests dead calendar gaps, balances rush-hour queues, and optimizes seat, chair, and bay turnover in real-time.',
    summary:
      'Illustrative modeling: Direct expansion of billable operational capacity in high-utilization environments.',
  },
  {
    id: 'customer-experience',
    dimension: 'Customer Experience',
    metric: '< 15s',
    label: 'Target Instant Response Latency',
    subtext:
      'Engages inbound leads, guest inquiries, and appointment requests in seconds with intelligent conversational triage.',
    summary: 'Simulated outcome: Compares with traditional 3.8-hour manual callback delays.',
  },
  {
    id: 'opportunity',
    dimension: 'Opportunity',
    metric: 'Up to 84%',
    label: 'Standby Cancellation Recovery Rate',
    subtext:
      'Automatically contacts standby queues to backfill last-minute cancellations, preserving high-margin slots.',
    summary: 'Demo scenario: Recovers lost shift and chair capacity before slots expire.',
  },
  {
    id: 'decision-making',
    dimension: 'Decision Making',
    metric: '3.4x',
    label: 'Illustrative Forecast Precision Gain',
    subtext:
      'Models customer surge patterns, weather shifts, and inventory burn rates ahead of time, reducing guesswork.',
    summary: 'Example outcome: Forward-looking predictive planning replaces reactive intuition.',
  },
  {
    id: 'visibility',
    dimension: 'Operational Visibility',
    metric: '100%',
    label: 'Unified Operational Telemetry Mesh',
    subtext:
      'Maintains a single real-time audit ledger across all operational touchpoints with zero software silos.',
    summary: 'Prototype modeling: Multi-location transparency across disparate operational queues.',
  },
];

export const BENCHMARK_COMPARISONS = [
  {
    dimension: 'Inbound Lead Qualification',
    traditional: '4 to 8 hours manual email/phone lag',
    withAether: 'Instant 15-second cognitive scoring & tour booking',
    impactMultiplier: 'Potential 90%+ faster response',
  },
  {
    dimension: 'Schedule & Capacity Optimization',
    traditional: 'Static calendars with 15-25% unfilled gap waste',
    withAether: 'Dynamic autonomous standby fill and schedule nesting',
    impactMultiplier: 'Illustrative +24% billable hours',
  },
  {
    dimension: 'Customer Churn Prevention',
    traditional: 'Exit surveys sent after account is already lost',
    withAether: 'Early warning behavioral tracking & automated re-activation',
    impactMultiplier: 'Simulated ~42% churn reduction',
  },
  {
    dimension: 'Inventory & Prep Planning',
    traditional: 'Spreadsheet estimates resulting in 8-12% waste',
    withAether: 'Weather- and demand-aware predictive replenishment',
    impactMultiplier: 'Example: Up to -65% waste cost',
  },
];
