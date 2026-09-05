import React, { useState } from 'react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { GYM_MEMBERS, GymMemberProfile } from '../../../data/gymData';
import {
  Users,
  Activity,
  AlertTriangle,
  CheckCircle2,
  Send,
  Sparkles,
  ShieldCheck,
  Calendar,
  Clock,
  Dumbbell,
  Zap,
  TrendingDown,
  TrendingUp,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { cn } from '../../../utils/cn';

export const GymMemberRetentionDemo: React.FC = () => {
  const [selectedMemberId, setSelectedMemberId] = useState<string>(GYM_MEMBERS[0].id);
  const [dispatchedMembers, setDispatchedMembers] = useState<string[]>([]);
  const [isDispatching, setIsDispatching] = useState<boolean>(false);

  const member = GYM_MEMBERS.find((m) => m.id === selectedMemberId) || GYM_MEMBERS[0];
  const isDispatched = dispatchedMembers.includes(member.id);

  const handleDispatchAction = () => {
    setIsDispatching(true);
    setTimeout(() => {
      setDispatchedMembers((prev) => Array.from(new Set([...prev, member.id])));
      setIsDispatching(false);
    }, 550);
  };

  return (
    <div className="space-y-8">
      {/* Sandbox Container */}
      <Card className="p-0 border-emerald-900/60 overflow-hidden shadow-2xl bg-slate-950">
        {/* Terminal Header */}
        <div className="bg-slate-900/95 px-4 sm:px-6 py-3.5 border-b border-aether-border flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                aether-retention-mesh
              </span>
              <span className="text-text-muted text-xs">/</span>
              <span className="text-xs font-mono text-text-muted">
                member-churn-prevention
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
              SIMULATED DEMO
            </span>
            <Badge variant="success" size="sm" className="font-mono text-[10px]">
              Live Member Telemetry Stream
            </Badge>
          </div>
        </div>

        {/* 4-Step Gym Demo Pipeline Progress Bar */}
        <div className="bg-slate-900/70 border-b border-slate-800 px-4 sm:px-6 py-2.5 flex items-center justify-between gap-1 overflow-x-auto text-[11px] font-mono">
          {[
            '1. Select Member',
            '2. Analyze Activity',
            '3. Identify Risk',
            '4. Recommend Retention Action',
          ].map((phase, idx, arr) => (
            <React.Fragment key={phase}>
              <div className="flex items-center gap-1.5 text-emerald-300 font-semibold shrink-0">
                <span className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center text-[9px] font-bold">
                  {idx + 1}
                </span>
                <span>{phase.split('. ')[1]}</span>
              </div>
              {idx < arr.length - 1 && (
                <ArrowRight className="w-3 h-3 text-slate-600 shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Sandbox Content */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Step 1: Member Selector Grid */}
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <h4 className="text-xs font-semibold text-text-primary uppercase tracking-wider">
                  Step 1: Select a Member Profile to Inspect:
                </h4>
              </div>
              <span className="text-[11px] font-mono text-text-muted">4 Distinct Member Archetypes</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {GYM_MEMBERS.map((m) => {
                const isSelected = m.id === selectedMemberId;
                return (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMemberId(m.id)}
                    className={cn(
                      'p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between space-y-2',
                      isSelected
                        ? 'bg-emerald-950/40 border-emerald-500/80 shadow-glow-subtle'
                        : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                    )}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-white">
                          {m.avatarInitials}
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">{m.name}</div>
                          <div className="text-[10px] text-text-muted truncate max-w-[110px]">{m.membershipTier}</div>
                        </div>
                      </div>

                      <span
                        className={cn(
                          'text-[9px] font-mono font-bold px-1.5 py-0.5 rounded',
                          m.churnRiskScore >= 80
                            ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                            : m.churnRiskScore >= 50
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        )}
                      >
                        {m.churnRiskScore}% Churn
                      </span>
                    </div>

                    <div className="pt-2 border-t border-slate-800 text-[11px] font-mono flex items-center justify-between text-text-muted">
                      <span>Renewal:</span>
                      <span className="text-slate-300 font-bold">{m.daysUntilRenewal}d left</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Telemetry & Attendance Curve Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fade-in">
            {/* Left: Member Telemetry & Attendance Curve */}
            <div className="lg:col-span-7 space-y-4">
              <Card className="p-5 bg-slate-900/90 border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center font-bold text-emerald-400 text-sm font-mono">
                      {member.avatarInitials}
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-white">{member.name}</h5>
                      <span className="text-xs text-emerald-400 font-mono">{member.membershipTier}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 font-mono text-xs">
                    <div className="text-right">
                      <span className="text-[10px] text-text-muted uppercase block">Monthly Tier Value</span>
                      <span className="text-emerald-300 font-bold">{member.monthlyValue}</span>
                    </div>
                    <Badge variant={member.engagementScore > 70 ? 'success' : member.engagementScore > 40 ? 'warning' : 'neutral'} size="sm">
                      {member.engagementLevel}
                    </Badge>
                  </div>
                </div>

                {/* 8-Week Attendance Trend Graph */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-text-muted font-sans font-semibold flex items-center gap-1.5">
                      <Activity className="w-3.5 h-3.5 text-emerald-400" />
                      Step 2: 8-Week Activity & Turnstile Inactivity Decay
                    </span>
                    <span className="text-slate-300">
                      Current Streak: <strong className="text-white">{member.attendanceTrend[member.attendanceTrend.length - 1].visits} visits/wk</strong>
                    </span>
                  </div>

                  {/* Visual Bar Chart */}
                  <div className="grid grid-cols-8 gap-2 pt-2 items-end h-28 bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
                    {member.attendanceTrend.map((item, i) => {
                      const heightPct = Math.max(8, (item.visits / 5) * 100);
                      const isZero = item.visits === 0;

                      return (
                        <div key={i} className="flex flex-col items-center gap-1 h-full justify-end">
                          <span className="text-[10px] font-mono text-slate-400">{item.visits}</span>
                          <div
                            className={cn(
                              'w-full rounded-t transition-all duration-300',
                              isZero
                                ? 'bg-rose-500/30 border-t-2 border-rose-500'
                                : item.visits >= 4
                                ? 'bg-emerald-500'
                                : 'bg-amber-500/80'
                            )}
                            style={{ height: `${heightPct}%` }}
                          />
                          <span className="text-[9px] font-mono text-text-muted">{item.week}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Recent Activity Grid */}
                <div className="grid grid-cols-2 gap-2 text-xs font-mono bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <div>
                    <span className="text-[10px] text-text-muted block">Last Check-In</span>
                    <span className="text-white font-bold">{member.recentActivity.lastCheckIn}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-text-muted block">Assigned Coach</span>
                    <span className="text-slate-200">{member.recentActivity.assignedTrainer}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-text-muted block">Favorite Studio Class</span>
                    <span className="text-slate-200 truncate block">{member.recentActivity.favoriteClass}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-text-muted block">Visits This Month</span>
                    <span className="text-emerald-400 font-bold">{member.recentActivity.totalVisitsThisMonth} visits</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right: Aether Cognitive Diagnosis & Recommendations */}
            <div className="lg:col-span-5 space-y-4">
              <Card className="p-5 bg-slate-900/90 border-emerald-900/40 space-y-4 flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5 font-mono">
                      <Sparkles className="w-3.5 h-3.5" />
                      Step 3 & 4: Risk Diagnosis & Retention Prescription
                    </span>
                    <span
                      className={cn(
                        'text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase',
                        member.churnRiskScore >= 80
                          ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                          : member.churnRiskScore >= 50
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                          : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      )}
                    >
                      {member.churnRiskLevel}
                    </span>
                  </div>

                  {/* Diagnosis */}
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 space-y-1">
                    <span className="text-[10px] font-mono text-amber-400 uppercase font-semibold block">
                      Step 3: Identified Churn Risk Trigger:
                    </span>
                    <p className="leading-relaxed">{member.diagnosis}</p>
                  </div>

                  {/* Recommended Action */}
                  <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-200 space-y-1">
                    <span className="text-[10px] font-mono text-emerald-400 uppercase font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Step 4: Recommended Retention Action:
                    </span>
                    <p className="leading-relaxed">{member.recommendedAction}</p>
                  </div>

                  {/* Suggested Communication Preview */}
                  <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-xs space-y-2 font-mono">
                    <div className="flex items-center justify-between text-text-muted text-[10px]">
                      <span className="flex items-center gap-1 text-slate-300">
                        <MessageSquare className="w-3 h-3 text-emerald-400" />
                        Suggested {member.suggestedCommunication.channel}
                      </span>
                      <span>Timing: {member.followUpTiming}</span>
                    </div>
                    <p className="text-slate-300 font-sans text-xs bg-slate-900 p-2.5 rounded border border-slate-800 italic leading-relaxed">
                      "{member.suggestedCommunication.messageText}"
                    </p>
                  </div>
                </div>

                {/* Dispatch Trigger Button */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-text-muted">
                    Action Target: Coach Task Board & SMS Gateway
                  </span>

                  {isDispatched ? (
                    <span className="text-emerald-400 font-mono font-bold flex items-center gap-1.5 text-xs">
                      <CheckCircle2 className="w-4 h-4" />
                      Incentive Dispatched
                    </span>
                  ) : (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleDispatchAction}
                      disabled={isDispatching}
                      leftIcon={
                        isDispatching ? (
                          <Sparkles className="w-3.5 h-3.5 animate-spin" />
                        ) : (
                          <Send className="w-3.5 h-3.5" />
                        )
                      }
                      className="text-xs py-1.5 shadow-sm"
                    >
                      {isDispatching ? 'Dispatching...' : 'Dispatch Retention Protocol'}
                    </Button>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
