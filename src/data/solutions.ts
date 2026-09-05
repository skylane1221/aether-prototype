import { PlatformSolution } from '../types';

export interface ApplicableIndustry {
  name: string;
  slug: string;
  buttonLabel: string;
  useCase: string;
}

export interface SolutionItemDetail {
  id: string;
  name: string;
  category:
    | 'AI Intelligence'
    | 'Customer Intelligence'
    | 'Operational Intelligence'
    | 'Workflow Automation'
    | 'Business Intelligence'
    | 'Communication Intelligence';
  tagline: string;
  whatItDoes: string;
  problemItAddresses: string;
  problemsItSolves: string[];
  applicableIndustries: ApplicableIndustry[];
  exampleApplication: {
    scenario: string;
    action: string;
    outcome: string;
  };
  keyCapabilities: string[];
  impactMetric: string;
}

export interface PlatformSolutionCategory {
  id: string;
  category:
    | 'AI Intelligence'
    | 'Customer Intelligence'
    | 'Operational Intelligence'
    | 'Workflow Automation'
    | 'Business Intelligence'
    | 'Communication Intelligence';
  description: string;
  iconName: string;
  solutions: SolutionItemDetail[];
}

export const PLATFORM_SOLUTION_CATEGORIES: PlatformSolutionCategory[] = [
  {
    id: 'ai-intelligence',
    category: 'AI Intelligence',
    description:
      'Cognitive diagnostic and predictive models that forecast demand surges, classify multi-modal signals, and guide high-stakes decisions.',
    iconName: 'BrainCircuit',
    solutions: [
      {
        id: 'prediction-engine',
        name: 'Prediction Engine',
        category: 'AI Intelligence',
        tagline:
          'Anticipate equipment failures, customer drop-off risks, and demand surges before they manifest.',
        whatItDoes:
          'Ingests multi-source time-series telemetry (vehicle mileage, turnstile check-ins, dining covers, weather forecasts) to compute precise future outcomes with high probabilistic confidence.',
        problemItAddresses:
          'Unanticipated equipment breakdowns, sudden dining rushes causing kitchen chaos, and silent customer churn.',
        problemsItSolves: [
          'Catastrophic vehicle breakdowns and emergency component failures.',
          'Sudden kitchen prep shortages during unpredicted weather shifts.',
          'Silent gym member habit breaks turning into permanent cancellations.',
          'Clinic appointment no-shows leaving expensive physician time unutilized.',
        ],
        applicableIndustries: [
          {
            name: 'Automotive',
            slug: 'automotive',
            buttonLabel: 'Explore Automotive',
            useCase: 'Predicts component wear and mileage-based maintenance requirements.',
          },
          {
            name: 'Restaurants',
            slug: 'restaurants',
            buttonLabel: 'Explore Restaurants',
            useCase: 'Forecasts rush-hour covers and rainy-day prep adjustments.',
          },
          {
            name: 'Gyms',
            slug: 'gyms',
            buttonLabel: 'Explore Gyms',
            useCase: 'Detects early attendance decay to predict churn 30 days ahead.',
          },
          {
            name: 'Healthcare',
            slug: 'healthcare',
            buttonLabel: 'Explore Healthcare',
            useCase: 'Predicts appointment no-show probabilities before daily clinics.',
          },
          {
            name: 'Hotels',
            slug: 'hotels',
            buttonLabel: 'Explore Hotels',
            useCase: 'Forecasts occupancy fluctuations and cancellation risks.',
          },
        ],
        exampleApplication: {
          scenario:
            'In an automotive service workshop, a vehicle logs 45,000 km with heavy urban stop-and-go driving telemetry.',
          action:
            'Aether detects accelerated brake wear patterns and calculates replacement necessity within 14 days.',
          outcome:
            'Proactively triggers a pre-approved brake service quote, avoiding roadside failure and capturing high-margin repair work.',
        },
        keyCapabilities: [
          'Multi-variable time-series forecasting',
          'Component wear degradation modeling',
          'Early-warning churn vulnerability scoring',
          'Weather & local event demand correlation',
        ],
        impactMetric: 'Illustrative: Up to 94% precision in modeled forecasts',
      },
      {
        id: 'recommendation-system',
        name: 'Recommendation System',
        category: 'AI Intelligence',
        tagline:
          'Contextual, high-margin next-best-actions tailored to each customer and operational state.',
        whatItDoes:
          'Analyzes client dossiers, historical ticket yields, and current inventory to generate optimal service add-ons, course matches, and property recommendations.',
        problemItAddresses:
          'Staff missing high-margin upsell opportunities and clients receiving irrelevant, generic product suggestions.',
        problemsItSolves: [
          'Stylists missing high-margin conditioning and gloss add-on opportunities.',
          'Prospective students overwhelmed by complex, multi-track course catalogs.',
          'Real estate buyers receiving generic, mismatched property listings.',
          'Retail shoppers abandoning carts due to poor complementary product recommendations.',
        ],
        applicableIndustries: [
          {
            name: 'Salons',
            slug: 'salons',
            buttonLabel: 'Explore Salons',
            useCase: 'Recommends hair gloss treatments based on past chemical service history.',
          },
          {
            name: 'Education',
            slug: 'education',
            buttonLabel: 'Explore Education',
            useCase: 'Matches prospective students to career-aligned diploma programs.',
          },
          {
            name: 'Real Estate',
            slug: 'real-estate',
            buttonLabel: 'Explore Real Estate',
            useCase: 'Semantic property matching against buyer budget and lifestyle criteria.',
          },
          {
            name: 'Retail',
            slug: 'retail',
            buttonLabel: 'Explore Retail',
            useCase: 'Recommends high-margin accessory bundles based on purchase velocity.',
          },
        ],
        exampleApplication: {
          scenario:
            'A salon client with color-treated hair books a routine blowout 8 weeks after their last balayage.',
          action:
            'Aether analyzes color porosity records and surfaces a "Deep Hydration Gloss Treatment" prompt directly to the stylist’s tablet.',
          outcome:
            'Stylist recommends the treatment in-chair with 1 tap, lifting average ticket yield by +32%.',
        },
        keyCapabilities: [
          'Collaborative preference filtering',
          'Curriculum-to-career trajectory alignment',
          'Property feature semantic matching',
          'Dynamic upsell attachment triggers',
        ],
        impactMetric: 'Potential Impact: Up to +28% higher ticket value in example tests',
      },
      {
        id: 'classification-engine',
        name: 'Classification Engine & Intent Triage',
        category: 'AI Intelligence',
        tagline: 'Autonomous intent recognition, priority triage, and clinical urgency sorting.',
        whatItDoes:
          'Parses unstructured text, voice notes, and uploaded PDF documents to classify intent urgency, customer tiering, and clinical pre-requisite eligibility.',
        problemItAddresses:
          'High-intent leads sitting uncontacted in portal inboxes while staff manually read and route basic questionnaires.',
        problemsItSolves: [
          'High-intent real estate buyers waiting days for an agent callback.',
          'Manual sorting of thousands of student admissions transcripts.',
          'Unranked clinic waiting room appointment queues.',
          'Unstructured vehicle repair intake descriptions causing diagnostic delays.',
        ],
        applicableIndustries: [
          {
            name: 'Real Estate',
            slug: 'real-estate',
            buttonLabel: 'Explore Real Estate',
            useCase:
              'Extracts property type, budget, configuration, and possession timeline from buyer chats.',
          },
          {
            name: 'Education',
            slug: 'education',
            buttonLabel: 'Explore Education',
            useCase: 'Classifies applicant transcripts and prerequisite eligibility automatically.',
          },
          {
            name: 'Healthcare',
            slug: 'healthcare',
            buttonLabel: 'Explore Healthcare',
            useCase: 'Triages patient intake symptoms and operational urgency levels.',
          },
          {
            name: 'Automotive',
            slug: 'automotive',
            buttonLabel: 'Explore Automotive',
            useCase:
              'Classifies breakdown symptoms from customer voice notes into diagnostic repair codes.',
          },
        ],
        exampleApplication: {
          scenario:
            'An inbound portal inquiry arrives stating: "Looking for 3BHK ready to move in Whitefield under 1.5 Cr with 2 covered parkings."',
          action:
            'Aether instantly extracts 7 structured parameters, computes a 94% buyer intent score, and matches 3 live inventory units.',
          outcome:
            'Routes the qualified dossier to the senior territory broker within 15 seconds, securing an immediate weekend site visit.',
        },
        keyCapabilities: [
          'NLP intent extraction & qualification',
          'OCR transcript and document parsing',
          'Clinical triage urgency scoring',
          'Customer tier categorization',
        ],
        impactMetric: 'Simulated Target: < 15s inquiry qualification & routing latency',
      },
      {
        id: 'decision-support',
        name: 'Decision Support System',
        category: 'AI Intelligence',
        tagline: 'Synthesize complex multi-variable trade-offs to guide operational decisions.',
        whatItDoes:
          'Evaluates simultaneous constraints (technician certifications, lift bay types, perishable food batch times, flight arrival times) to recommend mathematically optimal operational choices.',
        problemItAddresses:
          'Suboptimal management decisions that create bottleneck cascades, room turnover delays, and technician scheduling conflicts.',
        problemsItSolves: [
          'Overbooking heavy mechanical jobs into quick-lube bays.',
          'Mismatched housekeeping cleaning priorities before VIP flight arrivals.',
          'Unbalanced table turnover times during peak dining rush.',
          'Mismatched clinical room assignments delaying specialist consultations.',
        ],
        applicableIndustries: [
          {
            name: 'Hotels',
            slug: 'hotels',
            buttonLabel: 'Explore Hotels',
            useCase: 'Optimizes housekeeping room turnover order based on VIP arrival times.',
          },
          {
            name: 'Automotive',
            slug: 'automotive',
            buttonLabel: 'Explore Automotive',
            useCase: 'Allocates heavy engine diagnostic jobs exclusively to Master Technicians.',
          },
          {
            name: 'Restaurants',
            slug: 'restaurants',
            buttonLabel: 'Explore Restaurants',
            useCase: 'Balances table turnover rates and kitchen line pacing during surges.',
          },
          {
            name: 'Healthcare',
            slug: 'healthcare',
            buttonLabel: 'Explore Healthcare',
            useCase: 'Balances doctor exam room allocations and procedure schedule spacing.',
          },
        ],
        exampleApplication: {
          scenario:
            'A 200-room hotel experiences 14 early flight arrivals while 18 late checkouts are scheduled on the same floor.',
          action:
            'Aether recalculates housekeeping task sequences, routing staff to priority VIP suites first while staging linen carts optimally.',
          outcome:
            'Eliminates front desk lobby waiting queues and achieves 100% on-time VIP check-in compliance.',
        },
        keyCapabilities: [
          'Multi-constraint linear optimization',
          'Dynamic capacity load balancing',
          'Human-in-the-loop executive override gates',
          'Risk mitigation pathway modeling',
        ],
        impactMetric: 'Illustrative: Potential 90%+ conflict reduction in modeled schedules',
      },
    ],
  },
  {
    id: 'customer-intelligence',
    category: 'Customer Intelligence',
    description:
      'Transform customer interactions into unified longitudinal profiles. Continuously detects subtle shifts in affinity, price sensitivity, and drop-off risks.',
    iconName: 'Users',
    solutions: [
      {
        id: 'customer-segmentation',
        name: 'Dynamic Customer Segmentation',
        category: 'Customer Intelligence',
        tagline: 'Continuous behavioral cohort clustering that evolves with customer actions.',
        whatItDoes:
          'Automatically clusters customers based on real-time visit frequency, spend velocity, service preferences, and engagement responsiveness.',
        problemItAddresses:
          'Sending generic mass discounts to VIP regular patrons, missing fast-emerging high-value clients, and treating first-time visitors like churned accounts.',
        problemsItSolves: [
          'Sending generic mass emails that alienate VIP power guests.',
          'Failing to identify fast-growing corporate fleet accounts.',
          'Treating first-time diners identically to high-spend regular patrons.',
          'Missing high-affinity fitness class enthusiasts ready for premium upgrades.',
        ],
        applicableIndustries: [
          {
            name: 'Gyms',
            slug: 'gyms',
            buttonLabel: 'Explore Gyms',
            useCase: 'Segments members by workout frequency, class attendance, and renewal timing.',
          },
          {
            name: 'Salons',
            slug: 'salons',
            buttonLabel: 'Explore Salons',
            useCase: 'Identifies high-frequency color clients vs seasonal walk-ins.',
          },
          {
            name: 'Restaurants',
            slug: 'restaurants',
            buttonLabel: 'Explore Restaurants',
            useCase: 'Separates high-ticket corporate dinner hosts from weekend family diners.',
          },
          {
            name: 'Retail',
            slug: 'retail',
            buttonLabel: 'Explore Retail',
            useCase: 'Clusters shoppers by category affinity and seasonal buying velocity.',
          },
        ],
        exampleApplication: {
          scenario:
            'A boutique gym identifies 45 members whose weekly visit frequency shifted from 4 visits to 1 visit over a 21-day period.',
          action:
            'Aether automatically clusters them into an "At-Risk Habit Decay" segment and schedules a personalized re-engagement workout invite.',
          outcome: 'Recovers 62% of at-risk members before their annual subscription renewal date.',
        },
        keyCapabilities: [
          'Recency-Frequency-Monetary (RFM) clustering',
          'Multi-attribute behavioral tagging',
          'Lifecycle transition alert triggers',
          'Corporate vs individual account separation',
        ],
        impactMetric: 'Example Outcome: 3.4x higher engagement vs static lists',
      },
      {
        id: 'preference-memory',
        name: 'Preference & Formula Memory Mesh',
        category: 'Customer Intelligence',
        tagline: 'Zero-friction memory of client formulas, dietary needs, and comfort notes.',
        whatItDoes:
          'Captures and indexes client specifications—from balayage gloss ratios and beverage preferences to food allergies and room climate preferences.',
        problemItAddresses:
          'Embarrassing repetitions where returning clients must re-explain dietary allergies, past hair formulas, or room preferences to new staff.',
        problemsItSolves: [
          'Stylists re-asking color formulas due to lost paper client index cards.',
          'Hospitality guests frustrated by unrecorded dietary restrictions.',
          'Gym members receiving irrelevant class recommendations.',
          'Clinic patients having to repeat mobility requirements at every intake.',
        ],
        applicableIndustries: [
          {
            name: 'Salons',
            slug: 'salons',
            buttonLabel: 'Explore Salons',
            useCase: 'Stores exact color bowl formulas, developer volumes, and processing times.',
          },
          {
            name: 'Restaurants',
            slug: 'restaurants',
            buttonLabel: 'Explore Restaurants',
            useCase: 'Maintains real-time allergen flags and preferred dining table notes.',
          },
          {
            name: 'Hotels',
            slug: 'hotels',
            buttonLabel: 'Explore Hotels',
            useCase: 'Stores floor level, feather-free bedding, and room temperature profiles.',
          },
          {
            name: 'Healthcare',
            slug: 'healthcare',
            buttonLabel: 'Explore Healthcare',
            useCase: 'Maintains operational intake preferences and accessibility needs.',
          },
        ],
        exampleApplication: {
          scenario:
            'A regular salon client books an appointment at a new branch location across town.',
          action:
            'Aether automatically synchronizes their exact 6N/7GB gloss formulation and scalp sensitivity notes to the new stylist’s workstation mirror.',
          outcome:
            'Achieves flawless color continuity with zero client friction, securing five-star client retention.',
        },
        keyCapabilities: [
          'Digital formula & shade archival',
          'Allergen safety prompt enforcement',
          'Room climate and comfort pre-staging',
          'Workstation mirror tablet sync',
        ],
        impactMetric: 'Prototype Target: 100% preference continuity across outlets',
      },
      {
        id: 'lead-scoring-intent',
        name: 'Lead Scoring & Intent Engine',
        category: 'Customer Intelligence',
        tagline: 'Real-time prospective buyer prioritization based on conversion velocity.',
        whatItDoes:
          'Scores incoming buyer and student inquiries (0–100%) by evaluating timeline urgency, budget qualifications, and engagement response signals.',
        problemItAddresses:
          'Sales advisors drowning in hundreds of unvetted leads while high-intent, ready-to-buy prospects go cold waiting for a callback.',
        problemsItSolves: [
          'Sales reps wasting time on tire-kickers while high-intent buyers go cold.',
          'Admissions officers overwhelmed during peak application deadlines.',
          'Unranked real estate inbound portal leads.',
          'Unqualified test-drive requests consuming dealership sales advisor time.',
        ],
        applicableIndustries: [
          {
            name: 'Real Estate',
            slug: 'real-estate',
            buttonLabel: 'Explore Real Estate',
            useCase: 'Scores buyer readiness, pre-approval status, and visit urgency.',
          },
          {
            name: 'Education',
            slug: 'education',
            buttonLabel: 'Explore Education',
            useCase: 'Prioritizes applicants by academic readiness and enrollment likelihood.',
          },
          {
            name: 'Automotive',
            slug: 'automotive',
            buttonLabel: 'Explore Automotive',
            useCase: 'Scores test-drive inquiries by financing intent and trade-in readiness.',
          },
          {
            name: 'Retail',
            slug: 'retail',
            buttonLabel: 'Explore Retail',
            useCase: 'Scores high-ticket wholesale and B2B quote inquiries.',
          },
        ],
        exampleApplication: {
          scenario:
            'An education institute receives 600 online inquiry forms over a weekend deadline.',
          action:
            'Aether analyzes completion signals, transcript uploads, and financing questions to rank 42 students as Tier-1 High-Intent.',
          outcome:
            'Admissions team contacts all 42 high-intent applicants by 9:30 AM Monday, achieving a 78% enrollment rate.',
        },
        keyCapabilities: [
          'Real-time lead qualification matrix',
          'Budget & financial pre-qualification scoring',
          'Immediate routing to top closers',
          'Automated fallback nurture sequences',
        ],
        impactMetric: 'Potential Impact: 4x faster inquiry qualification speed',
      },
      {
        id: 'retention-churn-watchdog',
        name: 'Retention Watchdog & Churn Prevention',
        category: 'Customer Intelligence',
        tagline: 'Detect silent habit breaks and intervene weeks before cancellation.',
        whatItDoes:
          'Tracks individual attendance curves and purchase cycles, triggering automated revival protocols the moment cadence deviates from baseline.',
        problemItAddresses:
          'Silent customer attrition where members, diners, or clients simply vanish without giving feedback until it is too late to recover them.',
        problemsItSolves: [
          'Gym members dropping from 4 visits/week to 0 without staff noticing.',
          'Salon clients delaying rebooking from 4 weeks to 10+ weeks.',
          'Students falling behind on assignments and dropping out at midterms.',
          'Regular cafe commuters switching to a competing coffee shop.',
        ],
        applicableIndustries: [
          {
            name: 'Gyms',
            slug: 'gyms',
            buttonLabel: 'Explore Gyms',
            useCase: 'Intervenes when member workout attendance drops below personal baseline.',
          },
          {
            name: 'Salons',
            slug: 'salons',
            buttonLabel: 'Explore Salons',
            useCase:
              'Alerts staff when a regular client passes their typical 4-week rebooking window.',
          },
          {
            name: 'Education',
            slug: 'education',
            buttonLabel: 'Explore Education',
            useCase: 'Detects student LMS login declines and assignment submission delays.',
          },
          {
            name: 'Cafes',
            slug: 'cafes',
            buttonLabel: 'Explore Cafes',
            useCase: 'Detects regular morning patron drop-off and triggers loyalty revival.',
          },
        ],
        exampleApplication: {
          scenario:
            'A gym member with an upcoming contract renewal has not scanned their keycard in 16 days.',
          action:
            'Aether detects the silent habit break, alerts the head coach, and drafts an empathetic personal training check-in note.',
          outcome:
            'Member re-engages, books a coach session, and extends their annual membership contract.',
        },
        keyCapabilities: [
          'Habit decay curve trajectory modeling',
          'Automated VIP revival perks dispatch',
          'LMS student retention monitoring',
          'Pre-cancellation sentiment analysis',
        ],
        impactMetric: 'Simulated Scenario: Recovers up to 42% of at-risk accounts',
      },
    ],
  },
  {
    id: 'operational-intelligence',
    category: 'Operational Intelligence',
    description:
      'Real-time operational sensing that balances kitchen prep, inventory stockouts, station throughput, and staff scheduling across facilities.',
    iconName: 'Cpu',
    solutions: [
      {
        id: 'demand-forecasting-volume',
        name: 'Demand Forecasting & Volume Sensing',
        category: 'Operational Intelligence',
        tagline: 'Anticipate hourly covers, footfall surges, and prep requirements.',
        whatItDoes:
          'Anticipates future customer volume, covers, footfall, and order demand by analyzing historical trends, calendar seasonality, weather patterns, and local events.',
        problemItAddresses:
          'Over-preparation leading to massive food waste or under-preparation causing stockouts, long wait times, and lost revenue.',
        problemsItSolves: [
          'Commercial kitchens throwing away 15% of prepared food on rainy days.',
          'Cafes understaffed during sudden transit commuter surges.',
          'Retail stockouts during sudden cold weather fronts.',
          'Hotels miscalculating breakfast buffet covers and kitchen staffing.',
        ],
        applicableIndustries: [
          {
            name: 'Restaurants',
            slug: 'restaurants',
            buttonLabel: 'Explore Restaurants',
            useCase: 'Forecasts hourly covers and prep batch quantities.',
          },
          {
            name: 'Cafes',
            slug: 'cafes',
            buttonLabel: 'Explore Cafes',
            useCase: 'Predicts morning pastry and cold brew consumption curves.',
          },
          {
            name: 'Retail',
            slug: 'retail',
            buttonLabel: 'Explore Retail',
            useCase: 'Anticipates weekend foot traffic surges and register staffing needs.',
          },
          {
            name: 'Hotels',
            slug: 'hotels',
            buttonLabel: 'Explore Hotels',
            useCase: 'Projects daily occupancy and restaurant breakfast volume.',
          },
        ],
        exampleApplication: {
          scenario:
            'A casual dining restaurant faces a Friday evening forecast of heavy rain and a nearby stadium concert.',
          action:
            'Aether models historical rainy-day behavior, forecasting a 30% surge in delivery orders and a 15% dip in dining room covers.',
          outcome:
            'Kitchen preps exact packaging and batch sauce quantities, reducing food waste by 68% while maintaining sub-12 min ticket times.',
        },
        keyCapabilities: [
          'Hourly day-part cover projections',
          'Weather & commuter foot-traffic ingestion',
          'Staged batch prep timing recommendations',
          'Perishable inventory consumption modeling',
        ],
        impactMetric: 'Illustrative: Up to -68% food waste reduction in modeled kitchens',
      },
      {
        id: 'inventory-perishable-intelligence',
        name: 'Inventory & Perishable Stock Intelligence',
        category: 'Operational Intelligence',
        tagline: 'Prevent stockouts and perishability losses before they hit your margins.',
        whatItDoes:
          'Tracks inventory depletion velocity in real time, calculates dynamic reorder thresholds, and flags expiring or slow-moving stock before margin loss.',
        problemItAddresses:
          'Perishable goods expiring in storage, unexpected out-of-stock items during rush hours, and excess capital tied up in dead stock.',
        problemsItSolves: [
          'Uncontrolled spoilage of dairy, seafood, and fresh produce.',
          'Bestselling retail sizes going out of stock on Saturday afternoons.',
          'Automotive workshops stalled waiting for brake pads and synthetic oil.',
          'Cafes running out of oat milk and specialty beans during morning peak.',
        ],
        applicableIndustries: [
          {
            name: 'Restaurants',
            slug: 'restaurants',
            buttonLabel: 'Explore Restaurants',
            useCase: 'Monitors raw meat, dairy, and produce burn rates with auto-reorder.',
          },
          {
            name: 'Retail',
            slug: 'retail',
            buttonLabel: 'Explore Retail',
            useCase: 'Prevents stockouts on top SKUs and flags dead inventory.',
          },
          {
            name: 'Cafes',
            slug: 'cafes',
            buttonLabel: 'Explore Cafes',
            useCase: 'Monitors espresso bean roast dates and dairy safety stock.',
          },
          {
            name: 'Automotive',
            slug: 'automotive',
            buttonLabel: 'Explore Automotive',
            useCase: 'Tracks fast-moving filters, brake pads, and synthetic oil stock.',
          },
        ],
        exampleApplication: {
          scenario:
            'A multi-brand retail apparel store experiences a rapid run on winter jackets following a cold front.',
          action:
            'Aether detects stock levels falling below the 4-day replenishment threshold and auto-generates a supplier reorder draft.',
          outcome:
            'Replenishment arrives before stockouts occur, preserving $24,000 in weekend retail sales.',
        },
        keyCapabilities: [
          'Dynamic safety stock thresholding',
          'Perishable batch expiry countdowns',
          'Automated supplier EDI purchase orders',
          'Multi-location stock transfer balancing',
        ],
        impactMetric: 'Potential Impact: Up to -35% carrying cost reduction',
      },
      {
        id: 'bottleneck-diagnostics',
        name: 'Operational Bottleneck & Throughput Diagnostics',
        category: 'Operational Intelligence',
        tagline: 'Diagnose the hidden root causes slowing down your business.',
        whatItDoes:
          'Traces cycle times across stations, bays, rooms, and counters to diagnose root causes of delay and balance workflow velocity.',
        problemItAddresses:
          'Unexplained customer waiting lines, congested kitchen expo stations, backed-up service bays, and uneven staff utilization.',
        problemsItSolves: [
          'Kitchen hot-lines backed up while expo stations wait idle.',
          'Dealership service advisors overbooking morning intake slots.',
          'Clinic patients waiting 45+ minutes in exam rooms.',
          'Cafe espresso queues stalling due to slow milk frothing stations.',
        ],
        applicableIndustries: [
          {
            name: 'Automotive',
            slug: 'automotive',
            buttonLabel: 'Explore Automotive',
            useCase: 'Traces vehicle dwell time from check-in to diagnostic rack.',
          },
          {
            name: 'Healthcare',
            slug: 'healthcare',
            buttonLabel: 'Explore Healthcare',
            useCase: 'Identifies patient intake bottlenecks and physician exam delays.',
          },
          {
            name: 'Restaurants',
            slug: 'restaurants',
            buttonLabel: 'Explore Restaurants',
            useCase: 'Monitors cook ticket times and expo station handoff delays.',
          },
          {
            name: 'Cafes',
            slug: 'cafes',
            buttonLabel: 'Explore Cafes',
            useCase: 'Optimizes espresso shot pull pacing during morning rush.',
          },
        ],
        exampleApplication: {
          scenario:
            'An automotive workshop experiences afternoon repair delays despite having 6 open lift bays.',
          action:
            'Aether analyzes telemetry and pinpoints that 38% of technician idle time is spent walking to the central parts counter.',
          outcome:
            'Reorganizes fast-moving parts into pre-staged bay carts, cutting average repair turnaround by 45 minutes per car.',
        },
        keyCapabilities: [
          'Station-by-station throughput timing',
          'Cascade delay root-cause diagnosis',
          'Supplier delivery variance scoring',
          'Floor congestion heatmapping',
        ],
        impactMetric: 'Example Outcome: Up to 50% wait time reduction in simulations',
      },
      {
        id: 'staff-scheduling-capacity',
        name: 'Staff Scheduling & Capacity Balancing',
        category: 'Operational Intelligence',
        tagline: 'Match labor deployment against predicted hourly customer load.',
        whatItDoes:
          'Matches historical and projected peak demand curves with staff skill certifications and availability to generate optimal shift schedules.',
        problemItAddresses:
          'Overstaffing during slow afternoon valleys and chaotic understaffing during sudden rush periods.',
        problemsItSolves: [
          'High payroll costs from idle servers during weekday afternoon lulls.',
          'Overwhelmed baristas during sudden morning transit commuter rushes.',
          'Housekeeping delays due to mismatched staffing on heavy checkout days.',
          'Senior stylists spending valuable hours on basic shampoo tasks.',
        ],
        applicableIndustries: [
          {
            name: 'Hotels',
            slug: 'hotels',
            buttonLabel: 'Explore Hotels',
            useCase: 'Aligns housekeeping and front desk staffing with checkout curves.',
          },
          {
            name: 'Restaurants',
            slug: 'restaurants',
            buttonLabel: 'Explore Restaurants',
            useCase: 'Schedules prep cooks, line cooks, and servers by hourly cover forecasts.',
          },
          {
            name: 'Salons',
            slug: 'salons',
            buttonLabel: 'Explore Salons',
            useCase: 'Balances senior stylists and junior assistants across peak booking slots.',
          },
          {
            name: 'Cafes',
            slug: 'cafes',
            buttonLabel: 'Explore Cafes',
            useCase: 'Optimizes barista shift schedules during commuter peak hours.',
          },
        ],
        exampleApplication: {
          scenario:
            'A high-volume cafe experiences recurring 12-minute morning wait queues despite having sufficient total staff on the daily roster.',
          action:
            'Aether shifts 2 staff hours from the slow 2:00 PM lull to the 7:30–9:30 AM morning rush window.',
          outcome:
            'Reduces peak queue times to 90 seconds while eliminating 14 hours of weekly overtime expense.',
        },
        keyCapabilities: [
          'Skill-matrix demand matching',
          'Dynamic shift schedule generation',
          'Overtime risk mitigation controls',
          'Fair-share shift rotation compliance',
        ],
        impactMetric: 'Illustrative Modeling: +22% labor productivity gain',
      },
    ],
  },
  {
    id: 'workflow-automation',
    category: 'Workflow Automation',
    description:
      'Replace manual coordination drag with self-executing operational pipelines that balance capacity, schedule assets, and automate paperwork.',
    iconName: 'Workflow',
    solutions: [
      {
        id: 'scheduling-automation',
        name: 'Intelligent Scheduling & Capacity Balancing',
        category: 'Workflow Automation',
        tagline: 'Maximize asset yield across chairs, bays, rooms, and provider schedules.',
        whatItDoes:
          'Dynamically packs and optimizes appointment slots, eliminating dead valleys and matching equipment constraints with staff certifications.',
        problemItAddresses:
          'Fragmented calendars with awkward 15–30 minute dead gaps that cannot be booked, causing lost provider revenue.',
        problemsItSolves: [
          'Unbalanced salon chairs with dead 30-min gaps between chemical treatments.',
          'Automotive lift bays blocked by cars waiting for master technicians.',
          'Outpatient clinic delays from unrealistic 15-minute appointment blocks.',
          'Real estate brokers driving back and forth between dispersed property visits.',
        ],
        applicableIndustries: [
          {
            name: 'Salons',
            slug: 'salons',
            buttonLabel: 'Explore Salons',
            useCase: 'Packs chemical service processing time with quick blow-dry slots.',
          },
          {
            name: 'Automotive',
            slug: 'automotive',
            buttonLabel: 'Explore Automotive',
            useCase: 'Allocates lift bays and technician skill tiers dynamically.',
          },
          {
            name: 'Healthcare',
            slug: 'healthcare',
            buttonLabel: 'Explore Healthcare',
            useCase: 'Spaces consultation blocks and procedure room turnover times.',
          },
          {
            name: 'Real Estate',
            slug: 'real-estate',
            buttonLabel: 'Explore Real Estate',
            useCase: 'Optimizes agent viewing routes and site visit time windows.',
          },
        ],
        exampleApplication: {
          scenario:
            'A salon has an opening during a senior stylist’s 45-minute color processing window.',
          action:
            'Aether automatically fits a high-margin express blowout appointment into the intermediate gap.',
          outcome: 'Increases daily chair utilization by 24% without extending stylist work hours.',
        },
        keyCapabilities: [
          'Dynamic slot packing algorithm',
          'Technician certification skill routing',
          'Multi-room & equipment allocation',
          'Autonomous waitlist standby fill',
        ],
        impactMetric: 'Potential Impact: +24% higher chair/bay utilization',
      },
      {
        id: 'followups-automation',
        name: 'Automated Multi-Touch Follow-Ups',
        category: 'Workflow Automation',
        tagline: 'Precision-timed rebooking and check-in sequences that never drop a lead.',
        whatItDoes:
          'Calculates the exact biological or mechanical cycle for re-engagement, automatically triggering personalized outreach at the optimal moment.',
        problemItAddresses:
          'Sales reps and advisors forgetting to follow up after site visits, consultations, or maintenance intervals, losing deals to competitors.',
        problemsItSolves: [
          'Real estate agents forgetting to follow up after weekend site visits.',
          'Dealerships losing touch when vehicles cross 30k/60k/90k mileage points.',
          'Clinic patients missing essential 30-day post-consultation reviews.',
          'Prospective students dropping out during multi-week admissions cycles.',
        ],
        applicableIndustries: [
          {
            name: 'Real Estate',
            slug: 'real-estate',
            buttonLabel: 'Explore Real Estate',
            useCase: 'Automates 24-hour post-showing feedback and proposal sharing.',
          },
          {
            name: 'Automotive',
            slug: 'automotive',
            buttonLabel: 'Explore Automotive',
            useCase: 'Triggers mileage-based 6-month scheduled service reminders.',
          },
          {
            name: 'Healthcare',
            slug: 'healthcare',
            buttonLabel: 'Explore Healthcare',
            useCase: 'Dispatches post-treatment care instructions and review check-ins.',
          },
          {
            name: 'Education',
            slug: 'education',
            buttonLabel: 'Explore Education',
            useCase: 'Nurtures prospective students through application deadlines.',
          },
        ],
        exampleApplication: {
          scenario:
            'A buyer attends a weekend property site visit and expresses interest in a 3BHK unit.',
          action:
            'Aether triggers a tailored digital brochure and payment schedule breakdown via WhatsApp 2 hours later, followed by a loan advisory prompt 48 hours later.',
          outcome:
            'Captures buyer commitment and schedules an agreement review meeting within 4 days.',
        },
        keyCapabilities: [
          'Cycle-calculated outreach scheduling',
          'Multi-channel WhatsApp/SMS delivery',
          '1-tap appointment confirmation links',
          'Feedback & review ingestion loop',
        ],
        impactMetric: 'Simulated Outcome: Up to 84% automated rebooking rate',
      },
      {
        id: 'notifications-engine',
        name: 'Context-Aware Notifications & Alerts',
        category: 'Workflow Automation',
        tagline: 'Hyper-personalized transactional briefings with mandatory confirmation gates.',
        whatItDoes:
          'Dispatches interactive pre-arrival briefings, fasting checklists, digital gate passes, and ready-for-pickup notifications.',
        problemItAddresses:
          'Day-of appointment no-shows, unprepared patients voiding clinical procedure slots, and customers waiting in congested lobbies.',
        problemsItSolves: [
          'Day-of clinical procedure cancellations from missed fasting prep.',
          'Retail customers flooding support lines with "Where is my order?" tickets.',
          'Hotel guests waiting in 20-minute lobby check-in lines.',
          'Cafe customers crowding the pickup counter before drinks are poured.',
        ],
        applicableIndustries: [
          {
            name: 'Healthcare',
            slug: 'healthcare',
            buttonLabel: 'Explore Healthcare',
            useCase: 'Enforces 1-tap pre-procedure fasting checklist verification.',
          },
          {
            name: 'Hotels',
            slug: 'hotels',
            buttonLabel: 'Explore Hotels',
            useCase: 'Sends mobile check-in passes and digital room keys.',
          },
          {
            name: 'Retail',
            slug: 'retail',
            buttonLabel: 'Explore Retail',
            useCase: 'Dispatches click-and-collect pickup lockers and order ready alerts.',
          },
          {
            name: 'Cafes',
            slug: 'cafes',
            buttonLabel: 'Explore Cafes',
            useCase: 'Alerts mobile ordering customers when espresso drinks enter the drink bar.',
          },
        ],
        exampleApplication: {
          scenario:
            'A patient is scheduled for an ultrasound procedure requiring 8 hours of fasting.',
          action:
            'Aether sends an interactive checklist via WhatsApp with a required "Confirm Fasting" button 12 hours before the appointment.',
          outcome:
            'Achieves 96% procedure readiness compliance and reduces day-of cancellations by 72%.',
        },
        keyCapabilities: [
          'Mandatory 1-tap confirmation checkpoints',
          'Pre-procedure digital checklist enforcement',
          'Digital mobile room key and gate pass delivery',
          'Real-time order ready-board updates',
        ],
        impactMetric: 'Illustrative: Up to -72% no-show reduction in modeled clinics',
      },
      {
        id: 'administrative-automation',
        name: 'Administrative Workflow Automation',
        category: 'Workflow Automation',
        tagline: 'Eliminate manual paperwork, clipboard queues, and data transcription.',
        whatItDoes:
          'Ingests digital forms, parses transcripts, validates insurance pre-authorizations, and structures notes directly into core ERP/EHR/SIS software.',
        problemItAddresses:
          'Front-line staff spending 2+ hours daily on manual data entry, transcription, and physical paperwork processing.',
        problemsItSolves: [
          'Physicians spending 2+ hours daily on manual charting paperwork.',
          'Admissions staff manually reviewing paper graduation certificates.',
          'Front desk receptionists typing hand-written paper clipboards.',
          'Brokers manually compiling buyer KYC and mortgage documents.',
        ],
        applicableIndustries: [
          {
            name: 'Healthcare',
            slug: 'healthcare',
            buttonLabel: 'Explore Healthcare',
            useCase: 'Extracts structured consultation notes directly into EHR systems.',
          },
          {
            name: 'Education',
            slug: 'education',
            buttonLabel: 'Explore Education',
            useCase: 'Parses applicant diplomas, transcripts, and ID documents.',
          },
          {
            name: 'Real Estate',
            slug: 'real-estate',
            buttonLabel: 'Explore Real Estate',
            useCase: 'Automates agreement drafting and buyer KYC verification.',
          },
          {
            name: 'Automotive',
            slug: 'automotive',
            buttonLabel: 'Explore Automotive',
            useCase: 'Digests multi-point inspection checklists into DMS repair orders.',
          },
        ],
        exampleApplication: {
          scenario:
            'A university admissions department receives 400 uploaded high school transcripts during application week.',
          action:
            'Aether extracts grades, calculates GPA equivalents, and verifies prerequisite math courses in under 3 minutes.',
          outcome:
            'Saves 15 administrative hours per counselor weekly and cuts application decision turnaround from 14 days to 48 hours.',
        },
        keyCapabilities: [
          'Structured EHR / SIS / DMS note export',
          'Cognitive document OCR validation',
          'Insurance pre-auth verification mesh',
          'Automated ledger and billing reconciliation',
        ],
        impactMetric: 'Example Scenario: 12–15 potential admin hours saved weekly',
      },
    ],
  },
  {
    id: 'business-intelligence',
    category: 'Business Intelligence',
    description:
      'Transform reactive historical spreadsheets into real-time operational telemetry and forward-looking simulations.',
    iconName: 'TrendingUp',
    solutions: [
      {
        id: 'operational-telemetry',
        name: 'Operational Telemetry & Performance Analytics',
        category: 'Business Intelligence',
        tagline:
          'Real-time visibility into throughput velocity, bottlenecks, and staff productivity.',
        whatItDoes:
          'Aggregates multi-location telemetry into live executive dashboards tracking table turns, bay yields, ticket times, and staff efficiency.',
        problemItAddresses:
          'Multi-unit business owners flying blind with delayed end-of-month spreadsheets and no visibility into branch variances.',
        problemsItSolves: [
          'Multi-outlet restaurant executives blind to food cost variance across branches.',
          'Salon owners unaware of uneven stylist chair occupancy.',
          'Gym operators unable to measure cohort retention decay across locations.',
          'Automotive dealership groups blind to technician billed hours vs available hours.',
        ],
        applicableIndustries: [
          {
            name: 'Restaurants',
            slug: 'restaurants',
            buttonLabel: 'Explore Restaurants',
            useCase:
              'Tracks hourly sales, table turn times, and food cost variance across branches.',
          },
          {
            name: 'Salons',
            slug: 'salons',
            buttonLabel: 'Explore Salons',
            useCase: 'Monitors stylist chair occupancy, service yields, and product attachments.',
          },
          {
            name: 'Gyms',
            slug: 'gyms',
            buttonLabel: 'Explore Gyms',
            useCase: 'Tracks member check-in frequency, trainer yields, and retention cohorts.',
          },
          {
            name: 'Automotive',
            slug: 'automotive',
            buttonLabel: 'Explore Automotive',
            useCase: 'Tracks technician billed hours, bay utilization, and parts margins.',
          },
        ],
        exampleApplication: {
          scenario: 'A restaurant group operating 6 locations reviews weekly operational reports.',
          action:
            'Aether highlights that Location 4 has an 18% longer ticket turnaround time on saute items compared to the group benchmark.',
          outcome:
            'Identifies an untrained station cook and provides targeted training, restoring ticket speed within 48 hours.',
        },
        keyCapabilities: [
          'Multi-outlet executive benchmark matrix',
          'Real-time flag-hour and ticket velocity',
          'Cohort decay and lifetime value tracking',
          'Idle asset revenue leak quantification',
        ],
        impactMetric: 'Prototype Target: 100% telemetry visibility across branches',
      },
      {
        id: 'revenue-yield-intelligence',
        name: 'Revenue Yield Optimization & Margin Intelligence',
        category: 'Business Intelligence',
        tagline: 'Maximize realized margins and recurring revenue yield across every square foot.',
        whatItDoes:
          'Simulates dynamic yield strategies—filling dead afternoon salon chairs, recovering abandoned retail carts, and pacing hotel late checkouts.',
        problemItAddresses:
          'High top-line sales masking poor bottom-line margins due to discounting, high food cost items, or dead off-peak facility hours.',
        problemsItSolves: [
          'Dead midday gaps leaving salon and spa revenue uncaptured.',
          'Unsold seasonal inventory requiring 50% clearance markdowns.',
          'Empty hotel cabanas and spa appointment slots on weekdays.',
          'Gym facilities sitting 80% empty between 1:00 PM and 4:00 PM.',
        ],
        applicableIndustries: [
          {
            name: 'Hotels',
            slug: 'hotels',
            buttonLabel: 'Explore Hotels',
            useCase: 'Simulates dynamic room yield and ancillary spa/dining spend.',
          },
          {
            name: 'Salons',
            slug: 'salons',
            buttonLabel: 'Explore Salons',
            useCase: 'Identifies dead weekday afternoon slots and optimizes yield packages.',
          },
          {
            name: 'Retail',
            slug: 'retail',
            buttonLabel: 'Explore Retail',
            useCase: 'Analyzes product basket margin contributions and markdown timing.',
          },
          {
            name: 'Gyms',
            slug: 'gyms',
            buttonLabel: 'Explore Gyms',
            useCase: 'Optimizes membership tier structures and personal training packaging.',
          },
        ],
        exampleApplication: {
          scenario:
            'A luxury boutique hotel experiences low spa bookings and empty poolside cabanas on Tuesday and Wednesday afternoons.',
          action:
            'Aether models dynamic bundled packages pairing cabana day-passes with off-peak massage appointments targeted to corporate guests.',
          outcome: 'Generates an incremental $14,200 in monthly high-margin ancillary revenue.',
        },
        keyCapabilities: [
          'Dynamic off-peak yield stimulation',
          'Cart abandonment ship-from-store routing',
          'Ancillary guest spend optimization',
          'Contract renewal pricing models',
        ],
        impactMetric: 'Illustrative Scenario: +$140k potential annual yield per location',
      },
      {
        id: 'menu-product-profitability',
        name: 'Menu & Product Profitability Matrix',
        category: 'Business Intelligence',
        tagline: 'Classify items into Stars, Workhorses, Puzzles, and Dogs for margin engineering.',
        whatItDoes:
          'Analyzes raw ingredient costs, preparation labor time, and sales popularity to optimize product matrices and maximize gross contribution margin.',
        problemItAddresses:
          'Keeping labor-intensive, low-margin menu items or retail products that slow down operations without contributing to profit.',
        problemsItSolves: [
          'High-prep-time dishes slowing down the entire kitchen hot line.',
          'Popular cafe drinks generating near-zero gross margin due to unmeasured milk waste.',
          'Retail SKUs consuming prime shelf space with low inventory turnover.',
        ],
        applicableIndustries: [
          {
            name: 'Restaurants',
            slug: 'restaurants',
            buttonLabel: 'Explore Restaurants',
            useCase: 'Identifies high-margin star dishes and high-cost operational bottlenecks.',
          },
          {
            name: 'Cafes',
            slug: 'cafes',
            buttonLabel: 'Explore Cafes',
            useCase: 'Optimizes specialty drink margins and pastry rotation.',
          },
          {
            name: 'Retail',
            slug: 'retail',
            buttonLabel: 'Explore Retail',
            useCase: 'Evaluates SKU velocity and gross margin return on investment (GMROI).',
          },
        ],
        exampleApplication: {
          scenario:
            'A cafe menu includes an elaborate matcha iced beverage with 6 ingredients taking 3.5 minutes to prepare.',
          action:
            'Aether calculates an actual gross margin of only 14% after labor allocation and suggests a pre-batched preparation formulation.',
          outcome: 'Cuts drink assembly time to 45 seconds and boosts gross item margin to 62%.',
        },
        keyCapabilities: [
          'Recipe costing and ingredient variance tracking',
          'Item popularity vs profitability matrixing',
          'Prep-time labor allocation modeling',
          'Dynamic menu price sensitivity testing',
        ],
        impactMetric: 'Potential Impact: +4.8% net margin expansion in modeled menus',
      },
    ],
  },
  {
    id: 'communication-intelligence',
    category: 'Communication Intelligence',
    description:
      'Deliver natural, context-aware conversations across WhatsApp, SMS, and email that feel like high-touch personal concierge service.',
    iconName: 'MessageSquare',
    solutions: [
      {
        id: 'context-aware-comm',
        name: 'Context-Aware Communication Engine',
        category: 'Communication Intelligence',
        tagline: 'Conversations powered by deep customer and operational history.',
        whatItDoes:
          'Generates tailored messages that reference exact vehicle mileage, past hair colors, dietary allergies, and prospective student goals.',
        problemItAddresses:
          'Generic, robotic communication templates that customers ignore or find impersonal.',
        problemsItSolves: [
          'Sending robotic, tone-deaf automated templates that customers ignore.',
          'Staff spending hours manually drafting individual client messages.',
          'Inaccurate information given to customers during phone inquiries.',
          'Lack of personalization causing client disengagement.',
        ],
        applicableIndustries: [
          {
            name: 'Real Estate',
            slug: 'real-estate',
            buttonLabel: 'Explore Real Estate',
            useCase: 'Drafts property recommendations referencing exact buyer budget & specs.',
          },
          {
            name: 'Salons',
            slug: 'salons',
            buttonLabel: 'Explore Salons',
            useCase: 'Sends tailored rebooking notes mentioning past color treatments.',
          },
          {
            name: 'Automotive',
            slug: 'automotive',
            buttonLabel: 'Explore Automotive',
            useCase: 'Sends service updates citing specific vehicle mileage and brake pad wear.',
          },
          {
            name: 'Education',
            slug: 'education',
            buttonLabel: 'Explore Education',
            useCase:
              'Engages prospective students with curriculum details tailored to their goals.',
          },
        ],
        exampleApplication: {
          scenario:
            'An automotive service center completes a 30-point inspection on a client’s vehicle.',
          action:
            'Aether drafts a personalized message detailing the completed oil change, noting the tire tread depth at 4mm, and offering a 1-tap tire rotation schedule.',
          outcome: 'Customer responds and approves the add-on within 8 minutes via WhatsApp.',
        },
        keyCapabilities: [
          'Deep profile context insertion',
          'Natural human tone calibration',
          'Multilingual message drafting',
          'Channel-optimized formatting (WhatsApp / SMS / Email)',
        ],
        impactMetric: 'Simulated Target: 78% response rate within 15 mins',
      },
      {
        id: 'interactive-engagement-mesh',
        name: 'Interactive Engagement & Confirmation Mesh',
        category: 'Communication Intelligence',
        tagline: 'Convert passive notifications into 1-tap actionable agreements.',
        whatItDoes:
          'Embeds dynamic one-tap confirmation buttons, reschedule selectors, and pre-visit check-in passes directly inside messaging streams.',
        problemItAddresses:
          'Customers forced to make tedious phone calls to confirm or reschedule appointments, resulting in phone tag and dropped bookings.',
        problemsItSolves: [
          'Customers having to make phone calls just to confirm or reschedule.',
          'Unconfirmed high-value appointments leaving providers vulnerable.',
          'Friction in approving multi-point automotive repair quotes.',
          'Unconfirmed clinic visits creating empty doctor consultation slots.',
        ],
        applicableIndustries: [
          {
            name: 'Healthcare',
            slug: 'healthcare',
            buttonLabel: 'Explore Healthcare',
            useCase: '1-tap appointment confirmation and pre-visit intake buttons.',
          },
          {
            name: 'Automotive',
            slug: 'automotive',
            buttonLabel: 'Explore Automotive',
            useCase: '1-tap digital repair quote and video inspection approval.',
          },
          {
            name: 'Salons',
            slug: 'salons',
            buttonLabel: 'Explore Salons',
            useCase: 'Instant reschedule slot swap directly inside WhatsApp.',
          },
          {
            name: 'Education',
            slug: 'education',
            buttonLabel: 'Explore Education',
            useCase: '1-tap campus tour booking and calendar sync.',
          },
        ],
        exampleApplication: {
          scenario: 'A healthcare clinic sends an upcoming specialist appointment notice.',
          action:
            'Message embeds interactive `[Confirm Tuesday 10:00 AM]` and `[Reschedule Slot]` buttons.',
          outcome:
            'Patient confirms with 1 tap; clinic EHR schedule is locked and synchronized instantly with zero receptionist overhead.',
        },
        keyCapabilities: [
          '1-tap WhatsApp interactive message buttons',
          'Instant smart reschedule slot swaps',
          'Mobile video inspection approvals',
          'Digital intake signature capture',
        ],
        impactMetric: 'Illustrative Benchmark: 92% digital confirmation compliance',
      },
      {
        id: 'concierge-copilot',
        name: 'Follow-Up Assistance & Concierge Copilot',
        category: 'Communication Intelligence',
        tagline: 'Empower front-line staff with pre-drafted intelligent responses.',
        whatItDoes:
          'Equips service advisors, receptionists, and admissions officers with suggested responses, appointment windows, and objection handling.',
        problemItAddresses:
          'Junior staff making pricing mistakes, slow response times during peak inquiry surges, and inconsistent brand communication.',
        problemsItSolves: [
          'Junior staff making scheduling errors or providing incorrect pricing.',
          'Slow advisor response times during peak inquiry surges.',
          'Inconsistent brand communication across different staff shifts.',
          'Admissions staff spending excessive time searching course catalogs for answers.',
        ],
        applicableIndustries: [
          {
            name: 'Real Estate',
            slug: 'real-estate',
            buttonLabel: 'Explore Real Estate',
            useCase: 'Equips brokers with immediate inventory specs and comparison answers.',
          },
          {
            name: 'Education',
            slug: 'education',
            buttonLabel: 'Explore Education',
            useCase: 'Assists admissions staff with instant course prerequisite answers.',
          },
          {
            name: 'Hotels',
            slug: 'hotels',
            buttonLabel: 'Explore Hotels',
            useCase: 'Assists front desk with concierge recommendations and upgrade options.',
          },
          {
            name: 'Healthcare',
            slug: 'healthcare',
            buttonLabel: 'Explore Healthcare',
            useCase: 'Assists receptionists with clinic policy and pre-op fasting details.',
          },
        ],
        exampleApplication: {
          scenario:
            'A prospective student asks an admissions counselor whether an AI Engineering bootcamp requires prerequisite Python knowledge.',
          action:
            'Aether Concierge Copilot surfaces the exact syllabus clause, drafts a helpful 2-sentence response explaining the introductory prep module, and provides a 1-click send button.',
          outcome:
            'Counselor replies accurately in under 10 seconds, accelerating the enrollment decision.',
        },
        keyCapabilities: [
          'Real-time advisor copilot suggestions',
          'Instant syllabus and pricing cross-referencing',
          'Objection handling scripts',
          'One-click advisor dispatch approval',
        ],
        impactMetric: 'Potential Impact: 3x staff handling capacity in simulations',
      },
    ],
  },
];

export const PLATFORM_SOLUTIONS: PlatformSolution[] = [
  {
    id: 'ai-intelligence',
    title: 'AI Intelligence Suite',
    tagline: 'Predictive modeling, contextual recommendation, and real-time decisioning.',
    category: 'AI Intelligence',
    description:
      'Autonomous cognitive kernels that ingest real-time telemetry, historical trends, and multi-factor constraints to anticipate outcomes before friction occurs.',
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
    metricsImpact: 'Illustrative: Up to 94% forecast precision in modeled horizons',
  },
  {
    id: 'customer-intelligence',
    title: 'Customer Intelligence Engine',
    tagline: 'Dynamic segmentation, preference extraction, and churn risk scoring.',
    category: 'Customer Intelligence',
    description:
      'Transform customer interactions into unified longitudinal profiles. Continuously detects subtle shifts in affinity, price sensitivity, and drop-off risks.',
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
    metricsImpact: 'Potential Impact: Churn reduction & lead-to-showing acceleration',
  },
  {
    id: 'operational-intelligence',
    title: 'Operational Intelligence Engine',
    tagline: 'Real-time demand forecasting, kitchen/inventory sensing, and throughput diagnostics.',
    category: 'Operational Intelligence',
    description:
      'Monitor physical operational flow across stations, bays, kitchens, and counters. Balances perishable prep, prevents inventory stockouts, and eliminates bottleneck delays.',
    capabilities: [
      'Hourly day-part cover projections & weather-correlated demand forecasting',
      'Perishable ingredient burn-rate tracking & automated dynamic reordering',
      'Cycle-time station bottleneck heatmapping & throughput diagnosis',
      'Demand-aligned labor shift scheduling and skill capacity balancing',
    ],
    technicalPillars: [
      { name: 'Telemetry Stream Mesh', description: 'Sub-minute station flow monitoring.' },
      {
        name: 'Perishability Modeling',
        description: 'Dynamic batch size & shelf-life calculation.',
      },
    ],
    metricsImpact: 'Illustrative Modeling: Waste reduction & queue pacing',
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation Mesh',
    tagline: 'Self-healing scheduling, adaptive follow-ups, and admin orchestration.',
    category: 'Workflow Automation',
    description:
      'Connect fragmented operational silos into closed-loop execution pipelines. Eliminates manual coordination across calendar, CRM, POS, and messaging.',
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
    metricsImpact: 'Example Scenario: Up to 18.5 potential admin hours saved weekly',
  },
  {
    id: 'business-intelligence',
    title: 'Business Intelligence & Telemetry',
    tagline: 'Continuous operational monitoring, yield analytics, and margin tracking.',
    category: 'Business Intelligence',
    description:
      'Consolidate cross-department data streams into actionable diagnostic dashboards and prescriptive executive recommendations.',
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
    metricsImpact: 'Potential Impact: Margin expansion through waste reduction',
  },
  {
    id: 'communication-intelligence',
    title: 'Communication Intelligence Copilot',
    tagline: 'Context-aware messaging, AI re-engagement, and concierge assistance.',
    category: 'Communication Intelligence',
    description:
      'Elevate every customer touchpoint with intelligent, brand-aligned messaging and co-pilot drafts tailored to each customer context.',
    capabilities: [
      'Context-aware tone and timing optimization across WhatsApp, SMS, and Email',
      'Interactive 1-tap booking confirmations, reschedule swaps, and video approvals',
      'Smart concierge co-pilot drafting suggested responses for front-line teams',
      'Automated sentiment monitoring with proactive escalation to senior staff',
    ],
    technicalPillars: [
      {
        name: 'Contextual Prompt Synthesizer',
        description: 'Domain-specific conversation agents.',
      },
      { name: 'Brand-Tone Guardrails', description: 'Zero-hallucination compliance checking.' },
    ],
    metricsImpact: 'Illustrative Benchmark: Enhanced inquiry handling capacity',
  },
];
