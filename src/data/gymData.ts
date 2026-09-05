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
