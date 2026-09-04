import React, { useState } from 'react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import {
  REVERSE_MATCH_LISTINGS,
  MATCHED_BUYER_LEADS,
  MatchedBuyerLead,
} from '../../../data/realEstateData';
import {
  Building,
  Users,
  Sparkles,
  CheckCircle2,
  Send,
  Zap,
  PhoneCall,
  Clock,
  ArrowRight,
  ShieldCheck,
  Search,
} from 'lucide-react';
import { cn } from '../../../utils/cn';

export const RealEstateReverseMatchDemo: React.FC = () => {
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>(REVERSE_MATCH_LISTINGS[0].id);
  const [dispatchedLeadIds, setDispatchedLeadIds] = useState<string[]>([]);
  const [dispatchingLeadId, setDispatchingLeadId] = useState<string | null>(null);

  const currentProperty =
    REVERSE_MATCH_LISTINGS.find((p) => p.id === selectedPropertyId) ||
    REVERSE_MATCH_LISTINGS[0];

  const matchingLeads = MATCHED_BUYER_LEADS[selectedPropertyId] || [];

  const handleDispatchDossier = (leadId: string) => {
    setDispatchingLeadId(leadId);
    setTimeout(() => {
      setDispatchedLeadIds((prev) => [...prev, leadId]);
      setDispatchingLeadId(null);
    }, 600);
  };

  const handleDispatchAll = () => {
    setDispatchingLeadId('all');
    setTimeout(() => {
      const allIds = matchingLeads.map((l) => l.id);
      setDispatchedLeadIds((prev) => Array.from(new Set([...prev, ...allIds])));
      setDispatchingLeadId(null);
    }, 800);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-aether-border-subtle">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Badge variant="primary" size="sm">
              Reverse Discovery Engine
            </Badge>
            <span className="text-xs font-mono text-text-muted">Property → Find Qualified Buyers</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-text-primary">
            Instant Buyer Matching for New & Revised Inventory
          </h3>
          <p className="text-xs sm:text-sm text-text-secondary mt-1">
            Invert the real estate funnel: Log a new unit or price revision, and Aether instantly surfaces active, pre-approved buyers.
          </p>
        </div>

        <div className="flex items-center gap-2 font-mono text-xs text-text-muted bg-slate-900/80 px-3 py-1.5 rounded-lg border border-aether-border shrink-0">
          <Users className="w-3.5 h-3.5 text-indigo-400" />
          <span>Active In-Market Buyer Registry</span>
        </div>
      </div>

      {/* Main Grid: Property Selector on Left, Matching Buyer Dossiers on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Property Inventory Cards */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-semibold text-text-primary uppercase tracking-wider flex items-center justify-between pb-1">
            <span>Select Available Property / Unit</span>
            <span className="text-[10px] font-mono text-text-muted">3 Test Listings</span>
          </div>

          <div className="space-y-2.5">
            {REVERSE_MATCH_LISTINGS.map((prop) => {
              const isSelected = prop.id === selectedPropertyId;
              const leadsCount = MATCHED_BUYER_LEADS[prop.id]?.length || 0;

              return (
                <button
                  key={prop.id}
                  onClick={() => setSelectedPropertyId(prop.id)}
                  className={cn(
                    'w-full p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between space-y-2',
                    isSelected
                      ? 'bg-slate-900 border-indigo-500/80 shadow-glow-subtle'
                      : 'bg-aether-surface/60 border-aether-border hover:border-slate-600 hover:bg-slate-900/40'
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-xs font-bold text-white tracking-tight">{prop.propertyName}</div>
                      <div className="text-[11px] text-text-muted mt-0.5">{prop.location}</div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 shrink-0">
                      {prop.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-xs font-mono">
                    <span className="text-emerald-400 font-bold">{prop.price}</span>
                    <span className="text-text-muted">{prop.carpet}</span>
                    <span className="text-cyan-400 font-semibold flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {leadsCount} Matched Buyers
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-text-muted space-y-1 font-mono">
            <div className="text-slate-300 font-semibold text-[11px] flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              <span>Zero-Lag Buyer Activation</span>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-400">
              When a builder adjusts price or releases a high-floor unit, Aether alerts all matching high-intent buyers in under 30 seconds.
            </p>
          </div>
        </div>

        {/* Right Column: Matched Buyer Leads Ranking */}
        <div className="lg:col-span-7 space-y-3">
          <div className="flex items-center justify-between pb-1">
            <div className="text-xs font-semibold text-text-primary uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span>Matched Buyer Leads for {currentProperty.propertyName}</span>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={handleDispatchAll}
              disabled={dispatchingLeadId === 'all'}
              leftIcon={<Send className="w-3.5 h-3.5 text-indigo-400" />}
              className="text-xs py-1 h-7"
            >
              {dispatchingLeadId === 'all' ? 'Dispatching...' : 'Dispatch Dossiers to All'}
            </Button>
          </div>

          <div className="space-y-3">
            {matchingLeads.map((lead) => {
              const isDispatched = dispatchedLeadIds.includes(lead.id);
              const isDispatching = dispatchingLeadId === lead.id;

              return (
                <Card
                  key={lead.id}
                  className="p-4 sm:p-5 bg-slate-900/90 border-slate-700/80 space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h5 className="text-sm font-bold text-white">{lead.name}</h5>
                        {lead.preApproved && (
                          <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                            <ShieldCheck className="w-2.5 h-2.5" />
                            Pre-Approved
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-text-muted mt-0.5 font-mono">
                        Last Active: {lead.lastInteraction}
                      </div>
                    </div>

                    <div className="flex flex-col items-end shrink-0">
                      <div className="px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 font-mono font-bold text-xs">
                        {lead.matchScore}% Match
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400 mt-0.5 font-semibold">
                        {lead.intentLevel}
                      </span>
                    </div>
                  </div>

                  {/* Buyer Criteria Grid */}
                  <div className="grid grid-cols-3 gap-2 text-xs font-mono bg-slate-950/80 p-2.5 rounded-lg border border-slate-800">
                    <div>
                      <span className="text-[10px] text-text-muted block">Budget</span>
                      <span className="text-emerald-400 font-bold">{lead.budget}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-text-muted block">Preferred</span>
                      <span className="text-slate-200 truncate block">{lead.preferredConfig}</span>
                    </div>
                    <div>
                      <span className="text-[10px] text-text-muted block">Timeline</span>
                      <span className="text-cyan-300">{lead.possessionTimeline}</span>
                    </div>
                  </div>

                  {/* AI Match Rationale */}
                  <div className="p-2.5 rounded-lg bg-indigo-950/20 border border-indigo-500/20 text-xs text-slate-300 leading-relaxed">
                    <span className="font-semibold text-indigo-300 text-[10px] uppercase block mb-0.5">
                      Why This Buyer Matches:
                    </span>
                    {lead.matchReason}
                  </div>

                  {/* Action Button */}
                  <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs">
                    <span className="text-[11px] font-mono text-text-muted">
                      Preferred Channel: WhatsApp & Direct Call
                    </span>

                    {isDispatched ? (
                      <span className="text-emerald-400 font-mono font-bold flex items-center gap-1 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Dossier Dispatched
                      </span>
                    ) : (
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => handleDispatchDossier(lead.id)}
                        disabled={isDispatching}
                        leftIcon={
                          isDispatching ? (
                            <Sparkles className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <Send className="w-3.5 h-3.5" />
                          )
                        }
                        className="text-xs py-1 h-7 shadow-sm"
                      >
                        {isDispatching ? 'Sending...' : 'Dispatch Tailored Dossier'}
                      </Button>
                    )}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
