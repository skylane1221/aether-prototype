import React, { useState } from 'react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { SectionHeader } from '../../ui/SectionHeader';
import {
  BedDouble,
  TrendingUp,
  AlertTriangle,
  UserCheck,
  Sparkles,
  DollarSign,
  Activity,
  Layers,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Clock,
  Coffee,
} from 'lucide-react';
import { cn } from '../../../utils/cn';
import { HOTEL_BI_DATA } from '../../../data/hotelData';

type HotelTabId =
  | 'occupancy'
  | 'bookingTrend'
  | 'cancellationRisk'
  | 'guestPreferences'
  | 'operationalLoad'
  | 'revenueOpportunities';

export const HotelBiDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<HotelTabId>('occupancy');
  const [executedOppIds, setExecutedOppIds] = useState<string[]>([]);

  const handleExecuteOpportunity = (id: string) => {
    if (!executedOppIds.includes(id)) {
      setExecutedOppIds([...executedOppIds, id]);
    }
  };

  const tabs: { id: HotelTabId; label: string; icon: React.ReactNode }[] = [
    { id: 'occupancy', label: 'Occupancy', icon: <BedDouble className="w-3.5 h-3.5" /> },
    {
      id: 'bookingTrend',
      label: 'Booking Trend',
      icon: <TrendingUp className="w-3.5 h-3.5" />,
    },
    {
      id: 'cancellationRisk',
      label: 'Cancellation Risk',
      icon: <AlertTriangle className="w-3.5 h-3.5" />,
    },
    {
      id: 'guestPreferences',
      label: 'Guest Preferences',
      icon: <UserCheck className="w-3.5 h-3.5" />,
    },
    {
      id: 'operationalLoad',
      label: 'Operational Load',
      icon: <Activity className="w-3.5 h-3.5" />,
    },
    {
      id: 'revenueOpportunities',
      label: 'Revenue Opportunities',
      icon: <Sparkles className="w-3.5 h-3.5" />,
    },
  ];

  return (
    <div className="space-y-6">
      <SectionHeader
        badge="Cognitive Hospitality Analytics"
        title="Business Intelligence for Hotel Operations"
        subtitle="Forward-looking occupancy pace, automated housekeeping coordination, and revenue optimization analytics."
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
                      ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-glow-subtle'
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
            Telemetry: <span className="text-emerald-400">PMS + GDS + IoT Lockset Live</span>
          </div>
        </div>

        {/* Tab 1: Occupancy Overview */}
        {activeTab === 'occupancy' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-text-muted uppercase">
                  Occupancy Pace
                </span>
                <div className="text-2xl font-extrabold font-mono text-teal-300 mt-2">
                  {HOTEL_BI_DATA.overviewMetrics.occupancyRate}
                </div>
                <span className="text-[10px] text-teal-400 font-mono mt-1">
                  +6.4% vs market compset
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-text-muted uppercase">RevPAR</span>
                <div className="text-2xl font-extrabold font-mono text-emerald-400 mt-2">
                  {HOTEL_BI_DATA.overviewMetrics.revPar}
                </div>
                <span className="text-[10px] text-emerald-400 font-mono mt-1">
                  +14.2% yield lift
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-text-muted uppercase">
                  Average Daily Rate
                </span>
                <div className="text-2xl font-extrabold font-mono text-sky-300 mt-2">
                  {HOTEL_BI_DATA.overviewMetrics.adr}
                </div>
                <span className="text-[10px] text-sky-400 font-mono mt-1">
                  Dynamic pricing active
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-text-muted uppercase">
                  Direct Bookings
                </span>
                <div className="text-2xl font-extrabold font-mono text-indigo-300 mt-2">
                  {HOTEL_BI_DATA.overviewMetrics.directBookingShare}
                </div>
                <span className="text-[10px] text-indigo-300 font-mono mt-1">
                  +18.2% direct shift
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-text-muted uppercase">
                  Turnover Speed
                </span>
                <div className="text-2xl font-extrabold font-mono text-amber-300 mt-2">
                  {HOTEL_BI_DATA.overviewMetrics.housekeepingTurnoverTime}
                </div>
                <span className="text-[10px] text-amber-300 font-mono mt-1">Down from 48 mins</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-text-muted uppercase">Guest CSAT</span>
                <div className="text-2xl font-extrabold font-mono text-emerald-300 mt-2">
                  {HOTEL_BI_DATA.overviewMetrics.guestSatisfactionScore}
                </div>
                <span className="text-[10px] text-emerald-300 font-mono mt-1">
                  99.2% positive sentiment
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-teal-500/5 border border-teal-500/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0" />
                <span className="text-xs text-text-secondary">
                  PMS booking pace is actively synchronized across 24 global channels with automated
                  rate parity verification and instant room category balancing.
                </span>
              </div>
              <Badge
                variant="primary"
                size="sm"
                className="hidden sm:inline font-mono text-[10px] bg-teal-500/20 text-teal-300 border-teal-500/30"
              >
                Pace Status: Optimal
              </Badge>
            </div>
          </div>
        )}

        {/* Tab 2: Booking Trend */}
        {activeTab === 'bookingTrend' && (
          <div className="p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                7-Day Booking Channel Breakdown & Total Daily Occupancy
              </div>
              <div className="flex items-center gap-3 text-[11px] font-mono">
                <span className="flex items-center gap-1 text-teal-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-400" /> Direct Web
                </span>
                <span className="flex items-center gap-1 text-sky-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-400" /> Corporate Group
                </span>
                <span className="flex items-center gap-1 text-amber-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> OTA Channels
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[550px] text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-slate-800 text-text-muted text-[10px] uppercase">
                    <th className="pb-3">Day of Week</th>
                    <th className="pb-3">Direct Web</th>
                    <th className="pb-3">Corporate Groups</th>
                    <th className="pb-3">OTA Channels</th>
                    <th className="pb-3">Total Occupancy</th>
                    <th className="pb-3">Channel Health</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-850">
                  {HOTEL_BI_DATA.bookingTrends.map((t, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                      <td className="py-3 font-semibold text-text-primary">{t.day}</td>
                      <td className="py-3 text-teal-400 font-bold">{t.directBookings} rooms</td>
                      <td className="py-3 text-sky-400">{t.corporateGroup} rooms</td>
                      <td className="py-3 text-amber-300">{t.otaBookings} rooms</td>
                      <td className="py-3 font-bold text-slate-100">{t.totalOccupancy}</td>
                      <td className="py-3">
                        <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 font-bold">
                          Direct-Heavy (Healthy)
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Cancellation Risk */}
        {activeTab === 'cancellationRisk' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
              Predictive Cancellation Risk Distribution Across Active Reservations
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {HOTEL_BI_DATA.cancellationRiskDistribution.map((risk, idx) => (
                <div
                  key={idx}
                  className={cn('p-5 rounded-xl border flex flex-col justify-between', risk.bg)}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={cn('text-xs font-bold uppercase', risk.riskColor)}>
                        {risk.label}
                      </span>
                    </div>
                    <div className="text-3xl font-extrabold font-mono text-text-primary">
                      {risk.count}{' '}
                      <span className="text-xs text-text-muted font-normal">Rooms</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-2 border-t border-slate-800 text-xs font-mono text-text-muted">
                    {risk.percentage} of Upcoming 7-Day Ledger
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-text-secondary">
              💡 <strong className="text-text-primary">Aether Overbooking Shield:</strong> High-risk
              OTA reservations are backed by automated release triggers that immediately offer
              released capacity to high-paying corporate waitlists, maintaining 99%+ effective
              realization.
            </div>
          </div>
        )}

        {/* Tab 4: Guest Preferences */}
        {activeTab === 'guestPreferences' && (
          <div className="p-6 sm:p-8 space-y-4">
            <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
              Aggregated Guest Preference Clusters & Pre-Arrival Fulfillment
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {HOTEL_BI_DATA.guestPreferences.map((pref, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="primary"
                        size="sm"
                        className="font-mono text-[10px] bg-teal-500/20 text-teal-300 border-teal-500/30"
                      >
                        {pref.category}
                      </Badge>
                      <span className="text-[10px] font-mono text-emerald-400">{pref.trend}</span>
                    </div>
                    <h4 className="text-sm font-bold text-text-primary">{pref.preference}</h4>
                  </div>
                  <div className="mt-4 pt-2 border-t border-slate-850 flex items-center justify-between text-xs font-mono">
                    <span className="text-text-muted">Active In-House Count:</span>
                    <span className="text-teal-300 font-bold">{pref.count} Guests</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 5: Operational Load (Floor-by-Floor) */}
        {activeTab === 'operationalLoad' && (
          <div className="p-6 sm:p-8 space-y-4">
            <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
              Floor-by-Floor Housekeeping Readiness & Live Occupancy Status
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[550px] text-left text-xs font-mono">
                <thead>
                  <tr className="border-b border-slate-800 text-text-muted text-[10px] uppercase">
                    <th className="pb-3">Floor / Wing</th>
                    <th className="pb-3">Clean & Ready</th>
                    <th className="pb-3">In-Cleaning (Pod Active)</th>
                    <th className="pb-3">Pending Turnover</th>
                    <th className="pb-3">Floor Occupancy</th>
                    <th className="pb-3">Readiness SLA</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-850">
                  {HOTEL_BI_DATA.operationalLoadFloors.map((fl, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/50 transition-colors">
                      <td className="py-3 font-semibold text-text-primary">{fl.floor}</td>
                      <td className="py-3 text-emerald-400 font-bold">{fl.cleanReady} rooms</td>
                      <td className="py-3 text-sky-400">{fl.inCleaning} rooms</td>
                      <td className="py-3 text-amber-300">{fl.pendingDirty} rooms</td>
                      <td className="py-3 font-bold text-slate-100">{fl.occupancy}</td>
                      <td className="py-3">
                        <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 font-bold">
                          Ready by 1:30 PM
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 6: Revenue Opportunities */}
        {activeTab === 'revenueOpportunities' && (
          <div className="p-6 sm:p-8 space-y-4">
            <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
              Cognitive Ancillary Revenue & Direct Rebooking Opportunities
            </div>

            <div className="space-y-3">
              {HOTEL_BI_DATA.revenueOpportunities.map((opp) => {
                const isExecuted = executedOppIds.includes(opp.id);
                return (
                  <div
                    key={opp.id}
                    className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1.5 max-w-2xl">
                      <div className="flex items-center gap-2">
                        <Badge variant="success" size="sm" className="font-mono text-[10px]">
                          {opp.expectedLift}
                        </Badge>
                        <span className="text-xs font-mono text-text-muted">{opp.target}</span>
                      </div>
                      <h4 className="text-sm font-bold text-text-primary">{opp.title}</h4>
                      <p className="text-xs text-text-secondary leading-relaxed">{opp.strategy}</p>
                    </div>

                    <div className="shrink-0">
                      {isExecuted ? (
                        <div className="px-4 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>Campaign Live</span>
                        </div>
                      ) : (
                        <Button
                          variant="primary"
                          size="sm"
                          onClick={() => handleExecuteOpportunity(opp.id)}
                          className="w-full sm:w-auto text-xs font-semibold shadow-md bg-teal-500 hover:bg-teal-400 text-slate-950"
                        >
                          Deploy Automation
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
