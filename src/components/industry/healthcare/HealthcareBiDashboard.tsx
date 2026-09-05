import React, { useState } from 'react';
import {
  Calendar,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
  Activity,
  Users,
  CheckCircle2,
} from 'lucide-react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { HEALTHCARE_BI_DATA } from '../../../data/healthcareData';

export const HealthcareBiDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'capacity' | 'departments' | 'noshow'>('capacity');

  return (
    <div className="space-y-6">
      {/* Top Level BI Metric Flash Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-br from-zinc-900/90 to-black border-white/10">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-2">
            <span>SLOT UTILIZATION</span>
            <Calendar className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl font-bold text-white font-mono">
            {HEALTHCARE_BI_DATA.capacityYield.slotUtilization}
          </div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono mt-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>vs {HEALTHCARE_BI_DATA.capacityYield.traditionalUtilization} baseline</span>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-zinc-900/90 to-black border-white/10">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-2">
            <span>CLINIC NO-SHOW RATE</span>
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-emerald-400 font-mono">
            {HEALTHCARE_BI_DATA.noShowMetrics.currentNoShowRate}
          </div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono mt-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>Down from {HEALTHCARE_BI_DATA.noShowMetrics.baselineNoShowRate}</span>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-zinc-900/90 to-black border-white/10">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-2">
            <span>GAP RECOVERY SPEED</span>
            <Clock className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-2xl font-bold text-sky-400 font-mono">
            {HEALTHCARE_BI_DATA.capacityYield.cancellationRecoverySpeed}
          </div>
          <div className="flex items-center gap-1 text-[11px] text-sky-300 font-mono mt-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>Auto waitlist backfill</span>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-zinc-900/90 to-black border-white/10">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-2">
            <span>RECOVERED HOURS</span>
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl font-bold text-cyan-400 font-mono">
            {HEALTHCARE_BI_DATA.capacityYield.monthlyRecoveredProviderHours}
          </div>
          <div className="flex items-center gap-1 text-[11px] text-cyan-300 font-mono mt-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>Monthly provider time</span>
          </div>
        </Card>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        <button
          onClick={() => setActiveTab('capacity')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'capacity'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          Provider Capacity & Gap Recovery
        </button>
        <button
          onClick={() => setActiveTab('departments')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'departments'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          Specialty Department Throughput
        </button>
        <button
          onClick={() => setActiveTab('noshow')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'noshow'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          No-Show Interception Telemetry
        </button>
      </div>

      {/* Tab 1: Capacity */}
      {activeTab === 'capacity' && (
        <Card className="p-6 bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950 border-white/10 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <h4 className="text-base font-bold text-white">
                Provider Schedule Capacity & Gap Recovery
              </h4>
              <p className="text-xs text-zinc-400">
                Aether waitlist intelligence fills open consultation slots in under 5 minutes
                without staff telephone tag.
              </p>
            </div>
            <Badge
              variant="primary"
              size="sm"
              className="text-xs bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
            >
              Autonomous Gap Filler Active
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-2">
              <span className="text-xs font-mono text-zinc-400">Aether Outpatient Utilization</span>
              <div className="text-3xl font-extrabold text-white font-mono">
                {HEALTHCARE_BI_DATA.capacityYield.slotUtilization}
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Dynamic slot pacing adjusts consultation duration based on patient history,
                preserving billable physician time.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-2">
              <span className="text-xs font-mono text-zinc-400">Traditional Clinic Baseline</span>
              <div className="text-3xl font-extrabold text-zinc-500 font-mono">
                {HEALTHCARE_BI_DATA.capacityYield.traditionalUtilization}
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Fixed 15-min template booking leaves nearly 30% of clinic hours lost to unbilled
                cancellations and overruns.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/30 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <p className="text-xs text-cyan-200/90 leading-relaxed">
              <strong>Administrative Realization:</strong> Automated waitlist matching recovered{' '}
              <strong>{HEALTHCARE_BI_DATA.capacityYield.monthlyRecoveredProviderHours}</strong> of
              provider time across active clinics this month.
            </p>
          </div>
        </Card>
      )}

      {/* Tab 2: Departments */}
      {activeTab === 'departments' && (
        <Card className="p-6 bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950 border-white/10 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <h4 className="text-base font-bold text-white">
                Departmental Intake & Wait-Time Telemetry
              </h4>
              <p className="text-xs text-zinc-400">
                Pre-visit digital intake completions reduce clinic lobby wait times to under 5
                minutes.
              </p>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              {HEALTHCARE_BI_DATA.departmentEfficiency.length} Active Clinical Units
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {HEALTHCARE_BI_DATA.departmentEfficiency.map((dept, idx: number) => (
              <div key={idx} className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-bold text-xs">
                      {dept.department.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{dept.department}</div>
                      <div className="text-[10px] text-zinc-400 font-mono">
                        Lobby Wait: {dept.avgWaitTime}
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant="primary"
                    size="sm"
                    className="text-[10px] bg-cyan-500/20 text-cyan-300 border-cyan-500/30 font-mono"
                  >
                    {dept.utilization} Capacity
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 text-center font-mono">
                  <div className="p-2 rounded-lg bg-white/[0.02]">
                    <div className="text-[10px] text-zinc-400">No-Show Rate</div>
                    <div className="text-xs font-bold text-emerald-400 mt-0.5">
                      {dept.noShowRate}
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02]">
                    <div className="text-[10px] text-zinc-400">Digital Intake</div>
                    <div className="text-xs font-bold text-cyan-300 mt-0.5">
                      {dept.intakeCompletion}
                    </div>
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
              <h4 className="text-base font-bold text-white">
                No-Show Risk Interception Architecture
              </h4>
              <p className="text-xs text-zinc-400">
                Automated 1-tap confirmation checkpoints and pre-visit insurance validation.
              </p>
            </div>
            <Badge variant="success" size="sm" className="text-xs font-mono">
              Protection Active
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
              <span className="text-[10px] uppercase font-mono text-zinc-400">
                Aether No-Show Rate
              </span>
              <div className="text-2xl font-bold text-emerald-400 font-mono">
                {HEALTHCARE_BI_DATA.noShowMetrics.currentNoShowRate}
              </div>
              <p className="text-[11px] text-zinc-400">Across outpatient consultations</p>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
              <span className="text-[10px] uppercase font-mono text-zinc-400">
                Traditional Rate
              </span>
              <div className="text-2xl font-bold text-rose-400 font-mono">
                {HEALTHCARE_BI_DATA.noShowMetrics.baselineNoShowRate}
              </div>
              <p className="text-[11px] text-zinc-400">Unmanaged appointment desks</p>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
              <span className="text-[10px] uppercase font-mono text-zinc-400">
                Risk Interception
              </span>
              <div className="text-2xl font-bold text-cyan-400 font-mono">
                {HEALTHCARE_BI_DATA.noShowMetrics.highRiskInterceptionRate}
              </div>
              <p className="text-[11px] text-zinc-400">High-risk slots backfilled early</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
