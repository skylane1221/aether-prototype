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
      requiredItems: ['OEM Front Brake Rotors (Pair)', 'Ceramic Brake Pads', 'Sensor Wire', 'High-Flow Air Filter'],
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
      requiredItems: ['Hyundai ATF SP-IV (6L)', 'Long-Life Coolant (4L)', 'Serpentine Belt', 'Oil Filter Kit'],
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
    { name: 'Dan R. (BMW Master Tech)', specialty: 'German Diagnostics & Engine', bay: 'Lift #4', flagHourEfficiency: '124%', roCompletedMonth: 48 },
    { name: 'Sanjay K. (Express Lead)', specialty: 'Quick Lube & Periodic Service', bay: 'Express #2', flagHourEfficiency: '138%', roCompletedMonth: 72 },
    { name: 'Farhan A. (Drivetrain Tech)', specialty: 'Transmission, Diesel & Flushes', bay: 'Lift #1', flagHourEfficiency: '118%', roCompletedMonth: 42 },
    { name: 'Karan S. (4x4 & SUV Specialist)', specialty: 'Suspension & Fleet Drivetrain', bay: 'Lift #5', flagHourEfficiency: '122%', roCompletedMonth: 44 },
  ],
  partsAvailability: {
    onHandFulfillmentRate: '98.2%',
    preBookingAllocationRate: '96.5%',
    averagePartsHoldHours: '0.4 hrs (vs 14.2 hrs traditional)',
  },
};
