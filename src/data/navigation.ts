import { NavItem } from '../types';

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    label: 'What is Aether?',
    href: '/what-is-aether',
  },
  {
    label: 'Industries',
    href: '/industries',
    children: [
      {
        label: 'Real Estate',
        href: '/industries/real-estate',
        description: 'Automated deal qualification & client triage',
        accent: 'cyan',
      },
      {
        label: 'Restaurants',
        href: '/industries/restaurants',
        description: 'Demand forecasting & kitchen orchestration',
        accent: 'amber',
      },
      {
        label: 'Gyms & Fitness',
        href: '/industries/gyms',
        description: 'Churn prevention & autonomous member retention',
        accent: 'emerald',
      },
      {
        label: 'Salons & Wellness',
        href: '/industries/salons',
        description: 'Dynamic schedule filling & client re-engagement',
        accent: 'violet',
      },
      {
        label: 'Cafes & Bakeries',
        href: '/industries/cafes',
        description: 'Rush queue optimization & perishable waste reduction',
        accent: 'amber',
      },
      {
        label: 'Retail & Commerce',
        href: '/industries/retail',
        description: 'Unified inventory intelligence & omnichannel care',
        accent: 'sky',
      },
      {
        label: 'Hotels & Hospitality',
        href: '/industries/hotels',
        description: 'Smart guest concierge & housekeeping automation',
        accent: 'teal',
      },
      {
        label: 'Healthcare Practices',
        href: '/industries/healthcare',
        description: 'Patient intake routing & schedule backfilling',
        accent: 'cyan',
      },
      {
        label: 'Automotive Services',
        href: '/industries/automotive',
        description: 'Bay utilization & predictive maintenance triggers',
        accent: 'indigo',
      },
      {
        label: 'Education & Training',
        href: '/industries/education',
        description: 'Student inquiry triage & enrollment workflows',
        accent: 'rose',
      },
    ],
  },
  {
    label: 'Solutions',
    href: '/solutions',
  },
  {
    label: 'Demos',
    href: '/demos',
  },
  {
    label: 'Impact',
    href: '/impact',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

export const FOOTER_LINKS = {
  platform: [
    { label: 'What is Aether?', href: '/what-is-aether' },
    { label: 'Core Solutions', href: '/solutions' },
    { label: 'Interactive Demos', href: '/demos' },
    { label: 'Impact & ROI Benchmarks', href: '/impact' },
    { label: 'System Architecture', href: '/what-is-aether#architecture' },
  ],
  industries: [
    { label: 'Real Estate', href: '/industries/real-estate' },
    { label: 'Restaurants', href: '/industries/restaurants' },
    { label: 'Gyms & Fitness', href: '/industries/gyms' },
    { label: 'Salons & Wellness', href: '/industries/salons' },
    { label: 'Cafes & Bakeries', href: '/industries/cafes' },
    { label: 'Retail & Commerce', href: '/industries/retail' },
    { label: 'Hotels & Hospitality', href: '/industries/hotels' },
    { label: 'Healthcare', href: '/industries/healthcare' },
    { label: 'Automotive', href: '/industries/automotive' },
    { label: 'Education', href: '/industries/education' },
  ],
  transformation: [
    { label: 'Problem Discovery Engine', href: '/what-is-aether#discovery' },
    { label: 'Autonomous Workflows', href: '/solutions#workflows' },
    { label: 'Cognitive Diagnosis', href: '/solutions#diagnosis' },
    { label: 'Request Solution Brief', href: '/contact' },
  ],
};
