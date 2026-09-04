export interface RealEstateProperty {
  id: string;
  name: string;
  developer: string;
  location: string;
  configuration: string;
  carpetArea: string;
  price: string;
  priceNumeric: number;
  matchScore: number;
  parking: string;
  possession: string;
  status: 'Ready to Move' | 'Possession in 3 Months' | 'Possession in 5 Months' | 'Under Construction';
  whyItMatches: string;
  imageUrl?: string;
  highlights: string[];
}

export interface MatchedBuyerLead {
  id: string;
  name: string;
  budget: string;
  preferredConfig: string;
  preferredLocation: string;
  possessionTimeline: string;
  matchScore: number;
  intentLevel: 'High Intent' | 'Warm Intent' | 'Early Stage';
  lastInteraction: string;
  preApproved: boolean;
  matchReason: string;
}

export interface RealEstateBiData {
  funnel: {
    stage: string;
    count: number;
    conversion: string;
  }[];
  intentDistribution: {
    category: string;
    percentage: number;
    count: number;
    color: string;
  }[];
  demandByLocation: {
    location: string;
    inquiries: number;
    averageBudget: string;
    demandTrend: string;
  }[];
  inventoryStatus: {
    totalUnits: number;
    available: number;
    underNegotiation: number;
    fastDepleting: number;
    avgDaysOnMarket: number;
  };
  priorityFollowUps: {
    id: string;
    clientName: string;
    propertyViewed: string;
    intentScore: number;
    suggestedAction: string;
    timeframe: string;
    urgency: 'Critical' | 'High' | 'Routine';
  }[];
}

export const REAL_ESTATE_PROPERTIES: RealEstateProperty[] = [
  {
    id: 'prop-1',
    name: 'Hiranandani Castle Rock',
    developer: 'Hiranandani Group',
    location: 'Central Powai, Mumbai',
    configuration: '2 BHK Luxury',
    carpetArea: '780 sq.ft.',
    price: '₹1.48 Cr',
    priceNumeric: 1.48,
    matchScore: 96,
    parking: '1 Covered Dedicated Bay',
    possession: 'Ready to Move In',
    status: 'Ready to Move',
    whyItMatches: 'Exact budget fit (₹1.48 Cr vs ₹1.5 Cr budget), prime Powai location, includes covered parking, and zero possession waiting period.',
    highlights: ['Lake view balcony', 'Clubhouse & Olympic Pool', 'Direct connectivity to JVLR & Metro 6'],
  },
  {
    id: 'prop-2',
    name: 'L&T Emerald Isle Phase II',
    developer: 'L&T Realty',
    location: 'Saki Vihar Road, Powai, Mumbai',
    configuration: '2 BHK Premium',
    carpetArea: '820 sq.ft.',
    price: '₹1.54 Cr',
    priceNumeric: 1.54,
    matchScore: 93,
    parking: '1 Podium Covered Bay',
    possession: 'Possession in 3 Months (OC Applied)',
    status: 'Possession in 3 Months',
    whyItMatches: 'Larger carpet area (+40 sq.ft), falls within 5% budget flexibility, and possession timeline is well within your 6-month requirement.',
    highlights: ['10-acre gated township', 'Adjacent to Powai Lake', 'OC received for mid-rise tower'],
  },
  {
    id: 'prop-3',
    name: 'Kalpataru Woodsville',
    developer: 'Kalpataru Ltd',
    location: 'Chandivali - Powai Extension',
    configuration: '2 BHK Modern',
    carpetArea: '765 sq.ft.',
    price: '₹1.42 Cr',
    priceNumeric: 1.42,
    matchScore: 89,
    parking: '1 Covered Stilt Bay',
    possession: 'Possession in 4 Months',
    status: 'Possession in 5 Months',
    whyItMatches: 'Exceptional value at ₹8 Lakhs below maximum budget threshold, high-quality developer reputation, with 4-month possession timeline.',
    highlights: ['Green landscaped podium', 'Low maintenance charges', 'Near D-Mart & Nahar International School'],
  },
  {
    id: 'prop-4',
    name: 'Lodha Supreme Powai',
    developer: 'Lodha Group',
    location: 'Near Hiranandani Hospital, Powai',
    configuration: '2 BHK Grand',
    carpetArea: '845 sq.ft.',
    price: '₹1.62 Cr',
    priceNumeric: 1.62,
    matchScore: 85,
    parking: '1 Basement Dedicated Bay',
    possession: 'Ready for Fit-outs',
    status: 'Ready to Move',
    whyItMatches: 'Spacious layout with high ceiling height and Italian marble finish. 8% premium above budget for significantly higher resale liquidity.',
    highlights: ['Rooftop infinity lounge', 'Smart home automation pre-installed', 'Walk to Galleria Shopping Arcade'],
  },
];

export const REVERSE_MATCH_LISTINGS = [
  {
    id: 'list-1',
    propertyName: 'Lodha Bellagio 3BHK Penthouse',
    location: 'Hiranandani Gardens, Powai',
    price: '₹2.85 Cr',
    carpet: '1,240 sq.ft.',
    status: 'Newly Listed (24h ago)',
  },
  {
    id: 'list-2',
    propertyName: 'Godrej Urban Park 2BHK',
    location: 'Chandivali, Powai',
    price: '₹1.38 Cr',
    carpet: '730 sq.ft.',
    status: 'Price Revision (-₹5L)',
  },
  {
    id: 'list-3',
    propertyName: 'K Raheja Vistas Premiere 3BHK',
    location: 'Off JVLR, Powai',
    price: '₹2.40 Cr',
    carpet: '1,120 sq.ft.',
    status: 'Ready to Move Unit',
  },
];

export const MATCHED_BUYER_LEADS: Record<string, MatchedBuyerLead[]> = {
  'list-1': [
    {
      id: 'lead-101',
      name: 'Dr. Rajiv Singhania',
      budget: '₹2.70 - ₹3.10 Cr',
      preferredConfig: '3 BHK / Penthouse',
      preferredLocation: 'Powai / Hiranandani',
      possessionTimeline: 'Ready / Immediate',
      matchScore: 97,
      intentLevel: 'High Intent',
      lastInteraction: '2 hours ago (Inquired about Hiranandani resale)',
      preApproved: true,
      matchReason: 'HDFC pre-approved loan of ₹2 Cr; actively touring Powai luxury properties with immediate closing mandate.',
    },
    {
      id: 'lead-102',
      name: 'Priyanka & Amit Mehra',
      budget: '₹2.80 - ₹3.00 Cr',
      preferredConfig: '3 BHK High-Rise',
      preferredLocation: 'Powai Central',
      possessionTimeline: '< 3 Months',
      matchScore: 94,
      intentLevel: 'High Intent',
      lastInteraction: 'Yesterday (Saved 3 properties in Hiranandani)',
      preApproved: true,
      matchReason: 'Relocating from Singapore next quarter; looking specifically for gated luxury township with club amenities.',
    },
    {
      id: 'lead-103',
      name: 'Vikram Merchant',
      budget: '₹2.50 - ₹2.90 Cr',
      preferredConfig: '3 BHK',
      preferredLocation: 'Powai / Kanjurmarg',
      possessionTimeline: '< 6 Months',
      matchScore: 89,
      intentLevel: 'Warm Intent',
      lastInteraction: '3 days ago (Attended virtual briefing)',
      preApproved: false,
      matchReason: 'Self-employed tech founder; looking for home with dedicated workspace and lake view.',
    },
  ],
  'list-2': [
    {
      id: 'lead-201',
      name: 'Aditya & Neha Sharma',
      budget: '₹1.30 - ₹1.45 Cr',
      preferredConfig: '2 BHK',
      preferredLocation: 'Chandivali / Powai',
      possessionTimeline: 'Ready to Move',
      matchScore: 98,
      intentLevel: 'High Intent',
      lastInteraction: '45 mins ago (Submitted web inquiry)',
      preApproved: true,
      matchReason: 'Exact match for Chandivali location and ₹1.38 Cr price point. SBI pre-approved.',
    },
    {
      id: 'lead-202',
      name: 'Rohan Deshmukh',
      budget: '₹1.35 - ₹1.50 Cr',
      preferredConfig: '2 BHK with Parking',
      preferredLocation: 'Powai Extension',
      possessionTimeline: '< 4 Months',
      matchScore: 93,
      intentLevel: 'High Intent',
      lastInteraction: 'Yesterday (Tour completed at nearby project)',
      preApproved: true,
      matchReason: 'Rejected previous unit due to low ceiling; Godrej floor plate matches preference perfectly.',
    },
  ],
  'list-3': [
    {
      id: 'lead-301',
      name: 'Sunil Nair',
      budget: '₹2.30 - ₹2.55 Cr',
      preferredConfig: '3 BHK',
      preferredLocation: 'JVLR / Powai Corridor',
      possessionTimeline: 'Ready to Move',
      matchScore: 95,
      intentLevel: 'High Intent',
      lastInteraction: 'Today at 10:15 AM',
      preApproved: true,
      matchReason: 'Needs rapid JVLR connectivity for Western Express Highway commute. Pre-approved with ICICI.',
    },
  ],
};

export const REAL_ESTATE_BI_DATA: RealEstateBiData = {
  funnel: [
    { stage: 'Inbound Portal Leads', count: 1420, conversion: '100%' },
    { stage: 'Aether Cognitive Triage', count: 1180, conversion: '83.1%' },
    { stage: 'Preference Profile Verified', count: 920, conversion: '64.8%' },
    { stage: 'Property Matched & Shortlisted', count: 680, conversion: '47.9%' },
    { stage: 'Automated Site Visit Booked', count: 395, conversion: '27.8%' },
    { stage: 'Offer & Deal Closing', count: 142, conversion: '10.0%' },
  ],
  intentDistribution: [
    { category: 'Immediate Buyer (<30 days, Pre-approved)', percentage: 44, count: 625, color: '#38bdf8' },
    { category: 'Warm Explorer (30-90 days, In-Market)', percentage: 35, count: 497, color: '#818cf8' },
    { category: 'Early Researcher (Nurture Stage)', percentage: 21, count: 298, color: '#64748b' },
  ],
  demandByLocation: [
    { location: 'Powai (Central & Hiranandani)', inquiries: 540, averageBudget: '₹1.85 Cr', demandTrend: '+34% YoY' },
    { location: 'Chandivali - Powai Link', inquiries: 380, averageBudget: '₹1.35 Cr', demandTrend: '+28% YoY' },
    { location: 'JVLR - Powai West', inquiries: 290, averageBudget: '₹2.10 Cr', demandTrend: '+19% YoY' },
    { location: 'Kanjurmarg - Powai East', inquiries: 210, averageBudget: '₹1.25 Cr', demandTrend: '+42% YoY' },
  ],
  inventoryStatus: {
    totalUnits: 480,
    available: 194,
    underNegotiation: 142,
    fastDepleting: 86,
    avgDaysOnMarket: 22.4,
  },
  priorityFollowUps: [
    {
      id: 'fu-1',
      clientName: 'Sanjay & Meenakshi Kulkarni',
      propertyViewed: 'Hiranandani Castle Rock 2BHK',
      intentScore: 94,
      suggestedAction: 'Send revised payment plan with stamp duty waiver incentive',
      timeframe: 'Urgent (Viewed 3x in 48 hrs)',
      urgency: 'Critical',
    },
    {
      id: 'fu-2',
      clientName: 'Tanya Bansal',
      propertyViewed: 'L&T Emerald Isle 2BHK',
      intentScore: 91,
      suggestedAction: 'Dispatch comparison table showing square footage advantage vs Raheja',
      timeframe: 'Due Today (Post-site visit checkpoint)',
      urgency: 'High',
    },
    {
      id: 'fu-3',
      clientName: 'Karanvir Grover',
      propertyViewed: 'Lodha Supreme 2BHK Grand',
      intentScore: 88,
      suggestedAction: 'Schedule video consultation with developer sales director for negotiation',
      timeframe: 'Tomorrow morning',
      urgency: 'High',
    },
    {
      id: 'fu-4',
      clientName: 'Deepak Vohra',
      propertyViewed: 'Kalpataru Woodsville 2BHK',
      intentScore: 82,
      suggestedAction: 'Send reminder on 4-month possession window and pre-EMIs',
      timeframe: 'Within 48 hours',
      urgency: 'Routine',
    },
  ],
};
