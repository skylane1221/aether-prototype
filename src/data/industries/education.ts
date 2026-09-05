import { IndustryData } from '../../types';

export interface StudentInquiryProfile {
  id: string;
  studentName: string;
  avatarInitials: string;
  background:
    'Working Professional' | 'Recent Graduate' | 'Career Switcher' | 'Corporate Training Lead';
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

export const educationIndustry: IndustryData = {
  id: 'education',
  slug: 'education',
  name: 'Education & Training Centers',
  shortName: 'Education & Training',
  transformationStatement:
    'Student inquiry triage, automated credential verification, and LMS drop-off alerts.',
  tagline:
    'Student inquiry triage, automated admissions workflows, and predictive learner engagement monitoring.',
  description:
    'Aether transforms educational institutions and training academies by automating student admissions triage, personalizing enrollment pipelines, and flagging at-risk students.',
  accentColor: 'rose',
  iconName: 'GraduationCap',
  categoryFocus: ['Sales-focused', 'Customer-focused'],
  heroHeadline: 'Accelerate student admissions and ensure learner success.',
  heroSubheadline:
    'Transform slow admissions cycles into instantaneous student guidance and proactive academic engagement.',
  stats: [
    {
      label: 'Inquiry-to-App Speed',
      value: '4x faster',
      change: 'Target',
      detail: 'Simulated 24/7 advisor routing benchmark',
    },
    {
      label: 'Enrollment Yield',
      value: '+19.5%',
      change: 'Potential',
      detail: 'Illustrative course matching cohort',
    },
    {
      label: 'Course Completion Rate',
      value: '87%',
      change: 'Example',
      detail: 'Illustrative proactive intervention cohort',
    },
  ],
  challenges: [
    {
      id: 'edu-c1',
      problem: 'Slow Prospective Student Response',
      cause:
        'Admissions teams take 3–5 business days to answer prerequisite and tuition questions.',
      consequence:
        'Prospective learners lose interest and enroll with faster-responding competitor institutions.',
      severity: 'critical',
    },
    {
      id: 'edu-c2',
      problem: 'Manual Transcript & Prerequisite Verification',
      cause:
        'Staff spend hundreds of manual hours reviewing PDF transcripts, certificates, and ID documents.',
      consequence:
        'Admissions bottlenecks delay enrollment decisions by weeks, lowering matriculation yield.',
      severity: 'high',
    },
    {
      id: 'edu-c3',
      problem: 'Silent Student Dropout During Midterms',
      cause:
        'Students fall behind on assignments unnoticed until failing final exams or dropping out.',
      consequence:
        'Lower course completion rates and loss of tuition revenue from student withdrawals.',
      severity: 'moderate',
    },
  ],
  opportunities: [
    {
      problem: 'Admissions delays costing prospective student enrollment.',
      opportunity:
        '24/7 conversational student advisor providing instant syllabus and credential guidance.',
      potentialMultiplier: '4x faster inquiry response',
    },
    {
      problem: 'Manual document verification bottlenecks.',
      opportunity:
        'Cognitive document parser that validates transcripts and prerequisites in seconds.',
      potentialMultiplier: '82% faster application processing',
    },
    {
      problem: 'Unnoticed student engagement drop-off.',
      opportunity:
        'Continuous LMS telemetry alerting academic mentors to engagement anomalies early.',
      potentialMultiplier: '+22% course completion',
    },
  ],
  // 04 Aether Solutions (10 Specified Solutions for Education)
  solutionMappings: [
    {
      problem: 'Siloed Student Profiles & Fragmented Academic History',
      opportunity: 'Unified 360° student lifecycle profile',
      solution:
        'Student Intelligence: Aggregates academic transcripts, career goals, learning style preferences, and prerequisite completions into a unified dossier.',
      capabilityTag: 'Student Dossier',
    },
    {
      problem: 'Inbound Inquiry Overload & Slow Initial Contact',
      opportunity: 'Intelligent lead prioritization & instant triage',
      solution:
        'Admission Lead Intelligence: Ranks prospective student inquiries based on enrollment intent, credential readiness, and scholarship fit.',
      capabilityTag: 'Lead Prioritization',
    },
    {
      problem: 'Mismatched Student Goals & Ambiguous Inquiries',
      opportunity: 'Conversational requirement extraction engine',
      solution:
        'Requirement Understanding: Analyzes candidate career goals, schedule constraints, and skill baselines through natural conversational triage.',
      capabilityTag: 'Goal Diagnosis',
    },
    {
      problem: 'Course Catalog Confusion & Inappropriate Electives',
      opportunity: 'AI curriculum matching & prerequisite mapping',
      solution:
        'Course Matching: Recommends optimal degree programs, bootcamps, and elective specializations matching student career trajectories.',
      capabilityTag: 'Curriculum Match',
    },
    {
      problem: 'Delayed Outreach Causing Competitor Matriculation',
      opportunity: 'Multi-channel dynamic admissions sequences',
      solution:
        'Follow-up Automation: Dispatches personalized syllabus previews, scholarship assessments, and orientation bookings via WhatsApp and email.',
      capabilityTag: 'Admissions Outreach',
    },
    {
      problem: 'Low Student Discussion Participation & Forum Inactivity',
      opportunity: 'Gamified engagement triggers & mentor prompts',
      solution:
        'Engagement Intelligence: Monitors peer collaboration, lab completions, and forum queries to sustain active student participation.',
      capabilityTag: 'Engagement Engine',
    },
    {
      problem: 'Unnoticed Absenteeism & Missed Lecture Streaks',
      opportunity: 'Automated turnstile & virtual attendance tracking',
      solution:
        'Attendance Intelligence: Detects recurring lecture absences and dispatches supportive catch-up recordings and peer notes.',
      capabilityTag: 'Attendance Sync',
    },
    {
      problem: 'Midterm Dropouts & Unaddressed Academic Struggle',
      opportunity: 'Early warning dropout risk detection',
      solution:
        'Retention Intelligence: Identifies grade slips and assignment delays at Week 3, triggering faculty mentor office hour invitations.',
      capabilityTag: 'Retention Watchdog',
    },
    {
      problem: 'Manual Transcript Audits & Paper Enrollment Slips',
      opportunity: 'Cognitive transcript parsing & digital registration',
      solution:
        'Administrative Automation: Extracts GPA, prerequisite credits, and transfer approvals in seconds, eliminating manual registrar bottlenecks.',
      capabilityTag: 'Registrar Auto',
    },
    {
      problem: 'Lack of Program Cohort Analytics & Yield Visibility',
      opportunity: 'Institutional executive telemetry dashboard',
      solution:
        'Education Analytics: Delivers real-time telemetry on application-to-enrollment velocity, cohort completion rates, and alumni placement.',
      capabilityTag: 'Education Analytics',
    },
  ],
  workflowPipeline: {
    input: {
      source: 'Admissions Web Inquiry & Transcript Upload',
      details:
        'Prospective student uploaded undergraduate transcript for Master of Data Science program.',
      rawSignal: 'Candidate: Maya Lin. Prerequisite: Needs Linear Algebra & Python validation.',
    },
    intelligence: {
      diagnosis:
        'Prerequisites met with distinction (GPA: 3.82). High-intent candidate ready for fast-track enrollment.',
      metricScored: 'Admissions Compatibility: 98.2%',
    },
    recommendation: {
      actionProposed:
        'Fast-track application approval; send personalized scholarship offer and schedule advisor orientation.',
      confidence: '99.5% program fit',
    },
    action: {
      stepsExecuted: [
        'Parsed and validated transcript courses against program catalog',
        'Generated formal acceptance letter and tuition breakdown',
        'Dispatched congratulations SMS and digital enrollment portal link',
        'Scheduled 1-on-1 orientation call with Faculty Mentor',
      ],
      targetSystem: 'Student Information System (SIS) & CRM',
    },
    result: {
      outcome: 'Enrollment completed and tuition deposit secured in 12 minutes.',
      timeToImpact: '12 minutes',
    },
  },
  interactiveDemo: {
    scenarioTitle: 'Fast-Track Student Admissions & Transcript Verification',
    scenarioSubtitle:
      'Simulate Aether parsing an uploaded transcript and issuing an acceptance package in minutes.',
    simulatedSignal: {
      Applicant: 'Maya Lin (Master of Data Science)',
      SubmittedDocuments: 'Official Transcript (PDF), Resume, Prerequisite Sheet',
      ProgramPrerequisites: 'Linear Algebra (B+), Python Fundamentals (Pass)',
    },
    engineReasoning:
      'Prerequisites verified automatically. High-intent candidate fast-tracked for immediate enrollment.',
    automatedActions: [
      'Extracted academic course credits and verified grading criteria',
      'Validated prerequisite syllabus match against program guidelines',
      'Generated personalized admission offer and scholarship calculation',
      'Sent digital enrollment package with one-tap signature',
    ],
    verifiedOutcome:
      'Application processed and enrolled in 12 minutes vs industry average of 6 days.',
    executionDuration: '12 minutes',
  },
  businessIntelligence: {
    insights:
      'Students who receive admissions acceptance within 24 hours are 3.2x more likely to enroll.',
    predictions:
      'Spring term cybersecurity program enrollment projected to exceed target cap by 28%.',
    risks:
      'Week 4 drop-off risk flagged for students spending less than 3 hours on initial lab assignments.',
    opportunities:
      'Automating certificate graduation credentials can increase alumni referral rates by 18%.',
    recommendations:
      'Expand cybersecurity cohort capacity and trigger academic mentor check-ins at Week 3.',
  },
  businessImpact: {
    time: 'Saves admissions officers 15 hours per week in manual transcript reviews and prerequisite email queries.',
    efficiency:
      'Accelerates application-to-enrollment turnaround by 4x, securing top student talent before competitors.',
    customerExperience:
      'Prospective students receive instant, transparent answers to tuition, schedule, and career queries.',
    operations:
      'Centralizes student documents, financial aid paperwork, and orientation scheduling in one workflow.',
    decisionMaking:
      'Provides academic deans with accurate enrollment yield forecasts and retention risk metrics.',
    visibility:
      'Live telemetry displaying applicant pipeline velocity, LMS engagement indexes, and graduation tracking.',
  },
  additionalCapabilities: [
    {
      groupTitle: 'LMS & Student Information System Connectors',
      summary: 'Direct integration with Canvas, Blackboard, Moodle, and Banner.',
      features: [
        'Gradebook sync',
        'LMS login activity monitoring',
        'Automated course enrollment roster updates',
      ],
    },
    {
      groupTitle: 'Financial Aid & Tuition Workflow Mesh',
      summary: 'Automates payment plan setups, scholarship disbursement, and invoice reminders.',
      features: [
        'FAFSA document tracking',
        'Automated tuition payment schedules',
        'Scholarship eligibility matching',
      ],
    },
    {
      groupTitle: 'Career Placement & Alumni Network Engine',
      summary: 'Matches graduating students with employer job requisitions.',
      features: [
        'Automated resume formatting',
        'Employer interview scheduling',
        'Alumni mentoring connections',
      ],
    },
  ],
};

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
    {
      advisor: 'Dr. Sarah Lin (Data & AI)',
      inquiriesHandled: 142,
      responseTimeAvg: '< 3 mins',
      enrollmentYield: '34.2%',
      satisfaction: '98.5%',
    },
    {
      advisor: 'Marcus Brody (Cloud & DevOps)',
      inquiriesHandled: 168,
      responseTimeAvg: '< 4 mins',
      enrollmentYield: '31.0%',
      satisfaction: '97.2%',
    },
    {
      advisor: 'Priya Anand (Executive & L&D)',
      inquiriesHandled: 84,
      responseTimeAvg: '< 6 mins',
      enrollmentYield: '42.8%',
      satisfaction: '99.1%',
    },
    {
      advisor: 'James Taylor (Cyber & Security)',
      inquiriesHandled: 110,
      responseTimeAvg: '< 5 mins',
      enrollmentYield: '28.5%',
      satisfaction: '96.4%',
    },
  ],
};
