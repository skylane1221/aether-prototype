import { IndustryData } from '../../types';

export interface CafeHourlyForecast {
  timeSlot: string;
  expectedBeverages: number;
  expectedFoodItems: number;
  peakRushLevel: 'Normal' | 'Moderate Rush' | 'Peak Morning Rush' | 'Afternoon Surge';
  recommendedBaristas: number;
  recommendedExpeditors: number;
}

export interface CafeNextDayPlan {
  dayName: string;
  weatherCondition: string;
  projectedOrders: number;
  projectedRevenue: string;
  coffeePrep: {
    item: string;
    targetVolume: string;
    dialInSettings: string;
    holdingProtocol: string;
  }[];
  foodPrep: {
    item: string;
    parBakeCount: string;
    assemblyWindow: string;
    shelfLifeStatus: string;
  }[];
  inventoryRequirement: {
    ingredient: string;
    stockOnHand: string;
    neededTomorrow: string;
    purchaseAction: string;
    status: 'Optimal' | 'Reorder Now' | 'Critical';
  }[];
  staffingPlan: {
    role: string;
    recommendedHeadcount: number;
    shiftHours: string;
    stationFocus: string;
  }[];
  hourlyBreakdown: CafeHourlyForecast[];
}

export interface CafeBiData {
  beverageVelocity: {
    totalCupsDaily: number;
    espressoExtractionAccuracy: string;
    averageDrinkPrepTime: string;
    milkWasteReduction: string;
  };
  customerBehaviour: {
    segment: string;
    orderPattern: string;
    repeatRate: string;
    averageSpend: string;
  }[];
  beanFreshnessRoster: {
    bean: string;
    roastDate: string;
    optimumWindow: string;
    stockRemaining: string;
  }[];
}

export const CAFE_NEXT_DAY_PLANS: Record<string, CafeNextDayPlan> = {
  weekday: {
    dayName: 'Tomorrow (Thursday Morning Peak)',
    weatherCondition: 'Sunny, 28°C - High Commuter Footfall',
    projectedOrders: 580,
    projectedRevenue: '₹1,42,000',
    coffeePrep: [
      {
        item: 'House Espresso Roast (Blend 04)',
        targetVolume: '420 Double Shots',
        dialInSettings: '18.5g in / 38g out in 27s (Burr setting: 3.8)',
        holdingProtocol: 'Dial in at 6:45 AM before 7:30 AM corporate commuter rush.',
      },
      {
        item: 'Slow Steep Cold Brew (Ethiopian Yirgacheffe)',
        targetVolume: '28 Liters (2 Kegs)',
        dialInSettings: 'Coarse grind, 18-hour cold drip immersion at 4°C',
        holdingProtocol: 'Ready in dispenser kegs with nitrogen tap charging.',
      },
      {
        item: 'Steamed Milk Par-Levels (Dairy & Plant)',
        targetVolume: '45L Whole Milk, 22L Oat Milk, 12L Almond',
        dialInSettings: 'Oat milk demand up +35% in morning rush',
        holdingProtocol: 'Pre-chill stainless steam pitchers in under-counter cooler.',
      },
      {
        item: 'Single-Origin Pour Over (Panama Geisha & Gesha)',
        targetVolume: '35 Hand-Brew Servings',
        dialInSettings: '15g in / 250g out at 92°C with V60 slow spiral pour',
        holdingProtocol: 'Rest bean hoppers in zero-oxygen dosing vials.',
      },
    ],
    foodPrep: [
      {
        item: 'Artisan Butter Croissants & Almond Twice-Baked',
        parBakeCount: '65 Butter / 35 Almond',
        assemblyWindow: 'Bake at 6:15 AM for warm 7:15 AM display case opening',
        shelfLifeStatus: 'Single-day shelf life (Unsold after 4 PM discounted -30%)',
      },
      {
        item: 'Smoked Sourdough Melts & Avocado Toasts',
        parBakeCount: '80 Pre-Sliced Loaves & Chutney Base',
        assemblyWindow: 'Pre-portion cheese & herbs in cold well by 7:00 AM',
        shelfLifeStatus: '3-minute high-speed panini press during rush',
      },
      {
        item: 'Greek Yogurt, Berry Compote & Granola Pots',
        parBakeCount: '45 Grab-and-Go Pots',
        assemblyWindow: 'Pre-pack at 6:30 AM in front display fridge',
        shelfLifeStatus: '48h cold holding stability',
      },
      {
        item: 'Basque Burnt Cheesecake & Cinnamon Cruffins',
        parBakeCount: '24 Slices / 30 Cruffins',
        assemblyWindow: 'Plate in refrigerated glass vitrine at 7:00 AM',
        shelfLifeStatus: 'Afternoon coffee accompaniment staple',
      },
    ],
    inventoryRequirement: [
      {
        ingredient: 'Specialty Arabica Roasted Whole Beans (kg)',
        stockOnHand: '8.5 kg',
        neededTomorrow: '14.0 kg',
        purchaseAction: 'Open new vacuum-sealed 10kg roastery batch',
        status: 'Reorder Now',
      },
      {
        ingredient: 'Barista Oat Milk (Oatly / Minor Figures 1L)',
        stockOnHand: '15 Liters',
        neededTomorrow: '22 Liters',
        purchaseAction: 'Dispatch delivery from central pantry (+12L)',
        status: 'Reorder Now',
      },
      {
        ingredient: 'Fresh Pasteurized Whole Milk (Pouch/Canister)',
        stockOnHand: '20 Liters',
        neededTomorrow: '45 Liters',
        purchaseAction: 'Scheduled 6:00 AM daily farm milk delivery (+30L)',
        status: 'Optimal',
      },
      {
        ingredient: 'Biodegradable 8oz & 12oz Coffee Cups with Sip Lids',
        stockOnHand: '350 pcs',
        neededTomorrow: '520 pcs',
        purchaseAction: 'Restock sleeve box from back storeroom',
        status: 'Optimal',
      },
      {
        ingredient: 'French Butter Sheets (84% Fat for Pastry)',
        stockOnHand: '2.5 kg',
        neededTomorrow: '6.0 kg',
        purchaseAction: 'Emergency supplier drop required for weekend buffer',
        status: 'Critical',
      },
    ],
    staffingPlan: [
      {
        role: 'Lead Barista & Dial-in Master',
        recommendedHeadcount: 1,
        shiftHours: '6:30 AM - 3:00 PM',
        stationFocus: 'Espresso calibration, milk steaming & latte art speed pass',
      },
      {
        role: 'Secondary Extraction Barista',
        recommendedHeadcount: 1,
        shiftHours: '7:00 AM - 12:30 PM (Rush Window)',
        stationFocus: 'Shot pulling, portafilter dosing & cold brew keg dispatch',
      },
      {
        role: 'Counter Cashier & Order Caller',
        recommendedHeadcount: 1,
        shiftHours: '7:00 AM - 3:30 PM',
        stationFocus: 'POS queue management, customer name tagging, oat milk modifiers',
      },
      {
        role: 'Food Station Cook & Oven Expeditor',
        recommendedHeadcount: 1,
        shiftHours: '6:00 AM - 2:00 PM',
        stationFocus: 'Morning baking, panini pressing & grab-and-go restocking',
      },
      {
        role: 'Floor & Support Cleansing',
        recommendedHeadcount: 1,
        shiftHours: '8:00 AM - 4:30 PM',
        stationFocus: 'Table turnover, cup sanitization & milk supply replenishment',
      },
    ],
    hourlyBreakdown: [
      {
        timeSlot: '7:00 - 8:00 AM',
        expectedBeverages: 65,
        expectedFoodItems: 30,
        peakRushLevel: 'Moderate Rush',
        recommendedBaristas: 2,
        recommendedExpeditors: 1,
      },
      {
        timeSlot: '8:00 - 9:00 AM',
        expectedBeverages: 145,
        expectedFoodItems: 68,
        peakRushLevel: 'Peak Morning Rush',
        recommendedBaristas: 2,
        recommendedExpeditors: 2,
      },
      {
        timeSlot: '9:00 - 10:00 AM',
        expectedBeverages: 120,
        expectedFoodItems: 55,
        peakRushLevel: 'Peak Morning Rush',
        recommendedBaristas: 2,
        recommendedExpeditors: 2,
      },
      {
        timeSlot: '10:00 - 11:30 AM',
        expectedBeverages: 75,
        expectedFoodItems: 40,
        peakRushLevel: 'Moderate Rush',
        recommendedBaristas: 1,
        recommendedExpeditors: 1,
      },
      {
        timeSlot: '11:30 AM - 2:00 PM',
        expectedBeverages: 85,
        expectedFoodItems: 65,
        peakRushLevel: 'Moderate Rush',
        recommendedBaristas: 1,
        recommendedExpeditors: 1,
      },
      {
        timeSlot: '2:00 - 5:00 PM',
        expectedBeverages: 90,
        expectedFoodItems: 42,
        peakRushLevel: 'Afternoon Surge',
        recommendedBaristas: 1,
        recommendedExpeditors: 1,
      },
    ],
  },
  weekend: {
    dayName: 'Weekend (Saturday Artisan Brunch)',
    weatherCondition: 'Pleasant, 26°C - Leisure, Freelancers & Brunch Walk-ins',
    projectedOrders: 820,
    projectedRevenue: '₹2,15,000',
    coffeePrep: [
      {
        item: 'House Espresso Roast (Blend 04)',
        targetVolume: '620 Double Shots',
        dialInSettings: '19.0g in / 38g out in 28s (Burr setting: 3.7)',
        holdingProtocol: 'Continuous bean replenishment throughout 9 AM - 3 PM.',
      },
      {
        item: 'Slow Steep Cold Brew & Tonic Spritzers',
        targetVolume: '45 Liters (3 Kegs)',
        dialInSettings: 'Cold brew with citrus peel infusion & tonic pairings',
        holdingProtocol: 'Pre-charge carbonated draught taps at 8:00 AM.',
      },
      {
        item: 'Steamed Milk Par-Levels (Dairy & Plant)',
        targetVolume: '70L Whole Milk, 38L Oat Milk, 18L Almond Milk',
        dialInSettings: 'High plant-based milk adoption on weekend specialty lattes',
        holdingProtocol: 'Maintain continuous cooler stock rotation.',
      },
      {
        item: 'Single-Origin Pour Over Flight Bar',
        targetVolume: '75 Hand-Brew Servings',
        dialInSettings: '3 single origins available: Kenya AA, Colombia Geisha, Costa Rica Honey',
        holdingProtocol: 'Dedicated manual brew station active all morning.',
      },
    ],
    foodPrep: [
      {
        item: 'Artisan Butter Croissants & Cruffins',
        parBakeCount: '120 Butter / 60 Almond / 45 Cruffins',
        assemblyWindow: 'Triple batch bake: 7:00 AM, 10:30 AM, 1:30 PM',
        shelfLifeStatus: 'Zero wastage due to weekend brunch sell-out',
      },
      {
        item: 'Sourdough Smashed Avo & Truffle Egg Toasts',
        parBakeCount: '140 Prepped Portions',
        assemblyWindow: 'High velocity brunch tickets (8 mins avg turn)',
        shelfLifeStatus: 'Freshly assembled to order',
      },
      {
        item: 'Acai & Chia Smoothie Superfood Bowls',
        parBakeCount: '70 Pre-Blended Bowls with Nut Granola',
        assemblyWindow: 'Blender station pre-batched with frozen acai puree',
        shelfLifeStatus: 'Assembled within 2 mins of order',
      },
      {
        item: 'Basque Burnt Cheesecake & Tiramisu Cups',
        parBakeCount: '48 Slices / 40 Tiramisu Cups',
        assemblyWindow: 'Cold case showcased at 7:30 AM',
        shelfLifeStatus: 'Highest margin dessert add-on',
      },
    ],
    inventoryRequirement: [
      {
        ingredient: 'Specialty Arabica Roasted Whole Beans (kg)',
        stockOnHand: '12.0 kg',
        neededTomorrow: '22.0 kg',
        purchaseAction: 'Transfer 10kg from Roastery Storage immediately',
        status: 'Reorder Now',
      },
      {
        ingredient: 'Barista Oat Milk (1L Cartons)',
        stockOnHand: '20 Liters',
        neededTomorrow: '38 Liters',
        purchaseAction: 'Order 2 cases (24 cartons) from supplier',
        status: 'Reorder Now',
      },
      {
        ingredient: 'Whole Milk (Fresh 1L Pouches)',
        stockOnHand: '35 Liters',
        neededTomorrow: '70 Liters',
        purchaseAction: 'Confirmed morning dairy delivery (+40L)',
        status: 'Optimal',
      },
      {
        ingredient: 'Takeaway Packaging & Reusable Cups',
        stockOnHand: '600 pcs',
        neededTomorrow: '750 pcs',
        purchaseAction: 'Stock adequate for full weekend',
        status: 'Optimal',
      },
      {
        ingredient: 'Organic Eggs & Sourdough Loaves',
        stockOnHand: '60 eggs / 6 loaves',
        neededTomorrow: '180 eggs / 18 loaves',
        purchaseAction: 'Bakery partner morning dispatch confirmed',
        status: 'Optimal',
      },
    ],
    staffingPlan: [
      {
        role: 'Lead Barista (Espresso Engine)',
        recommendedHeadcount: 2,
        shiftHours: '7:00 AM - 4:00 PM',
        stationFocus: 'Dual portafilter extraction on 3-group La Marzocco',
      },
      {
        role: 'Milk Steaming & Art Specialist',
        recommendedHeadcount: 1,
        shiftHours: '8:00 AM - 3:30 PM',
        stationFocus: 'Latte art pass & plant-milk pitcher sequencing',
      },
      {
        role: 'Manual Brew Barista (Pour Over & Cold Bar)',
        recommendedHeadcount: 1,
        shiftHours: '9:00 AM - 3:00 PM',
        stationFocus: 'V60, Aeropress & specialty tasting flights',
      },
      {
        role: 'Kitchen & Brunch Cooks',
        recommendedHeadcount: 2,
        shiftHours: '6:30 AM - 3:30 PM',
        stationFocus: 'Sourdough toasts, egg cooking & bakery bake-off',
      },
      {
        role: 'POS & Food Runner Support',
        recommendedHeadcount: 2,
        shiftHours: '8:00 AM - 4:00 PM',
        stationFocus: 'Table seatings, drink dispatch & pastry plate delivery',
      },
    ],
    hourlyBreakdown: [
      {
        timeSlot: '7:30 - 8:30 AM',
        expectedBeverages: 55,
        expectedFoodItems: 25,
        peakRushLevel: 'Normal',
        recommendedBaristas: 2,
        recommendedExpeditors: 1,
      },
      {
        timeSlot: '8:30 - 10:30 AM',
        expectedBeverages: 210,
        expectedFoodItems: 110,
        peakRushLevel: 'Peak Morning Rush',
        recommendedBaristas: 4,
        recommendedExpeditors: 2,
      },
      {
        timeSlot: '10:30 AM - 1:00 PM',
        expectedBeverages: 240,
        expectedFoodItems: 140,
        peakRushLevel: 'Peak Morning Rush',
        recommendedBaristas: 4,
        recommendedExpeditors: 2,
      },
      {
        timeSlot: '1:00 - 3:30 PM',
        expectedBeverages: 180,
        expectedFoodItems: 95,
        peakRushLevel: 'Moderate Rush',
        recommendedBaristas: 3,
        recommendedExpeditors: 2,
      },
      {
        timeSlot: '3:30 - 6:00 PM',
        expectedBeverages: 135,
        expectedFoodItems: 60,
        peakRushLevel: 'Afternoon Surge',
        recommendedBaristas: 2,
        recommendedExpeditors: 1,
      },
    ],
  },
};

export const CAFE_BI_DATA: CafeBiData = {
  beverageVelocity: {
    totalCupsDaily: 580,
    espressoExtractionAccuracy: '99.1%',
    averageDrinkPrepTime: '88 seconds',
    milkWasteReduction: '42.5%',
  },
  customerBehaviour: [
    {
      segment: 'Daily Commuter (7:30 - 9:30 AM)',
      orderPattern: 'Flat White + Butter Croissant',
      repeatRate: '84%',
      averageSpend: '₹340',
    },
    {
      segment: 'Remote Worker (10:30 AM - 2:30 PM)',
      orderPattern: 'Pour Over + Sourdough Melt',
      repeatRate: '68%',
      averageSpend: '₹620',
    },
    {
      segment: 'Afternoon Socializer (3:30 - 6:00 PM)',
      orderPattern: 'Cold Brew / Iced Matcha + Cheesecake',
      repeatRate: '52%',
      averageSpend: '₹490',
    },
  ],
  beanFreshnessRoster: [
    {
      bean: 'Colombia Finca El Paraiso (Anaerobic)',
      roastDate: '3 days ago',
      optimumWindow: 'Days 4-16 (Peak Flavor)',
      stockRemaining: '6.5 kg',
    },
    {
      bean: 'Ethiopia Guji Uraga (Washed)',
      roastDate: '5 days ago',
      optimumWindow: 'Days 4-18 (Peak Flavor)',
      stockRemaining: '8.0 kg',
    },
    {
      bean: 'House Blend (Brazil & India Robusta Specialty)',
      roastDate: '7 days ago',
      optimumWindow: 'Days 5-25 (Espresso Stability)',
      stockRemaining: '18.5 kg',
    },
  ],
};

export const cafeIndustry: IndustryData = {
  id: 'cafes',
  slug: 'cafes',
  name: 'Cafes',
  shortName: 'Cafes',
  transformationStatement:
    'Rush-hour queue optimization, predictive pastry bake batches, and automated restock.',
  tagline:
    'Rush-hour queue optimization, predictive pastry bake schedules, and automated supplier replenishment.',
  description:
    'Aether transforms high-velocity cafes by predicting morning surge volumes, optimizing barista station workflows, and eliminating bakery waste.',
  accentColor: 'amber',
  iconName: 'Coffee',
  categoryFocus: ['Operations-focused', 'Intelligence-heavy'],
  heroHeadline: 'Conquer morning rush velocity and slash bakery waste.',
  heroSubheadline:
    'Transform hectic coffee counters into precision production lines with real-time rush forecasting and smart bake scheduling.',
  stats: [
    {
      label: 'Morning Rush Output',
      value: '+31%',
      change: 'Potential',
      detail: 'Illustrative barista station speed model',
    },
    {
      label: 'Pastry Waste',
      value: '< 3.1%',
      change: 'Illustrative',
      detail: 'Simulated predictive bake batching',
    },
    {
      label: 'Average Queue Time',
      value: '2.4 min',
      change: 'Example',
      detail: 'Illustrative peak commuter queue scenario',
    },
  ],
  challenges: [
    {
      id: 'caf-c1',
      problem: 'Morning Commuter Queue Walk-Aways',
      cause: '7:30–9:00 AM rush overwhelms counter staff and espresso machines simultaneously.',
      consequence:
        'Up to 18% of hurried commuters leave the line without ordering, losing daily revenue.',
      severity: 'critical',
    },
    {
      id: 'caf-c2',
      problem: 'Mid-Afternoon Bakery Spoilage',
      cause:
        'Baking fixed quantities at 6:00 AM regardless of weather, transit delays, or foot traffic.',
      consequence:
        'Trays of high-cost croissants and artisanal pastries thrown away daily at 4:00 PM.',
      severity: 'high',
    },
    {
      id: 'caf-c3',
      problem: 'Peak-Hour Milk & Bean Stockouts',
      cause:
        'Manual morning counts fail to anticipate high weekend specialty oat/almond milk consumption.',
      consequence:
        'Running out of critical ingredients mid-Saturday forces 86ing popular menu items.',
      severity: 'moderate',
    },
  ],
  opportunities: [
    {
      problem: 'Bottlenecks during morning commuter peak.',
      opportunity: 'Dynamic mobile order pacing and barista station role division.',
      potentialMultiplier: '55% queue reduction',
    },
    {
      problem: 'Heavy daily pastry waste.',
      opportunity: 'Weather- and transit-aware staged second-bake forecasting.',
      potentialMultiplier: '68% waste reduction',
    },
    {
      problem: 'Unanticipated dairy and bean stockouts.',
      opportunity: 'Continuous burn rate telemetry linked to automated vendor POs.',
      potentialMultiplier: 'Zero stockout incidents',
    },
  ],
  // 04 Aether Solutions (8 Specified Solutions for Cafes)
  solutionMappings: [
    {
      problem: 'Volatile Morning Rush Volumes',
      opportunity: 'Predictive hourly beverage modeling',
      solution:
        'Demand Forecasting: Models exact hourly cup volumes, bean consumption curves, and hot vs iced demand shifts.',
      capabilityTag: 'Demand Forecast',
    },
    {
      problem: 'Bakery Spoilage & Cold Brew Guesswork',
      opportunity: 'Precision multi-stage prep scheduling',
      solution:
        'Preparation Recommendations: Prescribes morning croissant par-bakes, cold brew keg steeping volumes, and sandwich prep counts.',
      capabilityTag: 'Prep Scheduler',
    },
    {
      problem: 'Specialty Oat Milk & Bean Stockouts',
      opportunity: 'Dynamic burn-rate replenishment',
      solution:
        'Inventory Intelligence: Continuously tracks coffee bean weights, fresh dairy cartons, and takeaway cup sleeves against auto-PO thresholds.',
      capabilityTag: 'Stock Replenish',
    },
    {
      problem: 'Mid-Afternoon Pastry Write-offs',
      opportunity: 'Sell-through telemetry & discount timing',
      solution:
        'Wastage Detection: Identifies expiring bakery batches and recommends timed promotional bundles before end-of-day discarding.',
      capabilityTag: 'Waste Prevention',
    },
    {
      problem: 'Unoptimized Seasonal Beverage Mix',
      opportunity: 'Modifier & margin contribution analysis',
      solution:
        'Menu Intelligence: Optimizes plant-based milk upcharges, seasonal single-origin pour-overs, and high-margin breakfast pairings.',
      capabilityTag: 'Menu Engineering',
    },
    {
      problem: 'Unobserved Customer Loyalty Shifts',
      opportunity: 'Commuter habit & frequency clustering',
      solution:
        'Customer Behaviour: Tracks commuter repeat frequency, remote worker dwell time, and afternoon grab-and-go buying habits.',
      capabilityTag: 'Habit Analytics',
    },
    {
      problem: 'Opaque Peak-Hour Revenue Velocity',
      opportunity: 'Real-time extraction speed & ticket analytics',
      solution:
        'Sales Analytics: Visualizes hourly revenue velocity, drink throughput per machine group, and modifier attachment rates.',
      capabilityTag: 'Sales Velocity',
    },
    {
      problem: 'Understaffed Morning Extraction Passes',
      opportunity: 'Telemetry-based shift roster balancing',
      solution:
        'Staffing Intelligence: Dynamically schedules baristas, shot pullers, and expeditor staff exactly across the 7:30–10:30 AM rush window.',
      capabilityTag: 'Staffing Mesh',
    },
  ],
  workflowPipeline: {
    input: {
      source: 'POS & Transit Sensor Telemetry',
      details: 'Subway station delay 2 blocks away causing sudden 8:15 AM foot traffic surge.',
      rawSignal: 'Foot traffic delta: +40% anticipated over next 30 minutes.',
    },
    intelligence: {
      diagnosis:
        'Espresso bar overload risk. Drink order complexity skews 70% iced espresso beverages.',
      metricScored: 'Surge Velocity: High Impact',
    },
    recommendation: {
      actionProposed:
        'Pre-allocate second barista exclusively to cold-brew and iced prep; throttle mobile pickup windows to 6 min.',
      confidence: '95.4% efficiency score',
    },
    action: {
      stepsExecuted: [
        'Sent station role re-allocation prompt to Head Barista KDS',
        'Adjusted mobile app estimated prep time from 3 min to 6 min',
        'Pre-staged oat milk and espresso beans at Bar 2',
        'Batched iced drink tickets for simultaneous shot extraction',
      ],
      targetSystem: 'Barista KDS & Mobile App API',
    },
    result: {
      outcome:
        'Processed 31% more transactions with average counter wait time held under 2.5 minutes.',
      timeToImpact: '2.5 minutes',
    },
  },
  interactiveDemo: {
    scenarioTitle: 'Morning Rush Surge Flow & Barista Role Balancing',
    scenarioSubtitle: 'Simulate Aether handling a sudden commuter surge and pacing drink delivery.',
    simulatedSignal: {
      FootTraffic: '+40% surge detected from nearby transit hub',
      CurrentQueue: '14 drinks pending across mobile and counter',
      DrinkComplexity: '70% custom iced espresso drinks',
    },
    engineReasoning:
      'Espresso station overload diagnosed. Autonomous station role re-allocation and ticket pacing executed.',
    automatedActions: [
      'Re-allocated Barista 2 to dedicated iced espresso prep',
      'Paced mobile pickup times to prevent lobby congestion',
      'Batched shot pulls for identical cold brew orders',
      'Notified customers with precision ready-state alerts',
    ],
    verifiedOutcome: 'Morning rush throughput increased by 31% with zero walk-aways.',
    executionDuration: 'Immediate real-time execution',
  },
  businessIntelligence: {
    insights:
      'Rainy weekdays increase hot beverage ticket size by 24% while reducing pastry attachment by 8%.',
    predictions:
      'Tomorrow’s sunny 72°F forecast will shift 65% of morning beverage volume to iced and cold brew.',
    risks:
      'Oat milk inventory projected to hit critical reorder threshold by 14:00 Friday without restock.',
    opportunities:
      'Staging a small 11:00 AM savory pastry bake can capture an estimated $120 extra daily lunch revenue.',
    recommendations:
      'Pre-order 4 additional cases of oat milk and set Bar 2 for cold drink dominance.',
  },
  businessImpact: {
    time: 'Saves cafe managers 6 hours per week in manual stock counting and supplier order entry.',
    efficiency:
      'Boosts morning drink output by 31% per barista hour during the crucial 7:30–9:00 AM revenue window.',
    customerExperience:
      'Commuters get their morning coffee in under 2.5 minutes, building loyal daily habits.',
    operations:
      'Slashes bakery waste from 10% to under 3.1% through intelligent staged batch baking.',
    decisionMaking:
      'Provides owners with accurate daily prep plans accounting for weather and local foot traffic.',
    visibility:
      'Live dashboard showing cups per hour, inventory burn rates, and hourly revenue velocity.',
  },
  additionalCapabilities: [
    {
      groupTitle: 'High-Velocity Queue Pacing',
      summary: 'Real-time ordering queue balancing across mobile apps and counter registers.',
      features: [
        'Drink ticket batching',
        'Mobile order rate limiting',
        'Counter display ready-boards',
      ],
    },
    {
      groupTitle: 'Local Roaster & Dairy Supply Mesh',
      summary: 'Direct integration with local coffee roasters and dairy suppliers.',
      features: [
        'Automated roast date tracking',
        'Dairy crate auto-reorders',
        'Invoice price reconciliation',
      ],
    },
    {
      groupTitle: 'Loyalty & Routine Habit Engine',
      summary: 'Identifies regular commuters and pre-stages their morning routine orders.',
      features: [
        'Geofence order suggestions',
        'Morning streak bonuses',
        'Automated loyalty reward push',
      ],
    },
  ],
};
