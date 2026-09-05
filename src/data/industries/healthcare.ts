import { IndustryData } from '../../types';

export interface ClinicAppointmentProfile {
  id: string;
  patientName: string;
  avatarInitials: string;
  appointmentTime: string;
  provider: string;
  department: string;
  visitType:
    | 'Specialist Consultation'
    | 'Follow-Up Review'
    | 'Pre-Procedure Check'
    | 'Routine Clinical Screen';
  noShowProbability: number; // 0 to 1
  noShowRiskLevel: 'High Risk' | 'Moderate Risk' | 'Low Risk';
  riskFactors: string[];
  intakeStatus: 'Pending Intake Form' | 'Intake Completed' | 'Fast-Track Check-In';
  recommendedReminder: {
    channel: 'WhatsApp' | 'SMS' | 'Interactive Voice';
    timing: string;
    messageContent: string;
    actionRequired: string;
  };
  followUpPlan: {
    recommendedAction: string;
    window: string;
    postVisitCoordination: string;
  };
}

export interface HealthcareBiData {
  capacityYield: {
    slotUtilization: string;
    traditionalUtilization: string;
    cancellationRecoverySpeed: string;
    monthlyRecoveredProviderHours: string;
  };
  noShowMetrics: {
    currentNoShowRate: string;
    baselineNoShowRate: string;
    highRiskInterceptionRate: string;
  };
  departmentEfficiency: {
    department: string;
    utilization: string;
    noShowRate: string;
    intakeCompletion: string;
    avgWaitTime: string;
  }[];
}

export const HEALTHCARE_APPOINTMENTS: ClinicAppointmentProfile[] = [
  {
    id: 'apt-1',
    patientName: 'Marcus Reed',
    avatarInitials: 'MR',
    appointmentTime: 'Tomorrow, 10:30 AM (Slot #4)',
    provider: 'Dr. Evelyn Vance, MD',
    department: 'Cardiology Outpatient Clinic',
    visitType: 'Specialist Consultation',
    noShowProbability: 0.74,
    noShowRiskLevel: 'High Risk',
    riskFactors: [
      '2 previous missed appointments in past 6 months',
      'Appointment booked >21 days in advance',
      'Pending digital intake questionnaire',
    ],
    intakeStatus: 'Pending Intake Form',
    recommendedReminder: {
      channel: 'WhatsApp',
      timing: 'Today at 2:00 PM (20 hrs prior)',
      messageContent:
        'Hi Marcus, confirming your appointment with Dr. Vance tomorrow at 10:30 AM at Cardiology Suite 3B. Please complete your 2-minute pre-visit check-in to hold your slot: clinic.aether.health/checkin/mr-902',
      actionRequired: 'Mandatory 1-tap confirmation + digital symptom check',
    },
    followUpPlan: {
      recommendedAction:
        'Schedule 30-day medication review and dispatch digital BP logging link post-consultation.',
      window: 'Post-consultation (+30 days)',
      postVisitCoordination: 'Automated ambulatory BP monitor pickup reminder.',
    },
  },
  {
    id: 'apt-2',
    patientName: 'Sarah Chen',
    avatarInitials: 'SC',
    appointmentTime: 'Tomorrow, 2:15 PM (Slot #8)',
    provider: 'Dr. Rajiv Nair, MD',
    department: 'Dermatology & Minor Procedures',
    visitType: 'Pre-Procedure Check',
    noShowProbability: 0.38,
    noShowRiskLevel: 'Moderate Risk',
    riskFactors: [
      'First-time visit to clinic location',
      'Requires pre-procedure skin prep instructions',
    ],
    intakeStatus: 'Pending Intake Form',
    recommendedReminder: {
      channel: 'SMS',
      timing: 'Today at 5:30 PM (21 hrs prior)',
      messageContent:
        'Hello Sarah, Dr. Nair is looking forward to your consultation tomorrow at 2:15 PM. Please review your pre-visit prep checklist and upload insurance card here: clinic.aether.health/prep/sc-441',
      actionRequired: 'Insurance card scan + pre-visit photo upload',
    },
    followUpPlan: {
      recommendedAction: 'Automated biopsy result review window allocation in 5 business days.',
      window: 'In 5 days (Lab sync)',
      postVisitCoordination: 'Secure pathology portal dispatch upon laboratory sign-off.',
    },
  },
  {
    id: 'apt-3',
    patientName: 'Robert Davis',
    avatarInitials: 'RD',
    appointmentTime: 'Thursday, 9:00 AM (Slot #1)',
    provider: 'Dr. Karen Mitchell, PT/DPT',
    department: 'Orthopedic Rehabilitation',
    visitType: 'Follow-Up Review',
    noShowProbability: 0.08,
    noShowRiskLevel: 'Low Risk',
    riskFactors: ['100% historical attendance rate', 'Digital intake on file'],
    intakeStatus: 'Intake Completed',
    recommendedReminder: {
      channel: 'SMS',
      timing: 'Wednesday at 4:00 PM (17 hrs prior)',
      messageContent:
        'Hi Robert, your physical therapy review with Dr. Mitchell is confirmed for Thursday at 9:00 AM. Free parking pass is attached: clinic.aether.health/pass/rd-102',
      actionRequired: 'Standard calendar reminder notification',
    },
    followUpPlan: {
      recommendedAction:
        'Coordinate Week 4 home mobility exercise evaluation and lock in next 3 rehabilitation sessions.',
      window: 'At check-out',
      postVisitCoordination: 'Multi-session recurring slot reservation on therapist roster.',
    },
  },
  {
    id: 'apt-4',
    patientName: 'Amina Patel',
    avatarInitials: 'AP',
    appointmentTime: 'Thursday, 11:45 AM (Slot #6)',
    provider: 'Dr. Tariq Al-Mansoor, MD',
    department: 'Pediatrics & Family Medicine',
    visitType: 'Routine Clinical Screen',
    noShowProbability: 0.52,
    noShowRiskLevel: 'Moderate Risk',
    riskFactors: [
      'Rescheduled twice due to work conflicts',
      'Requires child immunization record upload',
    ],
    intakeStatus: 'Pending Intake Form',
    recommendedReminder: {
      channel: 'WhatsApp',
      timing: 'Wednesday at 11:00 AM (24 hrs prior)',
      messageContent:
        'Hi Amina, confirming little Rayan’s wellness check with Dr. Tariq on Thursday at 11:45 AM. Tap here to confirm or switch to 3:30 PM if needed: clinic.aether.health/reschedule/ap-772',
      actionRequired: 'One-tap confirm or instant smart swap to afternoon slot',
    },
    followUpPlan: {
      recommendedAction:
        'Automated 6-month developmental milestone reminder and digital growth chart sync.',
      window: 'In 6 months',
      postVisitCoordination: 'Pediatric vaccination reminder trigger.',
    },
  },
];

export const HEALTHCARE_BI_DATA: HealthcareBiData = {
  capacityYield: {
    slotUtilization: '94.6%',
    traditionalUtilization: '72.0%',
    cancellationRecoverySpeed: '4.2 mins',
    monthlyRecoveredProviderHours: '142 hrs',
  },
  noShowMetrics: {
    currentNoShowRate: '3.4%',
    baselineNoShowRate: '18.8%',
    highRiskInterceptionRate: '86.2%',
  },
  departmentEfficiency: [
    {
      department: 'Cardiology Outpatient',
      utilization: '96%',
      noShowRate: '2.8%',
      intakeCompletion: '98%',
      avgWaitTime: '4.5 min',
    },
    {
      department: 'Orthopedics & PT',
      utilization: '95%',
      noShowRate: '3.1%',
      intakeCompletion: '94%',
      avgWaitTime: '3.8 min',
    },
    {
      department: 'Dermatology & Procedures',
      utilization: '93%',
      noShowRate: '4.2%',
      intakeCompletion: '91%',
      avgWaitTime: '6.0 min',
    },
    {
      department: 'Pediatrics & Family Care',
      utilization: '94%',
      noShowRate: '3.5%',
      intakeCompletion: '96%',
      avgWaitTime: '5.2 min',
    },
  ],
};

export const healthcareIndustry: IndustryData = {
  id: 'healthcare',
  slug: 'healthcare',
  name: 'Healthcare & Clinics',
  shortName: 'Healthcare & Clinics',
  transformationStatement:
    'Conversational patient intake, cancellation slot recovery, and pre-op reminders.',
  tagline:
    'Automated patient intake, smart cancellation backfills, and proactive pre-op instructions.',
  description:
    'Aether transforms outpatient clinics and medical practices by automating intake paperwork, filling last-minute cancellations, and ensuring patient adherence.',
  accentColor: 'cyan',
  iconName: 'Stethoscope',
  categoryFocus: ['Operations-focused', 'Customer-focused'],
  heroHeadline: 'Eliminate patient intake paperwork and unfilled clinic slots.',
  heroSubheadline:
    'Free clinical staff from administrative overload while improving patient care continuity and appointment attendance.',
  stats: [
    {
      label: 'Intake Admin Time',
      value: 'Up to -78%',
      change: 'Potential',
      detail: 'Simulated digital pre-visit intake savings',
    },
    {
      label: 'Unfilled Slot Recovery',
      value: 'Up to 84%',
      change: 'Illustrative',
      detail: 'Simulated waitlist backfill scenario',
    },
    {
      label: 'Patient No-Show Rate',
      value: '3.4%',
      change: 'Example',
      detail: 'Illustrative conversational prep cohort',
    },
  ],
  challenges: [
    {
      id: 'hc-c1',
      problem: 'Paper Intake Delays Clinical Start Times',
      cause:
        'Patients arrive and spend 15 minutes filling out paper clipboards with redundant medical histories.',
      consequence:
        'Physician appointments start late, causing cascading delays throughout the entire clinic day.',
      severity: 'critical',
    },
    {
      id: 'hc-c2',
      problem: 'Costly Provider Idle Time from Cancellations',
      cause:
        'Patients cancel appointments with less than 24 hours notice, leaving expensive physician slots empty.',
      consequence:
        'Practices lose $200–$500 per unfilled provider hour while backlogged patients wait weeks for care.',
      severity: 'high',
    },
    {
      id: 'hc-c3',
      problem: 'Day-of Procedure Cancellations',
      cause:
        'Patients fail to follow fasting, medication hold, or transportation instructions before procedures.',
      consequence:
        'Operating suites sit idle, wasting thousands in facility fees and clinical team prep time.',
      severity: 'moderate',
    },
  ],
  opportunities: [
    {
      problem: 'Paper-based intake bottlenecks at reception.',
      opportunity:
        'Conversational pre-visit questionnaire syncing structured data directly to EHR.',
      potentialMultiplier: '78% less intake admin time',
    },
    {
      problem: 'Late appointment cancellations leaving providers idle.',
      opportunity: 'Autonomous waitlist matching that backfills open slots in under 5 minutes.',
      potentialMultiplier: '84% recovered open slots',
    },
    {
      problem: 'Procedure cancellations from poor patient preparation.',
      opportunity: 'Interactive step-by-step preparation briefings with confirmation checkpoints.',
      potentialMultiplier: '91% fewer prep cancellations',
    },
  ],
  // 04 Aether Solutions (8 Specified Solutions for Healthcare)
  solutionMappings: [
    {
      problem: 'Siloed Patient Booking & Waitlist Fragmentation',
      opportunity: 'Unified multi-channel booking orchestration',
      solution:
        'Appointment Intelligence: Dynamically schedules, triages, and reconciles patient appointment slots across clinical specialties and provider calendars.',
      capabilityTag: 'Appointment Engine',
    },
    {
      problem: 'Costly Unfilled Provider Idle Slots & Late Drop-Offs',
      opportunity: 'ML attendance risk scoring & waitlist backfills',
      solution:
        'No-Show Prediction: Forecasts appointment attendance risk (0–100%) and triggers automated standby slot backfills within minutes of cancellation.',
      capabilityTag: 'No-Show AI',
    },
    {
      problem: 'Missed Patient Appointments & Prep Failures',
      opportunity: 'Conversational multi-channel prep checkpoints',
      solution:
        'Automated Reminders: Dispatches personalized WhatsApp/SMS pre-visit briefings with 1-tap confirmations and digital directions.',
      capabilityTag: 'Reminders & Prep',
    },
    {
      problem: 'Disjointed Post-Consultation Adherence & Reviews',
      opportunity: 'Automated post-discharge care coordination',
      solution:
        'Follow-up Management: Coordinates post-visit check-ins, medication adherence prompts, and specialist review scheduling.',
      capabilityTag: 'Care Continuity',
    },
    {
      problem: 'Cascading Clinic Delays & Schedule Conflicts',
      opportunity: 'Dynamic slot duration & provider pacing',
      solution:
        'Scheduling Intelligence: Analyzes provider consultation velocity to dynamically space appointment windows and eliminate waiting room congestion.',
      capabilityTag: 'Smart Scheduling',
    },
    {
      problem: 'Repetitive Paper Clipboard Intake & Redundant Entry',
      opportunity: 'Autonomous EHR-synchronized intake ingestion',
      solution:
        'Administrative Workflow Automation: Ingests digital intake questionnaires, verifies insurance coverage, and populates EHR records before arrival.',
      capabilityTag: 'Admin Automation',
    },
    {
      problem: 'Sub-Optimal Room & Equipment Utilization',
      opportunity: 'Real-time clinic capacity load balancing',
      solution:
        'Capacity Intelligence: Balances examination room assignments, diagnostic equipment slots, and nursing staff availability in real time.',
      capabilityTag: 'Capacity Optimizer',
    },
    {
      problem: 'Lack of Administrative Visibility & Billing Leakage',
      opportunity: 'Clinic-wide operational performance telemetry',
      solution:
        'Operational Analytics: Tracks patient throughput velocity, provider utilization yield, wait times, and administrative turnaround metrics.',
      capabilityTag: 'Clinic Analytics',
    },
  ],
  workflowPipeline: {
    input: {
      source: 'Clinic EHR Scheduling Telemetry',
      details: 'Specialist Dr. Patel has a 45-minute cancellation for tomorrow at 10:30 AM.',
      rawSignal: 'Cancellation: Cardiology follow-up slot open. Waitlist: 12 patients queued.',
    },
    intelligence: {
      diagnosis:
        'High-value provider idle time diagnosed. Patient "Robert Torres" has urgent referral and requested morning slot.',
      metricScored: 'Waitlist Match Confidence: 97.6%',
    },
    recommendation: {
      actionProposed:
        'Dispatch SMS slot claim link to Robert Torres with 15-minute response window.',
      confidence: '98.2% acceptance probability',
    },
    action: {
      stepsExecuted: [
        'Sent conversational SMS to Robert Torres offering 10:30 AM slot',
        'Robert confirmed via one-tap link in 3 minutes',
        'Slot locked in EHR and pre-visit intake link dispatched',
        'Sent confirmation and parking instructions',
      ],
      targetSystem: 'EHR Schedule & HIPAA-Compliant SMS',
    },
    result: {
      outcome:
        '$350 provider slot preserved; patient received care 2 weeks ahead of original schedule.',
      timeToImpact: '3 minutes',
    },
  },
  interactiveDemo: {
    scenarioTitle: 'Specialist Cancellation Slot Recovery & Patient Intake',
    scenarioSubtitle:
      'Simulate Aether backfilling an open cardiology slot and gathering intake data in 3 minutes.',
    simulatedSignal: {
      Provider: 'Dr. Patel (Cardiology)',
      OpenSlot: 'Tomorrow 10:30 AM (Cancellation)',
      QueuedPatient: 'Robert Torres (Urgent referral on waitlist)',
    },
    engineReasoning:
      'Provider idle time diagnosed. Autonomous waitlist matching and clinical intake dispatched.',
    automatedActions: [
      'Detected open slot and matched patient clinical urgency score',
      'Sent automated HIPAA-compliant SMS invitation with one-tap accept',
      'Patient confirmed appointment; schedule locked in EHR',
      'Dispatched conversational intake form for symptom history',
    ],
    verifiedOutcome: 'Slot filled within 3 minutes; clinical intake completed prior to arrival.',
    executionDuration: '3 minutes',
  },
  businessIntelligence: {
    insights:
      'Patients who complete digital intake beforehand have a 96% on-time consultation rate.',
    predictions:
      'Flu season surge expected to increase pediatric clinic visit volume by 40% over next 3 weeks.',
    risks:
      'MRI scanner utilization dropping to 60% on Friday afternoons due to high late cancellation rate.',
    opportunities:
      'Automating insurance pre-authorizations can accelerate procedure scheduling by 6 business days.',
    recommendations:
      'Activate 48-hour MRI confirmation checkpoints and pre-stage intake for high-volume morning clinics.',
  },
  businessImpact: {
    time: 'Saves medical receptionists 12 hours per week in phone scheduling, intake transcription, and reminder calls.',
    efficiency:
      'Recovers 84% of dropped appointment slots, maximizing provider productivity and billable encounters.',
    customerExperience:
      'Patients bypass waiting room clipboards and experience respectful, on-time consultations.',
    operations:
      'Reduces physician charting overtime by providing structured pre-digested patient intake summaries.',
    decisionMaking:
      'Provides clinic directors with clear analytics on no-show trends, provider utilization, and waitlist demand.',
    visibility:
      'Live telemetry displaying provider schedules, room status, and patient intake completion rates.',
  },
  additionalCapabilities: [
    {
      groupTitle: 'EHR & Practice Management Connectors',
      summary: 'HIPAA-compliant integration with Epic, Cerner, AthenaHealth, and Kareo.',
      features: [
        'Structured CCDA note export',
        'Real-time appointment slot sync',
        'Insurance eligibility verification',
      ],
    },
    {
      groupTitle: 'Clinical Protocol & Triage Mesh',
      summary: 'Customizable specialty-specific intake workflows and triage questionnaires.',
      features: [
        'Symptom severity scoring',
        'Medication allergy checks',
        'Digital consent signature capture',
      ],
    },
    {
      groupTitle: 'Post-Visit Care & Adherence Engine',
      summary: 'Automates follow-up check-ins, medication refills, and satisfaction surveys.',
      features: [
        'Post-discharge check-ins',
        'Medication adherence prompts',
        'Automated referral tracking',
      ],
    },
  ],
};
