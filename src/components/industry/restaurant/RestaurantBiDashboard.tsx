import React, { useState } from 'react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { RESTAURANT_BI_DATA } from '../../../data/restaurantData';
import {
  TrendingUp,
  Flame,
  ChefHat,
  Clock,
  ShieldCheck,
  Building,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  PieChart,
} from 'lucide-react';
import { cn } from '../../../utils/cn';

export const RestaurantBiDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'wastage' | 'efficiency' | 'menu' | 'multioutlet'>(
    'wastage'
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-aether-border-subtle">
        <div>
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
              SIMULATED DEMO
            </span>
            <Badge variant="primary" size="sm">
              Culinary Analytics
            </Badge>
            <span className="text-xs font-mono text-text-muted">Live Kitchen Telemetry</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-text-primary">
            Back-of-House Operational Intelligence
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary mt-1">
            Continuous synthesis across food cost variances, station line ticket speed, and
            multi-outlet brand standards.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 flex-wrap">
          <button
            onClick={() => setActiveTab('wastage')}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-mono transition-all',
              activeTab === 'wastage'
                ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40'
                : 'text-text-muted hover:text-slate-200'
            )}
          >
            Food Waste Savings
          </button>
          <button
            onClick={() => setActiveTab('efficiency')}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-mono transition-all',
              activeTab === 'efficiency'
                ? 'bg-sky-500/20 text-sky-300 font-bold border border-sky-500/40'
                : 'text-text-muted hover:text-slate-200'
            )}
          >
            Kitchen Ticket Velocity
          </button>
          <button
            onClick={() => setActiveTab('menu')}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-mono transition-all',
              activeTab === 'menu'
                ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40'
                : 'text-text-muted hover:text-slate-200'
            )}
          >
            Menu Profitability Matrix
          </button>
          <button
            onClick={() => setActiveTab('multioutlet')}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-mono transition-all',
              activeTab === 'multioutlet'
                ? 'bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/40'
                : 'text-text-muted hover:text-slate-200'
            )}
          >
            Multi-Outlet Sync
          </button>
        </div>
      </div>

      {/* 1. Food Waste Savings */}
      {activeTab === 'wastage' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
          <Card className="p-5 bg-slate-900/90 border-slate-800 text-center space-y-1">
            <span className="text-[11px] font-mono text-text-muted uppercase block">
              Current Wastage Rate
            </span>
            <span className="text-3xl font-extrabold font-mono text-emerald-400">
              {RESTAURANT_BI_DATA.wastageMetrics.currentWastageRate}
            </span>
            <span className="text-[10px] text-text-muted block">
              vs {RESTAURANT_BI_DATA.wastageMetrics.traditionalAverage} Industry Average
            </span>
          </Card>

          <Card className="p-5 bg-slate-900/90 border-amber-500/30 text-center space-y-1">
            <span className="text-[11px] font-mono text-amber-400 uppercase block">
              Monthly Cost Recovered
            </span>
            <span className="text-3xl font-extrabold font-mono text-amber-300">
              {RESTAURANT_BI_DATA.wastageMetrics.costSavedMonthly}
            </span>
            <span className="text-[10px] text-amber-400/80 block">Direct Margin Addition</span>
          </Card>

          <Card className="p-5 bg-slate-900/90 border-slate-800 col-span-1 sm:col-span-2 space-y-2 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Highest Spoilage Risks Intercepted This Month</span>
            </div>
            <p className="text-xs text-text-secondary font-mono">
              {RESTAURANT_BI_DATA.wastageMetrics.topSpoilageRiskAvoided}
            </p>
            <div className="text-[10px] font-mono text-emerald-400">
              Staged par-cooking prevented 42 portions of premium seafood loss.
            </div>
          </Card>
        </div>
      )}

      {/* 2. Kitchen Efficiency */}
      {activeTab === 'efficiency' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
          <Card className="p-5 bg-slate-900/90 border-sky-500/30 text-center space-y-1">
            <span className="text-[11px] font-mono text-sky-400 uppercase block">
              Average Ticket Time
            </span>
            <span className="text-3xl font-extrabold font-mono text-sky-300">
              {RESTAURANT_BI_DATA.kitchenEfficiency.averageTicketTime}
            </span>
            <span className="text-[10px] text-text-muted block">
              Down from {RESTAURANT_BI_DATA.kitchenEfficiency.traditionalTicketTime}
            </span>
          </Card>

          <Card className="p-5 bg-slate-900/90 border-emerald-500/30 text-center space-y-1">
            <span className="text-[11px] font-mono text-emerald-400 uppercase block">
              Peak Hour Speedup
            </span>
            <span className="text-3xl font-extrabold font-mono text-emerald-300">
              {RESTAURANT_BI_DATA.kitchenEfficiency.peakHourSpeedup}
            </span>
            <span className="text-[10px] text-emerald-400/80 block">Through Station Pacing</span>
          </Card>

          <Card className="p-5 bg-slate-900/90 border-slate-800 col-span-1 sm:col-span-2 space-y-2 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Order Accuracy & Table Timing</span>
            </div>
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-text-muted">Order Accuracy:</span>
              <span className="text-emerald-400 font-bold">
                {RESTAURANT_BI_DATA.kitchenEfficiency.orderAccuracy}
              </span>
            </div>
            <p className="text-[11px] text-text-muted">
              Zero dish remake write-offs logged during 7:30 - 10:00 PM rush window.
            </p>
          </Card>
        </div>
      )}

      {/* 3. Menu Profitability Matrix */}
      {activeTab === 'menu' && (
        <Card className="p-5 bg-slate-900/90 border-slate-800 space-y-3 animate-fade-in">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-semibold text-white uppercase tracking-wider">
              Continuous Menu Engineering (BCG Matrix Attribution)
            </span>
            <span className="text-xs font-mono text-amber-400">Live POS Margin Scoring</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[550px] text-xs text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 font-mono text-[10px] text-text-muted uppercase">
                  <th className="p-3">Dish Name</th>
                  <th className="p-3">Classification</th>
                  <th className="p-3">Gross Margin</th>
                  <th className="p-3">Popularity</th>
                  <th className="p-3">Aether Recommendation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 font-mono">
                {RESTAURANT_BI_DATA.menuProfitabilityMatrix.map((dish, i) => (
                  <tr key={i} className="hover:bg-slate-950/40 transition-colors">
                    <td className="p-3 font-bold text-white font-sans">{dish.name}</td>
                    <td className="p-3">
                      <span
                        className={cn(
                          'px-2 py-0.5 rounded text-[10px] font-bold uppercase',
                          dish.classification.includes('Star')
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                            : dish.classification.includes('Dog')
                              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                              : 'bg-sky-500/20 text-sky-300 border border-sky-500/40'
                        )}
                      >
                        {dish.classification}
                      </span>
                    </td>
                    <td className="p-3 font-bold text-emerald-400">{dish.margin}</td>
                    <td className="p-3 text-slate-300">{dish.popularity}</td>
                    <td className="p-3 text-slate-300 font-sans">{dish.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* 4. Multi-Outlet Sync */}
      {activeTab === 'multioutlet' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
          {RESTAURANT_BI_DATA.multiOutletSync.map((outlet, i) => (
            <Card key={i} className="p-5 bg-slate-900/90 border-slate-800 space-y-3">
              <div className="flex items-start justify-between gap-1 pb-2 border-b border-slate-800">
                <h5 className="text-xs font-bold text-white leading-tight">{outlet.outlet}</h5>
                <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {outlet.healthScore}
                </span>
              </div>

              <div className="space-y-1.5 font-mono text-xs">
                <div className="flex items-center justify-between text-text-muted text-[11px]">
                  <span>Covers Today:</span>
                  <span className="text-white font-bold">{outlet.coversToday}</span>
                </div>
                <div className="flex items-center justify-between text-text-muted text-[11px]">
                  <span>Wastage %:</span>
                  <span className="text-emerald-400 font-bold">{outlet.wastagePercent}</span>
                </div>
                <div className="flex items-center justify-between text-text-muted text-[11px]">
                  <span>Recipe Compliance:</span>
                  <span className="text-sky-300 font-bold">{outlet.recipeCompliance}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
