import { IndustryData } from '../types';

export const INDUSTRIES: IndustryData[] = [
  {
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
  },
  {
    id: 'restaurants',
    slug: 'restaurants',
    name: 'Restaurants & Food Businesses',
    shortName: 'Restaurants',
    transformationStatement:
      'Predictive demand forecasting, dynamic prep scheduling, and automated inventory replenishment.',
    tagline:
      'Predictive demand forecasting, kitchen workflow pacing, and menu profitability optimization.',
    description:
      'Aether transforms restaurant kitchens and multi-outlet food businesses by forecasting dish-level demand, automating daily prep par-levels, eliminating food waste, and orchestrating high-velocity kitchen workflows.',
    accentColor: 'amber',
    iconName: 'Utensils',
    categoryFocus: ['Operations-focused', 'Intelligence-heavy'],
    heroHeadline: 'Turn Food Waste & Kitchen Chaos Into Precision High-Margin Dining Shifts.',
    heroSubheadline:
      'How modern restaurant operators and multi-outlet culinary brands use Aether to predict item demand, synchronize raw ingredient orders, and streamline kitchen line execution.',
    stats: [
      {
        label: 'Food Waste Reduction',
        value: 'Up to -68%',
        change: 'Illustrative',
        detail: 'Simulated dynamic prep batching impact',
      },
      {
        label: 'Kitchen Ticket Velocity',
        value: '12.4m',
        change: 'Potential',
        detail: 'Illustrative peak shift model target',
      },
      {
        label: 'Food Cost Margin',
        value: '+4.8%',
        change: 'Example',
        detail: 'Potential gain in modeled recipe procurement',
      },
    ],

    // 02 Business Challenges (8 Specified Problems)
    challenges: [
      {
        id: 'rst-c1',
        problem: 'Demand Uncertainty',
        cause:
          'Unpredictable fluctuations across weather, local events, and seasonal holidays causing erratic covers.',
        consequence:
          'Erratic kitchen prep resulting in either 86ing popular dishes mid-service or heavy end-of-night spoilage.',
        severity: 'critical',
      },
      {
        id: 'rst-c2',
        problem: 'Food Wastage',
        cause:
          'Over-prepping high-cost perishable gravies, proteins, and cut vegetables based on static guesswork.',
        consequence:
          'Operators lose 8–12% of total inventory cost directly into kitchen trash bins every single week.',
        severity: 'critical',
      },
      {
        id: 'rst-c3',
        problem: 'Inventory Issues',
        cause:
          'Manual morning counts and blind reordering lead to stockouts on key proteins and emergency expensive purchases.',
        consequence:
          'Frequent recipe compromises, lost delivery orders, and unexpected kitchen halt moments.',
        severity: 'high',
      },
      {
        id: 'rst-c4',
        problem: 'Kitchen Bottlenecks',
        cause:
          'Simultaneous dine-in seatings and aggregator delivery spikes overloading the sauté, fryer, and tandoor passes.',
        consequence:
          'Ticket times blow past 45 minutes, resulting in cold food complaints and stressed line cooks.',
        severity: 'critical',
      },
      {
        id: 'rst-c5',
        problem: 'Menu Profitability Uncertainty',
        cause:
          'Opaque ingredient cost inflation where rising dairy and meat prices erode margins on legacy fixed-price dishes.',
        consequence:
          'Restaurants unintentionally promote high-volume items that deliver negative gross margins.',
        severity: 'high',
      },
      {
        id: 'rst-c6',
        problem: 'Supplier Complexity',
        cause:
          'Managing fragmented vendors across poultry, seafood, dairy, and dry goods with varying delivery SLAs and credit terms.',
        consequence:
          'Late morning deliveries delay prep cycles, causing missing items during lunch rush openings.',
        severity: 'moderate',
      },
      {
        id: 'rst-c7',
        problem: 'Customer Retention',
        cause:
          'Inability to track individual guest dining preferences, dietary allergies, and frequency intervals across visits.',
        consequence:
          'Guests defect to competing dining spots without proactive loyalty re-engagement or recovery outreach.',
        severity: 'moderate',
      },
      {
        id: 'rst-c8',
        problem: 'Multi-Outlet Variance',
        cause:
          'Inconsistent recipe compliance, divergent food cost ratios, and unequal prep quality across regional branch outlets.',
        consequence:
          'Brand dilution and wild margin swings between flagship and satellite restaurant locations.',
        severity: 'high',
      },
    ],

    // 03 Aether Opportunities
    opportunities: [
      {
        problem: 'Uncertain guest footfall and erratic prep quantities.',
        opportunity:
          'AI-driven dish-level demand forecasting factoring weather, day-of-week, and historical velocity.',
        potentialMultiplier: '68% food waste reduction',
      },
      {
        problem: 'Kitchen line ticket congestion during peak dining hours.',
        opportunity:
          'Dynamic station load balancing and delivery ticket pacing aligned to line bandwidth.',
        potentialMultiplier: '50% faster ticket execution',
      },
      {
        problem: 'Multi-outlet recipe drift and inventory shrinkage.',
        opportunity:
          'Centralized live inventory burn rate tracking and standardized recipe compliance scoring.',
        potentialMultiplier: '4.8% gross margin expansion',
      },
    ],

    // 04 Aether Solutions (10 Specified Solutions)
    solutionMappings: [
      {
        problem: 'Demand Uncertainty',
        opportunity: 'Predictive daily cover & item modeling',
        solution:
          'Demand Forecasting: Models exact dish consumption curves across weekdays, weekends, rainy days, and festival surges.',
        capabilityTag: 'Demand Forecast',
      },
      {
        problem: 'Food Wastage & Over-Prepping',
        opportunity: 'Time-staged prep par calculations',
        solution:
          'Preparation Intelligence: Computes staged kitchen prep schedules, par-cooking volumes, and sauce simmer batch sizes.',
        capabilityTag: 'Prep Optimizer',
      },
      {
        problem: 'Inventory Stockouts & Emergency Runs',
        opportunity: 'Real-time recipe-level depletion ledger',
        solution:
          'Inventory Intelligence: Translates forecasted menu mix into precise raw ingredient purchase orders across all vendors.',
        capabilityTag: 'Auto-Replenish',
      },
      {
        problem: 'Perishable Spoilage in Walk-Ins',
        opportunity: 'Continuous ingredient shelf-life monitoring',
        solution:
          'Wastage Detection: Flags high-cost raw proteins and dairy approaching expiration with automated daily salvage menus.',
        capabilityTag: 'Waste Prevention',
      },
      {
        problem: 'Kitchen Line Ticket Congestion',
        opportunity: 'Dynamic station capacity pacing',
        solution:
          'Kitchen Workflow Intelligence: Paces dine-in and online delivery orders across grill, sauté, and tandoor stations in real time.',
        capabilityTag: 'Kitchen Pacing',
      },
      {
        problem: 'Opaque Dish Profitability Margins',
        opportunity: 'Live recipe cost attribution',
        solution:
          'Menu Profitability: Continuously classifies menu items into Stars, Workhorses, Puzzles, and Dogs with dynamic price recommendations.',
        capabilityTag: 'Menu Engineering',
      },
      {
        problem: 'Fragmented Vendor Coordination',
        opportunity: 'Consolidated PO dispatch & SLA auditing',
        solution:
          'Supplier Intelligence: Automatically splits purchase orders to optimal suppliers based on price, delivery reliability, and cut quality.',
        capabilityTag: 'Vendor Orchestration',
      },
      {
        problem: 'Generic Guest Dining Experiences',
        opportunity: 'Dine-in behavioral tagging',
        solution:
          'Customer Segmentation: Profiles high-spend corporate accounts, family banquet bookers, and delivery-first consumers.',
        capabilityTag: 'Guest Intelligence',
      },
      {
        problem: 'Guest Churn & Infrequent Visits',
        opportunity: 'Predictive visit cadence prompter',
        solution:
          'Repeat Customer Prediction: Identifies drop-offs in usual dining frequency and triggers personalized culinary tasting invites.',
        capabilityTag: 'Retention Engine',
      },
      {
        problem: 'Discrepancies Across Regional Branches',
        opportunity: 'Unified multi-outlet variance dashboard',
        solution:
          'Multi-Outlet Analytics: Tracks recipe adherence, food cost variance, and prep productivity across every branch location.',
        capabilityTag: 'Multi-Branch Sync',
      },
    ],

    // 05 Intelligent Workflow (6 Steps)
    workflowPipeline: {
      input: {
        source: 'POS Historical Sales & Weather Webhook',
        details:
          'Ingesting 90-day item consumption telemetry + Saturday forecast + rainy weather advisory.',
        rawSignal:
          'Historical Saturday Average: 440 covers. Weather alert: 80% heavy rainfall anticipated.',
      },
      intelligence: {
        diagnosis:
          'Dine-in covers projected to drop 22%; online delivery curry orders projected to surge +70%.',
        metricScored: 'Forecast Precision Score: 98.4%',
      },
      recommendation: {
        actionProposed:
          'Increase Butter Chicken & Biryani batch prep +35%; reduce fresh pasta & chilled seafood prep -45%.',
        confidence: '97.2% recipe optimal',
      },
      action: {
        stepsExecuted: [
          'Calculated exact raw poultry & basmati rice inventory requirements',
          'Issued morning purchase orders to primary meat and packaging vendors',
          'Dispatched staged kitchen prep sheets to head chef tablet',
          'Adjusted online delivery aggregator prep buffer to 12 mins',
        ],
        targetSystem: 'Kitchen Display System & Vendor PO Gateway',
      },
      result: {
        outcome:
          'Zero dish stockouts achieved during peak dinner rush; shift food wastage kept below 2.1%.',
        timeToImpact: 'Instantaneous shift planning',
      },
    },

    // 06 Interactive Demo
    interactiveDemo: {
      scenarioTitle: 'Predictive Kitchen Prep & Inventory Dispatch Engine',
      scenarioSubtitle:
        'Simulate scenario-driven demand forecasting across Weekdays, Weekends, Rain, and Festivals.',
      simulatedSignal: {
        Shift: 'Tomorrow Evening Service',
        ProjectedCovers: '240 Dine-in / 110 Delivery',
        TopMovingDish: 'Slow-Cooked Dum Biryani (85 pots)',
        CriticalIngredient: 'Fresh Boneless Poultry (44 kg required)',
        EstimatedFoodCost: '27.4% (Industry target < 30%)',
      },
      engineReasoning:
        'Shift forecast synthesized from historical sales patterns, weather telemetry, and active table bookings.',
      automatedActions: [
        'Generated dish-level prep quantities and par-cooking milestones',
        'Calculated inventory shortfalls and generated vendor purchase order',
        'Balanced station assignments across grill, curry, and bakery lines',
        'Activated delivery packaging stage for expedited rider dispatch',
      ],
      verifiedOutcome: 'Kitchen prep roadmap locked with guaranteed zero stockout buffer.',
      executionDuration: 'Sub-second calculation',
    },

    // 07 Business Intelligence
    businessIntelligence: {
      insights:
        'Butter Chicken and Dum Biryani comprise 62% of high-margin dinner contribution with zero spoilage risk.',
      predictions:
        'Weekend dinner rush projected to require 48% more marinated poultry and auxiliary tandoor heating.',
      risks:
        'Fresh Atlantic Salmon and heavy cream sauces show elevated spoilage risk if prep batch sizes exceed 35 portions.',
      opportunities:
        'Automated recipe depletion tracking can recover an estimated ₹2,48,000 in monthly kitchen waste reduction.',
      recommendations:
        'Stagger Biryani handi sealing into two cycles (11:00 AM and 6:30 PM) to eliminate cold leftover write-offs.',
    },

    // 08 Business Impact
    businessImpact: {
      time: 'Recovers 14+ hours per week per head chef previously spent on manual prep list calculation and vendor phone calls.',
      efficiency:
        'Cuts average kitchen ticket times by 50% (down from 24.8 mins to 12.4 mins) through intelligent station pacing.',
      customerExperience:
        'Guarantees zero dish stockouts on signature items and ensures consistent plate temperatures.',
      operations:
        'Eliminates 68% of food waste through dynamic time-staged prep batching and live inventory depletion.',
      decisionMaking:
        'Provides multi-outlet culinary directors real-time visibility into recipe compliance, food cost variance, and dish margins.',
      visibility:
        'Unified multi-outlet dashboard tracking dish velocity, station load, and supplier order status.',
    },
    additionalCapabilities: [
      {
        groupTitle: 'Kitchen Display System (KDS) Pacing',
        summary: 'Synchronizes order release across hot line, pantry, and expo.',
        features: [
          'Station load balancing',
          'Multi-course cook countdowns',
          'Dynamic prep batch timing',
        ],
      },
      {
        groupTitle: 'Supplier & Vendor EDI Automation',
        summary: 'Automated purchase orders for produce, meats, and beverages.',
        features: [
          'Dynamic par level adjustments',
          'Price variance detection',
          'Receiving slip OCR validation',
        ],
      },
      {
        groupTitle: 'Guest Loyalty & Dietary Engine',
        summary: 'Recognizes VIP diners and tracks allergy preferences automatically.',
        features: [
          'VIP table preference flags',
          'Allergen safety prompts',
          'Automated anniversary invitations',
        ],
      },
    ],
  },
  {
    id: 'gyms',
    slug: 'gyms',
    name: 'Gyms & Fitness Centers',
    shortName: 'Gyms & Fitness',
    transformationStatement:
      'Autonomous member retention, silent churn interception, and standby class filling.',
    tagline:
      'Autonomous member retention, automated class utilization, and predictive churn prevention.',
    description:
      'Aether transforms fitness businesses by detecting silent member drop-off patterns weeks before cancellation, automating renewal triggers, and optimizing class capacity.',
    accentColor: 'emerald',
    iconName: 'Dumbbell',
    categoryFocus: ['Customer-focused', 'Operations-focused'],
    heroHeadline: 'Stop silent member churn before it happens.',
    heroSubheadline:
      'Empower fitness clubs with early warning member behavior analysis and automated high-touch re-engagement sequences.',
    stats: [
      {
        label: 'Member Retention',
        value: '91.4%',
        change: 'Illustrative',
        detail: 'Simulated 12-month cohort model',
      },
      {
        label: 'Class Capacity Fill',
        value: '88%',
        change: 'Potential',
        detail: 'Illustrative dynamic standby backfill target',
      },
      {
        label: 'Saved At-Risk ARR',
        value: 'Up to $140k',
        change: 'Example',
        detail: 'Illustrative retention scenario per club',
      },
    ],
    // 02 Business Challenges (7 Specified Problems)
    challenges: [
      {
        id: 'gym-c1',
        problem: 'Member Inactivity',
        cause:
          'Members gradually reduce weekly visits from 4 to 0 over 30–60 days without early staff detection.',
        consequence:
          'Silent habit break leads directly to cancellation without any recovery intervention.',
        severity: 'critical',
      },
      {
        id: 'gym-c2',
        problem: 'Member Churn',
        cause:
          'High annual member attrition (up to 40% yearly) requiring expensive acquisition campaigns just to maintain baseline count.',
        consequence: 'Clubs lose $120k–$200k in annual recurring membership dues.',
        severity: 'critical',
      },
      {
        id: 'gym-c3',
        problem: 'Missed Renewals',
        cause:
          'Expiring annual contracts and failed autopay credit cards sitting unaddressed in billing backlogs.',
        consequence:
          '15–20% of lapsed memberships simply drift away rather than actively cancelling.',
        severity: 'high',
      },
      {
        id: 'gym-c4',
        problem: 'Poor Engagement',
        cause:
          'New members left to self-navigate without personalized routine benchmarks or community connections.',
        consequence:
          '50% of new joiners drop off within their first 90 days due to lack of motivation.',
        severity: 'high',
      },
      {
        id: 'gym-c5',
        problem: 'Trainer Scheduling',
        cause:
          'Personal trainers manage schedules and client cancellations over personal text messages without calendar sync.',
        consequence:
          'Lost commission tracking, unbilled late cancellations, and underutilized trainer hours.',
        severity: 'moderate',
      },
      {
        id: 'gym-c6',
        problem: 'Class Capacity',
        cause:
          'Peak spin, HIIT, and reformer pilates classes book out instantly with a 25% no-show rate.',
        consequence:
          'Empty studio spots during prime hours while waitlisted members are turned away.',
        severity: 'high',
      },
      {
        id: 'gym-c7',
        problem: 'Customer Personalization',
        cause:
          'Treating high-intensity athletes, wellness yogis, and corporate lunchtime runners with identical generic emails.',
        consequence:
          'Low email open rates (<12%) and disconnect between members and club amenities.',
        severity: 'moderate',
      },
    ],

    // 03 Aether Opportunities
    opportunities: [
      {
        problem: 'Silent member drop-off before formal cancellation.',
        opportunity:
          'Turnstile telemetry & habit break modeling that alerts staff after 10 days of inactivity.',
        potentialMultiplier: '42% churn intercepted',
      },
      {
        problem: 'Class no-shows and empty peak studio spots.',
        opportunity: 'Autonomous 2-hour standby seat release and attendance rewards.',
        potentialMultiplier: '+24% class utilization',
      },
      {
        problem: 'Missed contract renewals and billing failures.',
        opportunity: 'Predictive renewal cadence prompts with tailored loyalty milestone rewards.',
        potentialMultiplier: '89.4% cohort retention',
      },
    ],

    // 04 Aether Solutions (9 Specified Solutions for Gyms)
    solutionMappings: [
      {
        problem: 'Lack of Member Persona Understanding',
        opportunity: 'Granular habit and attendance clustering',
        solution:
          'Member Intelligence: Unifies turnstile check-ins, app logs, class preferences, and workout frequency into a 360° profile.',
        capabilityTag: 'Member Dossier',
      },
      {
        problem: 'Member Inactivity & Habit Breaks',
        opportunity: 'Predictive attendance decline triggers',
        solution:
          'Inactivity Detection: Flags members whose weekly visit frequency drops below their individual historical threshold.',
        capabilityTag: 'Early Alert',
      },
      {
        problem: 'High Annual Member Churn',
        opportunity: 'Multi-variable churn probability scoring',
        solution:
          'Churn Prediction: Scores every member from 0–100% on churn likelihood based on visit velocity, app logins, and booking friction.',
        capabilityTag: 'Risk Scoring',
      },
      {
        problem: 'Missed Renewals & Autopay Lapses',
        opportunity: 'Autonomous contract renewal triggers',
        solution:
          'Renewal Intelligence: Initiates personalized renewal sequences 30 days prior with customized loyalty milestone perks.',
        capabilityTag: 'Renewal Engine',
      },
      {
        problem: 'Poor Member Engagement & Plateaus',
        opportunity: 'Automated motivational milestones',
        solution:
          'Engagement Recommendations: Prescribes tailored recovery sessions, body composition scans, and community challenges.',
        capabilityTag: 'Engagement Prompts',
      },
      {
        problem: 'Trainer Scheduling & Late Dropoffs',
        opportunity: 'Centralized trainer booking mesh',
        solution:
          'Trainer Scheduling: Synchronizes client availability, enforces late cancellation billing, and manages commission payroll.',
        capabilityTag: 'Trainer Dispatch',
      },
      {
        problem: 'Studio Class Capacity & No-Shows',
        opportunity: 'Dynamic standby queue allocation',
        solution:
          'Class Intelligence: Auto-releases unfilled bikes and reformer beds to waitlisted members 90 minutes before class.',
        capabilityTag: 'Class Optimizer',
      },
      {
        problem: 'Opaque Membership Cohort Health',
        opportunity: 'Executive cohort retention tracking',
        solution:
          'Membership Analytics: Tracks lifetime value (LTV), tier upgrades, corporate pass utilization, and revenue per square foot.',
        capabilityTag: 'Cohort Analytics',
      },
      {
        problem: 'Reactive Retention Interventions',
        opportunity: 'Closed-loop retention workflow ledger',
        solution:
          'Retention Analytics: Measures intervention ROI, coach outreach conversion, and preserved annual recurring revenue.',
        capabilityTag: 'Retention Ledger',
      },
    ],
    workflowPipeline: {
      input: {
        source: 'Turnstile Access Scanner Telemetry',
        details: 'Member attendance drop detected for annual Tier-1 subscriber.',
        rawSignal: 'Member: Elena Rostova. History: 4.2 visits/wk -> 0 visits in 21 days.',
      },
      intelligence: {
        diagnosis: 'Habit break threshold passed; 89% churn probability within 30 days.',
        metricScored: 'Churn Vulnerability Index: Tier 1 Critical',
      },
      recommendation: {
        actionProposed:
          'Dispatch personalized coach touchpoint with complimentary hydro-massage recovery pass.',
        confidence: '92.7% retention effectiveness',
      },
      action: {
        stepsExecuted: [
          'Added high-priority task to Head Trainer dashboard',
          'Delivered personalized conversational wellness check-in via SMS',
          'Offered one-tap hydro-massage recovery booking for Friday morning',
          'Logged intervention in member retention ledger',
        ],
        targetSystem: 'Club CRM & Trainer Task Board',
      },
      result: {
        outcome: 'Member booked recovery session; $2,160 annual subscription value preserved.',
        timeToImpact: '48 minutes',
      },
    },
    interactiveDemo: {
      scenarioTitle: 'Silent Member Churn Detection & Re-Activation Sequence',
      scenarioSubtitle:
        'Simulate Aether detecting a high-value member dropping from 4 visits/week to 0 visits.',
      simulatedSignal: {
        Member: 'Elena Rostova (Tier: Premium All-Access, $180/mo)',
        VisitHistory: 'Historical: 4.2 visits/wk -> Current: 0 visits in 21 days',
        RiskScore: 'High Churn Probability (89%)',
      },
      engineReasoning:
        'Habit break threshold passed. Automated coach intervention and recovery booking triggered.',
      automatedActions: [
        'Generated personalized re-engagement card in Head Trainer task board',
        'Auto-sent conversational wellness check-in with one-tap recovery booking',
        'Member booked recovery slot for Friday morning',
        'Re-activation confirmed; churn flag status lowered to Moderate',
      ],
      verifiedOutcome:
        'Member restored active routine; $2,160 annual subscription value preserved.',
      executionDuration: '48 minutes to member response',
    },
    businessIntelligence: {
      insights:
        'Members who try at least two different class formats within their first 30 days have an 88% 12-month retention rate.',
      predictions:
        'January surge cohort expected to experience initial churn risk window at day 45 (mid-February).',
      risks:
        'Peak Tuesday 18:00 spin class shows 24% late cancellation rate, leaving 6 bikes empty per session.',
      opportunities:
        'Automating personal training package renewals can generate an estimated $45k in recovered revenue.',
      recommendations:
        'Trigger 14-day inactivity incentives and auto-release unfilled spin bikes 90 minutes prior to class.',
    },
    businessImpact: {
      time: 'Saves fitness managers 10 hours per week in manual spreadsheet tracking of inactive members.',
      efficiency:
        'Increases group fitness studio fill rate to 88% through dynamic standby backfills.',
      customerExperience:
        'Provides high-touch member care that makes members feel valued and supported in their fitness goals.',
      operations:
        'Automates trainer session tracking, commissions, and package consumption without manual logs.',
      decisionMaking:
        'Provides club owners with accurate 90-day cash flow projections based on churn risk modeling.',
      visibility:
        'Live telemetry displaying daily turnstile scans, active membership tiers, and at-risk accounts.',
    },
    additionalCapabilities: [
      {
        groupTitle: 'Turnstile & Mobile App Telemetry',
        summary: 'Real-time check-in stream analysis and app workout logging.',
        features: [
          'RFID gate scan integration',
          'Mobile app engagement tracking',
          'Facility heat map density',
        ],
      },
      {
        groupTitle: 'Trainer Commission & Billing Mesh',
        summary: 'Automates session completion sign-offs and payroll calculations.',
        features: [
          'Split-rate commission rules',
          'Late cancellation auto-charge',
          'Package expiration warnings',
        ],
      },
      {
        groupTitle: 'Dynamic Yield & Pass Monetization',
        summary: 'Monetizes off-peak hours with guest pass and day pass yield management.',
        features: [
          'Off-peak pass dynamic pricing',
          'Corporate wellness tracking',
          'Automated locker assignment',
        ],
      },
    ],
  },
  {
    id: 'salons',
    slug: 'salons',
    name: 'Salons & Beauty Businesses',
    shortName: 'Salons & Beauty',
    transformationStatement:
      'Intelligent schedule nesting, treatment cycle re-booking, and 24/7 concierge.',
    tagline:
      'Smart chair utilization, automated re-booking cadence, and dynamic practitioner dispatch.',
    description:
      'Aether transforms appointment-based wellness businesses by predicting optimal client re-booking cycles, filling empty chair gaps, and eliminating receptionist bottlenecks.',
    accentColor: 'violet',
    iconName: 'Sparkles',
    categoryFocus: ['Operations-focused', 'Customer-focused'],
    heroHeadline: 'Fill every chair and automate client re-booking cycles.',
    heroSubheadline:
      'Eliminate awkward calendar gaps and keep stylists booked solid with autonomous client lifecycle scheduling.',
    stats: [
      {
        label: 'Chair Utilization',
        value: 'Up to 94%',
        change: 'Potential',
        detail: 'Illustrative schedule gap-fill scenario',
      },
      {
        label: 'Re-Booking Interval',
        value: '5.2 wks',
        change: 'Illustrative',
        detail: 'Simulated cadence prompt optimization',
      },
      {
        label: 'Receptionist Admin',
        value: 'Up to -65%',
        change: 'Potential',
        detail: 'Simulated automated dispatch model',
      },
    ],
    // 02 Business Challenges (6 Specified Problems for Salons)
    challenges: [
      {
        id: 'sal-c1',
        problem: 'No-Shows',
        cause:
          'Clients book weekend prime color and styling slots but fail to attend without 24-hour notice.',
        consequence:
          'Salons lose up to 14.5% of gross revenue while paying fixed master stylist hourly wages.',
        severity: 'critical',
      },
      {
        id: 'sal-c2',
        problem: 'Missed Rebooking',
        cause:
          'Stylists forget to lock next appointments at checkout; clients stretch 6-week color cycles to 12+ weeks.',
        consequence: 'Loss of 2.4 billable service appointments per client every year.',
        severity: 'critical',
      },
      {
        id: 'sal-c3',
        problem: 'Customer Churn',
        cause:
          'Clients switch salons when communication lapses or after inconsistent formula records across stylist shifts.',
        consequence:
          'High churn of valuable balayage and spa regulars requiring expensive replacement acquisition.',
        severity: 'high',
      },
      {
        id: 'sal-c4',
        problem: 'Scheduling Inefficiency',
        cause:
          '45-minute dead zones between lengthy chemical color and foil development appointments.',
        consequence: 'Unbilled chair capacity wasting 22% of daily salon potential.',
        severity: 'high',
      },
      {
        id: 'sal-c5',
        problem: 'Staff Utilization',
        cause:
          'Junior assistants underbooked while master stylists suffer burnout from double-booking.',
        consequence: 'Erratic payroll costs, stylist turnover, and compromised service quality.',
        severity: 'moderate',
      },
      {
        id: 'sal-c6',
        problem: 'Unknown Preferences',
        cause:
          'Color formulas, toner ratios, scalp sensitivities, and beverage choices stored only in stylist memory.',
        consequence:
          'Sub-par guest experience when regular stylists take leave or change branches.',
        severity: 'moderate',
      },
    ],

    // 03 Aether Opportunities
    opportunities: [
      {
        problem: 'Missed rebookings and stretched treatment intervals.',
        opportunity:
          'Predictive treatment cycle prompters timed to individual hair regrowth and toner fade timelines.',
        potentialMultiplier: '1.8 weeks faster re-booking',
      },
      {
        problem: 'High appointment no-show rates on premium weekend slots.',
        opportunity: 'Intelligent card-on-file deposit holds and autonomous standby queue fills.',
        potentialMultiplier: '88% no-show reduction',
      },
      {
        problem: 'Unbilled 45-minute chair dead zones between color services.',
        opportunity: 'Dynamic nesting of express services (blowouts, toners, brow threading).',
        potentialMultiplier: '+26% chair utilization',
      },
    ],

    // 04 Aether Solutions (9 Specified Solutions for Salons)
    solutionMappings: [
      {
        problem: 'Unknown Client Needs & Formulas',
        opportunity: 'Unified client digital profile ledger',
        solution:
          'Customer Intelligence: Consolidates historical chemical formulas, developer strengths, scalp sensitivities, and stylist preferences.',
        capabilityTag: 'Guest Dossier',
      },
      {
        problem: 'Opaque Past Treatment Logs',
        opportunity: 'Longitudinal service telemetry tracking',
        solution:
          'Service History: Tracks every chemical service, toner ratio, cut geometry, and retail product purchase across all visits.',
        capabilityTag: 'Service Ledger',
      },
      {
        problem: 'Calendar Dead Zones & Booking Gaps',
        opportunity: 'Intelligent calendar gap nesting',
        solution:
          'Appointment Intelligence: Automatically identifies 45-minute gaps between foil processing and nests express blowouts.',
        capabilityTag: 'Schedule Nesting',
      },
      {
        problem: 'Prime-Time Weekend No-Shows',
        opportunity: 'Behavioral cancellation risk scoring',
        solution:
          'No-Show Prediction: Scores booking cancellation risks and enforces automated confirmation links and deposit authorizations.',
        capabilityTag: 'No-Show Guard',
      },
      {
        problem: 'Stretched 12-Week Visit Cycles',
        opportunity: 'Regrowth-aware rebooking triggers',
        solution:
          'Rebooking Intelligence: Predicts exact gray regrowth and blonde brassiness windows to dispatch personalized 1-tap rebooking links.',
        capabilityTag: 'Cadence Engine',
      },
      {
        problem: 'Unoptimized Retail & Service Upsells',
        opportunity: 'Tailored chemical companion recommendations',
        solution:
          'Service Recommendations: Suggests bonding treatments (Olaplex/K18) and take-home sulfate-free regimens matched to active color.',
        capabilityTag: 'Upsell Engine',
      },
      {
        problem: 'Imbalanced Stylist Utilization',
        opportunity: 'Skill-matched station scheduling',
        solution:
          'Staff Scheduling: Balances junior assistant prep, master stylist chair occupancy, and spa room turnover.',
        capabilityTag: 'Staff Dispatch',
      },
      {
        problem: 'Lapsed High-Ticket Client Defection',
        opportunity: 'Predictive churn intervention mesh',
        solution:
          'Retention Intelligence: Identifies clients exceeding 1.5x their usual visit interval and triggers personalized recovery invitations.',
        capabilityTag: 'Retention Guard',
      },
      {
        problem: 'Opaque Chair Yield & Retail Margin Metrics',
        opportunity: 'Per-chair revenue velocity analytics',
        solution:
          'Revenue Analytics: Visualizes revenue per chair-hour, stylist retail conversion, and service margin contributions.',
        capabilityTag: 'Yield Analytics',
      },
    ],
    workflowPipeline: {
      input: {
        source: 'Salon Booking Calendar Telemetry',
        details: 'Stylist Sarah has a 50-minute gap on Thursday between 14:00 and 14:50.',
        rawSignal:
          'Slot: Thursday 14:00–14:50. Qualified Express Clients: 4 nearby clients due for blowout.',
      },
      intelligence: {
        diagnosis:
          'Predictable $75 chair revenue leakage. Client "Jessica Taylor" is due for weekly blowout.',
        metricScored: 'Gap-Fill Probability: 91.5%',
      },
      recommendation: {
        actionProposed:
          'Send conversational VIP express booking invite to Jessica with 10% midday reward.',
        confidence: '94.2% match',
      },
      action: {
        stepsExecuted: [
          'Sent personalized SMS booking link to Jessica',
          'Jessica confirmed via one-tap link in 8 minutes',
          'Calendar locked and credit card hold authorized',
          'Updated Sarah’s daily chair itinerary',
        ],
        targetSystem: 'Salon POS & Client Messaging',
      },
      result: {
        outcome: 'Gap filled with zero staff effort; daily chair revenue increased by $75.',
        timeToImpact: '8 minutes',
      },
    },
    interactiveDemo: {
      scenarioTitle: 'Midday Chair Gap Filling & Express Service Nesting',
      scenarioSubtitle:
        'Simulate Aether detecting a 50-minute dead zone and securing a client booking in 8 minutes.',
      simulatedSignal: {
        Stylist: 'Sarah Jenkins (Master Colorist)',
        CalendarGap: 'Thursday 14:00–14:50 (Unbilled Window)',
        TargetClient: 'Jessica Taylor (Blowout due date: Today)',
      },
      engineReasoning:
        'Unbilled chair capacity detected. Automated express outreach dispatched with one-tap confirmation.',
      automatedActions: [
        'Identified 50-minute unbilled window between balayage appointments',
        'Queried client history for matching express blowout preferences',
        'Auto-sent personalized VIP booking prompt via SMS',
        'Client confirmed; appointment nested and card deposit captured',
      ],
      verifiedOutcome: '100% chair utilization achieved on Thursday afternoon schedule.',
      executionDuration: '8 minutes to client confirmation',
    },
    businessIntelligence: {
      insights:
        'Balayage clients who book their touch-up within 7 weeks spend $340 more annually on retail products.',
      predictions:
        'Saturday morning appointments projected to book out 3 weeks in advance for holiday season.',
      risks:
        'Stylist turnover risk flagged when chair utilization drops below 65% for 3 consecutive weeks.',
      opportunities:
        'Automating express treatment add-ons can increase average ticket size by $28 across all stylists.',
      recommendations:
        'Activate automatic 6-week toner reminders and enable deposit holds on first-time color clients.',
    },
    businessImpact: {
      time: 'Saves stylists and front desk 7 hours per week in phone scheduling and confirmation messages.',
      efficiency:
        'Increases total chair utilization to 94%, turning dead calendar zones into high-margin revenue.',
      customerExperience:
        'Clients receive timely, personalized care recommendations without feeling pressured.',
      operations:
        'Eliminates double-bookings and enforces clear cancellation policies automatically.',
      decisionMaking:
        'Provides salon owners visibility into stylist performance, re-booking rates, and product sales.',
      visibility:
        'Live dashboard showing daily chair occupancy, stylist billings, and client retention trends.',
    },
    additionalCapabilities: [
      {
        groupTitle: 'Treatment Cycle Intelligence',
        summary:
          'Customized mathematical modeling of hair color, skin, and nail maintenance intervals.',
        features: [
          'Color fade prediction',
          'Skincare routine checkpoints',
          'Client photo portfolio tagging',
        ],
      },
      {
        groupTitle: 'Retail Product Recommendation Mesh',
        summary: 'Suggests home-care products aligned with in-salon chemical services.',
        features: [
          'Post-color product guides',
          'Automated replenishment texts',
          'Stylist commission attribution',
        ],
      },
      {
        groupTitle: 'Booth Rent & Commission Ledger',
        summary: 'Calculates commission tiers and booth rental payouts automatically.',
        features: [
          'Tiered service commissions',
          'Product sales splits',
          'Automated payout summaries',
        ],
      },
    ],
  },
  {
    id: 'cafes',
    slug: 'cafes',
    name: 'Cafes',
    shortName: 'Cafes',
    transformationStatement:
      'Rush-hour queue optimization, predictive pastry bake batches, and automated restock.',
    tagline:
      'Rush-hour queue optimization, predictive pastry bake schedules, and automated supplier replenishment.',
    description:
      'Aether transforms high-velocity cafes by predicting morning surge volumes, optimizing barista station workflows, and eliminating bakery waste.',
    accentColor: 'amber',
    iconName: 'Coffee',
    categoryFocus: ['Operations-focused', 'Intelligence-heavy'],
    heroHeadline: 'Conquer morning rush velocity and slash bakery waste.',
    heroSubheadline:
      'Transform hectic coffee counters into precision production lines with real-time rush forecasting and smart bake scheduling.',
    stats: [
      {
        label: 'Morning Rush Output',
        value: '+31%',
        change: 'Potential',
        detail: 'Illustrative barista station speed model',
      },
      {
        label: 'Pastry Waste',
        value: '< 3.1%',
        change: 'Illustrative',
        detail: 'Simulated predictive bake batching',
      },
      {
        label: 'Average Queue Time',
        value: '2.4 min',
        change: 'Example',
        detail: 'Illustrative peak commuter queue scenario',
      },
    ],
    challenges: [
      {
        id: 'caf-c1',
        problem: 'Morning Commuter Queue Walk-Aways',
        cause: '7:30–9:00 AM rush overwhelms counter staff and espresso machines simultaneously.',
        consequence:
          'Up to 18% of hurried commuters leave the line without ordering, losing daily revenue.',
        severity: 'critical',
      },
      {
        id: 'caf-c2',
        problem: 'Mid-Afternoon Bakery Spoilage',
        cause:
          'Baking fixed quantities at 6:00 AM regardless of weather, transit delays, or foot traffic.',
        consequence:
          'Trays of high-cost croissants and artisanal pastries thrown away daily at 4:00 PM.',
        severity: 'high',
      },
      {
        id: 'caf-c3',
        problem: 'Peak-Hour Milk & Bean Stockouts',
        cause:
          'Manual morning counts fail to anticipate high weekend specialty oat/almond milk consumption.',
        consequence:
          'Running out of critical ingredients mid-Saturday forces 86ing popular menu items.',
        severity: 'moderate',
      },
    ],
    opportunities: [
      {
        problem: 'Bottlenecks during morning commuter peak.',
        opportunity: 'Dynamic mobile order pacing and barista station role division.',
        potentialMultiplier: '55% queue reduction',
      },
      {
        problem: 'Heavy daily pastry waste.',
        opportunity: 'Weather- and transit-aware staged second-bake forecasting.',
        potentialMultiplier: '68% waste reduction',
      },
      {
        problem: 'Unanticipated dairy and bean stockouts.',
        opportunity: 'Continuous burn rate telemetry linked to automated vendor POs.',
        potentialMultiplier: 'Zero stockout incidents',
      },
    ],
    // 04 Aether Solutions (8 Specified Solutions for Cafes)
    solutionMappings: [
      {
        problem: 'Volatile Morning Rush Volumes',
        opportunity: 'Predictive hourly beverage modeling',
        solution:
          'Demand Forecasting: Models exact hourly cup volumes, bean consumption curves, and hot vs iced demand shifts.',
        capabilityTag: 'Demand Forecast',
      },
      {
        problem: 'Bakery Spoilage & Cold Brew Guesswork',
        opportunity: 'Precision multi-stage prep scheduling',
        solution:
          'Preparation Recommendations: Prescribes morning croissant par-bakes, cold brew keg steeping volumes, and sandwich prep counts.',
        capabilityTag: 'Prep Scheduler',
      },
      {
        problem: 'Specialty Oat Milk & Bean Stockouts',
        opportunity: 'Dynamic burn-rate replenishment',
        solution:
          'Inventory Intelligence: Continuously tracks coffee bean weights, fresh dairy cartons, and takeaway cup sleeves against auto-PO thresholds.',
        capabilityTag: 'Stock Replenish',
      },
      {
        problem: 'Mid-Afternoon Pastry Write-offs',
        opportunity: 'Sell-through telemetry & discount timing',
        solution:
          'Wastage Detection: Identifies expiring bakery batches and recommends timed promotional bundles before end-of-day discarding.',
        capabilityTag: 'Waste Prevention',
      },
      {
        problem: 'Unoptimized Seasonal Beverage Mix',
        opportunity: 'Modifier & margin contribution analysis',
        solution:
          'Menu Intelligence: Optimizes plant-based milk upcharges, seasonal single-origin pour-overs, and high-margin breakfast pairings.',
        capabilityTag: 'Menu Engineering',
      },
      {
        problem: 'Unobserved Customer Loyalty Shifts',
        opportunity: 'Commuter habit & frequency clustering',
        solution:
          'Customer Behaviour: Tracks commuter repeat frequency, remote worker dwell time, and afternoon grab-and-go buying habits.',
        capabilityTag: 'Habit Analytics',
      },
      {
        problem: 'Opaque Peak-Hour Revenue Velocity',
        opportunity: 'Real-time extraction speed & ticket analytics',
        solution:
          'Sales Analytics: Visualizes hourly revenue velocity, drink throughput per machine group, and modifier attachment rates.',
        capabilityTag: 'Sales Velocity',
      },
      {
        problem: 'Understaffed Morning Extraction Passes',
        opportunity: 'Telemetry-based shift roster balancing',
        solution:
          'Staffing Intelligence: Dynamically schedules baristas, shot pullers, and expeditor staff exactly across the 7:30–10:30 AM rush window.',
        capabilityTag: 'Staffing Mesh',
      },
    ],
    workflowPipeline: {
      input: {
        source: 'POS & Transit Sensor Telemetry',
        details: 'Subway station delay 2 blocks away causing sudden 8:15 AM foot traffic surge.',
        rawSignal: 'Foot traffic delta: +40% anticipated over next 30 minutes.',
      },
      intelligence: {
        diagnosis:
          'Espresso bar overload risk. Drink order complexity skews 70% iced espresso beverages.',
        metricScored: 'Surge Velocity: High Impact',
      },
      recommendation: {
        actionProposed:
          'Pre-allocate second barista exclusively to cold-brew and iced prep; throttle mobile pickup windows to 6 min.',
        confidence: '95.4% efficiency score',
      },
      action: {
        stepsExecuted: [
          'Sent station role re-allocation prompt to Head Barista KDS',
          'Adjusted mobile app estimated prep time from 3 min to 6 min',
          'Pre-staged oat milk and espresso beans at Bar 2',
          'Batched iced drink tickets for simultaneous shot extraction',
        ],
        targetSystem: 'Barista KDS & Mobile App API',
      },
      result: {
        outcome:
          'Processed 31% more transactions with average counter wait time held under 2.5 minutes.',
        timeToImpact: '2.5 minutes',
      },
    },
    interactiveDemo: {
      scenarioTitle: 'Morning Rush Surge Flow & Barista Role Balancing',
      scenarioSubtitle:
        'Simulate Aether handling a sudden commuter surge and pacing drink delivery.',
      simulatedSignal: {
        FootTraffic: '+40% surge detected from nearby transit hub',
        CurrentQueue: '14 drinks pending across mobile and counter',
        DrinkComplexity: '70% custom iced espresso drinks',
      },
      engineReasoning:
        'Espresso station overload diagnosed. Autonomous station role re-allocation and ticket pacing executed.',
      automatedActions: [
        'Re-allocated Barista 2 to dedicated iced espresso prep',
        'Paced mobile pickup times to prevent lobby congestion',
        'Batched shot pulls for identical cold brew orders',
        'Notified customers with precision ready-state alerts',
      ],
      verifiedOutcome: 'Morning rush throughput increased by 31% with zero walk-aways.',
      executionDuration: 'Immediate real-time execution',
    },
    businessIntelligence: {
      insights:
        'Rainy weekdays increase hot beverage ticket size by 24% while reducing pastry attachment by 8%.',
      predictions:
        'Tomorrow’s sunny 72°F forecast will shift 65% of morning beverage volume to iced and cold brew.',
      risks:
        'Oat milk inventory projected to hit critical reorder threshold by 14:00 Friday without restock.',
      opportunities:
        'Staging a small 11:00 AM savory pastry bake can capture an estimated $120 extra daily lunch revenue.',
      recommendations:
        'Pre-order 4 additional cases of oat milk and set Bar 2 for cold drink dominance.',
    },
    businessImpact: {
      time: 'Saves cafe managers 6 hours per week in manual stock counting and supplier order entry.',
      efficiency:
        'Boosts morning drink output by 31% per barista hour during the crucial 7:30–9:00 AM revenue window.',
      customerExperience:
        'Commuters get their morning coffee in under 2.5 minutes, building loyal daily habits.',
      operations:
        'Slashes bakery waste from 10% to under 3.1% through intelligent staged batch baking.',
      decisionMaking:
        'Provides owners with accurate daily prep plans accounting for weather and local foot traffic.',
      visibility:
        'Live dashboard showing cups per hour, inventory burn rates, and hourly revenue velocity.',
    },
    additionalCapabilities: [
      {
        groupTitle: 'High-Velocity Queue Pacing',
        summary: 'Real-time ordering queue balancing across mobile apps and counter registers.',
        features: [
          'Drink ticket batching',
          'Mobile order rate limiting',
          'Counter display ready-boards',
        ],
      },
      {
        groupTitle: 'Local Roaster & Dairy Supply Mesh',
        summary: 'Direct integration with local coffee roasters and dairy suppliers.',
        features: [
          'Automated roast date tracking',
          'Dairy crate auto-reorders',
          'Invoice price reconciliation',
        ],
      },
      {
        groupTitle: 'Loyalty & Routine Habit Engine',
        summary: 'Identifies regular commuters and pre-stages their morning routine orders.',
        features: [
          'Geofence order suggestions',
          'Morning streak bonuses',
          'Automated loyalty reward push',
        ],
      },
    ],
  },
  {
    id: 'retail',
    slug: 'retail',
    name: 'Retail Businesses',
    shortName: 'Retail',
    transformationStatement:
      'Predictive demand forecasting, autonomous stockout prevention, and automated reorder orchestration.',
    tagline:
      'Predictive inventory intelligence, dynamic reorder recommendations, and customer behavior personalization.',
    description:
      'Aether transforms retail storefronts and omnichannel commerce by forecasting SKU demand velocity, predicting stockouts before they happen, and generating automated supplier reorders.',
    accentColor: 'sky',
    iconName: 'ShoppingBag',
    categoryFocus: ['Customer-focused', 'Operations-focused'],
    heroHeadline: 'Eliminate Stockouts and Automate Retail Inventory Reordering.',
    heroSubheadline:
      'How modern retail operators replace spreadsheet guesswork with multi-factor demand forecasting, stockout risk prediction, and autonomous purchase order generation.',
    stats: [
      {
        label: 'Stockout Incidents',
        value: 'Up to -81%',
        change: 'Potential',
        detail: 'Simulated proactive replenishment impact',
      },
      {
        label: 'Inventory Holding Cost',
        value: 'Up to -18.4%',
        change: 'Illustrative',
        detail: 'Potential lean demand matching savings',
      },
      {
        label: 'Reorder SLA',
        value: '< 15min',
        change: 'Target',
        detail: 'Simulated supplier PO generation benchmark',
      },
    ],

    // 02 Business Challenges (8 Specified Problems)
    challenges: [
      {
        id: 'ret-c1',
        problem: 'Stockouts & Lost High-Intent Sales',
        cause:
          'High-velocity SKUs and specific shoe/apparel sizes deplete unexpectedly without real-time depletion rate alerts.',
        consequence:
          'Frustrated shoppers walk out or bounce to competitors, causing permanent customer churn and lost high-margin revenue.',
        severity: 'critical',
      },
      {
        id: 'ret-c2',
        problem: 'Overstock & Trapped Working Capital',
        cause:
          'Bulk reordering based on outdated seasonal quotas rather than real-time sell-through velocity.',
        consequence:
          'Warehouses and retail backrooms overflow with stagnant inventory, tying up cash and inflating holding costs.',
        severity: 'critical',
      },
      {
        id: 'ret-c3',
        problem: 'Uncertain Demand & Surge Blindspots',
        cause:
          'Inability to factor localized weather, weekend sporting events, and social media virality into purchasing schedules.',
        consequence:
          'Stores get caught under-stocked during sudden footfall spikes and over-staffed during dead periods.',
        severity: 'high',
      },
      {
        id: 'ret-c4',
        problem: 'Manual Inventory Monitoring',
        cause:
          'Store managers spending 12+ hours every week manually counting shelf stock, scanning barcodes, and updating spreadsheets.',
        consequence:
          'Data entry latency of 24–48 hours; inventory records are already obsolete before purchase orders are submitted.',
        severity: 'high',
      },
      {
        id: 'ret-c5',
        problem: 'Poor Reorder Timing & Supplier Lead-Time Lag',
        cause:
          'Reorder triggers set to static minimum thresholds that ignore variable supplier manufacturing and transit lead times.',
        consequence:
          'Orders placed too late create 5-to-10 day stockout blackouts during peak commercial cycles.',
        severity: 'critical',
      },
      {
        id: 'ret-c6',
        problem: 'Slow-Moving Products & Deadstock Accumulation',
        cause:
          'Lagging detection of declining SKU velocity, identifying stagnant products only after months of shelf holding.',
        consequence:
          'Forced deep 50%+ clearance fire-sales that completely wipe out seasonal gross margins.',
        severity: 'high',
      },
      {
        id: 'ret-c7',
        problem: 'Customer Behaviour Being Underutilized',
        cause:
          'Point-of-sale systems record transactional receipts without linking customer sizing, browsing affinity, and repurchase cycles.',
        consequence:
          'Lost opportunities for personalized restock alerts, cross-sell pairings, and high-conversion clienteling.',
        severity: 'moderate',
      },
      {
        id: 'ret-c8',
        problem: 'Pricing & Promotion Uncertainty',
        cause:
          'Store operators guess discount percentages without predictive modeling of price elasticity and bundle affinity.',
        consequence:
          'Over-discounting high-demand goods while failing to move price-sensitive slow inventory.',
        severity: 'moderate',
      },
    ],

    // 03 Aether Opportunities
    opportunities: [
      {
        problem: 'Unexpected stockouts on high-demand SKUs and popular sizes.',
        opportunity:
          'Continuous velocity-based runway tracking that models lead times and triggers automated reorders days before depletion.',
        potentialMultiplier: '81% fewer stockout events',
      },
      {
        problem: 'Working capital trapped in stagnant inventory and deadstock.',
        opportunity:
          'Dynamic overstock detection with automated early micro-promotions and cross-store inventory rebalancing.',
        potentialMultiplier: '-18.4% holding cost reduction',
      },
      {
        problem: 'Manual inventory audits and disconnected customer preferences.',
        opportunity:
          'Unified omnichannel stock mesh linked with automated clienteling restock alerts and personalized recommendations.',
        potentialMultiplier: '3.4x higher customer repurchase rate',
      },
    ],

    // 04 11 Aether Solutions
    solutionMappings: [
      {
        problem: 'Uncertain seasonal & event demand spikes',
        opportunity: 'Multi-factor predictive demand modeling',
        solution:
          'Demand Forecasting: Ingests POS velocity, weather forecasts, footfall trends, and regional calendar events to project exact 7–14 day SKU demand.',
        capabilityTag: 'Demand Forecasting',
      },
      {
        problem: 'Fragmented warehouse and retail store stock ledgers',
        opportunity: 'Unified real-time stock mesh',
        solution:
          'Inventory Intelligence: Aggregates in-store POS, online fulfillment, and in-transit supplier stock into a single synchronized virtual ledger.',
        capabilityTag: 'Inventory Intelligence',
      },
      {
        problem: 'Sudden out-of-stock events during peak traffic',
        opportunity: 'Preemptive velocity runway modeling',
        solution:
          'Stockout Prediction: Calculates exact days of remaining inventory buffer per size/SKU and flags items with < 48 hours of runway.',
        capabilityTag: 'Stockout Prediction',
      },
      {
        problem: 'Slow-moving SKUs tying up warehouse cash',
        opportunity: 'Early deceleration anomaly detection',
        solution:
          'Overstock Detection: Identifies sluggish inventory in week 2 instead of month 3, preventing heavy clearance markdowns.',
        capabilityTag: 'Overstock Detection',
      },
      {
        problem: 'Delayed, manual purchase order generation',
        opportunity: 'Automated EDI purchase order dispatch',
        solution:
          'Reorder Recommendations: Synthesizes supplier lead times, minimum order quantities, and forecast spikes to generate instant purchase orders.',
        capabilityTag: 'Reorder Engine',
      },
      {
        problem: 'Lack of granular product sell-through telemetry',
        opportunity: 'SKU margin & velocity scoring',
        solution:
          'Product Performance Intelligence: Tracks margin contribution, size curve velocity, and return rates across every catalog item in real time.',
        capabilityTag: 'Performance Intel',
      },
      {
        problem: 'Generic mass-marketing with low conversion',
        opportunity: 'Behavioral RFM customer clustering',
        solution:
          'Customer Segmentation: Automatically groups shoppers by size preference, purchase frequency, price sensitivity, and category affinity.',
        capabilityTag: 'Segmentation',
      },
      {
        problem: 'Missed cross-sell and up-sell opportunities at checkout',
        opportunity: 'Contextual basket pairing algorithms',
        solution:
          'Product Recommendations: Powers smart in-cart bundle pairings and personalized post-purchase recommendations based on live customer context.',
        capabilityTag: 'Recommendations',
      },
      {
        problem: 'Arbitrary price markdowns eroding margins',
        opportunity: 'Dynamic price elasticity modeling',
        solution:
          'Pricing Intelligence: Recommends optimal pricing points balancing gross margin protection with required sell-through velocity.',
        capabilityTag: 'Pricing Intelligence',
      },
      {
        problem: 'Uncoordinated promotional campaigns',
        opportunity: 'Targeted micro-campaign activation',
        solution:
          'Promotion Intelligence: Automatically targets discounts exclusively to price-sensitive buyers and slow-moving SKU cohorts.',
        capabilityTag: 'Promotion Intel',
      },
      {
        problem: 'Blindspots in physical retail store operations',
        opportunity: 'Footfall, conversion & dwell analytics',
        solution:
          'Store Analytics: Correlates physical customer traffic with hourly register receipts, staff allocations, and shelf replenishment schedules.',
        capabilityTag: 'Store Analytics',
      },
    ],

    // 05 Signature Workflow Pipeline
    workflowPipeline: {
      input: {
        source: 'Omnichannel POS & Footfall Telemetry',
        details:
          'SKU "Running Shoes — Size 9" stock depleted to 8 units after +38% weekend marathon runner rush.',
        rawSignal:
          'POS line-item velocity: 4.8 units/day vs 2.1 units/day average. 1.6 days of stock remaining.',
      },
      intelligence: {
        diagnosis:
          'Critical stockout breach diagnosed. 2-day supplier lead time means stockout will occur within 38 hours unless immediate reorder dispatches.',
        metricScored: 'Stockout Probability: 99.4% without action',
      },
      recommendation: {
        actionProposed:
          'Issue emergency purchase order for 60 units to AeroStep Athletics with priority 2-day ground freight.',
        confidence: '98.8% optimal replenishment quantity',
      },
      action: {
        stepsExecuted: [
          'Calculated optimal reorder volume: 60 units (14-day demand buffer)',
          'Generated EDI Purchase Order PO-RET-2026-8841',
          'Routed PO to AeroStep Athletics supplier portal with 2-day delivery SLA',
          'Flagged 2 dormant units in Suburban Store for inter-store transfer',
          'Reserved stock arrival notifications for 18 waitlisted shoppers',
        ],
        targetSystem: 'Supplier EDI Gateway, Warehouse ERP & Store POS',
      },
      result: {
        outcome:
          'Stockout prevented. Replenishment units arrive before inventory hits zero, protecting ₹3,22,966 in gross margin.',
        timeToImpact: '480ms cognitive execution',
      },
    },

    // 06 Interactive Demo Configuration
    interactiveDemo: {
      scenarioTitle: 'Simulated Product Inventory & Reorder Intelligence',
      scenarioSubtitle:
        'Experience Aether diagnosing stockout risk on Running Shoes (Size 9) and generating automated supplier reorders.',
      simulatedSignal: {
        Product: 'Running Shoes — Size 9 (FW-RN-09-BLK)',
        CurrentStock: '8 Units On Hand',
        RecentSales: '34 Units Sold (Last 7 Days)',
        AverageDailyDemand: '4.8 Units / Day',
        PredictedDemand: '42 Units (Next 7 Days)',
        StockoutRisk: 'Critical (< 2 Days Runway)',
        SupplierLeadTime: '2 Days (AeroStep Athletics)',
      },
      engineReasoning:
        'Critical stockout breach imminent within 38 hours. Autonomous 60-unit EDI purchase order and inter-store rebalance executed.',
      automatedActions: [
        'Detected stockout threshold breach (< 10 units with accelerating velocity)',
        'Synthesized supplier lead time (2 days) against predicted 7-day demand (42 units)',
        'Generated 60-unit EDI purchase order PO-RET-2026-8841',
        'Balanced inventory across retail store network and queued waitlist notifications',
      ],
      verifiedOutcome:
        '100% stockout protection. Zero lost sales during peak weekend runner surge.',
      executionDuration: '480ms',
    },

    // 07 Business Intelligence
    businessIntelligence: {
      insights:
        'Footwear category conversion increases 4.2x when size availability is maintained above 98% in-stock threshold.',
      predictions:
        'Weekend commercial surge will drive +118% demand increase across Footwear and Activewear categories.',
      risks:
        '14 SKUs currently sitting at critical stockout risk (< 2 days runway) totaling ₹8.4L in vulnerable revenue.',
      opportunities:
        'Rebalancing stagnant suburban outlet inventory to flagship metro stores recovers ₹1.8L in immediate cash flow.',
      recommendations:
        'Auto-dispatch 60 units for Running Shoes (Size 9) and launch 12% accessory bundle for slow-moving headphones.',
    },

    // 08 Business Impact
    businessImpact: {
      time: 'Eliminates 12+ hours of manual stock audits per store weekly through autonomous cycle counting and PO generation.',
      efficiency:
        'Increases inventory turnover by +1.8x while reducing carrying costs by 18.4% through precision demand alignment.',
      customerExperience:
        'Ensures customers always find their size in-store and online, driving a 34% increase in repeat repurchase rates.',
      operations:
        'Synchronizes retail stores, regional warehouses, and supplier production into a self-balancing fulfillment network.',
      decisionMaking:
        'Empowers merchandising teams with real-time SKU velocity rankings, price elasticity curves, and automated PO suggestions.',
      visibility:
        'Unified single-pane ledger displaying real-time stock levels, depletion trajectories, and supplier SLAs across all locations.',
    },

    // 09 Additional Capabilities
    additionalCapabilities: [
      {
        groupTitle: 'Omnichannel ERP & POS Connectors',
        summary: 'Deep two-way integration with Shopify, Square, Lightspeed, SAP, and NetSuite.',
        features: [
          'Real-time inventory synchronization',
          'Cross-store transfer routing',
          'Automated receiving reconciliation',
        ],
      },
      {
        groupTitle: 'Autonomous Supplier EDI & Reorder Mesh',
        summary:
          'Direct electronic data interchange (EDI) with manufacturer and distributor portals.',
        features: [
          'Automated purchase order dispatch',
          'Advance shipment notice (ASN) tracking',
          'Price variance reconciliation',
        ],
      },
      {
        groupTitle: 'Dynamic Clienteling & Restock Concierge',
        summary:
          'Converts out-of-stock browsing signals into high-converting personalized restock notifications.',
        features: [
          'Automated SMS/WhatsApp restock alerts',
          'Personalized lookbook recommendations',
          'Size-matched back-in-stock reservations',
        ],
      },
    ],
  },
  {
    id: 'hotels',
    slug: 'hotels',
    name: 'Hotels & Hospitality',
    shortName: 'Hotels & Hospitality',
    transformationStatement:
      'Predictive occupancy pace, automated cancellation recovery, and dynamic housekeeping dispatch.',
    tagline:
      'Predictive occupancy pace, autonomous cancellation backfills, and personalized guest revenue intelligence.',
    description:
      'Aether transforms boutique and luxury hotels by forecasting occupancy pace, predicting OTA cancellations, dynamically routing housekeeping turns, and personalizing in-stay guest spend.',
    accentColor: 'teal',
    iconName: 'BedDouble',
    categoryFocus: ['Customer-focused', 'Operations-focused'],
    heroHeadline: 'Eliminate Check-In Delays and Maximize Hotel RevPAR Yield.',
    heroSubheadline:
      'How modern hospitality operators replace PMS guesswork with predictive occupancy pace, automated cancellation recovery, and flight-aware housekeeping dispatch.',
    stats: [
      {
        label: 'Check-In Wait Time',
        value: '< 1 min',
        change: 'Target',
        detail: 'Simulated digital key flow benchmark',
      },
      {
        label: 'Room Turnover Speed',
        value: '24 min',
        change: 'Potential',
        detail: 'Illustrative housekeeping dispatch model',
      },
      {
        label: 'Ancillary RevPAR Lift',
        value: '+₹4,200/nt',
        change: 'Example',
        detail: 'Illustrative upgrade yield scenario',
      },
    ],

    // 02 Business Challenges (8 Specified Problems)
    challenges: [
      {
        id: 'hot-c1',
        problem: 'Occupancy Uncertainty & Demand Forecasting Gaps',
        cause:
          'Relying on static historic booking tables that fail to anticipate city events, airline capacity shifts, or competitor rate changes.',
        consequence:
          'Mispriced room inventories, lost weekend RevPAR, and under-utilized room capacity.',
        severity: 'critical',
      },
      {
        id: 'hot-c2',
        problem: 'Booking Fluctuations Across Fragmented Channels',
        cause:
          'Reservations arriving asynchronously across OTAs (Booking.com, Expedia), GDS, direct web, and phone without centralized pace tracking.',
        consequence:
          'Rate parity violations, over-reliance on high-commission 20% OTA channels, and erratic cash flow.',
        severity: 'high',
      },
      {
        id: 'hot-c3',
        problem: 'Cancellation Risk & Last-Minute Empty Rooms',
        cause:
          'Flexible OTA cancellation policies allowing guests to cancel 24 hours prior with zero penalty.',
        consequence:
          'Last-minute inventory collapse leaving 10–15% of rooms unexpectedly unsold on prime nights.',
        severity: 'critical',
      },
      {
        id: 'hot-c4',
        problem: 'Guest Preference Fragmentation Across Stays',
        cause:
          'Guest requests (high-floor, extra foam pillows, dietary notes, airport transfer) trapped in unstructured legacy PMS notes.',
        consequence:
          'VIP guests receiving standard generic rooms, resulting in mediocre reviews and lost loyalty retention.',
        severity: 'high',
      },
      {
        id: 'hot-c5',
        problem: 'Housekeeping Coordination & Turnover Bottlenecks',
        cause:
          'Cleaning supervisors manually assigning room cleaning in numerical floor order without visibility into incoming guest flight arrival times.',
        consequence:
          'Early-arriving VIPs waiting 45+ minutes in crowded lobbies while vacant late-arrival rooms are cleaned first.',
        severity: 'critical',
      },
      {
        id: 'hot-c6',
        problem: 'Staff Allocation & Shift Mismatches',
        cause:
          'Static weekly staff schedules that fail to align front desk, housekeeping, and F&B headcount with real-time arrival/departure waves.',
        consequence:
          'Over-staffed during dead periods and severely under-staffed during 3 PM check-in lobby surges.',
        severity: 'high',
      },
      {
        id: 'hot-c7',
        problem: 'Missed Upselling Opportunities During In-Stay Windows',
        cause:
          'Hotels offering room upgrades, late checkouts, and spa treatments only at front desk check-in when guests are tired.',
        consequence:
          'Losing ₹3,500–₹6,000 per guest in high-margin ancillary revenue from dining, cabanas, and premium suites.',
        severity: 'moderate',
      },
      {
        id: 'hot-c8',
        problem: 'Operational Inefficiency & Multi-System Disconnects',
        cause:
          'Front desk, housekeeping, maintenance, and concierge operating on disconnected legacy radios, paper dockets, and disparate software.',
        consequence:
          'Delayed maintenance repairs, lost keycards, and slow guest request fulfillment exceeding 30 minutes.',
        severity: 'moderate',
      },
    ],

    // 03 Aether Opportunities
    opportunities: [
      {
        problem: 'Last-minute OTA cancellations leaving prime rooms empty.',
        opportunity:
          'Predictive cancellation modeling that automatically releases high-risk rooms to waiting corporate groups and direct bookers.',
        potentialMultiplier: '94% cancellation recovery rate',
      },
      {
        problem: 'Housekeeping cleaning rooms in arbitrary order causing lobby queues.',
        opportunity:
          'Flight-aware dynamic housekeeping dispatch prioritizing rooms by guest landing telemetry.',
        potentialMultiplier: '50% faster room readiness',
      },
      {
        problem: 'Under-utilized spa, dining, and premium room upgrades.',
        opportunity:
          'Contextual AI in-stay concierge delivering personalized upgrade and amenity invitations at the moment of peak relaxation.',
        potentialMultiplier: '+32% higher ancillary RevPAR',
      },
    ],

    // 04 9 Aether Solutions
    solutionMappings: [
      {
        problem: 'Multi-channel reservation fragmentation and rate disparities',
        opportunity: 'Unified channel distribution mesh',
        solution:
          'Booking Intelligence: Continuously monitors GDS, OTA, and direct booking streams, verifying rate parity and optimizing channel mix in real time.',
        capabilityTag: 'Booking Intelligence',
      },
      {
        problem: 'Uncertain occupancy pace and seasonal demand swings',
        opportunity: 'Predictive multi-factor pace modeling',
        solution:
          'Occupancy Forecasting: Correlates regional events, flight arrivals, and historical velocity to forecast exact daily category occupancy 14 days out.',
        capabilityTag: 'Occupancy Forecasting',
      },
      {
        problem: 'Flexible OTA cancellation spikes causing revenue loss',
        opportunity: 'Predictive cancellation risk scoring',
        solution:
          'Cancellation Prediction: Calculates cancellation probability per reservation and automatically queues overbooking buffers and waitlist backfills.',
        capabilityTag: 'Cancellation Prediction',
      },
      {
        problem: 'Lost guest preferences trapped in PMS silos',
        opportunity: 'Persistent VIP guest preference graph',
        solution:
          'Guest Preference Intelligence: Aggregates room preferences, pillow choices, dining restrictions, and past feedback into an actionable guest dossier.',
        capabilityTag: 'Guest Preference Intel',
      },
      {
        problem: 'Disconnected room status and maintenance delays',
        opportunity: 'IoT-enabled digital room ledger',
        solution:
          'Room Operations Intelligence: Connects smart door locks, HVAC thermostats, and housekeeping tablets into a live room readiness command board.',
        capabilityTag: 'Room Operations Intel',
      },
      {
        problem: 'Housekeeping cleaning rooms in numerical rather than priority order',
        opportunity: 'Dynamic arrival-prioritized cleaning dispatch',
        solution:
          'Housekeeping Intelligence: Routes cleaning attendants to rooms based on incoming guest flight tracking, VIP status, and early check-in requests.',
        capabilityTag: 'Housekeeping Intel',
      },
      {
        problem: 'Lobby congestion and mismatched labor schedules',
        opportunity: 'Pace-aligned predictive labor rostering',
        solution:
          'Staff Scheduling: Recommends precise department staffing headcount aligned with hourly check-in, check-out, and banquet turnover peaks.',
        capabilityTag: 'Staff Scheduling',
      },
      {
        problem: 'Missed ancillary revenue on premium suites and amenities',
        opportunity: 'Contextual in-stay digital upsell triggers',
        solution:
          'Upselling Recommendations: Automatically delivers personalized suite upgrade bids, late checkout passes, and spa vouchers via WhatsApp/SMS.',
        capabilityTag: 'Upselling Engine',
      },
      {
        problem: 'Sub-optimal room pricing eroding gross margins',
        opportunity: 'Autonomous dynamic ADR yield management',
        solution:
          'Revenue Intelligence: Adjusts room rates dynamically across all distribution channels to maximize RevPAR and direct booking margin.',
        capabilityTag: 'Revenue Intelligence',
      },
    ],

    // 05 Signature Workflow Pipeline
    workflowPipeline: {
      input: {
        source: 'Airline Flight Telemetry & PMS Booking Stream',
        details:
          'VIP Corporate Guest (Suite 402) flight landed 45 minutes ahead of schedule at 1:15 PM.',
        rawSignal:
          'Guest: David Sterling. Flight #UA421 landed early. Suite 402 status: Dirty (Checkout at 11:30 AM).',
      },
      intelligence: {
        diagnosis:
          'Early VIP arrival diagnosed. Housekeeping Pod #3 currently operating on 4th floor.',
        metricScored: 'Priority Turnaround Score: 99.4%',
      },
      recommendation: {
        actionProposed:
          'Escalate Suite 402 to top of Housekeeping Pod queue; pre-condition climate to 68°F; generate digital key.',
        confidence: '99.2% VIP readiness SLA match',
      },
      action: {
        stepsExecuted: [
          'Dispatched priority turnaround ticket to floor housekeeper tablet',
          'Suite 402 turned, inspected, and sanitized in 22 minutes',
          'Activated contactless digital keycard credential on guest mobile wallet',
          'Dispatched welcome notification: "Your suite is ready for early check-in"',
        ],
        targetSystem: 'Opera PMS, Salto Smart Lock & Guest WhatsApp API',
      },
      result: {
        outcome:
          'VIP guest walked directly to pre-chilled suite with zero front desk lobby delay. 5-star review and direct rebooking logged.',
        timeToImpact: '22 minutes',
      },
    },

    // 06 Interactive Demo Configuration
    interactiveDemo: {
      scenarioTitle: 'Simulate Daily Hotel Operations & Shift Intelligence',
      scenarioSubtitle:
        'Experience Aether diagnosing occupancy pace, predicting OTA cancellations, and auto-dispatching staff allocations.',
      simulatedSignal: {
        DateScenario: 'Tomorrow (Friday — Tech Summit & Weekend Inflow)',
        TotalRooms: '200 Inventory Base',
        ExpectedOccupancy: '94.5% (189 Confirmed Bookings)',
        ExpectedCancellations: '12 Rooms (6.3% Predicted Risk)',
        RoomDemand: 'High Surge (+42% vs baseline)',
        OperationalLoad: 'Critical Peak: 146 Arrivals / 88 Departures',
      },
      engineReasoning:
        '12 high-probability OTA cancellations diagnosed. Automatic corporate waitlist backfill and +5 housekeeping morning shift reassignment executed.',
      automatedActions: [
        'Backfilled 12 predicted cancellations with pre-approved corporate conference waitlist',
        'Reallocated +5 staff from evening turndown to 10 AM–2 PM express room turnover',
        'Pushed $45 early check-in pass to 30 confirmed leisure arrivals',
        'Pre-assigned high-floor quiet suites to 48 loyalty titanium members',
      ],
      verifiedOutcome: 'Zero check-in lobby wait times. ₹3,48,000 in protected RevPAR yield.',
      executionDuration: '520ms',
    },

    // 07 Business Intelligence
    businessIntelligence: {
      insights:
        'Guests receiving automated digital key check-in spend 40% more on on-property dining during their arrival evening.',
      predictions:
        'Friday Tech Summit demand surge will push market compset ADR by +24%; recommend holding remaining 11 rooms at premium rate.',
      risks:
        '28 OTA flexible reservations flagged with > 65% cancellation likelihood based on historical booking lead time.',
      opportunities:
        'Monetizing guaranteed 3:00 PM late checkouts on non-turnover floors captures an estimated ₹42,000 in pure weekend margin.',
      recommendations:
        'Auto-release 12 high-risk OTA rooms to corporate waitlist and deploy mobile lobby concierge greeters during 2–4 PM arrival peak.',
    },

    // 08 Business Impact
    businessImpact: {
      time: 'Eliminates 15+ hours of manual room status calls between reception and housekeeping per shift.',
      efficiency:
        'Accelerates room turnover from 48 minutes to 24 minutes through flight-aware dynamic pod dispatching.',
      customerExperience:
        'Delivers effortless 5-star luxury experiences with zero front desk waiting lines and 100% preference recall.',
      operations:
        'Synchronizes front desk, housekeeping, concierge, and engineering into a single autonomous operational rhythm.',
      decisionMaking:
        'Provides general managers and revenue directors with real-time RevPAR pace, channel mix yield, and labor cost optimization.',
      visibility:
        'Live single-pane dashboard displaying room readiness, guest transit ETAs, digital key activations, and concierge SLAs.',
    },

    // 09 Additional Capabilities
    additionalCapabilities: [
      {
        groupTitle: 'Property Management System (PMS) Mesh',
        summary: 'Deep two-way integration with Opera, Cloudbeds, Mews, and Protel.',
        features: [
          'Real-time folio updates',
          'Smart lock access coding',
          'Automatic tax and fee ledgering',
        ],
      },
      {
        groupTitle: 'Multilingual AI Guest Concierge',
        summary:
          '24/7 conversational support in 30+ languages over WhatsApp, SMS, and in-room tablets.',
        features: [
          'Instant luggage dispatch',
          'Local dining concierge bookings',
          'Engineering & maintenance triage',
        ],
      },
      {
        groupTitle: 'Dynamic Amenity & Ancillary Yield Engine',
        summary:
          'Optimizes pricing and availability for cabanas, spa appointments, and chef tasting menus.',
        features: [
          'Dynamic cabana pricing',
          'Spa slot gap filling',
          'Private dining reservation locks',
        ],
      },
    ],
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    name: 'Healthcare & Clinics',
    shortName: 'Healthcare & Clinics',
    transformationStatement:
      'Conversational patient intake, cancellation slot recovery, and pre-op reminders.',
    tagline:
      'Automated patient intake, smart cancellation backfills, and proactive pre-op instructions.',
    description:
      'Aether transforms outpatient clinics and medical practices by automating intake paperwork, filling last-minute cancellations, and ensuring patient adherence.',
    accentColor: 'cyan',
    iconName: 'Stethoscope',
    categoryFocus: ['Operations-focused', 'Customer-focused'],
    heroHeadline: 'Eliminate patient intake paperwork and unfilled clinic slots.',
    heroSubheadline:
      'Free clinical staff from administrative overload while improving patient care continuity and appointment attendance.',
    stats: [
      {
        label: 'Intake Admin Time',
        value: 'Up to -78%',
        change: 'Potential',
        detail: 'Simulated digital pre-visit intake savings',
      },
      {
        label: 'Unfilled Slot Recovery',
        value: 'Up to 84%',
        change: 'Illustrative',
        detail: 'Simulated waitlist backfill scenario',
      },
      {
        label: 'Patient No-Show Rate',
        value: '3.4%',
        change: 'Example',
        detail: 'Illustrative conversational prep cohort',
      },
    ],
    challenges: [
      {
        id: 'hc-c1',
        problem: 'Paper Intake Delays Clinical Start Times',
        cause:
          'Patients arrive and spend 15 minutes filling out paper clipboards with redundant medical histories.',
        consequence:
          'Physician appointments start late, causing cascading delays throughout the entire clinic day.',
        severity: 'critical',
      },
      {
        id: 'hc-c2',
        problem: 'Costly Provider Idle Time from Cancellations',
        cause:
          'Patients cancel appointments with less than 24 hours notice, leaving expensive physician slots empty.',
        consequence:
          'Practices lose $200–$500 per unfilled provider hour while backlogged patients wait weeks for care.',
        severity: 'high',
      },
      {
        id: 'hc-c3',
        problem: 'Day-of Procedure Cancellations',
        cause:
          'Patients fail to follow fasting, medication hold, or transportation instructions before procedures.',
        consequence:
          'Operating suites sit idle, wasting thousands in facility fees and clinical team prep time.',
        severity: 'moderate',
      },
    ],
    opportunities: [
      {
        problem: 'Paper-based intake bottlenecks at reception.',
        opportunity:
          'Conversational pre-visit questionnaire syncing structured data directly to EHR.',
        potentialMultiplier: '78% less intake admin time',
      },
      {
        problem: 'Late appointment cancellations leaving providers idle.',
        opportunity: 'Autonomous waitlist matching that backfills open slots in under 5 minutes.',
        potentialMultiplier: '84% recovered open slots',
      },
      {
        problem: 'Procedure cancellations from poor patient preparation.',
        opportunity:
          'Interactive step-by-step preparation briefings with confirmation checkpoints.',
        potentialMultiplier: '91% fewer prep cancellations',
      },
    ],
    // 04 Aether Solutions (8 Specified Solutions for Healthcare)
    solutionMappings: [
      {
        problem: 'Siloed Patient Booking & Waitlist Fragmentation',
        opportunity: 'Unified multi-channel booking orchestration',
        solution:
          'Appointment Intelligence: Dynamically schedules, triages, and reconciles patient appointment slots across clinical specialties and provider calendars.',
        capabilityTag: 'Appointment Engine',
      },
      {
        problem: 'Costly Unfilled Provider Idle Slots & Late Drop-Offs',
        opportunity: 'ML attendance risk scoring & waitlist backfills',
        solution:
          'No-Show Prediction: Forecasts appointment attendance risk (0–100%) and triggers automated standby slot backfills within minutes of cancellation.',
        capabilityTag: 'No-Show AI',
      },
      {
        problem: 'Missed Patient Appointments & Prep Failures',
        opportunity: 'Conversational multi-channel prep checkpoints',
        solution:
          'Automated Reminders: Dispatches personalized WhatsApp/SMS pre-visit briefings with 1-tap confirmations and digital directions.',
        capabilityTag: 'Reminders & Prep',
      },
      {
        problem: 'Disjointed Post-Consultation Adherence & Reviews',
        opportunity: 'Automated post-discharge care coordination',
        solution:
          'Follow-up Management: Coordinates post-visit check-ins, medication adherence prompts, and specialist review scheduling.',
        capabilityTag: 'Care Continuity',
      },
      {
        problem: 'Cascading Clinic Delays & Schedule Conflicts',
        opportunity: 'Dynamic slot duration & provider pacing',
        solution:
          'Scheduling Intelligence: Analyzes provider consultation velocity to dynamically space appointment windows and eliminate waiting room congestion.',
        capabilityTag: 'Smart Scheduling',
      },
      {
        problem: 'Repetitive Paper Clipboard Intake & Redundant Entry',
        opportunity: 'Autonomous EHR-synchronized intake ingestion',
        solution:
          'Administrative Workflow Automation: Ingests digital intake questionnaires, verifies insurance coverage, and populates EHR records before arrival.',
        capabilityTag: 'Admin Automation',
      },
      {
        problem: 'Sub-Optimal Room & Equipment Utilization',
        opportunity: 'Real-time clinic capacity load balancing',
        solution:
          'Capacity Intelligence: Balances examination room assignments, diagnostic equipment slots, and nursing staff availability in real time.',
        capabilityTag: 'Capacity Optimizer',
      },
      {
        problem: 'Lack of Administrative Visibility & Billing Leakage',
        opportunity: 'Clinic-wide operational performance telemetry',
        solution:
          'Operational Analytics: Tracks patient throughput velocity, provider utilization yield, wait times, and administrative turnaround metrics.',
        capabilityTag: 'Clinic Analytics',
      },
    ],
    workflowPipeline: {
      input: {
        source: 'Clinic EHR Scheduling Telemetry',
        details: 'Specialist Dr. Patel has a 45-minute cancellation for tomorrow at 10:30 AM.',
        rawSignal: 'Cancellation: Cardiology follow-up slot open. Waitlist: 12 patients queued.',
      },
      intelligence: {
        diagnosis:
          'High-value provider idle time diagnosed. Patient "Robert Torres" has urgent referral and requested morning slot.',
        metricScored: 'Waitlist Match Confidence: 97.6%',
      },
      recommendation: {
        actionProposed:
          'Dispatch SMS slot claim link to Robert Torres with 15-minute response window.',
        confidence: '98.2% acceptance probability',
      },
      action: {
        stepsExecuted: [
          'Sent conversational SMS to Robert Torres offering 10:30 AM slot',
          'Robert confirmed via one-tap link in 3 minutes',
          'Slot locked in EHR and pre-visit intake link dispatched',
          'Sent confirmation and parking instructions',
        ],
        targetSystem: 'EHR Schedule & HIPAA-Compliant SMS',
      },
      result: {
        outcome:
          '$350 provider slot preserved; patient received care 2 weeks ahead of original schedule.',
        timeToImpact: '3 minutes',
      },
    },
    interactiveDemo: {
      scenarioTitle: 'Specialist Cancellation Slot Recovery & Patient Intake',
      scenarioSubtitle:
        'Simulate Aether backfilling an open cardiology slot and gathering intake data in 3 minutes.',
      simulatedSignal: {
        Provider: 'Dr. Patel (Cardiology)',
        OpenSlot: 'Tomorrow 10:30 AM (Cancellation)',
        QueuedPatient: 'Robert Torres (Urgent referral on waitlist)',
      },
      engineReasoning:
        'Provider idle time diagnosed. Autonomous waitlist matching and clinical intake dispatched.',
      automatedActions: [
        'Detected open slot and matched patient clinical urgency score',
        'Sent automated HIPAA-compliant SMS invitation with one-tap accept',
        'Patient confirmed appointment; schedule locked in EHR',
        'Dispatched conversational intake form for symptom history',
      ],
      verifiedOutcome: 'Slot filled within 3 minutes; clinical intake completed prior to arrival.',
      executionDuration: '3 minutes',
    },
    businessIntelligence: {
      insights:
        'Patients who complete digital intake beforehand have a 96% on-time consultation rate.',
      predictions:
        'Flu season surge expected to increase pediatric clinic visit volume by 40% over next 3 weeks.',
      risks:
        'MRI scanner utilization dropping to 60% on Friday afternoons due to high late cancellation rate.',
      opportunities:
        'Automating insurance pre-authorizations can accelerate procedure scheduling by 6 business days.',
      recommendations:
        'Activate 48-hour MRI confirmation checkpoints and pre-stage intake for high-volume morning clinics.',
    },
    businessImpact: {
      time: 'Saves medical receptionists 12 hours per week in phone scheduling, intake transcription, and reminder calls.',
      efficiency:
        'Recovers 84% of dropped appointment slots, maximizing provider productivity and billable encounters.',
      customerExperience:
        'Patients bypass waiting room clipboards and experience respectful, on-time consultations.',
      operations:
        'Reduces physician charting overtime by providing structured pre-digested patient intake summaries.',
      decisionMaking:
        'Provides clinic directors with clear analytics on no-show trends, provider utilization, and waitlist demand.',
      visibility:
        'Live telemetry displaying provider schedules, room status, and patient intake completion rates.',
    },
    additionalCapabilities: [
      {
        groupTitle: 'EHR & Practice Management Connectors',
        summary: 'HIPAA-compliant integration with Epic, Cerner, AthenaHealth, and Kareo.',
        features: [
          'Structured CCDA note export',
          'Real-time appointment slot sync',
          'Insurance eligibility verification',
        ],
      },
      {
        groupTitle: 'Clinical Protocol & Triage Mesh',
        summary: 'Customizable specialty-specific intake workflows and triage questionnaires.',
        features: [
          'Symptom severity scoring',
          'Medication allergy checks',
          'Digital consent signature capture',
        ],
      },
      {
        groupTitle: 'Post-Visit Care & Adherence Engine',
        summary: 'Automates follow-up check-ins, medication refills, and satisfaction surveys.',
        features: [
          'Post-discharge check-ins',
          'Medication adherence prompts',
          'Automated referral tracking',
        ],
      },
    ],
  },
  {
    id: 'automotive',
    slug: 'automotive',
    name: 'Automotive / Car Service Businesses',
    shortName: 'Automotive',
    transformationStatement:
      'Service bay capacity balancing, parts pre-verification, and predictive maintenance.',
    tagline:
      'Service bay scheduling optimization, parts availability synchronization, and predictive maintenance dispatch.',
    description:
      'Aether transforms automotive service centers by balancing lift technician capacity, verifying parts inventory before booking, and triggering automated maintenance outreach.',
    accentColor: 'indigo',
    iconName: 'Car',
    categoryFocus: ['Operations-focused', 'Sales-focused'],
    heroHeadline: 'Maximize service bay throughput and parts alignment.',
    heroSubheadline:
      'Eliminate technician downtime and vehicle hold-overs with unified bay scheduling and proactive customer service triggers.',
    stats: [
      {
        label: 'Bay Utilization',
        value: '92.5%',
        change: 'Potential',
        detail: 'Simulated technician skill matching target',
      },
      {
        label: 'Parts Hold-Over Delay',
        value: 'Up to -70%',
        change: 'Illustrative',
        detail: 'Potential savings from pre-booking checks',
      },
      {
        label: 'Customer RO Value',
        value: '+$185',
        change: 'Example',
        detail: 'Illustrative diagnostic health check scenario',
      },
    ],
    challenges: [
      {
        id: 'auto-c1',
        problem: 'Mismatched Bay & Technician Scheduling',
        cause:
          'Service advisors overbook heavy transmission jobs on the same morning without checking lift types.',
        consequence:
          'Lifts sit blocked all day while master technicians are bottlenecked and quick lube bays sit idle.',
        severity: 'critical',
      },
      {
        id: 'auto-c2',
        problem: 'Vehicles Disassembled Waiting for Parts',
        cause:
          'Cars are put on lifts before checking if required replacement brake rotors or gaskets are in stock.',
        consequence:
          'Cars stall on lifts for 24+ hours, blocking other paying customer repair orders.',
        severity: 'high',
      },
      {
        id: 'auto-c3',
        problem: 'Lost Routine Maintenance Retention',
        cause:
          'Dealerships fail to follow up when customer vehicles cross 30k/60k/90k mileage thresholds.',
        consequence:
          'Customers default to independent quick-lube shops, losing $800+ in annual customer lifetime value.',
        severity: 'moderate',
      },
    ],
    opportunities: [
      {
        problem: 'Bay bottlenecks and technician idle time.',
        opportunity:
          'Skills- and lift-aware intelligent bay scheduling balancing heavy vs express repairs.',
        potentialMultiplier: '+24% completed repair orders',
      },
      {
        problem: 'Vehicles stalled on lifts waiting for parts.',
        opportunity:
          'Automated parts availability pre-verification before confirming drop-off appointments.',
        potentialMultiplier: '70% fewer parts hold-overs',
      },
      {
        problem: 'Lapsed mileage maintenance customers.',
        opportunity:
          'Predictive telematics and mileage projections triggering automated service invitations.',
        potentialMultiplier: '+36% routine service retention',
      },
    ],
    // 04 Aether Solutions (9 Specified Solutions for Automotive)
    solutionMappings: [
      {
        problem: 'Fragmented Vehicle History & Missed Diagnostic Logs',
        opportunity: 'Unified vehicle digital passport',
        solution:
          'Vehicle Service Intelligence: Consolidates historical repair orders, OBD-II error codes, and OEM service bulletins into a predictive vehicle profile.',
        capabilityTag: 'Vehicle Passport',
      },
      {
        problem: 'Unanticipated Component Wear & Breakdown Delays',
        opportunity: 'Telematics & mileage degradation modeling',
        solution:
          'Maintenance Prediction: Calculates exact component wear intervals (brakes, transmission fluid, timing belts) based on real-world driving data.',
        capabilityTag: 'Predictive Service',
      },
      {
        problem: 'Lapsed Mileage Service Customers & Churn',
        opportunity: 'Automated mileage milestone outreach',
        solution:
          'Service Reminders: Dispatches personalized WhatsApp/SMS notifications at crucial 30k/60k/90k mileage intervals with pre-calculated estimates.',
        capabilityTag: 'Smart Reminders',
      },
      {
        problem: 'Advisor Overbooking & Inaccurate Drop-Off Windows',
        opportunity: 'Job-complexity aware intake booking',
        solution:
          'Appointment Intelligence: Synchronizes customer drop-off schedules with bay availability and estimated labor hours.',
        capabilityTag: 'Booking Engine',
      },
      {
        problem: 'Unbalanced Service Bay Loading & Lift Bottlenecks',
        opportunity: 'Dynamic lift rating & throughput pacing',
        solution:
          'Workshop Scheduling: Balances heavy mechanical lift bays against 60-minute express lube bays to eliminate floor congestion.',
        capabilityTag: 'Bay Scheduling',
      },
      {
        problem: 'Mismatch Between Job Complexity & Tech Certification',
        opportunity: 'Automated skill-based job routing',
        solution:
          'Technician Allocation: Assigns complex diagnostic, electrical, and engine rebuild jobs to certified master technicians.',
        capabilityTag: 'Tech Allocation',
      },
      {
        problem: 'Vehicles Stalled on Lifts Awaiting Spare Parts',
        opportunity: 'Pre-booking parts inventory reservation',
        solution:
          'Parts Intelligence: Pre-verifies warehouse inventory and stages required OEM parts before customer drop-off.',
        capabilityTag: 'Parts Staging',
      },
      {
        problem: 'Customers Defaulting to Independent Quick-Lubes',
        opportunity: 'Proactive digital vehicle health inspections',
        solution:
          'Customer Retention: Sends transparent video multi-point inspection summaries and scheduled loyalty maintenance perks.',
        capabilityTag: 'Retention Engine',
      },
      {
        problem: 'Opaque Workshop Labor & Financial Yield',
        opportunity: 'Real-time dealership executive telemetry',
        solution:
          'Service Analytics: Delivers granular analytics on bay utilization, technician flag-hour efficiency, and average repair order value.',
        capabilityTag: 'Service Analytics',
      },
    ],
    workflowPipeline: {
      input: {
        source: 'Online Booking & Telematics Feed',
        details: 'Customer requested 60k mile major service for 2021 Audi Q7.',
        rawSignal: 'Service: 60k Service + Brake Pad Warning Light. Preferred date: Tomorrow.',
      },
      intelligence: {
        diagnosis:
          'Heavy job requiring Master Tech certification and Lift Bay #4. Brake pads and spark plugs required in stock.',
        metricScored: 'Parts Feasibility: In Stock at Warehouse',
      },
      recommendation: {
        actionProposed:
          'Reserve Bay #4 for 09:30 AM drop-off; trigger parts staging ticket for parts counter.',
        confidence: '99.1% optimal schedule fit',
      },
      action: {
        stepsExecuted: [
          'Confirmed 09:30 AM drop-off slot on master schedule',
          'Reserved OEM brake pads and filter kit at parts counter',
          'Sent digital drop-off confirmation pass and loaner car reservation to customer',
          'Assigned job to certified Master Tech Dan',
        ],
        targetSystem: 'DMS & Parts Counter ERP',
      },
      result: {
        outcome:
          'Job started immediately upon customer arrival; completed 45 minutes ahead of estimate.',
        timeToImpact: 'On-time delivery',
      },
    },
    interactiveDemo: {
      scenarioTitle: 'Bay Capacity Balancing & Pre-Staged Parts Verification',
      scenarioSubtitle:
        'Simulate Aether verifying parts stock, reserving lift bay, and assigning certified technician.',
      simulatedSignal: {
        CustomerVehicle: '2021 Audi Q7 (60k Major Service)',
        RequiredParts: 'OEM Brake Rotors, Ceramic Pads, Spark Plugs',
        BayAvailability: 'Lift Bay #4 (Master Tech Dan certified)',
      },
      engineReasoning:
        'Heavy service repair order diagnosed. Parts availability verified and master tech lift reserved.',
      automatedActions: [
        'Checked DMS parts inventory and staged items at parts counter',
        'Balanced technician workload avoiding heavy repair bottlenecks',
        'Issued digital mobile check-in pass to customer',
        'Assigned repair order to technician tablet',
      ],
      verifiedOutcome:
        'Zero parts delay hold-overs; repair completed 45 minutes ahead of schedule.',
      executionDuration: 'Immediate real-time execution',
    },
    businessIntelligence: {
      insights:
        'Customers who receive video inspection walk-throughs approve 38% more recommended repair work.',
      predictions:
        'Winter tire changeover rush expected to peak during first two weeks of November (+60% tire bay load).',
      risks:
        'Diagnostic bay bottleneck projected on Monday morning due to 4 pending electrical diagnostic tickets.',
      opportunities:
        'Automating brake fluid flush recommendations on vehicles over 3 years old can generate $22k monthly.',
      recommendations:
        'Pre-order 20 cases of common synthetic oil and stage tire balancer bays for November rush.',
    },
    businessImpact: {
      time: 'Saves service advisors 11 hours per week in parts phone calls and manual schedule rebalancing.',
      efficiency:
        'Increases daily completed repair orders by 24% through technician skill and lift optimization.',
      customerExperience:
        'Customers enjoy transparent digital check-in, loaner car coordination, and faster vehicle return.',
      operations: 'Eliminates overnight vehicle hold-overs caused by missing replacement parts.',
      decisionMaking:
        'Provides service directors with accurate bay utilization, technician efficiency, and RO dollar averages.',
      visibility:
        'Live shop telemetry displaying active lift status, technician progress, and vehicle delivery estimates.',
    },
    additionalCapabilities: [
      {
        groupTitle: 'Dealer Management System (DMS) Connectors',
        summary: 'Direct integration with CDK Global, Reynolds & Reynolds, and Dealertrack.',
        features: [
          'Real-time repair order creation',
          'Parts catalog cross-referencing',
          'Technician flag-hour payroll sync',
        ],
      },
      {
        groupTitle: 'Digital Multi-Point Video Inspection',
        summary:
          'Technician video walk-throughs sent directly to customer phones with one-tap approval.',
        features: ['Mobile video upload', 'Line-item quote approval', 'Digital signature capture'],
      },
      {
        groupTitle: 'Fleet Telematics & Preventative Maintenance',
        summary: 'Monitors commercial fleet vehicle error codes and schedules batch maintenance.',
        features: [
          'OBD-II DTC error code ingestion',
          'Fleet preventative schedules',
          'Consolidated billing statements',
        ],
      },
    ],
  },
  {
    id: 'education',
    slug: 'education',
    name: 'Education & Training Centers',
    shortName: 'Education & Training',
    transformationStatement:
      'Student inquiry triage, automated credential verification, and LMS drop-off alerts.',
    tagline:
      'Student inquiry triage, automated admissions workflows, and predictive learner engagement monitoring.',
    description:
      'Aether transforms educational institutions and training academies by automating student admissions triage, personalizing enrollment pipelines, and flagging at-risk students.',
    accentColor: 'rose',
    iconName: 'GraduationCap',
    categoryFocus: ['Sales-focused', 'Customer-focused'],
    heroHeadline: 'Accelerate student admissions and ensure learner success.',
    heroSubheadline:
      'Transform slow admissions cycles into instantaneous student guidance and proactive academic engagement.',
    stats: [
      {
        label: 'Inquiry-to-App Speed',
        value: '4x faster',
        change: 'Target',
        detail: 'Simulated 24/7 advisor routing benchmark',
      },
      {
        label: 'Enrollment Yield',
        value: '+19.5%',
        change: 'Potential',
        detail: 'Illustrative course matching cohort',
      },
      {
        label: 'Course Completion Rate',
        value: '87%',
        change: 'Example',
        detail: 'Illustrative proactive intervention cohort',
      },
    ],
    challenges: [
      {
        id: 'edu-c1',
        problem: 'Slow Prospective Student Response',
        cause:
          'Admissions teams take 3–5 business days to answer prerequisite and tuition questions.',
        consequence:
          'Prospective learners lose interest and enroll with faster-responding competitor institutions.',
        severity: 'critical',
      },
      {
        id: 'edu-c2',
        problem: 'Manual Transcript & Prerequisite Verification',
        cause:
          'Staff spend hundreds of manual hours reviewing PDF transcripts, certificates, and ID documents.',
        consequence:
          'Admissions bottlenecks delay enrollment decisions by weeks, lowering matriculation yield.',
        severity: 'high',
      },
      {
        id: 'edu-c3',
        problem: 'Silent Student Dropout During Midterms',
        cause:
          'Students fall behind on assignments unnoticed until failing final exams or dropping out.',
        consequence:
          'Lower course completion rates and loss of tuition revenue from student withdrawals.',
        severity: 'moderate',
      },
    ],
    opportunities: [
      {
        problem: 'Admissions delays costing prospective student enrollment.',
        opportunity:
          '24/7 conversational student advisor providing instant syllabus and credential guidance.',
        potentialMultiplier: '4x faster inquiry response',
      },
      {
        problem: 'Manual document verification bottlenecks.',
        opportunity:
          'Cognitive document parser that validates transcripts and prerequisites in seconds.',
        potentialMultiplier: '82% faster application processing',
      },
      {
        problem: 'Unnoticed student engagement drop-off.',
        opportunity:
          'Continuous LMS telemetry alerting academic mentors to engagement anomalies early.',
        potentialMultiplier: '+22% course completion',
      },
    ],
    // 04 Aether Solutions (10 Specified Solutions for Education)
    solutionMappings: [
      {
        problem: 'Siloed Student Profiles & Fragmented Academic History',
        opportunity: 'Unified 360° student lifecycle profile',
        solution:
          'Student Intelligence: Aggregates academic transcripts, career goals, learning style preferences, and prerequisite completions into a unified dossier.',
        capabilityTag: 'Student Dossier',
      },
      {
        problem: 'Inbound Inquiry Overload & Slow Initial Contact',
        opportunity: 'Intelligent lead prioritization & instant triage',
        solution:
          'Admission Lead Intelligence: Ranks prospective student inquiries based on enrollment intent, credential readiness, and scholarship fit.',
        capabilityTag: 'Lead Prioritization',
      },
      {
        problem: 'Mismatched Student Goals & Ambiguous Inquiries',
        opportunity: 'Conversational requirement extraction engine',
        solution:
          'Requirement Understanding: Analyzes candidate career goals, schedule constraints, and skill baselines through natural conversational triage.',
        capabilityTag: 'Goal Diagnosis',
      },
      {
        problem: 'Course Catalog Confusion & Inappropriate Electives',
        opportunity: 'AI curriculum matching & prerequisite mapping',
        solution:
          'Course Matching: Recommends optimal degree programs, bootcamps, and elective specializations matching student career trajectories.',
        capabilityTag: 'Curriculum Match',
      },
      {
        problem: 'Delayed Outreach Causing Competitor Matriculation',
        opportunity: 'Multi-channel dynamic admissions sequences',
        solution:
          'Follow-up Automation: Dispatches personalized syllabus previews, scholarship assessments, and orientation bookings via WhatsApp and email.',
        capabilityTag: 'Admissions Outreach',
      },
      {
        problem: 'Low Student Discussion Participation & Forum Inactivity',
        opportunity: 'Gamified engagement triggers & mentor prompts',
        solution:
          'Engagement Intelligence: Monitors peer collaboration, lab completions, and forum queries to sustain active student participation.',
        capabilityTag: 'Engagement Engine',
      },
      {
        problem: 'Unnoticed Absenteeism & Missed Lecture Streaks',
        opportunity: 'Automated turnstile & virtual attendance tracking',
        solution:
          'Attendance Intelligence: Detects recurring lecture absences and dispatches supportive catch-up recordings and peer notes.',
        capabilityTag: 'Attendance Sync',
      },
      {
        problem: 'Midterm Dropouts & Unaddressed Academic Struggle',
        opportunity: 'Early warning dropout risk detection',
        solution:
          'Retention Intelligence: Identifies grade slips and assignment delays at Week 3, triggering faculty mentor office hour invitations.',
        capabilityTag: 'Retention Watchdog',
      },
      {
        problem: 'Manual Transcript Audits & Paper Enrollment Slips',
        opportunity: 'Cognitive transcript parsing & digital registration',
        solution:
          'Administrative Automation: Extracts GPA, prerequisite credits, and transfer approvals in seconds, eliminating manual registrar bottlenecks.',
        capabilityTag: 'Registrar Auto',
      },
      {
        problem: 'Lack of Program Cohort Analytics & Yield Visibility',
        opportunity: 'Institutional executive telemetry dashboard',
        solution:
          'Education Analytics: Delivers real-time telemetry on application-to-enrollment velocity, cohort completion rates, and alumni placement.',
        capabilityTag: 'Education Analytics',
      },
    ],
    workflowPipeline: {
      input: {
        source: 'Admissions Web Inquiry & Transcript Upload',
        details:
          'Prospective student uploaded undergraduate transcript for Master of Data Science program.',
        rawSignal: 'Candidate: Maya Lin. Prerequisite: Needs Linear Algebra & Python validation.',
      },
      intelligence: {
        diagnosis:
          'Prerequisites met with distinction (GPA: 3.82). High-intent candidate ready for fast-track enrollment.',
        metricScored: 'Admissions Compatibility: 98.2%',
      },
      recommendation: {
        actionProposed:
          'Fast-track application approval; send personalized scholarship offer and schedule advisor orientation.',
        confidence: '99.5% program fit',
      },
      action: {
        stepsExecuted: [
          'Parsed and validated transcript courses against program catalog',
          'Generated formal acceptance letter and tuition breakdown',
          'Dispatched congratulations SMS and digital enrollment portal link',
          'Scheduled 1-on-1 orientation call with Faculty Mentor',
        ],
        targetSystem: 'Student Information System (SIS) & CRM',
      },
      result: {
        outcome: 'Enrollment completed and tuition deposit secured in 12 minutes.',
        timeToImpact: '12 minutes',
      },
    },
    interactiveDemo: {
      scenarioTitle: 'Fast-Track Student Admissions & Transcript Verification',
      scenarioSubtitle:
        'Simulate Aether parsing an uploaded transcript and issuing an acceptance package in minutes.',
      simulatedSignal: {
        Applicant: 'Maya Lin (Master of Data Science)',
        SubmittedDocuments: 'Official Transcript (PDF), Resume, Prerequisite Sheet',
        ProgramPrerequisites: 'Linear Algebra (B+), Python Fundamentals (Pass)',
      },
      engineReasoning:
        'Prerequisites verified automatically. High-intent candidate fast-tracked for immediate enrollment.',
      automatedActions: [
        'Extracted academic course credits and verified grading criteria',
        'Validated prerequisite syllabus match against program guidelines',
        'Generated personalized admission offer and scholarship calculation',
        'Sent digital enrollment package with one-tap signature',
      ],
      verifiedOutcome:
        'Application processed and enrolled in 12 minutes vs industry average of 6 days.',
      executionDuration: '12 minutes',
    },
    businessIntelligence: {
      insights:
        'Students who receive admissions acceptance within 24 hours are 3.2x more likely to enroll.',
      predictions:
        'Spring term cybersecurity program enrollment projected to exceed target cap by 28%.',
      risks:
        'Week 4 drop-off risk flagged for students spending less than 3 hours on initial lab assignments.',
      opportunities:
        'Automating certificate graduation credentials can increase alumni referral rates by 18%.',
      recommendations:
        'Expand cybersecurity cohort capacity and trigger academic mentor check-ins at Week 3.',
    },
    businessImpact: {
      time: 'Saves admissions officers 15 hours per week in manual transcript reviews and prerequisite email queries.',
      efficiency:
        'Accelerates application-to-enrollment turnaround by 4x, securing top student talent before competitors.',
      customerExperience:
        'Prospective students receive instant, transparent answers to tuition, schedule, and career queries.',
      operations:
        'Centralizes student documents, financial aid paperwork, and orientation scheduling in one workflow.',
      decisionMaking:
        'Provides academic deans with accurate enrollment yield forecasts and retention risk metrics.',
      visibility:
        'Live telemetry displaying applicant pipeline velocity, LMS engagement indexes, and graduation tracking.',
    },
    additionalCapabilities: [
      {
        groupTitle: 'LMS & Student Information System Connectors',
        summary: 'Direct integration with Canvas, Blackboard, Moodle, and Banner.',
        features: [
          'Gradebook sync',
          'LMS login activity monitoring',
          'Automated course enrollment roster updates',
        ],
      },
      {
        groupTitle: 'Financial Aid & Tuition Workflow Mesh',
        summary: 'Automates payment plan setups, scholarship disbursement, and invoice reminders.',
        features: [
          'FAFSA document tracking',
          'Automated tuition payment schedules',
          'Scholarship eligibility matching',
        ],
      },
      {
        groupTitle: 'Career Placement & Alumni Network Engine',
        summary: 'Matches graduating students with employer job requisitions.',
        features: [
          'Automated resume formatting',
          'Employer interview scheduling',
          'Alumni mentoring connections',
        ],
      },
    ],
  },
];
