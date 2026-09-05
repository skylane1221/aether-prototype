export interface SalonCustomerProfile {
  id: string;
  name: string;
  avatarInitials: string;
  clientTier:
    | 'VIP Platinum Guest'
    | 'Color & Styling Regular'
    | 'Executive Grooming'
    | 'Occasional Treatment';
  preferredStylist: string;
  visitFrequencyWeeks: number;
  lastAppointment: string;
  daysSinceLastVisit: number;
  expectedNextVisit: string;
  daysOverdue: number;
  serviceHistory: {
    date: string;
    serviceName: string;
    stylist: string;
    price: string;
    formulaNotes: string;
  }[];
  preferredServices: string[];
  recommendedNextService: string;
  recommendedServicePrice: string;
  rebookingOpportunity: string;
  suggestedCommunication: {
    channel: 'WhatsApp' | 'SMS';
    headline: string;
    messageContent: string;
  };
  recommendedAppointmentWindow: string;
  urgencyLevel: 'Overdue & Fade Risk' | 'Optimal Rebook Window' | 'Nurture Stage';
}

export const SALON_CUSTOMERS: SalonCustomerProfile[] = [
  {
    id: 'cust-1',
    name: 'Sarah Jenkins',
    avatarInitials: 'SJ',
    clientTier: 'VIP Platinum Guest',
    preferredStylist: 'Elena (Master Colorist)',
    visitFrequencyWeeks: 6.0,
    lastAppointment: '7.5 weeks ago (Feb 12)',
    daysSinceLastVisit: 52,
    expectedNextVisit: '10 days ago (Optimal 6-week cadence)',
    daysOverdue: 10,
    serviceHistory: [
      {
        date: 'Feb 12',
        serviceName: 'Full Balayage + Root Melt + Olaplex Bond Builder',
        stylist: 'Elena',
        price: '₹9,500',
        formulaNotes: 'Level 9 Ash Blonde with 8.1 toner; high porous ends',
      },
      {
        date: 'Dec 28',
        serviceName: 'Hydration Hair Spa + Face Framing Touch-Up',
        stylist: 'Elena',
        price: '₹4,800',
        formulaNotes: 'Kérastase Chronologiste intensive hydration treatment',
      },
      {
        date: 'Nov 14',
        serviceName: 'Balayage Maintenance & Precision Cut',
        stylist: 'Elena',
        price: '₹7,200',
        formulaNotes: 'Soft layered bob cut with curtain fringe refresh',
      },
    ],
    preferredServices: [
      'Dimensional Blonde Balayage',
      'Kérastase Intensive Caviar Treatment',
      'Signature Silk Blowout',
      'Curtain Fringe Trimming',
    ],
    recommendedNextService: 'Balayage Tone & Gloss Refresh + Olaplex Moisture Seal',
    recommendedServicePrice: '₹5,400',
    rebookingOpportunity:
      'Client is 10 days past her customary 6-week color fade threshold. Without toning within 7 days, brassiness and cuticle dryness will accelerate.',
    suggestedCommunication: {
      channel: 'WhatsApp',
      headline: 'Sarah, your toner refresh with Elena is due',
      messageContent:
        'Hi Sarah! Elena noticed it’s been 7 weeks since your Ash Blonde Balayage. To keep your tone vibrant and brass-free, we’ve reserved a priority opening with Elena this Thursday at 3:00 PM (includes a complimentary Olaplex booster). Tap to lock your chair: aether.salon/sarah-vip',
    },
    recommendedAppointmentWindow: 'Thursday at 3:00 PM or Friday at 11:30 AM (Elena Chair 2)',
    urgencyLevel: 'Overdue & Fade Risk',
  },
  {
    id: 'cust-2',
    name: 'Ananya Mehta',
    avatarInitials: 'AM',
    clientTier: 'Color & Styling Regular',
    preferredStylist: 'Rahul (Senior Stylist)',
    visitFrequencyWeeks: 4.0,
    lastAppointment: '3.5 weeks ago (March 10)',
    daysSinceLastVisit: 25,
    expectedNextVisit: 'In 3 days (Optimal 4-week gray touch-up)',
    daysOverdue: 0,
    serviceHistory: [
      {
        date: 'March 10',
        serviceName: 'Organic Root Touch-Up & Express Blowout',
        stylist: 'Rahul',
        price: '₹3,600',
        formulaNotes: 'Ammonia-free 5.0 Natural Brown on hairline',
      },
      {
        date: 'Feb 10',
        serviceName: 'Root Color + Keratin Smoothing Express',
        stylist: 'Rahul',
        price: '₹8,200',
        formulaNotes: 'Cysteine express smoothing on crown',
      },
    ],
    preferredServices: [
      'Ammonia-Free Root Touch-Up',
      'Cysteine Hair Smoothing',
      'Volumizing Moroccan Blowout',
    ],
    recommendedNextService: 'Ammonia-Free Root Color + Moroccan Argan Scalp Ritual',
    recommendedServicePrice: '₹4,100',
    rebookingOpportunity:
      'Precise 4-week gray regrowth cycle. Client has a 94% rebooking adherence when prompted 3 days prior to target date.',
    suggestedCommunication: {
      channel: 'WhatsApp',
      headline: 'Ananya, your 4-week root touch-up reminder',
      messageContent:
        'Hi Ananya! Your scheduled 4-week root touch-up with Rahul is coming up this weekend. We have your favorite Saturday 11:00 AM chair open. Tap to confirm with one tap: aether.salon/ananya-rebook',
    },
    recommendedAppointmentWindow: 'Saturday 11:00 AM or Sunday 2:00 PM (Rahul Chair 4)',
    urgencyLevel: 'Optimal Rebook Window',
  },
  {
    id: 'cust-3',
    name: 'Michael Chang',
    avatarInitials: 'MC',
    clientTier: 'Executive Grooming',
    preferredStylist: 'Tariq (Master Barber)',
    visitFrequencyWeeks: 3.0,
    lastAppointment: '4 weeks ago (March 6)',
    daysSinceLastVisit: 29,
    expectedNextVisit: '8 days ago (3-week fade cycle)',
    daysOverdue: 8,
    serviceHistory: [
      {
        date: 'March 6',
        serviceName: 'Executive Skin Fade + Hot Towel Beard Sculpting',
        stylist: 'Tariq',
        price: '₹2,200',
        formulaNotes: '0.5 taper fade on sides with matte clay finish',
      },
      {
        date: 'Feb 14',
        serviceName: 'Skin Fade + Charcoal Charcoal Detox Facial',
        stylist: 'Tariq',
        price: '₹3,500',
        formulaNotes: 'Pre-event grooming package',
      },
    ],
    preferredServices: [
      'Precision Skin Fade & Scissor Cut',
      'Hot Towel Beard Sculpting & Razor Line',
      'Charcoal Scalp & Skin Detox',
    ],
    recommendedNextService: 'Executive Skin Fade + Beard Oil Treatment',
    recommendedServicePrice: '₹2,200',
    rebookingOpportunity:
      'High fade outgrowth visible after 21 days; client usually books Thursdays between 5-7 PM after corporate hours.',
    suggestedCommunication: {
      channel: 'SMS',
      headline: 'Michael, your fade refresh is ready with Tariq',
      messageContent:
        'Hi Michael, Tariq has a 5:30 PM opening this Thursday for your executive fade and beard trim. Tap to confirm in 5 seconds: aether.salon/michael-fade',
    },
    recommendedAppointmentWindow: 'Thursday 5:30 PM (Tariq Barber Station 1)',
    urgencyLevel: 'Overdue & Fade Risk',
  },
  {
    id: 'cust-4',
    name: 'Chloe Dupont',
    avatarInitials: 'CD',
    clientTier: 'Occasional Treatment',
    preferredStylist: 'Simran (Skin & Spa Therapist)',
    visitFrequencyWeeks: 8.0,
    lastAppointment: '6 weeks ago (Feb 20)',
    daysSinceLastVisit: 42,
    expectedNextVisit: 'In 2 weeks',
    daysOverdue: 0,
    serviceHistory: [
      {
        date: 'Feb 20',
        serviceName: 'Hydra-Facial Glow + Lymphatic Drainage',
        stylist: 'Simran',
        price: '₹6,800',
        formulaNotes: 'Salicylic T-zone peel with hyaluronic acid infusion',
      },
    ],
    preferredServices: [
      'Medical Grade Hydra-Facial Glow',
      'LED Light Therapy Anti-Aging',
      'Botanical Scalp Scrub',
    ],
    recommendedNextService: 'Hydra-Facial Glow + Vitamin C Collagen Booster',
    recommendedServicePrice: '₹7,200',
    rebookingOpportunity:
      'Seasonal spring skincare transition; ideal timing for seasonal deep pore hydration.',
    suggestedCommunication: {
      channel: 'WhatsApp',
      headline: 'Chloe, spring skin renewal with Simran',
      messageContent:
        'Hi Chloe! Ready for your seasonal skin refresh? Simran is hosting a Hydra-Glow week with complimentary Vitamin C collagen boosters. Explore available slots: aether.salon/chloe-glow',
    },
    recommendedAppointmentWindow: 'Next Wednesday 2:00 PM (Spa Room 2)',
    urgencyLevel: 'Nurture Stage',
  },
];

export const SALON_BI_DATA = {
  chairUtilization: {
    currentUtilization: '94.2%',
    traditionalAverage: '68.0%',
    middayGapFillRate: '88.5%',
    recoveredRevenueMonthly: '₹3,85,000',
  },
  noShowReduction: {
    currentNoShowRate: '1.8%',
    traditionalNoShowRate: '14.5%',
    depositCompliance: '96.0%',
  },
  stylistProductivity: [
    {
      stylist: 'Elena (Master Colorist)',
      chairOccupancy: '98%',
      avgTicket: '₹8,400',
      rebookingRate: '92.4%',
      status: 'Booked Solid',
    },
    {
      stylist: 'Rahul (Senior Stylist)',
      chairOccupancy: '94%',
      avgTicket: '₹4,800',
      rebookingRate: '89.1%',
      status: 'Optimal',
    },
    {
      stylist: 'Tariq (Master Barber)',
      chairOccupancy: '91%',
      avgTicket: '₹2,400',
      rebookingRate: '86.5%',
      status: 'Optimal',
    },
    {
      stylist: 'Simran (Skin Therapist)',
      chairOccupancy: '86%',
      avgTicket: '₹6,900',
      rebookingRate: '78.0%',
      status: 'Available Gaps',
    },
  ],
};
