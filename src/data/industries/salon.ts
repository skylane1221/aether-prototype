import { IndustryData } from '../../types';

export interface SalonCustomerProfile {
  id: string;
  name: string;
  avatarInitials: string;
  clientTier:
    | 'VIP Platinum Guest'
    | 'Color & Styling Regular'
    | 'Executive Grooming'
    | 'Occasional Treatment';
  preferredStylist: string;
  visitFrequencyWeeks: number;
  lastAppointment: string;
  daysSinceLastVisit: number;
  expectedNextVisit: string;
  daysOverdue: number;
  serviceHistory: {
    date: string;
    serviceName: string;
    stylist: string;
    price: string;
    formulaNotes: string;
  }[];
  preferredServices: string[];
  recommendedNextService: string;
  recommendedServicePrice: string;
  rebookingOpportunity: string;
  suggestedCommunication: {
    channel: 'WhatsApp' | 'SMS';
    headline: string;
    messageContent: string;
  };
  recommendedAppointmentWindow: string;
  urgencyLevel: 'Overdue & Fade Risk' | 'Optimal Rebook Window' | 'Nurture Stage';
}

export interface SalonBiData {
  chairUtilization: {
    currentUtilization: string;
    traditionalAverage: string;
    middayGapFillRate: string;
    recoveredRevenueMonthly: string;
  };
  noShowReduction: {
    currentNoShowRate: string;
    traditionalNoShowRate: string;
    depositCompliance: string;
  };
  stylistProductivity: {
    stylist: string;
    chairOccupancy: string;
    avgTicket: string;
    rebookingRate: string;
    status: string;
  }[];
}

export const SALON_CUSTOMERS: SalonCustomerProfile[] = [
  {
    id: 'cust-1',
    name: 'Sarah Jenkins',
    avatarInitials: 'SJ',
    clientTier: 'VIP Platinum Guest',
    preferredStylist: 'Elena (Master Colorist)',
    visitFrequencyWeeks: 6.0,
    lastAppointment: '7.5 weeks ago (Feb 12)',
    daysSinceLastVisit: 52,
    expectedNextVisit: '10 days ago (Optimal 6-week cadence)',
    daysOverdue: 10,
    serviceHistory: [
      {
        date: 'Feb 12',
        serviceName: 'Full Balayage + Root Melt + Olaplex Bond Builder',
        stylist: 'Elena',
        price: '₹9,500',
        formulaNotes: 'Level 9 Ash Blonde with 8.1 toner; high porous ends',
      },
      {
        date: 'Dec 28',
        serviceName: 'Hydration Hair Spa + Face Framing Touch-Up',
        stylist: 'Elena',
        price: '₹4,800',
        formulaNotes: 'Kérastase Chronologiste intensive hydration treatment',
      },
      {
        date: 'Nov 14',
        serviceName: 'Balayage Maintenance & Precision Cut',
        stylist: 'Elena',
        price: '₹7,200',
        formulaNotes: 'Soft layered bob cut with curtain fringe refresh',
      },
    ],
    preferredServices: [
      'Dimensional Blonde Balayage',
      'Kérastase Intensive Caviar Treatment',
      'Signature Silk Blowout',
      'Curtain Fringe Trimming',
    ],
    recommendedNextService: 'Balayage Tone & Gloss Refresh + Olaplex Moisture Seal',
    recommendedServicePrice: '₹5,400',
    rebookingOpportunity:
      'Client is 10 days past her customary 6-week color fade threshold. Without toning within 7 days, brassiness and cuticle dryness will accelerate.',
    suggestedCommunication: {
      channel: 'WhatsApp',
      headline: 'Sarah, your toner refresh with Elena is due',
      messageContent:
        'Hi Sarah! Elena noticed it’s been 7 weeks since your Ash Blonde Balayage. To keep your tone vibrant and brass-free, we’ve reserved a priority opening with Elena this Thursday at 3:00 PM (includes a complimentary Olaplex booster). Tap to lock your chair: aether.salon/sarah-vip',
    },
    recommendedAppointmentWindow: 'Thursday at 3:00 PM or Friday at 11:30 AM (Elena Chair 2)',
    urgencyLevel: 'Overdue & Fade Risk',
  },
  {
    id: 'cust-2',
    name: 'Ananya Mehta',
    avatarInitials: 'AM',
    clientTier: 'Color & Styling Regular',
    preferredStylist: 'Rahul (Senior Stylist)',
    visitFrequencyWeeks: 4.0,
    lastAppointment: '3.5 weeks ago (March 10)',
    daysSinceLastVisit: 25,
    expectedNextVisit: 'In 3 days (Optimal 4-week gray touch-up)',
    daysOverdue: 0,
    serviceHistory: [
      {
        date: 'March 10',
        serviceName: 'Organic Root Touch-Up & Express Blowout',
        stylist: 'Rahul',
        price: '₹3,600',
        formulaNotes: 'Ammonia-free 5.0 Natural Brown on hairline',
      },
      {
        date: 'Feb 10',
        serviceName: 'Root Color + Keratin Smoothing Express',
        stylist: 'Rahul',
        price: '₹8,200',
        formulaNotes: 'Cysteine express smoothing on crown',
      },
    ],
    preferredServices: [
      'Ammonia-Free Root Touch-Up',
      'Cysteine Hair Smoothing',
      'Volumizing Moroccan Blowout',
    ],
    recommendedNextService: 'Ammonia-Free Root Color + Moroccan Argan Scalp Ritual',
    recommendedServicePrice: '₹4,100',
    rebookingOpportunity:
      'Precise 4-week gray regrowth cycle. Client has a 94% rebooking adherence when prompted 3 days prior to target date.',
    suggestedCommunication: {
      channel: 'WhatsApp',
      headline: 'Ananya, your 4-week root touch-up reminder',
      messageContent:
        'Hi Ananya! Your scheduled 4-week root touch-up with Rahul is coming up this weekend. We have your favorite Saturday 11:00 AM chair open. Tap to confirm with one tap: aether.salon/ananya-rebook',
    },
    recommendedAppointmentWindow: 'Saturday 11:00 AM or Sunday 2:00 PM (Rahul Chair 4)',
    urgencyLevel: 'Optimal Rebook Window',
  },
  {
    id: 'cust-3',
    name: 'Michael Chang',
    avatarInitials: 'MC',
    clientTier: 'Executive Grooming',
    preferredStylist: 'Tariq (Master Barber)',
    visitFrequencyWeeks: 3.0,
    lastAppointment: '4 weeks ago (March 6)',
    daysSinceLastVisit: 29,
    expectedNextVisit: '8 days ago (3-week fade cycle)',
    daysOverdue: 8,
    serviceHistory: [
      {
        date: 'March 6',
        serviceName: 'Executive Skin Fade + Hot Towel Beard Sculpting',
        stylist: 'Tariq',
        price: '₹2,200',
        formulaNotes: '0.5 taper fade on sides with matte clay finish',
      },
      {
        date: 'Feb 14',
        serviceName: 'Skin Fade + Charcoal Charcoal Detox Facial',
        stylist: 'Tariq',
        price: '₹3,500',
        formulaNotes: 'Pre-event grooming package',
      },
    ],
    preferredServices: [
      'Precision Skin Fade & Scissor Cut',
      'Hot Towel Beard Sculpting & Razor Line',
      'Charcoal Scalp & Skin Detox',
    ],
    recommendedNextService: 'Executive Skin Fade + Beard Oil Treatment',
    recommendedServicePrice: '₹2,200',
    rebookingOpportunity:
      'High fade outgrowth visible after 21 days; client usually books Thursdays between 5-7 PM after corporate hours.',
    suggestedCommunication: {
      channel: 'SMS',
      headline: 'Michael, your fade refresh is ready with Tariq',
      messageContent:
        'Hi Michael, Tariq has a 5:30 PM opening this Thursday for your executive fade and beard trim. Tap to confirm in 5 seconds: aether.salon/michael-fade',
    },
    recommendedAppointmentWindow: 'Thursday 5:30 PM (Tariq Barber Station 1)',
    urgencyLevel: 'Overdue & Fade Risk',
  },
  {
    id: 'cust-4',
    name: 'Chloe Dupont',
    avatarInitials: 'CD',
    clientTier: 'Occasional Treatment',
    preferredStylist: 'Simran (Skin & Spa Therapist)',
    visitFrequencyWeeks: 8.0,
    lastAppointment: '6 weeks ago (Feb 20)',
    daysSinceLastVisit: 42,
    expectedNextVisit: 'In 2 weeks',
    daysOverdue: 0,
    serviceHistory: [
      {
        date: 'Feb 20',
        serviceName: 'Hydra-Facial Glow + Lymphatic Drainage',
        stylist: 'Simran',
        price: '₹6,800',
        formulaNotes: 'Salicylic T-zone peel with hyaluronic acid infusion',
      },
    ],
    preferredServices: [
      'Medical Grade Hydra-Facial Glow',
      'LED Light Therapy Anti-Aging',
      'Botanical Scalp Scrub',
    ],
    recommendedNextService: 'Hydra-Facial Glow + Vitamin C Collagen Booster',
    recommendedServicePrice: '₹7,200',
    rebookingOpportunity:
      'Seasonal spring skincare transition; ideal timing for seasonal deep pore hydration.',
    suggestedCommunication: {
      channel: 'WhatsApp',
      headline: 'Chloe, spring skin renewal with Simran',
      messageContent:
        'Hi Chloe! Ready for your seasonal skin refresh? Simran is hosting a Hydra-Glow week with complimentary Vitamin C collagen boosters. Explore available slots: aether.salon/chloe-glow',
    },
    recommendedAppointmentWindow: 'Next Wednesday 2:00 PM (Spa Room 2)',
    urgencyLevel: 'Nurture Stage',
  },
];

export const SALON_BI_DATA: SalonBiData = {
  chairUtilization: {
    currentUtilization: '94.2%',
    traditionalAverage: '68.0%',
    middayGapFillRate: '88.5%',
    recoveredRevenueMonthly: '₹3,85,000',
  },
  noShowReduction: {
    currentNoShowRate: '1.8%',
    traditionalNoShowRate: '14.5%',
    depositCompliance: '96.0%',
  },
  stylistProductivity: [
    {
      stylist: 'Elena (Master Colorist)',
      chairOccupancy: '98%',
      avgTicket: '₹8,400',
      rebookingRate: '92.4%',
      status: 'Booked Solid',
    },
    {
      stylist: 'Rahul (Senior Stylist)',
      chairOccupancy: '94%',
      avgTicket: '₹4,800',
      rebookingRate: '89.1%',
      status: 'Optimal',
    },
    {
      stylist: 'Tariq (Master Barber)',
      chairOccupancy: '91%',
      avgTicket: '₹2,400',
      rebookingRate: '86.5%',
      status: 'Optimal',
    },
    {
      stylist: 'Simran (Skin Therapist)',
      chairOccupancy: '86%',
      avgTicket: '₹6,900',
      rebookingRate: '78.0%',
      status: 'Available Gaps',
    },
  ],
};

export const salonIndustry: IndustryData = {
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
      consequence: 'Sub-par guest experience when regular stylists take leave or change branches.',
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
};
