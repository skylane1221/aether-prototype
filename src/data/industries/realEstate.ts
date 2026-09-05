import { IndustryData } from '../../types';

export interface RealEstateProperty {
  id: string;
  name: string;
  developer: string;
  location: string;
  configuration: string;
  carpetArea: string;
  price: string;
  priceNumeric: number;
  matchScore: number;
  parking: string;
  possession: string;
  status:
    'Ready to Move' | 'Possession in 3 Months' | 'Possession in 5 Months' | 'Under Construction';
  whyItMatches: string;
  imageUrl?: string;
  highlights: string[];
}

export interface MatchedBuyerLead {
  id: string;
  name: string;
  budget: string;
  preferredConfig: string;
  preferredLocation: string;
  possessionTimeline: string;
  matchScore: number;
  intentLevel: 'High Intent' | 'Warm Intent' | 'Early Stage';
  lastInteraction: string;
  preApproved: boolean;
  matchReason: string;
}

export interface RealEstateBiData {
  funnel: {
    stage: string;
    count: number;
    conversion: string;
  }[];
  intentDistribution: {
    category: string;
    percentage: number;
    count: number;
    color: string;
  }[];
  demandByLocation: {
    location: string;
    inquiries: number;
    averageBudget: string;
    demandTrend: string;
  }[];
  inventoryStatus: {
    totalUnits: number;
    available: number;
    underNegotiation: number;
    fastDepleting: number;
    avgDaysOnMarket: number;
  };
  priorityFollowUps: {
    id: string;
    clientName: string;
    propertyViewed: string;
    intentScore: number;
    suggestedAction: string;
    timeframe: string;
    urgency: 'Critical' | 'High' | 'Routine';
  }[];
}

export const REAL_ESTATE_PROPERTIES: RealEstateProperty[] = [
  {
    id: 'prop-1',
    name: 'Hiranandani Castle Rock',
    developer: 'Hiranandani Group',
    location: 'Central Powai, Mumbai',
    configuration: '2 BHK Luxury',
    carpetArea: '780 sq.ft.',
    price: '₹1.48 Cr',
    priceNumeric: 1.48,
    matchScore: 96,
    parking: '1 Covered Dedicated Bay',
    possession: 'Ready to Move In',
    status: 'Ready to Move',
    whyItMatches:
      'Exact budget fit (₹1.48 Cr vs ₹1.5 Cr budget), prime Powai location, includes covered parking, and zero possession waiting period.',
    highlights: [
      'Lake view balcony',
      'Clubhouse & Olympic Pool',
      'Direct connectivity to JVLR & Metro 6',
    ],
  },
  {
    id: 'prop-2',
    name: 'L&T Emerald Isle Phase II',
    developer: 'L&T Realty',
    location: 'Saki Vihar Road, Powai, Mumbai',
    configuration: '2 BHK Premium',
    carpetArea: '820 sq.ft.',
    price: '₹1.54 Cr',
    priceNumeric: 1.54,
    matchScore: 93,
    parking: '1 Podium Covered Bay',
    possession: 'Possession in 3 Months (OC Applied)',
    status: 'Possession in 3 Months',
    whyItMatches:
      'Larger carpet area (+40 sq.ft), falls within 5% budget flexibility, and possession timeline is well within your 6-month requirement.',
    highlights: [
      '10-acre gated township',
      'Adjacent to Powai Lake',
      'OC received for mid-rise tower',
    ],
  },
  {
    id: 'prop-3',
    name: 'Kalpataru Woodsville',
    developer: 'Kalpataru Ltd',
    location: 'Chandivali - Powai Extension',
    configuration: '2 BHK Modern',
    carpetArea: '765 sq.ft.',
    price: '₹1.42 Cr',
    priceNumeric: 1.42,
    matchScore: 89,
    parking: '1 Covered Stilt Bay',
    possession: 'Possession in 4 Months',
    status: 'Possession in 5 Months',
    whyItMatches:
      'Exceptional value at ₹8 Lakhs below maximum budget threshold, high-quality developer reputation, with 4-month possession timeline.',
    highlights: [
      'Green landscaped podium',
      'Low maintenance charges',
      'Near D-Mart & Nahar International School',
    ],
  },
  {
    id: 'prop-4',
    name: 'Lodha Supreme Powai',
    developer: 'Lodha Group',
    location: 'Near Hiranandani Hospital, Powai',
    configuration: '2 BHK Grand',
    carpetArea: '845 sq.ft.',
    price: '₹1.62 Cr',
    priceNumeric: 1.62,
    matchScore: 85,
    parking: '1 Basement Dedicated Bay',
    possession: 'Ready for Fit-outs',
    status: 'Ready to Move',
    whyItMatches:
      'Spacious layout with high ceiling height and Italian marble finish. 8% premium above budget for significantly higher resale liquidity.',
    highlights: [
      'Rooftop infinity lounge',
      'Smart home automation pre-installed',
      'Walk to Galleria Shopping Arcade',
    ],
  },
];

export const REVERSE_MATCH_LISTINGS = [
  {
    id: 'list-1',
    propertyName: 'Lodha Bellagio 3BHK Penthouse',
    location: 'Hiranandani Gardens, Powai',
    price: '₹2.85 Cr',
    carpet: '1,240 sq.ft.',
    status: 'Newly Listed (24h ago)',
  },
  {
    id: 'list-2',
    propertyName: 'Godrej Urban Park 2BHK',
    location: 'Chandivali, Powai',
    price: '₹1.38 Cr',
    carpet: '730 sq.ft.',
    status: 'Price Revision (-₹5L)',
  },
  {
    id: 'list-3',
    propertyName: 'K Raheja Vistas Premiere 3BHK',
    location: 'Off JVLR, Powai',
    price: '₹2.40 Cr',
    carpet: '1,120 sq.ft.',
    status: 'Ready to Move Unit',
  },
];

export const MATCHED_BUYER_LEADS: Record<string, MatchedBuyerLead[]> = {
  'list-1': [
    {
      id: 'lead-101',
      name: 'Dr. Rajiv Singhania',
      budget: '₹2.70 - ₹3.10 Cr',
      preferredConfig: '3 BHK / Penthouse',
      preferredLocation: 'Powai / Hiranandani',
      possessionTimeline: 'Ready / Immediate',
      matchScore: 97,
      intentLevel: 'High Intent',
      lastInteraction: '2 hours ago (Inquired about Hiranandani resale)',
      preApproved: true,
      matchReason:
        'HDFC pre-approved loan of ₹2 Cr; actively touring Powai luxury properties with immediate closing mandate.',
    },
    {
      id: 'lead-102',
      name: 'Priyanka & Amit Mehra',
      budget: '₹2.80 - ₹3.00 Cr',
      preferredConfig: '3 BHK High-Rise',
      preferredLocation: 'Powai Central',
      possessionTimeline: '< 3 Months',
      matchScore: 94,
      intentLevel: 'High Intent',
      lastInteraction: 'Yesterday (Saved 3 properties in Hiranandani)',
      preApproved: true,
      matchReason:
        'Relocating from Singapore next quarter; looking specifically for gated luxury township with club amenities.',
    },
    {
      id: 'lead-103',
      name: 'Vikram Merchant',
      budget: '₹2.50 - ₹2.90 Cr',
      preferredConfig: '3 BHK',
      preferredLocation: 'Powai / Kanjurmarg',
      possessionTimeline: '< 6 Months',
      matchScore: 89,
      intentLevel: 'Warm Intent',
      lastInteraction: '3 days ago (Attended virtual briefing)',
      preApproved: false,
      matchReason:
        'Self-employed tech founder; looking for home with dedicated workspace and lake view.',
    },
  ],
  'list-2': [
    {
      id: 'lead-201',
      name: 'Aditya & Neha Sharma',
      budget: '₹1.30 - ₹1.45 Cr',
      preferredConfig: '2 BHK',
      preferredLocation: 'Chandivali / Powai',
      possessionTimeline: 'Ready to Move',
      matchScore: 98,
      intentLevel: 'High Intent',
      lastInteraction: '45 mins ago (Submitted web inquiry)',
      preApproved: true,
      matchReason:
        'Exact match for Chandivali location and ₹1.38 Cr price point. SBI pre-approved.',
    },
    {
      id: 'lead-202',
      name: 'Rohan Deshmukh',
      budget: '₹1.35 - ₹1.50 Cr',
      preferredConfig: '2 BHK with Parking',
      preferredLocation: 'Powai Extension',
      possessionTimeline: '< 4 Months',
      matchScore: 93,
      intentLevel: 'High Intent',
      lastInteraction: 'Yesterday (Tour completed at nearby project)',
      preApproved: true,
      matchReason:
        'Rejected previous unit due to low ceiling; Godrej floor plate matches preference perfectly.',
    },
  ],
  'list-3': [
    {
      id: 'lead-301',
      name: 'Sunil Nair',
      budget: '₹2.30 - ₹2.55 Cr',
      preferredConfig: '3 BHK',
      preferredLocation: 'JVLR / Powai Corridor',
      possessionTimeline: 'Ready to Move',
      matchScore: 95,
      intentLevel: 'High Intent',
      lastInteraction: 'Today at 10:15 AM',
      preApproved: true,
      matchReason:
        'Needs rapid JVLR connectivity for Western Express Highway commute. Pre-approved with ICICI.',
    },
  ],
};

export const REAL_ESTATE_BI_DATA: RealEstateBiData = {
  funnel: [
    { stage: 'Inbound Portal Leads', count: 1420, conversion: '100%' },
    { stage: 'Aether Cognitive Triage', count: 1180, conversion: '83.1%' },
    { stage: 'Preference Profile Verified', count: 920, conversion: '64.8%' },
    { stage: 'Property Matched & Shortlisted', count: 680, conversion: '47.9%' },
    { stage: 'Automated Site Visit Booked', count: 395, conversion: '27.8%' },
    { stage: 'Offer & Deal Closing', count: 142, conversion: '10.0%' },
  ],
  intentDistribution: [
    {
      category: 'Immediate Buyer (<30 days, Pre-approved)',
      percentage: 44,
      count: 625,
      color: '#38bdf8',
    },
    {
      category: 'Warm Explorer (30-90 days, In-Market)',
      percentage: 35,
      count: 497,
      color: '#818cf8',
    },
    { category: 'Early Researcher (Nurture Stage)', percentage: 21, count: 298, color: '#64748b' },
  ],
  demandByLocation: [
    {
      location: 'Powai (Central & Hiranandani)',
      inquiries: 540,
      averageBudget: '₹1.85 Cr',
      demandTrend: '+34% YoY',
    },
    {
      location: 'Chandivali - Powai Link',
      inquiries: 380,
      averageBudget: '₹1.35 Cr',
      demandTrend: '+28% YoY',
    },
    {
      location: 'JVLR - Powai West',
      inquiries: 290,
      averageBudget: '₹2.10 Cr',
      demandTrend: '+19% YoY',
    },
    {
      location: 'Kanjurmarg - Powai East',
      inquiries: 210,
      averageBudget: '₹1.25 Cr',
      demandTrend: '+42% YoY',
    },
  ],
  inventoryStatus: {
    totalUnits: 480,
    available: 194,
    underNegotiation: 142,
    fastDepleting: 86,
    avgDaysOnMarket: 22.4,
  },
  priorityFollowUps: [
    {
      id: 'fu-1',
      clientName: 'Sanjay & Meenakshi Kulkarni',
      propertyViewed: 'Hiranandani Castle Rock 2BHK',
      intentScore: 94,
      suggestedAction: 'Send revised payment plan with stamp duty waiver incentive',
      timeframe: 'Urgent (Viewed 3x in 48 hrs)',
      urgency: 'Critical',
    },
    {
      id: 'fu-2',
      clientName: 'Tanya Bansal',
      propertyViewed: 'L&T Emerald Isle 2BHK',
      intentScore: 91,
      suggestedAction: 'Dispatch comparison table showing square footage advantage vs Raheja',
      timeframe: 'Due Today (Post-site visit checkpoint)',
      urgency: 'High',
    },
    {
      id: 'fu-3',
      clientName: 'Karanvir Grover',
      propertyViewed: 'Lodha Supreme 2BHK Grand',
      intentScore: 88,
      suggestedAction: 'Schedule video consultation with developer sales director for negotiation',
      timeframe: 'Tomorrow morning',
      urgency: 'High',
    },
    {
      id: 'fu-4',
      clientName: 'Deepak Vohra',
      propertyViewed: 'Kalpataru Woodsville 2BHK',
      intentScore: 82,
      suggestedAction: 'Send reminder on 4-month possession window and pre-EMIs',
      timeframe: 'Within 48 hours',
      urgency: 'Routine',
    },
  ],
};

export const realEstateIndustry: IndustryData = {
  id: 'real-estate',
  slug: 'real-estate',
  name: 'Real Estate',
  shortName: 'Real Estate',
  transformationStatement:
    'Instant buyer qualification, MLS inventory matching, and automated viewing dispatch.',
  tagline: 'Autonomous client qualification, inventory matching, and transaction dispatch.',
  description:
    'Aether transforms real estate brokerages from fragmented manual follow-ups into an intelligent pipeline that instantly qualifies buyers, orchestrates viewings, and detects seller intent.',
  accentColor: 'cyan',
  iconName: 'Building2',
  categoryFocus: ['Sales-focused', 'Intelligence-heavy'],
  heroHeadline: 'Turn Buyer Inquiries Into Qualified Viewings and Closed Transactions.',
  heroSubheadline:
    'How modern real estate operators replace high-friction manual triage with instant cognitive matching, reverse inventory discovery, and autonomous visit dispatch.',
  stats: [
    {
      label: 'Lead Response Time',
      value: '< 15s',
      change: 'Target',
      detail: 'Simulated model speed (down from 4.2h baseline)',
    },
    {
      label: 'Viewing Conversion',
      value: '38.4%',
      change: 'Example',
      detail: 'Illustrative high-intent pre-screening cohort',
    },
    {
      label: 'Admin Friction',
      value: 'Up to -72%',
      change: 'Potential',
      detail: 'Simulated automated document workflow savings',
    },
  ],

  // 02 Business Challenges (8 Specified Problems)
  challenges: [
    {
      id: 're-c1',
      problem: 'Lead Fragmentation',
      cause:
        'Inquiries arrive scattered across 99acres, MagicBricks, Housing.com, WhatsApp, and social campaigns without a unified ledger.',
      consequence:
        'Brokers miss 35% of inbound inquiries and take hours to consolidate multi-portal data.',
      severity: 'critical',
    },
    {
      id: 're-c2',
      problem: 'Manual Requirement Collection',
      cause:
        'Agents manually call every lead to repeatedly ask basic questions (budget, carpet area, possession, parking).',
      consequence:
        'Buyer fatigue, delayed response times, and high drop-off before property options are even presented.',
      severity: 'high',
    },
    {
      id: 're-c3',
      problem: 'Lead Prioritization',
      cause:
        'Inability to objectively separate casual window-shoppers from pre-approved, ready-to-transact buyers.',
      consequence:
        'Top sales agents spend 60% of their day following up on unvetted leads with zero buying intent.',
      severity: 'high',
    },
    {
      id: 're-c4',
      problem: 'Poor Property Matching',
      cause:
        'Relying on keyword filters or agent memory instead of deep semantic matching across inventory specs and buyer constraints.',
      consequence: 'Mismatched showings, wasted weekend tours, and lost buyer trust.',
      severity: 'critical',
    },
    {
      id: 're-c5',
      problem: 'Missed Follow-ups',
      cause:
        'Agents lack automated memory and schedule reminders after initial property viewings or proposal shares.',
      consequence:
        'Warm prospects go cold or buy from competing developers due to delayed nurturing.',
      severity: 'high',
    },
    {
      id: 're-c6',
      problem: 'Inventory Complexity',
      cause:
        'Rapidly changing floor unit availability, floor-rise premiums, and parking allocations across multiple towers.',
      consequence:
        'Pitching already-sold or price-revised units, creating deal friction and legal confusion.',
      severity: 'moderate',
    },
    {
      id: 're-c7',
      problem: 'Pricing Uncertainty',
      cause:
        'Opaque builder discounts, stamp duty variances, and shifting micro-market price benchmarks.',
      consequence:
        'Elongated negotiation cycles and hesitation from buyers unsure of true market value.',
      severity: 'moderate',
    },
    {
      id: 're-c8',
      problem: 'Site Visit Coordination',
      cause:
        'Manual scheduling back-and-forth between buyer, relationship manager, site sales office, and gate security.',
      consequence: '40% site visit no-show rate and lost weekend viewing capacity.',
      severity: 'critical',
    },
  ],

  // 03 Aether Opportunities
  opportunities: [
    {
      problem: 'Multi-portal lead fragmentation and slow manual intake.',
      opportunity:
        'Unified omni-channel cognitive ingestion that extracts buyer intent and criteria in under 15 seconds.',
      potentialMultiplier: '99% faster qualification',
    },
    {
      problem: 'Mismatched property recommendations and wasted inspection visits.',
      opportunity:
        'Vectorized multi-attribute property matching considering budget tolerance, carpet area, parking, and possession timeline.',
      potentialMultiplier: '3.4x higher visit-to-token ratio',
    },
    {
      problem: 'Stalled inventory and delayed follow-ups after initial viewings.',
      opportunity:
        'Reverse matching and automated contextual follow-up triggers based on buyer interaction telemetry.',
      potentialMultiplier: '28% faster inventory velocity',
    },
  ],

  // 04 Aether Solutions (12 Comprehensive Solutions)
  solutionMappings: [
    {
      problem: 'Lead Fragmentation',
      opportunity: 'Unified multi-channel ingestion',
      solution:
        'AI Lead Intelligence: Ingests, dedupes, and normalizes incoming leads across WhatsApp, portals, and web forms into an intelligent unified pipeline.',
      capabilityTag: 'Lead Ingestion',
    },
    {
      problem: 'Manual Requirement Collection',
      opportunity: 'Natural language entity extraction',
      solution:
        'Conversation-to-Requirement Engine: Automatically extracts location, budget, configuration, carpet area, parking, and possession from natural conversations.',
      capabilityTag: 'Entity Extraction',
    },
    {
      problem: 'Lack of Buyer Clarity',
      opportunity: 'Dynamic preference synthesis',
      solution:
        'Customer Preference Profile: Synthesizes explicit needs and implicit behavioral signals into an actionable living buyer dossier.',
      capabilityTag: 'Preference Profile',
    },
    {
      problem: 'Lead Prioritization Blindspots',
      opportunity: 'Predictive readiness modeling',
      solution:
        'Lead Scoring: Dynamically scores buyers on financing pre-approval, urgency timeline, and responsiveness to route high-intent buyers to top closers.',
      capabilityTag: 'Predictive Scoring',
    },
    {
      problem: 'Poor Property Matching',
      opportunity: 'Multi-factor inventory ranking',
      solution:
        'Intelligent Property Matching: Computes match percentage across budget thresholds, location micro-markets, and unit amenities with transparent reasoning.',
      capabilityTag: 'Property Matching',
    },
    {
      problem: 'Unsold Developer Inventory',
      opportunity: 'Instant prospective buyer discovery',
      solution:
        'Reverse Property Matching: Inverts the funnel to instantly surface qualified prospective buyers whenever new units or price revisions are logged.',
      capabilityTag: 'Reverse Discovery',
    },
    {
      problem: 'Inventory Complexity & Stale Availability',
      opportunity: 'Real-time multi-tower inventory ledger',
      solution:
        'Property Inventory Intelligence: Tracks live unit availability, floor-rise adjustments, and parking slot states across all projects.',
      capabilityTag: 'Inventory Ledger',
    },
    {
      problem: 'Missed Follow-ups & Lead Decay',
      opportunity: 'Autonomous engagement cadence',
      solution:
        'Follow-up Intelligence: Triggers context-rich follow-up prompts, payment plan revisions, and comparison sheets based on client viewing patterns.',
      capabilityTag: 'Follow-up Automation',
    },
    {
      problem: 'Site Visit Coordination Friction',
      opportunity: 'Autonomous multi-party calendar lock',
      solution:
        'Site Visit Automation: Self-schedules site visits, syncs sales rep calendars, and issues digital QR passes for community security access.',
      capabilityTag: 'Visit Dispatch',
    },
    {
      problem: 'Pricing Uncertainty & Negotiation Lag',
      opportunity: 'Comparative market valuation intelligence',
      solution:
        'Pricing Intelligence: Benchmarks per-sq-ft rates against micro-market transactions and generates optimized payment schedules in real time.',
      capabilityTag: 'Pricing Engine',
    },
    {
      problem: 'Market Trend Blindspots',
      opportunity: 'Aggregated micro-market demand telemetry',
      solution:
        'Market Intelligence: Tracks sub-market demand trends, absorption velocity, and buyer budget shifts across key geographic corridors.',
      capabilityTag: 'Market Analytics',
    },
    {
      problem: 'Opaque Brokerage Pipeline Metrics',
      opportunity: 'Executive pipeline forecasting',
      solution:
        'Sales Analytics: Provides full-funnel visibility from first touch to registration with conversion attribution and agent velocity metrics.',
      capabilityTag: 'Pipeline Analytics',
    },
  ],

  // 05 Intelligent Workflow
  workflowPipeline: {
    input: {
      source: 'WhatsApp Inbound Message',
      details: 'Unstructured natural language buyer inquiry received at 9:45 PM.',
      rawSignal:
        '"Looking for a 2BHK in Powai around ₹1.5 crore with parking and possession within 6 months."',
    },
    intelligence: {
      diagnosis:
        'High Intent (96% readiness score); budget verified against Powai micro-market; pre-approved home loan status detected.',
      metricScored: 'Intent Readiness Index: 96%',
    },
    recommendation: {
      actionProposed:
        'Match with Hiranandani Castle Rock & L&T Emerald Isle Phase II; dispatch digital dossier and propose Saturday 2:30 PM site visit.',
      confidence: '98.8% match confidence',
    },
    action: {
      stepsExecuted: [
        'Synthesized Customer Preference Profile & tagged high intent',
        'Vector-matched top 4 properties in Powai cluster meeting budget and parking criteria',
        'Dispatched interactive property dossier to client via WhatsApp',
        'Reserved Saturday 2:30 PM preview slot with Senior Project Specialist',
      ],
      targetSystem: 'CRM & Site Dispatch Engine',
    },
    result: {
      outcome:
        'Buyer qualified, top 4 matching properties presented, and site visit confirmed in under 15 seconds.',
      timeToImpact: '14.2 seconds',
    },
  },

  // 06 Interactive Demo
  interactiveDemo: {
    scenarioTitle: 'Conversation-to-Requirement & Property Match Engine',
    scenarioSubtitle:
      'Simulate natural language message ingestion, requirement synthesis, and instant inventory matching.',
    simulatedSignal: {
      Customer: 'Ananya & Rohan Malhotra',
      Message:
        '"I\'m looking for a 2BHK in Powai around ₹1.5 crore with parking and preferably possession within 6 months."',
      ExtractedConfig: '2 BHK Luxury / Modern',
      ExtractedLocation: 'Powai Corridor (Central / Chandivali)',
      ExtractedBudget: '₹1.50 Cr (Tolerance ±5%)',
      ParkingNeeded: '1 Covered Dedicated Bay',
      PossessionWindow: '≤ 6 Months (Ready / Near-Possession)',
    },
    engineReasoning:
      'Parsed unstructured buyer parameters. Vector-matched 4 properties across Powai inventory with 85%-96% match scores.',
    automatedActions: [
      'Extracted 6 discrete requirement entities from free-form text',
      'Generated verified Buyer Preference Profile with ₹1.5 Cr ceiling',
      'Queried active Powai inventory and ranked 4 matching properties',
      'Prepared instant Site Visit booking slots and side-by-side comparison dossier',
    ],
    verifiedOutcome:
      'Requirement profile built and 4 high-match properties surfaced ready for inspection.',
    executionDuration: '12.8 seconds',
  },

  // 07 Business Intelligence
  businessIntelligence: {
    insights:
      '82% of qualified buyers who tour a property within 24 hours of inquiry make an offer within 14 days.',
    predictions:
      'Weekend showing volume projected to surge 35% based on seasonal spring listing momentum.',
    risks:
      'Average 4.2-hour agent response lag causing 44% of weekend buyer leads to go cold before first contact.',
    opportunities:
      'Automating off-market buyer matching can generate an estimated $180k in additional annual brokerage commission.',
    recommendations:
      'Enable autonomous evening showing locks and pre-qualify buyer budgets prior to agent assignment.',
  },

  // 08 Business Impact
  businessImpact: {
    time: 'Recovers 12+ hours per agent per week previously spent on manual tour scheduling and phone tag.',
    efficiency:
      'Increases agent showing conversion rates by 14.2% through pre-qualified intent screening.',
    customerExperience:
      'Delivers sub-15 second response times, wowing high-net-worth buyers with instant service.',
    operations:
      'Eliminates data entry into CRM and synchronizes transaction documentation autonomously.',
    decisionMaking:
      'Provides managing brokers real-time visibility into lead velocity, agent utilization, and deal pipeline health.',
    visibility:
      'Unified dashboard tracking buyer readiness scores and showing feedback across all active properties.',
  },

  // 09 Additional Capabilities
  additionalCapabilities: [
    {
      groupTitle: 'MLS & Property Data Integration',
      summary: 'Direct real-time synchronizer with MLS feeds and property databases.',
      features: [
        'Automated listing attribute sync',
        'Comparable property pricing engine',
        'Tax and zoning history extraction',
      ],
    },
    {
      groupTitle: 'Autonomous Document & Compliance Mesh',
      summary: 'Cognitive contract parsing and escrow milestone verification.',
      features: [
        'Disclosure packet validation',
        'Proactive signature chasing',
        'Earnest money deposit tracking',
      ],
    },
    {
      groupTitle: 'Client Portfolio Intelligence',
      summary: 'Continuous buyer preference matching for off-market inventory.',
      features: [
        'Dynamic buyer criteria matching',
        'Off-market listing match alerts',
        'Automated price reduction alerts',
      ],
    },
  ],
};
