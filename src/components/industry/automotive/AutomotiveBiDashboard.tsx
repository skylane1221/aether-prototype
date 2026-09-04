import React, { useState } from 'react';
import { 
  Wrench, 
  Clock, 
  ShieldCheck, 
  Sparkles, 
  ArrowUpRight,
  Car,
  Cpu,
  CheckCircle2
} from 'lucide-react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { AUTOMOTIVE_BI_DATA } from '../../../data/automotiveData';

export const AutomotiveBiDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'bays' | 'techs' | 'parts'>('bays');

  return (
    <div className="space-y-6">
      {/* Top Level BI Metric Flash Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-br from-zinc-900/90 to-black border-white/10">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-2">
            <span>BAY UTILIZATION</span>
            <Wrench className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-2xl font-bold text-white font-mono">{AUTOMOTIVE_BI_DATA.bayCapacity.averageBayUtilization}</div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono mt-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>vs {AUTOMOTIVE_BI_DATA.bayCapacity.traditionalAverage} traditional</span>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-zinc-900/90 to-black border-white/10">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-2">
            <span>PARTS HOLD-OVER DELAY</span>
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-emerald-400 font-mono">{AUTOMOTIVE_BI_DATA.bayCapacity.partsHoldOverReduction}</div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono mt-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>Pre-booking staging</span>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-zinc-900/90 to-black border-white/10">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-2">
            <span>PARTS ON-HAND RATE</span>
            <Cpu className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-2xl font-bold text-sky-400 font-mono">{AUTOMOTIVE_BI_DATA.partsAvailability.onHandFulfillmentRate}</div>
          <div className="flex items-center gap-1 text-[11px] text-sky-300 font-mono mt-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>Warehouse ERP sync</span>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-zinc-900/90 to-black border-white/10">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-2">
            <span>DAILY RO THROUGHPUT</span>
            <Sparkles className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-2xl font-bold text-indigo-400 font-mono">{AUTOMOTIVE_BI_DATA.bayCapacity.dailyCompletedROs}</div>
          <div className="flex items-center gap-1 text-[11px] text-indigo-300 font-mono mt-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>+24% daily completed</span>
          </div>
        </Card>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        <button
          onClick={() => setActiveTab('bays')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'bays'
              ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-sm'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          Lift Bay Capacity & Throughput
        </button>
        <button
          onClick={() => setActiveTab('techs')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'techs'
              ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-sm'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          Master Technician Flag Efficiency
        </button>
        <button
          onClick={() => setActiveTab('parts')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'parts'
              ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 shadow-sm'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          Parts Pre-Staging & Inventory Sync
        </button>
      </div>

      {/* Tab 1: Bays */}
      {activeTab === 'bays' && (
        <Card className="p-6 bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950 border-white/10 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <h4 className="text-base font-bold text-white">Workshop Lift Bay Load Balancing</h4>
              <p className="text-xs text-zinc-400">
                Aether bay balancer separates 60-minute express periodic maintenance from heavy diagnostic and transmission repairs.
              </p>
            </div>
            <Badge variant="primary" size="sm" className="text-xs bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
              Bay Balancer Active
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-2">
              <span className="text-xs font-mono text-zinc-400">Aether Service Center Utilization</span>
              <div className="text-3xl font-extrabold text-white font-mono">{AUTOMOTIVE_BI_DATA.bayCapacity.averageBayUtilization}</div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Dynamic bay scheduling matches lift equipment specifications with repair order complexity.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-2">
              <span className="text-xs font-mono text-zinc-400">Traditional Dealership Baseline</span>
              <div className="text-3xl font-extrabold text-zinc-500 font-mono">{AUTOMOTIVE_BI_DATA.bayCapacity.traditionalAverage}</div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Advisors overbook heavy repair orders without checking lift capacity, leaving express bays idle.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-indigo-950/20 border border-indigo-500/30 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <p className="text-xs text-indigo-200/90 leading-relaxed">
              <strong>Throughput Impact:</strong> Pre-staged parts verification and skill routing boosted completed repair orders to <strong>{AUTOMOTIVE_BI_DATA.bayCapacity.dailyCompletedROs}</strong> with zero overnight hold-overs.
            </p>
          </div>
        </Card>
      )}

      {/* Tab 2: Techs */}
      {activeTab === 'techs' && (
        <Card className="p-6 bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950 border-white/10 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <h4 className="text-base font-bold text-white">Technician Skill Certification & Flag-Hour Efficiency</h4>
              <p className="text-xs text-zinc-400">
                Jobs automatically routed based on factory certifications, lift proximity, and labor velocity.
              </p>
            </div>
            <span className="text-xs font-mono text-zinc-400">{AUTOMOTIVE_BI_DATA.technicianEfficiency.length} Active Master Techs</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {AUTOMOTIVE_BI_DATA.technicianEfficiency.map((tech, idx: number) => (
              <div key={idx} className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-xs">
                      {tech.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{tech.name}</div>
                      <div className="text-[10px] text-zinc-400 font-mono">{tech.specialty} • {tech.bay}</div>
                    </div>
                  </div>
                  <Badge variant="primary" size="sm" className="text-[10px] bg-indigo-500/20 text-indigo-300 border-indigo-500/30 font-mono">
                    {tech.flagHourEfficiency} Efficiency
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 text-center font-mono">
                  <div className="p-2 rounded-lg bg-white/[0.02]">
                    <div className="text-[10px] text-zinc-400">Monthly ROs</div>
                    <div className="text-xs font-bold text-white mt-0.5">{tech.roCompletedMonth} Vehicles</div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02]">
                    <div className="text-[10px] text-zinc-400">Flag Rate</div>
                    <div className="text-xs font-bold text-emerald-400 mt-0.5">{tech.flagHourEfficiency}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Tab 3: Parts */}
      {activeTab === 'parts' && (
        <Card className="p-6 bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950 border-white/10 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <h4 className="text-base font-bold text-white">Parts Pre-Staging & Inventory Synchronization</h4>
              <p className="text-xs text-zinc-400">
                Guarantees zero vehicles disassembled on lifts waiting for backordered replacement parts.
              </p>
            </div>
            <Badge variant="success" size="sm" className="text-xs font-mono">
              Parts Mesh Linked
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
              <span className="text-[10px] uppercase font-mono text-zinc-400">On-Hand Fulfillment</span>
              <div className="text-2xl font-bold text-emerald-400 font-mono">{AUTOMOTIVE_BI_DATA.partsAvailability.onHandFulfillmentRate}</div>
              <p className="text-[11px] text-zinc-400">Warehouse stock verified prior to drop-off</p>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
              <span className="text-[10px] uppercase font-mono text-zinc-400">Pre-Allocation Rate</span>
              <div className="text-2xl font-bold text-indigo-400 font-mono">{AUTOMOTIVE_BI_DATA.partsAvailability.preBookingAllocationRate}</div>
              <p className="text-[11px] text-zinc-400">Staged in bay bins before customer arrival</p>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
              <span className="text-[10px] uppercase font-mono text-zinc-400">Average Parts Hold</span>
              <div className="text-2xl font-bold text-sky-400 font-mono">{AUTOMOTIVE_BI_DATA.partsAvailability.averagePartsHoldHours.split(' (')[0]}</div>
              <p className="text-[11px] text-zinc-400">Down from 14.2 hrs traditional delay</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
