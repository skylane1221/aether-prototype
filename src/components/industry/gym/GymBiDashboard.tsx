import React, { useState } from 'react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { GYM_BI_DATA } from '../../../data/gymData';
import {
  Users,
  Activity,
  Calendar,
  Dumbbell,
  Sparkles,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
} from 'lucide-react';
import { cn } from '../../../utils/cn';

export const GymBiDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'retention' | 'churn' | 'classes' | 'trainers'>('retention');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-aether-border-subtle">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="success" size="sm">
              Member Lifecycle Analytics
            </Badge>
            <span className="text-xs font-mono text-text-muted">Live Club Telemetry</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-text-primary">
            Club Retention & Studio Utilization Dashboard
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary mt-1">
            Continuous synthesis across member habit consistency, studio class capacity yield, and trainer hours.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 flex-wrap">
          <button
            onClick={() => setActiveTab('retention')}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-mono transition-all',
              activeTab === 'retention'
                ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40'
                : 'text-text-muted hover:text-slate-200'
            )}
          >
            Cohort Retention
          </button>
          <button
            onClick={() => setActiveTab('churn')}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-mono transition-all',
              activeTab === 'churn'
                ? 'bg-rose-500/20 text-rose-300 font-bold border border-rose-500/40'
                : 'text-text-muted hover:text-slate-200'
            )}
          >
            Churn Archetypes
          </button>
          <button
            onClick={() => setActiveTab('classes')}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-mono transition-all',
              activeTab === 'classes'
                ? 'bg-sky-500/20 text-sky-300 font-bold border border-sky-500/40'
                : 'text-text-muted hover:text-slate-200'
            )}
          >
            Class Capacity Yield
          </button>
          <button
            onClick={() => setActiveTab('trainers')}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-mono transition-all',
              activeTab === 'trainers'
                ? 'bg-amber-500/20 text-amber-300 font-bold border border-amber-500/40'
                : 'text-text-muted hover:text-slate-200'
            )}
          >
            Trainer Monetization
          </button>
        </div>
      </div>

      {/* 1. Retention Summary */}
      {activeTab === 'retention' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
          <Card className="p-5 bg-slate-900/90 border-slate-800 text-center space-y-1">
            <span className="text-[11px] font-mono text-text-muted uppercase block">Active Members</span>
            <span className="text-3xl font-extrabold font-mono text-white">
              {GYM_BI_DATA.retentionSummary.activeMembers}
            </span>
            <span className="text-[10px] text-emerald-400 block">+14% YoY Growth</span>
          </Card>

          <Card className="p-5 bg-slate-900/90 border-rose-500/30 text-center space-y-1">
            <span className="text-[11px] font-mono text-rose-400 uppercase block">At-Risk Intercepted</span>
            <span className="text-3xl font-extrabold font-mono text-rose-300">
              {GYM_BI_DATA.retentionSummary.atRiskMembers}
            </span>
            <span className="text-[10px] text-rose-400/80 block">Under Active Intervention</span>
          </Card>

          <Card className="p-5 bg-slate-900/90 border-emerald-500/30 text-center space-y-1">
            <span className="text-[11px] font-mono text-emerald-400 uppercase block">12-Mo Cohort Retention</span>
            <span className="text-3xl font-extrabold font-mono text-emerald-300">
              {GYM_BI_DATA.retentionSummary.retainedThisMonth}
            </span>
            <span className="text-[10px] text-emerald-400/80 block">Industry avg: 62%</span>
          </Card>

          <Card className="p-5 bg-slate-900/90 border-teal-500/30 text-center space-y-1">
            <span className="text-[11px] font-mono text-teal-400 uppercase block">Preserved Annual ARR</span>
            <span className="text-3xl font-extrabold font-mono text-teal-300">
              {GYM_BI_DATA.retentionSummary.revenuePreserved}
            </span>
            <span className="text-[10px] text-teal-400/80 block">Direct Net Margin</span>
          </Card>
        </div>
      )}

      {/* 2. Churn Archetypes */}
      {activeTab === 'churn' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
          {GYM_BI_DATA.churnDistribution.map((c, idx) => (
            <Card key={idx} className="p-5 bg-slate-900/90 border-slate-800 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                  <Badge variant={idx === 0 ? 'primary' : 'neutral'} size="sm" className="font-mono text-[10px]">
                    Risk Segment 0{idx + 1}
                  </Badge>
                  <span className="text-2xl font-extrabold font-mono text-rose-400">{c.percentage}%</span>
                </div>

                <h5 className="text-sm font-bold text-white mt-3">{c.category}</h5>
                <p className="text-xs text-text-muted mt-1">
                  Active Count: <strong className="text-white font-mono">{c.count} members</strong>
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-950 text-xs font-mono text-slate-300">
                Action: {idx === 0 ? 'Coach Check-in & Recovery Pass' : idx === 1 ? 'Priority Booking & Standby Unlock' : 'Milestone Perks & Loyalty Lock'}
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* 3. Class Capacity Yield */}
      {activeTab === 'classes' && (
        <Card className="p-5 bg-slate-900/90 border-slate-800 space-y-3 animate-fade-in">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <span className="text-xs font-semibold text-white uppercase tracking-wider">
              Studio Class Utilization & Dynamic Standby Fills
            </span>
            <span className="text-xs font-mono text-emerald-400">Zero Empty Peak Spots</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left border-collapse font-mono">
              <thead>
                <tr className="border-b border-slate-800 text-text-muted text-[10px] uppercase">
                  <th className="p-3">Class Format</th>
                  <th className="p-3">Studio Capacity</th>
                  <th className="p-3">Avg Standby Waitlist</th>
                  <th className="p-3">Fill Utilization</th>
                  <th className="p-3">Revenue Yield / Session</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                {GYM_BI_DATA.classCapacityMetrics.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-950/60 transition-colors">
                    <td className="p-3 font-bold text-white font-sans">{row.className}</td>
                    <td className="p-3 text-slate-300">{row.capacity} beds/bikes</td>
                    <td className="p-3 text-amber-400">{row.avgWaitlist} waitlisted</td>
                    <td className="p-3 font-bold text-emerald-400">{row.utilization}</td>
                    <td className="p-3 font-bold text-teal-300">{row.revenueYield}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* 4. Trainer Monetization */}
      {activeTab === 'trainers' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in">
          {GYM_BI_DATA.trainerMonetization.map((t, idx) => (
            <Card key={idx} className="p-5 bg-slate-900/90 border-slate-800 space-y-3">
              <div className="flex items-start justify-between pb-2 border-b border-slate-800">
                <div>
                  <h5 className="text-sm font-bold text-white">{t.trainer}</h5>
                  <span className="text-xs text-emerald-400 font-mono">{t.bookedHours}</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-bold">
                  {t.status}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs font-mono text-text-muted">
                <span>Client Retention:</span>
                <span className="text-emerald-400 font-bold">{t.clientRetention}</span>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
