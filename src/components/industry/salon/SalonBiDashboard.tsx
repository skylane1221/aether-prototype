import React, { useState } from 'react';
import { 
  Scissors, 
  TrendingUp, 
  Calendar, 
  ShieldCheck, 
  Sparkles, 
  ArrowUpRight,
  Clock,
  UserCheck
} from 'lucide-react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { SALON_BI_DATA } from '../../../data/salonData';

export const SalonBiDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'utilization' | 'stylists' | 'noshow'>('utilization');

  return (
    <div className="space-y-6">
      {/* Top Level BI Metric Flash Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-br from-zinc-900/90 to-black border-white/10">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-2">
            <span>CHAIR UTILIZATION</span>
            <Scissors className="w-4 h-4 text-rose-400" />
          </div>
          <div className="text-2xl font-bold text-white font-mono">{SALON_BI_DATA.chairUtilization.currentUtilization}</div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono mt-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>vs {SALON_BI_DATA.chairUtilization.traditionalAverage} traditional</span>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-zinc-900/90 to-black border-white/10">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-2">
            <span>NO-SHOW RATE</span>
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-emerald-400 font-mono">{SALON_BI_DATA.noShowReduction.currentNoShowRate}</div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono mt-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>Down from {SALON_BI_DATA.noShowReduction.traditionalNoShowRate}</span>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-zinc-900/90 to-black border-white/10">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-2">
            <span>MID-DAY GAP FILL</span>
            <Calendar className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-purple-400 font-mono">{SALON_BI_DATA.chairUtilization.middayGapFillRate}</div>
          <div className="flex items-center gap-1 text-[11px] text-purple-300 font-mono mt-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>Dynamic slot packing</span>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-zinc-900/90 to-black border-white/10">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-2">
            <span>MONTHLY RECOVERED REV</span>
            <Sparkles className="w-4 h-4 text-rose-400" />
          </div>
          <div className="text-2xl font-bold text-rose-400 font-mono">{SALON_BI_DATA.chairUtilization.recoveredRevenueMonthly}</div>
          <div className="flex items-center gap-1 text-[11px] text-rose-300 font-mono mt-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>Rebooking + gap filling</span>
          </div>
        </Card>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        <button
          onClick={() => setActiveTab('utilization')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'utilization'
              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          Chair Utilization & Gap Filling
        </button>
        <button
          onClick={() => setActiveTab('stylists')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'stylists'
              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          Stylist Productivity & Retention Yield
        </button>
        <button
          onClick={() => setActiveTab('noshow')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'noshow'
              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          No-Show Interception & Safeguards
        </button>
      </div>

      {/* Tab 1: Chair Utilization */}
      {activeTab === 'utilization' && (
        <Card className="p-6 bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950 border-white/10 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <h4 className="text-base font-bold text-white">Chair Capacity & Dynamic Slot Yield</h4>
              <p className="text-xs text-zinc-400">
                Aether slot-packing converts dead afternoon valleys into high-margin service slots.
              </p>
            </div>
            <Badge variant="primary" size="sm" className="text-xs bg-rose-500/20 text-rose-300 border-rose-500/30">
              Peak Slot Optimization Active
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-2">
              <span className="text-xs font-mono text-zinc-400">Aether Intelligent Yield</span>
              <div className="text-3xl font-extrabold text-white font-mono">{SALON_BI_DATA.chairUtilization.currentUtilization}</div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Dynamic slot packaging algorithm prevents 15-30 min idle gaps between complex chemical services.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-2">
              <span className="text-xs font-mono text-zinc-400">Traditional Salon Average</span>
              <div className="text-3xl font-extrabold text-zinc-500 font-mono">{SALON_BI_DATA.chairUtilization.traditionalAverage}</div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Unstructured booking leads to schedule fragmentation, leaving up to a third of chair hours unmonetized.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <p className="text-xs text-rose-200/90 leading-relaxed">
              <strong>Aether Yield Impact:</strong> Mid-day gap fill rate reached <strong>{SALON_BI_DATA.chairUtilization.middayGapFillRate}</strong>, driving <strong>{SALON_BI_DATA.chairUtilization.recoveredRevenueMonthly}</strong> in recovered monthly salon revenue.
            </p>
          </div>
        </Card>
      )}

      {/* Tab 2: Stylist Productivity */}
      {activeTab === 'stylists' && (
        <Card className="p-6 bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950 border-white/10 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <h4 className="text-base font-bold text-white">Stylist Roster Productivity & Chair Occupancy</h4>
              <p className="text-xs text-zinc-400">
                Workstation formula archiving and client preference memory boost retention and ticket size.
              </p>
            </div>
            <span className="text-xs font-mono text-zinc-400">{SALON_BI_DATA.stylistProductivity.length} Active Stylists</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SALON_BI_DATA.stylistProductivity.map((st, idx: number) => (
              <div key={idx} className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 font-bold text-xs">
                      {st.stylist.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{st.stylist}</div>
                      <div className="text-[10px] text-zinc-400 font-mono">Status: {st.status}</div>
                    </div>
                  </div>
                  <Badge variant="primary" size="sm" className="text-[10px] bg-rose-500/20 text-rose-300 border-rose-500/30 font-mono">
                    {st.chairOccupancy} Occupancy
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 text-center font-mono">
                  <div className="p-2 rounded-lg bg-white/[0.02]">
                    <div className="text-[10px] text-zinc-400">Avg Ticket</div>
                    <div className="text-xs font-bold text-white mt-0.5">{st.avgTicket}</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02]">
                    <div className="text-[10px] text-zinc-400">Rebooking Rate</div>
                    <div className="text-xs font-bold text-emerald-400 mt-0.5">{st.rebookingRate}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Tab 3: No-Show Interception */}
      {activeTab === 'noshow' && (
        <Card className="p-6 bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950 border-white/10 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <h4 className="text-base font-bold text-white">No-Show Prediction & Cancellation Interception</h4>
              <p className="text-xs text-zinc-400">
                Automated confirmation protocols with intelligent micro-deposits for high-risk booking slots.
              </p>
            </div>
            <Badge variant="success" size="sm" className="text-xs font-mono">
              Protection Active
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
              <span className="text-[10px] uppercase font-mono text-zinc-400">Aether No-Show Rate</span>
              <div className="text-2xl font-bold text-emerald-400 font-mono">{SALON_BI_DATA.noShowReduction.currentNoShowRate}</div>
              <p className="text-[11px] text-zinc-400">Across all scheduled appointments</p>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
              <span className="text-[10px] uppercase font-mono text-zinc-400">Industry Baseline</span>
              <div className="text-2xl font-bold text-rose-400 font-mono">{SALON_BI_DATA.noShowReduction.traditionalNoShowRate}</div>
              <p className="text-[11px] text-zinc-400">Unmanaged phone/DM bookings</p>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
              <span className="text-[10px] uppercase font-mono text-zinc-400">Deposit Compliance</span>
              <div className="text-2xl font-bold text-purple-400 font-mono">{SALON_BI_DATA.noShowReduction.depositCompliance}</div>
              <p className="text-[11px] text-zinc-400">For multi-hour chemical services</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
