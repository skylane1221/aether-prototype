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

export const CAFE_BI_DATA = {
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
