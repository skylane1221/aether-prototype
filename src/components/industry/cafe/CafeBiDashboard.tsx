import React, { useState } from 'react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { CAFE_BI_DATA } from '../../../data/cafeData';
import {
  Coffee,
  Users,
  Clock,
  Sparkles,
  Flame,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Calendar,
} from 'lucide-react';
import { cn } from '../../../utils/cn';

export const CafeBiDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'velocity' | 'customer' | 'beans'>('velocity');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-aether-border-subtle">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="warning" size="sm">
              Espresso Telemetry
            </Badge>
            <span className="text-xs font-mono text-text-muted">Live Counter & Roastery Analytics</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-text-primary">
            Cafe & Barista Operations Dashboard
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary mt-1">
            Continuous synthesis across morning drink speed, regular commuter loyalty, and specialty roast freshness.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-stone-900 border border-stone-800">
          <button
            onClick={() => setActiveTab('velocity')}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-mono transition-all',
              activeTab === 'velocity'
                ? 'bg-amber-600 text-stone-950 font-bold'
                : 'text-stone-400 hover:text-white'
            )}
          >
            Drink Velocity
          </button>
          <button
            onClick={() => setActiveTab('customer')}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-mono transition-all',
              activeTab === 'customer'
                ? 'bg-amber-600 text-stone-950 font-bold'
                : 'text-stone-400 hover:text-white'
            )}
          >
            Customer Habits
          </button>
          <button
            onClick={() => setActiveTab('beans')}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-mono transition-all',
              activeTab === 'beans'
                ? 'bg-amber-600 text-stone-950 font-bold'
                : 'text-stone-400 hover:text-white'
            )}
          >
            Bean Freshness Roster
          </button>
        </div>
      </div>

      {/* 1. Velocity View */}
      {activeTab === 'velocity' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
          <Card className="p-5 bg-stone-900/90 border-stone-800 text-center space-y-1">
            <span className="text-[11px] font-mono text-stone-400 uppercase block">Daily Cup Volume</span>
            <span className="text-3xl font-extrabold font-mono text-amber-400">
              {CAFE_BI_DATA.beverageVelocity.totalCupsDaily}
            </span>
            <span className="text-[10px] text-stone-500 block">Across Counter & Mobile Pre-orders</span>
          </Card>

          <Card className="p-5 bg-stone-900/90 border-amber-500/30 text-center space-y-1">
            <span className="text-[11px] font-mono text-amber-400 uppercase block">Average Prep Time</span>
            <span className="text-3xl font-extrabold font-mono text-amber-300">
              {CAFE_BI_DATA.beverageVelocity.averageDrinkPrepTime}
            </span>
            <span className="text-[10px] text-amber-400/80 block">From order tap to hand-off</span>
          </Card>

          <Card className="p-5 bg-stone-900/90 border-emerald-500/30 text-center space-y-1">
            <span className="text-[11px] font-mono text-emerald-400 uppercase block">Milk Waste Reduction</span>
            <span className="text-3xl font-extrabold font-mono text-emerald-300">
              {CAFE_BI_DATA.beverageVelocity.milkWasteReduction}
            </span>
            <span className="text-[10px] text-emerald-400/80 block">Through pitcher sizing calibration</span>
          </Card>

          <Card className="p-5 bg-stone-900/90 border-stone-800 text-center space-y-1">
            <span className="text-[11px] font-mono text-stone-400 uppercase block">Extraction Accuracy</span>
            <span className="text-3xl font-extrabold font-mono text-white">
              {CAFE_BI_DATA.beverageVelocity.espressoExtractionAccuracy}
            </span>
            <span className="text-[10px] text-stone-500 block">Within 26-28s target yield</span>
          </Card>
        </div>
      )}

      {/* 2. Customer Habits View */}
      {activeTab === 'customer' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
          {CAFE_BI_DATA.customerBehaviour.map((seg, idx) => (
            <Card key={idx} className="p-5 bg-stone-900/90 border-stone-800 flex flex-col justify-between space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between pb-2 border-b border-stone-800">
                  <span className="text-xs font-bold text-white">{seg.segment}</span>
                  <Badge variant="warning" size="sm" className="font-mono text-[10px]">
                    {seg.repeatRate} Repeat
                  </Badge>
                </div>

                <div className="space-y-1 font-mono text-xs">
                  <span className="text-[10px] text-stone-400 uppercase block">Signature Habit:</span>
                  <p className="text-stone-200 font-sans">{seg.orderPattern}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-800 flex items-center justify-between text-xs font-mono">
                <span className="text-stone-400">Average Spend:</span>
                <span className="text-emerald-400 font-bold">{seg.averageSpend}</span>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* 3. Bean Freshness View */}
      {activeTab === 'beans' && (
        <Card className="p-5 bg-stone-900/90 border-stone-800 space-y-3 animate-fade-in">
          <div className="flex items-center justify-between pb-2 border-b border-stone-800">
            <span className="text-xs font-semibold text-white uppercase tracking-wider">
              Active Roastery Beans & Degassing Window
            </span>
            <span className="text-xs font-mono text-amber-400">Optimum Flavor Profile</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse font-mono">
              <thead>
                <tr className="border-b border-stone-800 text-stone-400 text-[10px] uppercase">
                  <th className="p-3">Single Origin / Blend</th>
                  <th className="p-3">Roast Age</th>
                  <th className="p-3">Optimum Extraction Window</th>
                  <th className="p-3">Stock Remaining</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-800">
                {CAFE_BI_DATA.beanFreshnessRoster.map((bean, i) => (
                  <tr key={i} className="hover:bg-stone-950/60 transition-colors">
                    <td className="p-3 font-bold text-white font-sans">{bean.bean}</td>
                    <td className="p-3 text-amber-400">{bean.roastDate}</td>
                    <td className="p-3 text-emerald-300 font-bold">{bean.optimumWindow}</td>
                    <td className="p-3 text-stone-200">{bean.stockRemaining}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}
    </div>
  );
};
