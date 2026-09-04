export type IndustryThemeColor =
  | 'cyan'
  | 'emerald'
  | 'amber'
  | 'violet'
  | 'rose'
  | 'sky'
  | 'teal'
  | 'indigo'
  | 'slate';

export type IndustryFocusCategory =
  | 'Customer-focused'
  | 'Operations-focused'
  | 'Sales-focused'
  | 'Intelligence-heavy';

export interface ProblemTransformation {
  id: string;
  title: string;
  traditionalPain: string;
  aetherTransformation: string;
  efficiencyGain: string;
  severity: 'critical' | 'high' | 'moderate';
}

export interface WorkflowStep {
  stepNumber: number;
  phase: 'Signal Ingestion' | 'Cognitive Diagnosis' | 'Autonomous Orchestration' | 'Measured Outcome';
  title: string;
  description: string;
  systemAction: string;
}

export interface IndustryBusinessChallenge {
  id: string;
  problem: string;
  cause: string;
  consequence: string;
  severity: 'critical' | 'high' | 'moderate';
}

export interface IndustryOpportunity {
  problem: string;
  opportunity: string;
  potentialMultiplier: string;
}

export interface IndustrySolutionMapping {
  problem: string;
  opportunity: string;
  solution: string;
  capabilityTag: string;
}

export interface IndustryWorkflowPipeline {
  input: {
    source: string;
    details: string;
    rawSignal: string;
  };
  intelligence: {
    diagnosis: string;
    metricScored: string;
  };
  recommendation: {
    actionProposed: string;
    confidence: string;
  };
  action: {
    stepsExecuted: string[];
    targetSystem: string;
  };
  result: {
    outcome: string;
    timeToImpact: string;
  };
}

export interface IndustryInteractiveDemo {
  scenarioTitle: string;
  scenarioSubtitle: string;
  simulatedSignal: Record<string, string>;
  engineReasoning: string;
  automatedActions: string[];
  verifiedOutcome: string;
  executionDuration: string;
}

export interface IndustryBusinessIntelligence {
  insights: string;
  predictions: string;
  risks: string;
  opportunities: string;
  recommendations: string;
}

export interface IndustryBusinessImpact {
  time: string;
  efficiency: string;
  customerExperience: string;
  operations: string;
  decisionMaking: string;
  visibility: string;
}

export interface IndustryAdditionalCapability {
  groupTitle: string;
  summary: string;
  features: string[];
}

export interface IndustryMetric {
  label: string;
  value: string;
  change?: string;
  detail: string;
}

export interface IndustryData {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  transformationStatement: string;
  tagline: string;
  description: string;
  accentColor: IndustryThemeColor;
  iconName: string;
  categoryFocus: IndustryFocusCategory[];
  heroHeadline: string;
  heroSubheadline: string;
  stats: IndustryMetric[];

  // 10 Section Structured Datasets
  challenges: IndustryBusinessChallenge[];
  opportunities: IndustryOpportunity[];
  solutionMappings: IndustrySolutionMapping[];
  workflowPipeline: IndustryWorkflowPipeline;
  interactiveDemo: IndustryInteractiveDemo;
  businessIntelligence: IndustryBusinessIntelligence;
  businessImpact: IndustryBusinessImpact;
  additionalCapabilities: IndustryAdditionalCapability[];
}

export interface PlatformSolution {
  id: string;
  title: string;
  tagline: string;
  category:
    | 'AI Intelligence'
    | 'Workflow Automation'
    | 'Customer Intelligence'
    | 'Business Intelligence'
    | 'Communication Intelligence';
  description: string;
  capabilities: string[];
  technicalPillars: {
    name: string;
    description: string;
  }[];
  metricsImpact: string;
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
    accent?: string;
  }[];
}

export interface PlatformImpactMetric {
  id: string;
  dimension: 'Time' | 'Efficiency' | 'Customer Experience' | 'Opportunity' | 'Decision Making' | 'Visibility';
  metric: string;
  label: string;
  subtext: string;
  summary: string;
}
