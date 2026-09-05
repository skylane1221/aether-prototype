import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  MessageSquare, 
  ShieldCheck, 
  AlertTriangle, 
  FileText,
  User,
  HeartHandshake
} from 'lucide-react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { HEALTHCARE_APPOINTMENTS, ClinicAppointmentProfile } from '../../../data/healthcareData';

export const HealthcareAppointmentDemo: React.FC = () => {
  const [selectedAptId, setSelectedAptId] = useState<string>(HEALTHCARE_APPOINTMENTS[0].id);
  const [demoState, setDemoState] = useState<'idle' | 'analyzing' | 'dispatched'>('idle');

  const apt: ClinicAppointmentProfile =
    HEALTHCARE_APPOINTMENTS.find((a: ClinicAppointmentProfile) => a.id === selectedAptId) ||
    HEALTHCARE_APPOINTMENTS[0];

  const handleRunAether = () => {
    setDemoState('analyzing');
    setTimeout(() => {
      setDemoState('dispatched');
    }, 500);
  };

  const handleReset = () => {
    setDemoState('idle');
  };

  const handleSelectApt = (id: string) => {
    setSelectedAptId(id);
    setDemoState('idle');
  };

  return (
    <div className="space-y-6">
      {/* Top Demo Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800">
        <div className="flex items-center gap-2.5 flex-wrap">
          <Badge
            variant="outline"
            size="sm"
            className="bg-cyan-500/10 border-cyan-400/40 text-cyan-300 font-mono text-[10px] tracking-widest font-bold uppercase py-0.5 px-2.5"
          >
            SIMULATED DEMO
          </Badge>
          <span className="text-xs font-mono text-text-muted">
            Signature Journey: <strong className="text-cyan-300">Appointment → Risk → Reminder</strong>
          </span>
          <span className="text-[10px] font-mono bg-rose-500/10 text-rose-300 border border-rose-500/20 px-2 py-0.5 rounded">
            Administrative & Operational (Non-Diagnostic)
          </span>
        </div>

        <div className="flex items-center gap-2">
          {demoState === 'idle' ? (
            <Button
              variant="primary"
              size="sm"
              onClick={handleRunAether}
              leftIcon={<Sparkles className="w-3.5 h-3.5" />}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold shadow-glow-subtle"
            >
              Run Aether
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              className="text-xs border-slate-700 text-slate-200"
            >
              Reset Demo
            </Button>
          )}
        </div>
      </div>

      {/* Appointment Selector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {HEALTHCARE_APPOINTMENTS.map((a: ClinicAppointmentProfile) => {
          const isSelected = a.id === selectedAptId;
          const riskBadge =
            a.noShowRiskLevel === 'High Risk'
              ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
              : a.noShowRiskLevel === 'Moderate Risk'
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
              : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';

          return (
            <button
              key={a.id}
              onClick={() => handleSelectApt(a.id)}
              className={`p-4 rounded-xl text-left border transition-all duration-300 relative group flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-b from-cyan-950/40 via-teal-950/30 to-black border-cyan-500 shadow-[0_0_20px_rgba(6,182,212,0.25)]'
                  : 'bg-zinc-900/60 border-white/5 hover:border-cyan-500/30 hover:bg-cyan-950/10'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-zinc-400 font-semibold">{a.visitType}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${riskBadge}`}>
                    {a.noShowRiskLevel}
                  </span>
                </div>
                <div className="font-semibold text-white text-sm group-hover:text-cyan-300 transition-colors">
                  {a.patientName}
                </div>
                <div className="text-xs text-zinc-400 flex items-center gap-1.5 mt-0.5">
                  <User className="w-3 h-3 text-cyan-400" />
                  <span>{a.provider}</span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-zinc-400 font-mono text-[11px] truncate">{a.appointmentTime.split(' (')[0]}</span>
                <span
                  className={`font-mono font-bold text-[11px] ${
                    a.noShowProbability > 0.5 ? 'text-rose-400' : 'text-emerald-400'
                  }`}
                >
                  {(a.noShowProbability * 100).toFixed(0)}% Risk
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Dossier & Intelligence Engine */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Appointment Details & Attendance Risk Telemetry */}
        <div className="lg:col-span-7 space-y-6">
          <Card className="p-6 bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950 border-white/10 space-y-6">
            {/* Header / Patient Card */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500 to-teal-600 p-0.5">
                  <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center text-cyan-400 font-bold text-base">
                    {apt.avatarInitials}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">{apt.patientName}</h3>
                    <Badge variant="primary" size="sm" className="text-[10px] bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                      {apt.visitType}
                    </Badge>
                  </div>
                  <p className="text-xs text-zinc-400">
                    {apt.provider} • <span className="text-zinc-300">{apt.department}</span>
                  </p>
                </div>
              </div>

              {/* Quick Status Chips */}
              <div className="flex items-center gap-3 text-right">
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-zinc-400 uppercase font-mono">Intake Status</div>
                  <div className="text-xs font-bold text-white font-mono">{apt.intakeStatus}</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-zinc-400 uppercase font-mono">No-Show Risk</div>
                  <div className={`text-xs font-bold font-mono ${
                    apt.noShowProbability > 0.5 ? 'text-rose-400' : apt.noShowProbability > 0.2 ? 'text-amber-400' : 'text-emerald-400'
                  }`}>
                    {(apt.noShowProbability * 100).toFixed(0)}%
                  </div>
                </div>
              </div>
            </div>

            {/* Appointment Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-[10px] uppercase font-mono text-zinc-400 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-cyan-400" />
                  Scheduled Slot Window
                </span>
                <p className="text-xs font-bold text-white pt-0.5">{apt.appointmentTime}</p>
                <span className="text-[11px] text-zinc-400 font-mono">Department: {apt.department}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="text-[10px] uppercase font-mono text-zinc-400 flex items-center gap-1">
                  <FileText className="w-3 h-3 text-cyan-400" />
                  Administrative Intake Workflow
                </span>
                <p className="text-xs font-semibold text-cyan-200 pt-0.5">{apt.intakeStatus}</p>
                <span className="text-[11px] text-zinc-400 font-mono">Synced to EHR Scheduling Ledger</span>
              </div>
            </div>

            {/* Attendance & Risk Diagnosis Factors */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-black/60 to-zinc-950 border border-white/5 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
                  Calculated Operational Risk Drivers
                </span>
                <span className="text-[10px] text-zinc-400">{apt.riskFactors.length} Risk Vectors</span>
              </div>

              <div className="space-y-1.5 pt-1">
                {apt.riskFactors.map((factor: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                    <span>{factor}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Follow-Up Action Plan Box */}
            <div className="p-4 rounded-xl bg-cyan-950/20 border border-cyan-500/20 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-300 flex items-center gap-1.5">
                  <HeartHandshake className="w-3.5 h-3.5 text-cyan-400" />
                  <strong>Post-Visit Follow-Up Coordination</strong>
                </span>
                <span className="font-mono text-cyan-300 text-[11px]">
                  Target: {apt.followUpPlan.window}
                </span>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {apt.followUpPlan.recommendedAction}
              </p>
              <div className="text-[11px] text-cyan-200/80 font-mono pt-1">
                Coordination Channel: {apt.followUpPlan.postVisitCoordination}
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Aether Automated Reminders & Action Trigger */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="p-6 bg-gradient-to-br from-cyan-950/30 via-zinc-950 to-black border-cyan-500/30 space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/40">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Aether Administrative Reminder</h4>
                  <span className="text-[10px] font-mono text-zinc-400">Intelligent Pre-Visit Protocol</span>
                </div>
              </div>
              <Badge variant="primary" size="sm" className="text-[10px] bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-mono">
                Confidence 98%
              </Badge>
            </div>

            {/* Recommended Protocol Settings */}
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                  <div className="text-[10px] text-zinc-400 font-mono uppercase">Channel</div>
                  <div className="text-xs font-bold text-white flex items-center gap-1 mt-0.5">
                    <MessageSquare className="w-3 h-3 text-cyan-400" />
                    {apt.recommendedReminder.channel} Protocol
                  </div>
                </div>
                <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                  <div className="text-[10px] text-zinc-400 font-mono uppercase">Dispatch Timing</div>
                  <div className="text-xs font-bold text-white flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3 text-cyan-400" />
                    {apt.recommendedReminder.timing.split(' (')[0]}
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 space-y-1">
                <span className="text-[10px] uppercase font-mono text-zinc-400 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-cyan-400" />
                  Required Administrative Checkpoint
                </span>
                <div className="text-xs font-semibold text-cyan-200">
                  {apt.recommendedReminder.actionRequired}
                </div>
              </div>
            </div>

            {/* Generated Script Preview */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Send className="w-3 h-3 text-cyan-400" />
                  Generated {apt.recommendedReminder.channel} Briefing
                </span>
                <span className="text-[10px] text-emerald-400">HIPAA Administrative Compliant</span>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-emerald-100/90 font-mono leading-relaxed relative">
                <div className="absolute top-2 right-2 flex items-center gap-1 text-[10px] text-emerald-400">
                  <ShieldCheck className="w-3 h-3" />
                  Verified
                </div>
                "{apt.recommendedReminder.messageContent}"
              </div>
            </div>

            {/* Action Trigger */}
            <div className="pt-2">
              <AnimatePresence mode="wait">
                {demoState === 'analyzing' ? (
                  <div className="p-4 rounded-xl bg-cyan-950/40 border border-cyan-500/40 text-center space-y-2">
                    <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent animate-spin mx-auto" />
                    <p className="text-xs text-cyan-200 font-mono">
                      Synthesizing attendance risk & structuring pre-visit briefing...
                    </p>
                  </div>
                ) : demoState === 'dispatched' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-center space-y-2"
                  >
                    <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      Result: Administrative Pre-Visit Protocol Active
                    </div>
                    <p className="text-[11px] text-emerald-200/80">
                      Conversational check-in dispatched to {apt.patientName}. Pre-visit intake link held for digital submission.
                    </p>
                    <div className="pt-1 flex items-center justify-center gap-2">
                      <span className="text-[10px] font-mono text-emerald-300">Recommended Action: Slot Locked</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleReset}
                        className="text-[10px] py-0.5 px-2 h-auto border-emerald-500/40 text-emerald-300"
                      >
                        Reset Demo
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <Button
                    onClick={handleRunAether}
                    variant="primary"
                    className="w-full justify-center gap-2 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 shadow-lg shadow-cyan-900/30 font-semibold"
                  >
                    <Send className="w-4 h-4" />
                    Recommended Action: Dispatch Pre-Visit Check-In
                  </Button>
                )}
              </AnimatePresence>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
