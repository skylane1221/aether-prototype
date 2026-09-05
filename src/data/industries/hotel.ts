import { IndustryData } from '../../types';

export interface HotelDemoDateScenario {
  id: string;
  dateLabel: string;
  dayName: string;
  contextTag: string;
  totalRooms: number;
  expectedOccupancy: string;
  expectedOccupancyPercentage: number;
  confirmedBookings: number;
  expectedCancellations: number;
  cancellationRate: string;
  roomDemand: string;
  demandStatus: 'Surge Demand' | 'Peak Weekend' | 'Steady Business' | 'Turnover Surge';
  operationalLoad: {
    level: 'Heavy Load' | 'Critical Peak' | 'Moderate' | 'High Turnover';
    arrivals: number;
    departures: number;
    stayOvers: number;
    housekeepingUnitsNeeded: number;
    frontDeskPeakHour: string;
  };
  aetherGeneratedOutput: {
    occupancyInsight: string;
    operationalRisk: string;
    recommendedStaffAllocation: {
      housekeeping: string;
      frontDesk: string;
      concierge: string;
      maintenance: string;
    };
    recommendedAction: string;
    projectedRevenueSaved: string;
    autonomousExecutionSteps: string[];
  };
}

export interface HotelBiMetricData {
  occupancyRate: string;
  revPar: string;
  adr: string;
  directBookingShare: string;
  housekeepingTurnoverTime: string;
  guestSatisfactionScore: string;
}

export interface HotelJourneyStep {
  stepNumber: string;
  id: string;
  title: string;
  stageName: string;
  subtitle: string;
  traditionalDrag: string;
  aetherIntelligence: string;
  metricLabel: string;
  metricValue: string;
  iconName: string;
}

export const HOTEL_DEMO_SCENARIOS: HotelDemoDateScenario[] = [
  {
    id: 'friday-summit',
    dateLabel: 'Tomorrow (Friday — Tech Summit & Weekend Inflow)',
    dayName: 'Friday',
    contextTag: 'Convention + Leisure Inflow',
    totalRooms: 200,
    expectedOccupancy: '94.5%',
    expectedOccupancyPercentage: 94.5,
    confirmedBookings: 189,
    expectedCancellations: 12,
    cancellationRate: '6.3% predicted cancellation pace',
    roomDemand: 'High Surge (+42% vs baseline). Suites & Executive King sold out.',
    demandStatus: 'Surge Demand',
    operationalLoad: {
      level: 'Critical Peak',
      arrivals: 146,
      departures: 88,
      stayOvers: 43,
      housekeepingUnitsNeeded: 132,
      frontDeskPeakHour: '2:00 PM – 4:30 PM (84 check-ins in 2.5 hours)',
    },
    aetherGeneratedOutput: {
      occupancyInsight:
        'High-probability cancellation detected across 12 OTA standard rooms. Corporate conference waitlist has 24 unfulfilled attendee requests willing to pay +28% premium.',
      operationalRisk:
        'Critical 3-hour housekeeping crunch between 11:00 AM – 2:00 PM. 88 departures must be turned before 2:00 PM VIP convention arrivals.',
      recommendedStaffAllocation: {
        housekeeping:
          '+5 staff pulled from evening turndown to 10:00 AM – 2:00 PM express turnover floor pods.',
        frontDesk:
          '+2 roving tablet concierge check-in stations deployed to lobby entrance during 2–4 PM peak.',
        concierge:
          '1 dedicated luggage express courier assigned to corporate charter bus arrivals.',
        maintenance: 'Pre-flight HVAC and digital key checks on 146 arrival rooms by 1:00 PM.',
      },
      recommendedAction:
        'Instantly backfill 12 predicted cancellations with corporate waitlist bookings; push $45 early check-in pass to 30 leisure arrivals; auto-sequence floor-by-floor cleaning dispatch.',
      projectedRevenueSaved: '₹3,48,000 incremental RevPAR captured',
      autonomousExecutionSteps: [
        'Reallocated 12 risk-flagged OTA rooms to confirmed corporate group roster',
        'Triggered automated WhatsApp digital registration & baggage check to 146 arrivals',
        'Dispatched dynamic cleaning priority queue to housekeeping mobile terminals',
        'Pre-assigned high-floor quiet rooms to 48 loyalty titanium members',
      ],
    },
  },
  {
    id: 'saturday-gala',
    dateLabel: 'Saturday (Gala Event & Leisure Peak)',
    dayName: 'Saturday',
    contextTag: 'Full House / Luxury Banquet',
    totalRooms: 200,
    expectedOccupancy: '99.0%',
    expectedOccupancyPercentage: 99.0,
    confirmedBookings: 198,
    expectedCancellations: 4,
    cancellationRate: '2.0% (Guaranteed deposit bookings)',
    roomDemand: 'Maximum Capacity. 100% room inventory allocated with 18 waitlisted.',
    demandStatus: 'Peak Weekend',
    operationalLoad: {
      level: 'Heavy Load',
      arrivals: 64,
      departures: 58,
      stayOvers: 134,
      housekeepingUnitsNeeded: 192,
      frontDeskPeakHour: '1:30 PM – 3:30 PM',
    },
    aetherGeneratedOutput: {
      occupancyInsight:
        'Near-zero cancellation risk. Highest ancillary spend day with strong spa, room service, and rooftop banquet demand.',
      operationalRisk:
        'Elevated room service transit times and valet bottlenecks anticipated between 6:30 PM – 8:30 PM.',
      recommendedStaffAllocation: {
        housekeeping:
          'Standard morning turnover crew + 4 dedicated evening turndown/amenity refresh staff.',
        frontDesk: '2 standard desks + 1 dedicated VIP escort concierge.',
        concierge: '+3 valet parking coordinators staged at main portico.',
        maintenance: 'Sound and lighting technician on standby for banquet ballroom.',
      },
      recommendedAction:
        'Trigger personalized pre-arrival dining and spa package offers to 64 arrivals; schedule staggered valet staging at 6:00 PM.',
      projectedRevenueSaved: '₹2,15,000 in ancillary F&B and spa upsell',
      autonomousExecutionSteps: [
        'Sent automated digital menu and spa reservation links to 64 confirmed guests',
        'Pre-staged welcome champagne amenities in 22 suite categories',
        'Optimized room service pantry staging for 7:00 PM rush',
      ],
    },
  },
  {
    id: 'tuesday-corporate',
    dateLabel: 'Next Tuesday (Corporate Business Inflow)',
    dayName: 'Tuesday',
    contextTag: 'Midweek Business Travel',
    totalRooms: 200,
    expectedOccupancy: '82.0%',
    expectedOccupancyPercentage: 82.0,
    confirmedBookings: 164,
    expectedCancellations: 18,
    cancellationRate: '11.0% (Flexible corporate policy cancellations)',
    roomDemand:
      'Moderate corporate demand. King business rooms in high request; twin rooms underutilized.',
    demandStatus: 'Steady Business',
    operationalLoad: {
      level: 'Moderate',
      arrivals: 92,
      departures: 78,
      stayOvers: 86,
      housekeepingUnitsNeeded: 98,
      frontDeskPeakHour: '5:00 PM – 7:30 PM (Late business check-ins)',
    },
    aetherGeneratedOutput: {
      occupancyInsight:
        'Flexible corporate bookings exhibit a 11% cancellation risk 24 hours prior. 16 unbooked twin rooms can be bundled for business pairs.',
      operationalRisk:
        'Under-utilized dining room at dinner; front desk staff over-scheduled in morning and under-scheduled at evening 6 PM peak.',
      recommendedStaffAllocation: {
        housekeeping:
          'Standard baseline roster with priority given to early business traveler departures.',
        frontDesk:
          'Shift 2 staff from 9:00 AM morning slot to 5:00 PM – 9:00 PM evening arrival rush.',
        concierge: '1 corporate transport concierge for airport early morning shuttle dispatch.',
        maintenance:
          'Fast-track Wi-Fi router checks and desk ergonomic setups on corporate floors.',
      },
      recommendedAction:
        'Automate dynamic re-pricing for last-minute business bookings at $185 ADR; send evening business dinner promotion to 86 stay-over guests.',
      projectedRevenueSaved: '₹1,92,000 protected through last-minute business backfill',
      autonomousExecutionSteps: [
        'Adjusted dynamic corporate room rates on GDS/corporate booking portals',
        'Shifted evening front desk staffing roster automatically',
        'Pushed corporate lounge dinner voucher to in-house business guests',
      ],
    },
  },
  {
    id: 'sunday-turnover',
    dateLabel: 'Sunday (Mass Weekend Turnover & Deep Cleaning)',
    dayName: 'Sunday',
    contextTag: 'Mass Checkout / Deep Sanitization',
    totalRooms: 200,
    expectedOccupancy: '68.5%',
    expectedOccupancyPercentage: 68.5,
    confirmedBookings: 137,
    expectedCancellations: 8,
    cancellationRate: '5.8% predicted cancellation rate',
    roomDemand:
      'Leisure guests checking out; incoming weekly corporate guests arriving late evening.',
    demandStatus: 'Turnover Surge',
    operationalLoad: {
      level: 'High Turnover',
      arrivals: 42,
      departures: 148,
      stayOvers: 29,
      housekeepingUnitsNeeded: 148,
      frontDeskPeakHour: '10:30 AM – 12:30 PM (Checkout rush)',
    },
    aetherGeneratedOutput: {
      occupancyInsight:
        '148 weekend checkout departures require rapid room turnaround and deep sanitization before Monday full-house business week.',
      operationalRisk:
        'Severe checkout desk congestion between 11:00 AM – 12:00 PM; late checkout requests could derail Monday room staging.',
      recommendedStaffAllocation: {
        housekeeping:
          'All-hands housekeeping surge (12 room attendants) operating in dual-attendant zone teams.',
        frontDesk:
          '3 express checkout kiosks activated + 2 staff verifying digital folio settlements.',
        concierge: '3 bellhops dedicated to luggage holding for late-flight departing guests.',
        maintenance: 'Deep air filter replacement and preventative maintenance in 35 empty rooms.',
      },
      recommendedAction:
        'Enable 1-tap WhatsApp contactless checkout; grant automated late checkouts only on floors with zero Sunday incoming arrivals.',
      projectedRevenueSaved:
        '₹1,25,000 in late checkout fee monetization + zero Monday delay penalties',
      autonomousExecutionSteps: [
        'Dispatched contactless digital checkout links to all 148 departing folios',
        'Dynamic housekeeping room release: cleaned vacant rooms for preventative maintenance',
        'Automated luggage storage tag generation for 54 departing guests',
      ],
    },
  },
];

export const HOTEL_BI_DATA = {
  overviewMetrics: {
    occupancyRate: '88.4%',
    revPar: '₹9,420',
    adr: '₹10,650',
    directBookingShare: '46.2%',
    housekeepingTurnoverTime: '24 mins',
    guestSatisfactionScore: '4.88 / 5',
  } as HotelBiMetricData,

  bookingTrends: [
    { day: 'Mon', otaBookings: 38, directBookings: 46, corporateGroup: 52, totalOccupancy: '78%' },
    { day: 'Tue', otaBookings: 42, directBookings: 54, corporateGroup: 68, totalOccupancy: '82%' },
    { day: 'Wed', otaBookings: 45, directBookings: 60, corporateGroup: 74, totalOccupancy: '89%' },
    { day: 'Thu', otaBookings: 48, directBookings: 65, corporateGroup: 70, totalOccupancy: '91%' },
    { day: 'Fri', otaBookings: 72, directBookings: 78, corporateGroup: 39, totalOccupancy: '94%' },
    { day: 'Sat', otaBookings: 88, directBookings: 92, corporateGroup: 18, totalOccupancy: '99%' },
    { day: 'Sun', otaBookings: 50, directBookings: 62, corporateGroup: 25, totalOccupancy: '69%' },
  ],

  cancellationRiskDistribution: [
    {
      label: 'High Cancellation Risk (OTA Flexible)',
      count: 28,
      percentage: '14.0%',
      riskColor: 'text-rose-400',
      bg: 'bg-rose-500/10 border-rose-500/30',
    },
    {
      label: 'Moderate Pace Risk (Corporate Open)',
      count: 36,
      percentage: '18.0%',
      riskColor: 'text-amber-400',
      bg: 'bg-amber-500/10 border-amber-500/30',
    },
    {
      label: 'Guaranteed / Non-Refundable',
      count: 112,
      percentage: '56.0%',
      riskColor: 'text-emerald-400',
      bg: 'bg-emerald-500/10 border-emerald-500/30',
    },
    {
      label: 'VIP / Titanium Loyalty Direct',
      count: 24,
      percentage: '12.0%',
      riskColor: 'text-sky-400',
      bg: 'bg-sky-500/10 border-sky-500/30',
    },
  ],

  guestPreferences: [
    {
      preference: 'High-Floor / Quiet Wing',
      count: 84,
      trend: '+18% this month',
      category: 'Room Assignment',
    },
    {
      preference: 'Hypoallergenic Bedding & Extra Pillows',
      count: 62,
      trend: '+24% this month',
      category: 'Housekeeping',
    },
    {
      preference: 'Late Checkout Request (2:00 PM)',
      count: 54,
      trend: '+35% weekend peak',
      category: 'Front Desk',
    },
    {
      preference: 'Early Breakfast Box / Room Delivery',
      count: 48,
      trend: '+12% corporate',
      category: 'Dining & Kitchen',
    },
    {
      preference: 'Airport Chauffeur Transfer Concierge',
      count: 32,
      trend: '+29% international',
      category: 'Concierge',
    },
    {
      preference: 'Spa & Wellness Pre-Booking',
      count: 28,
      trend: '+40% leisure',
      category: 'Ancillary Services',
    },
  ],

  operationalLoadFloors: [
    {
      floor: 'Floor 1 (Suites & Presidential)',
      cleanReady: 12,
      inCleaning: 3,
      pendingDirty: 1,
      occupancy: '94%',
    },
    {
      floor: 'Floor 2 (Executive Club Rooms)',
      cleanReady: 28,
      inCleaning: 6,
      pendingDirty: 4,
      occupancy: '92%',
    },
    {
      floor: 'Floor 3 (Deluxe King Rooms)',
      cleanReady: 32,
      inCleaning: 8,
      pendingDirty: 6,
      occupancy: '89%',
    },
    {
      floor: 'Floor 4 (Deluxe Twin Rooms)',
      cleanReady: 30,
      inCleaning: 5,
      pendingDirty: 5,
      occupancy: '84%',
    },
    {
      floor: 'Floor 5 (Standard Rooms)',
      cleanReady: 34,
      inCleaning: 4,
      pendingDirty: 2,
      occupancy: '88%',
    },
  ],

  revenueOpportunities: [
    {
      id: 'rev-1',
      title: 'Automated Suite Upgrade Auction to High-Intent Arrivals',
      target: '34 Confirmed Deluxe King Guests',
      expectedLift: '₹84,000 / night',
      strategy: 'Release 6 unbooked Junior Suites for $65 upgrade bid 24h before arrival.',
    },
    {
      id: 'rev-2',
      title: 'Dynamic Late Checkout Monetization',
      target: '28 Sunday Departing Leisure Guests',
      expectedLift: '₹42,000 / weekend',
      strategy: 'Offer guaranteed 3:00 PM late checkout at $35 on non-incoming room tracks.',
    },
    {
      id: 'rev-3',
      title: 'Direct Rebooking Incentive on OTA Checkout Folios',
      target: '148 Weekly OTA Departures',
      expectedLift: '+18% Direct Shift',
      strategy:
        'Provide direct booking 15% credit code on digital folio email, bypassing 20% OTA commission.',
    },
  ],
};

export const HOTEL_JOURNEY_STEPS: HotelJourneyStep[] = [
  {
    stepNumber: '01',
    id: 'booking',
    title: 'Booking Channel Intake',
    stageName: 'Booking',
    subtitle: 'Omni-Channel Reservation & Rate Sync',
    traditionalDrag:
      'Reservations flood in across Booking.com, Expedia, GDS, and phone with mismatched rates, rate parity penalties, and unlinked guest notes.',
    aetherIntelligence:
      'Unified cognitive booking mesh synchronizes channel rates, detects overbooking risks, and captures unstructured guest requests instantly.',
    metricLabel: 'Channel Sync',
    metricValue: 'Sub-second GDS Sync',
    iconName: 'CalendarCheck',
  },
  {
    stepNumber: '02',
    id: 'occupancy',
    title: 'Occupancy Forecasting',
    stageName: 'Occupancy',
    subtitle: 'Dynamic Pace & Cancellation Prediction',
    traditionalDrag:
      'Revenue managers guess weekend occupancy using static historic tables, getting blindsided by last-minute group cancellations or sudden city surges.',
    aetherIntelligence:
      'Models flight schedules, local events, weather, and cancellation probabilities to forecast exact daily room category pace 14 days out.',
    metricLabel: 'Pace Accuracy',
    metricValue: '98.6% Forecast Precision',
    iconName: 'TrendingUp',
  },
  {
    stepNumber: '03',
    id: 'guest',
    title: 'Guest Profiling',
    stageName: 'Guest',
    subtitle: 'Unified VIP & Preference Intelligence',
    traditionalDrag:
      'Repeat guests arrive and must repeatedly ask for high-floor rooms, foam pillows, or quiet suites because notes are trapped in legacy PMS silos.',
    aetherIntelligence:
      'Builds a persistent, privacy-compliant cognitive guest dossier that automatically pre-assigns preferred rooms and stages personalized amenities.',
    metricLabel: 'Profile Match',
    metricValue: '100% Preference Recall',
    iconName: 'UserCheck',
  },
  {
    stepNumber: '04',
    id: 'operations',
    title: 'Room Operations',
    stageName: 'Operations',
    subtitle: 'Autonomous Housekeeping & Maintenance Dispatch',
    traditionalDrag:
      'Front desk calls housekeeping supervisor via walkie-talkies to check room readiness while guests wait 45+ minutes in crowded lobby queues.',
    aetherIntelligence:
      'Dynamically routes housekeeping attendants by arrival priority, guest check-in telemetry, and digital room departure signals in real time.',
    metricLabel: 'Turnover Speed',
    metricValue: '24min Average Turn',
    iconName: 'Sparkles',
  },
  {
    stepNumber: '05',
    id: 'experience',
    title: 'In-Stay Experience',
    stageName: 'Experience',
    subtitle: 'Digital Concierge & Contextual Upsell',
    traditionalDrag:
      'Guests must call room service or front desk for simple requests; hotel misses high-margin spa, dining, and late checkout upsells.',
    aetherIntelligence:
      'Autonomous mobile concierge resolves service requests in under 60 seconds and serves perfectly timed dining and upgrade invitations.',
    metricLabel: 'In-Stay Resolution',
    metricValue: '< 45s Response SLA',
    iconName: 'Coffee',
  },
  {
    stepNumber: '06',
    id: 'retention',
    title: 'Loyalty & Retention',
    stageName: 'Retention',
    subtitle: 'Direct Booking Shift & Post-Stay Engagement',
    traditionalDrag:
      'Guests check out with a printed paper invoice and rebook future stays through third-party OTAs, costing the hotel 20%+ in commissions.',
    aetherIntelligence:
      'Delivers seamless contactless digital checkouts, personalized thank-you folios, and direct booking incentives that convert OTA guests into direct bookers.',
    metricLabel: 'Direct Booking Shift',
    metricValue: '+34% Direct Retention',
    iconName: 'HeartHandshake',
  },
];

export const hotelIndustry: IndustryData = {
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
};
