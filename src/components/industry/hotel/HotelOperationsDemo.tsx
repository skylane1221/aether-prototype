import React, { useState } from 'react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import {
  Play,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Calendar,
  BedDouble,
  Users,
  Sparkles,
  TrendingUp,
  Clock,
  ShieldCheck,
  Cpu,
  Layers,
  FileCheck,
  UserCheck,
} from 'lucide-react';
import { cn } from '../../../utils/cn';
import { HOTEL_DEMO_SCENARIOS, HotelDemoDateScenario } from '../../../data/hotelData';

export const HotelOperationsDemo: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('friday-summit');
  const [demoState, setDemoState] = useState<'idle' | 'analyzing' | 'executed'>('idle');
  const [activeOutputTab, setActiveOutputTab] = useState<'insights' | 'staffing' | 'steps'>('insights');

  const scenario: HotelDemoDateScenario =
    HOTEL_DEMO_SCENARIOS.find((s) => s.id === selectedScenarioId) || HOTEL_DEMO_SCENARIOS[0];

  const handleRunAether = () => {
    setDemoState('analyzing');
    setTimeout(() => {
      setDemoState('executed');
    }, 550);
  };

  const handleReset = () => {
    setDemoState('idle');
    setActiveOutputTab('insights');
  };

  const handleSelectScenario = (id: string) => {
    setSelectedScenarioId(id);
    setDemoState('idle');
    setActiveOutputTab('insights');
  };

  return (
    <Card className="border-slate-700/80 p-0 overflow-hidden shadow-card-hover bg-slate-950">
      {/* Top Bar with Prominent SIMULATED DEMO Tag */}
      <div className="bg-slate-900/95 px-4 sm:px-6 py-3.5 border-b border-aether-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* High-visibility SIMULATED DEMO Badge */}
            <Badge
              variant="outline"
              size="sm"
              className="bg-teal-500/10 border-teal-400/40 text-teal-300 font-mono text-[10px] tracking-widest font-bold uppercase py-0.5 px-2.5"
            >
              SIMULATED DEMO
            </Badge>
            <span className="text-xs font-mono text-text-muted hidden md:inline">
              aether-hospitality // occupancy-pace-and-operations-simulator
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {demoState === 'idle' ? (
            <Button
              variant="primary"
              size="sm"
              onClick={handleRunAether}
              leftIcon={<Play className="w-3.5 h-3.5 fill-current" />}
              className="shadow-glow-subtle font-semibold bg-teal-500 hover:bg-teal-400 text-slate-950"
            >
              Run Aether
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
              className="text-xs border-slate-700 hover:bg-slate-800 text-slate-200"
            >
              Reset Demo
            </Button>
          )}
        </div>
      </div>

      {/* Main Sandbox Container */}
      <div className="p-5 sm:p-7 space-y-6">
        {/* Date Selector Ribbon */}
        <div>
          <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-teal-400" />
              <span>Select Date Scenario:</span>
            </span>
            <span className="font-mono text-[11px] text-teal-300">4 Operational Shifts</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {HOTEL_DEMO_SCENARIOS.map((sc) => {
              const isSelected = sc.id === selectedScenarioId;
              return (
                <button
                  key={sc.id}
                  onClick={() => handleSelectScenario(sc.id)}
                  className={cn(
                    'p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between',
                    isSelected
                      ? 'bg-teal-500/15 border-teal-500/60 shadow-glow-subtle'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                  )}
                >
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-xs font-bold text-text-primary">{sc.dayName}</span>
                    <span
                      className={cn(
                        'text-[9px] font-mono px-1.5 py-0.2 rounded uppercase font-bold',
                        sc.expectedOccupancyPercentage >= 90
                          ? 'bg-emerald-500/20 text-emerald-300'
                          : sc.expectedOccupancyPercentage >= 80
                          ? 'bg-sky-500/20 text-sky-300'
                          : 'bg-amber-500/20 text-amber-300'
                      )}
                    >
                      {sc.expectedOccupancy} Occupancy
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-300 font-medium line-clamp-1">
                    {sc.contextTag}
                  </div>
                  <div className="text-[10px] font-mono text-text-muted mt-1">
                    {sc.confirmedBookings} / {sc.totalRooms} Rooms Booked
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Date Operational Board */}
        <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <Badge variant="primary" size="sm" className="bg-teal-500/20 text-teal-300 border-teal-500/30">
                  {scenario.dayName} Scenario
                </Badge>
                <span className="text-xs text-text-muted">• {scenario.contextTag}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-text-primary mt-1">
                {scenario.dateLabel}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-[10px] font-mono text-text-muted uppercase">Inventory Base</div>
                <div className="text-base font-mono font-bold text-text-primary">
                  {scenario.totalRooms} Total Rooms
                </div>
              </div>
              <div className="h-8 w-px bg-slate-800" />
              <div className="text-right">
                <div className="text-[10px] font-mono text-text-muted uppercase">Operational Pace</div>
                <div className="text-sm font-mono text-teal-300 font-semibold">{scenario.demandStatus}</div>
              </div>
            </div>
          </div>

          {/* 5 Core Requested Hotel Attributes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-4">
            {/* 1. Expected Occupancy */}
            <div className="p-3.5 rounded-lg bg-teal-500/10 border border-teal-500/25 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-teal-300 uppercase tracking-wider flex items-center gap-1">
                <BedDouble className="w-3 h-3" />
                <span>Expected Occupancy</span>
              </span>
              <div className="flex items-baseline gap-1 mt-1.5">
                <span className="text-2xl font-mono font-extrabold text-teal-300">
                  {scenario.expectedOccupancy}
                </span>
              </div>
              <span className="text-[10px] font-mono text-teal-400/80 mt-1">
                {scenario.confirmedBookings} of {scenario.totalRooms} rooms
              </span>
            </div>

            {/* 2. Confirmed Bookings */}
            <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800/80 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
                Confirmed Bookings
              </span>
              <div className="flex items-baseline gap-1 mt-1.5">
                <span className="text-2xl font-mono font-extrabold text-sky-400">
                  {scenario.confirmedBookings}
                </span>
                <span className="text-[10px] text-text-muted font-mono">rooms</span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 mt-1">
                {scenario.totalRooms - scenario.confirmedBookings} remaining unsold
              </span>
            </div>

            {/* 3. Expected Cancellations */}
            <div className="p-3.5 rounded-lg bg-rose-500/10 border border-rose-500/25 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-rose-300 uppercase tracking-wider flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                <span>Expected Cancellations</span>
              </span>
              <div className="flex items-baseline gap-1 mt-1.5">
                <span className="text-2xl font-mono font-extrabold text-rose-400">
                  {scenario.expectedCancellations}
                </span>
                <span className="text-[10px] text-rose-300/80 font-mono">rooms</span>
              </div>
              <span className="text-[10px] font-mono text-rose-400 mt-1">
                {scenario.cancellationRate}
              </span>
            </div>

            {/* 4. Room Demand */}
            <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800/80 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                <span>Room Demand</span>
              </span>
              <div className="text-xs font-bold text-text-primary mt-1.5 line-clamp-2">
                {scenario.roomDemand}
              </div>
              <span className="text-[10px] font-mono text-emerald-400 mt-1">
                {scenario.demandStatus}
              </span>
            </div>

            {/* 5. Operational Load */}
            <div className="p-3.5 rounded-lg bg-slate-950/80 border border-slate-800/80 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>Operational Load</span>
              </span>
              <div className="text-xs font-bold text-amber-300 mt-1.5">
                {scenario.operationalLoad.level}
              </div>
              <span className="text-[10px] font-mono text-slate-300 mt-1">
                {scenario.operationalLoad.arrivals} In / {scenario.operationalLoad.departures} Out
              </span>
            </div>
          </div>

          {/* Operational Load Sub-Metrics */}
          <div className="mt-3.5 p-3 rounded-lg bg-slate-950/90 border border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-mono text-text-secondary">
            <div>
              <span className="text-text-muted">Turnover Volume: </span>
              <span className="text-slate-200 font-bold">{scenario.operationalLoad.housekeepingUnitsNeeded} Rooms to Clean</span>
            </div>
            <div>
              <span className="text-text-muted">Stay-Overs: </span>
              <span className="text-slate-200">{scenario.operationalLoad.stayOvers} In-House Guests</span>
            </div>
            <div>
              <span className="text-text-muted">Front Desk Peak: </span>
              <span className="text-amber-300">{scenario.operationalLoad.frontDeskPeakHour}</span>
            </div>
          </div>
        </div>

        {/* Live Simulation Execution Panel */}
        <div
          className={cn(
            'p-5 sm:p-6 rounded-2xl border transition-all duration-300',
            demoState === 'idle'
              ? 'bg-slate-900/40 border-slate-800/80 opacity-75'
              : demoState === 'analyzing'
              ? 'bg-slate-900/80 border-teal-500/40 shadow-glow-subtle'
              : 'bg-slate-900/90 border-emerald-500/40 shadow-glow-subtle'
          )}
        >
          {demoState === 'idle' && (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 text-teal-400 flex items-center justify-center mx-auto">
                <Cpu className="w-6 h-6 animate-pulse" />
              </div>
              <h4 className="text-base font-bold text-text-primary">
                Aether Ready to Optimize {scenario.dayName} Operations
              </h4>
              <p className="text-xs text-text-muted max-w-md mx-auto">
                Click <span className="text-teal-300 font-semibold">"Run Aether"</span> to simulate
                cancellation prediction, housekeeping turnover routing, and automated staff allocation.
              </p>
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleRunAether}
                  leftIcon={<Play className="w-4 h-4 fill-current" />}
                  className="font-semibold shadow-md bg-teal-500 hover:bg-teal-400 text-slate-950"
                >
                  Run Aether Engine
                </Button>
              </div>
            </div>
          )}

          {demoState === 'analyzing' && (
            <div className="text-center py-10 space-y-4 animate-fade-in">
              <div className="w-12 h-12 rounded-full border-2 border-teal-400 border-t-transparent animate-spin mx-auto" />
              <div className="space-y-1">
                <h4 className="text-base font-bold text-teal-300">
                  Synthesizing Booking Channels & Housekeeping Priority...
                </h4>
                <p className="text-xs text-text-muted font-mono">
                  Calculating cancellation probabilities • Modeling arrival peaks • Routing floor pods
                </p>
              </div>
            </div>
          )}

          {demoState === 'executed' && (
            <div className="space-y-6 animate-fade-in">
              {/* Top Result Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold flex items-center gap-1.5">
                      <span>Result:</span>
                      <span className="text-white">Aether Operational Yield Plan Active</span>
                    </div>
                    <div className="text-sm font-semibold text-text-primary">
                      {scenario.aetherGeneratedOutput.projectedRevenueSaved}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="success" size="sm" className="font-mono text-[10px]">
                    Latency: 520ms
                  </Badge>
                  <span className="text-[10px] font-mono text-emerald-400">Zero System Bottlenecks</span>
                </div>
              </div>

              {/* Tab Selector for Output Views */}
              <div className="flex items-center gap-2 border-b border-slate-800 pb-2 overflow-x-auto">
                <button
                  onClick={() => setActiveOutputTab('insights')}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap',
                    activeOutputTab === 'insights'
                      ? 'bg-slate-800 text-teal-300 font-bold border border-teal-500/30'
                      : 'text-text-muted hover:text-slate-300'
                  )}
                >
                  Result: Operational Synthesis
                </button>
                <button
                  onClick={() => setActiveOutputTab('staffing')}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap',
                    activeOutputTab === 'staffing'
                      ? 'bg-slate-800 text-sky-300 font-bold border border-sky-500/30'
                      : 'text-text-muted hover:text-slate-300'
                  )}
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Recommended Action: Staff Roster</span>
                </button>
                <button
                  onClick={() => setActiveOutputTab('steps')}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 whitespace-nowrap',
                    activeOutputTab === 'steps'
                      ? 'bg-slate-800 text-emerald-300 font-bold border border-emerald-500/30'
                      : 'text-text-muted hover:text-slate-300'
                  )}
                >
                  <FileCheck className="w-3.5 h-3.5" />
                  <span>Autonomous Execution Logs</span>
                </button>
              </div>

              {/* View 1: Occupancy Insight & Operational Risk */}
              {activeOutputTab === 'insights' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Occupancy Insight */}
                  <div className="p-4 sm:p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                    <div className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
                      <BedDouble className="w-4 h-4" />
                      <span>Occupancy Insight</span>
                    </div>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {scenario.aetherGeneratedOutput.occupancyInsight}
                    </p>
                    <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-teal-300">
                      Strategy: Overbooking backfill active on corporate waitlists
                    </div>
                  </div>

                  {/* Operational Risk */}
                  <div className="p-4 sm:p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                    <div className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4" />
                      <span>Operational Risk</span>
                    </div>
                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                      {scenario.aetherGeneratedOutput.operationalRisk}
                    </p>
                    <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-amber-300">
                      Bottleneck: 11 AM – 2 PM turnover queue resolved via dynamic floor pod routing
                    </div>
                  </div>
                </div>
              )}

              {/* View 2: Recommended Staff Allocation */}
              {activeOutputTab === 'staffing' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                    <div className="text-teal-400 font-bold text-[11px] uppercase">
                      Housekeeping Department:
                    </div>
                    <p className="text-slate-200 text-xs leading-relaxed font-sans">
                      {scenario.aetherGeneratedOutput.recommendedStaffAllocation.housekeeping}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                    <div className="text-sky-400 font-bold text-[11px] uppercase">
                      Front Desk & Reception:
                    </div>
                    <p className="text-slate-200 text-xs leading-relaxed font-sans">
                      {scenario.aetherGeneratedOutput.recommendedStaffAllocation.frontDesk}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                    <div className="text-indigo-400 font-bold text-[11px] uppercase">
                      Concierge & Porter:
                    </div>
                    <p className="text-slate-200 text-xs leading-relaxed font-sans">
                      {scenario.aetherGeneratedOutput.recommendedStaffAllocation.concierge}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                    <div className="text-emerald-400 font-bold text-[11px] uppercase">
                      Engineering & Maintenance:
                    </div>
                    <p className="text-slate-200 text-xs leading-relaxed font-sans">
                      {scenario.aetherGeneratedOutput.recommendedStaffAllocation.maintenance}
                    </p>
                  </div>
                </div>
              )}

              {/* View 3: Autonomous Actions & Recommended Action */}
              {activeOutputTab === 'steps' && (
                <div className="p-4 sm:p-5 rounded-xl bg-slate-950/90 border border-slate-800 space-y-4">
                  <div className="p-3 rounded-lg bg-teal-500/10 border border-teal-500/25 text-xs text-text-primary">
                    <span className="font-bold text-teal-300 uppercase tracking-wider block mb-1">
                      Prescribed Executive Action:
                    </span>
                    {scenario.aetherGeneratedOutput.recommendedAction}
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-bold text-text-muted uppercase tracking-wider">
                      Autonomous Workflow Logs Executed:
                    </div>
                    {scenario.aetherGeneratedOutput.autonomousExecutionSteps.map((st, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-200 flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{st}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
