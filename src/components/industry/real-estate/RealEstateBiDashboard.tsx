import React, { useState } from 'react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { REAL_ESTATE_BI_DATA } from '../../../data/realEstateData';
import {
  TrendingUp,
  Users,
  Building,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Filter,
  Layers,
  Send,
  ShieldCheck,
  Flame,
} from 'lucide-react';
import { cn } from '../../../utils/cn';

export const RealEstateBiDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'funnel' | 'intent' | 'demand' | 'inventory' | 'followups'>('funnel');
  const [executedFollowUps, setExecutedFollowUps] = useState<string[]>([]);
  const [executingId, setExecutingId] = useState<string | null>(null);

  const handleExecuteFollowUp = (id: string) => {
    setExecutingId(id);
    setTimeout(() => {
      setExecutedFollowUps((prev) => [...prev, id]);
      setExecutingId(null);
    }, 500);
  };

  const handleExecuteAllFollowUps = () => {
    setExecutingId('all');
    setTimeout(() => {
      setExecutedFollowUps(REAL_ESTATE_BI_DATA.priorityFollowUps.map((f) => f.id));
      setExecutingId(null);
    }, 700);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-aether-border-subtle">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="primary" size="sm">
              Cognitive Real Estate BI
            </Badge>
            <span className="text-xs font-mono text-text-muted">Live Pipeline Telemetry</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-text-primary">
            Forward-Looking Operational Intelligence
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary mt-1">
            Continuous synthesis across inbound buyer funnels, micro-market pricing demand, and high-velocity follow-up triggers.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 flex-wrap">
          <button
            onClick={() => setActiveTab('funnel')}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-mono transition-all',
              activeTab === 'funnel'
                ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40'
                : 'text-text-muted hover:text-slate-200'
            )}
          >
            Lead Funnel
          </button>
          <button
            onClick={() => setActiveTab('intent')}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-mono transition-all',
              activeTab === 'intent'
                ? 'bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/40'
                : 'text-text-muted hover:text-slate-200'
            )}
          >
            Lead Intent
          </button>
          <button
            onClick={() => setActiveTab('demand')}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-mono transition-all',
              activeTab === 'demand'
                ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40'
                : 'text-text-muted hover:text-slate-200'
            )}
          >
            Location Demand
          </button>
          <button
            onClick={() => setActiveTab('inventory')}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-mono transition-all',
              activeTab === 'inventory'
                ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40'
                : 'text-text-muted hover:text-slate-200'
            )}
          >
            Inventory Status
          </button>
          <button
            onClick={() => setActiveTab('followups')}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1',
              activeTab === 'followups'
                ? 'bg-rose-500/20 text-rose-300 font-bold border border-rose-500/40'
                : 'text-text-muted hover:text-slate-200'
            )}
          >
            <Flame className="w-3 h-3 text-rose-400" />
            <span>Follow-up Opportunities</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. LEAD FUNNEL TAB */}
      {/* ========================================================================= */}
      {activeTab === 'funnel' && (
        <Card className="p-6 bg-slate-900/90 border-slate-700/80 animate-fade-in space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h4 className="text-base font-bold text-white">Full-Funnel Lead Progression & Velocity</h4>
              <p className="text-xs text-text-muted">Real-time conversion efficiency through Aether triage stages</p>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded border border-emerald-500/20">
              Overall Closing Efficiency: 10.0% (vs 2.1% traditional)
            </span>
          </div>

          <div className="space-y-3">
            {REAL_ESTATE_BI_DATA.funnel.map((item, idx) => {
              const widthPercentage = Math.max(10, (item.count / 1420) * 100);
              return (
                <div key={idx} className="space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-200 font-sans font-medium flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-slate-800 text-[10px] text-cyan-400 flex items-center justify-center font-mono">
                        0{idx + 1}
                      </span>
                      {item.stage}
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-white font-bold">{item.count.toLocaleString()} Leads</span>
                      <span className="text-cyan-400 font-bold">{item.conversion}</span>
                    </div>
                  </div>

                  {/* Funnel Progress Bar */}
                  <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${widthPercentage}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      )}

      {/* ========================================================================= */}
      {/* 2. LEAD INTENT TAB */}
      {/* ========================================================================= */}
      {activeTab === 'intent' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 animate-fade-in">
          {REAL_ESTATE_BI_DATA.intentDistribution.map((intent, idx) => (
            <Card
              key={idx}
              className="p-6 bg-slate-900/90 border-slate-700/80 flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <Badge
                    variant={idx === 0 ? 'primary' : idx === 1 ? 'neutral' : 'outline'}
                    size="sm"
                    className="font-mono text-[10px]"
                  >
                    Tier 0{idx + 1}
                  </Badge>
                  <span className="text-2xl font-extrabold font-mono text-cyan-400">
                    {intent.percentage}%
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white mt-3">{intent.category}</h4>
                <p className="text-xs text-text-muted mt-1">
                  Volume: <span className="text-slate-200 font-mono font-bold">{intent.count} Leads</span> currently active.
                </p>
              </div>

              <div className="p-3 rounded-lg bg-slate-950 text-xs font-mono text-slate-300">
                Action Protocol: {idx === 0 ? 'Instant Broker Dispatch' : idx === 1 ? 'Automated Property Alert Cadence' : 'Educational Nurture Pipeline'}
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. LOCATION DEMAND TAB */}
      {/* ========================================================================= */}
      {activeTab === 'demand' && (
        <Card className="p-6 bg-slate-900/90 border-slate-700/80 animate-fade-in space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div>
              <h4 className="text-base font-bold text-white">Powai & Adjacent Micro-Market Inquiries</h4>
              <p className="text-xs text-text-muted">Aggregated buyer demand trends across geographic corridors</p>
            </div>
            <span className="text-xs font-mono text-cyan-400">Live Ingest Telemetry</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REAL_ESTATE_BI_DATA.demandByLocation.map((loc, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-start justify-between gap-1">
                  <h5 className="text-xs font-bold text-white">{loc.location}</h5>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">
                    {loc.demandTrend}
                  </span>
                </div>

                <div className="space-y-1 font-mono text-xs">
                  <div className="flex items-center justify-between text-text-muted text-[11px]">
                    <span>Inquiries:</span>
                    <span className="text-white font-bold">{loc.inquiries}</span>
                  </div>
                  <div className="flex items-center justify-between text-text-muted text-[11px]">
                    <span>Avg Budget:</span>
                    <span className="text-emerald-400 font-bold">{loc.averageBudget}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* ========================================================================= */}
      {/* 4. INVENTORY STATUS TAB */}
      {/* ========================================================================= */}
      {activeTab === 'inventory' && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 animate-fade-in">
          <Card className="p-5 bg-slate-900/90 border-slate-700/80 text-center space-y-1">
            <span className="text-[11px] font-mono text-text-muted uppercase block">Total Tracked Units</span>
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white">
              {REAL_ESTATE_BI_DATA.inventoryStatus.totalUnits}
            </span>
            <span className="text-[10px] text-text-muted block">Across 6 Developments</span>
          </Card>

          <Card className="p-5 bg-slate-900/90 border-emerald-500/30 text-center space-y-1">
            <span className="text-[11px] font-mono text-emerald-400 uppercase block">Available for Sale</span>
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-300">
              {REAL_ESTATE_BI_DATA.inventoryStatus.available}
            </span>
            <span className="text-[10px] text-emerald-400/80 block">40.4% Portfolio</span>
          </Card>

          <Card className="p-5 bg-slate-900/90 border-amber-500/30 text-center space-y-1">
            <span className="text-[11px] font-mono text-amber-400 uppercase block">Under Negotiation</span>
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-300">
              {REAL_ESTATE_BI_DATA.inventoryStatus.underNegotiation}
            </span>
            <span className="text-[10px] text-amber-400/80 block">Token In Process</span>
          </Card>

          <Card className="p-5 bg-slate-900/90 border-rose-500/30 text-center space-y-1">
            <span className="text-[11px] font-mono text-rose-400 uppercase block">Fast Depleting</span>
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-rose-300">
              {REAL_ESTATE_BI_DATA.inventoryStatus.fastDepleting}
            </span>
            <span className="text-[10px] text-rose-400/80 block">&lt; 3 Units Remaining</span>
          </Card>

          <Card className="p-5 bg-slate-900/90 border-cyan-500/30 text-center space-y-1">
            <span className="text-[11px] font-mono text-cyan-400 uppercase block">Avg Velocity</span>
            <span className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-300">
              {REAL_ESTATE_BI_DATA.inventoryStatus.avgDaysOnMarket}d
            </span>
            <span className="text-[10px] text-cyan-400/80 block">Days to Token Close</span>
          </Card>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 5. FOLLOW-UP OPPORTUNITIES TAB */}
      {/* ========================================================================= */}
      {activeTab === 'followups' && (
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div>
              <h4 className="text-base font-bold text-white flex items-center gap-2">
                <Flame className="w-4 h-4 text-rose-400" />
                <span>High-Urgency Follow-up Opportunities</span>
              </h4>
              <p className="text-xs text-text-muted">
                Cognitively identified buyers whose digital viewing signals indicate imminent closing readiness.
              </p>
            </div>

            <Button
              variant="primary"
              size="sm"
              onClick={handleExecuteAllFollowUps}
              disabled={executingId === 'all'}
              leftIcon={<Send className="w-3.5 h-3.5" />}
              className="text-xs py-1 h-8 shadow-sm"
            >
              {executingId === 'all' ? 'Executing Cadence...' : 'Execute All 4 Actions'}
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {REAL_ESTATE_BI_DATA.priorityFollowUps.map((item) => {
              const isExecuted = executedFollowUps.includes(item.id);
              const isExecuting = executingId === item.id;

              return (
                <Card
                  key={item.id}
                  className="p-5 bg-slate-900/90 border-slate-700/80 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h5 className="text-sm font-bold text-white">{item.clientName}</h5>
                        <div className="text-[11px] text-cyan-400 font-mono">{item.propertyViewed}</div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <span
                          className={cn(
                            'text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase',
                            item.urgency === 'Critical'
                              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                              : item.urgency === 'High'
                              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                              : 'bg-slate-800 text-slate-300'
                          )}
                        >
                          {item.urgency}
                        </span>
                        <Badge variant="primary" size="sm" className="font-mono text-[10px]">
                          {item.intentScore}/100
                        </Badge>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800 text-xs space-y-1">
                      <span className="text-[10px] font-mono text-text-muted uppercase block">
                        Recommended Action:
                      </span>
                      <p className="text-slate-200">{item.suggestedAction}</p>
                    </div>

                    <div className="text-[11px] font-mono text-text-muted">
                      Trigger Window: <span className="text-slate-300">{item.timeframe}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex justify-end">
                    {isExecuted ? (
                      <span className="text-emerald-400 font-mono font-bold flex items-center gap-1 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Trigger Executed
                      </span>
                    ) : (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => handleExecuteFollowUp(item.id)}
                        disabled={isExecuting}
                        leftIcon={
                          isExecuting ? (
                            <Sparkles className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <Send className="w-3.5 h-3.5 text-cyan-400" />
                          )
                        }
                        className="text-xs py-1 h-7"
                      >
                        {isExecuting ? 'Triggering...' : 'Trigger Action'}
                      </Button>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
