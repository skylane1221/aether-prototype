export interface SolutionItemDetail {
  id: string;
  name: string;
  category: 'AI Intelligence' | 'Customer Intelligence' | 'Workflow Automation' | 'Business Intelligence' | 'Communication Intelligence';
  tagline: string;
  whatItDoes: string;
  problemsItSolves: string[];
  applicableIndustries: string[];
  keyCapabilities: string[];
  impactMetric: string;
}

export const PLATFORM_SOLUTION_CATEGORIES: {
  id: string;
  category: 'AI Intelligence' | 'Customer Intelligence' | 'Workflow Automation' | 'Business Intelligence' | 'Communication Intelligence';
  description: string;
  iconName: string;
  solutions: SolutionItemDetail[];
}[] = [
  {
    id: 'ai-intelligence',
    category: 'AI Intelligence',
    description: 'Cognitive diagnostic models that predict demand, classify operational signals, and guide strategic decisions in real time.',
    iconName: 'BrainCircuit',
    solutions: [
      {
        id: 'prediction',
        name: 'Prediction Engine',
        category: 'AI Intelligence',
        tagline: 'Anticipate equipment failures, customer drop-off risks, and demand surges before they manifest.',
        whatItDoes: 'Ingests multi-source time-series telemetry (mileage, turnstile check-ins, dining covers, weather) to compute precise future outcomes with high probabilistic confidence.',
        problemsItSolves: [
          'Unanticipated mechanical failures and emergency vehicle breakdowns.',
          'Sudden kitchen prep shortages during unpredicted rainstorms.',
          'Silent gym member inactivity turning into permanent cancellations.',
        ],
        applicableIndustries: [
          'Automotive / Car Service',
          'Restaurants & Food Businesses',
          'Gyms & Fitness Centers',
          'Healthcare & Clinics',
          'Hotels & Hospitality',
        ],
        keyCapabilities: [
          'Multi-variable time-series forecasting',
          'Component wear degradation modeling',
          'Early-warning churn vulnerability scoring',
          'Weather and event demand correlation',
        ],
        impactMetric: '94% prediction accuracy for 14-day operational horizons',
      },
      {
        id: 'recommendation',
        name: 'Recommendation System',
        category: 'AI Intelligence',
        tagline: 'Contextual, high-margin next-best-actions tailored to each customer and operational state.',
        whatItDoes: 'Analyzes client dossiers, historical ticket yields, and current inventory to generate optimal service add-ons, course matches, and property recommendations.',
        problemsItSolves: [
          'Stylists missing high-margin conditioning and gloss add-on opportunities.',
          'Prospective students overwhelmed by confusing degree course catalogs.',
          'Real estate buyers receiving irrelevant property listings.',
        ],
        applicableIndustries: [
          'Salons & Beauty Businesses',
          'Education & Training Centers',
          'Real Estate',
          'Retail Businesses',
          'Cafes & Quick-Serve',
        ],
        keyCapabilities: [
          'Collaborative preference filtering',
          'Curriculum-to-career trajectory alignment',
          'Property feature semantic matching',
          'Dynamic upsell attachment triggers',
        ],
        impactMetric: '+28% higher average transaction value',
      },
      {
        id: 'classification',
        name: 'Classification Engine',
        category: 'AI Intelligence',
        tagline: 'Autonomous intent recognition, priority triage, and clinical urgency sorting.',
        whatItDoes: 'Parses unstructured text, voice notes, and uploaded PDF documents to classify intent urgency, customer tiering, and clinical pre-requisite eligibility.',
        problemsItSolves: [
          'High-intent real estate buyers waiting days for an agent callback.',
          'Manual sorting of thousands of student admissions transcripts.',
          'Unranked clinic waiting room appointment queues.',
        ],
        applicableIndustries: [
          'Real Estate',
          'Education & Training Centers',
          'Healthcare & Clinics',
          'Retail Businesses',
        ],
        keyCapabilities: [
          'NLP intent extraction & qualification',
          'OCR transcript and document parsing',
          'Clinical triage urgency scoring',
          'Customer tier categorization',
        ],
        impactMetric: '< 45 seconds inquiry triage latency',
      },
      {
        id: 'decision-support',
        name: 'Decision Support System',
        category: 'AI Intelligence',
        tagline: 'Synthesize complex multi-variable trade-offs to guide management actions.',
        whatItDoes: 'Evaluates simultaneous constraints (technician certifications, lift bay types, perishable food batch times) to recommend mathematically optimal operational choices.',
        problemsItSolves: [
          'Overbooking heavy mechanical jobs into quick-lube bays.',
          'Mismatched housekeeping cleaning priorities before VIP flight arrivals.',
          'Unbalanced table turnover times in peak dining rush.',
        ],
        applicableIndustries: [
          'Automotive / Car Service',
          'Hotels & Hospitality',
          'Restaurants & Food Businesses',
          'Healthcare & Clinics',
        ],
        keyCapabilities: [
          'Multi-constraint linear optimization',
          'Dynamic capacity load balancing',
          'Human-in-the-loop executive override gates',
          'Risk mitigation pathway modeling',
        ],
        impactMetric: 'Eliminates 92% of operational scheduling conflicts',
      },
    ],
  },
  {
    id: 'customer-intelligence',
    category: 'Customer Intelligence',
    description: 'Transform raw customer touchpoints into living, predictive client profiles that nurture loyalty and expand lifetime value.',
    iconName: 'Users',
    solutions: [
      {
        id: 'segmentation',
        name: 'Dynamic Customer Segmentation',
        category: 'Customer Intelligence',
        tagline: 'Continuous behavioral cohort clustering that evolves with customer actions.',
        whatItDoes: 'Automatically clusters customers based on real-time visit frequency, spend velocity, service preferences, and engagement responsiveness.',
        problemsItSolves: [
          'Sending generic mass emails that alienate VIP power guests.',
          'Failing to identify fast-growing corporate fleet accounts.',
          'Treating first-time diners identically to high-spend regular patrons.',
        ],
        applicableIndustries: [
          'Gyms & Fitness Centers',
          'Salons & Beauty Businesses',
          'Restaurants & Food Businesses',
          'Hotels & Hospitality',
        ],
        keyCapabilities: [
          'Recency-Frequency-Monetary (RFM) clustering',
          'Multi-attribute behavioral tagging',
          'Lifecycle transition alert triggers',
          'Corporate vs individual account separation',
        ],
        impactMetric: '3.4x higher campaign conversion vs static lists',
      },
      {
        id: 'preference-detection',
        name: 'Preference & Formula Detection',
        category: 'Customer Intelligence',
        tagline: 'Zero-friction memory of client formulas, dietary needs, and comfort notes.',
        whatItDoes: 'Captures and indexes client specifications—from balayage gloss ratios and beverage preferences to food allergies and room climate preferences.',
        problemsItSolves: [
          'Stylists re-asking color formulas due to lost paper client index cards.',
          'Hospitality guests frustrated by unrecorded dietary restrictions.',
          'Gym members receiving irrelevant class recommendations.',
        ],
        applicableIndustries: [
          'Salons & Beauty Businesses',
          'Restaurants & Food Businesses',
          'Hotels & Hospitality',
          'Healthcare & Clinics',
        ],
        keyCapabilities: [
          'Digital formula & shade archival',
          'Allergen safety prompt enforcement',
          'Room climate and comfort pre-staging',
          'Workstation mirror tablet sync',
        ],
        impactMetric: '100% preference continuity across multi-outlet staff',
      },
      {
        id: 'lead-scoring',
        name: 'Lead Scoring & Intent Engine',
        category: 'Customer Intelligence',
        tagline: 'Real-time prospective buyer prioritization based on conversion velocity.',
        whatItDoes: 'Scores incoming buyer and student inquiries (0–100%) by analyzing timeline urgency, budget qualifications, and engagement signals.',
        problemsItSolves: [
          'Sales reps wasting time on tire-kickers while high-intent buyers go cold.',
          'Admissions officers overwhelmed during peak application deadlines.',
          'Unranked real estate inbound portal leads.',
        ],
        applicableIndustries: [
          'Real Estate',
          'Education & Training Centers',
          'Automotive / Car Service',
          'Hotels & Hospitality',
        ],
        keyCapabilities: [
          'Real-time lead qualification matrix',
          'Budget & financial pre-qualification scoring',
          'Immediate routing to top closers',
          'Automated fallback nurture sequences',
        ],
        impactMetric: '4x faster inquiry-to-deal conversion speed',
      },
      {
        id: 'retention-intelligence',
        name: 'Retention Intelligence & Churn Watchdog',
        category: 'Customer Intelligence',
        tagline: 'Detect silent habit breaks and intervene weeks before cancellation.',
        whatItDoes: 'Tracks individual attendance curves and purchase cycles, triggering automated revival protocols the moment cadence deviates from baseline.',
        problemsItSolves: [
          'Gym members dropping from 4 visits/week to 0 without staff noticing.',
          'Salon clients delaying rebooking from 4 weeks to 10+ weeks.',
          'Students falling behind on assignments and dropping out at midterms.',
        ],
        applicableIndustries: [
          'Gyms & Fitness Centers',
          'Salons & Beauty Businesses',
          'Education & Training Centers',
          'Automotive / Car Service',
        ],
        keyCapabilities: [
          'Habit decay curve trajectory modeling',
          'Automated VIP revival perks dispatch',
          'LMS student retention monitoring',
          'Pre-cancellation sentiment analysis',
        ],
        impactMetric: 'Intercepts 42% of silent customer drop-offs',
      },
    ],
  },
  {
    id: 'workflow-automation',
    category: 'Workflow Automation',
    description: 'Replace manual coordination drag with self-executing operational pipelines that balance capacity, schedule assets, and automate paperwork.',
    iconName: 'Workflow',
    solutions: [
      {
        id: 'scheduling-automation',
        name: 'Intelligent Scheduling & Capacity Balancing',
        category: 'Workflow Automation',
        tagline: 'Maximize asset yield across chairs, bays, rooms, and provider schedules.',
        whatItDoes: 'Dynamically packs and optimizes appointment slots, eliminating dead valleys and matching equipment constraints with staff certifications.',
        problemsItSolves: [
          'Unbalanced salon chairs with dead 30-min gaps between chemical treatments.',
          'Automotive lift bays blocked by cars waiting for master technicians.',
          'Outpatient clinic delays from unrealistic 15-minute appointment blocks.',
        ],
        applicableIndustries: [
          'Salons & Beauty Businesses',
          'Automotive / Car Service',
          'Healthcare & Clinics',
          'Hotels & Hospitality',
        ],
        keyCapabilities: [
          'Dynamic slot packing algorithm',
          'Technician certification skill routing',
          'Multi-room & equipment allocation',
          'Autonomous waitlist standby fill',
        ],
        impactMetric: '+24% higher asset and capacity utilization',
      },
      {
        id: 'followups-automation',
        name: 'Automated Multi-Touch Follow-Ups',
        category: 'Workflow Automation',
        tagline: 'Precision-timed rebooking and check-in sequences that never drop a lead.',
        whatItDoes: 'Calculates the exact biological or mechanical cycle for re-engagement, automatically triggering personalized outreach at the optimal moment.',
        problemsItSolves: [
          'Real estate agents forgetting to follow up after weekend site visits.',
          'Dealerships losing touch when vehicles cross 30k/60k/90k mileage points.',
          'Clinic patients missing essential 30-day post-consultation reviews.',
        ],
        applicableIndustries: [
          'Real Estate',
          'Automotive / Car Service',
          'Healthcare & Clinics',
          'Education & Training Centers',
        ],
        keyCapabilities: [
          'Cycle-calculated outreach scheduling',
          'Multi-channel WhatsApp/SMS delivery',
          '1-tap appointment confirmation links',
          'Feedback & review ingestion loop',
        ],
        impactMetric: '84% automated rebooking capture rate',
      },
      {
        id: 'notifications-engine',
        name: 'Context-Aware Notifications & Alerts',
        category: 'Workflow Automation',
        tagline: 'Hyper-personalized transactional briefings with mandatory confirmation gates.',
        whatItDoes: 'Dispatches interactive pre-arrival briefings, fasting checklists, digital gate passes, and ready-for-pickup notifications.',
        problemsItSolves: [
          'Day-of clinical procedure cancellations from missed fasting prep.',
          'Retail customers flooding support lines with "Where is my order?" tickets.',
          'Hotel guests waiting in 20-minute lobby check-in lines.',
        ],
        applicableIndustries: [
          'Healthcare & Clinics',
          'Hotels & Hospitality',
          'Retail Businesses',
          'Cafes & Quick-Serve',
        ],
        keyCapabilities: [
          'Mandatory 1-tap confirmation checkpoints',
          'Pre-procedure digital checklist enforcement',
          'Digital mobile room key and gate pass delivery',
          'Real-time order ready-board updates',
        ],
        impactMetric: '-72% reduction in operational no-shows & late cancellations',
      },
      {
        id: 'administrative-automation',
        name: 'Administrative Workflow Automation',
        category: 'Workflow Automation',
        tagline: 'Eliminate manual paperwork, clipboard queues, and data transcription.',
        whatItDoes: 'Ingests digital forms, parses transcripts, validates insurance pre-authorizations, and structures notes directly into core ERP/EHR/SIS software.',
        problemsItSolves: [
          'Physicians spending 2+ hours daily on manual charting paperwork.',
          'Admissions staff manually reviewing paper graduation certificates.',
          'Front desk receptionists typing hand-written paper clipboards.',
        ],
        applicableIndustries: [
          'Healthcare & Clinics',
          'Education & Training Centers',
          'Real Estate',
          'Automotive / Car Service',
        ],
        keyCapabilities: [
          'Structured EHR / SIS / DMS note export',
          'Cognitive document OCR validation',
          'Insurance pre-auth verification mesh',
          'Automated ledger and billing reconciliation',
        ],
        impactMetric: 'Saves 12–15 administrative hours per staff member weekly',
      },
    ],
  },
  {
    id: 'business-intelligence',
    category: 'Business Intelligence',
    description: 'Transform reactive historical spreadsheets into real-time operational telemetry and forward-looking simulations.',
    iconName: 'TrendingUp',
    solutions: [
      {
        id: 'operational-analytics',
        name: 'Operational Telemetry & Performance Analytics',
        category: 'Business Intelligence',
        tagline: 'Real-time visibility into throughput velocity, bottlenecks, and staff productivity.',
        whatItDoes: 'Aggregates multi-location telemetry into live executive dashboards tracking table turns, bay yields, ticket times, and staff efficiency.',
        problemsItSolves: [
          'Multi-outlet restaurant executives blind to food cost variance.',
          'Salon owners unaware of uneven stylist chair occupancy.',
          'Gym operators unable to measure cohort retention decay across locations.',
        ],
        applicableIndustries: [
          'Restaurants & Food Businesses',
          'Salons & Beauty Businesses',
          'Gyms & Fitness Centers',
          'Automotive / Car Service',
        ],
        keyCapabilities: [
          'Multi-outlet executive benchmark matrix',
          'Real-time flag-hour and ticket velocity',
          'Cohort decay and lifetime value tracking',
          'Idle asset revenue leak quantification',
        ],
        impactMetric: '100% transparent operational visibility across all branches',
      },
      {
        id: 'demand-forecasting',
        name: 'Demand & Surge Forecasting',
        category: 'Business Intelligence',
        tagline: 'Anticipate daily covers, raw material burn, and staffing loads.',
        whatItDoes: 'Correlates internal sales history with external weather, traffic, and local event signals to project hourly demand curves.',
        problemsItSolves: [
          'Kitchens throwing away 15% of prepared food on rainy days.',
          'Cafes understaffed during sudden transit commuter surges.',
          'Retail stockouts during sudden cold weather fronts.',
        ],
        applicableIndustries: [
          'Restaurants & Food Businesses',
          'Cafes & Quick-Serve',
          'Retail Businesses',
          'Hotels & Hospitality',
        ],
        keyCapabilities: [
          'Hourly day-part cover projections',
          'Weather & commuter foot-traffic ingestion',
          'Staged batch prep timing recommendations',
          'Perishable inventory consumption modeling',
        ],
        impactMetric: '-68% reduction in commercial kitchen food waste',
      },
      {
        id: 'operational-intelligence',
        name: 'Operational Bottleneck Intelligence',
        category: 'Business Intelligence',
        tagline: 'Diagnose the hidden root causes slowing down your business.',
        whatItDoes: 'Traces operational flow anomalies across stations, identifying whether delays stem from prep pacing, supplier stockouts, or staff scheduling.',
        problemsItSolves: [
          'Kitchen hot-lines backed up while expo stations wait idle.',
          'Dealership service advisors overbooking morning intake slots.',
          'Clinic patients waiting 45+ minutes in exam rooms.',
        ],
        applicableIndustries: [
          'Restaurants & Food Businesses',
          'Automotive / Car Service',
          'Healthcare & Clinics',
          'Cafes & Quick-Serve',
        ],
        keyCapabilities: [
          'Station-by-station throughput timing',
          'Cascade delay root-cause diagnosis',
          'Supplier delivery variance scoring',
          'Floor congestion heatmapping',
        ],
        impactMetric: '50% reduction in average customer wait times',
      },
      {
        id: 'performance-intelligence',
        name: 'Performance & Revenue Yield Intelligence',
        category: 'Business Intelligence',
        tagline: 'Maximize realized margins and recurring revenue yield across every square foot.',
        whatItDoes: 'Simulates dynamic yield strategies—filling dead afternoon salon chairs, recovering abandoned retail carts, and pacing hotel late checkouts.',
        problemsItSolves: [
          'Dead midday gaps leaving salon and spa revenue uncaptured.',
          'Unsold seasonal inventory requiring 50% clearance discounts.',
          'Empty hotel cabanas and spa appointment slots on weekdays.',
        ],
        applicableIndustries: [
          'Salons & Beauty Businesses',
          'Retail Businesses',
          'Hotels & Hospitality',
          'Gyms & Fitness Centers',
        ],
        keyCapabilities: [
          'Dynamic off-peak yield stimulation',
          'Cart abandonment ship-from-store routing',
          'Ancillary guest spend optimization',
          'Contract renewal pricing models',
        ],
        impactMetric: '+$140k average annual incremental revenue per location',
      },
    ],
  },
  {
    id: 'communication-intelligence',
    category: 'Communication Intelligence',
    description: 'Deliver natural, context-aware conversations across WhatsApp, SMS, and email that feel like high-touch personal concierge service.',
    iconName: 'MessageSquare',
    solutions: [
      {
        id: 'context-aware-comm',
        name: 'Context-Aware Communication Engine',
        category: 'Communication Intelligence',
        tagline: 'Conversations powered by deep customer and operational history.',
        whatItDoes: 'Generates tailored messages that reference exact vehicle mileage, past hair colors, dietary allergies, and prospective student goals.',
        problemsItSolves: [
          'Sending robotic, tone-deaf automated templates that customers ignore.',
          'Staff spending hours manually drafting individual client messages.',
          'Inaccurate information given to customers during phone inquiries.',
        ],
        applicableIndustries: [
          'Real Estate',
          'Salons & Beauty Businesses',
          'Automotive / Car Service',
          'Education & Training Centers',
        ],
        keyCapabilities: [
          'Deep profile context insertion',
          'Natural human tone calibration',
          'Multilingual message drafting',
          'Channel-optimized formatting (WhatsApp / SMS / Email)',
        ],
        impactMetric: '78% customer response rate within 15 minutes',
      },
      {
        id: 'engagement-engine',
        name: 'Interactive Engagement & Confirmation Mesh',
        category: 'Communication Intelligence',
        tagline: 'Convert passive notifications into 1-tap actionable agreements.',
        whatItDoes: 'Embeds dynamic one-tap confirmation buttons, reschedule selectors, and pre-visit check-in passes directly inside messaging streams.',
        problemsItSolves: [
          'Customers having to make phone calls just to confirm or reschedule.',
          'Unconfirmed high-value appointments leaving providers vulnerable.',
          'Friction in approving multi-point automotive repair quotes.',
        ],
        applicableIndustries: [
          'Healthcare & Clinics',
          'Automotive / Car Service',
          'Salons & Beauty Businesses',
          'Education & Training Centers',
        ],
        keyCapabilities: [
          '1-tap WhatsApp interactive message buttons',
          'Instant smart reschedule slot swaps',
          'Mobile video inspection approvals',
          'Digital intake signature capture',
        ],
        impactMetric: '92% digital confirmation compliance',
      },
      {
        id: 'followup-assistance',
        name: 'Follow-Up Assistance & Concierge Copilot',
        category: 'Communication Intelligence',
        tagline: 'Empower front-line staff with pre-drafted intelligent responses.',
        whatItDoes: 'Equips service advisors, receptionists, and admissions officers with suggested responses, appointment windows, and objection handling.',
        problemsItSolves: [
          'Junior staff making scheduling errors or providing incorrect pricing.',
          'Slow advisor response times during peak inquiry surges.',
          'Inconsistent brand communication across different staff shifts.',
        ],
        applicableIndustries: [
          'Real Estate',
          'Education & Training Centers',
          'Hotels & Hospitality',
          'Healthcare & Clinics',
        ],
        keyCapabilities: [
          'Real-time advisor copilot suggestions',
          'Instant syllabus and pricing cross-referencing',
          'Objection handling scripts',
          'One-click advisor dispatch approval',
        ],
        impactMetric: '3x staff inquiry handling capacity without headcount increase',
      },
    ],
  },
];

export const PLATFORM_SOLUTIONS: Array<{
  id: string;
  title: string;
  tagline: string;
  category:
    | 'AI Intelligence'
    | 'Workflow Automation'
    | 'Customer Intelligence'
    | 'Business Intelligence'
    | 'Communication Intelligence';
  description: string;
  capabilities: string[];
  technicalPillars: {
    name: string;
    description: string;
  }[];
  metricsImpact: string;
}> = [
  {
    id: 'ai-intelligence',
    title: 'AI Intelligence Suite',
    tagline: 'Predictive modeling, contextual recommendation, and real-time decisioning.',
    category: 'AI Intelligence',
    description: 'Autonomous cognitive kernels that ingest real-time telemetry, historical trends, and multi-factor constraints to anticipate outcomes before friction occurs.',
    capabilities: [
      'Multi-variable time-series forecasting & demand sensing',
      'Context-aware ranking and next-best-action recommendation engines',
      'Multi-modal signal classification & natural language intent extraction',
      'Dynamic decision trees with human-in-the-loop escalation guardrails',
    ],
    technicalPillars: [
      { name: 'Probabilistic Inference', description: 'Real-time multi-factor prediction models.' },
      { name: 'Latency SLA < 45ms', description: 'Edge-optimized inference execution.' },
    ],
    metricsImpact: '94% prediction accuracy across operational horizons',
  },
  {
    id: 'customer-intelligence',
    title: 'Customer Intelligence Engine',
    tagline: 'Dynamic segmentation, preference extraction, and churn risk scoring.',
    category: 'Customer Intelligence',
    description: 'Transform customer interactions into unified longitudinal profiles. Continuously detects subtle shifts in affinity, price sensitivity, and drop-off risks.',
    capabilities: [
      'Multi-dimensional behavioral segmentation (RFM + engagement cadence)',
      'Unstructured preference parsing from chat, notes, and booking logs',
      'Machine learning lead scoring with urgency & budget qualification',
      'Predictive churn vulnerability radar with automated rescue triggers',
    ],
    technicalPillars: [
      { name: 'Real-Time Graph Profiling', description: 'Dynamic preference synthesis.' },
      { name: 'Micro-Affinity Clustering', description: 'Continuous cohort auto-discovery.' },
    ],
    metricsImpact: '68% churn reduction & +38% lead-to-showing conversion',
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation Mesh',
    tagline: 'Self-healing scheduling, adaptive follow-ups, and admin orchestration.',
    category: 'Workflow Automation',
    description: 'Connect fragmented operational silos into closed-loop execution pipelines. Eliminates manual coordination across calendar, CRM, POS, and messaging.',
    capabilities: [
      'Dynamic gap-filling smart scheduling with double-booking prevention',
      'Behavior-triggered multi-channel follow-up sequences (WhatsApp/SMS/Email)',
      'Threshold-based contextual smart alerts for management & floor staff',
      'Automated administrative document routing, intake processing, and billing sync',
    ],
    technicalPillars: [
      { name: 'Distributed Event Bus', description: 'Zero-drop queue architecture.' },
      { name: 'Idempotent Sync', description: 'Guaranteed single-execution safety.' },
    ],
    metricsImpact: '18.5 hours saved weekly per operational lead',
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence & Telemetry',
    tagline: 'Continuous operational monitoring, yield analytics, and margin tracking.',
    category: 'Business Intelligence',
    description: 'Consolidate cross-department data streams into actionable diagnostic dashboards and prescriptive executive recommendations.',
    capabilities: [
      'Real-time operational bottleneck detection & staff utilization heatmaps',
      'Item-level and service-level gross margin & contribution analysis',
      'Dynamic inventory safety stock calculation & automated replenishment triggers',
      'Multi-unit performance benchmarking with root-cause variance attribution',
    ],
    technicalPillars: [
      { name: 'Continuous Aggregation', description: 'Sub-second metrics rollup.' },
      { name: 'Prescriptive Diagnostics', description: 'Actionable root-cause reporting.' },
    ],
    metricsImpact: '+24% average gross margin through waste reduction',
  },
  {
    id: 'communication-intelligence',
    title: 'Communication Intelligence Copilot',
    tagline: 'Context-aware messaging, AI re-engagement, and concierge assistance.',
    category: 'Communication Intelligence',
    description: 'Elevate every customer touchpoint with intelligent, brand-aligned messaging and co-pilot drafts tailored to each customer context.',
    capabilities: [
      'Context-aware tone and timing optimization across WhatsApp, SMS, and Email',
      'Interactive 1-tap booking confirmations, reschedule swaps, and video approvals',
      'Smart concierge co-pilot drafting suggested responses for front-line teams',
      'Automated sentiment monitoring with proactive escalation to senior staff',
    ],
    technicalPillars: [
      { name: 'Contextual Prompt Synthesizer', description: 'Domain-specific conversation agents.' },
      { name: 'Brand-Tone Guardrails', description: 'Zero-hallucination compliance checking.' },
    ],
    metricsImpact: '3x staff handling capacity with 92% confirmation compliance',
  },
];

