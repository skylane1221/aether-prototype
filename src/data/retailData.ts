export interface RetailProductDemoItem {
  id: string;
  name: string;
  sku: string;
  category: string;
  price: string;
  currentStock: number;
  recentSales: number; // last 7 days
  averageDailyDemand: number;
  predictedDemand: number; // next 7 days
  stockoutRisk: 'Critical (< 2 Days)' | 'High (< 4 Days)' | 'Moderate' | 'Overstock Risk';
  recommendedReorder: number;
  supplier: string;
  leadTimeDays: number;
  suggestedAction: string;
  unitCost: string;
  projectedRevenueAtRisk: string;
  stockTrajectory: { day: string; projectedStock: number; unassistedStock: number }[];
  aetherDiagnosis: {
    rootCause: string;
    velocityChange: string;
    leadTimeBuffer: string;
    crossLocationStock: string;
  };
  generatedReorderPO: {
    poNumber: string;
    supplierName: string;
    units: number;
    totalAmount: string;
    deliveryMethod: string;
    estimatedArrival: string;
    warehouseDestination: string;
  };
}

export const RETAIL_DEMO_PRODUCTS: RetailProductDemoItem[] = [
  {
    id: 'running-shoes-9',
    name: 'Running Shoes — Size 9',
    sku: 'FW-RN-09-BLK',
    category: 'Footwear',
    price: '₹9,499',
    currentStock: 8,
    recentSales: 34,
    averageDailyDemand: 4.8,
    predictedDemand: 42,
    stockoutRisk: 'Critical (< 2 Days)',
    recommendedReorder: 60,
    supplier: 'AeroStep Athletics (Hub Mumbai)',
    leadTimeDays: 2,
    suggestedAction:
      'Dispatch emergency 60-unit EDI purchase order; route 15 units directly to high-traffic flagship store.',
    unitCost: '₹4,200',
    projectedRevenueAtRisk: '₹3,22,966',
    stockTrajectory: [
      { day: 'Today', projectedStock: 8, unassistedStock: 8 },
      { day: '+1 Day', projectedStock: 3, unassistedStock: 3 },
      { day: '+2 Days', projectedStock: 63, unassistedStock: 0 },
      { day: '+3 Days', projectedStock: 57, unassistedStock: 0 },
      { day: '+4 Days', projectedStock: 51, unassistedStock: 0 },
      { day: '+5 Days', projectedStock: 45, unassistedStock: 0 },
      { day: '+6 Days', projectedStock: 39, unassistedStock: 0 },
      { day: '+7 Days', projectedStock: 33, unassistedStock: 0 },
    ],
    aetherDiagnosis: {
      rootCause:
        'Regional marathon registration surge and local weekend runner club promotion boosted demand by +38%.',
      velocityChange: '+38% 7-day velocity acceleration',
      leadTimeBuffer: '2-day expedited supplier SLA protects against 4-day stockout gap',
      crossLocationStock:
        '2 units in suburban outlet with zero sales in 14 days flagged for inter-store transfer',
    },
    generatedReorderPO: {
      poNumber: 'PO-RET-2026-8841',
      supplierName: 'AeroStep Athletics Ltd.',
      units: 60,
      totalAmount: '₹2,52,000',
      deliveryMethod: 'Priority Ground Freight (2-Day Guaranteed)',
      estimatedArrival: 'Tomorrow, 08:30 AM',
      warehouseDestination: 'Central Distribution Hub + Flagship Store',
    },
  },
  {
    id: 'cotton-hoodie-l',
    name: 'Organic Cotton Hoodie — Black / L',
    sku: 'AP-HD-L-BLK',
    category: 'Apparel',
    price: '₹3,299',
    currentStock: 14,
    recentSales: 28,
    averageDailyDemand: 4.0,
    predictedDemand: 35,
    stockoutRisk: 'High (< 4 Days)',
    recommendedReorder: 80,
    supplier: 'Verde Organics Mill (Tirupur)',
    leadTimeDays: 3,
    suggestedAction:
      'Generate batch reorder of 80 units; trigger automated restock notification for 18 wishlist users.',
    unitCost: '₹1,350',
    projectedRevenueAtRisk: '₹1,15,465',
    stockTrajectory: [
      { day: 'Today', projectedStock: 14, unassistedStock: 14 },
      { day: '+1 Day', projectedStock: 9, unassistedStock: 9 },
      { day: '+2 Days', projectedStock: 4, unassistedStock: 4 },
      { day: '+3 Days', projectedStock: 80, unassistedStock: 0 },
      { day: '+4 Days', projectedStock: 75, unassistedStock: 0 },
      { day: '+5 Days', projectedStock: 70, unassistedStock: 0 },
      { day: '+6 Days', projectedStock: 65, unassistedStock: 0 },
      { day: '+7 Days', projectedStock: 60, unassistedStock: 0 },
    ],
    aetherDiagnosis: {
      rootCause:
        'Sudden temperature drop across northern metropolitan zones and social influencer tag drove cart additions.',
      velocityChange: '+28% seasonal demand shift',
      leadTimeBuffer: '3-day production window synchronized before weekend footfall surge',
      crossLocationStock:
        'Stock balanced across 3 offline stores with unified online availability buffer',
    },
    generatedReorderPO: {
      poNumber: 'PO-RET-2026-8842',
      supplierName: 'Verde Organics Mills',
      units: 80,
      totalAmount: '₹1,08,000',
      deliveryMethod: 'Express Consolidated Trucking',
      estimatedArrival: 'In 3 Days, 10:00 AM',
      warehouseDestination: 'North Regional Fulfillment Center',
    },
  },
  {
    id: 'leather-backpack',
    name: 'Minimalist Leather Backpack — Tan',
    sku: 'AC-BP-TN-01',
    category: 'Accessories',
    price: '₹6,899',
    currentStock: 5,
    recentSales: 16,
    averageDailyDemand: 2.3,
    predictedDemand: 22,
    stockoutRisk: 'Critical (< 2 Days)',
    recommendedReorder: 40,
    supplier: 'Artisan Goods Workshop',
    leadTimeDays: 2,
    suggestedAction:
      'Issue immediate 40-unit purchase trigger; lock in supplier pre-order discount.',
    unitCost: '₹2,900',
    projectedRevenueAtRisk: '₹1,51,778',
    stockTrajectory: [
      { day: 'Today', projectedStock: 5, unassistedStock: 5 },
      { day: '+1 Day', projectedStock: 2, unassistedStock: 2 },
      { day: '+2 Days', projectedStock: 40, unassistedStock: 0 },
      { day: '+3 Days', projectedStock: 37, unassistedStock: 0 },
      { day: '+4 Days', projectedStock: 34, unassistedStock: 0 },
      { day: '+5 Days', projectedStock: 31, unassistedStock: 0 },
      { day: '+6 Days', projectedStock: 28, unassistedStock: 0 },
      { day: '+7 Days', projectedStock: 25, unassistedStock: 0 },
    ],
    aetherDiagnosis: {
      rootCause:
        'Corporate gifting season and high product page conversion (6.8%) creating rapid stock depletion.',
      velocityChange: '+44% conversion lift',
      leadTimeBuffer: 'Critical replenishment before weekend high-margin shopping traffic',
      crossLocationStock: 'Zero surplus inventory in secondary hubs',
    },
    generatedReorderPO: {
      poNumber: 'PO-RET-2026-8843',
      supplierName: 'Artisan Goods Workshop Ltd.',
      units: 40,
      totalAmount: '₹1,16,000',
      deliveryMethod: 'Air Courier Dedicated',
      estimatedArrival: 'Tomorrow, 04:00 PM',
      warehouseDestination: 'Central Metro Warehouse',
    },
  },
  {
    id: 'wireless-headphones-pro',
    name: 'Noise-Cancelling Headphones Pro — Space Grey',
    sku: 'EL-HP-PRO-GRY',
    category: 'Electronics',
    price: '₹18,999',
    currentStock: 48,
    recentSales: 6,
    averageDailyDemand: 0.8,
    predictedDemand: 7,
    stockoutRisk: 'Overstock Risk',
    recommendedReorder: 0,
    supplier: 'SoundWave Global',
    leadTimeDays: 5,
    suggestedAction:
      'Pause replenishment; launch 12% dynamic bundle promotion with laptop sleeve to accelerate sell-through.',
    unitCost: '₹9,800',
    projectedRevenueAtRisk: '₹4,70,400 (Capital Tied)',
    stockTrajectory: [
      { day: 'Today', projectedStock: 48, unassistedStock: 48 },
      { day: '+1 Day', projectedStock: 46, unassistedStock: 47 },
      { day: '+2 Days', projectedStock: 43, unassistedStock: 46 },
      { day: '+3 Days', projectedStock: 40, unassistedStock: 45 },
      { day: '+4 Days', projectedStock: 36, unassistedStock: 44 },
      { day: '+5 Days', projectedStock: 32, unassistedStock: 43 },
      { day: '+6 Days', projectedStock: 28, unassistedStock: 42 },
      { day: '+7 Days', projectedStock: 24, unassistedStock: 41 },
    ],
    aetherDiagnosis: {
      rootCause:
        '60 days of holding inventory with decelerating organic demand after initial product launch peak.',
      velocityChange: '-32% organic velocity slowdown',
      leadTimeBuffer: 'Zero reorder needed; working capital redeployment recommended',
      crossLocationStock: 'Rebalance 15 units to high-tech downtown experiential showroom',
    },
    generatedReorderPO: {
      poNumber: 'ADJ-RET-2026-4410',
      supplierName: 'SoundWave Global (Hold Restock)',
      units: 0,
      totalAmount: '₹0 (Holding Alert)',
      deliveryMethod: 'Internal Rebalance & Bundle Campaign',
      estimatedArrival: 'Campaign Live in 2 Hours',
      warehouseDestination: 'Omnichannel Store Allocation',
    },
  },
];

export interface RetailBiTopProduct {
  name: string;
  sku: string;
  category: string;
  unitsSold7d: number;
  revenue7d: string;
  velocityRating: 'Very High' | 'High' | 'Steady';
  stockDaysLeft: number;
  health: 'Optimal' | 'Low Stock' | 'Action Needed';
}

export interface RetailBiAtRiskProduct {
  name: string;
  sku: string;
  riskType: 'Imminent Stockout' | 'Critical Depletion' | 'Aging Overstock' | 'Margin Erosion';
  severity: 'Critical' | 'High' | 'Warning';
  stockOnHand: number;
  daysOfRunway: string;
  financialImpact: string;
  prescribedFix: string;
}

export interface RetailBiDemandPoint {
  day: string;
  apparelForecast: number;
  footwearForecast: number;
  accessoriesForecast: number;
  electronicsForecast: number;
  actuals: number;
}

export interface RetailBiPrescription {
  id: string;
  priority: 'Immediate' | 'High' | 'Scheduled';
  category: 'Inventory Reorder' | 'Dynamic Pricing' | 'Customer Retention' | 'Store Rebalance';
  title: string;
  rationale: string;
  projectedROI: string;
  actionText: string;
}

export const RETAIL_BI_DATA = {
  inventoryHealth: {
    healthScore: 94.2,
    inStockRate: '98.4%',
    stockTurnRate: '6.4x / yr',
    excessStockRatio: '3.2%',
    deadStockEliminated: '₹14.8L saved',
    orderFulfillmentSLA: '99.1%',
  },
  topProducts: [
    {
      name: 'Running Shoes — Size 9',
      sku: 'FW-RN-09-BLK',
      category: 'Footwear',
      unitsSold7d: 34,
      revenue7d: '₹3,22,966',
      velocityRating: 'Very High',
      stockDaysLeft: 1.6,
      health: 'Action Needed',
    },
    {
      name: 'Structured Linen Overshirt — Olive',
      sku: 'AP-LN-OLV-02',
      category: 'Apparel',
      unitsSold7d: 29,
      revenue7d: '₹1,21,771',
      velocityRating: 'High',
      stockDaysLeft: 12.4,
      health: 'Optimal',
    },
    {
      name: 'Minimalist Leather Backpack',
      sku: 'AC-BP-TN-01',
      category: 'Accessories',
      unitsSold7d: 16,
      revenue7d: '₹1,10,384',
      velocityRating: 'High',
      stockDaysLeft: 2.1,
      health: 'Low Stock',
    },
    {
      name: 'Activewear Compression Tights',
      sku: 'AP-ACT-TGT-M',
      category: 'Apparel',
      unitsSold7d: 42,
      revenue7d: '₹92,358',
      velocityRating: 'Very High',
      stockDaysLeft: 18.0,
      health: 'Optimal',
    },
    {
      name: 'Canvas Weekender Duffel',
      sku: 'AC-DF-WKD-NVY',
      category: 'Accessories',
      unitsSold7d: 12,
      revenue7d: '₹59,988',
      velocityRating: 'Steady',
      stockDaysLeft: 24.5,
      health: 'Optimal',
    },
  ] as RetailBiTopProduct[],
  atRiskProducts: [
    {
      name: 'Running Shoes — Size 9',
      sku: 'FW-RN-09-BLK',
      riskType: 'Imminent Stockout',
      severity: 'Critical',
      stockOnHand: 8,
      daysOfRunway: '1.6 Days',
      financialImpact: '₹3,22,000 lost revenue',
      prescribedFix: 'Autonomous 60-unit PO dispatch to AeroStep Athletics with 2-day delivery.',
    },
    {
      name: 'Minimalist Leather Backpack — Tan',
      sku: 'AC-BP-TN-01',
      riskType: 'Critical Depletion',
      severity: 'Critical',
      stockOnHand: 5,
      daysOfRunway: '2.1 Days',
      financialImpact: '₹1,51,000 lost revenue',
      prescribedFix: 'Trigger 40-unit express batch reorder and priority store allocation.',
    },
    {
      name: 'Noise-Cancelling Headphones Pro',
      sku: 'EL-HP-PRO-GRY',
      riskType: 'Aging Overstock',
      severity: 'High',
      stockOnHand: 48,
      daysOfRunway: '60+ Days',
      financialImpact: '₹4,70,400 capital tied up',
      prescribedFix:
        'Halt restock; launch 12% bundle discount with laptop sleeves to liquidate stock.',
    },
    {
      name: 'Merino Wool Sweater — Charcoal (XL)',
      sku: 'AP-SW-MRN-XL',
      riskType: 'Margin Erosion',
      severity: 'Warning',
      stockOnHand: 26,
      daysOfRunway: '35 Days',
      financialImpact: '₹1,18,000 margin risk',
      prescribedFix:
        'Early targeted personalized discount to frequent knitwear buyers before seasonal change.',
    },
  ] as RetailBiAtRiskProduct[],
  demandTrend: [
    {
      day: 'Mon',
      apparelForecast: 42,
      footwearForecast: 38,
      accessoriesForecast: 22,
      electronicsForecast: 10,
      actuals: 110,
    },
    {
      day: 'Tue',
      apparelForecast: 48,
      footwearForecast: 40,
      accessoriesForecast: 24,
      electronicsForecast: 11,
      actuals: 122,
    },
    {
      day: 'Wed',
      apparelForecast: 55,
      footwearForecast: 45,
      accessoriesForecast: 28,
      electronicsForecast: 13,
      actuals: 139,
    },
    {
      day: 'Thu',
      apparelForecast: 68,
      footwearForecast: 58,
      accessoriesForecast: 34,
      electronicsForecast: 15,
      actuals: 172,
    },
    {
      day: 'Fri',
      apparelForecast: 92,
      footwearForecast: 84,
      accessoriesForecast: 48,
      electronicsForecast: 22,
      actuals: 242,
    },
    {
      day: 'Sat',
      apparelForecast: 140,
      footwearForecast: 128,
      accessoriesForecast: 76,
      electronicsForecast: 34,
      actuals: 374,
    },
    {
      day: 'Sun',
      apparelForecast: 125,
      footwearForecast: 115,
      accessoriesForecast: 68,
      electronicsForecast: 30,
      actuals: 334,
    },
  ] as RetailBiDemandPoint[],
  stockRiskDistribution: [
    {
      label: 'Critical Stockout (< 2 Days)',
      count: 14,
      percentage: '4.8%',
      color: 'bg-rose-500',
      text: 'text-rose-400',
    },
    {
      label: 'Reorder Soon (< 5 Days)',
      count: 32,
      percentage: '11.0%',
      color: 'bg-amber-500',
      text: 'text-amber-400',
    },
    {
      label: 'Optimal Stock Health',
      count: 228,
      percentage: '78.6%',
      color: 'bg-emerald-500',
      text: 'text-emerald-400',
    },
    {
      label: 'Overstock / Slow-Moving',
      count: 16,
      percentage: '5.6%',
      color: 'bg-indigo-500',
      text: 'text-indigo-400',
    },
  ],
  prescriptions: [
    {
      id: 'pres-1',
      priority: 'Immediate',
      category: 'Inventory Reorder',
      title: 'Auto-Dispatch 60 Units for Running Shoes (Size 9)',
      rationale:
        'Current stock of 8 units will breach safety threshold within 38 hours based on +38% weekend demand surge.',
      projectedROI: '+₹3.22L Protected Gross Margin',
      actionText: 'Execute Supplier PO via EDI',
    },
    {
      id: 'pres-2',
      priority: 'High',
      category: 'Store Rebalance',
      title: 'Transfer 6 Units of Tan Leather Backpack from Suburban Outlet',
      rationale:
        'Suburban store has zero sell-through in 14 days while Metro Flagship is converting 3.2 units/day.',
      projectedROI: '+₹41,394 Immediate Cash Recovery',
      actionText: 'Generate Inter-Store Transfer Order',
    },
    {
      id: 'pres-3',
      priority: 'High',
      category: 'Dynamic Pricing',
      title: 'Deploy 12% Accessory Bundle for Slow-Moving Headphones',
      rationale:
        '48 units in stock with 60-day runway; bundle prevents steep end-of-season 40% clearance markdown.',
      projectedROI: '+18% Higher Realized Margin',
      actionText: 'Activate Promotional Campaign',
    },
    {
      id: 'pres-4',
      priority: 'Scheduled',
      category: 'Customer Retention',
      title: 'Push Restock Notifications to 64 High-Intent Waitlist Customers',
      rationale:
        'Customers who viewed out-of-stock sizes have 4.6x higher conversion if alerted within 15 minutes of restock.',
      projectedROI: '62% Expected Conversion Rate',
      actionText: 'Queue Omnichannel Notifications',
    },
  ] as RetailBiPrescription[],
};

export interface RetailJourneyStep {
  stepNumber: string;
  id: string;
  title: string;
  stageName: string;
  subtitle: string;
  traditionalDrag: string;
  aetherIntelligence: string;
  metricLabel: string;
  metricValue: string;
  iconName: string;
}

export const RETAIL_JOURNEY_STEPS: RetailJourneyStep[] = [
  {
    stepNumber: '01',
    id: 'customer',
    title: 'Customer Intent',
    stageName: 'Customer',
    subtitle: 'Omnichannel Footfall & Cart Signal',
    traditionalDrag:
      'Customer walks into store or views online catalog, but browsing history and size preferences stay disconnected in fragmented silos.',
    aetherIntelligence:
      'Unifies shopper identity across physical POS, web traffic, wishlist additions, and size-specific engagement telemetry.',
    metricLabel: 'Identity Resolution',
    metricValue: 'Sub-second Match',
    iconName: 'Users',
  },
  {
    stepNumber: '02',
    id: 'purchase',
    title: 'Purchase Event',
    stageName: 'Purchase',
    subtitle: 'Point-of-Sale & Checkout Conversion',
    traditionalDrag:
      'Transactions are recorded purely as historic revenue receipts without real-time inventory velocity calculations or size depletion alerts.',
    aetherIntelligence:
      'Instantly processes line-item transaction telemetry, calculating real-time SKU velocity, basket pairings, and remaining size curves.',
    metricLabel: 'Telemetry Ingest',
    metricValue: '< 50ms Real-Time',
    iconName: 'ShoppingBag',
  },
  {
    stepNumber: '03',
    id: 'demand',
    title: 'Demand Curve',
    stageName: 'Demand',
    subtitle: 'Multi-Factor Predictive Forecasting',
    traditionalDrag:
      'Store managers rely on last year’s spreadsheets or gut-feeling guesswork, failing to anticipate micro-market surges or seasonal shifts.',
    aetherIntelligence:
      'Ingests local weather forecasts, weekend events, social trends, and historical velocity to project precise 7-14 day SKU demand.',
    metricLabel: 'Forecast Accuracy',
    metricValue: '98.4% Precision',
    iconName: 'TrendingUp',
  },
  {
    stepNumber: '04',
    id: 'inventory',
    title: 'Inventory Sync',
    stageName: 'Inventory',
    subtitle: 'Omnichannel Stock Mesh',
    traditionalDrag:
      'Stock in physical retail stores is invisible to online shoppers, causing online stockouts while store shelves sit overstocked.',
    aetherIntelligence:
      'Unified virtual inventory mesh balances physical retail racks, regional warehouses, and return transit into a single live ledger.',
    metricLabel: 'Stock Visibility',
    metricValue: '100% Unified Mesh',
    iconName: 'PackageCheck',
  },
  {
    stepNumber: '05',
    id: 'stock-risk',
    title: 'Stock Risk',
    stageName: 'Stock Risk',
    subtitle: 'Early Stockout & Overstock Diagnosis',
    traditionalDrag:
      'Out-of-stock events are only discovered when a customer asks for a missing size; overstock is noticed at end-of-season clearance.',
    aetherIntelligence:
      'Continuous cognitive monitoring calculates exact days of stock runway per SKU/size, raising red flags days before stockouts occur.',
    metricLabel: 'Stockout Prevention',
    metricValue: '-81% Stockouts',
    iconName: 'AlertTriangle',
  },
  {
    stepNumber: '06',
    id: 'reorder',
    title: 'Autonomous Reorder',
    stageName: 'Reorder',
    subtitle: 'Supplier PO Dispatch & Transfer Routing',
    traditionalDrag:
      'Buyers manually compile weekly purchase orders, leading to delayed orders, supplier lead-time mismatches, and high holding costs.',
    aetherIntelligence:
      'Automatically generates optimal purchase orders, routes inter-store stock transfers, and coordinates supplier delivery schedules.',
    metricLabel: 'PO Generation',
    metricValue: '100% Automated',
    iconName: 'Truck',
  },
  {
    stepNumber: '07',
    id: 'customer-intelligence',
    title: 'Customer Intelligence',
    stageName: 'Customer Intelligence',
    subtitle: 'Personalized Re-Engagement & Retention',
    traditionalDrag:
      'Lost stockout customers are forgotten with zero automated follow-up when replenishment arrives.',
    aetherIntelligence:
      'Automatically triggers personalized restock alerts, size-matched recommendations, and tailored promotions that turn stockouts into conversions.',
    metricLabel: 'Customer Retention',
    metricValue: '+34% Repurchase',
    iconName: 'Sparkles',
  },
];
