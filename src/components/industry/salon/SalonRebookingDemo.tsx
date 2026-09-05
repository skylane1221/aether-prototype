import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Scissors,
  Calendar,
  Clock,
  Sparkles,
  CheckCircle2,
  Send,
  MessageSquare,
  Heart,
  ShieldCheck,
  UserCheck,
  AlertTriangle,
} from 'lucide-react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { SALON_CUSTOMERS, SalonCustomerProfile } from '../../../data/salonData';

export const SalonRebookingDemo: React.FC = () => {
  const [selectedCustomerId, setSelectedCustomerId] = useState<string>(SALON_CUSTOMERS[0].id);
  const [dispatchedCustomerId, setDispatchedCustomerId] = useState<string | null>(null);
  const [isDispatching, setIsDispatching] = useState<boolean>(false);
  const [selectedTab, setSelectedTab] = useState<'service_history' | 'preferences'>(
    'service_history'
  );

  const customer: SalonCustomerProfile =
    SALON_CUSTOMERS.find((c: SalonCustomerProfile) => c.id === selectedCustomerId) ||
    SALON_CUSTOMERS[0];
  const isDispatched = dispatchedCustomerId === customer.id;

  const handleDispatchRebooking = () => {
    setIsDispatching(true);
    setTimeout(() => {
      setIsDispatching(false);
      setDispatchedCustomerId(customer.id);
    }, 700);
  };

  return (
    <div className="space-y-6">
      {/* Sandbox Header */}
      <div className="bg-zinc-900 px-4 sm:px-6 py-3.5 rounded-t-2xl border border-rose-500/20 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-rose-400 font-semibold">
              aether-stylist-mesh
            </span>
            <span className="text-zinc-500 text-xs">/</span>
            <span className="text-xs font-mono text-zinc-400">predictive-rebooking-dispatch</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40">
            SIMULATED DEMO
          </span>
          <span className="text-[10px] font-mono bg-rose-500/10 text-rose-300 border border-rose-500/30 px-2 py-0.5 rounded">
            Live Client Lifecycle
          </span>
        </div>
      </div>

      {/* 5-Step Salon Demo Pipeline Progress Bar */}
      <div className="bg-zinc-950 border-x border-b border-rose-500/20 px-4 sm:px-6 py-2.5 flex items-center justify-between gap-1 overflow-x-auto text-[11px] font-mono">
        {[
          '1. Select Customer',
          '2. Analyze Service History',
          '3. Predict Next Service',
          '4. Recommend Rebooking',
          '5. Suggest Communication',
        ].map((phase, idx, arr) => (
          <React.Fragment key={phase}>
            <div className="flex items-center gap-1.5 text-rose-300 font-semibold shrink-0">
              <span className="w-4 h-4 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/40 flex items-center justify-center text-[9px] font-bold">
                {idx + 1}
              </span>
              <span>{phase.split('. ')[1]}</span>
            </div>
            {idx < arr.length - 1 && <span className="text-zinc-600">→</span>}
          </React.Fragment>
        ))}
      </div>

      {/* Step 1: Customer Selector Cards */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold text-zinc-300 uppercase tracking-wider font-mono flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            Step 1: Select a Client Profile to Inspect
          </span>
          <span className="text-[11px] font-mono text-zinc-400">4 Client Archetypes</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {SALON_CUSTOMERS.map((c: SalonCustomerProfile) => {
            const isSelected = c.id === selectedCustomerId;
            const urgencyBadge =
              c.urgencyLevel === 'Overdue & Fade Risk'
                ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                : c.urgencyLevel === 'Optimal Rebook Window'
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                  : 'bg-purple-500/20 text-purple-300 border-purple-500/40';

            return (
              <button
                key={c.id}
                onClick={() => {
                  setSelectedCustomerId(c.id);
                  setDispatchedCustomerId(null);
                }}
                className={`p-4 rounded-xl text-left border transition-all duration-300 relative group flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-b from-rose-950/40 via-purple-950/30 to-black border-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.25)]'
                    : 'bg-zinc-900/60 border-white/5 hover:border-rose-500/30 hover:bg-rose-950/10'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-zinc-400 font-semibold">
                      {c.clientTier}
                    </span>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded border ${urgencyBadge}`}
                    >
                      {c.urgencyLevel}
                    </span>
                  </div>
                  <div className="font-semibold text-white text-sm group-hover:text-rose-300 transition-colors">
                    {c.name}
                  </div>
                  <div className="text-xs text-zinc-400 flex items-center gap-1.5 mt-0.5">
                    <Scissors className="w-3 h-3 text-rose-400" />
                    <span>Stylist: {c.preferredStylist}</span>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-zinc-400 font-mono text-[11px]">
                    Last: {c.lastAppointment}
                  </span>
                  <span className="text-rose-400 font-mono font-bold text-[11px]">
                    {c.visitFrequencyWeeks}w cycle
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Dossier & Intelligence Engine */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Customer Profile & Service History */}
        <div className="lg:col-span-7 space-y-6">
          <Card className="p-6 bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950 border-white/10 space-y-6">
            {/* Header / Client Card */}
            <div className="flex flex-wrap items-start justify-between gap-4 pb-5 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-rose-500 to-purple-600 p-0.5">
                  <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center text-rose-400 font-bold text-base">
                    {cAvatar(customer.avatarInitials)}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-white">{customer.name}</h3>
                    <Badge
                      variant="primary"
                      size="sm"
                      className="text-[10px] bg-rose-500/20 text-rose-300 border-rose-500/30"
                    >
                      {customer.clientTier}
                    </Badge>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Primary Stylist:{' '}
                    <span className="text-zinc-200">{customer.preferredStylist}</span>
                  </p>
                </div>
              </div>

              {/* Key Quick Stats */}
              <div className="flex items-center gap-3 text-right">
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-zinc-400 uppercase font-mono">
                    Cycle Interval
                  </div>
                  <div className="text-xs font-bold text-white font-mono">
                    {customer.visitFrequencyWeeks} Weeks
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
                  <div className="text-[10px] text-zinc-400 uppercase font-mono">Days Elapsed</div>
                  <div
                    className={`text-xs font-bold font-mono ${
                      customer.daysOverdue > 0 ? 'text-rose-400' : 'text-emerald-400'
                    }`}
                  >
                    {customer.daysSinceLastVisit} Days
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-tab Switcher: Service History vs Client Notes */}
            <div className="flex items-center gap-2 border-b border-white/5 pb-2">
              <button
                onClick={() => setSelectedTab('service_history')}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                  selectedTab === 'service_history'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                Step 2: Service History & Formula Archive
              </button>
              <button
                onClick={() => setSelectedTab('preferences')}
                className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 ${
                  selectedTab === 'preferences'
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Heart className="w-3.5 h-3.5" />
                Treatment Preferences & Notes
              </button>
            </div>

            {/* Tab 1: Service History Timeline */}
            {selectedTab === 'service_history' && (
              <div className="space-y-3">
                <div className="text-xs font-mono text-zinc-400">
                  Showing past treatments, stylists and formulation specifications:
                </div>
                <div className="space-y-2.5">
                  {customer.serviceHistory.map((item, idx: number) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1.5 hover:border-white/10 transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-white flex items-center gap-1.5">
                          <Scissors className="w-3.5 h-3.5 text-rose-400" />
                          {item.serviceName}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-400">
                          Stylist: {item.stylist}
                        </span>
                      </div>
                      <div className="text-[11px] text-zinc-400 bg-white/[0.02] p-2 rounded border border-white/5 font-mono">
                        Formula: {item.formulaNotes}
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-mono pt-1">
                        <span className="text-zinc-400">{item.date}</span>
                        <span className="font-semibold text-rose-300">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Preferences & Style Profile */}
            {selectedTab === 'preferences' && (
              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <span className="text-[10px] uppercase font-mono text-zinc-400">
                    Preferred Treatments & Categories
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {customer.preferredServices.map((srv: string, idx: number) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-zinc-200 border border-white/10 font-mono"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1">
                  <span className="text-[10px] uppercase font-mono text-zinc-400">
                    Cycle Diagnostics
                  </span>
                  <p className="text-xs text-zinc-300 leading-relaxed pt-1">
                    Client visit frequency averages {customer.visitFrequencyWeeks} weeks. Last
                    booked on {customer.lastAppointment}. Expected visit cadence indicates renewal
                    window at: {customer.expectedNextVisit}.
                  </p>
                </div>
              </div>
            )}

            {/* Visit Gap & Cycle Diagnostic Bar */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-rose-950/20 via-purple-950/20 to-black border border-rose-500/20 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-300 flex items-center gap-1.5 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-rose-400" />
                  Step 3: Predict Next Service Cadence:{' '}
                  <strong className="text-white">{customer.daysSinceLastVisit} days elapsed</strong>
                </span>
                <span className="font-mono text-rose-300 text-[11px]">
                  Cadence: {customer.visitFrequencyWeeks * 7} days
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden relative">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    customer.daysOverdue > 0
                      ? 'bg-gradient-to-r from-rose-500 to-red-500'
                      : 'bg-gradient-to-r from-purple-500 to-rose-400'
                  }`}
                  style={{
                    width: `${Math.min(100, (customer.daysSinceLastVisit / (customer.visitFrequencyWeeks * 7 * 1.3)) * 100)}%`,
                  }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span>Last: {customer.lastAppointment}</span>
                <span className="text-rose-300 font-semibold">{customer.expectedNextVisit}</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column: Aether Intelligence Recommendation & Outreach Trigger */}
        <div className="lg:col-span-5 space-y-6">
          <Card className="p-6 bg-gradient-to-br from-rose-950/30 via-zinc-950 to-black border-rose-500/30 space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-rose-500/20 text-rose-400 border border-rose-500/40">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Step 4 & 5: Rebooking & Outreach</h4>
                  <span className="text-[10px] font-mono text-zinc-400">
                    Automated Salon Retention Engine
                  </span>
                </div>
              </div>
              <Badge
                variant="primary"
                size="sm"
                className="text-[10px] bg-rose-500/20 text-rose-300 border-rose-500/40"
              >
                Confidence 96%
              </Badge>
            </div>

            {/* Aether Recommendations */}
            <div className="space-y-3">
              {/* Recommended Service */}
              <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 space-y-1">
                <span className="text-[10px] uppercase font-mono text-rose-400 flex items-center gap-1 font-semibold">
                  <Scissors className="w-3 h-3 text-rose-400" />
                  Step 3: Predicted Next Treatment
                </span>
                <div className="text-sm font-bold text-white">
                  {customer.recommendedNextService}
                </div>
                <div className="text-xs text-rose-300 font-mono">
                  Estimated Value: {customer.recommendedServicePrice}
                </div>
              </div>

              {/* Optimal Booking Window */}
              <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 space-y-1">
                <span className="text-[10px] uppercase font-mono text-rose-400 flex items-center gap-1 font-semibold">
                  <Calendar className="w-3 h-3 text-rose-400" />
                  Step 4: Recommended Rebooking Window
                </span>
                <div className="text-xs font-semibold text-zinc-200">
                  {customer.recommendedAppointmentWindow}
                </div>
                <p className="text-[11px] text-zinc-400 leading-snug">
                  {customer.rebookingOpportunity}
                </p>
              </div>

              {/* Outreach Channel */}
              <div className="p-3.5 rounded-xl bg-black/60 border border-white/5 space-y-2">
                <div className="text-[10px] text-emerald-400 font-mono uppercase font-semibold flex items-center gap-1">
                  <MessageSquare className="w-3 h-3 text-emerald-400" />
                  Step 5: Suggested Communication Protocol
                </div>
                <div className="text-xs text-zinc-300 bg-zinc-900/80 p-2.5 rounded border border-white/5 italic leading-relaxed">
                  "{customer.suggestedCommunication.messageContent}"
                </div>
              </div>
            </div>

            {/* Hyper-Personalized Communication Preview */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Send className="w-3 h-3 text-rose-400" />
                  Generated {customer.suggestedCommunication.channel} Rebooking Script
                </span>
                <span className="text-[10px] text-emerald-400">1-Tap Direct Send</span>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-xs text-emerald-100/90 font-mono leading-relaxed relative">
                <div className="absolute top-2 right-2 flex items-center gap-1 text-[10px] text-emerald-400">
                  <ShieldCheck className="w-3 h-3" />
                  Verified
                </div>
                "{customer.suggestedCommunication.messageContent}"
              </div>
            </div>

            {/* Action Trigger */}
            <div className="pt-2">
              <AnimatePresence mode="wait">
                {isDispatched ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-center space-y-1.5"
                  >
                    <div className="flex items-center justify-center gap-2 text-emerald-400 font-bold text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      VIP Rebooking Sequence Initiated
                    </div>
                    <p className="text-[11px] text-emerald-200/80">
                      Personalized slot reservation dispatched to {customer.name} via{' '}
                      {customer.suggestedCommunication.channel}.
                    </p>
                  </motion.div>
                ) : (
                  <Button
                    onClick={handleDispatchRebooking}
                    variant="primary"
                    isLoading={isDispatching}
                    disabled={isDispatching}
                    className="w-full justify-center gap-2 bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 shadow-lg shadow-rose-900/30 disabled:opacity-75"
                  >
                    <Send className="w-4 h-4" />
                    {isDispatching
                      ? 'Synthesizing Outreach & Reserving...'
                      : 'Dispatch Intelligent Rebooking Outreach'}
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

function cAvatar(initials: string) {
  return initials;
}
