export interface UniversalDemoWorkflow {
  id: string;
  industrySlug: string;
  industryName: string;
  accentColor: string;
  title: string;
  badge: string;
  description: string;

  // 6 Universal Stages
  input: {
    source: string;
    timestamp: string;
    rawPayload: Record<string, string>;
  };
  processing: {
    telemetryStream: string;
    latencyMs: number;
    modelsActive: string[];
  };
  understanding: {
    diagnosis: string;
    riskOrOpportunityScored: string;
    confidence: string;
    factors: string[];
  };
  recommendation: {
    actionProposed: string;
    expectedImpact: string;
    confidenceScore: string;
  };
  action: {
    stepsExecuted: string[];
    systemsTargeted: string[];
    humanReviewState: string;
  };
  result: {
    primaryOutcome: string;
    quantifiedGain: string;
    timeToImpact: string;
  };
}

export const ALL_10_INDUSTRY_DEMOS: UniversalDemoWorkflow[] = [
  {
    id: 'demo-real-estate',
    industrySlug: 'real-estate',
    industryName: 'Real Estate',
    accentColor: 'cyan',
    title: 'Instant Inbound Buyer Qualification & Private Showing Lock',
    badge: 'Lead Qualification & Showing Mesh',
    description: 'Simulate an unassigned portal lead arriving after business hours (9:45 PM) and watch Aether qualify requirements, match listing inventory, and lock in a showing.',
    input: {
      source: 'Zillow / MagicBricks Inbound Webhook',
      timestamp: '21:45:12 GMT',
      rawPayload: {
        Buyer: 'Marcus Vance',
        InquiryText: 'Looking for a 2BHK in Powai around ₹1.5 Cr with parking and ready possession.',
        Timeline: 'Ready to buy in 30 days; pre-approved home loan on file',
        PreferredTime: 'Tomorrow afternoon between 2:00–4:00 PM',
      },
    },
    processing: {
      telemetryStream: 'NLP Entity Extraction & Property Graph DB Ingest',
      latencyMs: 38,
      modelsActive: ['Requirement Extractor v3', 'Listing Inventory Matcher', 'Agent Calendar Sync'],
    },
    understanding: {
      diagnosis: 'High-intent pre-approved buyer with immediate purchase horizon. Listing #PW-402 matches 98.4% of criteria.',
      riskOrOpportunityScored: 'Conversion Probability: 94.2% | Lead Decay Risk: High if uncontacted for >15 min',
      confidence: '98.4% Parameter Match',
      factors: ['Budget matches seller floor', 'Parking slot allocated', 'Immediate possession available in Tower B'],
    },
    recommendation: {
      actionProposed: 'Fast-track showing invitation, reserve 2:30 PM slot with Senior Agent Rajesh, and dispatch property dossier.',
      expectedImpact: 'Locks showing within 15 minutes before competitor portals receive duplicate inquiry.',
      confidenceScore: '99.1%',
    },
    action: {
      stepsExecuted: [
        'Extracted parameters: 2BHK, Powai, ₹1.5 Cr, Parking, Immediate Possession',
        'Queried CRM for Senior Agent Rajesh availability at 2:30 PM tomorrow',
        'Dispatched personalized WhatsApp video walkthrough & digital brochure',
        'Buyer tapped "Confirm 2:30 PM Showing" in 4 minutes',
      ],
      systemsTargeted: ['Property CRM', 'Broker Calendar API', 'WhatsApp Business API'],
      humanReviewState: 'Showing confirmed on Broker calendar; alert pushed to mobile app',
    },
    result: {
      primaryOutcome: 'Showing confirmed and verified within 4 minutes with zero manual agent friction.',
      quantifiedGain: '₹1.5 Cr deal pipeline captured',
      timeToImpact: '4 minutes',
    },
  },
  {
    id: 'demo-restaurants',
    industrySlug: 'restaurants',
    industryName: 'Restaurants & Food Businesses',
    accentColor: 'amber',
    title: 'Sudden Rainstorm Surge & Kitchen Prep Staging',
    badge: 'Demand Forecasting & Table Yield',
    description: 'Simulate a sudden evening rainstorm causing a 40% influx in comfort food orders while two prime 4-top tables cancel.',
    input: {
      source: 'OpenTable POS Feed & Weather Radar API',
      timestamp: '18:30:00 GMT',
      rawPayload: {
        Event: 'Sudden rainstorm detected within 3km radius (Radar alert)',
        CurrentCovers: '84 booked / 110 dining capacity',
        Cancellations: '2x 4-top cancellations for 19:30 slot',
        StandbyQueue: '7 parties on digital waitlist nearby',
      },
    },
    processing: {
      telemetryStream: 'POS Real-Time Ticket Ingestion & Waitlist Geofence Query',
      latencyMs: 44,
      modelsActive: ['Demand Forecaster Kernel', 'Kitchen Pacing Model', 'Standby Seat Balancer'],
    },
    understanding: {
      diagnosis: 'Rainstorm triggers +45% surge in signature pasta & broth orders. Two empty 4-top tables risk $480 lost shift revenue.',
      riskOrOpportunityScored: 'Revenue Leakage: $480 | Standby Fill Probability: 96%',
      confidence: '96.2%',
      factors: ['Waitlist party S. Chen is 500m away', 'Kitchen hot line has 8-minute capacity window before peak'],
    },
    recommendation: {
      actionProposed: 'Dispatch 10-minute hold claim link to standby parties and notify Head Chef to prep 14 additional pasta portions.',
      expectedImpact: 'Recovers 100% of cancellation revenue and prevents 20+ minute kitchen ticket delays.',
      confidenceScore: '97.5%',
    },
    action: {
      stepsExecuted: [
        'Scanned standby queue and sent 1-tap claim link to top 2 parties',
        'Party S. Chen accepted; Table 14 locked instantly in POS',
        'Sent prep batch notification to Kitchen Display System (KDS)',
        'Paced ticket release to prevent hot line station bottleneck',
      ],
      systemsTargeted: ['POS Host Stand', 'Kitchen KDS', 'Guest SMS Gateway'],
      humanReviewState: 'Sous Chef acknowledged batch prep on KDS display',
    },
    result: {
      primaryOutcome: 'Both cancellation tables re-occupied in 3.5 minutes; zero food stockouts or ticket delays.',
      quantifiedGain: '+$480 table revenue recovered',
      timeToImpact: '3.5 minutes',
    },
  },
  {
    id: 'demo-cafes',
    industrySlug: 'cafes',
    industryName: 'Cafes & Quick-Serve',
    accentColor: 'amber',
    title: 'Morning Commuter Surge Flow & High-Velocity Drink Pacing',
    badge: 'Queue Pacing & Role Balancing',
    description: 'Simulate a sudden commuter influx from nearby transit hub and test Aether balancing mobile vs counter drink queues.',
    input: {
      source: 'Transit Hub Foot-Traffic Telemetry & POS Register',
      timestamp: '08:15:00 GMT',
      rawPayload: {
        FootTraffic: '+40% commuter surge detected at metro exit',
        CurrentQueue: '16 drink tickets pending across mobile app & counter',
        DrinkComplexity: '72% custom iced espresso & oat milk beverages',
      },
    },
    processing: {
      telemetryStream: 'High-Frequency Register Stream & Barista Display Sync',
      latencyMs: 22,
      modelsActive: ['Queue Rate Limiter', 'Ticket Batching Engine', 'Barista Station Balancer'],
    },
    understanding: {
      diagnosis: 'Espresso Bar 1 bottleneck diagnosed. Mobile order wait time projected to exceed 8 minutes if unpaced.',
      riskOrOpportunityScored: 'Queue Congestion Risk: High | Drop-off Probability: 28%',
      confidence: '98.0%',
      factors: ['Barista 2 currently on backup register', '6 pending orders share identical oat milk shot profile'],
    },
    recommendation: {
      actionProposed: 'Re-allocate Barista 2 to dedicated cold espresso extraction and batch identical milk steaming.',
      expectedImpact: 'Compresses average drink ready time from 8.5 minutes to under 2.5 minutes.',
      confidenceScore: '99.4%',
    },
    action: {
      stepsExecuted: [
        'Dispatched station re-allocation prompt to Barista 2 tablet',
        'Batched 6 iced latte espresso pulls simultaneously',
        'Updated mobile app estimated ready time to exact 4-minute window',
        'Pushed "Your drink is ready at Counter 1" alerts',
      ],
      systemsTargeted: ['POS System', 'Barista KDS', 'Mobile App API'],
      humanReviewState: 'Barista switched station with 1-tap touch screen confirmation',
    },
    result: {
      primaryOutcome: 'Processed 31% more commuter orders; average lobby wait held under 2.5 minutes.',
      quantifiedGain: '+$340 morning rush revenue',
      timeToImpact: '2.5 minutes',
    },
  },
  {
    id: 'demo-gyms',
    industrySlug: 'gyms',
    industryName: 'Gyms & Fitness Centers',
    accentColor: 'emerald',
    title: 'Silent Member Churn Detection & Re-Activation Outreach',
    badge: 'Turnstile Telemetry & Retention',
    description: 'Simulate Aether detecting a premium member dropping from 4 visits/week to 0 visits over 21 days and launching proactive coach intervention.',
    input: {
      source: 'Turnstile Access Scanner & Member Mobile App',
      timestamp: '08:00:00 GMT',
      rawPayload: {
        Member: 'Elena Rostova (Premium All-Access Tier)',
        HistoricalCadence: '4.2 visits/week over 8 months',
        CurrentStatus: '0 turnstile check-ins in last 21 days',
        ContractState: 'Annual renewal due in 45 days',
      },
    },
    processing: {
      telemetryStream: 'Attendance Curve Regression & Sentiment Model',
      latencyMs: 31,
      modelsActive: ['Habit Decay Kernel', 'Churn Predictor AI', 'Perk Matcher'],
    },
    understanding: {
      diagnosis: 'Silent habit break detected. 89% probability of non-renewal if uncontacted within 7 days.',
      riskOrOpportunityScored: 'Churn Probability: 89% | ARR at Risk: $2,160',
      confidence: '92.7%',
      factors: ['Member usually trains mornings with Coach Marcus', 'Missed 3 regular reformer pilates classes'],
    },
    recommendation: {
      actionProposed: 'Generate personalized coach recovery touchpoint with complimentary hydro-massage pass.',
      expectedImpact: 'Restores member training habit before formal renewal invoice is dispatched.',
      confidenceScore: '95.0%',
    },
    action: {
      stepsExecuted: [
        'Created high-priority task card on Head Coach Marcus tablet',
        'Drafted personalized WhatsApp wellness check-in referencing past routine',
        'Attached 1-tap Friday morning recovery session booking link',
        'Elena confirmed Friday 8:00 AM recovery session within 45 minutes',
      ],
      systemsTargeted: ['Turnstile Management System', 'Trainer App', 'WhatsApp Gateway'],
      humanReviewState: 'Coach approved and sent outreach with single tap',
    },
    result: {
      primaryOutcome: 'Member returned to active training; $2,160 annual subscription value protected.',
      quantifiedGain: '100% membership renewal secured',
      timeToImpact: '45 minutes',
    },
  },
  {
    id: 'demo-salons',
    industrySlug: 'salons',
    industryName: 'Salons & Beauty Businesses',
    accentColor: 'rose',
    title: 'Biological Regrowth Cycle Calculation & 1-Tap Rebooking',
    badge: 'Cycle Cadence & Chair Yield',
    description: 'Simulate Aether tracking balayage root regrowth and dispatching an optimal rebooking invitation before client drifts to a competitor.',
    input: {
      source: 'Salon POS & Formula Dossier Archive',
      timestamp: '11:00:00 GMT',
      rawPayload: {
        Client: 'Sarah Jenkins (VIP Platinum Guest)',
        LastService: 'Full Balayage + Toner (7.5 weeks ago)',
        TargetCadence: '6-week optimal color refresh cycle',
        OverdueStatus: '10 days overdue based on hair regrowth telemetry',
      },
    },
    processing: {
      telemetryStream: 'Treatment Degradation Calculator & Stylist Schedule Matcher',
      latencyMs: 29,
      modelsActive: ['Color Regrowth Model', 'Chair Slot Packing Engine', 'Formula Memory Sync'],
    },
    understanding: {
      diagnosis: 'Root fade risk active. Stylist Elena has open mid-day chair slot on Tuesday at 2:00 PM.',
      riskOrOpportunityScored: 'Rebooking Opportunity: High | Expected Ticket: ₹9,500',
      confidence: '96.4%',
      factors: ['Client prefers Tuesday afternoons', 'Level 9 toner formula on file in digital dossier'],
    },
    recommendation: {
      actionProposed: 'Dispatch personalized WhatsApp rebooking invitation with pre-reserved Tuesday 2:00 PM slot.',
      expectedImpact: 'Eliminates 6-week appointment delay and fills an off-peak Tuesday chair.',
      confidenceScore: '98.2%',
    },
    action: {
      stepsExecuted: [
        'Retrieved historical gloss formula (#8.1 toner ratio) from dossier',
        'Pre-held Tuesday 2:00 PM slot on Master Colorist Elena schedule',
        'Sent customized WhatsApp invitation referencing past styling',
        'Sarah tapped "Reserve Tuesday 2 PM" and paid confirmation deposit',
      ],
      systemsTargeted: ['Salon POS Ledger', 'Stylist Workstation Tablet', 'WhatsApp API'],
      humanReviewState: 'Chair slot auto-locked in salon master ledger',
    },
    result: {
      primaryOutcome: 'VIP client rebooked on-cadence; Tuesday mid-day chair vacancy monetized.',
      quantifiedGain: '+₹9,500 service revenue captured',
      timeToImpact: '8 minutes',
    },
  },
  {
    id: 'demo-retail',
    industrySlug: 'retail',
    industryName: 'Retail Businesses',
    accentColor: 'sky',
    title: 'Omnichannel Stockout Interception & Ship-From-Store Routing',
    badge: 'Inventory Routing & Cart Recovery',
    description: 'Simulate an online shopper about to abandon a $285 coat due to warehouse stockout, rescued by routing inventory from a physical retail store.',
    input: {
      source: 'Shopify E-Commerce Cart & POS Store Telemetry',
      timestamp: '15:20:00 GMT',
      rawPayload: {
        CustomerCart: 'Wool Trench Coat - Navy - Size M ($285)',
        WarehouseStatus: 'Out of Stock (0 units in central fulfillment)',
        StoreInventory: 'Downtown Retail Store has 3 units on display rack',
      },
    },
    processing: {
      telemetryStream: 'Real-Time Inventory Mesh & Fulfillment Geofence',
      latencyMs: 34,
      modelsActive: ['Omnichannel Routing Kernel', 'Local Foot-Traffic Feasibility Model'],
    },
    understanding: {
      diagnosis: 'Cart abandonment imminent. Downtown store has excess stock and low afternoon foot traffic.',
      riskOrOpportunityScored: 'Cart Abandonment Risk: 98% | Fulfillment Feasibility: 99.2%',
      confidence: '99.0%',
      factors: ['Customer delivery address is within regional ship-from-store zone (12 miles)'],
    },
    recommendation: {
      actionProposed: 'Enable instant ship-from-store routing and dispatch pre-approved checkout link to customer.',
      expectedImpact: 'Captures full-price $285 sale that would otherwise bounce to a competitor.',
      confidenceScore: '98.5%',
    },
    action: {
      stepsExecuted: [
        'Generated picking order on Downtown Store handheld inventory scanner',
        'Reserved 1 unit on physical rack',
        'Dispatched instant one-tap checkout link to customer',
        'Customer completed $285 purchase in 2 minutes',
      ],
      systemsTargeted: ['E-Commerce Storefront', 'Store POS', 'Carrier Dispatch API'],
      humanReviewState: 'Store associate confirmed item packaged for 2-day delivery',
    },
    result: {
      primaryOutcome: 'Full-price order captured; fulfillment completed from nearby physical store.',
      quantifiedGain: '+$285 order preserved',
      timeToImpact: '2 minutes',
    },
  },
  {
    id: 'demo-hotels',
    industrySlug: 'hotels',
    industryName: 'Hotels & Hospitality',
    accentColor: 'teal',
    title: 'VIP Flight Tracking & Priority Housekeeping Turnaround',
    badge: 'Flight Telemetry & Room Dispatch',
    description: 'Simulate Aether tracking an early-landing VIP guest flight and dynamically reprioritizing housekeeping queues to have the suite ready with mobile key issued.',
    input: {
      source: 'Airline Flight Telemetry API & Hotel PMS',
      timestamp: '13:15:00 GMT',
      rawPayload: {
        Guest: 'David Sterling (VIP Diamond Guest)',
        FlightTelemetry: 'Flight #UA421 landed 13:15 (1 hr 45 min ahead of standard 15:00 check-in)',
        RoomStatus: 'Suite 402 currently Dirty (Housekeeping on 4th floor)',
      },
    },
    processing: {
      telemetryStream: 'Flight Radar Telemetry & Housekeeping Tablet Mesh',
      latencyMs: 40,
      modelsActive: ['Flight Arrival Tracker', 'Housekeeping Queue Optimizer', 'Smart Lock Key Dispenser'],
    },
    understanding: {
      diagnosis: 'Early arrival VIP guest. Suite 402 must be prioritized to prevent 20-minute lobby wait.',
      riskOrOpportunityScored: 'Guest Satisfaction Impact: +40% ancilliary spend on early check-in',
      confidence: '99.4%',
      factors: ['Housekeeping team currently 2 doors down from Suite 402'],
    },
    recommendation: {
      actionProposed: 'Re-route Housekeeping Team to Suite 402 immediately; pre-condition climate to 68°F.',
      expectedImpact: 'Delivers frictionless 5-star experience with direct room access via mobile digital key.',
      confidenceScore: '99.5%',
    },
    action: {
      stepsExecuted: [
        'Dispatched priority turnaround ticket to 4th Floor housekeeping tablet',
        'Suite 402 cleaned and inspected by 13:45',
        'Pre-conditioned thermostat to 68°F',
        'Issued digital NFC mobile room key to guest phone with welcome message',
      ],
      systemsTargeted: ['Hotel PMS', 'Housekeeping Tablet App', 'Smart Door Lock API'],
      humanReviewState: 'Housekeeping supervisor signed off on tablet inspection',
    },
    result: {
      primaryOutcome: 'Guest walked straight to prepared suite with zero lobby check-in waiting.',
      quantifiedGain: '5-Star luxury review & +$120 room service spend',
      timeToImpact: '30 minutes',
    },
  },
  {
    id: 'demo-healthcare',
    industrySlug: 'healthcare',
    industryName: 'Healthcare & Clinics',
    accentColor: 'cyan',
    title: 'Specialist Cancellation Gap Recovery & Pre-Visit Intake',
    badge: 'Waitlist Recovery & Admin Intake',
    description: 'Simulate a cardiologist cancellation at 10:30 AM backfilled by an urgent waitlisted patient with digital intake completed in 3 minutes.',
    input: {
      source: 'Clinic EHR Scheduling System & SMS Gateway',
      timestamp: '09:00:00 GMT',
      rawPayload: {
        Provider: 'Dr. Evelyn Vance (Cardiology Clinic)',
        Cancellation: '10:30 AM follow-up slot cancelled (45 min opening)',
        QueuedWaitlist: '12 patients on priority waitlist seeking earlier care',
      },
    },
    processing: {
      telemetryStream: 'EHR Schedule Telemetry & HIPAA-Compliant Gateway',
      latencyMs: 28,
      modelsActive: ['Waitlist Urgency Scorer', 'Patient Matcher AI', 'Digital Intake Parser'],
    },
    understanding: {
      diagnosis: 'Provider idle time diagnosed ($350 lost billable slot). Patient Marcus Reed has urgent referral and requested morning slot.',
      riskOrOpportunityScored: 'Waitlist Match Confidence: 97.6% | Provider Loss: $350 avoided',
      confidence: '98.2%',
      factors: ['Marcus Reed lives 15 mins from clinic', 'Requested morning cancellation notifications'],
    },
    recommendation: {
      actionProposed: 'Dispatch automated SMS slot claim link to Marcus Reed with 15-minute response window.',
      expectedImpact: 'Preserves provider productivity and accelerates patient care by 2 weeks.',
      confidenceScore: '98.5%',
    },
    action: {
      stepsExecuted: [
        'Sent conversational HIPAA-compliant SMS offering 10:30 AM slot',
        'Marcus confirmed via 1-tap link in 3 minutes',
        'Slot locked in EHR and conversational pre-visit questionnaire dispatched',
        'Intake symptoms and insurance card ingested directly to EHR',
      ],
      systemsTargeted: ['EHR Scheduling System', 'HIPAA SMS Gateway', 'Digital Intake Kiosk API'],
      humanReviewState: 'Slot locked automatically; receptionist desk notified of on-time arrival',
    },
    result: {
      primaryOutcome: 'Open cardiology slot filled in 3 minutes; intake paperwork 100% complete prior to arrival.',
      quantifiedGain: '+$350 provider revenue preserved',
      timeToImpact: '3 minutes',
    },
  },
  {
    id: 'demo-automotive',
    industrySlug: 'automotive',
    industryName: 'Automotive / Car Service',
    accentColor: 'indigo',
    title: 'Brake Wear Telematics Alert, Bay Scheduling & Parts Staging',
    badge: 'Predictive Service & Bay Balancer',
    description: 'Simulate connected telematics detecting 3mm brake pad wear on a BMW 330i, verifying warehouse parts, and reserving a master tech lift bay.',
    input: {
      source: 'Connected Vehicle Telematics & Dealership DMS',
      timestamp: '14:10:00 GMT',
      rawPayload: {
        Vehicle: '2021 BMW 330i (VIN #WBA5R1C58MFA90124)',
        Odometer: '46,800 km (Crossed 45k service milestone)',
        TelematicsAlert: 'Front brake lining at 3mm (Pad wear sensor active)',
        PartsStatus: 'OEM Rotors & Ceramic Pads in Warehouse Bin #B-14',
      },
    },
    processing: {
      telemetryStream: 'OBD-II DTC Stream & Parts Counter Inventory Mesh',
      latencyMs: 36,
      modelsActive: ['Maintenance Predictor AI', 'Bay Capacity Matrix', 'Parts Stager'],
    },
    understanding: {
      diagnosis: 'Heavy mechanical repair order required. Lift Bay #4 with Master Tech Dan is available Thursday at 9:30 AM.',
      riskOrOpportunityScored: 'Brake Safety Risk: Moderate | Parts Readiness: 100% In Stock',
      confidence: '99.1%',
      factors: ['Parts in stock', 'Certified BMW master tech required for electronic sensor recalibration'],
    },
    recommendation: {
      actionProposed: 'Reserve Lift Bay #4, stage OEM brake parts at parts counter, and dispatch WhatsApp service invite.',
      expectedImpact: 'Prevents customer breakdown and eliminates lift bay hold-overs.',
      confidenceScore: '99.5%',
    },
    action: {
      stepsExecuted: [
        'Checked warehouse inventory and staged OEM brake kit in Bay 4 staging bin',
        'Reserved Lift Bay #4 on master workshop schedule for Thursday 9:30 AM',
        'Dispatched personalized WhatsApp video explanation & booking pass',
        'Owner Vikram confirmed appointment and requested loaner vehicle in 5 minutes',
      ],
      systemsTargeted: ['Dealer DMS', 'Parts Counter ERP', 'Customer WhatsApp API'],
      humanReviewState: 'Service advisor approved repair order estimate with 1 click',
    },
    result: {
      primaryOutcome: 'Repair order booked, bay locked, and parts staged with zero technician waiting time.',
      quantifiedGain: '+₹18,500 service order captured',
      timeToImpact: '5 minutes',
    },
  },
  {
    id: 'demo-education',
    industrySlug: 'education',
    industryName: 'Education & Training Centers',
    accentColor: 'rose',
    title: 'Admissions Inquiry Triage, Transcript Audit & Fast-Track Enrollment',
    badge: 'Cognitive Ingestion & Course Matching',
    description: 'Simulate a career switcher uploading a university transcript for a Master of Data Science program and receiving a verified syllabus and scholarship offer in 12 minutes.',
    input: {
      source: 'Admissions Web Inquiry & PDF Document Upload',
      timestamp: '16:45:00 GMT',
      rawPayload: {
        Applicant: 'Maya Lin (Software QA background)',
        TargetProgram: 'Master of Applied Data Science & AI',
        UploadedDocuments: 'Official Transcript (PDF), Resume, Prerequisite Sheet',
        Requirements: 'Needs hybrid weekend schedule + Women in Tech Scholarship review',
      },
    },
    processing: {
      telemetryStream: 'Cognitive Document OCR & Program Prerequisite Parser',
      latencyMs: 42,
      modelsActive: ['Credential Parser v4', 'Curriculum Matcher AI', 'Scholarship Allocator'],
    },
    understanding: {
      diagnosis: 'Prerequisites met with distinction (GPA: 3.82, Linear Algebra & Python verified). High-intent candidate eligible for $4,000 scholarship.',
      riskOrOpportunityScored: 'Admissions Fit Score: 98.5% | Matriculation Likelihood: High',
      confidence: '99.5%',
      factors: ['3 years software QA experience', 'Weekend cohort matches working professional schedule'],
    },
    recommendation: {
      actionProposed: 'Fast-track application acceptance, allocate $4,000 scholarship, and schedule 1-on-1 Academic Director orientation.',
      expectedImpact: 'Secures enrollment within 15 minutes vs 6-day competitor turnaround.',
      confidenceScore: '99.2%',
    },
    action: {
      stepsExecuted: [
        'Parsed uploaded transcript and validated course prerequisites',
        'Generated personalized admission package with $4,000 scholarship calculation',
        'Dispatched digital enrollment package via WhatsApp with 1-tap signature link',
        'Maya signed digital enrollment agreement and confirmed orientation call',
      ],
      systemsTargeted: ['Student Information System (SIS)', 'Admissions CRM', 'WhatsApp API'],
      humanReviewState: 'Faculty Director signed off on acceptance package in admissions dashboard',
    },
    result: {
      primaryOutcome: 'Application parsed, verified, and enrolled in 12 minutes vs 6-day industry average.',
      quantifiedGain: '+$14,000 tuition enrollment secured',
      timeToImpact: '12 minutes',
    },
  },
];

export interface DemoSimulationScenario {
  id: string;
  industrySlug: string;
  industryName: string;
  title: string;
  badge: string;
  description: string;
  incomingSignal: {
    source: string;
    timestamp: string;
    payload: Record<string, string>;
  };
  cognitiveAnalysis: {
    detectedBottleneck: string;
    recommendedAction: string;
    confidenceScore: string;
  };
  automatedExecution: {
    actionsTaken: string[];
    timeElapsed: string;
    resultingOutcome: string;
  };
}

export const DEMO_SCENARIOS: DemoSimulationScenario[] = ALL_10_INDUSTRY_DEMOS.map((demo) => ({
  id: demo.id,
  industrySlug: demo.industrySlug,
  industryName: demo.industryName,
  title: demo.title,
  badge: demo.badge,
  description: demo.description,
  incomingSignal: {
    source: demo.input.source,
    timestamp: demo.input.timestamp,
    payload: demo.input.rawPayload,
  },
  cognitiveAnalysis: {
    detectedBottleneck: demo.understanding.diagnosis,
    recommendedAction: demo.recommendation.actionProposed,
    confidenceScore: demo.understanding.confidence,
  },
  automatedExecution: {
    actionsTaken: demo.action.stepsExecuted,
    timeElapsed: demo.result.timeToImpact,
    resultingOutcome: demo.result.primaryOutcome,
  },
}));
