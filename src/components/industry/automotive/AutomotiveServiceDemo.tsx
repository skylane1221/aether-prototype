import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Car,
  Wrench,
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  Send,
  MessageSquare,
  ShieldCheck,
  AlertTriangle,
  Layers,
  Cpu,
} from 'lucide-react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { AUTOMOTIVE_VEHICLES, VehicleServiceProfile } from '../../../data/automotiveData';

export const AutomotiveServiceDemo: React.FC = () => {
  const [selectedVehId, setSelectedVehId] = useState<string>(AUTOMOTIVE_VEHICLES[0].id);
  const [demoState, setDemoState] = useState<'idle' | 'analyzing' | 'dispatched'>('idle');
  const [activeTab, setActiveTab] = useState<'history' | 'parts'>('history');

  const vehicle: VehicleServiceProfile =
    AUTOMOTIVE_VEHICLES.find((v: VehicleServiceProfile) => v.id === selectedVehId) ||
    AUTOMOTIVE_VEHICLES[0];

  const handleRunAether = () => {
    setDemoState('analyzing');
    setTimeout(() => {
      setDemoState('dispatched');
    }, 500);
  };

  const handleReset = () => {
    setDemoState('idle');
  };

  const handleSelectVeh = (id: string) => {
    setSelectedVehId(id);
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
            className="bg-indigo-500/10 border-indigo-400/40 text-indigo-300 font-mono text-[10px] tracking-widest font-bold uppercase py-0.5 px-2.5"
          >
            SIMULATED DEMO
          </Badge>
          <span className="text-xs font-mono text-text-muted">
            Signature Journey:{' '}
            <strong className="text-indigo-300">
              Vehicle History → Service Prediction → Appointment
            </strong>
          </span>
        </div>

        <div className="flex items-center gap-2">
          {demoState === 'idle' ? (
            <Button
              variant="primary"
              size="sm"
              onClick={handleRunAether}
              leftIcon={<Sparkles className="w-3.5 h-3.5" />}
              className="bg-indigo-500 hover:bg-indigo-400 text-slate-950 font-semibold shadow-glow-subtle"
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

      {/* Vehicle Selector Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {AUTOMOTIVE_VEHICLES.map((v: VehicleServiceProfile) => {
          const isSelected = v.id === selectedVehId;
          const urgencyBadge =
            v.urgencyLevel === 'Overdue Maintenance'
              ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
              : v.urgencyLevel === 'Service Imminent'
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';

          return (
            <button
              key={v.id}
              onClick={() => handleSelectVeh(v.id)}
              className={`p-4 rounded-xl text-left border transition-all duration-300 relative group flex flex-col justify-between ${
                isSelected
                  ? 'bg-gradient-to-b from-indigo-950/50 via-blue-950/30 to-black border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.25)]'
                  : 'bg-zinc-900/60 border-white/5 hover:border-indigo-500/30 hover:bg-indigo-950/10'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-zinc-400 font-semibold">
                    {v.currentMileageKm.toLocaleString()} km
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border ${urgencyBadge}`}
                  >
                    {v.urgencyLevel}
                  </span>
                </div>
                <div className="font-semibold text-white text-sm group-hover:text-indigo-300 transition-colors">
                  {v.vehicleName}
                </div>
                <div className="text-xs text-zinc-400 flex items-center gap-1.5 mt-0.5">
                  <Car className="w-3 h-3 text-indigo-400" />
                  <span>Owner: {v.ownerName}</span>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                <span className="text-zinc-400 font-mono text-[11px]">
                  Due: {v.mileageIntervalDue.toLocaleString()} km
                </span>
                <span className="text-indigo-400 font-mono font-bold text-[11px]">
                  {v.partsReadiness.status}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Vehicle Dossier & Workshop Allocator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Vehicle Health, History & Maintenance Prediction */}
        <div className="lg:col-span-7 space-y-6">
          <Card className="p-6 bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950 border-white/10 space-y-6">
            {/* Header / Vehicle Dossier Card */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-indigo-500 to-blue-600 p-0.5">
                  <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center text-indigo-400 font-bold text-base">
                    {vehicle.avatarInitials}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">{vehicle.vehicleName}</h3>
                    <Badge
                      variant="primary"
                      size="sm"
                      className="text-[10px] bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
                    >
                      {vehicle.urgencyLevel}
                    </Badge>
                  </div>
                  <p className="text-xs text-zinc-400 font-mono">
                    VIN: {vehicle.vinNumber} • Owner:{' '}
                    <span className="text-zinc-200">{vehicle.ownerName}</span>
                  </p>
                </div>
              </div>

              {/* Quick Status Chips */}
              <div className="flex items-center gap-3 text-right">
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-zinc-400 uppercase font-mono">
                    Current Odometer
                  </div>
                  <div className="text-xs font-bold text-white font-mono">
                    {vehicle.currentMileageKm.toLocaleString()} KM
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-zinc-400 uppercase font-mono">Last Service</div>
                  <div className="text-xs font-bold text-indigo-300 font-mono">
                    {vehicle.lastServiceKm.toLocaleString()} KM
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-tab Switcher: Service History vs Parts & Bay Staging */}
            <div className="flex items-center gap-2 border-b border-white/5 pb-2">
              <button
                onClick={() => setActiveTab('history')}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                  activeTab === 'history'
                    ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                Service History & Prior Repair Orders
              </button>
              <button
                onClick={() => setActiveTab('parts')}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                  activeTab === 'parts'
                    ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Cpu className="w-3.5 h-3.5" />
                Parts Pre-Staging & Lift Bay Allocation
              </button>
            </div>

            {/* Tab 1: Service History */}
            {activeTab === 'history' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                  <span>Historical Repair Orders Log</span>
                  <span>{vehicle.serviceHistory.length} Recorded Visits</span>
                </div>

                <div className="space-y-2">
                  {vehicle.serviceHistory.map((item, idx: number) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-black/40 border border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-2 hover:border-indigo-500/30 transition-colors"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-white">
                            {item.jobDescription}
                          </span>
                          <span className="text-[10px] text-zinc-400 font-mono">
                            ({item.mileageKm.toLocaleString()} km)
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1 pt-0.5">
                          {item.partsReplaced.map((part: string, pIdx: number) => (
                            <span
                              key={pIdx}
                              className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-zinc-300 font-mono"
                            >
                              {part}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between md:justify-end gap-3 text-xs font-mono">
                        <span className="text-zinc-400">{item.date}</span>
                        <span className="font-semibold text-indigo-300">{item.cost}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Parts Pre-Staging & Lift Bay Allocation */}
            {activeTab === 'parts' && (
              <div className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-zinc-400">
                      Assigned Lift Bay
                    </span>
                    <p className="text-xs font-bold text-white pt-1">
                      {vehicle.partsReadiness.bayRequirement}
                    </p>
                    <span className="text-[11px] text-indigo-300 font-mono">
                      Tech: {vehicle.partsReadiness.assignedTechCert}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-zinc-400">
                      Parts Inventory Status
                    </span>
                    <div className="flex items-center gap-1.5 pt-1">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-xs font-bold text-emerald-400">
                        {vehicle.partsReadiness.status}
                      </span>
                    </div>
                    <span className="text-[11px] text-zinc-400 font-mono">
                      Pre-allocated before customer arrival
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <span className="text-[10px] uppercase font-mono text-zinc-400">
                    Staged OEM Replacement Parts
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1.5">
                    {vehicle.partsReadiness.requiredItems.map((item: string, idx: number) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded bg-indigo-950/40 text-indigo-200 border border-indigo-500/30 font-mono"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Upcoming Maintenance Recommendations */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-indigo-950/20 via-blue-950/20 to-black border border-indigo-500/20 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-300 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-indigo-400" />
                  <strong>Upcoming Service: {vehicle.upcomingServiceRecommended}</strong>
                </span>
                <span className="font-mono text-indigo-300 text-[11px]">
                  Target: {vehicle.mileageIntervalDue.toLocaleString()} km
                </span>
              </div>

              <div className="space-y-1 pt-1">
                {vehicle.maintenanceRecommendations.map((rec: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0" />
                    <span>{rec}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Aether Customer Service Reminder & Recommended Slot */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="p-6 bg-gradient-to-br from-indigo-950/30 via-zinc-950 to-black border-indigo-500/30 space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-400 border border-indigo-500/40">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Aether Service Outreach</h4>
                  <span className="text-[10px] font-mono text-zinc-400">
                    Automated Workshop Retention Engine
                  </span>
                </div>
              </div>
              <Badge
                variant="primary"
                size="sm"
                className="text-[10px] bg-indigo-500/20 text-indigo-300 border-indigo-500/40 font-mono"
              >
                Confidence 99%
              </Badge>
            </div>

            {/* Recommended Appointment Slot */}
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 space-y-1">
                <span className="text-[10px] uppercase font-mono text-zinc-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-indigo-400" />
                  Recommended Intake Slot & Bay Allocation
                </span>
                <div className="text-xs font-bold text-white">
                  {vehicle.recommendedAppointmentSlot}
                </div>
                <p className="text-[11px] text-zinc-400 font-mono">
                  Technician and parts staged to guarantee on-time turnaround.
                </p>
              </div>

              {/* Outreach Channel */}
              <div className="p-3 rounded-lg bg-black/40 border border-white/5">
                <div className="text-[10px] text-zinc-400 font-mono uppercase">Channel</div>
                <div className="text-xs font-bold text-white flex items-center gap-1 mt-0.5">
                  <MessageSquare className="w-3 h-3 text-emerald-400" />
                  {vehicle.customerReminder.channel} Service Dispatch Protocol
                </div>
              </div>
            </div>

            {/* Generated Script Preview */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Send className="w-3 h-3 text-indigo-400" />
                  Generated {vehicle.customerReminder.channel} Service Invitation
                </span>
                <span className="text-[10px] text-emerald-400">1-Tap Direct Send</span>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-emerald-100/90 font-mono leading-relaxed relative">
                <div className="absolute top-2 right-2 flex items-center gap-1 text-[10px] text-emerald-400">
                  <ShieldCheck className="w-3 h-3" />
                  Verified
                </div>
                "{vehicle.customerReminder.messageContent}"
              </div>
            </div>

            {/* Action Trigger */}
            <div className="pt-2">
              <AnimatePresence mode="wait">
                {demoState === 'analyzing' ? (
                  <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/40 text-center space-y-2">
                    <div className="w-5 h-5 border-2 border-indigo-400 border-t-transparent animate-spin mx-auto" />
                    <p className="text-xs text-indigo-200 font-mono">
                      Predicting maintenance intervals, parts availability & bay staging...
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
                      Result: Bay Reserved & Service Invitation Sent
                    </div>
                    <p className="text-[11px] text-emerald-200/80">
                      {vehicle.partsReadiness.bayRequirement} reserved for {vehicle.ownerName}. OEM
                      parts kit staged at parts counter.
                    </p>
                    <div className="pt-1 flex items-center justify-center gap-2">
                      <span className="text-[10px] font-mono text-emerald-300">
                        Recommended Action: Workshop Slot Confirmed
                      </span>
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
                    className="w-full justify-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 shadow-lg shadow-indigo-900/30 font-semibold"
                  >
                    <Send className="w-4 h-4" />
                    Recommended Action: Reserve Lift Bay & Send Reminder
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
