export interface ClinicAppointmentProfile {
  id: string;
  patientName: string;
  avatarInitials: string;
  appointmentTime: string;
  provider: string;
  department: string;
  visitType: 'Specialist Consultation' | 'Follow-Up Review' | 'Pre-Procedure Check' | 'Routine Clinical Screen';
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
      recommendedAction: 'Schedule 30-day medication review and dispatch digital BP logging link post-consultation.',
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
      recommendedAction: 'Coordinate Week 4 home mobility exercise evaluation and lock in next 3 rehabilitation sessions.',
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
      recommendedAction: 'Automated 6-month developmental milestone reminder and digital growth chart sync.',
      window: 'In 6 months',
      postVisitCoordination: 'Pediatric vaccination reminder trigger.',
    },
  },
];

export const HEALTHCARE_BI_DATA = {
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
    { department: 'Cardiology Outpatient', utilization: '96%', noShowRate: '2.8%', intakeCompletion: '98%', avgWaitTime: '4.5 min' },
    { department: 'Orthopedics & PT', utilization: '95%', noShowRate: '3.1%', intakeCompletion: '94%', avgWaitTime: '3.8 min' },
    { department: 'Dermatology & Procedures', utilization: '93%', noShowRate: '4.2%', intakeCompletion: '91%', avgWaitTime: '6.0 min' },
    { department: 'Pediatrics & Family Care', utilization: '94%', noShowRate: '3.5%', intakeCompletion: '96%', avgWaitTime: '5.2 min' },
  ],
};
