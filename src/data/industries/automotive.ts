import { IndustryData } from '../../types';

export interface VehicleServiceProfile {
  id: string;
  vehicleName: string;
  vinNumber: string;
  ownerName: string;
  avatarInitials: string;
  currentMileageKm: number;
  lastServiceDate: string;
  lastServiceKm: number;
  serviceHistory: {
    date: string;
    mileageKm: number;
    jobDescription: string;
    technician: string;
    cost: string;
    partsReplaced: string[];
  }[];
  upcomingServiceRecommended: string;
  mileageIntervalDue: number;
  urgencyLevel: 'Overdue Maintenance' | 'Service Imminent' | 'Routine Cycle';
  maintenanceRecommendations: string[];
  partsReadiness: {
    status: 'In Stock' | 'Allocated from Warehouse' | 'Order Triggered';
    requiredItems: string[];
    bayRequirement: string;
    assignedTechCert: string;
  };
  customerReminder: {
    channel: 'WhatsApp' | 'SMS';
    headline: string;
    messageContent: string;
  };
  recommendedAppointmentSlot: string;
}

export const automotiveIndustry: IndustryData = {
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
    verifiedOutcome: 'Zero parts delay hold-overs; repair completed 45 minutes ahead of schedule.',
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
};

export const AUTOMOTIVE_VEHICLES: VehicleServiceProfile[] = [
  {
    id: 'veh-1',
    vehicleName: '2021 BMW 330i M Sport',
    vinNumber: 'WBA5R1C58MFA90124',
    ownerName: 'Vikram Malhotra',
    avatarInitials: 'VM',
    currentMileageKm: 46800,
    lastServiceDate: '6 months ago (Oct 14)',
    lastServiceKm: 38200,
    serviceHistory: [
      {
        date: 'Oct 14',
        mileageKm: 38200,
        jobDescription: 'Intermediate Oil Service + Microfilter & Cabin Filter Replacement',
        technician: 'Dan (Master Diagnostic Tech)',
        cost: '₹18,500',
        partsReplaced: ['TwinPower 0W-30 Oil', 'OEM Microfilter', 'Oil Filter Cartridge'],
      },
      {
        date: 'Mar 20',
        mileageKm: 28500,
        jobDescription: 'Brake Fluid Flush + Multi-Point Digital Inspection',
        technician: 'Dan (Master Diagnostic Tech)',
        cost: '₹12,400',
        partsReplaced: ['DOT 4 Brake Fluid', 'Wiper Blade Inserts'],
      },
    ],
    upcomingServiceRecommended: '45,000 km Major Service + Front Ceramic Brake Pads & Rotors',
    mileageIntervalDue: 45000,
    urgencyLevel: 'Overdue Maintenance',
    maintenanceRecommendations: [
      'Front brake pad sensor triggered (3mm lining remaining)',
      'Engine air intake filter replacement',
      'Spark plug inspection & diagnostic fault code clear',
    ],
    partsReadiness: {
      status: 'In Stock',
      requiredItems: [
        'OEM Front Brake Rotors (Pair)',
        'Ceramic Brake Pads',
        'Sensor Wire',
        'High-Flow Air Filter',
      ],
      bayRequirement: 'Lift Bay #4 (Heavy Mechanical)',
      assignedTechCert: 'BMW Master Certified (Dan R.)',
    },
    customerReminder: {
      channel: 'WhatsApp',
      headline: 'Vikram, 45,000 km service & brake health alert for your BMW 330i',
      messageContent:
        'Hi Vikram, your BMW 330i (Reg #MH02-DX-4491) has crossed 46,800 km and is due for its 45k major service. Front brake pads are at 3mm wear. We have OEM parts reserved in Bay 4 for this Thursday at 9:30 AM with complimentary loaner car. Tap to confirm: auto.aether.service/book/vm-330i',
    },
    recommendedAppointmentSlot: 'Thursday 9:30 AM (Lift Bay #4 - Master Tech Dan)',
  },
  {
    id: 'veh-2',
    vehicleName: '2022 Honda City ZX CVT',
    vinNumber: 'MAKGM6687NZ103982',
    ownerName: 'Pooja Iyer',
    avatarInitials: 'PI',
    currentMileageKm: 29800,
    lastServiceDate: '5 months ago (Nov 08)',
    lastServiceKm: 20100,
    serviceHistory: [
      {
        date: 'Nov 08',
        mileageKm: 20100,
        jobDescription: '20k Routine Periodic Maintenance + Wheel Alignment & Balancing',
        technician: 'Sanjay (Express Service Lead)',
        cost: '₹7,200',
        partsReplaced: ['Honda Synthetic 0W-20', 'Engine Oil Filter', 'Washer Fluid'],
      },
    ],
    upcomingServiceRecommended: '30,000 km Periodic Service + AC Evaporator Foam Treatment',
    mileageIntervalDue: 30000,
    urgencyLevel: 'Service Imminent',
    maintenanceRecommendations: [
      'Synthetic engine oil & drain plug washer renewal',
      'AC cabin pollen filter replacement',
      'Brake caliper slide lubrication & tire rotation',
    ],
    partsReadiness: {
      status: 'In Stock',
      requiredItems: ['Honda 0W-20 Synthetic 4L', 'Oil Filter Element', 'OEM Carbon AC Filter'],
      bayRequirement: 'Express Bay #2 (60-Min Quick Turn)',
      assignedTechCert: 'Honda Certified Specialist (Sanjay K.)',
    },
    customerReminder: {
      channel: 'WhatsApp',
      headline: 'Pooja, 30k periodic service due for Honda City',
      messageContent:
        'Hi Pooja! Your Honda City is approaching its 30,000 km milestone. Book our 60-Minute Express Service for Saturday morning (10:00 AM) and enjoy high-speed turnaround while you relax in our lounge: auto.aether.service/book/pi-city',
    },
    recommendedAppointmentSlot: 'Saturday 10:00 AM (Express Bay #2 - Sanjay K.)',
  },
  {
    id: 'veh-3',
    vehicleName: '2020 Hyundai Creta SX(O) Diesel',
    vinNumber: 'MALC381CLMM884210',
    ownerName: 'Rajesh Khanna',
    avatarInitials: 'RK',
    currentMileageKm: 61400,
    lastServiceDate: '7 months ago (Sep 18)',
    lastServiceKm: 50400,
    serviceHistory: [
      {
        date: 'Sep 18',
        mileageKm: 50400,
        jobDescription: '50k Periodic Service + Diesel Fuel Filter Replacement',
        technician: 'Farhan (Diesel Diagnostics)',
        cost: '₹14,200',
        partsReplaced: ['Hyundai C2 5W-30 Diesel Oil', 'Cartridge Fuel Filter', 'Air Filter'],
      },
    ],
    upcomingServiceRecommended: '60,000 km Major Service + Transmission Fluid & Coolant Flush',
    mileageIntervalDue: 60000,
    urgencyLevel: 'Overdue Maintenance',
    maintenanceRecommendations: [
      'Automatic transmission fluid exchange (ATF SP-IV)',
      'Radiator long-life coolant drain and refill',
      'Serpentine drive belt inspection for micro-cracks',
    ],
    partsReadiness: {
      status: 'Allocated from Warehouse',
      requiredItems: [
        'Hyundai ATF SP-IV (6L)',
        'Long-Life Coolant (4L)',
        'Serpentine Belt',
        'Oil Filter Kit',
      ],
      bayRequirement: 'Lift Bay #1 (Fluid & Flush Rig)',
      assignedTechCert: 'Senior Drivetrain Specialist (Farhan A.)',
    },
    customerReminder: {
      channel: 'SMS',
      headline: 'Rajesh, critical 60,000 km major service alert for Creta Diesel',
      messageContent:
        'Dear Rajesh, your Creta Diesel has completed 61,400 km. The 60k transmission fluid and coolant service is due to prevent drivetrain wear. Reserve your bay for Friday 11:00 AM: auto.aether.service/book/rk-creta',
    },
    recommendedAppointmentSlot: 'Friday 11:00 AM (Lift Bay #1 - Farhan A.)',
  },
  {
    id: 'veh-4',
    vehicleName: '2023 Toyota Fortuner 4x4 AT',
    vinNumber: 'MBJA43C88PA002341',
    ownerName: 'Aditya Birla Group Fleet',
    avatarInitials: 'AB',
    currentMileageKm: 19400,
    lastServiceDate: '4 months ago (Dec 02)',
    lastServiceKm: 10200,
    serviceHistory: [
      {
        date: 'Dec 02',
        mileageKm: 10200,
        jobDescription: '10k Routine Inspection + Oil & Filter Change',
        technician: 'Karan (Fleet Master Tech)',
        cost: '₹9,800',
        partsReplaced: ['Toyota Genuine 5W-30', 'Oil Filter', 'Gasket'],
      },
    ],
    upcomingServiceRecommended: '20,000 km Periodic Inspection + 4WD Differential Oil Check',
    mileageIntervalDue: 20000,
    urgencyLevel: 'Routine Cycle',
    maintenanceRecommendations: [
      'Front and rear differential fluid level and viscosity check',
      'Propeller shaft universal joint greasing',
      'Underbody torquing and off-road protection shield inspection',
    ],
    partsReadiness: {
      status: 'In Stock',
      requiredItems: ['Toyota 5W-30 Synthetic', 'Oil Filter Element', 'Differential Gear Oil GL-5'],
      bayRequirement: 'Heavy Truck/SUV Lift Bay #5',
      assignedTechCert: 'Master 4x4 Fleet Specialist (Karan S.)',
    },
    customerReminder: {
      channel: 'WhatsApp',
      headline: 'Aditya Fleet Desk: 20,000 km scheduled maintenance for Fortuner MH-04-EK-9020',
      messageContent:
        'Hello Fleet Operations Team, Fortuner MH-04-EK-9020 is at 19,400 km and due for its 20k drivetrain check. Bay 5 is held for corporate drop-off next Monday at 8:30 AM: auto.aether.service/fleet/ab-9020',
    },
    recommendedAppointmentSlot: 'Monday 8:30 AM (Heavy Lift Bay #5 - Karan S.)',
  },
];

export const AUTOMOTIVE_BI_DATA = {
  bayCapacity: {
    averageBayUtilization: '92.4%',
    traditionalAverage: '68.5%',
    dailyCompletedROs: '38 Vehicles',
    partsHoldOverReduction: '-74%',
  },
  technicianEfficiency: [
    {
      name: 'Dan R. (BMW Master Tech)',
      specialty: 'German Diagnostics & Engine',
      bay: 'Lift #4',
      flagHourEfficiency: '124%',
      roCompletedMonth: 48,
    },
    {
      name: 'Sanjay K. (Express Lead)',
      specialty: 'Quick Lube & Periodic Service',
      bay: 'Express #2',
      flagHourEfficiency: '138%',
      roCompletedMonth: 72,
    },
    {
      name: 'Farhan A. (Drivetrain Tech)',
      specialty: 'Transmission, Diesel & Flushes',
      bay: 'Lift #1',
      flagHourEfficiency: '118%',
      roCompletedMonth: 42,
    },
    {
      name: 'Karan S. (4x4 & SUV Specialist)',
      specialty: 'Suspension & Fleet Drivetrain',
      bay: 'Lift #5',
      flagHourEfficiency: '122%',
      roCompletedMonth: 44,
    },
  ],
  partsAvailability: {
    onHandFulfillmentRate: '98.2%',
    preBookingAllocationRate: '96.5%',
    averagePartsHoldHours: '0.4 hrs (vs 14.2 hrs traditional)',
  },
};
