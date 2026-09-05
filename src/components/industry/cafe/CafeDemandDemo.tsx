import React, { useState } from 'react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { CAFE_NEXT_DAY_PLANS, CafeNextDayPlan } from '../../../data/cafeData';
import {
  Coffee,
  Croissant,
  PackageCheck,
  Users,
  Sparkles,
  Clock,
  Sun,
  Flame,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Layers,
  Sliders,
} from 'lucide-react';
import { cn } from '../../../utils/cn';

const HISTORICAL_CAFE_BASELINE = [
  { item: 'House Flat White & Latte', category: 'Espresso Bar', avgDaily: '320 cups', peakWindow: '7:30 - 9:30 AM', margin: '82%' },
  { item: 'Cold Drip / Nitrogen Nitro Kegs', category: 'Cold Brew', avgDaily: '140 cups', peakWindow: '11:00 AM - 2:00 PM', margin: '88%' },
  { item: 'Oat Milk Cortado & Specialty Pourover', category: 'Hand Brew', avgDaily: '95 cups', peakWindow: '8:00 - 10:00 AM', margin: '80%' },
  { item: 'Artisan Butter & Almond Croissants', category: 'Pastry Par-Bake', avgDaily: '110 bakes', peakWindow: '7:15 - 9:00 AM', margin: '76%' },
  { item: 'Smoked Sourdough Melts & Toasties', category: 'All-Day Kitchen', avgDaily: '85 orders', peakWindow: '12:00 - 2:00 PM', margin: '74%' },
];

export const CafeDemandDemo: React.FC = () => {
  const [activePlanKey, setActivePlanKey] = useState<'weekday' | 'weekend'>('weekday');
  const [activeSection, setActiveSection] = useState<'coffee' | 'food' | 'inventory' | 'staffing' | 'hourly'>('coffee');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const plan = CAFE_NEXT_DAY_PLANS[activePlanKey];

  const handleTogglePlan = (key: 'weekday' | 'weekend') => {
    setIsGenerating(true);
    setActivePlanKey(key);
    setTimeout(() => {
      setIsGenerating(false);
    }, 400);
  };

  return (
    <div className="space-y-8">
      {/* Container Sandbox */}
      <Card className="p-0 border-amber-900/60 overflow-hidden shadow-2xl bg-stone-950">
        {/* Terminal Header */}
        <div className="bg-stone-900 px-4 sm:px-6 py-3.5 border-b border-stone-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-amber-500 font-semibold">
                aether-roast-engine
              </span>
              <span className="text-text-muted text-xs">/</span>
              <span className="text-xs font-mono text-text-muted">
                next-day-barista-dispatch
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
              SIMULATED DEMO
            </span>
            <span className="text-[10px] font-mono bg-amber-500/10 text-amber-400 border border-amber-500/30 px-2 py-0.5 rounded">
              Live Barista Calibrator
            </span>
          </div>
        </div>

        {/* 5-Step Cafe Demo Pipeline Progress Bar */}
        <div className="bg-stone-900/80 border-b border-stone-800 px-4 sm:px-6 py-2.5 flex items-center justify-between gap-1 overflow-x-auto text-[11px] font-mono">
          {[
            '1. Historical Sales',
            '2. Next-Day Forecast',
            '3. Preparation Recommendation',
            '4. Inventory Recommendation',
            '5. Staffing Recommendation',
          ].map((phase, idx, arr) => (
            <React.Fragment key={phase}>
              <div className="flex items-center gap-1.5 text-amber-300 font-semibold shrink-0">
                <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center text-[9px] font-bold">
                  {idx + 1}
                </span>
                <span>{phase.split('. ')[1]}</span>
              </div>
              {idx < arr.length - 1 && (
                <ArrowRight className="w-3 h-3 text-stone-600 shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Sandbox Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Step 1: Historical Sales Baseline */}
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider">
                  Step 1: Historical Beverage & Pastry Sales Baseline (30-Day Moving Average)
                </h4>
              </div>
              <span className="text-[11px] font-mono text-text-muted">Source: POS & Counter Stream</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {HISTORICAL_CAFE_BASELINE.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-stone-900/80 border border-stone-800 space-y-2 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-amber-500 uppercase font-semibold block">
                      {item.category}
                    </span>
                    <h5 className="text-xs font-bold text-white leading-snug mt-0.5 line-clamp-1">
                      {item.item}
                    </h5>
                  </div>

                  <div className="pt-2 border-t border-stone-800/80 space-y-0.5 text-xs font-mono">
                    <div className="flex items-center justify-between">
                      <span className="text-stone-400 text-[10px]">Avg Daily:</span>
                      <span className="text-white font-bold">{item.avgDaily}</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] text-amber-400">
                      <span>Peak:</span>
                      <span>{item.peakWindow}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step 2: Day Scenario Switcher & Next-Day Forecast */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-stone-800 pt-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider">
                  Step 2: Next-Day Commuter & Weather Forecast Target:
                </h4>
              </div>
              <p className="text-xs text-text-muted">
                Synthesizes weather radar, office occupancy curves, and roastery degassing logs.
              </p>
            </div>

            <div className="flex items-center gap-2 p-1 rounded-xl bg-stone-900 border border-stone-800">
              <button
                onClick={() => handleTogglePlan('weekday')}
                className={cn(
                  'px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5',
                  activePlanKey === 'weekday'
                    ? 'bg-amber-600 text-stone-950 font-bold shadow-sm'
                    : 'text-stone-400 hover:text-white'
                )}
              >
                <Sun className="w-3.5 h-3.5" />
                <span>Thursday Commuter Rush</span>
              </button>

              <button
                onClick={() => handleTogglePlan('weekend')}
                className={cn(
                  'px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5',
                  activePlanKey === 'weekend'
                    ? 'bg-amber-600 text-stone-950 font-bold shadow-sm'
                    : 'text-stone-400 hover:text-white'
                )}
              >
                <Coffee className="w-3.5 h-3.5" />
                <span>Saturday Artisan Brunch</span>
              </button>
            </div>
          </div>

          {/* 2. Overview Banner */}
          <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4 animate-fade-in">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Badge variant="warning" size="sm" className="font-mono text-[10px]">
                  {plan.dayName}
                </Badge>
                <span className="text-xs text-amber-300/90 font-mono">
                  {plan.weatherCondition}
                </span>
              </div>
              <p className="text-xs text-stone-300">
                Aether forecast has synthesized 90-day commuter transaction trends, morning weather radar, and roastery bean degassing schedules.
              </p>
            </div>

            <div className="flex items-center gap-5 font-mono text-xs border-t md:border-t-0 md:border-l border-amber-500/20 pt-3 md:pt-0 md:pl-6 shrink-0">
              <div>
                <span className="text-[10px] text-text-muted uppercase block">Projected Cups & Orders</span>
                <span className="text-2xl font-extrabold text-white">{plan.projectedOrders}</span>
              </div>
              <div>
                <span className="text-[10px] text-text-muted uppercase block">Estimated Revenue</span>
                <span className="text-2xl font-extrabold text-emerald-400">{plan.projectedRevenue}</span>
              </div>
            </div>
          </div>

          {/* 3. Section Selector Tabs */}
          <div className="flex items-center gap-2 border-b border-stone-800 pb-3 flex-wrap">
            <button
              onClick={() => setActiveSection('coffee')}
              className={cn(
                'px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5',
                activeSection === 'coffee'
                  ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40'
                  : 'text-stone-400 hover:text-white'
              )}
            >
              <Coffee className="w-3.5 h-3.5 text-amber-500" />
              <span>Step 3: Coffee Preparation ({plan.coffeePrep.length})</span>
            </button>

            <button
              onClick={() => setActiveSection('food')}
              className={cn(
                'px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5',
                activeSection === 'food'
                  ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40'
                  : 'text-stone-400 hover:text-white'
              )}
            >
              <Croissant className="w-3.5 h-3.5 text-orange-400" />
              <span>Step 3: Pastry Par-Bake ({plan.foodPrep.length})</span>
            </button>

            <button
              onClick={() => setActiveSection('inventory')}
              className={cn(
                'px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5',
                activeSection === 'inventory'
                  ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40'
                  : 'text-stone-400 hover:text-white'
              )}
            >
              <PackageCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Step 4: Inventory Recommendations ({plan.inventoryRequirement.length})</span>
            </button>

            <button
              onClick={() => setActiveSection('staffing')}
              className={cn(
                'px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5',
                activeSection === 'staffing'
                  ? 'bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/40'
                  : 'text-stone-400 hover:text-white'
              )}
            >
              <Users className="w-3.5 h-3.5 text-indigo-400" />
              <span>Step 5: Staffing Recommendations ({plan.staffingPlan.length})</span>
            </button>

            <button
              onClick={() => setActiveSection('hourly')}
              className={cn(
                'px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5',
                activeSection === 'hourly'
                  ? 'bg-sky-500/20 text-sky-300 font-bold border border-sky-500/40'
                  : 'text-stone-400 hover:text-white'
              )}
            >
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>Rush Breakdown</span>
            </button>
          </div>

          {/* Section 1: Coffee Preparation */}
          {activeSection === 'coffee' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
              {plan.coffeePrep.map((item, idx) => (
                <Card
                  key={idx}
                  className="p-5 bg-stone-900/90 border-stone-800 hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2 pb-2 border-b border-stone-800">
                      <div>
                        <span className="text-[10px] font-mono text-amber-500 uppercase font-semibold">
                          Target Yield: {item.targetVolume}
                        </span>
                        <h5 className="text-sm font-bold text-white mt-0.5">{item.item}</h5>
                      </div>
                      <Coffee className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                    </div>

                    <div className="p-3 rounded-lg bg-stone-950 border border-stone-850 space-y-1">
                      <span className="text-[10px] font-mono text-amber-300 uppercase block font-semibold">
                        Dial-In Calibration:
                      </span>
                      <p className="text-xs text-stone-200 font-mono">{item.dialInSettings}</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-stone-800/80 text-[11px] text-stone-400 font-mono flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{item.holdingProtocol}</span>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Section 2: Food & Pastry Prep */}
          {activeSection === 'food' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in">
              {plan.foodPrep.map((item, idx) => (
                <Card
                  key={idx}
                  className="p-5 bg-stone-900/90 border-stone-800 hover:border-orange-500/40 transition-all flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2 pb-2 border-b border-stone-800">
                      <div>
                        <span className="text-[10px] font-mono text-orange-400 uppercase font-semibold">
                          Par-Bake Target: {item.parBakeCount}
                        </span>
                        <h5 className="text-sm font-bold text-white mt-0.5">{item.item}</h5>
                      </div>
                      <Croissant className="w-4 h-4 text-orange-400 shrink-0 mt-1" />
                    </div>

                    <div className="p-3 rounded-lg bg-stone-950 border border-stone-850 space-y-1">
                      <span className="text-[10px] font-mono text-orange-300 uppercase block font-semibold">
                        Oven / Prep Window:
                      </span>
                      <p className="text-xs text-stone-200">{item.assemblyWindow}</p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-stone-800/80 text-[11px] text-stone-400 font-mono flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{item.shelfLifeStatus}</span>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Section 3: Inventory Requirements */}
          {activeSection === 'inventory' && (
            <Card className="p-5 bg-stone-900/90 border-stone-800 space-y-4 animate-fade-in">
              <div className="flex items-center justify-between pb-2 border-b border-stone-800">
                <span className="text-xs font-semibold text-white uppercase tracking-wider">
                  Consumable Burn Rate & Roastery Restock
                </span>
                <span className="text-xs font-mono text-emerald-400">Zero Stockout Guard</span>
              </div>

              <div className="divide-y divide-stone-800">
                {plan.inventoryRequirement.map((inv, idx) => (
                  <div
                    key={idx}
                    className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono"
                  >
                    <div>
                      <div className="text-sm font-bold text-white font-sans">{inv.ingredient}</div>
                      <div className="text-[11px] text-stone-400 mt-0.5">
                        Stock on Hand: <span className="text-stone-200">{inv.stockOnHand}</span> | Needed Tomorrow: <span className="text-white font-bold">{inv.neededTomorrow}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-stone-950 border border-stone-800 text-xs text-stone-200 font-sans">
                        {inv.purchaseAction}
                      </div>
                      <span
                        className={cn(
                          'text-[10px] px-2.5 py-1 rounded font-bold uppercase shrink-0',
                          inv.status === 'Critical'
                            ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                            : inv.status === 'Reorder Now'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                            : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        )}
                      >
                        {inv.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Section 4: Staffing Plan */}
          {activeSection === 'staffing' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 animate-fade-in">
              {plan.staffingPlan.map((staff, idx) => (
                <Card
                  key={idx}
                  className="p-5 bg-stone-900/90 border-stone-800 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between pb-2 border-b border-stone-800">
                      <div>
                        <span className="text-[10px] font-mono text-indigo-400 uppercase font-bold">
                          Headcount: {staff.recommendedHeadcount} Staff
                        </span>
                        <h5 className="text-sm font-bold text-white mt-0.5">{staff.role}</h5>
                      </div>
                      <span className="text-xs font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                        {staff.shiftHours}
                      </span>
                    </div>

                    <p className="text-xs text-stone-300 leading-relaxed">{staff.stationFocus}</p>
                  </div>

                  <div className="pt-2 border-t border-stone-800/80 text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Roster Synced to Barista Schedule</span>
                  </div>
                </Card>
              ))}
            </div>
          )}

          {/* Section 5: Hourly Breakdown */}
          {activeSection === 'hourly' && (
            <Card className="p-5 bg-stone-900/90 border-stone-800 space-y-3 animate-fade-in">
              <div className="flex items-center justify-between pb-2 border-b border-stone-800">
                <span className="text-xs font-semibold text-white uppercase tracking-wider">
                  Hourly Cup Velocity & Rush Curve
                </span>
                <span className="text-xs font-mono text-amber-400">Peak Surge: 8:00 - 10:00 AM</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse font-mono">
                  <thead>
                    <tr className="border-b border-stone-800 text-stone-400 text-[10px] uppercase">
                      <th className="p-3">Time Window</th>
                      <th className="p-3">Expected Beverages</th>
                      <th className="p-3">Expected Food</th>
                      <th className="p-3">Rush Intensity</th>
                      <th className="p-3">Active Baristas</th>
                      <th className="p-3">Expeditors</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-800">
                    {plan.hourlyBreakdown.map((row, i) => (
                      <tr key={i} className="hover:bg-stone-950/60 transition-colors">
                        <td className="p-3 font-bold text-white">{row.timeSlot}</td>
                        <td className="p-3 font-bold text-amber-400">{row.expectedBeverages} cups</td>
                        <td className="p-3 text-stone-300">{row.expectedFoodItems} items</td>
                        <td className="p-3">
                          <span
                            className={cn(
                              'px-2 py-0.5 rounded text-[10px] font-bold uppercase',
                              row.peakRushLevel === 'Peak Morning Rush'
                                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                                : row.peakRushLevel === 'Afternoon Surge'
                                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                                : 'bg-stone-800 text-stone-300'
                            )}
                          >
                            {row.peakRushLevel}
                          </span>
                        </td>
                        <td className="p-3 font-bold text-emerald-400">{row.recommendedBaristas} Baristas</td>
                        <td className="p-3 text-stone-300">{row.recommendedExpeditors} Expeditor</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          )}
        </div>
      </Card>
    </div>
  );
};
