import React, { useState } from 'react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { SectionHeader } from '../../ui/SectionHeader';
import {
  Activity,
  Package,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  BarChart3,
  Layers,
  Clock,
  Compass,
  DollarSign,
} from 'lucide-react';
import { cn } from '../../../utils/cn';
import { RETAIL_BI_DATA } from '../../../data/retailData';

type RetailTabId = 'health' | 'top' | 'atRisk' | 'trend' | 'stockRisk' | 'actions';

export const RetailBiDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<RetailTabId>('health');
  const [executedActionIds, setExecutedActionIds] = useState<string[]>([]);

  const handleExecuteAction = (id: string) => {
    if (!executedActionIds.includes(id)) {
      setExecutedActionIds([...executedActionIds, id]);
    }
  };

  const tabs: { id: RetailTabId; label: string; icon: React.ReactNode }[] = [
    {
      id: 'health',
      label: 'Inventory Health',
      icon: <Activity className="w-3.5 h-3.5" />,
    },
    { id: 'top', label: 'Top Products', icon: <TrendingUp className="w-3.5 h-3.5" /> },
    {
      id: 'atRisk',
      label: 'At-Risk Products',
      icon: <AlertTriangle className="w-3.5 h-3.5" />,
    },
    { id: 'trend', label: 'Demand Trend', icon: <BarChart3 className="w-3.5 h-3.5" /> },
    { id: 'stockRisk', label: 'Stock Risk', icon: <Layers className="w-3.5 h-3.5" /> },
    {
      id: 'actions',
      label: 'Recommended Actions',
      icon: <Sparkles className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <div className="space-y-6">
      <SectionHeader
        badge="Cognitive Retail Analytics"
        title="Business Intelligence for Retail Operations"
        subtitle="Live predictive telemetry replacing static monthly inventory audits with forward-looking risk models."
      />

      <Card className="p-0 border-slate-700/80 bg-slate-900/90 overflow-hidden shadow-card">
        {/* Tab Navigation Header */}
        <div className="bg-slate-950 px-4 sm:px-6 py-3 border-b border-aether-border flex items-center justify-between overflow-x-auto no-scrollbar gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 shrink-0',
                    isActive
                      ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-glow-subtle'
                      : 'text-text-muted hover:text-slate-200 hover:bg-slate-900'
                  )}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          <div className="text-[11px] font-mono text-text-muted hidden lg:inline">
            Status: <span className="text-emerald-400">Live Sync (Shopify + In-Store POS)</span>
          </div>
        </div>

        {/* Tab 1: Inventory Health */}
        {activeTab === 'health' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-text-muted uppercase">
                  Health Index
                </span>
                <div className="text-2xl font-extrabold font-mono text-emerald-400 mt-2">
                  {RETAIL_BI_DATA.inventoryHealth.healthScore}/100
                </div>
                <span className="text-[10px] text-emerald-400 font-mono mt-1">
                  +4.2 pts vs last mo
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-text-muted uppercase">
                  In-Stock Rate
                </span>
                <div className="text-2xl font-extrabold font-mono text-sky-400 mt-2">
                  {RETAIL_BI_DATA.inventoryHealth.inStockRate}
                </div>
                <span className="text-[10px] text-sky-400 font-mono mt-1">Target: &gt; 98%</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-text-muted uppercase">
                  Stock Turnover
                </span>
                <div className="text-2xl font-extrabold font-mono text-indigo-300 mt-2">
                  {RETAIL_BI_DATA.inventoryHealth.stockTurnRate}
                </div>
                <span className="text-[10px] text-indigo-300 font-mono mt-1">
                  +1.8x industry avg
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-text-muted uppercase">
                  Excess Stock Ratio
                </span>
                <div className="text-2xl font-extrabold font-mono text-amber-400 mt-2">
                  {RETAIL_BI_DATA.inventoryHealth.excessStockRatio}
                </div>
                <span className="text-[10px] text-amber-400 font-mono mt-1">Down from 18.4%</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-text-muted uppercase">
                  Deadstock Saved
                </span>
                <div className="text-2xl font-extrabold font-mono text-emerald-300 mt-2">
                  {RETAIL_BI_DATA.inventoryHealth.deadStockEliminated}
                </div>
                <span className="text-[10px] text-emerald-300 font-mono mt-1">
                  Margin Protected
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-text-muted uppercase">
                  Fulfillment SLA
                </span>
                <div className="text-2xl font-extrabold font-mono text-sky-300 mt-2">
                  {RETAIL_BI_DATA.inventoryHealth.orderFulfillmentSLA}
                </div>
                <span className="text-[10px] text-sky-300 font-mono mt-1">Same-Day Picked</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-sky-500/5 border border-sky-500/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
                <span className="text-xs text-text-secondary">
                  Omnichannel stock mesh is actively synchronizing 4 offline physical locations, 1
                  central distribution warehouse, and e-commerce carts in real-time.
                </span>
              </div>
              <Badge variant="primary" size="sm" className="hidden sm:inline font-mono text-[10px]">
                Mesh Health: 99.98% Uptime
              </Badge>
            </div>
          </div>
        )}

        {/* Tab 2: Top Products */}
        {activeTab === 'top' && (
          <div className="p-6 sm:p-8 space-y-4">
            <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
              Fastest-Moving SKUs & Revenue Velocity
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px] text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-slate-800 text-text-muted text-[10px] uppercase">
                    <th className="pb-3">Product Name / SKU</th>
                    <th className="pb-3">Category</th>
                    <th className="pb-3">7-Day Units</th>
                    <th className="pb-3">Revenue (7d)</th>
                    <th className="pb-3">Velocity</th>
                    <th className="pb-3">Runway</th>
                    <th className="pb-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-850">
                  {RETAIL_BI_DATA.topProducts.map((p, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                      <td className="py-3 font-semibold text-text-primary">
                        <div>{p.name}</div>
                        <div className="text-[10px] text-text-muted">{p.sku}</div>
                      </td>
                      <td className="py-3 text-slate-300">{p.category}</td>
                      <td className="py-3 text-sky-400 font-bold">{p.unitsSold7d}</td>
                      <td className="py-3 text-slate-200">{p.revenue7d}</td>
                      <td className="py-3">
                        <span className="px-2 py-0.5 rounded text-[10px] bg-sky-500/20 text-sky-300 font-bold">
                          {p.velocityRating}
                        </span>
                      </td>
                      <td className="py-3 font-mono">{p.stockDaysLeft} days</td>
                      <td className="py-3">
                        <span
                          className={cn(
                            'px-2 py-0.5 rounded text-[10px] font-bold uppercase',
                            p.health === 'Optimal'
                              ? 'bg-emerald-500/20 text-emerald-300'
                              : p.health === 'Low Stock'
                                ? 'bg-amber-500/20 text-amber-300'
                                : 'bg-rose-500/20 text-rose-300'
                          )}
                        >
                          {p.health}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: At-Risk Products */}
        {activeTab === 'atRisk' && (
          <div className="p-6 sm:p-8 space-y-4">
            <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
              Critical Stockout & Overstock Vulnerabilities
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {RETAIL_BI_DATA.atRiskProducts.map((item, idx) => (
                <div
                  key={idx}
                  className={cn(
                    'p-5 rounded-xl border flex flex-col justify-between',
                    item.severity === 'Critical'
                      ? 'bg-rose-500/5 border-rose-500/30'
                      : item.severity === 'High'
                        ? 'bg-amber-500/5 border-amber-500/30'
                        : 'bg-slate-900 border-slate-800'
                  )}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-text-muted">{item.sku}</span>
                      <Badge
                        variant={
                          item.severity === 'Critical'
                            ? 'warning'
                            : item.severity === 'High'
                              ? 'neutral'
                              : 'primary'
                        }
                        size="sm"
                      >
                        {item.riskType}
                      </Badge>
                    </div>

                    <h4 className="text-sm font-bold text-text-primary">{item.name}</h4>

                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono py-2 border-y border-slate-800/80">
                      <div>
                        <span className="text-text-muted">Stock on Hand: </span>
                        <span className="text-slate-200 font-bold">{item.stockOnHand} units</span>
                      </div>
                      <div>
                        <span className="text-text-muted">Days of Runway: </span>
                        <span
                          className={cn(
                            'font-bold',
                            item.severity === 'Critical' ? 'text-rose-400' : 'text-amber-400'
                          )}
                        >
                          {item.daysOfRunway}
                        </span>
                      </div>
                    </div>

                    <p className="text-xs text-text-secondary leading-relaxed pt-1">
                      <span className="text-sky-400 font-semibold">Prescribed Fix: </span>
                      {item.prescribedFix}
                    </p>
                  </div>

                  <div className="mt-4 pt-2 border-t border-slate-800 text-[10px] font-mono text-rose-300 flex items-center justify-between">
                    <span>Impact: {item.financialImpact}</span>
                    <span className="text-emerald-400">Aether Ready</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Demand Trend */}
        {activeTab === 'trend' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                7-Day Category Demand Velocity Curve (Units / Day)
              </div>
              <div className="flex items-center gap-3 text-[11px] font-mono">
                <span className="flex items-center gap-1 text-sky-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-400" /> Footwear
                </span>
                <span className="flex items-center gap-1 text-indigo-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-400" /> Apparel
                </span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" /> Accessories
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 pt-4">
              {RETAIL_BI_DATA.demandTrend.map((d, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center flex flex-col justify-between h-40"
                >
                  <div className="text-xs font-mono font-bold text-text-muted">{d.day}</div>
                  <div className="space-y-1 my-auto">
                    <div className="text-lg font-mono font-extrabold text-sky-300">{d.actuals}</div>
                    <div className="text-[10px] text-text-muted font-mono">Total Units</div>
                  </div>
                  <div className="text-[10px] font-mono text-emerald-400 pt-2 border-t border-slate-850">
                    FW: {d.footwearForecast} | AP: {d.apparelForecast}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-text-secondary flex items-center justify-between">
              <span>
                💡 <strong className="text-text-primary">Weekend Spike Detected:</strong>{' '}
                Friday–Sunday demand surges by +118% due to commercial payday and scheduled seasonal
                launch.
              </span>
              <span className="font-mono text-sky-400 text-[11px]">
                Dynamic Par-Levels Pre-Staged
              </span>
            </div>
          </div>
        )}

        {/* Tab 5: Stock Risk Distribution */}
        {activeTab === 'stockRisk' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
              Catalog Risk Distribution Across 290 Active SKUs
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {RETAIL_BI_DATA.stockRiskDistribution.map((risk, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={cn('text-xs font-bold uppercase', risk.text)}>
                        {risk.label}
                      </span>
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: risk.color.replace('bg-', '') }}
                      />
                    </div>
                    <div className="text-3xl font-extrabold font-mono text-text-primary">
                      {risk.count} <span className="text-xs text-text-muted font-normal">SKUs</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-2 border-t border-slate-850 text-xs font-mono text-text-muted">
                    {risk.percentage} of Total Active Inventory
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 6: Recommended Actions */}
        {activeTab === 'actions' && (
          <div className="p-6 sm:p-8 space-y-4">
            <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
              Prioritized Cognitive Prescriptions & 1-Click Execution
            </div>

            <div className="space-y-3">
              {RETAIL_BI_DATA.prescriptions.map((pres) => {
                const isExecuted = executedActionIds.includes(pres.id);
                return (
                  <div
                    key={pres.id}
                    className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5 max-w-2xl">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={
                            pres.priority === 'Immediate'
                              ? 'warning'
                              : pres.priority === 'High'
                                ? 'primary'
                                : 'neutral'
                          }
                          size="sm"
                        >
                          {pres.priority}
                        </Badge>
                        <span className="text-xs font-mono text-text-muted">{pres.category}</span>
                      </div>
                      <h4 className="text-sm font-bold text-text-primary">{pres.title}</h4>
                      <p className="text-xs text-text-secondary leading-relaxed">
                        {pres.rationale}
                      </p>
                      <div className="text-[11px] font-mono text-emerald-400 font-bold">
                        Expected Impact: {pres.projectedROI}
                      </div>
                    </div>

                    <div className="shrink-0">
                      {isExecuted ? (
                        <div className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Action Executed</span>
                        </div>
                      ) : (
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => handleExecuteAction(pres.id)}
                          rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                          className="w-full sm:w-auto text-xs font-semibold shadow-md"
                        >
                          {pres.actionText}
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};
