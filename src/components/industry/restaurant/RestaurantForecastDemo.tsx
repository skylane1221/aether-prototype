import React, { useState } from 'react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import {
  RESTAURANT_MENU_ITEMS as MENU_ITEMS,
  RESTAURANT_SCENARIO_FORECASTS as SCENARIO_FORECASTS,
  ScenarioForecast,
} from '../../../data/restaurantData';
import {
  Sparkles,
  TrendingUp,
  ChefHat,
  Boxes,
  Flame,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  CloudRain,
  PartyPopper,
  Sun,
  ShieldAlert,
  ArrowRight,
  Clock,
  Layers,
  UtensilsCrossed,
} from 'lucide-react';
import { cn } from '../../../utils/cn';

type ScenarioKey = 'tomorrow' | 'weekend' | 'rainy' | 'festival';

export const RestaurantForecastDemo: React.FC = () => {
  const [activeScenario, setActiveScenario] = useState<ScenarioKey>('tomorrow');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'items' | 'inventory' | 'operations'>('items');

  const currentForecast = SCENARIO_FORECASTS[activeScenario];

  const handleSelectScenario = (key: ScenarioKey) => {
    setIsSimulating(true);
    setActiveScenario(key);
    setTimeout(() => {
      setIsSimulating(false);
    }, 450);
  };

  return (
    <div className="space-y-8">
      {/* Interactive Sandbox Container */}
      <Card className="p-0 border-slate-700/80 overflow-hidden shadow-2xl bg-slate-950">
        {/* Terminal Header */}
        <div className="bg-slate-900/95 px-4 sm:px-6 py-3.5 border-b border-aether-border flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-amber-400 font-semibold">
                aether-culinary-kernel
              </span>
              <span className="text-text-muted text-xs">/</span>
              <span className="text-xs font-mono text-text-muted">
                predictive-prep-forecast
              </span>
            </div>
          </div>

          <Badge variant="primary" size="sm" className="font-mono text-[10px]">
            Simulated Kitchen Telemetry
          </Badge>
        </div>

        {/* Sandbox Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* 1. Historical Baseline Table */}
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider">
                  1. Historical Baseline Dish Sales (30-Day Moving Average)
                </h4>
              </div>
              <span className="text-[11px] font-mono text-text-muted">Source: POS Line Ingest</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {MENU_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-mono text-amber-400 uppercase font-semibold block">
                      {item.category}
                    </span>
                    <h5 className="text-xs font-bold text-white leading-snug mt-0.5 line-clamp-1">
                      {item.name}
                    </h5>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                    <span className="text-text-muted text-[11px]">Avg Daily:</span>
                    <span className="text-white font-bold">{item.historicalAvgDaily} {item.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Scenario Selector Buttons */}
          <div className="space-y-3 pt-2">
            <label className="text-xs font-semibold text-text-primary uppercase tracking-wider block">
              2. Select Shift Operating Condition:
            </label>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <button
                onClick={() => handleSelectScenario('tomorrow')}
                className={cn(
                  'p-4 rounded-xl border text-left transition-all flex flex-col justify-between space-y-2',
                  activeScenario === 'tomorrow'
                    ? 'bg-amber-950/30 border-amber-500/80 shadow-glow-subtle'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                )}
              >
                <div className="flex items-center justify-between">
                  <Sun className={cn('w-4 h-4', activeScenario === 'tomorrow' ? 'text-amber-400' : 'text-slate-400')} />
                  <span className="text-[10px] font-mono text-text-muted">1.0x Baseline</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Tomorrow</div>
                  <div className="text-[11px] text-text-muted">Standard Weekday Service</div>
                </div>
              </button>

              <button
                onClick={() => handleSelectScenario('weekend')}
                className={cn(
                  'p-4 rounded-xl border text-left transition-all flex flex-col justify-between space-y-2',
                  activeScenario === 'weekend'
                    ? 'bg-amber-950/30 border-amber-500/80 shadow-glow-subtle'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                )}
              >
                <div className="flex items-center justify-between">
                  <TrendingUp className={cn('w-4 h-4', activeScenario === 'weekend' ? 'text-amber-400' : 'text-slate-400')} />
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">+85% Surge</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Weekend Rush</div>
                  <div className="text-[11px] text-text-muted">High Dine-in Turnover</div>
                </div>
              </button>

              <button
                onClick={() => handleSelectScenario('rainy')}
                className={cn(
                  'p-4 rounded-xl border text-left transition-all flex flex-col justify-between space-y-2',
                  activeScenario === 'rainy'
                    ? 'bg-amber-950/30 border-amber-500/80 shadow-glow-subtle'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                )}
              >
                <div className="flex items-center justify-between">
                  <CloudRain className={cn('w-4 h-4', activeScenario === 'rainy' ? 'text-sky-400' : 'text-slate-400')} />
                  <span className="text-[10px] font-mono text-sky-400 font-bold">+110% Delivery</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Rainy Day</div>
                  <div className="text-[11px] text-text-muted">Comfort Food Delivery Surge</div>
                </div>
              </button>

              <button
                onClick={() => handleSelectScenario('festival')}
                className={cn(
                  'p-4 rounded-xl border text-left transition-all flex flex-col justify-between space-y-2',
                  activeScenario === 'festival'
                    ? 'bg-amber-950/30 border-amber-500/80 shadow-glow-subtle'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                )}
              >
                <div className="flex items-center justify-between">
                  <PartyPopper className={cn('w-4 h-4', activeScenario === 'festival' ? 'text-amber-400' : 'text-slate-400')} />
                  <span className="text-[10px] font-mono text-amber-300 font-bold">2.2x Peak</span>
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Festival Period</div>
                  <div className="text-[11px] text-text-muted">Banquets & Group Orders</div>
                </div>
              </button>
            </div>
          </div>

          {/* 3. Generated Shift Forecast Dashboard */}
          <div className="space-y-6 pt-2 animate-fade-in">
            {/* Scenario Summary Banner */}
            <div className="p-5 rounded-2xl bg-amber-950/20 border border-amber-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="primary" size="sm" className="font-mono text-[10px]">
                    Scenario Active: {currentForecast.scenarioName}
                  </Badge>
                  <span className="text-xs font-mono text-emerald-400 font-bold">
                    Multiplier: {currentForecast.footfallMultiplier}x
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  {currentForecast.scenarioDescription}
                </p>
              </div>

              <div className="flex items-center gap-4 font-mono text-xs border-t md:border-t-0 md:border-l border-amber-500/20 pt-3 md:pt-0 md:pl-6 shrink-0">
                <div>
                  <span className="text-[10px] text-text-muted uppercase block">Projected Covers</span>
                  <span className="text-xl font-extrabold text-white">{currentForecast.expectedCovers}</span>
                </div>
                <div>
                  <span className="text-[10px] text-text-muted uppercase block">Delivery Share</span>
                  <span className="text-xl font-extrabold text-sky-400">{currentForecast.deliveryShare}%</span>
                </div>
              </div>
            </div>

            {/* Navigation Tabs for Forecast Views */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('items')}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-xs font-mono transition-all',
                    activeTab === 'items'
                      ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40'
                      : 'text-text-muted hover:text-white'
                  )}
                >
                  Dish Demand & Prep ({currentForecast.items.length})
                </button>
                <button
                  onClick={() => setActiveTab('inventory')}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-xs font-mono transition-all',
                    activeTab === 'inventory'
                      ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40'
                      : 'text-text-muted hover:text-white'
                  )}
                >
                  Inventory Orders ({currentForecast.inventorySummary.length})
                </button>
                <button
                  onClick={() => setActiveTab('operations')}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-xs font-mono transition-all',
                    activeTab === 'operations'
                      ? 'bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/40'
                      : 'text-text-muted hover:text-white'
                  )}
                >
                  Station Directives ({currentForecast.operationalRecommendations.length})
                </button>
              </div>

              <span className="text-xs font-mono text-text-muted hidden sm:inline">
                Live Kitchen Sync
              </span>
            </div>

            {/* View 1: Expected Demand, Recommended Prep, Wastage Risk */}
            {activeTab === 'items' && (
              <div className="space-y-4">
                {currentForecast.items.map((item, idx) => (
                  <Card
                    key={idx}
                    className="p-5 bg-slate-900/90 border-slate-800 hover:border-amber-500/40 transition-all space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-slate-800">
                      <div>
                        <h5 className="text-sm font-bold text-white flex items-center gap-2">
                          <ChefHat className="w-4 h-4 text-amber-400" />
                          <span>{item.itemName}</span>
                        </h5>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <span className="text-[10px] font-mono text-text-muted uppercase block">Expected Demand</span>
                          <span className="text-sm font-extrabold font-mono text-amber-300">
                            {item.expectedDemand} {item.unit}
                          </span>
                        </div>

                        <span
                          className={cn(
                            'text-[10px] font-mono uppercase px-2 py-0.5 rounded font-bold shrink-0',
                            item.wastageRisk === 'Critical Risk'
                              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                              : item.wastageRisk === 'Moderate'
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                              : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                          )}
                        >
                          {item.wastageRisk} Spoilage Risk
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      {/* Recommended Prep */}
                      <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 space-y-1">
                        <span className="text-[10px] font-mono text-amber-400 uppercase font-semibold flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          Recommended Kitchen Preparation:
                        </span>
                        <p className="text-slate-200">{item.recommendedPrep}</p>
                      </div>

                      {/* Inventory Required */}
                      <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 space-y-1">
                        <span className="text-[10px] font-mono text-sky-400 uppercase font-semibold flex items-center gap-1">
                          <Boxes className="w-3 h-3" />
                          Raw Ingredients Required:
                        </span>
                        <p className="text-slate-200">{item.inventoryRequired}</p>
                      </div>
                    </div>

                    {/* Wastage Risk Rationale */}
                    <div className="text-[11px] font-mono text-text-muted flex items-start gap-1.5 pt-1">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{item.wastageDetails}</span>
                    </div>
                  </Card>
                ))}
              </div>
            )}

            {/* View 2: Inventory Requirements & Automated PO Actions */}
            {activeTab === 'inventory' && (
              <Card className="p-5 bg-slate-900/90 border-slate-800 space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <span className="text-xs font-semibold text-white uppercase tracking-wider">
                    Shift Inventory Depletion & Vendor Reorder Ledger
                  </span>
                  <span className="text-xs font-mono text-emerald-400">Auto-PO Dispatch Active</span>
                </div>

                <div className="divide-y divide-slate-800">
                  {currentForecast.inventorySummary.map((inv, i) => (
                    <div key={i} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                      <div className="space-y-0.5">
                        <span className="text-[10px] text-amber-400 uppercase block">{inv.category}</span>
                        <div className="text-sm font-bold text-white font-sans">{inv.item}</div>
                        <div className="text-[11px] text-text-muted">
                          Stock on Hand: <span className="text-slate-300">{inv.stockOnHand}</span> | Needed: <span className="text-white font-bold">{inv.neededForService}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-200">
                          {inv.orderRecommendation}
                        </div>
                        <span
                          className={cn(
                            'text-[10px] px-2.5 py-1 rounded font-bold uppercase shrink-0',
                            inv.status === 'Critical Shortage'
                              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                              : inv.status === 'Order Needed'
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

            {/* View 3: Operational Directives & Station Routing */}
            {activeTab === 'operations' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentForecast.operationalRecommendations.map((op, i) => (
                  <Card key={i} className="p-5 bg-slate-900/90 border-slate-800 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                        <Badge variant="primary" size="sm" className="font-mono text-[10px]">
                          {op.station}
                        </Badge>
                        <span className="text-xs font-mono text-amber-400 font-bold">{op.timing}</span>
                      </div>

                      <h5 className="text-sm font-bold text-white">{op.title}</h5>
                      <p className="text-xs text-text-secondary leading-relaxed">{op.details}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Dispatched to Line KDS Tablet</span>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};
