import { IndustryData } from '../types';

export const INDUSTRIES: IndustryData[] = [
  {
    id: 'real-estate',
    slug: 'real-estate',
    name: 'Real Estate',
    shortName: 'Real Estate',
    transformationStatement: 'Instant buyer qualification, MLS inventory matching, and automated viewing dispatch.',
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
      { label: 'Lead Response Time', value: '< 15s', change: '-99%', detail: 'Down from 4.2 hours average' },
      { label: 'Viewing Conversion', value: '38.4%', change: '+14.2%', detail: 'High-intent client pre-screening' },
      { label: 'Admin Friction', value: '72%', change: '-72%', detail: 'Automated document collection' },
    ],

    // 02 Business Challenges (8 Specified Problems)
    challenges: [
      {
        id: 're-c1',
        problem: 'Lead Fragmentation',
        cause: 'Inquiries arrive scattered across 99acres, MagicBricks, Housing.com, WhatsApp, and social campaigns without a unified ledger.',
        consequence: 'Brokers miss 35% of inbound inquiries and take hours to consolidate multi-portal data.',
        severity: 'critical',
      },
      {
        id: 're-c2',
        problem: 'Manual Requirement Collection',
        cause: 'Agents manually call every lead to repeatedly ask basic questions (budget, carpet area, possession, parking).',
        consequence: 'Buyer fatigue, delayed response times, and high drop-off before property options are even presented.',
        severity: 'high',
      },
      {
        id: 're-c3',
        problem: 'Lead Prioritization',
        cause: 'Inability to objectively separate casual window-shoppers from pre-approved, ready-to-transact buyers.',
        consequence: 'Top sales agents spend 60% of their day following up on unvetted leads with zero buying intent.',
        severity: 'high',
      },
      {
        id: 're-c4',
        problem: 'Poor Property Matching',
        cause: 'Relying on keyword filters or agent memory instead of deep semantic matching across inventory specs and buyer constraints.',
        consequence: 'Mismatched showings, wasted weekend tours, and lost buyer trust.',
        severity: 'critical',
      },
      {
        id: 're-c5',
        problem: 'Missed Follow-ups',
        cause: 'Agents lack automated memory and schedule reminders after initial property viewings or proposal shares.',
        consequence: 'Warm prospects go cold or buy from competing developers due to delayed nurturing.',
        severity: 'high',
      },
      {
        id: 're-c6',
        problem: 'Inventory Complexity',
        cause: 'Rapidly changing floor unit availability, floor-rise premiums, and parking allocations across multiple towers.',
        consequence: 'Pitching already-sold or price-revised units, creating deal friction and legal confusion.',
        severity: 'moderate',
      },
      {
        id: 're-c7',
        problem: 'Pricing Uncertainty',
        cause: 'Opaque builder discounts, stamp duty variances, and shifting micro-market price benchmarks.',
        consequence: 'Elongated negotiation cycles and hesitation from buyers unsure of true market value.',
        severity: 'moderate',
      },
      {
        id: 're-c8',
        problem: 'Site Visit Coordination',
        cause: 'Manual scheduling back-and-forth between buyer, relationship manager, site sales office, and gate security.',
        consequence: '40% site visit no-show rate and lost weekend viewing capacity.',
        severity: 'critical',
      },
    ],

    // 03 Aether Opportunities
    opportunities: [
      {
        problem: 'Multi-portal lead fragmentation and slow manual intake.',
        opportunity: 'Unified omni-channel cognitive ingestion that extracts buyer intent and criteria in under 15 seconds.',
        potentialMultiplier: '99% faster qualification',
      },
      {
        problem: 'Mismatched property recommendations and wasted inspection visits.',
        opportunity: 'Vectorized multi-attribute property matching considering budget tolerance, carpet area, parking, and possession timeline.',
        potentialMultiplier: '3.4x higher visit-to-token ratio',
      },
      {
        problem: 'Stalled inventory and delayed follow-ups after initial viewings.',
        opportunity: 'Reverse matching and automated contextual follow-up triggers based on buyer interaction telemetry.',
        potentialMultiplier: '28% faster inventory velocity',
      },
    ],

    // 04 Aether Solutions (12 Comprehensive Solutions)
    solutionMappings: [
      {
        problem: 'Lead Fragmentation',
        opportunity: 'Unified multi-channel ingestion',
        solution: 'AI Lead Intelligence: Ingests, dedupes, and normalizes incoming leads across WhatsApp, portals, and web forms into an intelligent unified pipeline.',
        capabilityTag: 'Lead Ingestion',
      },
      {
        problem: 'Manual Requirement Collection',
        opportunity: 'Natural language entity extraction',
        solution: 'Conversation-to-Requirement Engine: Automatically extracts location, budget, configuration, carpet area, parking, and possession from natural conversations.',
        capabilityTag: 'Entity Extraction',
      },
      {
        problem: 'Lack of Buyer Clarity',
        opportunity: 'Dynamic preference synthesis',
        solution: 'Customer Preference Profile: Synthesizes explicit needs and implicit behavioral signals into an actionable living buyer dossier.',
        capabilityTag: 'Preference Profile',
      },
      {
        problem: 'Lead Prioritization Blindspots',
        opportunity: 'Predictive readiness modeling',
        solution: 'Lead Scoring: Dynamically scores buyers on financing pre-approval, urgency timeline, and responsiveness to route high-intent buyers to top closers.',
        capabilityTag: 'Predictive Scoring',
      },
      {
        problem: 'Poor Property Matching',
        opportunity: 'Multi-factor inventory ranking',
        solution: 'Intelligent Property Matching: Computes match percentage across budget thresholds, location micro-markets, and unit amenities with transparent reasoning.',
        capabilityTag: 'Property Matching',
      },
      {
        problem: 'Unsold Developer Inventory',
        opportunity: 'Instant prospective buyer discovery',
        solution: 'Reverse Property Matching: Inverts the funnel to instantly surface qualified prospective buyers whenever new units or price revisions are logged.',
        capabilityTag: 'Reverse Discovery',
      },
      {
        problem: 'Inventory Complexity & Stale Availability',
        opportunity: 'Real-time multi-tower inventory ledger',
        solution: 'Property Inventory Intelligence: Tracks live unit availability, floor-rise adjustments, and parking slot states across all projects.',
        capabilityTag: 'Inventory Ledger',
      },
      {
        problem: 'Missed Follow-ups & Lead Decay',
        opportunity: 'Autonomous engagement cadence',
        solution: 'Follow-up Intelligence: Triggers context-rich follow-up prompts, payment plan revisions, and comparison sheets based on client viewing patterns.',
        capabilityTag: 'Follow-up Automation',
      },
      {
        problem: 'Site Visit Coordination Friction',
        opportunity: 'Autonomous multi-party calendar lock',
        solution: 'Site Visit Automation: Self-schedules site visits, syncs sales rep calendars, and issues digital QR passes for community security access.',
        capabilityTag: 'Visit Dispatch',
      },
      {
        problem: 'Pricing Uncertainty & Negotiation Lag',
        opportunity: 'Comparative market valuation intelligence',
        solution: 'Pricing Intelligence: Benchmarks per-sq-ft rates against micro-market transactions and generates optimized payment schedules in real time.',
        capabilityTag: 'Pricing Engine',
      },
      {
        problem: 'Market Trend Blindspots',
        opportunity: 'Aggregated micro-market demand telemetry',
        solution: 'Market Intelligence: Tracks sub-market demand trends, absorption velocity, and buyer budget shifts across key geographic corridors.',
        capabilityTag: 'Market Analytics',
      },
      {
        problem: 'Opaque Brokerage Pipeline Metrics',
        opportunity: 'Executive pipeline forecasting',
        solution: 'Sales Analytics: Provides full-funnel visibility from first touch to registration with conversion attribution and agent velocity metrics.',
        capabilityTag: 'Pipeline Analytics',
      },
    ],

    // 05 Intelligent Workflow
    workflowPipeline: {
      input: {
        source: 'WhatsApp Inbound Message',
        details: 'Unstructured natural language buyer inquiry received at 9:45 PM.',
        rawSignal: '"Looking for a 2BHK in Powai around ₹1.5 crore with parking and possession within 6 months."',
      },
      intelligence: {
        diagnosis: 'High Intent (96% readiness score); budget verified against Powai micro-market; pre-approved home loan status detected.',
        metricScored: 'Intent Readiness Index: 96%',
      },
      recommendation: {
        actionProposed: 'Match with Hiranandani Castle Rock & L&T Emerald Isle Phase II; dispatch digital dossier and propose Saturday 2:30 PM site visit.',
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
        outcome: 'Buyer qualified, top 4 matching properties presented, and site visit confirmed in under 15 seconds.',
        timeToImpact: '14.2 seconds',
      },
    },

    // 06 Interactive Demo
    interactiveDemo: {
      scenarioTitle: 'Conversation-to-Requirement & Property Match Engine',
      scenarioSubtitle: 'Simulate natural language message ingestion, requirement synthesis, and instant inventory matching.',
      simulatedSignal: {
        Customer: 'Ananya & Rohan Malhotra',
        Message: '"I\'m looking for a 2BHK in Powai around ₹1.5 crore with parking and preferably possession within 6 months."',
        ExtractedConfig: '2 BHK Luxury / Modern',
        ExtractedLocation: 'Powai Corridor (Central / Chandivali)',
        ExtractedBudget: '₹1.50 Cr (Tolerance ±5%)',
        ParkingNeeded: '1 Covered Dedicated Bay',
        PossessionWindow: '≤ 6 Months (Ready / Near-Possession)',
      },
      engineReasoning: 'Parsed unstructured buyer parameters. Vector-matched 4 properties across Powai inventory with 85%-96% match scores.',
      automatedActions: [
        'Extracted 6 discrete requirement entities from free-form text',
        'Generated verified Buyer Preference Profile with ₹1.5 Cr ceiling',
        'Queried active Powai inventory and ranked 4 matching properties',
        'Prepared instant Site Visit booking slots and side-by-side comparison dossier',
      ],
      verifiedOutcome: 'Requirement profile built and 4 high-match properties surfaced ready for inspection.',
      executionDuration: '12.8 seconds',
    },

    // 07 Business Intelligence
    businessIntelligence: {
      insights: '82% of qualified buyers who tour a property within 24 hours of inquiry make an offer within 14 days.',
      predictions: 'Weekend showing volume projected to surge 35% based on seasonal spring listing momentum.',
      risks: 'Average 4.2-hour agent response lag causing 44% of weekend buyer leads to go cold before first contact.',
      opportunities: 'Automating off-market buyer matching can generate an estimated $180k in additional annual brokerage commission.',
      recommendations: 'Enable autonomous evening showing locks and pre-qualify buyer budgets prior to agent assignment.',
    },

    // 08 Business Impact
    businessImpact: {
      time: 'Recovers 12+ hours per agent per week previously spent on manual tour scheduling and phone tag.',
      efficiency: 'Increases agent showing conversion rates by 14.2% through pre-qualified intent screening.',
      customerExperience: 'Delivers sub-15 second response times, wowing high-net-worth buyers with instant service.',
      operations: 'Eliminates data entry into CRM and synchronizes transaction documentation autonomously.',
      decisionMaking: 'Provides managing brokers real-time visibility into lead velocity, agent utilization, and deal pipeline health.',
      visibility: 'Unified dashboard tracking buyer readiness scores and showing feedback across all active properties.',
    },

    // 09 Additional Capabilities
    additionalCapabilities: [
      {
        groupTitle: 'MLS & Property Data Integration',
        summary: 'Direct real-time synchronizer with MLS feeds and property databases.',
        features: ['Automated listing attribute sync', 'Comparable property pricing engine', 'Tax and zoning history extraction'],
      },
      {
        groupTitle: 'Autonomous Document & Compliance Mesh',
        summary: 'Cognitive contract parsing and escrow milestone verification.',
        features: ['Disclosure packet validation', 'Proactive signature chasing', 'Earnest money deposit tracking'],
      },
      {
        groupTitle: 'Client Portfolio Intelligence',
        summary: 'Continuous buyer preference matching for off-market inventory.',
        features: ['Dynamic buyer criteria matching', 'Off-market listing match alerts', 'Automated price reduction alerts'],
      },
    ],
  },
  {
    id: 'restaurants',
    slug: 'restaurants',
    name: 'Restaurants & Food Businesses',
    shortName: 'Restaurants',
    transformationStatement: 'Predictive demand forecasting, dynamic prep scheduling, and automated inventory replenishment.',
    tagline: 'Predictive demand forecasting, kitchen workflow pacing, and menu profitability optimization.',
    description:
      'Aether transforms restaurant kitchens and multi-outlet food businesses by forecasting dish-level demand, automating daily prep par-levels, eliminating food waste, and orchestrating high-velocity kitchen workflows.',
    accentColor: 'amber',
    iconName: 'Utensils',
    categoryFocus: ['Operations-focused', 'Intelligence-heavy'],
    heroHeadline: 'Turn Food Waste & Kitchen Chaos Into Precision High-Margin Dining Shifts.',
    heroSubheadline:
      'How modern restaurant operators and multi-outlet culinary brands use Aether to predict item demand, synchronize raw ingredient orders, and streamline kitchen line execution.',
    stats: [
      { label: 'Food Waste Reduction', value: '-68%', change: '-68%', detail: 'Dynamic prep batching' },
      { label: 'Kitchen Ticket Velocity', value: '12.4m', change: '-50%', detail: 'Down from 24.8 mins' },
      { label: 'Food Cost Margin', value: '+4.8%', change: '+4.8%', detail: 'Optimized recipe procurement' },
    ],

    // 02 Business Challenges (8 Specified Problems)
    challenges: [
      {
        id: 'rst-c1',
        problem: 'Demand Uncertainty',
        cause: 'Unpredictable fluctuations across weather, local events, and seasonal holidays causing erratic covers.',
        consequence: 'Erratic kitchen prep resulting in either 86ing popular dishes mid-service or heavy end-of-night spoilage.',
        severity: 'critical',
      },
      {
        id: 'rst-c2',
        problem: 'Food Wastage',
        cause: 'Over-prepping high-cost perishable gravies, proteins, and cut vegetables based on static guesswork.',
        consequence: 'Operators lose 8–12% of total inventory cost directly into kitchen trash bins every single week.',
        severity: 'critical',
      },
      {
        id: 'rst-c3',
        problem: 'Inventory Issues',
        cause: 'Manual morning counts and blind reordering lead to stockouts on key proteins and emergency expensive purchases.',
        consequence: 'Frequent recipe compromises, lost delivery orders, and unexpected kitchen halt moments.',
        severity: 'high',
      },
      {
        id: 'rst-c4',
        problem: 'Kitchen Bottlenecks',
        cause: 'Simultaneous dine-in seatings and aggregator delivery spikes overloading the sauté, fryer, and tandoor passes.',
        consequence: 'Ticket times blow past 45 minutes, resulting in cold food complaints and stressed line cooks.',
        severity: 'critical',
      },
      {
        id: 'rst-c5',
        problem: 'Menu Profitability Uncertainty',
        cause: 'Opaque ingredient cost inflation where rising dairy and meat prices erode margins on legacy fixed-price dishes.',
        consequence: 'Restaurants unintentionally promote high-volume items that deliver negative gross margins.',
        severity: 'high',
      },
      {
        id: 'rst-c6',
        problem: 'Supplier Complexity',
        cause: 'Managing fragmented vendors across poultry, seafood, dairy, and dry goods with varying delivery SLAs and credit terms.',
        consequence: 'Late morning deliveries delay prep cycles, causing missing items during lunch rush openings.',
        severity: 'moderate',
      },
      {
        id: 'rst-c7',
        problem: 'Customer Retention',
        cause: 'Inability to track individual guest dining preferences, dietary allergies, and frequency intervals across visits.',
        consequence: 'Guests defect to competing dining spots without proactive loyalty re-engagement or recovery outreach.',
        severity: 'moderate',
      },
      {
        id: 'rst-c8',
        problem: 'Multi-Outlet Variance',
        cause: 'Inconsistent recipe compliance, divergent food cost ratios, and unequal prep quality across regional branch outlets.',
        consequence: 'Brand dilution and wild margin swings between flagship and satellite restaurant locations.',
        severity: 'high',
      },
    ],

    // 03 Aether Opportunities
    opportunities: [
      {
        problem: 'Uncertain guest footfall and erratic prep quantities.',
        opportunity: 'AI-driven dish-level demand forecasting factoring weather, day-of-week, and historical velocity.',
        potentialMultiplier: '68% food waste reduction',
      },
      {
        problem: 'Kitchen line ticket congestion during peak dining hours.',
        opportunity: 'Dynamic station load balancing and delivery ticket pacing aligned to line bandwidth.',
        potentialMultiplier: '50% faster ticket execution',
      },
      {
        problem: 'Multi-outlet recipe drift and inventory shrinkage.',
        opportunity: 'Centralized live inventory burn rate tracking and standardized recipe compliance scoring.',
        potentialMultiplier: '4.8% gross margin expansion',
      },
    ],

    // 04 Aether Solutions (10 Specified Solutions)
    solutionMappings: [
      {
        problem: 'Demand Uncertainty',
        opportunity: 'Predictive daily cover & item modeling',
        solution: 'Demand Forecasting: Models exact dish consumption curves across weekdays, weekends, rainy days, and festival surges.',
        capabilityTag: 'Demand Forecast',
      },
      {
        problem: 'Food Wastage & Over-Prepping',
        opportunity: 'Time-staged prep par calculations',
        solution: 'Preparation Intelligence: Computes staged kitchen prep schedules, par-cooking volumes, and sauce simmer batch sizes.',
        capabilityTag: 'Prep Optimizer',
      },
      {
        problem: 'Inventory Stockouts & Emergency Runs',
        opportunity: 'Real-time recipe-level depletion ledger',
        solution: 'Inventory Intelligence: Translates forecasted menu mix into precise raw ingredient purchase orders across all vendors.',
        capabilityTag: 'Auto-Replenish',
      },
      {
        problem: 'Perishable Spoilage in Walk-Ins',
        opportunity: 'Continuous ingredient shelf-life monitoring',
        solution: 'Wastage Detection: Flags high-cost raw proteins and dairy approaching expiration with automated daily salvage menus.',
        capabilityTag: 'Waste Prevention',
      },
      {
        problem: 'Kitchen Line Ticket Congestion',
        opportunity: 'Dynamic station capacity pacing',
        solution: 'Kitchen Workflow Intelligence: Paces dine-in and online delivery orders across grill, sauté, and tandoor stations in real time.',
        capabilityTag: 'Kitchen Pacing',
      },
      {
        problem: 'Opaque Dish Profitability Margins',
        opportunity: 'Live recipe cost attribution',
        solution: 'Menu Profitability: Continuously classifies menu items into Stars, Workhorses, Puzzles, and Dogs with dynamic price recommendations.',
        capabilityTag: 'Menu Engineering',
      },
      {
        problem: 'Fragmented Vendor Coordination',
        opportunity: 'Consolidated PO dispatch & SLA auditing',
        solution: 'Supplier Intelligence: Automatically splits purchase orders to optimal suppliers based on price, delivery reliability, and cut quality.',
        capabilityTag: 'Vendor Orchestration',
      },
      {
        problem: 'Generic Guest Dining Experiences',
        opportunity: 'Dine-in behavioral tagging',
        solution: 'Customer Segmentation: Profiles high-spend corporate accounts, family banquet bookers, and delivery-first consumers.',
        capabilityTag: 'Guest Intelligence',
      },
      {
        problem: 'Guest Churn & Infrequent Visits',
        opportunity: 'Predictive visit cadence prompter',
        solution: 'Repeat Customer Prediction: Identifies drop-offs in usual dining frequency and triggers personalized culinary tasting invites.',
        capabilityTag: 'Retention Engine',
      },
      {
        problem: 'Discrepancies Across Regional Branches',
        opportunity: 'Unified multi-outlet variance dashboard',
        solution: 'Multi-Outlet Analytics: Tracks recipe adherence, food cost variance, and prep productivity across every branch location.',
        capabilityTag: 'Multi-Branch Sync',
      },
    ],

    // 05 Intelligent Workflow (6 Steps)
    workflowPipeline: {
      input: {
        source: 'POS Historical Sales & Weather Webhook',
        details: 'Ingesting 90-day item consumption telemetry + Saturday forecast + rainy weather advisory.',
        rawSignal: 'Historical Saturday Average: 440 covers. Weather alert: 80% heavy rainfall anticipated.',
      },
      intelligence: {
        diagnosis: 'Dine-in covers projected to drop 22%; online delivery curry orders projected to surge +70%.',
        metricScored: 'Forecast Precision Score: 98.4%',
      },
      recommendation: {
        actionProposed: 'Increase Butter Chicken & Biryani batch prep +35%; reduce fresh pasta & chilled seafood prep -45%.',
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
        outcome: 'Zero dish stockouts achieved during peak dinner rush; shift food wastage kept below 2.1%.',
        timeToImpact: 'Instantaneous shift planning',
      },
    },

    // 06 Interactive Demo
    interactiveDemo: {
      scenarioTitle: 'Predictive Kitchen Prep & Inventory Dispatch Engine',
      scenarioSubtitle: 'Simulate scenario-driven demand forecasting across Weekdays, Weekends, Rain, and Festivals.',
      simulatedSignal: {
        Shift: 'Tomorrow Evening Service',
        ProjectedCovers: '240 Dine-in / 110 Delivery',
        TopMovingDish: 'Slow-Cooked Dum Biryani (85 pots)',
        CriticalIngredient: 'Fresh Boneless Poultry (44 kg required)',
        EstimatedFoodCost: '27.4% (Industry target < 30%)',
      },
      engineReasoning: 'Shift forecast synthesized from historical sales patterns, weather telemetry, and active table bookings.',
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
      insights: 'Butter Chicken and Dum Biryani comprise 62% of high-margin dinner contribution with zero spoilage risk.',
      predictions: 'Weekend dinner rush projected to require 48% more marinated poultry and auxiliary tandoor heating.',
      risks: 'Fresh Atlantic Salmon and heavy cream sauces show elevated spoilage risk if prep batch sizes exceed 35 portions.',
      opportunities: 'Automated recipe depletion tracking can recover an estimated ₹2,48,000 in monthly kitchen waste reduction.',
      recommendations: 'Stagger Biryani handi sealing into two cycles (11:00 AM and 6:30 PM) to eliminate cold leftover write-offs.',
    },

    // 08 Business Impact
    businessImpact: {
      time: 'Recovers 14+ hours per week per head chef previously spent on manual prep list calculation and vendor phone calls.',
      efficiency: 'Cuts average kitchen ticket times by 50% (down from 24.8 mins to 12.4 mins) through intelligent station pacing.',
      customerExperience: 'Guarantees zero dish stockouts on signature items and ensures consistent plate temperatures.',
      operations: 'Eliminates 68% of food waste through dynamic time-staged prep batching and live inventory depletion.',
      decisionMaking: 'Provides multi-outlet culinary directors real-time visibility into recipe compliance, food cost variance, and dish margins.',
      visibility: 'Unified multi-outlet dashboard tracking dish velocity, station load, and supplier order status.',
    },
    additionalCapabilities: [
      {
        groupTitle: 'Kitchen Display System (KDS) Pacing',
        summary: 'Synchronizes order release across hot line, pantry, and expo.',
        features: ['Station load balancing', 'Multi-course cook countdowns', 'Dynamic prep batch timing'],
      },
      {
        groupTitle: 'Supplier & Vendor EDI Automation',
        summary: 'Automated purchase orders for produce, meats, and beverages.',
        features: ['Dynamic par level adjustments', 'Price variance detection', 'Receiving slip OCR validation'],
      },
      {
        groupTitle: 'Guest Loyalty & Dietary Engine',
        summary: 'Recognizes VIP diners and tracks allergy preferences automatically.',
        features: ['VIP table preference flags', 'Allergen safety prompts', 'Automated anniversary invitations'],
      },
    ],
  },
  {
    id: 'gyms',
    slug: 'gyms',
    name: 'Gyms & Fitness Centers',
    shortName: 'Gyms & Fitness',
    transformationStatement: 'Autonomous member retention, silent churn interception, and standby class filling.',
    tagline: 'Autonomous member retention, automated class utilization, and predictive churn prevention.',
    description:
      'Aether transforms fitness businesses by detecting silent member drop-off patterns weeks before cancellation, automating renewal triggers, and optimizing class capacity.',
    accentColor: 'emerald',
    iconName: 'Dumbbell',
    categoryFocus: ['Customer-focused', 'Operations-focused'],
    heroHeadline: 'Stop silent member churn before it happens.',
    heroSubheadline:
      'Empower fitness clubs with early warning member behavior analysis and automated high-touch re-engagement sequences.',
    stats: [
      { label: 'Member Retention', value: '91.4%', change: '+18%', detail: 'Measured at 12-month cohort' },
      { label: 'Class Capacity Fill', value: '88%', change: '+24%', detail: 'Dynamic standby backfills' },
      { label: 'Saved At-Risk ARR', value: '$140k+', change: 'Per club', detail: 'Automated intervention triggers' },
    ],
    // 02 Business Challenges (7 Specified Problems)
    challenges: [
      {
        id: 'gym-c1',
        problem: 'Member Inactivity',
        cause: 'Members gradually reduce weekly visits from 4 to 0 over 30–60 days without early staff detection.',
        consequence: 'Silent habit break leads directly to cancellation without any recovery intervention.',
        severity: 'critical',
      },
      {
        id: 'gym-c2',
        problem: 'Member Churn',
        cause: 'High annual member attrition (up to 40% yearly) requiring expensive acquisition campaigns just to maintain baseline count.',
        consequence: 'Clubs lose $120k–$200k in annual recurring membership dues.',
        severity: 'critical',
      },
      {
        id: 'gym-c3',
        problem: 'Missed Renewals',
        cause: 'Expiring annual contracts and failed autopay credit cards sitting unaddressed in billing backlogs.',
        consequence: '15–20% of lapsed memberships simply drift away rather than actively cancelling.',
        severity: 'high',
      },
      {
        id: 'gym-c4',
        problem: 'Poor Engagement',
        cause: 'New members left to self-navigate without personalized routine benchmarks or community connections.',
        consequence: '50% of new joiners drop off within their first 90 days due to lack of motivation.',
        severity: 'high',
      },
      {
        id: 'gym-c5',
        problem: 'Trainer Scheduling',
        cause: 'Personal trainers manage schedules and client cancellations over personal text messages without calendar sync.',
        consequence: 'Lost commission tracking, unbilled late cancellations, and underutilized trainer hours.',
        severity: 'moderate',
      },
      {
        id: 'gym-c6',
        problem: 'Class Capacity',
        cause: 'Peak spin, HIIT, and reformer pilates classes book out instantly with a 25% no-show rate.',
        consequence: 'Empty studio spots during prime hours while waitlisted members are turned away.',
        severity: 'high',
      },
      {
        id: 'gym-c7',
        problem: 'Customer Personalization',
        cause: 'Treating high-intensity athletes, wellness yogis, and corporate lunchtime runners with identical generic emails.',
        consequence: 'Low email open rates (<12%) and disconnect between members and club amenities.',
        severity: 'moderate',
      },
    ],

    // 03 Aether Opportunities
    opportunities: [
      {
        problem: 'Silent member drop-off before formal cancellation.',
        opportunity: 'Turnstile telemetry & habit break modeling that alerts staff after 10 days of inactivity.',
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
        solution: 'Member Intelligence: Unifies turnstile check-ins, app logs, class preferences, and workout frequency into a 360° profile.',
        capabilityTag: 'Member Dossier',
      },
      {
        problem: 'Member Inactivity & Habit Breaks',
        opportunity: 'Predictive attendance decline triggers',
        solution: 'Inactivity Detection: Flags members whose weekly visit frequency drops below their individual historical threshold.',
        capabilityTag: 'Early Alert',
      },
      {
        problem: 'High Annual Member Churn',
        opportunity: 'Multi-variable churn probability scoring',
        solution: 'Churn Prediction: Scores every member from 0–100% on churn likelihood based on visit velocity, app logins, and booking friction.',
        capabilityTag: 'Risk Scoring',
      },
      {
        problem: 'Missed Renewals & Autopay Lapses',
        opportunity: 'Autonomous contract renewal triggers',
        solution: 'Renewal Intelligence: Initiates personalized renewal sequences 30 days prior with customized loyalty milestone perks.',
        capabilityTag: 'Renewal Engine',
      },
      {
        problem: 'Poor Member Engagement & Plateaus',
        opportunity: 'Automated motivational milestones',
        solution: 'Engagement Recommendations: Prescribes tailored recovery sessions, body composition scans, and community challenges.',
        capabilityTag: 'Engagement Prompts',
      },
      {
        problem: 'Trainer Scheduling & Late Dropoffs',
        opportunity: 'Centralized trainer booking mesh',
        solution: 'Trainer Scheduling: Synchronizes client availability, enforces late cancellation billing, and manages commission payroll.',
        capabilityTag: 'Trainer Dispatch',
      },
      {
        problem: 'Studio Class Capacity & No-Shows',
        opportunity: 'Dynamic standby queue allocation',
        solution: 'Class Intelligence: Auto-releases unfilled bikes and reformer beds to waitlisted members 90 minutes before class.',
        capabilityTag: 'Class Optimizer',
      },
      {
        problem: 'Opaque Membership Cohort Health',
        opportunity: 'Executive cohort retention tracking',
        solution: 'Membership Analytics: Tracks lifetime value (LTV), tier upgrades, corporate pass utilization, and revenue per square foot.',
        capabilityTag: 'Cohort Analytics',
      },
      {
        problem: 'Reactive Retention Interventions',
        opportunity: 'Closed-loop retention workflow ledger',
        solution: 'Retention Analytics: Measures intervention ROI, coach outreach conversion, and preserved annual recurring revenue.',
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
        actionProposed: 'Dispatch personalized coach touchpoint with complimentary hydro-massage recovery pass.',
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
      scenarioSubtitle: 'Simulate Aether detecting a high-value member dropping from 4 visits/week to 0 visits.',
      simulatedSignal: {
        Member: 'Elena Rostova (Tier: Premium All-Access, $180/mo)',
        VisitHistory: 'Historical: 4.2 visits/wk -> Current: 0 visits in 21 days',
        RiskScore: 'High Churn Probability (89%)',
      },
      engineReasoning: 'Habit break threshold passed. Automated coach intervention and recovery booking triggered.',
      automatedActions: [
        'Generated personalized re-engagement card in Head Trainer task board',
        'Auto-sent conversational wellness check-in with one-tap recovery booking',
        'Member booked recovery slot for Friday morning',
        'Re-activation confirmed; churn flag status lowered to Moderate',
      ],
      verifiedOutcome: 'Member restored active routine; $2,160 annual subscription value preserved.',
      executionDuration: '48 minutes to member response',
    },
    businessIntelligence: {
      insights: 'Members who try at least two different class formats within their first 30 days have an 88% 12-month retention rate.',
      predictions: 'January surge cohort expected to experience initial churn risk window at day 45 (mid-February).',
      risks: 'Peak Tuesday 18:00 spin class shows 24% late cancellation rate, leaving 6 bikes empty per session.',
      opportunities: 'Automating personal training package renewals can generate an estimated $45k in recovered revenue.',
      recommendations: 'Trigger 14-day inactivity incentives and auto-release unfilled spin bikes 90 minutes prior to class.',
    },
    businessImpact: {
      time: 'Saves fitness managers 10 hours per week in manual spreadsheet tracking of inactive members.',
      efficiency: 'Increases group fitness studio fill rate to 88% through dynamic standby backfills.',
      customerExperience: 'Provides high-touch member care that makes members feel valued and supported in their fitness goals.',
      operations: 'Automates trainer session tracking, commissions, and package consumption without manual logs.',
      decisionMaking: 'Provides club owners with accurate 90-day cash flow projections based on churn risk modeling.',
      visibility: 'Live telemetry displaying daily turnstile scans, active membership tiers, and at-risk accounts.',
    },
    additionalCapabilities: [
      {
        groupTitle: 'Turnstile & Mobile App Telemetry',
        summary: 'Real-time check-in stream analysis and app workout logging.',
        features: ['RFID gate scan integration', 'Mobile app engagement tracking', 'Facility heat map density'],
      },
      {
        groupTitle: 'Trainer Commission & Billing Mesh',
        summary: 'Automates session completion sign-offs and payroll calculations.',
        features: ['Split-rate commission rules', 'Late cancellation auto-charge', 'Package expiration warnings'],
      },
      {
        groupTitle: 'Dynamic Yield & Pass Monetization',
        summary: 'Monetizes off-peak hours with guest pass and day pass yield management.',
        features: ['Off-peak pass dynamic pricing', 'Corporate wellness tracking', 'Automated locker assignment'],
      },
    ],
  },
  {
    id: 'salons',
    slug: 'salons',
    name: 'Salons & Beauty Businesses',
    shortName: 'Salons & Beauty',
    transformationStatement: 'Intelligent schedule nesting, treatment cycle re-booking, and 24/7 concierge.',
    tagline: 'Smart chair utilization, automated re-booking cadence, and dynamic practitioner dispatch.',
    description:
      'Aether transforms appointment-based wellness businesses by predicting optimal client re-booking cycles, filling empty chair gaps, and eliminating receptionist bottlenecks.',
    accentColor: 'violet',
    iconName: 'Sparkles',
    categoryFocus: ['Operations-focused', 'Customer-focused'],
    heroHeadline: 'Fill every chair and automate client re-booking cycles.',
    heroSubheadline:
      'Eliminate awkward calendar gaps and keep stylists booked solid with autonomous client lifecycle scheduling.',
    stats: [
      { label: 'Chair Utilization', value: '94%', change: '+26%', detail: 'Gap-filling algorithm' },
      { label: 'Re-Booking Interval', value: '5.2 wks', change: '-1.8 wks', detail: 'Cadence prompt engine' },
      { label: 'Receptionist Admin', value: '-65%', change: '-65%', detail: 'Autonomous booking dispatch' },
    ],
    // 02 Business Challenges (6 Specified Problems for Salons)
    challenges: [
      {
        id: 'sal-c1',
        problem: 'No-Shows',
        cause: 'Clients book weekend prime color and styling slots but fail to attend without 24-hour notice.',
        consequence: 'Salons lose up to 14.5% of gross revenue while paying fixed master stylist hourly wages.',
        severity: 'critical',
      },
      {
        id: 'sal-c2',
        problem: 'Missed Rebooking',
        cause: 'Stylists forget to lock next appointments at checkout; clients stretch 6-week color cycles to 12+ weeks.',
        consequence: 'Loss of 2.4 billable service appointments per client every year.',
        severity: 'critical',
      },
      {
        id: 'sal-c3',
        problem: 'Customer Churn',
        cause: 'Clients switch salons when communication lapses or after inconsistent formula records across stylist shifts.',
        consequence: 'High churn of valuable balayage and spa regulars requiring expensive replacement acquisition.',
        severity: 'high',
      },
      {
        id: 'sal-c4',
        problem: 'Scheduling Inefficiency',
        cause: '45-minute dead zones between lengthy chemical color and foil development appointments.',
        consequence: 'Unbilled chair capacity wasting 22% of daily salon potential.',
        severity: 'high',
      },
      {
        id: 'sal-c5',
        problem: 'Staff Utilization',
        cause: 'Junior assistants underbooked while master stylists suffer burnout from double-booking.',
        consequence: 'Erratic payroll costs, stylist turnover, and compromised service quality.',
        severity: 'moderate',
      },
      {
        id: 'sal-c6',
        problem: 'Unknown Preferences',
        cause: 'Color formulas, toner ratios, scalp sensitivities, and beverage choices stored only in stylist memory.',
        consequence: 'Sub-par guest experience when regular stylists take leave or change branches.',
        severity: 'moderate',
      },
    ],

    // 03 Aether Opportunities
    opportunities: [
      {
        problem: 'Missed rebookings and stretched treatment intervals.',
        opportunity: 'Predictive treatment cycle prompters timed to individual hair regrowth and toner fade timelines.',
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
        solution: 'Customer Intelligence: Consolidates historical chemical formulas, developer strengths, scalp sensitivities, and stylist preferences.',
        capabilityTag: 'Guest Dossier',
      },
      {
        problem: 'Opaque Past Treatment Logs',
        opportunity: 'Longitudinal service telemetry tracking',
        solution: 'Service History: Tracks every chemical service, toner ratio, cut geometry, and retail product purchase across all visits.',
        capabilityTag: 'Service Ledger',
      },
      {
        problem: 'Calendar Dead Zones & Booking Gaps',
        opportunity: 'Intelligent calendar gap nesting',
        solution: 'Appointment Intelligence: Automatically identifies 45-minute gaps between foil processing and nests express blowouts.',
        capabilityTag: 'Schedule Nesting',
      },
      {
        problem: 'Prime-Time Weekend No-Shows',
        opportunity: 'Behavioral cancellation risk scoring',
        solution: 'No-Show Prediction: Scores booking cancellation risks and enforces automated confirmation links and deposit authorizations.',
        capabilityTag: 'No-Show Guard',
      },
      {
        problem: 'Stretched 12-Week Visit Cycles',
        opportunity: 'Regrowth-aware rebooking triggers',
        solution: 'Rebooking Intelligence: Predicts exact gray regrowth and blonde brassiness windows to dispatch personalized 1-tap rebooking links.',
        capabilityTag: 'Cadence Engine',
      },
      {
        problem: 'Unoptimized Retail & Service Upsells',
        opportunity: 'Tailored chemical companion recommendations',
        solution: 'Service Recommendations: Suggests bonding treatments (Olaplex/K18) and take-home sulfate-free regimens matched to active color.',
        capabilityTag: 'Upsell Engine',
      },
      {
        problem: 'Imbalanced Stylist Utilization',
        opportunity: 'Skill-matched station scheduling',
        solution: 'Staff Scheduling: Balances junior assistant prep, master stylist chair occupancy, and spa room turnover.',
        capabilityTag: 'Staff Dispatch',
      },
      {
        problem: 'Lapsed High-Ticket Client Defection',
        opportunity: 'Predictive churn intervention mesh',
        solution: 'Retention Intelligence: Identifies clients exceeding 1.5x their usual visit interval and triggers personalized recovery invitations.',
        capabilityTag: 'Retention Guard',
      },
      {
        problem: 'Opaque Chair Yield & Retail Margin Metrics',
        opportunity: 'Per-chair revenue velocity analytics',
        solution: 'Revenue Analytics: Visualizes revenue per chair-hour, stylist retail conversion, and service margin contributions.',
        capabilityTag: 'Yield Analytics',
      },
    ],
    workflowPipeline: {
      input: {
        source: 'Salon Booking Calendar Telemetry',
        details: 'Stylist Sarah has a 50-minute gap on Thursday between 14:00 and 14:50.',
        rawSignal: 'Slot: Thursday 14:00–14:50. Qualified Express Clients: 4 nearby clients due for blowout.',
      },
      intelligence: {
        diagnosis: 'Predictable $75 chair revenue leakage. Client "Jessica Taylor" is due for weekly blowout.',
        metricScored: 'Gap-Fill Probability: 91.5%',
      },
      recommendation: {
        actionProposed: 'Send conversational VIP express booking invite to Jessica with 10% midday reward.',
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
      scenarioSubtitle: 'Simulate Aether detecting a 50-minute dead zone and securing a client booking in 8 minutes.',
      simulatedSignal: {
        Stylist: 'Sarah Jenkins (Master Colorist)',
        CalendarGap: 'Thursday 14:00–14:50 (Unbilled Window)',
        TargetClient: 'Jessica Taylor (Blowout due date: Today)',
      },
      engineReasoning: 'Unbilled chair capacity detected. Automated express outreach dispatched with one-tap confirmation.',
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
      insights: 'Balayage clients who book their touch-up within 7 weeks spend $340 more annually on retail products.',
      predictions: 'Saturday morning appointments projected to book out 3 weeks in advance for holiday season.',
      risks: 'Stylist turnover risk flagged when chair utilization drops below 65% for 3 consecutive weeks.',
      opportunities: 'Automating express treatment add-ons can increase average ticket size by $28 across all stylists.',
      recommendations: 'Activate automatic 6-week toner reminders and enable deposit holds on first-time color clients.',
    },
    businessImpact: {
      time: 'Saves stylists and front desk 7 hours per week in phone scheduling and confirmation messages.',
      efficiency: 'Increases total chair utilization to 94%, turning dead calendar zones into high-margin revenue.',
      customerExperience: 'Clients receive timely, personalized care recommendations without feeling pressured.',
      operations: 'Eliminates double-bookings and enforces clear cancellation policies automatically.',
      decisionMaking: 'Provides salon owners visibility into stylist performance, re-booking rates, and product sales.',
      visibility: 'Live dashboard showing daily chair occupancy, stylist billings, and client retention trends.',
    },
    additionalCapabilities: [
      {
        groupTitle: 'Treatment Cycle Intelligence',
        summary: 'Customized mathematical modeling of hair color, skin, and nail maintenance intervals.',
        features: ['Color fade prediction', 'Skincare routine checkpoints', 'Client photo portfolio tagging'],
      },
      {
        groupTitle: 'Retail Product Recommendation Mesh',
        summary: 'Suggests home-care products aligned with in-salon chemical services.',
        features: ['Post-color product guides', 'Automated replenishment texts', 'Stylist commission attribution'],
      },
      {
        groupTitle: 'Booth Rent & Commission Ledger',
        summary: 'Calculates commission tiers and booth rental payouts automatically.',
        features: ['Tiered service commissions', 'Product sales splits', 'Automated payout summaries'],
      },
    ],
  },
  {
    id: 'cafes',
    slug: 'cafes',
    name: 'Cafes',
    shortName: 'Cafes',
    transformationStatement: 'Rush-hour queue optimization, predictive pastry bake batches, and automated restock.',
    tagline: 'Rush-hour queue optimization, predictive pastry bake schedules, and automated supplier replenishment.',
    description:
      'Aether transforms high-velocity cafes by predicting morning surge volumes, optimizing barista station workflows, and eliminating bakery waste.',
    accentColor: 'amber',
    iconName: 'Coffee',
    categoryFocus: ['Operations-focused', 'Intelligence-heavy'],
    heroHeadline: 'Conquer morning rush velocity and slash bakery waste.',
    heroSubheadline:
      'Transform hectic coffee counters into precision production lines with real-time rush forecasting and smart bake scheduling.',
    stats: [
      { label: 'Morning Rush Output', value: '+31%', change: '+31%', detail: 'Cups per barista hour' },
      { label: 'Pastry Waste', value: '3.1%', change: '-68%', detail: 'Predictive bake batches' },
      { label: 'Average Queue Time', value: '2.4 min', change: '-55%', detail: 'Down from 5.5 min' },
    ],
    challenges: [
      {
        id: 'caf-c1',
        problem: 'Morning Commuter Queue Walk-Aways',
        cause: '7:30–9:00 AM rush overwhelms counter staff and espresso machines simultaneously.',
        consequence: 'Up to 18% of hurried commuters leave the line without ordering, losing daily revenue.',
        severity: 'critical',
      },
      {
        id: 'caf-c2',
        problem: 'Mid-Afternoon Bakery Spoilage',
        cause: 'Baking fixed quantities at 6:00 AM regardless of weather, transit delays, or foot traffic.',
        consequence: 'Trays of high-cost croissants and artisanal pastries thrown away daily at 4:00 PM.',
        severity: 'high',
      },
      {
        id: 'caf-c3',
        problem: 'Peak-Hour Milk & Bean Stockouts',
        cause: 'Manual morning counts fail to anticipate high weekend specialty oat/almond milk consumption.',
        consequence: 'Running out of critical ingredients mid-Saturday forces 86ing popular menu items.',
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
        solution: 'Demand Forecasting: Models exact hourly cup volumes, bean consumption curves, and hot vs iced demand shifts.',
        capabilityTag: 'Demand Forecast',
      },
      {
        problem: 'Bakery Spoilage & Cold Brew Guesswork',
        opportunity: 'Precision multi-stage prep scheduling',
        solution: 'Preparation Recommendations: Prescribes morning croissant par-bakes, cold brew keg steeping volumes, and sandwich prep counts.',
        capabilityTag: 'Prep Scheduler',
      },
      {
        problem: 'Specialty Oat Milk & Bean Stockouts',
        opportunity: 'Dynamic burn-rate replenishment',
        solution: 'Inventory Intelligence: Continuously tracks coffee bean weights, fresh dairy cartons, and takeaway cup sleeves against auto-PO thresholds.',
        capabilityTag: 'Stock Replenish',
      },
      {
        problem: 'Mid-Afternoon Pastry Write-offs',
        opportunity: 'Sell-through telemetry & discount timing',
        solution: 'Wastage Detection: Identifies expiring bakery batches and recommends timed promotional bundles before end-of-day discarding.',
        capabilityTag: 'Waste Prevention',
      },
      {
        problem: 'Unoptimized Seasonal Beverage Mix',
        opportunity: 'Modifier & margin contribution analysis',
        solution: 'Menu Intelligence: Optimizes plant-based milk upcharges, seasonal single-origin pour-overs, and high-margin breakfast pairings.',
        capabilityTag: 'Menu Engineering',
      },
      {
        problem: 'Unobserved Customer Loyalty Shifts',
        opportunity: 'Commuter habit & frequency clustering',
        solution: 'Customer Behaviour: Tracks commuter repeat frequency, remote worker dwell time, and afternoon grab-and-go buying habits.',
        capabilityTag: 'Habit Analytics',
      },
      {
        problem: 'Opaque Peak-Hour Revenue Velocity',
        opportunity: 'Real-time extraction speed & ticket analytics',
        solution: 'Sales Analytics: Visualizes hourly revenue velocity, drink throughput per machine group, and modifier attachment rates.',
        capabilityTag: 'Sales Velocity',
      },
      {
        problem: 'Understaffed Morning Extraction Passes',
        opportunity: 'Telemetry-based shift roster balancing',
        solution: 'Staffing Intelligence: Dynamically schedules baristas, shot pullers, and expeditor staff exactly across the 7:30–10:30 AM rush window.',
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
        diagnosis: 'Espresso bar overload risk. Drink order complexity skews 70% iced espresso beverages.',
        metricScored: 'Surge Velocity: High Impact',
      },
      recommendation: {
        actionProposed: 'Pre-allocate second barista exclusively to cold-brew and iced prep; throttle mobile pickup windows to 6 min.',
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
        outcome: 'Processed 31% more transactions with average counter wait time held under 2.5 minutes.',
        timeToImpact: '2.5 minutes',
      },
    },
    interactiveDemo: {
      scenarioTitle: 'Morning Rush Surge Flow & Barista Role Balancing',
      scenarioSubtitle: 'Simulate Aether handling a sudden commuter surge and pacing drink delivery.',
      simulatedSignal: {
        FootTraffic: '+40% surge detected from nearby transit hub',
        CurrentQueue: '14 drinks pending across mobile and counter',
        DrinkComplexity: '70% custom iced espresso drinks',
      },
      engineReasoning: 'Espresso station overload diagnosed. Autonomous station role re-allocation and ticket pacing executed.',
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
      insights: 'Rainy weekdays increase hot beverage ticket size by 24% while reducing pastry attachment by 8%.',
      predictions: 'Tomorrow’s sunny 72°F forecast will shift 65% of morning beverage volume to iced and cold brew.',
      risks: 'Oat milk inventory projected to hit critical reorder threshold by 14:00 Friday without restock.',
      opportunities: 'Staging a small 11:00 AM savory pastry bake can capture an estimated $120 extra daily lunch revenue.',
      recommendations: 'Pre-order 4 additional cases of oat milk and set Bar 2 for cold drink dominance.',
    },
    businessImpact: {
      time: 'Saves cafe managers 6 hours per week in manual stock counting and supplier order entry.',
      efficiency: 'Boosts morning drink output by 31% per barista hour during the crucial 7:30–9:00 AM revenue window.',
      customerExperience: 'Commuters get their morning coffee in under 2.5 minutes, building loyal daily habits.',
      operations: 'Slashes bakery waste from 10% to under 3.1% through intelligent staged batch baking.',
      decisionMaking: 'Provides owners with accurate daily prep plans accounting for weather and local foot traffic.',
      visibility: 'Live dashboard showing cups per hour, inventory burn rates, and hourly revenue velocity.',
    },
    additionalCapabilities: [
      {
        groupTitle: 'High-Velocity Queue Pacing',
        summary: 'Real-time ordering queue balancing across mobile apps and counter registers.',
        features: ['Drink ticket batching', 'Mobile order rate limiting', 'Counter display ready-boards'],
      },
      {
        groupTitle: 'Local Roaster & Dairy Supply Mesh',
        summary: 'Direct integration with local coffee roasters and dairy suppliers.',
        features: ['Automated roast date tracking', 'Dairy crate auto-reorders', 'Invoice price reconciliation'],
      },
      {
        groupTitle: 'Loyalty & Routine Habit Engine',
        summary: 'Identifies regular commuters and pre-stages their morning routine orders.',
        features: ['Geofence order suggestions', 'Morning streak bonuses', 'Automated loyalty reward push'],
      },
    ],
  },
  {
    id: 'retail',
    slug: 'retail',
    name: 'Retail Businesses',
    shortName: 'Retail',
    transformationStatement: 'Unified omnichannel stock intelligence, automated returns, and restock triggers.',
    tagline: 'Unified inventory intelligence, predictive restock triggers, and autonomous customer resolution.',
    description:
      'Aether transforms retail storefronts and e-commerce brands by unifying multi-location inventory, predicting SKU demand, and automating customer return flows.',
    accentColor: 'sky',
    iconName: 'ShoppingBag',
    categoryFocus: ['Customer-focused', 'Operations-focused'],
    heroHeadline: 'Unify omnichannel stock and automate customer service.',
    heroSubheadline:
      'Connect in-store POS, online storefronts, and warehouse fulfillment into a self-balancing commerce engine.',
    stats: [
      { label: 'Stockout Incidents', value: '-81%', change: '-81%', detail: 'Predictive transfer triggers' },
      { label: 'Customer Inquiry SLA', value: '< 45s', change: '-92%', detail: 'Autonomous support resolution' },
      { label: 'Inventory Holding Cost', value: '-16%', change: '-16%', detail: 'Lean demand matching' },
    ],
    challenges: [
      {
        id: 'ret-c1',
        problem: 'Siloed In-Store vs Warehouse Stock',
        cause: 'Items sell out online while sitting unsold on retail store racks 20 miles away.',
        consequence: 'Canceled online orders, lost sales, and frustrated customers who look elsewhere.',
        severity: 'critical',
      },
      {
        id: 'ret-c2',
        problem: 'High Support Ticket Backlog',
        cause: 'Support staff overwhelmed by repetitive "Where is my order?" and return policy questions.',
        consequence: 'Response times balloon to 24+ hours, hurting customer loyalty and brand reputation.',
        severity: 'high',
      },
      {
        id: 'ret-c3',
        problem: 'Deep End-of-Season Markdown Losses',
        cause: 'Slow-moving SKUs are identified too late in the season, requiring 50%+ clearance markdowns.',
        consequence: 'Gross margins erode on seasonal inventory that could have sold with earlier micro-promotions.',
        severity: 'moderate',
      },
    ],
    opportunities: [
      {
        problem: 'Online stockouts while physical stores hold inventory.',
        opportunity: 'Ship-from-store automated routing based on local SKU velocity.',
        potentialMultiplier: '81% fewer stockouts',
      },
      {
        problem: 'High volume of repetitive WISMO customer inquiries.',
        opportunity: 'Autonomous support agent that looks up courier tracking and issues instant return labels.',
        potentialMultiplier: '92% tickets resolved in <45s',
      },
      {
        problem: 'Margin loss from deep clearance markdowns.',
        opportunity: 'Dynamic micro-promotions triggered at the first sign of sell-through deceleration.',
        potentialMultiplier: '+14% higher realized margins',
      },
    ],
    solutionMappings: [
      {
        problem: 'Fragmented omnichannel inventory',
        opportunity: 'Single source of inventory truth',
        solution: 'Omnichannel Stock Mesh that syncs warehouse, store, and online inventory and routes fulfillment dynamically.',
        capabilityTag: 'Stock Mesh',
      },
      {
        problem: 'Overwhelmed customer service team',
        opportunity: 'Autonomous 24/7 care concierge',
        solution: 'Retail Support Agent that resolves delivery tracking, address changes, and exchanges autonomously.',
        capabilityTag: 'Support Agent',
      },
      {
        problem: 'Unsold seasonal inventory accumulation',
        opportunity: 'Predictive sell-through velocity tracking',
        solution: 'Dynamic Markdown Engine that recommends targeted bundle offers before seasonal margin decay.',
        capabilityTag: 'Markdown Optimizer',
      },
    ],
    workflowPipeline: {
      input: {
        source: 'Shopify / POS Inventory Telemetry',
        details: 'SKU "Wool Trench Coat - Navy - Size M" stockout online; 3 units available at Downtown Store.',
        rawSignal: 'Online customer cart abandoned due to stockout alert.',
      },
      intelligence: {
        diagnosis: 'High-margin cart recovery opportunity. Downtown Store has low in-store foot traffic today.',
        metricScored: 'Fulfillment Feasibility: 99.2%',
      },
      recommendation: {
        actionProposed: 'Enable ship-from-store routing for Downtown Store and notify customer of available stock.',
        confidence: '98.5% conversion likelihood',
      },
      action: {
        stepsExecuted: [
          'Routed fulfillment ticket to Downtown Store handheld scanner',
          'Reserved unit for packing',
          'Sent instant restock notification to customer',
          'Customer completed purchase within 4 minutes',
        ],
        targetSystem: 'Store POS & Warehouse ERP',
      },
      result: {
        outcome: '$285 order captured that would have otherwise bounced to a competitor.',
        timeToImpact: '4 minutes',
      },
    },
    interactiveDemo: {
      scenarioTitle: 'Omnichannel Stockout Interception & Ship-From-Store Routing',
      scenarioSubtitle: 'Simulate Aether rescuing an abandoned online cart by routing stock from a local store.',
      simulatedSignal: {
        CustomerCart: 'Navy Wool Trench Coat ($285)',
        WarehouseStatus: 'Out of Stock (0 units)',
        StoreStock: 'Downtown Store (3 units on rack)',
      },
      engineReasoning: 'Stockout abandonment diagnosed. Autonomous ship-from-store routing and customer alert executed.',
      automatedActions: [
        'Detected stockout event during online checkout flow',
        'Cross-checked physical store inventory within regional shipping radius',
        'Created store picking ticket and reserved inventory',
        'Dispatched instant checkout link to customer',
      ],
      verifiedOutcome: 'Full-price sale saved and fulfilled within standard 2-day delivery window.',
      executionDuration: '4 minutes',
    },
    businessIntelligence: {
      insights: 'Customers who use self-service returns repurchase 2.4x more frequently within 60 days.',
      predictions: 'Outerwear category demand expected to surge 45% following forecasted weekend cold front.',
      risks: 'Denim SKU #408 showing 35% higher return rate due to sizing discrepancy on product page.',
      opportunities: 'Enabling ship-from-store across all 4 locations can unlock an estimated $140k in annual online sales.',
      recommendations: 'Update sizing chart on Denim #408 and pre-allocate shipping supplies to Downtown Store.',
    },
    businessImpact: {
      time: 'Saves customer support team 14 hours per week by resolving tracking and return requests autonomously.',
      efficiency: 'Reduces stockouts by 81% through smart cross-store inventory transfer and routing.',
      customerExperience: 'Resolves customer questions in under 45 seconds, improving shopper satisfaction.',
      operations: 'Eliminates deadstock by balancing inventory turnover across retail locations.',
      decisionMaking: 'Provides merchandisers with accurate sell-through analytics and reorder signals.',
      visibility: 'Live telemetry displaying real-time stock levels, return rates, and shipping SLAs across all stores.',
    },
    additionalCapabilities: [
      {
        groupTitle: 'Omnichannel ERP & POS Connectors',
        summary: 'Direct integration with Shopify, Square, Lightspeed, and NetSuite.',
        features: ['Real-time inventory sync', 'Cross-store transfer routing', 'Automated receiving reconciliation'],
      },
      {
        groupTitle: 'Autonomous Returns & Exchange Portal',
        summary: 'Self-service customer portal with instant prepaid return label generation.',
        features: ['Instant QR code return labels', 'Automated exchange validation', 'Damaged goods photo inspection'],
      },
      {
        groupTitle: 'Dynamic Bundling & Cross-Sell Engine',
        summary: 'Pairs slow-moving accessories with high-velocity apparel items.',
        features: ['Dynamic cart checkout bundles', 'Personalized email lookbooks', 'Restock alert notifications'],
      },
    ],
  },
  {
    id: 'hotels',
    slug: 'hotels',
    name: 'Hotels & Hospitality',
    shortName: 'Hotels & Hospitality',
    transformationStatement: 'Autonomous guest concierge, predictive housekeeping routing, and amenity upsell.',
    tagline: 'Autonomous guest concierge, predictive housekeeping dispatch, and dynamic room revenue optimization.',
    description:
      'Aether transforms boutique and luxury hotels by streamlining front desk bottlenecks, intelligently pacing housekeeping staff, and delivering personalized guest services.',
    accentColor: 'teal',
    iconName: 'BedDouble',
    categoryFocus: ['Customer-focused', 'Operations-focused'],
    heroHeadline: 'Elevate guest experience while optimizing hotel operations.',
    heroSubheadline:
      'Deliver five-star personalization at scale with autonomous guest communication and intelligent staff dispatch.',
    stats: [
      { label: 'Check-In Wait Time', value: '< 1 min', change: '-85%', detail: 'Digital key & concierge flow' },
      { label: 'Room Turnover Speed', value: '+28%', change: '+28%', detail: 'Predictive housekeeping routing' },
      { label: 'Ancillary Guest Spend', value: '+$42/nt', change: '+32%', detail: 'Intelligent upsell prompts' },
    ],
    challenges: [
      {
        id: 'hot-c1',
        problem: '3 PM Front Desk Check-In Bottlenecks',
        cause: 'Dozens of guests arrive simultaneously while receptionists manually process IDs and keys.',
        consequence: '20+ minute lobby lines that create a frustrating first impression for tired travelers.',
        severity: 'critical',
      },
      {
        id: 'hot-c2',
        problem: 'Housekeeping Route Inefficiencies',
        cause: 'Cleaning staff clean rooms in floor numerical order rather than incoming guest arrival priorities.',
        consequence: 'Early-arriving VIP guests wait in the lobby while empty rooms for late-arriving guests are cleaned first.',
        severity: 'high',
      },
      {
        id: 'hot-c3',
        problem: 'Unsold On-Property Amenities',
        cause: 'Guests are unaware of spa openings, cabana availability, or chef tasting menus.',
        consequence: 'Loss of $30–$60 per guest night in high-margin ancillary amenity revenue.',
        severity: 'moderate',
      },
    ],
    opportunities: [
      {
        problem: 'Long front desk check-in lines.',
        opportunity: 'Autonomous digital check-in, identity verification, and mobile key issuance.',
        potentialMultiplier: '85% faster check-in',
      },
      {
        problem: 'Housekeeping cleaned in arbitrary order.',
        opportunity: 'Predictive housekeeping dispatch prioritized by real-time flight tracking.',
        potentialMultiplier: '28% faster room turn',
      },
      {
        problem: 'Unsold spa and dining capacity.',
        opportunity: 'Contextual AI recommendations delivered at optimal guest relaxation moments.',
        potentialMultiplier: '+$42/night ancillary spend',
      },
    ],
    solutionMappings: [
      {
        problem: '3 PM front desk lobby congestion',
        opportunity: 'Mobile pre-arrival check-in',
        solution: 'Digital Concierge that verifies guest ID, processes security deposits, and issues mobile room keys before arrival.',
        capabilityTag: 'Digital Concierge',
      },
      {
        problem: 'Mismatched room cleaning priorities',
        opportunity: 'Flight-aware housekeeping routing',
        solution: 'Housekeeping Dispatcher that dynamically orders room cleaning queues based on guest landing times.',
        capabilityTag: 'Housekeeping Dispatch',
      },
      {
        problem: 'Under-utilized spa and dining amenities',
        opportunity: 'Personalized in-stay recommendation',
        solution: 'Amenity Upsell Engine that suggests relevant experiences via WhatsApp or SMS based on guest profile.',
        capabilityTag: 'Amenity Upsell',
      },
    ],
    workflowPipeline: {
      input: {
        source: 'Airline Flight Telemetry & PMS Booking',
        details: 'VIP guest flight landed at local airport at 13:15 (2 hours ahead of 15:00 check-in).',
        rawSignal: 'Guest: David Sterling (Suite 402). Status: Flight landed early.',
      },
      intelligence: {
        diagnosis: 'Early arrival opportunity. Suite 402 is dirty; Housekeeping currently on 4th floor.',
        metricScored: 'Priority Cleaning Escalation: Confirmed',
      },
      recommendation: {
        actionProposed: 'Re-route Housekeeping Team to Suite 402 immediately; pre-cool room to 68°F.',
        confidence: '99.4% priority match',
      },
      action: {
        stepsExecuted: [
          'Sent priority cleaning ticket to Housekeeper mobile tablet',
          'Suite 402 cleaned and inspected by 13:45',
          'Activated mobile room key credential on guest phone',
          'Sent welcome message: "Your suite is ready for early check-in"',
        ],
        targetSystem: 'PMS & Smart Door Lock API',
      },
      result: {
        outcome: 'Guest walked straight to prepared suite upon arrival; positive 5-star review logged.',
        timeToImpact: '30 minutes',
      },
    },
    interactiveDemo: {
      scenarioTitle: 'Flight Delay Tracking & Priority Room Turn Dispatch',
      scenarioSubtitle: 'Simulate Aether detecting an early landing flight and prioritizing room turnaround.',
      simulatedSignal: {
        Guest: 'David Sterling (Suite 402)',
        FlightTelemetry: 'Flight #UA421 landed 13:15 (45 min early)',
        RoomStatus: 'Suite 402 (Pending Cleaning)',
      },
      engineReasoning: 'Early arrival VIP diagnosed. Autonomous housekeeping re-route and digital key generation executed.',
      automatedActions: [
        'Ingested flight tracking telemetry and flagged early landing',
        'Dispatched priority turnaround ticket to floor housekeeping tablet',
        'Pre-conditioned room climate to guest profile preference',
        'Issued digital key credential to guest mobile phone',
      ],
      verifiedOutcome: 'Suite ready 75 minutes ahead of standard check-in time with zero front-desk queue.',
      executionDuration: '30 minutes',
    },
    businessIntelligence: {
      insights: 'Guests who receive an early check-in notification spend 40% more on room service on their arrival day.',
      predictions: 'Sunday checkout volume projected to leave 35 rooms empty between 11:00 and 16:00.',
      risks: 'Spa therapist schedule underutilized by 30% on Monday and Tuesday mornings.',
      opportunities: 'Offering late checkout add-ons at 09:00 can generate an estimated $4,500 extra weekly room revenue.',
      recommendations: 'Automate Monday spa promotion to guests staying 3+ nights and activate 14:00 late checkout offers.',
    },
    businessImpact: {
      time: 'Saves front desk staff 15 hours per week by automating routine check-ins and amenity inquiries.',
      efficiency: 'Accelerates room turnover by 28% through flight-aware housekeeping prioritization.',
      customerExperience: 'Delivers frictionless 5-star luxury service with zero lobby waiting lines.',
      operations: 'Eliminates lost keycard replacements and centralizes guest requests into a unified task board.',
      decisionMaking: 'Provides hotel general managers with real-time RevPAR, occupancy, and guest satisfaction metrics.',
      visibility: 'Live telemetry displaying room cleanliness status, guest arrival times, and concierge response times.',
    },
    additionalCapabilities: [
      {
        groupTitle: 'Property Management System (PMS) Mesh',
        summary: 'Deep two-way integration with Opera, Cloudbeds, and Mews.',
        features: ['Real-time folio updates', 'Smart lock access coding', 'Automatic tax and fee ledgering'],
      },
      {
        groupTitle: 'Multilingual Guest Concierge',
        summary: '24/7 conversational support in 30+ languages over SMS and WhatsApp.',
        features: ['Instant luggage dispatch', 'Local restaurant recommendations', 'Maintenance request triage'],
      },
      {
        groupTitle: 'Amenity & Event Revenue Yield',
        summary: 'Optimizes pricing and availability for cabanas, spa slots, and dining.',
        features: ['Dynamic cabana pricing', 'Spa slot gap filling', 'Private dining reservation locks'],
      },
    ],
  },
  {
    id: 'healthcare',
    slug: 'healthcare',
    name: 'Healthcare & Clinics',
    shortName: 'Healthcare & Clinics',
    transformationStatement: 'Conversational patient intake, cancellation slot recovery, and pre-op reminders.',
    tagline: 'Automated patient intake, smart cancellation backfills, and proactive pre-op instructions.',
    description:
      'Aether transforms outpatient clinics and medical practices by automating intake paperwork, filling last-minute cancellations, and ensuring patient adherence.',
    accentColor: 'cyan',
    iconName: 'Stethoscope',
    categoryFocus: ['Operations-focused', 'Customer-focused'],
    heroHeadline: 'Eliminate patient intake paperwork and unfilled clinic slots.',
    heroSubheadline:
      'Free clinical staff from administrative overload while improving patient care continuity and appointment attendance.',
    stats: [
      { label: 'Intake Admin Time', value: '-78%', change: '-78%', detail: 'Digital pre-visit ingestion' },
      { label: 'Unfilled Slot Recovery', value: '84%', change: '+84%', detail: 'Automated waitlist matching' },
      { label: 'Patient No-Show Rate', value: '3.4%', change: '-62%', detail: 'Multi-touch conversational prep' },
    ],
    challenges: [
      {
        id: 'hc-c1',
        problem: 'Paper Intake Delays Clinical Start Times',
        cause: 'Patients arrive and spend 15 minutes filling out paper clipboards with redundant medical histories.',
        consequence: 'Physician appointments start late, causing cascading delays throughout the entire clinic day.',
        severity: 'critical',
      },
      {
        id: 'hc-c2',
        problem: 'Costly Provider Idle Time from Cancellations',
        cause: 'Patients cancel appointments with less than 24 hours notice, leaving expensive physician slots empty.',
        consequence: 'Practices lose $200–$500 per unfilled provider hour while backlogged patients wait weeks for care.',
        severity: 'high',
      },
      {
        id: 'hc-c3',
        problem: 'Day-of Procedure Cancellations',
        cause: 'Patients fail to follow fasting, medication hold, or transportation instructions before procedures.',
        consequence: 'Operating suites sit idle, wasting thousands in facility fees and clinical team prep time.',
        severity: 'moderate',
      },
    ],
    opportunities: [
      {
        problem: 'Paper-based intake bottlenecks at reception.',
        opportunity: 'Conversational pre-visit questionnaire syncing structured data directly to EHR.',
        potentialMultiplier: '78% less intake admin time',
      },
      {
        problem: 'Late appointment cancellations leaving providers idle.',
        opportunity: 'Autonomous waitlist matching that backfills open slots in under 5 minutes.',
        potentialMultiplier: '84% recovered open slots',
      },
      {
        problem: 'Procedure cancellations from poor patient preparation.',
        opportunity: 'Interactive step-by-step preparation briefings with confirmation checkpoints.',
        potentialMultiplier: '91% fewer prep cancellations',
      },
    ],
    // 04 Aether Solutions (8 Specified Solutions for Healthcare)
    solutionMappings: [
      {
        problem: 'Siloed Patient Booking & Waitlist Fragmentation',
        opportunity: 'Unified multi-channel booking orchestration',
        solution: 'Appointment Intelligence: Dynamically schedules, triages, and reconciles patient appointment slots across clinical specialties and provider calendars.',
        capabilityTag: 'Appointment Engine',
      },
      {
        problem: 'Costly Unfilled Provider Idle Slots & Late Drop-Offs',
        opportunity: 'ML attendance risk scoring & waitlist backfills',
        solution: 'No-Show Prediction: Forecasts appointment attendance risk (0–100%) and triggers automated standby slot backfills within minutes of cancellation.',
        capabilityTag: 'No-Show AI',
      },
      {
        problem: 'Missed Patient Appointments & Prep Failures',
        opportunity: 'Conversational multi-channel prep checkpoints',
        solution: 'Automated Reminders: Dispatches personalized WhatsApp/SMS pre-visit briefings with 1-tap confirmations and digital directions.',
        capabilityTag: 'Reminders & Prep',
      },
      {
        problem: 'Disjointed Post-Consultation Adherence & Reviews',
        opportunity: 'Automated post-discharge care coordination',
        solution: 'Follow-up Management: Coordinates post-visit check-ins, medication adherence prompts, and specialist review scheduling.',
        capabilityTag: 'Care Continuity',
      },
      {
        problem: 'Cascading Clinic Delays & Schedule Conflicts',
        opportunity: 'Dynamic slot duration & provider pacing',
        solution: 'Scheduling Intelligence: Analyzes provider consultation velocity to dynamically space appointment windows and eliminate waiting room congestion.',
        capabilityTag: 'Smart Scheduling',
      },
      {
        problem: 'Repetitive Paper Clipboard Intake & Redundant Entry',
        opportunity: 'Autonomous EHR-synchronized intake ingestion',
        solution: 'Administrative Workflow Automation: Ingests digital intake questionnaires, verifies insurance coverage, and populates EHR records before arrival.',
        capabilityTag: 'Admin Automation',
      },
      {
        problem: 'Sub-Optimal Room & Equipment Utilization',
        opportunity: 'Real-time clinic capacity load balancing',
        solution: 'Capacity Intelligence: Balances examination room assignments, diagnostic equipment slots, and nursing staff availability in real time.',
        capabilityTag: 'Capacity Optimizer',
      },
      {
        problem: 'Lack of Administrative Visibility & Billing Leakage',
        opportunity: 'Clinic-wide operational performance telemetry',
        solution: 'Operational Analytics: Tracks patient throughput velocity, provider utilization yield, wait times, and administrative turnaround metrics.',
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
        diagnosis: 'High-value provider idle time diagnosed. Patient "Robert Torres" has urgent referral and requested morning slot.',
        metricScored: 'Waitlist Match Confidence: 97.6%',
      },
      recommendation: {
        actionProposed: 'Dispatch SMS slot claim link to Robert Torres with 15-minute response window.',
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
        outcome: '$350 provider slot preserved; patient received care 2 weeks ahead of original schedule.',
        timeToImpact: '3 minutes',
      },
    },
    interactiveDemo: {
      scenarioTitle: 'Specialist Cancellation Slot Recovery & Patient Intake',
      scenarioSubtitle: 'Simulate Aether backfilling an open cardiology slot and gathering intake data in 3 minutes.',
      simulatedSignal: {
        Provider: 'Dr. Patel (Cardiology)',
        OpenSlot: 'Tomorrow 10:30 AM (Cancellation)',
        QueuedPatient: 'Robert Torres (Urgent referral on waitlist)',
      },
      engineReasoning: 'Provider idle time diagnosed. Autonomous waitlist matching and clinical intake dispatched.',
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
      insights: 'Patients who complete digital intake beforehand have a 96% on-time consultation rate.',
      predictions: 'Flu season surge expected to increase pediatric clinic visit volume by 40% over next 3 weeks.',
      risks: 'MRI scanner utilization dropping to 60% on Friday afternoons due to high late cancellation rate.',
      opportunities: 'Automating insurance pre-authorizations can accelerate procedure scheduling by 6 business days.',
      recommendations: 'Activate 48-hour MRI confirmation checkpoints and pre-stage intake for high-volume morning clinics.',
    },
    businessImpact: {
      time: 'Saves medical receptionists 12 hours per week in phone scheduling, intake transcription, and reminder calls.',
      efficiency: 'Recovers 84% of dropped appointment slots, maximizing provider productivity and billable encounters.',
      customerExperience: 'Patients bypass waiting room clipboards and experience respectful, on-time consultations.',
      operations: 'Reduces physician charting overtime by providing structured pre-digested patient intake summaries.',
      decisionMaking: 'Provides clinic directors with clear analytics on no-show trends, provider utilization, and waitlist demand.',
      visibility: 'Live telemetry displaying provider schedules, room status, and patient intake completion rates.',
    },
    additionalCapabilities: [
      {
        groupTitle: 'EHR & Practice Management Connectors',
        summary: 'HIPAA-compliant integration with Epic, Cerner, AthenaHealth, and Kareo.',
        features: ['Structured CCDA note export', 'Real-time appointment slot sync', 'Insurance eligibility verification'],
      },
      {
        groupTitle: 'Clinical Protocol & Triage Mesh',
        summary: 'Customizable specialty-specific intake workflows and triage questionnaires.',
        features: ['Symptom severity scoring', 'Medication allergy checks', 'Digital consent signature capture'],
      },
      {
        groupTitle: 'Post-Visit Care & Adherence Engine',
        summary: 'Automates follow-up check-ins, medication refills, and satisfaction surveys.',
        features: ['Post-discharge check-ins', 'Medication adherence prompts', 'Automated referral tracking'],
      },
    ],
  },
  {
    id: 'automotive',
    slug: 'automotive',
    name: 'Automotive / Car Service Businesses',
    shortName: 'Automotive',
    transformationStatement: 'Service bay capacity balancing, parts pre-verification, and predictive maintenance.',
    tagline: 'Service bay scheduling optimization, parts availability synchronization, and predictive maintenance dispatch.',
    description:
      'Aether transforms automotive service centers by balancing lift technician capacity, verifying parts inventory before booking, and triggering automated maintenance outreach.',
    accentColor: 'indigo',
    iconName: 'Car',
    categoryFocus: ['Operations-focused', 'Sales-focused'],
    heroHeadline: 'Maximize service bay throughput and parts alignment.',
    heroSubheadline:
      'Eliminate technician downtime and vehicle hold-overs with unified bay scheduling and proactive customer service triggers.',
    stats: [
      { label: 'Bay Utilization', value: '92.5%', change: '+24%', detail: 'Technician skill matching' },
      { label: 'Parts Hold-Over Delay', value: '-70%', change: '-70%', detail: 'Pre-booking parts verification' },
      { label: 'Customer RO Value', value: '+$185', change: '+28%', detail: 'AI diagnostic health checks' },
    ],
    challenges: [
      {
        id: 'auto-c1',
        problem: 'Mismatched Bay & Technician Scheduling',
        cause: 'Service advisors overbook heavy transmission jobs on the same morning without checking lift types.',
        consequence: 'Lifts sit blocked all day while master technicians are bottlenecked and quick lube bays sit idle.',
        severity: 'critical',
      },
      {
        id: 'auto-c2',
        problem: 'Vehicles Disassembled Waiting for Parts',
        cause: 'Cars are put on lifts before checking if required replacement brake rotors or gaskets are in stock.',
        consequence: 'Cars stall on lifts for 24+ hours, blocking other paying customer repair orders.',
        severity: 'high',
      },
      {
        id: 'auto-c3',
        problem: 'Lost Routine Maintenance Retention',
        cause: 'Dealerships fail to follow up when customer vehicles cross 30k/60k/90k mileage thresholds.',
        consequence: 'Customers default to independent quick-lube shops, losing $800+ in annual customer lifetime value.',
        severity: 'moderate',
      },
    ],
    opportunities: [
      {
        problem: 'Bay bottlenecks and technician idle time.',
        opportunity: 'Skills- and lift-aware intelligent bay scheduling balancing heavy vs express repairs.',
        potentialMultiplier: '+24% completed repair orders',
      },
      {
        problem: 'Vehicles stalled on lifts waiting for parts.',
        opportunity: 'Automated parts availability pre-verification before confirming drop-off appointments.',
        potentialMultiplier: '70% fewer parts hold-overs',
      },
      {
        problem: 'Lapsed mileage maintenance customers.',
        opportunity: 'Predictive telematics and mileage projections triggering automated service invitations.',
        potentialMultiplier: '+36% routine service retention',
      },
    ],
    // 04 Aether Solutions (9 Specified Solutions for Automotive)
    solutionMappings: [
      {
        problem: 'Fragmented Vehicle History & Missed Diagnostic Logs',
        opportunity: 'Unified vehicle digital passport',
        solution: 'Vehicle Service Intelligence: Consolidates historical repair orders, OBD-II error codes, and OEM service bulletins into a predictive vehicle profile.',
        capabilityTag: 'Vehicle Passport',
      },
      {
        problem: 'Unanticipated Component Wear & Breakdown Delays',
        opportunity: 'Telematics & mileage degradation modeling',
        solution: 'Maintenance Prediction: Calculates exact component wear intervals (brakes, transmission fluid, timing belts) based on real-world driving data.',
        capabilityTag: 'Predictive Service',
      },
      {
        problem: 'Lapsed Mileage Service Customers & Churn',
        opportunity: 'Automated mileage milestone outreach',
        solution: 'Service Reminders: Dispatches personalized WhatsApp/SMS notifications at crucial 30k/60k/90k mileage intervals with pre-calculated estimates.',
        capabilityTag: 'Smart Reminders',
      },
      {
        problem: 'Advisor Overbooking & Inaccurate Drop-Off Windows',
        opportunity: 'Job-complexity aware intake booking',
        solution: 'Appointment Intelligence: Synchronizes customer drop-off schedules with bay availability and estimated labor hours.',
        capabilityTag: 'Booking Engine',
      },
      {
        problem: 'Unbalanced Service Bay Loading & Lift Bottlenecks',
        opportunity: 'Dynamic lift rating & throughput pacing',
        solution: 'Workshop Scheduling: Balances heavy mechanical lift bays against 60-minute express lube bays to eliminate floor congestion.',
        capabilityTag: 'Bay Scheduling',
      },
      {
        problem: 'Mismatch Between Job Complexity & Tech Certification',
        opportunity: 'Automated skill-based job routing',
        solution: 'Technician Allocation: Assigns complex diagnostic, electrical, and engine rebuild jobs to certified master technicians.',
        capabilityTag: 'Tech Allocation',
      },
      {
        problem: 'Vehicles Stalled on Lifts Awaiting Spare Parts',
        opportunity: 'Pre-booking parts inventory reservation',
        solution: 'Parts Intelligence: Pre-verifies warehouse inventory and stages required OEM parts before customer drop-off.',
        capabilityTag: 'Parts Staging',
      },
      {
        problem: 'Customers Defaulting to Independent Quick-Lubes',
        opportunity: 'Proactive digital vehicle health inspections',
        solution: 'Customer Retention: Sends transparent video multi-point inspection summaries and scheduled loyalty maintenance perks.',
        capabilityTag: 'Retention Engine',
      },
      {
        problem: 'Opaque Workshop Labor & Financial Yield',
        opportunity: 'Real-time dealership executive telemetry',
        solution: 'Service Analytics: Delivers granular analytics on bay utilization, technician flag-hour efficiency, and average repair order value.',
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
        diagnosis: 'Heavy job requiring Master Tech certification and Lift Bay #4. Brake pads and spark plugs required in stock.',
        metricScored: 'Parts Feasibility: In Stock at Warehouse',
      },
      recommendation: {
        actionProposed: 'Reserve Bay #4 for 09:30 AM drop-off; trigger parts staging ticket for parts counter.',
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
        outcome: 'Job started immediately upon customer arrival; completed 45 minutes ahead of estimate.',
        timeToImpact: 'On-time delivery',
      },
    },
    interactiveDemo: {
      scenarioTitle: 'Bay Capacity Balancing & Pre-Staged Parts Verification',
      scenarioSubtitle: 'Simulate Aether verifying parts stock, reserving lift bay, and assigning certified technician.',
      simulatedSignal: {
        CustomerVehicle: '2021 Audi Q7 (60k Major Service)',
        RequiredParts: 'OEM Brake Rotors, Ceramic Pads, Spark Plugs',
        BayAvailability: 'Lift Bay #4 (Master Tech Dan certified)',
      },
      engineReasoning: 'Heavy service repair order diagnosed. Parts availability verified and master tech lift reserved.',
      automatedActions: [
        'Checked DMS parts inventory and staged items at parts counter',
        'Balanced technician workload avoiding heavy repair bottlenecks',
        'Issued digital mobile check-in pass to customer',
        'Assigned repair order to technician tablet',
      ],
      verifiedOutcome: 'Zero parts delay hold-overs; repair completed 45 minutes ahead of schedule.',
      executionDuration: 'Immediate real-time execution',
    },
    businessIntelligence: {
      insights: 'Customers who receive video inspection walk-throughs approve 38% more recommended repair work.',
      predictions: 'Winter tire changeover rush expected to peak during first two weeks of November (+60% tire bay load).',
      risks: 'Diagnostic bay bottleneck projected on Monday morning due to 4 pending electrical diagnostic tickets.',
      opportunities: 'Automating brake fluid flush recommendations on vehicles over 3 years old can generate $22k monthly.',
      recommendations: 'Pre-order 20 cases of common synthetic oil and stage tire balancer bays for November rush.',
    },
    businessImpact: {
      time: 'Saves service advisors 11 hours per week in parts phone calls and manual schedule rebalancing.',
      efficiency: 'Increases daily completed repair orders by 24% through technician skill and lift optimization.',
      customerExperience: 'Customers enjoy transparent digital check-in, loaner car coordination, and faster vehicle return.',
      operations: 'Eliminates overnight vehicle hold-overs caused by missing replacement parts.',
      decisionMaking: 'Provides service directors with accurate bay utilization, technician efficiency, and RO dollar averages.',
      visibility: 'Live shop telemetry displaying active lift status, technician progress, and vehicle delivery estimates.',
    },
    additionalCapabilities: [
      {
        groupTitle: 'Dealer Management System (DMS) Connectors',
        summary: 'Direct integration with CDK Global, Reynolds & Reynolds, and Dealertrack.',
        features: ['Real-time repair order creation', 'Parts catalog cross-referencing', 'Technician flag-hour payroll sync'],
      },
      {
        groupTitle: 'Digital Multi-Point Video Inspection',
        summary: 'Technician video walk-throughs sent directly to customer phones with one-tap approval.',
        features: ['Mobile video upload', 'Line-item quote approval', 'Digital signature capture'],
      },
      {
        groupTitle: 'Fleet Telematics & Preventative Maintenance',
        summary: 'Monitors commercial fleet vehicle error codes and schedules batch maintenance.',
        features: ['OBD-II DTC error code ingestion', 'Fleet preventative schedules', 'Consolidated billing statements'],
      },
    ],
  },
  {
    id: 'education',
    slug: 'education',
    name: 'Education & Training Centers',
    shortName: 'Education & Training',
    transformationStatement: 'Student inquiry triage, automated credential verification, and LMS drop-off alerts.',
    tagline: 'Student inquiry triage, automated admissions workflows, and predictive learner engagement monitoring.',
    description:
      'Aether transforms educational institutions and training academies by automating student admissions triage, personalizing enrollment pipelines, and flagging at-risk students.',
    accentColor: 'rose',
    iconName: 'GraduationCap',
    categoryFocus: ['Sales-focused', 'Customer-focused'],
    heroHeadline: 'Accelerate student admissions and ensure learner success.',
    heroSubheadline:
      'Transform slow admissions cycles into instantaneous student guidance and proactive academic engagement.',
    stats: [
      { label: 'Inquiry-to-App Speed', value: '4x faster', change: '4x', detail: 'Instant 24/7 advisor' },
      { label: 'Enrollment Yield', value: '+19.5%', change: '+19.5%', detail: 'Personalized course matching' },
      { label: 'Course Completion Rate', value: '87%', change: '+22%', detail: 'Proactive intervention alerts' },
    ],
    challenges: [
      {
        id: 'edu-c1',
        problem: 'Slow Prospective Student Response',
        cause: 'Admissions teams take 3–5 business days to answer prerequisite and tuition questions.',
        consequence: 'Prospective learners lose interest and enroll with faster-responding competitor institutions.',
        severity: 'critical',
      },
      {
        id: 'edu-c2',
        problem: 'Manual Transcript & Prerequisite Verification',
        cause: 'Staff spend hundreds of manual hours reviewing PDF transcripts, certificates, and ID documents.',
        consequence: 'Admissions bottlenecks delay enrollment decisions by weeks, lowering matriculation yield.',
        severity: 'high',
      },
      {
        id: 'edu-c3',
        problem: 'Silent Student Dropout During Midterms',
        cause: 'Students fall behind on assignments unnoticed until failing final exams or dropping out.',
        consequence: 'Lower course completion rates and loss of tuition revenue from student withdrawals.',
        severity: 'moderate',
      },
    ],
    opportunities: [
      {
        problem: 'Admissions delays costing prospective student enrollment.',
        opportunity: '24/7 conversational student advisor providing instant syllabus and credential guidance.',
        potentialMultiplier: '4x faster inquiry response',
      },
      {
        problem: 'Manual document verification bottlenecks.',
        opportunity: 'Cognitive document parser that validates transcripts and prerequisites in seconds.',
        potentialMultiplier: '82% faster application processing',
      },
      {
        problem: 'Unnoticed student engagement drop-off.',
        opportunity: 'Continuous LMS telemetry alerting academic mentors to engagement anomalies early.',
        potentialMultiplier: '+22% course completion',
      },
    ],
    // 04 Aether Solutions (10 Specified Solutions for Education)
    solutionMappings: [
      {
        problem: 'Siloed Student Profiles & Fragmented Academic History',
        opportunity: 'Unified 360° student lifecycle profile',
        solution: 'Student Intelligence: Aggregates academic transcripts, career goals, learning style preferences, and prerequisite completions into a unified dossier.',
        capabilityTag: 'Student Dossier',
      },
      {
        problem: 'Inbound Inquiry Overload & Slow Initial Contact',
        opportunity: 'Intelligent lead prioritization & instant triage',
        solution: 'Admission Lead Intelligence: Ranks prospective student inquiries based on enrollment intent, credential readiness, and scholarship fit.',
        capabilityTag: 'Lead Prioritization',
      },
      {
        problem: 'Mismatched Student Goals & Ambiguous Inquiries',
        opportunity: 'Conversational requirement extraction engine',
        solution: 'Requirement Understanding: Analyzes candidate career goals, schedule constraints, and skill baselines through natural conversational triage.',
        capabilityTag: 'Goal Diagnosis',
      },
      {
        problem: 'Course Catalog Confusion & Inappropriate Electives',
        opportunity: 'AI curriculum matching & prerequisite mapping',
        solution: 'Course Matching: Recommends optimal degree programs, bootcamps, and elective specializations matching student career trajectories.',
        capabilityTag: 'Curriculum Match',
      },
      {
        problem: 'Delayed Outreach Causing Competitor Matriculation',
        opportunity: 'Multi-channel dynamic admissions sequences',
        solution: 'Follow-up Automation: Dispatches personalized syllabus previews, scholarship assessments, and orientation bookings via WhatsApp and email.',
        capabilityTag: 'Admissions Outreach',
      },
      {
        problem: 'Low Student Discussion Participation & Forum Inactivity',
        opportunity: 'Gamified engagement triggers & mentor prompts',
        solution: 'Engagement Intelligence: Monitors peer collaboration, lab completions, and forum queries to sustain active student participation.',
        capabilityTag: 'Engagement Engine',
      },
      {
        problem: 'Unnoticed Absenteeism & Missed Lecture Streaks',
        opportunity: 'Automated turnstile & virtual attendance tracking',
        solution: 'Attendance Intelligence: Detects recurring lecture absences and dispatches supportive catch-up recordings and peer notes.',
        capabilityTag: 'Attendance Sync',
      },
      {
        problem: 'Midterm Dropouts & Unaddressed Academic Struggle',
        opportunity: 'Early warning dropout risk detection',
        solution: 'Retention Intelligence: Identifies grade slips and assignment delays at Week 3, triggering faculty mentor office hour invitations.',
        capabilityTag: 'Retention Watchdog',
      },
      {
        problem: 'Manual Transcript Audits & Paper Enrollment Slips',
        opportunity: 'Cognitive transcript parsing & digital registration',
        solution: 'Administrative Automation: Extracts GPA, prerequisite credits, and transfer approvals in seconds, eliminating manual registrar bottlenecks.',
        capabilityTag: 'Registrar Auto',
      },
      {
        problem: 'Lack of Program Cohort Analytics & Yield Visibility',
        opportunity: 'Institutional executive telemetry dashboard',
        solution: 'Education Analytics: Delivers real-time telemetry on application-to-enrollment velocity, cohort completion rates, and alumni placement.',
        capabilityTag: 'Education Analytics',
      },
    ],
    workflowPipeline: {
      input: {
        source: 'Admissions Web Inquiry & Transcript Upload',
        details: 'Prospective student uploaded undergraduate transcript for Master of Data Science program.',
        rawSignal: 'Candidate: Maya Lin. Prerequisite: Needs Linear Algebra & Python validation.',
      },
      intelligence: {
        diagnosis: 'Prerequisites met with distinction (GPA: 3.82). High-intent candidate ready for fast-track enrollment.',
        metricScored: 'Admissions Compatibility: 98.2%',
      },
      recommendation: {
        actionProposed: 'Fast-track application approval; send personalized scholarship offer and schedule advisor orientation.',
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
      scenarioSubtitle: 'Simulate Aether parsing an uploaded transcript and issuing an acceptance package in minutes.',
      simulatedSignal: {
        Applicant: 'Maya Lin (Master of Data Science)',
        SubmittedDocuments: 'Official Transcript (PDF), Resume, Prerequisite Sheet',
        ProgramPrerequisites: 'Linear Algebra (B+), Python Fundamentals (Pass)',
      },
      engineReasoning: 'Prerequisites verified automatically. High-intent candidate fast-tracked for immediate enrollment.',
      automatedActions: [
        'Extracted academic course credits and verified grading criteria',
        'Validated prerequisite syllabus match against program guidelines',
        'Generated personalized admission offer and scholarship calculation',
        'Sent digital enrollment package with one-tap signature',
      ],
      verifiedOutcome: 'Application processed and enrolled in 12 minutes vs industry average of 6 days.',
      executionDuration: '12 minutes',
    },
    businessIntelligence: {
      insights: 'Students who receive admissions acceptance within 24 hours are 3.2x more likely to enroll.',
      predictions: 'Spring term cybersecurity program enrollment projected to exceed target cap by 28%.',
      risks: 'Week 4 drop-off risk flagged for students spending less than 3 hours on initial lab assignments.',
      opportunities: 'Automating certificate graduation credentials can increase alumni referral rates by 18%.',
      recommendations: 'Expand cybersecurity cohort capacity and trigger academic mentor check-ins at Week 3.',
    },
    businessImpact: {
      time: 'Saves admissions officers 15 hours per week in manual transcript reviews and prerequisite email queries.',
      efficiency: 'Accelerates application-to-enrollment turnaround by 4x, securing top student talent before competitors.',
      customerExperience: 'Prospective students receive instant, transparent answers to tuition, schedule, and career queries.',
      operations: 'Centralizes student documents, financial aid paperwork, and orientation scheduling in one workflow.',
      decisionMaking: 'Provides academic deans with accurate enrollment yield forecasts and retention risk metrics.',
      visibility: 'Live telemetry displaying applicant pipeline velocity, LMS engagement indexes, and graduation tracking.',
    },
    additionalCapabilities: [
      {
        groupTitle: 'LMS & Student Information System Connectors',
        summary: 'Direct integration with Canvas, Blackboard, Moodle, and Banner.',
        features: ['Gradebook sync', 'LMS login activity monitoring', 'Automated course enrollment roster updates'],
      },
      {
        groupTitle: 'Financial Aid & Tuition Workflow Mesh',
        summary: 'Automates payment plan setups, scholarship disbursement, and invoice reminders.',
        features: ['FAFSA document tracking', 'Automated tuition payment schedules', 'Scholarship eligibility matching'],
      },
      {
        groupTitle: 'Career Placement & Alumni Network Engine',
        summary: 'Matches graduating students with employer job requisitions.',
        features: ['Automated resume formatting', 'Employer interview scheduling', 'Alumni mentoring connections'],
      },
    ],
  },
];
