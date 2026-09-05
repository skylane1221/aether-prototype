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

export interface HotelBiMetricData {
  occupancyRate: string;
  revPar: string;
  adr: string;
  directBookingShare: string;
  housekeepingTurnoverTime: string;
  guestSatisfactionScore: string;
}

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
