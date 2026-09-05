import { IndustryData } from '../../types';

export interface RestaurantMenuItem {
  id: string;
  name: string;
  category: 'Mains' | 'Appetizers' | 'Pasta & Grill' | 'Desserts' | 'Beverages';
  historicalAvgDaily: number;
  unit: string;
  costPerPortion: string;
  salePrice: string;
  marginPercent: number;
  shelfLifeHours: number;
}

export interface ScenarioForecast {
  scenarioKey: 'tomorrow' | 'weekend' | 'rainy' | 'festival';
  scenarioName: string;
  scenarioDescription: string;
  footfallMultiplier: number;
  expectedCovers: number;
  deliveryShare: number;
  items: {
    itemId: string;
    itemName: string;
    expectedDemand: number;
    unit: string;
    recommendedPrep: string;
    inventoryRequired: string;
    wastageRisk: 'Low' | 'Moderate' | 'Critical Risk';
    wastageDetails: string;
  }[];
  inventorySummary: {
    category: string;
    item: string;
    stockOnHand: string;
    neededForService: string;
    orderRecommendation: string;
    status: 'Sufficient' | 'Order Needed' | 'Critical Shortage';
  }[];
  operationalRecommendations: {
    title: string;
    details: string;
    timing: string;
    station:
      | 'Butchery & Marination'
      | 'Sauce & Sauté Line'
      | 'Bakery & Tandoor'
      | 'Packaging & Delivery Expedite';
  }[];
}

export interface RestaurantBiData {
  wastageMetrics: {
    currentWastageRate: string;
    traditionalAverage: string;
    costSavedMonthly: string;
    topSpoilageRiskAvoided: string;
  };
  kitchenEfficiency: {
    averageTicketTime: string;
    traditionalTicketTime: string;
    peakHourSpeedup: string;
    orderAccuracy: string;
  };
  menuProfitabilityMatrix: {
    name: string;
    classification: string;
    margin: string;
    popularity: string;
    action: string;
  }[];
  multiOutletSync: {
    outlet: string;
    coversToday: number;
    wastagePercent: string;
    recipeCompliance: string;
    healthScore: string;
  }[];
}

export const RESTAURANT_MENU_ITEMS: RestaurantMenuItem[] = [
  {
    id: 'item-1',
    name: 'Slow-Cooked Dum Biryani (Pot)',
    category: 'Mains',
    historicalAvgDaily: 85,
    unit: 'portions',
    costPerPortion: '₹140',
    salePrice: '₹480',
    marginPercent: 71,
    shelfLifeHours: 8,
  },
  {
    id: 'item-2',
    name: 'Smoked Butter Chicken & Paratha',
    category: 'Mains',
    historicalAvgDaily: 110,
    unit: 'portions',
    costPerPortion: '₹125',
    salePrice: '₹440',
    marginPercent: 72,
    shelfLifeHours: 12,
  },
  {
    id: 'item-3',
    name: 'Truffle Mushroom Fettuccine',
    category: 'Pasta & Grill',
    historicalAvgDaily: 55,
    unit: 'portions',
    costPerPortion: '₹180',
    salePrice: '₹560',
    marginPercent: 68,
    shelfLifeHours: 24,
  },
  {
    id: 'item-4',
    name: 'Charcoal Grilled Salmon Fillet',
    category: 'Pasta & Grill',
    historicalAvgDaily: 35,
    unit: 'portions',
    costPerPortion: '₹340',
    salePrice: '₹820',
    marginPercent: 59,
    shelfLifeHours: 18,
  },
  {
    id: 'item-5',
    name: 'Crispy Calamari with Garlic Aioli',
    category: 'Appetizers',
    historicalAvgDaily: 65,
    unit: 'portions',
    costPerPortion: '₹95',
    salePrice: '₹390',
    marginPercent: 76,
    shelfLifeHours: 24,
  },
];

export const RESTAURANT_SCENARIO_FORECASTS: Record<string, ScenarioForecast> = {
  tomorrow: {
    scenarioKey: 'tomorrow',
    scenarioName: 'Tomorrow (Standard Weekday)',
    scenarioDescription:
      'Regular Wednesday lunch and dinner service with balanced corporate & family dine-in.',
    footfallMultiplier: 1.0,
    expectedCovers: 240,
    deliveryShare: 32,
    items: [
      {
        itemId: 'item-1',
        itemName: 'Slow-Cooked Dum Biryani (Pot)',
        expectedDemand: 85,
        unit: 'portions',
        recommendedPrep: 'Batch 1 (11:00 AM): 50 pots | Batch 2 (6:30 PM): 35 pots',
        inventoryRequired: '18 kg Marinated Chicken, 12 kg Aged Basmati, 2.5 kg Ghee',
        wastageRisk: 'Low',
        wastageDetails: 'Two-stage batching caps post-service unsold surplus to <2 portions.',
      },
      {
        itemId: 'item-2',
        itemName: 'Smoked Butter Chicken & Paratha',
        expectedDemand: 110,
        unit: 'portions',
        recommendedPrep: 'Pre-simmer 18 Liters Makhani gravy; par-roast 24 kg Tikka chunks',
        inventoryRequired: '26 kg Boneless Poultry, 6 kg White Butter, 8 kg Tomato Paste',
        wastageRisk: 'Low',
        wastageDetails: 'Base gravy holds safely at 68°C with 0% degradation.',
      },
      {
        itemId: 'item-3',
        itemName: 'Truffle Mushroom Fettuccine',
        expectedDemand: 55,
        unit: 'portions',
        recommendedPrep: 'Portion 55 balls of fresh pasta; prep 4 Liters truffle-parmesan emulsion',
        inventoryRequired: '5.5 kg Fresh Semolina, 4.2 kg Wild Mushrooms, 700ml Truffle Oil',
        wastageRisk: 'Moderate',
        wastageDetails: 'Fresh pasta discarded if unsold within 36h; strict par-level enforced.',
      },
      {
        itemId: 'item-4',
        itemName: 'Charcoal Grilled Salmon Fillet',
        expectedDemand: 35,
        unit: 'portions',
        recommendedPrep: 'Portion exactly 35 fillets (180g cut) from fresh Atlantic catch',
        inventoryRequired: '6.8 kg Whole Chilled Salmon, Fresh Dill, Lemon Marinade',
        wastageRisk: 'Moderate',
        wastageDetails:
          'High-cost raw protein; only slice 20 portions for lunch, remaining 15 at 5 PM.',
      },
      {
        itemId: 'item-5',
        itemName: 'Crispy Calamari with Garlic Aioli',
        expectedDemand: 65,
        unit: 'portions',
        recommendedPrep: 'Butcher & buttermilk soak 8.5 kg squid rings; whisk 3L aioli',
        inventoryRequired: '9 kg Squid Tubes, Panko Crumb, 12 Eggs, Garlic Infusion',
        wastageRisk: 'Low',
        wastageDetails: 'Quick flash-fry station with minimal holding losses.',
      },
    ],
    inventorySummary: [
      {
        category: 'Meat & Poultry',
        item: 'Boneless Fresh Chicken',
        stockOnHand: '32 kg',
        neededForService: '44 kg',
        orderRecommendation: '+15 kg (Delivery at 8:00 AM)',
        status: 'Order Needed',
      },
      {
        category: 'Dairy & Fats',
        item: 'Unsalted White Cream Butter',
        stockOnHand: '18 kg',
        neededForService: '12 kg',
        orderRecommendation: 'Sufficient inventory',
        status: 'Sufficient',
      },
      {
        category: 'Seafood',
        item: 'Chilled Atlantic Salmon',
        stockOnHand: '4.5 kg',
        neededForService: '7.0 kg',
        orderRecommendation: '+3.5 kg urgent morning vendor dispatch',
        status: 'Order Needed',
      },
      {
        category: 'Dry Goods',
        item: 'Extra Long Basmati Rice',
        stockOnHand: '65 kg',
        neededForService: '16 kg',
        orderRecommendation: 'Buffer healthy (4 days)',
        status: 'Sufficient',
      },
    ],
    operationalRecommendations: [
      {
        title: 'Stagger Biryani Dum Cycles',
        details:
          'Trigger 1st handi seal at 10:45 AM for 12:30 PM lunch peak; 2nd cycle at 6:00 PM.',
        timing: '10:45 AM & 6:00 PM',
        station: 'Butchery & Marination',
      },
      {
        title: 'Expedite Online Delivery Par-Packaging',
        details:
          'Pre-assemble 45 delivery carry-packs with cutlery & chutneys to reduce ticket dispatch time to under 8 mins.',
        timing: '11:30 AM',
        station: 'Packaging & Delivery Expedite',
      },
      {
        title: 'Salmon Fresh Cut Gate',
        details: 'Hold back 15 fillets in cryo-chill until 6:00 PM reservation check-in confirm.',
        timing: '5:30 PM',
        station: 'Sauce & Sauté Line',
      },
    ],
  },
  weekend: {
    scenarioKey: 'weekend',
    scenarioName: 'Weekend Surge (Saturday Night Peak)',
    scenarioDescription:
      'Heavy dinner bookings, extended table turnover, and high beverage/appetizer attachment rate.',
    footfallMultiplier: 1.85,
    expectedCovers: 445,
    deliveryShare: 24,
    items: [
      {
        itemId: 'item-1',
        itemName: 'Slow-Cooked Dum Biryani (Pot)',
        expectedDemand: 165,
        unit: 'portions',
        recommendedPrep:
          'Triple-batch sequence (11 AM: 60 pots | 5:30 PM: 70 pots | 8:30 PM: 35 pots)',
        inventoryRequired: '36 kg Marinated Poultry, 24 kg Basmati, 5 kg Pure Ghee, Saffron Milk',
        wastageRisk: 'Low',
        wastageDetails: 'High weekend turnover ensures 98.5% sell-through before 11:30 PM.',
      },
      {
        itemId: 'item-2',
        itemName: 'Smoked Butter Chicken & Paratha',
        expectedDemand: 205,
        unit: 'portions',
        recommendedPrep: 'Simmer 34 Liters Makhani gravy; double-charge tandoor skewered skewers',
        inventoryRequired: '48 kg Poultry, 12 kg Butter, 16 kg Puree, 22 kg Whole Wheat Atta',
        wastageRisk: 'Low',
        wastageDetails: 'Fastest moving weekend staple; zero buffer leftover expected.',
      },
      {
        itemId: 'item-3',
        itemName: 'Truffle Mushroom Fettuccine',
        expectedDemand: 98,
        unit: 'portions',
        recommendedPrep: 'Portion 100 fresh pasta nests; double prep cream emulsion',
        inventoryRequired: '10 kg Semolina, 8 kg Exotic Mushrooms, 1.4L Truffle Extract',
        wastageRisk: 'Low',
        wastageDetails: 'Popular dinner pairing with premium wine orders.',
      },
      {
        itemId: 'item-4',
        itemName: 'Charcoal Grilled Salmon Fillet',
        expectedDemand: 68,
        unit: 'portions',
        recommendedPrep: 'Clean and prep 70 portion cuts; marinate in batches of 25',
        inventoryRequired: '13.5 kg Whole Salmon, Asparagus Bundles, Capers & Herbs',
        wastageRisk: 'Low',
        wastageDetails: 'High table spend weekend crowd drives 94% salmon sell-through.',
      },
      {
        itemId: 'item-5',
        itemName: 'Crispy Calamari with Garlic Aioli',
        expectedDemand: 125,
        unit: 'portions',
        recommendedPrep: 'Pre-portion 130 basket units in walk-in reach-in fridge',
        inventoryRequired: '18 kg Squid Rings, Batter Emulsion, 6L Aioli Mayo',
        wastageRisk: 'Low',
        wastageDetails: 'High appetizer velocity on bar and cocktail tables.',
      },
    ],
    inventorySummary: [
      {
        category: 'Meat & Poultry',
        item: 'Boneless Fresh Chicken',
        stockOnHand: '25 kg',
        neededForService: '84 kg',
        orderRecommendation: '+60 kg High-Priority Saturday AM intake',
        status: 'Critical Shortage',
      },
      {
        category: 'Dairy & Fats',
        item: 'Heavy Cooking Cream & Butter',
        stockOnHand: '20 kg',
        neededForService: '35 kg',
        orderRecommendation: '+20 kg immediate dairy restock',
        status: 'Order Needed',
      },
      {
        category: 'Seafood',
        item: 'Chilled Atlantic Salmon',
        stockOnHand: '5.0 kg',
        neededForService: '14.0 kg',
        orderRecommendation: '+10.0 kg Saturday Morning Air-freight Delivery',
        status: 'Critical Shortage',
      },
      {
        category: 'Produce',
        item: 'Wild Exotic Mushrooms',
        stockOnHand: '4.0 kg',
        neededForService: '10.0 kg',
        orderRecommendation: '+6 kg Local Hydroponic Vendor Drop',
        status: 'Order Needed',
      },
    ],
    operationalRecommendations: [
      {
        title: 'Add 2 Line Cooks to Grill & Sauté',
        details:
          'Reassign 1 prep cook to active plating pass to prevent 22+ min ticket bottlenecks.',
        timing: '7:00 PM - 11:00 PM',
        station: 'Sauce & Sauté Line',
      },
      {
        title: 'Continuous Tandoor Rotation',
        details: 'Keep auxiliary tandoor at 320°C from 6:30 PM to avoid paratha delay queues.',
        timing: '6:30 PM',
        station: 'Bakery & Tandoor',
      },
      {
        title: 'Appetizer Pre-fire Optimization',
        details: 'Pre-dredge calamari batches during 7:30 PM rush for sub-4 min fryer drop.',
        timing: '7:30 PM',
        station: 'Butchery & Marination',
      },
    ],
  },
  rainy: {
    scenarioKey: 'rainy',
    scenarioName: 'Rainy Day Surge (Delivery & Comfort Food)',
    scenarioDescription:
      'Heavy monsoon downpour causing 48% drop in walk-in dine-in, but +110% explosion in delivery apps.',
    footfallMultiplier: 0.85,
    expectedCovers: 205,
    deliveryShare: 68,
    items: [
      {
        itemId: 'item-1',
        itemName: 'Slow-Cooked Dum Biryani (Pot)',
        expectedDemand: 140,
        unit: 'portions',
        recommendedPrep: 'Over-index delivery handi packaging: 100 delivery packs, 40 dine-in',
        inventoryRequired: '30 kg Chicken, 20 kg Rice, 150 Heat-Retaining Foil Handis',
        wastageRisk: 'Low',
        wastageDetails: 'Biryani is top comfort food during rain; delivery demand spikes +65%.',
      },
      {
        itemId: 'item-2',
        itemName: 'Smoked Butter Chicken & Paratha',
        expectedDemand: 160,
        unit: 'portions',
        recommendedPrep: 'Increase sauce volume +40%; pre-pack 180 spiced lachha parathas',
        inventoryRequired: '38 kg Chicken, 10 kg Butter, 180 Foil Bags & Tamper Seals',
        wastageRisk: 'Low',
        wastageDetails: 'Very high delivery ticket affinity with rainy weather.',
      },
      {
        itemId: 'item-3',
        itemName: 'Truffle Mushroom Fettuccine',
        expectedDemand: 28,
        unit: 'portions',
        recommendedPrep: 'Reduce fresh pasta prep by 50% (Dine-in pasta orders drop in rain)',
        inventoryRequired: '2.8 kg Semolina, 2.2 kg Mushrooms, 350ml Truffle Oil',
        wastageRisk: 'Critical Risk',
        wastageDetails:
          'High spoilage risk if regular batch prepared. Cut prep to avoid ₹8,400 raw loss.',
      },
      {
        itemId: 'item-4',
        itemName: 'Charcoal Grilled Salmon Fillet',
        expectedDemand: 14,
        unit: 'portions',
        recommendedPrep: 'Prep only 15 portion cuts max. Keep remaining catch vacuum-frozen.',
        inventoryRequired: '2.8 kg Salmon Fillet, Asparagus',
        wastageRisk: 'Critical Risk',
        wastageDetails: 'Dine-in luxury seafood demand collapses during torrential rain.',
      },
      {
        itemId: 'item-5',
        itemName: 'Crispy Calamari with Garlic Aioli',
        expectedDemand: 30,
        unit: 'portions',
        recommendedPrep: 'Reduce prep by 55%; calamari loses crispness in delivery transit',
        inventoryRequired: '4.5 kg Squid, 1.5L Aioli',
        wastageRisk: 'Moderate',
        wastageDetails:
          'Fried appetizers suffer delivery texture decay; promote hot soups instead.',
      },
    ],
    inventorySummary: [
      {
        category: 'Packaging',
        item: 'Thermal Handi Containers & Insulated Bags',
        stockOnHand: '80 pcs',
        neededForService: '220 pcs',
        orderRecommendation: 'Emergency courier of +150 thermal containers',
        status: 'Critical Shortage',
      },
      {
        category: 'Meat & Poultry',
        item: 'Boneless Fresh Chicken',
        stockOnHand: '30 kg',
        neededForService: '68 kg',
        orderRecommendation: '+40 kg for delivery curry rush',
        status: 'Order Needed',
      },
      {
        category: 'Seafood',
        item: 'Chilled Salmon & Squid',
        stockOnHand: '12 kg',
        neededForService: '7.5 kg',
        orderRecommendation: 'Pause next morning seafood delivery',
        status: 'Sufficient',
      },
      {
        category: 'Bread & Grain',
        item: 'Basmati & Paratha Flour',
        stockOnHand: '80 kg',
        neededForService: '35 kg',
        orderRecommendation: 'Sufficient stock',
        status: 'Sufficient',
      },
    ],
    operationalRecommendations: [
      {
        title: 'Activate Dual Packing Dispatch Station',
        details:
          'Convert dine-in bar pass into dedicated delivery staging area to handle Swiggy/Zomato rider congestion.',
        timing: '12:00 PM & 7:30 PM',
        station: 'Packaging & Delivery Expedite',
      },
      {
        title: 'Throttle Seafood & Fresh Pasta Prep',
        details:
          'Freeze salmon intake and halve fresh dough kneading to protect food cost margin by 4.2%.',
        timing: '9:30 AM',
        station: 'Sauce & Sauté Line',
      },
      {
        title: 'Automated Rider Lead Time Adjustment',
        details:
          'Add +10 mins preparation buffer on delivery aggregators to avoid driver cancellation penalties.',
        timing: '11:00 AM',
        station: 'Packaging & Delivery Expedite',
      },
    ],
  },
  festival: {
    scenarioKey: 'festival',
    scenarioName: 'Festival & Banquet Season (Diwali / New Year)',
    scenarioDescription:
      'Large family parties, corporate group bookings, pre-ordered party packs, and maximum seat occupancy.',
    footfallMultiplier: 2.2,
    expectedCovers: 530,
    deliveryShare: 35,
    items: [
      {
        itemId: 'item-1',
        itemName: 'Slow-Cooked Dum Biryani (Pot)',
        expectedDemand: 220,
        unit: 'portions',
        recommendedPrep: '4 Large Handi Batches (10:30 AM, 1:00 PM, 6:00 PM, 8:45 PM)',
        inventoryRequired: '52 kg Chicken, 35 kg Aged Rice, 8 kg Ghee, Premium Saffron',
        wastageRisk: 'Low',
        wastageDetails: 'Guaranteed group pre-orders ensure 100% consumption.',
      },
      {
        itemId: 'item-2',
        itemName: 'Smoked Butter Chicken & Paratha',
        expectedDemand: 260,
        unit: 'portions',
        recommendedPrep: 'Simmer 48L Gravy base; prep 60 kg tandoori skewers',
        inventoryRequired: '64 kg Chicken, 18 kg Butter, 25 kg Puree, 35 kg Flour',
        wastageRisk: 'Low',
        wastageDetails: 'Massive party pack and platter demand.',
      },
      {
        itemId: 'item-3',
        itemName: 'Truffle Mushroom Fettuccine',
        expectedDemand: 85,
        unit: 'portions',
        recommendedPrep: 'Portion 90 pasta units; prep extra garlic focaccia baskets',
        inventoryRequired: '9 kg Semolina, 7.5 kg Mushrooms, 1.2L Truffle Emulsion',
        wastageRisk: 'Low',
        wastageDetails: 'Ordered frequently as family sharing sides.',
      },
      {
        itemId: 'item-4',
        itemName: 'Charcoal Grilled Salmon Fillet',
        expectedDemand: 80,
        unit: 'portions',
        recommendedPrep: 'Portion 85 cuts; pre-sear 40 fillets for expedited oven finish',
        inventoryRequired: '17 kg Whole Salmon, Premium Herb Compound Butter',
        wastageRisk: 'Low',
        wastageDetails: 'Festival celebratory dining favors premium seafood dishes.',
      },
      {
        itemId: 'item-5',
        itemName: 'Crispy Calamari with Garlic Aioli',
        expectedDemand: 155,
        unit: 'portions',
        recommendedPrep: 'Prep 160 appetizer baskets; bulk whisk 8L dipping sauce',
        inventoryRequired: '22 kg Squid, 8L Aioli Mayo, Fresh Parsley Garnish',
        wastageRisk: 'Low',
        wastageDetails: 'Fast table starter for celebratory drinks.',
      },
    ],
    inventorySummary: [
      {
        category: 'Meat & Poultry',
        item: 'Fresh Marinated Chicken',
        stockOnHand: '40 kg',
        neededForService: '116 kg',
        orderRecommendation: 'Split vendor shipment: 60 kg at 7 AM, 30 kg at 3 PM',
        status: 'Critical Shortage',
      },
      {
        category: 'Dairy & Ghee',
        item: 'Pure Desi Ghee & Fresh Cream',
        stockOnHand: '25 kg',
        neededForService: '45 kg',
        orderRecommendation: '+25 kg bulk canister procurement',
        status: 'Critical Shortage',
      },
      {
        category: 'Seafood',
        item: 'Atlantic Salmon & Calamari',
        stockOnHand: '8 kg',
        neededForService: '39 kg',
        orderRecommendation: 'Reserve guaranteed allocation with seafood wholesaler',
        status: 'Critical Shortage',
      },
      {
        category: 'Packaging',
        item: 'Festival Family Boxes & Bags',
        stockOnHand: '120 pcs',
        neededForService: '300 pcs',
        orderRecommendation: '+200 Festival Special Packaging Kits',
        status: 'Order Needed',
      },
    ],
    operationalRecommendations: [
      {
        title: 'Full Kitchen Staff Surge & Split Shifts',
        details:
          'Deploy all 6 senior line chefs across double active kitchen passes with zero split break during 1 PM - 10 PM.',
        timing: 'All Day',
        station: 'Butchery & Marination',
      },
      {
        title: 'Banquet Table Pre-Setting',
        details:
          'Pre-set shared appetizer dipping sauces and tableware 45 mins prior to party check-ins.',
        timing: '12:00 PM & 6:30 PM',
        station: 'Packaging & Delivery Expedite',
      },
      {
        title: 'Emergency Supplier Hot-Line',
        details:
          'Activate on-call backup dairy & poultry suppliers on 45-min delivery SLA for unexpected evening walk-ins.',
        timing: '4:00 PM',
        station: 'Sauce & Sauté Line',
      },
    ],
  },
};

export const RESTAURANT_BI_DATA: RestaurantBiData = {
  wastageMetrics: {
    currentWastageRate: '2.4%',
    traditionalAverage: '8.8%',
    costSavedMonthly: '₹2,48,000',
    topSpoilageRiskAvoided: 'Fresh Atlantic Salmon & Raw Cream Sauces',
  },
  kitchenEfficiency: {
    averageTicketTime: '12.4 mins',
    traditionalTicketTime: '24.8 mins',
    peakHourSpeedup: '50.0%',
    orderAccuracy: '99.4%',
  },
  menuProfitabilityMatrix: [
    {
      name: 'Dum Biryani',
      classification: 'Star (High Volume, High Margin)',
      margin: '71%',
      popularity: 'Very High',
      action: 'Promote as flagship platter',
    },
    {
      name: 'Smoked Butter Chicken',
      classification: 'Star (High Volume, High Margin)',
      margin: '72%',
      popularity: 'Very High',
      action: 'Upsell with garlic butter parathas',
    },
    {
      name: 'Charcoal Salmon',
      classification: 'Opportunity (High Margin, Moderate Volume)',
      margin: '59%',
      popularity: 'Moderate',
      action: 'Bundle with weekend wine pairing',
    },
    {
      name: 'Truffle Fettuccine',
      classification: 'Workhorse (Consistent Volume)',
      margin: '68%',
      popularity: 'High',
      action: 'Standardize par-cooked pasta nests',
    },
    {
      name: 'Artisan Lamb Shank',
      classification: 'Dog (Low Volume, High Spoilage Risk)',
      margin: '48%',
      popularity: 'Low',
      action: 'Replace with braised lamb rogan josh',
    },
  ],
  multiOutletSync: [
    {
      outlet: 'Powai High Street (Flagship)',
      coversToday: 380,
      wastagePercent: '1.9%',
      recipeCompliance: '99.2%',
      healthScore: 'A+',
    },
    {
      outlet: 'Bandra West (Bistro & Bar)',
      coversToday: 420,
      wastagePercent: '2.3%',
      recipeCompliance: '98.5%',
      healthScore: 'A',
    },
    {
      outlet: 'Lower Parel (Commercial Hub)',
      coversToday: 490,
      wastagePercent: '2.8%',
      recipeCompliance: '97.9%',
      healthScore: 'A',
    },
    {
      outlet: 'Juhu Beachfront',
      coversToday: 340,
      wastagePercent: '2.1%',
      recipeCompliance: '99.0%',
      healthScore: 'A+',
    },
  ],
};

export const restaurantIndustry: IndustryData = {
  id: 'restaurants',
  slug: 'restaurants',
  name: 'Restaurants & Food Businesses',
  shortName: 'Restaurants',
  transformationStatement:
    'Predictive demand forecasting, dynamic prep scheduling, and automated inventory replenishment.',
  tagline:
    'Predictive demand forecasting, kitchen workflow pacing, and menu profitability optimization.',
  description:
    'Aether transforms restaurant kitchens and multi-outlet food businesses by forecasting dish-level demand, automating daily prep par-levels, eliminating food waste, and orchestrating high-velocity kitchen workflows.',
  accentColor: 'amber',
  iconName: 'Utensils',
  categoryFocus: ['Operations-focused', 'Intelligence-heavy'],
  heroHeadline: 'Turn Food Waste & Kitchen Chaos Into Precision High-Margin Dining Shifts.',
  heroSubheadline:
    'How modern restaurant operators and multi-outlet culinary brands use Aether to predict item demand, synchronize raw ingredient orders, and streamline kitchen line execution.',
  stats: [
    {
      label: 'Food Waste Reduction',
      value: 'Up to -68%',
      change: 'Illustrative',
      detail: 'Simulated dynamic prep batching impact',
    },
    {
      label: 'Kitchen Ticket Velocity',
      value: '12.4m',
      change: 'Potential',
      detail: 'Illustrative peak shift model target',
    },
    {
      label: 'Food Cost Margin',
      value: '+4.8%',
      change: 'Example',
      detail: 'Potential gain in modeled recipe procurement',
    },
  ],

  // 02 Business Challenges (8 Specified Problems)
  challenges: [
    {
      id: 'rst-c1',
      problem: 'Demand Uncertainty',
      cause:
        'Unpredictable fluctuations across weather, local events, and seasonal holidays causing erratic covers.',
      consequence:
        'Erratic kitchen prep resulting in either 86ing popular dishes mid-service or heavy end-of-night spoilage.',
      severity: 'critical',
    },
    {
      id: 'rst-c2',
      problem: 'Food Wastage',
      cause:
        'Over-prepping high-cost perishable gravies, proteins, and cut vegetables based on static guesswork.',
      consequence:
        'Operators lose 8–12% of total inventory cost directly into kitchen trash bins every single week.',
      severity: 'critical',
    },
    {
      id: 'rst-c3',
      problem: 'Inventory Issues',
      cause:
        'Manual morning counts and blind reordering lead to stockouts on key proteins and emergency expensive purchases.',
      consequence:
        'Frequent recipe compromises, lost delivery orders, and unexpected kitchen halt moments.',
      severity: 'high',
    },
    {
      id: 'rst-c4',
      problem: 'Kitchen Bottlenecks',
      cause:
        'Simultaneous dine-in seatings and aggregator delivery spikes overloading the sauté, fryer, and tandoor passes.',
      consequence:
        'Ticket times blow past 45 minutes, resulting in cold food complaints and stressed line cooks.',
      severity: 'critical',
    },
    {
      id: 'rst-c5',
      problem: 'Menu Profitability Uncertainty',
      cause:
        'Opaque ingredient cost inflation where rising dairy and meat prices erode margins on legacy fixed-price dishes.',
      consequence:
        'Restaurants unintentionally promote high-volume items that deliver negative gross margins.',
      severity: 'high',
    },
    {
      id: 'rst-c6',
      problem: 'Supplier Complexity',
      cause:
        'Managing fragmented vendors across poultry, seafood, dairy, and dry goods with varying delivery SLAs and credit terms.',
      consequence:
        'Late morning deliveries delay prep cycles, causing missing items during lunch rush openings.',
      severity: 'moderate',
    },
    {
      id: 'rst-c7',
      problem: 'Customer Retention',
      cause:
        'Inability to track individual guest dining preferences, dietary allergies, and frequency intervals across visits.',
      consequence:
        'Guests defect to competing dining spots without proactive loyalty re-engagement or recovery outreach.',
      severity: 'moderate',
    },
    {
      id: 'rst-c8',
      problem: 'Multi-Outlet Variance',
      cause:
        'Inconsistent recipe compliance, divergent food cost ratios, and unequal prep quality across regional branch outlets.',
      consequence:
        'Brand dilution and wild margin swings between flagship and satellite restaurant locations.',
      severity: 'high',
    },
  ],

  // 03 Aether Opportunities
  opportunities: [
    {
      problem: 'Uncertain guest footfall and erratic prep quantities.',
      opportunity:
        'AI-driven dish-level demand forecasting factoring weather, day-of-week, and historical velocity.',
      potentialMultiplier: '68% food waste reduction',
    },
    {
      problem: 'Kitchen line ticket congestion during peak dining hours.',
      opportunity:
        'Dynamic station load balancing and delivery ticket pacing aligned to line bandwidth.',
      potentialMultiplier: '50% faster ticket execution',
    },
    {
      problem: 'Multi-outlet recipe drift and inventory shrinkage.',
      opportunity:
        'Centralized live inventory burn rate tracking and standardized recipe compliance scoring.',
      potentialMultiplier: '4.8% gross margin expansion',
    },
  ],

  // 04 Aether Solutions (10 Specified Solutions)
  solutionMappings: [
    {
      problem: 'Demand Uncertainty',
      opportunity: 'Predictive daily cover & item modeling',
      solution:
        'Demand Forecasting: Models exact dish consumption curves across weekdays, weekends, rainy days, and festival surges.',
      capabilityTag: 'Demand Forecast',
    },
    {
      problem: 'Food Wastage & Over-Prepping',
      opportunity: 'Time-staged prep par calculations',
      solution:
        'Preparation Intelligence: Computes staged kitchen prep schedules, par-cooking volumes, and sauce simmer batch sizes.',
      capabilityTag: 'Prep Optimizer',
    },
    {
      problem: 'Inventory Stockouts & Emergency Runs',
      opportunity: 'Real-time recipe-level depletion ledger',
      solution:
        'Inventory Intelligence: Translates forecasted menu mix into precise raw ingredient purchase orders across all vendors.',
      capabilityTag: 'Auto-Replenish',
    },
    {
      problem: 'Perishable Spoilage in Walk-Ins',
      opportunity: 'Continuous ingredient shelf-life monitoring',
      solution:
        'Wastage Detection: Flags high-cost raw proteins and dairy approaching expiration with automated daily salvage menus.',
      capabilityTag: 'Waste Prevention',
    },
    {
      problem: 'Kitchen Line Ticket Congestion',
      opportunity: 'Dynamic station capacity pacing',
      solution:
        'Kitchen Workflow Intelligence: Paces dine-in and online delivery orders across grill, sauté, and tandoor stations in real time.',
      capabilityTag: 'Kitchen Pacing',
    },
    {
      problem: 'Opaque Dish Profitability Margins',
      opportunity: 'Live recipe cost attribution',
      solution:
        'Menu Profitability: Continuously classifies menu items into Stars, Workhorses, Puzzles, and Dogs with dynamic price recommendations.',
      capabilityTag: 'Menu Engineering',
    },
    {
      problem: 'Fragmented Vendor Coordination',
      opportunity: 'Consolidated PO dispatch & SLA auditing',
      solution:
        'Supplier Intelligence: Automatically splits purchase orders to optimal suppliers based on price, delivery reliability, and cut quality.',
      capabilityTag: 'Vendor Orchestration',
    },
    {
      problem: 'Generic Guest Dining Experiences',
      opportunity: 'Dine-in behavioral tagging',
      solution:
        'Customer Segmentation: Profiles high-spend corporate accounts, family banquet bookers, and delivery-first consumers.',
      capabilityTag: 'Guest Intelligence',
    },
    {
      problem: 'Guest Churn & Infrequent Visits',
      opportunity: 'Predictive visit cadence prompter',
      solution:
        'Repeat Customer Prediction: Identifies drop-offs in usual dining frequency and triggers personalized culinary tasting invites.',
      capabilityTag: 'Retention Engine',
    },
    {
      problem: 'Discrepancies Across Regional Branches',
      opportunity: 'Unified multi-outlet variance dashboard',
      solution:
        'Multi-Outlet Analytics: Tracks recipe adherence, food cost variance, and prep productivity across every branch location.',
      capabilityTag: 'Multi-Branch Sync',
    },
  ],

  // 05 Intelligent Workflow (6 Steps)
  workflowPipeline: {
    input: {
      source: 'POS Historical Sales & Weather Webhook',
      details:
        'Ingesting 90-day item consumption telemetry + Saturday forecast + rainy weather advisory.',
      rawSignal:
        'Historical Saturday Average: 440 covers. Weather alert: 80% heavy rainfall anticipated.',
    },
    intelligence: {
      diagnosis:
        'Dine-in covers projected to drop 22%; online delivery curry orders projected to surge +70%.',
      metricScored: 'Forecast Precision Score: 98.4%',
    },
    recommendation: {
      actionProposed:
        'Increase Butter Chicken & Biryani batch prep +35%; reduce fresh pasta & chilled seafood prep -45%.',
      confidence: '97.2% recipe optimal',
    },
    action: {
      stepsExecuted: [
        'Calculated exact raw poultry & basmati rice inventory requirements',
        'Issued morning purchase orders to primary meat and packaging vendors',
        'Dispatched staged kitchen prep sheets to head chef tablet',
        'Adjusted online delivery aggregator prep buffer to 12 mins',
      ],
      targetSystem: 'Kitchen Display System & Vendor PO Gateway',
    },
    result: {
      outcome:
        'Zero dish stockouts achieved during peak dinner rush; shift food wastage kept below 2.1%.',
      timeToImpact: 'Instantaneous shift planning',
    },
  },

  // 06 Interactive Demo
  interactiveDemo: {
    scenarioTitle: 'Predictive Kitchen Prep & Inventory Dispatch Engine',
    scenarioSubtitle:
      'Simulate scenario-driven demand forecasting across Weekdays, Weekends, Rain, and Festivals.',
    simulatedSignal: {
      Shift: 'Tomorrow Evening Service',
      ProjectedCovers: '240 Dine-in / 110 Delivery',
      TopMovingDish: 'Slow-Cooked Dum Biryani (85 pots)',
      CriticalIngredient: 'Fresh Boneless Poultry (44 kg required)',
      EstimatedFoodCost: '27.4% (Industry target < 30%)',
    },
    engineReasoning:
      'Shift forecast synthesized from historical sales patterns, weather telemetry, and active table bookings.',
    automatedActions: [
      'Generated dish-level prep quantities and par-cooking milestones',
      'Calculated inventory shortfalls and generated vendor purchase order',
      'Balanced station assignments across grill, curry, and bakery lines',
      'Activated delivery packaging stage for expedited rider dispatch',
    ],
    verifiedOutcome: 'Kitchen prep roadmap locked with guaranteed zero stockout buffer.',
    executionDuration: 'Sub-second calculation',
  },

  // 07 Business Intelligence
  businessIntelligence: {
    insights:
      'Butter Chicken and Dum Biryani comprise 62% of high-margin dinner contribution with zero spoilage risk.',
    predictions:
      'Weekend dinner rush projected to require 48% more marinated poultry and auxiliary tandoor heating.',
    risks:
      'Fresh Atlantic Salmon and heavy cream sauces show elevated spoilage risk if prep batch sizes exceed 35 portions.',
    opportunities:
      'Automated recipe depletion tracking can recover an estimated ₹2,48,000 in monthly kitchen waste reduction.',
    recommendations:
      'Stagger Biryani handi sealing into two cycles (11:00 AM and 6:30 PM) to eliminate cold leftover write-offs.',
  },

  // 08 Business Impact
  businessImpact: {
    time: 'Recovers 14+ hours per week per head chef previously spent on manual prep list calculation and vendor phone calls.',
    efficiency:
      'Cuts average kitchen ticket times by 50% (down from 24.8 mins to 12.4 mins) through intelligent station pacing.',
    customerExperience:
      'Guarantees zero dish stockouts on signature items and ensures consistent plate temperatures.',
    operations:
      'Eliminates 68% of food waste through dynamic time-staged prep batching and live inventory depletion.',
    decisionMaking:
      'Provides multi-outlet culinary directors real-time visibility into recipe compliance, food cost variance, and dish margins.',
    visibility:
      'Unified multi-outlet dashboard tracking dish velocity, station load, and supplier order status.',
  },
  additionalCapabilities: [
    {
      groupTitle: 'Kitchen Display System (KDS) Pacing',
      summary: 'Synchronizes order release across hot line, pantry, and expo.',
      features: [
        'Station load balancing',
        'Multi-course cook countdowns',
        'Dynamic prep batch timing',
      ],
    },
    {
      groupTitle: 'Supplier & Vendor EDI Automation',
      summary: 'Automated purchase orders for produce, meats, and beverages.',
      features: [
        'Dynamic par level adjustments',
        'Price variance detection',
        'Receiving slip OCR validation',
      ],
    },
    {
      groupTitle: 'Guest Loyalty & Dietary Engine',
      summary: 'Recognizes VIP diners and tracks allergy preferences automatically.',
      features: [
        'VIP table preference flags',
        'Allergen safety prompts',
        'Automated anniversary invitations',
      ],
    },
  ],
};
