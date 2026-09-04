export interface StudentInquiryProfile {
  id: string;
  studentName: string;
  avatarInitials: string;
  background: 'Working Professional' | 'Recent Graduate' | 'Career Switcher' | 'Corporate Training Lead';
  inquiryChannel: 'Web Form' | 'WhatsApp Inbound' | 'LinkedIn Campaign' | 'Campus Walk-In';
  targetProgram: string;
  targetDegree: string;
  leadPriorityScore: number; // 0 to 100
  priorityTier: 'High Priority (Immediate Action)' | 'Warm Candidate' | 'Nurture Stream';
  requirements: {
    formatPreference: string;
    budgetOrScholarship: string;
    timeline: string;
    currentSkillBaseline: string;
  };
  matchedCourses: {
    courseTitle: string;
    matchScore: string;
    duration: string;
    cohortStart: string;
    prerequisiteStatus: string;
  }[];
  recommendedFollowUp: {
    channel: 'WhatsApp' | 'Email + Calendar Invite' | 'Direct Advisor Phone Call';
    timing: string;
    headline: string;
    messageScript: string;
    actionCTA: string;
  };
}

export const EDUCATION_INQUIRIES: StudentInquiryProfile[] = [
  {
    id: 'inq-1',
    studentName: 'Maya Lin',
    avatarInitials: 'ML',
    background: 'Career Switcher',
    inquiryChannel: 'Web Form',
    targetProgram: 'Master of Applied Data Science & AI',
    targetDegree: 'Executive Master of Science',
    leadPriorityScore: 94,
    priorityTier: 'High Priority (Immediate Action)',
    requirements: {
      formatPreference: 'Hybrid Weekend Cohort (Working Friendly)',
      budgetOrScholarship: 'Seeking Women in Tech Merit Scholarship ($4,000)',
      timeline: 'Immediate Fall Cohort (Starts in 4 weeks)',
      currentSkillBaseline: '3 years Software QA; basic Python, wants Deep Learning & MLOps',
    },
    matchedCourses: [
      {
        courseTitle: 'Master of Applied Data Science & AI (Cohort 18)',
        matchScore: '98.5% Curriculum Fit',
        duration: '12 Months (Part-Time Weekend)',
        cohortStart: 'October 15, 2026',
        prerequisiteStatus: 'Prerequisites Verified (Python & Stats)',
      },
      {
        courseTitle: 'Advanced MLOps & Production LLM Engineering',
        matchScore: '91.0% Specialization Fit',
        duration: '16 Weeks (Modular)',
        cohortStart: 'November 01, 2026',
        prerequisiteStatus: 'Prerequisites Met',
      },
    ],
    recommendedFollowUp: {
      channel: 'WhatsApp',
      timing: 'Instant Auto-Trigger (within 2 minutes of submission)',
      headline: 'Maya, your Data Science syllabus & $4,000 scholarship eligibility review',
      messageScript:
        'Hi Maya! We reviewed your software background—you meet the direct fast-track criteria for our Fall Data Science & AI cohort. We’ve also pre-evaluated your eligibility for the $4,000 Merit Scholarship. Tap to review your custom syllabus and reserve a 10-minute slot with Program Director Dr. Aris: edu.aether.academy/admit/maya-lin',
      actionCTA: 'Fast-Track Application + 1-on-1 Academic Director Consultation',
    },
  },
  {
    id: 'inq-2',
    studentName: 'Arjun Mehta',
    avatarInitials: 'AM',
    background: 'Recent Graduate',
    inquiryChannel: 'WhatsApp Inbound',
    targetProgram: 'Full-Stack Cloud & DevOps Engineering Bootcamp',
    targetDegree: 'Professional Industry Certification',
    leadPriorityScore: 88,
    priorityTier: 'High Priority (Immediate Action)',
    requirements: {
      formatPreference: 'Full-Time Immersive (In-Person / Lab)',
      budgetOrScholarship: 'Income Share Agreement (ISA) / Deferred Tuition',
      timeline: 'Next Available Batch',
      currentSkillBaseline: 'B.Sc Computer Science 2026 graduate; strong algorithms, needs AWS/K8s',
    },
    matchedCourses: [
      {
        courseTitle: 'Cloud Native DevOps & Kubernetes Masterclass',
        matchScore: '96.2% Career Goal Fit',
        duration: '24 Weeks (Full-Time Immersive)',
        cohortStart: 'September 28, 2026',
        prerequisiteStatus: 'Prerequisites Passed (Computer Science Degree)',
      },
    ],
    recommendedFollowUp: {
      channel: 'WhatsApp',
      timing: 'Within 5 minutes',
      headline: 'Arjun, your DevOps placement report & ISA tuition plan',
      messageScript:
        'Hi Arjun! Congratulations on your CS graduation. Our upcoming Cloud & DevOps immersive cohort starts Sept 28 with 96% placement rate at top tech firms. We’ve approved your profile for zero-upfront deferred tuition. Access your cohort brochure & lab tour pass: edu.aether.academy/admit/arjun-devops',
      actionCTA: 'Lab Tour Pass & Deferred Tuition Application',
    },
  },
  {
    id: 'inq-3',
    studentName: 'Elena Gomez',
    avatarInitials: 'EG',
    background: 'Corporate Training Lead',
    inquiryChannel: 'LinkedIn Campaign',
    targetProgram: 'Enterprise Generative AI & Automation for Managers',
    targetDegree: 'Corporate Executive Certificate',
    leadPriorityScore: 76,
    priorityTier: 'Warm Candidate',
    requirements: {
      formatPreference: 'Private Corporate Cohort (15-25 Product Managers)',
      budgetOrScholarship: 'Corporate L&D Budget Approval ($35,000 total batch)',
      timeline: 'Q4 2026 Corporate Rollout',
      currentSkillBaseline: 'Enterprise product managers seeking non-technical AI workflow mastery',
    },
    matchedCourses: [
      {
        courseTitle: 'Enterprise GenAI Architecture for Product Leaders',
        matchScore: '99.0% Corporate L&D Fit',
        duration: '6 Weeks (Custom Corporate Masterclass)',
        cohortStart: 'Custom Date (Nov 2026)',
        prerequisiteStatus: 'Executive Level Tailoring Included',
      },
    ],
    recommendedFollowUp: {
      channel: 'Email + Calendar Invite',
      timing: 'Today at 3:00 PM',
      headline: 'Custom Enterprise AI Curriculum & Proposal for Elena Gomez',
      messageScript:
        'Dear Elena, thank you for reaching out regarding executive AI upskilling for your 20-person product management group. We have generated a modular 6-week corporate syllabus including hands-on automation sandbox exercises and enterprise ROI frameworks. Let’s schedule a 15-minute briefing with our Enterprise Dean: edu.aether.academy/enterprise/elena-gomez',
      actionCTA: 'Download Custom Corporate Proposal + Schedule Dean Briefing',
    },
  },
  {
    id: 'inq-4',
    studentName: 'David O’Connor',
    avatarInitials: 'DO',
    background: 'Working Professional',
    inquiryChannel: 'Web Form',
    targetProgram: 'Cybersecurity & Zero-Trust Defense Certificate',
    targetDegree: 'Postgraduate Certificate',
    leadPriorityScore: 58,
    priorityTier: 'Nurture Stream',
    requirements: {
      formatPreference: 'Self-Paced Online with Weekly Mentor Office Hours',
      budgetOrScholarship: 'Comparing with competitor programs',
      timeline: 'Early Next Year (Jan 2027)',
      currentSkillBaseline: 'Network Administrator with CompTIA Security+',
    },
    matchedCourses: [
      {
        courseTitle: 'Cybersecurity Defense & Zero-Trust Engineering',
        matchScore: '89.4% Skill Alignment',
        duration: '9 Months (Self-Paced + Mentor)',
        cohortStart: 'Rolling Admissions / Jan 2027',
        prerequisiteStatus: 'CompTIA Security+ Credential Verified',
      },
    ],
    recommendedFollowUp: {
      channel: 'Email + Calendar Invite',
      timing: 'Scheduled Nurture Trigger (Day 2 at 10:00 AM)',
      headline: 'David, live SOC simulation invite & cybersecurity career blueprint',
      messageScript:
        'Hi David, we saw you are exploring advanced Zero-Trust certification for next year. We invite you as a guest to this Thursday’s live virtual SOC incident defense simulation to experience our hands-on cyber range firsthand: edu.aether.academy/webinar/cyber-defense-sim',
      actionCTA: 'Reserve Free Cyber Range Guest Seat',
    },
  },
];

export const EDUCATION_BI_DATA = {
  admissionsYield: {
    inquiryToEnrollmentTurnaround: '1.4 Days',
    traditionalAverage: '14.8 Days',
    leadConversionRate: '24.8%',
    traditionalLeadConversion: '8.2%',
  },
  retentionWatchdog: {
    onTimeCourseCompletionRate: '89.4%',
    earlyInterventionSuccess: '92.1%',
    atRiskStudentsRecovered: '418 Learners',
  },
  counselorPerformance: [
    { advisor: 'Dr. Sarah Lin (Data & AI)', inquiriesHandled: 142, responseTimeAvg: '< 3 mins', enrollmentYield: '34.2%', satisfaction: '98.5%' },
    { advisor: 'Marcus Brody (Cloud & DevOps)', inquiriesHandled: 168, responseTimeAvg: '< 4 mins', enrollmentYield: '31.0%', satisfaction: '97.2%' },
    { advisor: 'Priya Anand (Executive & L&D)', inquiriesHandled: 84, responseTimeAvg: '< 6 mins', enrollmentYield: '42.8%', satisfaction: '99.1%' },
    { advisor: 'James Taylor (Cyber & Security)', inquiriesHandled: 110, responseTimeAvg: '< 5 mins', enrollmentYield: '28.5%', satisfaction: '96.4%' },
  ],
};
