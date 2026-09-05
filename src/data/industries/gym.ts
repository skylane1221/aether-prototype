import { IndustryData } from '../../types';

export interface GymMemberProfile {
  id: string;
  name: string;
  avatarInitials: string;
  membershipTier:
    | 'All-Access Black Diamond'
    | 'Standard Fitness Core'
    | 'Studio Class Pass'
    | 'Corporate Wellness';
  joinDate: string;
  renewalDate: string;
  daysUntilRenewal: number;
  monthlyValue: string;
  attendanceTrend: {
    week: string;
    visits: number;
  }[];
  recentActivity: {
    lastCheckIn: string;
    lastWorkoutType: string;
    assignedTrainer: string;
    favoriteClass: string;
    totalVisitsThisMonth: number;
  };
  engagementLevel: 'High Engagement' | 'Moderate Dropping' | 'Critical Inactive';
  engagementScore: number;
  churnRiskScore: number;
  churnRiskLevel:
    'Critical Risk (91%)' | 'High Risk (74%)' | 'Moderate Risk (38%)' | 'Low Risk (8%)';
  diagnosis: string;
  recommendedAction: string;
  suggestedCommunication: {
    channel: 'WhatsApp' | 'SMS' | 'Mobile App Push';
    subject: string;
    messageText: string;
  };
  followUpTiming: string;
}

export interface GymBiData {
  retentionSummary: {
    activeMembers: number;
    atRiskMembers: number;
    retainedThisMonth: string;
    revenuePreserved: string;
  };
  churnDistribution: {
    category: string;
    percentage: number;
    count: number;
    color: string;
  }[];
  classCapacityMetrics: {
    className: string;
    capacity: number;
    avgWaitlist: number;
    utilization: string;
    revenueYield: string;
  }[];
  trainerMonetization: {
    trainer: string;
    bookedHours: string;
    clientRetention: string;
    status: string;
  }[];
}

export const GYM_MEMBERS: GymMemberProfile[] = [
  {
    id: 'mem-1',
    name: 'Elena Rostova',
    avatarInitials: 'ER',
    membershipTier: 'All-Access Black Diamond',
    joinDate: '11 months ago',
    renewalDate: 'In 18 days (Annual Renewal)',
    daysUntilRenewal: 18,
    monthlyValue: '₹7,500/mo',
    attendanceTrend: [
      { week: 'W-7', visits: 4 },
      { week: 'W-6', visits: 4 },
      { week: 'W-5', visits: 3 },
      { week: 'W-4', visits: 2 },
      { week: 'W-3', visits: 1 },
      { week: 'W-2', visits: 0 },
      { week: 'W-1', visits: 0 },
      { week: 'Current', visits: 0 },
    ],
    recentActivity: {
      lastCheckIn: '21 days ago (March 14)',
      lastWorkoutType: 'HIIT & Hydro-Massage Recovery',
      assignedTrainer: 'Coach Vikram (Senior Tier)',
      favoriteClass: 'Saturday 9:00 AM Spin Studio',
      totalVisitsThisMonth: 0,
    },
    engagementLevel: 'Critical Inactive',
    engagementScore: 18,
    churnRiskScore: 91,
    churnRiskLevel: 'Critical Risk (91%)',
    diagnosis:
      'Habit break threshold crossed (3 consecutive zero-visit weeks) coinciding with annual renewal window in 18 days.',
    recommendedAction:
      'Trigger coach wellness touchpoint and offer complimentary hydro-massage recovery voucher to restart routine.',
    suggestedCommunication: {
      channel: 'WhatsApp',
      subject: 'Elena, your recovery pass is ready at Aether Fitness',
      messageText:
        'Hi Elena! Coach Vikram noticed you’ve missed your Saturday spin sessions lately. We’ve unlocked a complimentary 30-min Hydro-Massage & Sauna Pass for you this weekend. Tap here to reserve your recovery slot: aether.fit/elena-vip',
    },
    followUpTiming: 'Immediate (Within 4 hours before renewal lock)',
  },
  {
    id: 'mem-2',
    name: 'Marcus Vance',
    avatarInitials: 'MV',
    membershipTier: 'Standard Fitness Core',
    joinDate: '6 months ago',
    renewalDate: 'In 120 days',
    daysUntilRenewal: 120,
    monthlyValue: '₹4,200/mo',
    attendanceTrend: [
      { week: 'W-7', visits: 3 },
      { week: 'W-6', visits: 4 },
      { week: 'W-5', visits: 4 },
      { week: 'W-4', visits: 3 },
      { week: 'W-3', visits: 4 },
      { week: 'W-2', visits: 4 },
      { week: 'W-1', visits: 5 },
      { week: 'Current', visits: 4 },
    ],
    recentActivity: {
      lastCheckIn: 'Yesterday at 6:45 PM',
      lastWorkoutType: 'Heavy Barbell Hypertrophy',
      assignedTrainer: 'Self-Directed (No PT Assigned)',
      favoriteClass: 'Free Weights & Strength Zone',
      totalVisitsThisMonth: 16,
    },
    engagementLevel: 'High Engagement',
    engagementScore: 96,
    churnRiskScore: 8,
    churnRiskLevel: 'Low Risk (8%)',
    diagnosis:
      'High-frequency core member hitting plateau signals; peak candidate for Personal Training package upsell.',
    recommendedAction:
      'Offer complimentary 1-on-1 body composition assessment & strength benchmark consultation with Head Strength Coach.',
    suggestedCommunication: {
      channel: 'Mobile App Push',
      subject: 'Marcus, unlock your next strength milestone',
      messageText:
        'You’ve logged 16 workouts this month! You’ve unlocked a complimentary InBody 570 Composition Analysis & Strength Consultation with Head Coach Dev. Book your 20-min assessment: aether.fit/marcus-eval',
    },
    followUpTiming: 'Post-workout tomorrow morning',
  },
  {
    id: 'mem-3',
    name: 'Priya Sharma',
    avatarInitials: 'PS',
    membershipTier: 'Studio Class Pass',
    joinDate: '3 months ago',
    renewalDate: 'In 5 days (Monthly Autopay)',
    daysUntilRenewal: 5,
    monthlyValue: '₹5,800/mo',
    attendanceTrend: [
      { week: 'W-7', visits: 3 },
      { week: 'W-6', visits: 3 },
      { week: 'W-5', visits: 2 },
      { week: 'W-4', visits: 2 },
      { week: 'W-3', visits: 1 },
      { week: 'W-2', visits: 1 },
      { week: 'W-1', visits: 0 },
      { week: 'Current', visits: 1 },
    ],
    recentActivity: {
      lastCheckIn: '3 days ago at 7:15 AM',
      lastWorkoutType: 'Vinyasa Flow Yoga',
      assignedTrainer: 'Coach Ananya (Yoga Specialist)',
      favoriteClass: 'Reformer Pilates & Sunset Yoga',
      totalVisitsThisMonth: 4,
    },
    engagementLevel: 'Moderate Dropping',
    engagementScore: 42,
    churnRiskScore: 74,
    churnRiskLevel: 'High Risk (74%)',
    diagnosis:
      'Class bookings declined 65% due to evening class capacity bottlenecks; autopay billing renewal in 5 days.',
    recommendedAction:
      'Grant priority 48-hour early booking window for waitlisted Reformer Pilates classes and offer a friend workout guest pass.',
    suggestedCommunication: {
      channel: 'WhatsApp',
      subject: 'Priya, VIP early access to Reformer Pilates',
      messageText:
        'Hi Priya! We saw evening Pilates was fully booked last week. We’ve upgraded your account with 48-Hour Priority Class Access and a free Guest Pass for your next session. Reserve your Reformer bed: aether.fit/priya-priority',
    },
    followUpTiming: 'Today at 4:30 PM (Prior to evening class release)',
  },
  {
    id: 'mem-4',
    name: 'David Kim',
    avatarInitials: 'DK',
    membershipTier: 'Corporate Wellness',
    joinDate: '8 months ago',
    renewalDate: 'In 45 days',
    daysUntilRenewal: 45,
    monthlyValue: '₹6,000/mo',
    attendanceTrend: [
      { week: 'W-7', visits: 2 },
      { week: 'W-6', visits: 2 },
      { week: 'W-5', visits: 3 },
      { week: 'W-4', visits: 2 },
      { week: 'W-3', visits: 2 },
      { week: 'W-2', visits: 2 },
      { week: 'W-1', visits: 2 },
      { week: 'Current', visits: 2 },
    ],
    recentActivity: {
      lastCheckIn: 'Tuesday at 12:30 PM',
      lastWorkoutType: 'Express Midday Conditioning',
      assignedTrainer: 'Coach Rohan',
      favoriteClass: 'Lunchtime Express Spin (30 min)',
      totalVisitsThisMonth: 8,
    },
    engagementLevel: 'Moderate Dropping',
    engagementScore: 68,
    churnRiskScore: 38,
    churnRiskLevel: 'Moderate Risk (38%)',
    diagnosis:
      'Steady lunchtime corporate visitor; steady engagement with low community connection.',
    recommendedAction: 'Invite to Corporate Team Challenge with teammate leaderboard tracking.',
    suggestedCommunication: {
      channel: 'SMS',
      subject: 'David, join the Tech Corridor 5k Fitness Challenge',
      messageText:
        'Hi David, your corporate team is currently #3 on our Midday Velocity Board! Join this Thursday’s express challenge to earn points for your company. Details: aether.fit/corp-challenge',
    },
    followUpTiming: 'Wednesday 11:00 AM',
  },
];

export const GYM_BI_DATA = {
  retentionSummary: {
    activeMembers: 1840,
    atRiskMembers: 142,
    retainedThisMonth: '89.4%',
    revenuePreserved: '₹8,92,000',
  },
  churnDistribution: [
    {
      category: 'Critical Inactivity (>14 Days No Turnstile)',
      percentage: 38,
      count: 54,
      color: '#f43f5e',
    },
    { category: 'Class Booking Bottleneck Droppers', percentage: 34, count: 48, color: '#f59e0b' },
    { category: 'Upcoming Renewal Hesitancy', percentage: 28, count: 40, color: '#38bdf8' },
  ],
  classCapacityMetrics: [
    {
      className: 'Saturday Peak Spin',
      capacity: 35,
      avgWaitlist: 18,
      utilization: '98.5%',
      revenueYield: '₹52,000',
    },
    {
      className: 'Reformer Pilates Master',
      capacity: 16,
      avgWaitlist: 24,
      utilization: '100%',
      revenueYield: '₹68,000',
    },
    {
      className: 'HIIT Performance Zone',
      capacity: 25,
      avgWaitlist: 8,
      utilization: '92.0%',
      revenueYield: '₹38,000',
    },
    {
      className: 'Vinyasa Sunset Yoga',
      capacity: 28,
      avgWaitlist: 4,
      utilization: '86.0%',
      revenueYield: '₹29,000',
    },
  ],
  trainerMonetization: [
    {
      trainer: 'Coach Vikram (Strength)',
      bookedHours: '38 hrs/wk',
      clientRetention: '96.2%',
      status: 'Max Capacity',
    },
    {
      trainer: 'Coach Ananya (Pilates/Yoga)',
      bookedHours: '34 hrs/wk',
      clientRetention: '94.8%',
      status: 'Optimal',
    },
    {
      trainer: 'Coach Dev (Athletic Conditioning)',
      bookedHours: '30 hrs/wk',
      clientRetention: '91.0%',
      status: 'Available Slots',
    },
  ],
};

export const gymIndustry: IndustryData = {
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
      consequence: 'Low email open rates (<12%) and disconnect between members and club amenities.',
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
    verifiedOutcome: 'Member restored active routine; $2,160 annual subscription value preserved.',
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
};
