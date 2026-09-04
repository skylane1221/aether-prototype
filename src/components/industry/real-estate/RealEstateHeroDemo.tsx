import React, { useState } from 'react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import { Modal } from '../../ui/Modal';
import {
  REAL_ESTATE_PROPERTIES,
  RealEstateProperty,
} from '../../../data/realEstateData';
import {
  Play,
  RotateCcw,
  Sparkles,
  CheckCircle2,
  Calendar,
  Building2,
  MapPin,
  Car,
  Clock,
  ArrowRight,
  Send,
  Eye,
  Columns2,
  Bookmark,
  Check,
  Zap,
  PhoneCall,
  ShieldCheck,
  Percent,
} from 'lucide-react';
import { cn } from '../../../utils/cn';

const SAMPLE_PROMPTS = [
  {
    label: 'Powai 2BHK Under ₹1.5 Cr (Default)',
    text: "I'm looking for a 2BHK in Powai around ₹1.5 crore with parking and preferably possession within 6 months.",
  },
  {
    label: 'Luxury 3BHK Lake-View Penthouse',
    text: "Need a premium 3BHK penthouse with Powai lake view, 2 car parking bays, ready to move in, budget up to ₹2.8 Cr.",
  },
  {
    label: 'Investor Ready Compact 2BHK Chandivali',
    text: "Looking for high-rental yield 2BHK in Chandivali/Powai extension under ₹1.40 Cr with quick 3-month possession.",
  },
];

export const RealEstateHeroDemo: React.FC = () => {
  const [messageInput, setMessageInput] = useState<string>(SAMPLE_PROMPTS[0].text);
  const [extractionState, setExtractionState] = useState<'idle' | 'analyzing' | 'extracted'>('extracted');
  const [shortlistedIds, setShortlistedIds] = useState<string[]>(['prop-1']);

  // Modals state
  const [viewProperty, setViewProperty] = useState<RealEstateProperty | null>(null);
  const [compareProperties, setCompareProperties] = useState<RealEstateProperty[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState<boolean>(false);
  const [scheduleProperty, setScheduleProperty] = useState<RealEstateProperty | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string>('Saturday, 2:30 PM');
  const [visitConfirmed, setVisitConfirmed] = useState<boolean>(false);

  const handleRunAnalysis = () => {
    setExtractionState('analyzing');
    setTimeout(() => {
      setExtractionState('extracted');
    }, 850);
  };

  const handleReset = () => {
    setMessageInput(SAMPLE_PROMPTS[0].text);
    setExtractionState('idle');
  };

  const toggleShortlist = (id: string) => {
    setShortlistedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleOpenCompare = () => {
    // Default to comparing the top 2 matching properties if none explicitly selected
    if (compareProperties.length < 2) {
      setCompareProperties([REAL_ESTATE_PROPERTIES[0], REAL_ESTATE_PROPERTIES[1]]);
    }
    setIsCompareModalOpen(true);
  };

  const togglePropertyForComparison = (prop: RealEstateProperty) => {
    if (compareProperties.some((p) => p.id === prop.id)) {
      if (compareProperties.length > 1) {
        setCompareProperties(compareProperties.filter((p) => p.id !== prop.id));
      }
    } else {
      if (compareProperties.length < 3) {
        setCompareProperties([...compareProperties, prop]);
      }
    }
  };

  const handleScheduleVisitClick = (prop: RealEstateProperty) => {
    setScheduleProperty(prop);
    setVisitConfirmed(false);
  };

  const handleConfirmVisit = () => {
    setVisitConfirmed(true);
  };

  return (
    <div className="space-y-8">
      {/* Container Card */}
      <Card className="p-0 border-slate-700/80 overflow-hidden shadow-2xl bg-slate-950">
        {/* Terminal / Sandbox Header */}
        <div className="bg-slate-900/95 px-4 sm:px-6 py-3.5 border-b border-aether-border flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 font-semibold">
                aether-cognitive-engine
              </span>
              <span className="text-text-muted text-xs">/</span>
              <span className="text-xs font-mono text-text-muted">
                natural-language-triage
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="primary" size="sm" className="font-mono text-[10px]">
              Simulated Live Telemetry
            </Badge>
            {extractionState !== 'idle' && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
                className="text-xs py-1 h-7"
              >
                Reset
              </Button>
            )}
          </div>
        </div>

        {/* Interactive Workspace */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* 1. Natural Language Message Input Section */}
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <label className="text-xs font-semibold text-text-primary uppercase tracking-wider">
                  1. Inbound Buyer Message (WhatsApp / Portal Webhook)
                </label>
              </div>

              {/* Sample Prompt Selector */}
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-[11px] text-text-muted">Quick Presets:</span>
                {SAMPLE_PROMPTS.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setMessageInput(preset.text);
                      setExtractionState('extracted');
                    }}
                    className={cn(
                      'text-[10px] font-mono px-2 py-0.5 rounded border transition-all',
                      messageInput === preset.text
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                        : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                    )}
                  >
                    Preset 0{idx + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <textarea
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                rows={2}
                placeholder="Paste natural language buyer inquiry..."
                className="w-full rounded-xl bg-slate-900 border border-slate-700/80 px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500 font-sans leading-relaxed"
              />
              <div className="absolute right-3 bottom-3 flex items-center gap-2">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleRunAnalysis}
                  leftIcon={
                    extractionState === 'analyzing' ? (
                      <Sparkles className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Zap className="w-3.5 h-3.5" />
                    )
                  }
                  className="shadow-sm text-xs py-1.5"
                >
                  {extractionState === 'analyzing' ? 'Extracting...' : 'Parse & Match Inventory'}
                </Button>
              </div>
            </div>
          </div>

          {/* 2. Extracted Entities & Generated Requirement Profile */}
          {extractionState !== 'idle' && (
            <div className="space-y-6 animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                {/* Extracted Entity Badges */}
                <div className="lg:col-span-8 p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>2. Extracted Entity Attributes</span>
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                      Entity Confidence: 99.4%
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80">
                      <span className="text-[10px] text-text-muted font-mono uppercase block">Property Type</span>
                      <span className="text-xs font-bold text-white flex items-center gap-1 mt-0.5">
                        <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                        2 BHK Luxury
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80">
                      <span className="text-[10px] text-text-muted font-mono uppercase block">Target Location</span>
                      <span className="text-xs font-bold text-white flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                        Powai, Mumbai
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80">
                      <span className="text-[10px] text-text-muted font-mono uppercase block">Budget Threshold</span>
                      <span className="text-xs font-bold text-emerald-400 flex items-center gap-1 mt-0.5 font-mono">
                        ₹1.50 Cr (±5% flex)
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80">
                      <span className="text-[10px] text-text-muted font-mono uppercase block">Parking Requirement</span>
                      <span className="text-xs font-bold text-white flex items-center gap-1 mt-0.5">
                        <Car className="w-3.5 h-3.5 text-amber-400" />
                        1 Covered Bay
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80">
                      <span className="text-[10px] text-text-muted font-mono uppercase block">Possession Horizon</span>
                      <span className="text-xs font-bold text-white flex items-center gap-1 mt-0.5">
                        <Clock className="w-3.5 h-3.5 text-sky-400" />
                        Within 6 Months
                      </span>
                    </div>

                    <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800/80">
                      <span className="text-[10px] text-text-muted font-mono uppercase block">Intent Diagnosis</span>
                      <span className="text-xs font-bold text-cyan-300 flex items-center gap-1 mt-0.5">
                        <Zap className="w-3.5 h-3.5 text-cyan-400" />
                        High Intent (Active)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Generated Requirement Profile Card */}
                <div className="lg:col-span-4 p-4 sm:p-5 rounded-xl bg-cyan-950/20 border border-cyan-500/30 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between pb-2 border-b border-cyan-500/20">
                      <span className="text-xs font-semibold text-cyan-300 uppercase tracking-wider">
                        Buyer Dossier #RE-882
                      </span>
                      <Badge variant="primary" size="sm" className="font-mono text-[10px]">
                        Scored: 96/100
                      </Badge>
                    </div>
                    <div className="text-xs text-slate-300 leading-snug">
                      <p className="font-medium text-white mb-1">Ananya & Rohan Malhotra</p>
                      <p className="text-[11px] text-slate-400">
                        Pre-approved home loan status: <span className="text-emerald-400 font-mono">₹1.20 Cr (HDFC)</span>
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        Timeline: Ready for immediate token with 3-month disbursement window.
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-cyan-500/20 flex items-center justify-between text-[11px] font-mono text-cyan-400">
                    <span>Routing Priority:</span>
                    <span className="font-bold text-white">Tier 1 Sales Closer</span>
                  </div>
                </div>
              </div>

              {/* 3. Matching Properties Grid */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-slate-800">
                  <div>
                    <h4 className="text-base font-bold text-text-primary flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-cyan-400" />
                      <span>3. Matched Inventory Ranking (4 Verified Properties)</span>
                    </h4>
                    <p className="text-xs text-text-muted mt-0.5">
                      Ranked dynamically by semantic criteria fit, budget tolerance, and possession window.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleOpenCompare}
                      leftIcon={<Columns2 className="w-3.5 h-3.5 text-cyan-400" />}
                      className="text-xs"
                    >
                      Compare Properties ({compareProperties.length > 0 ? compareProperties.length : 2})
                    </Button>
                    <div className="text-xs font-mono text-text-muted bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                      Shortlisted: <span className="text-cyan-400 font-bold">{shortlistedIds.length}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {REAL_ESTATE_PROPERTIES.map((property) => {
                    const isShortlisted = shortlistedIds.includes(property.id);
                    return (
                      <Card
                        key={property.id}
                        className="p-5 sm:p-6 bg-slate-900/80 border-slate-700/80 hover:border-cyan-500/50 transition-all flex flex-col justify-between"
                      >
                        <div className="space-y-4">
                          {/* Top Row: Title, Match Score, Shortlist */}
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="text-[11px] font-mono text-cyan-400 font-semibold uppercase">
                                {property.developer}
                              </div>
                              <h5 className="text-base font-bold text-white tracking-tight mt-0.5">
                                {property.name}
                              </h5>
                              <div className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                                <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                                <span>{property.location}</span>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 shrink-0">
                              <div className="flex flex-col items-end">
                                <div className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 font-mono font-bold text-xs flex items-center gap-1">
                                  <Sparkles className="w-3 h-3 text-cyan-400" />
                                  <span>{property.matchScore}% Match</span>
                                </div>
                                <span className="text-[10px] font-mono text-emerald-400 mt-0.5">High Fit</span>
                              </div>

                              <button
                                onClick={() => toggleShortlist(property.id)}
                                title={isShortlisted ? 'Remove from Shortlist' : 'Add to Shortlist'}
                                className={cn(
                                  'p-1.5 rounded-lg border transition-all',
                                  isShortlisted
                                    ? 'bg-cyan-500 text-slate-950 border-cyan-400'
                                    : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
                                )}
                              >
                                <Bookmark className="w-4 h-4 fill-current" />
                              </button>
                            </div>
                          </div>

                          {/* Key Spec Grid */}
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono bg-slate-950/80 p-3 rounded-xl border border-slate-800/80">
                            <div>
                              <span className="text-[10px] text-text-muted block">Price</span>
                              <span className="text-emerald-400 font-bold">{property.price}</span>
                            </div>
                            <div>
                              <span className="text-[10px] text-text-muted block">Carpet</span>
                              <span className="text-slate-200">{property.carpetArea}</span>
                            </div>
                            <div>
                              <span className="text-[10px] text-text-muted block">Parking</span>
                              <span className="text-slate-200">1 Covered</span>
                            </div>
                            <div>
                              <span className="text-[10px] text-text-muted block">Status</span>
                              <span className="text-sky-300 truncate block">{property.status}</span>
                            </div>
                          </div>

                          {/* Why It Matches AI Rationale */}
                          <div className="p-3 rounded-lg bg-cyan-950/20 border border-cyan-500/20 text-xs leading-relaxed">
                            <span className="font-semibold text-cyan-400 text-[10px] uppercase block mb-1 flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3" />
                              Why Aether Matched This:
                            </span>
                            <p className="text-slate-300">{property.whyItMatches}</p>
                          </div>
                        </div>

                        {/* Actions Row */}
                        <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between gap-2 flex-wrap">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setViewProperty(property)}
                              leftIcon={<Eye className="w-3.5 h-3.5" />}
                              className="text-xs py-1 h-8"
                            >
                              View Dossier
                            </Button>
                            <button
                              onClick={() => togglePropertyForComparison(property)}
                              className={cn(
                                'text-xs font-mono px-2.5 py-1.5 rounded-lg border transition-all',
                                compareProperties.some((p) => p.id === property.id)
                                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-bold'
                                  : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                              )}
                            >
                              {compareProperties.some((p) => p.id === property.id) ? '✓ In Compare' : '+ Compare'}
                            </button>
                          </div>

                          <Button
                            variant="primary"
                            size="sm"
                            onClick={() => handleScheduleVisitClick(property)}
                            leftIcon={<Calendar className="w-3.5 h-3.5" />}
                            className="text-xs py-1 h-8 shadow-sm"
                          >
                            Schedule Visit
                          </Button>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* ========================================================================= */}
      {/* MODAL 1: VIEW PROPERTY DOSSIER */}
      {/* ========================================================================= */}
      {viewProperty && (
        <Modal
          isOpen={!!viewProperty}
          onClose={() => setViewProperty(null)}
          title={viewProperty.name}
          maxWidth="lg"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-aether-border-subtle">
              <div>
                <div className="text-xs font-mono text-cyan-400 uppercase">{viewProperty.developer}</div>
                <div className="text-xs text-text-muted">{viewProperty.location}</div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold font-mono text-emerald-400">{viewProperty.price}</div>
                <div className="text-[10px] font-mono text-text-muted">All-inclusive Estimate</div>
              </div>
            </div>

            {/* Spec Highlights Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-text-muted uppercase block">Configuration</span>
                <span className="font-bold text-white">{viewProperty.configuration}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-text-muted uppercase block">Carpet Area</span>
                <span className="font-bold text-white">{viewProperty.carpetArea}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-text-muted uppercase block">Parking Bay</span>
                <span className="font-bold text-white">{viewProperty.parking}</span>
              </div>
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <span className="text-[10px] text-text-muted uppercase block">Possession</span>
                <span className="font-bold text-cyan-400">{viewProperty.possession}</span>
              </div>
            </div>

            {/* Project Highlights */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-text-primary uppercase tracking-wider block">
                Key Architectural Highlights
              </span>
              <div className="space-y-1.5">
                {viewProperty.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Fit Analysis */}
            <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 space-y-1.5">
              <span className="text-xs font-bold text-cyan-400 uppercase flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Aether Matching Rationale</span>
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">{viewProperty.whyItMatches}</p>
            </div>

            {/* Action Bar */}
            <div className="pt-4 border-t border-aether-border flex items-center justify-end gap-3">
              <Button variant="outline" size="sm" onClick={() => setViewProperty(null)}>
                Close
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => {
                  const p = viewProperty;
                  setViewProperty(null);
                  handleScheduleVisitClick(p);
                }}
                leftIcon={<Calendar className="w-3.5 h-3.5" />}
              >
                Schedule Site Visit
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* ========================================================================= */}
      {/* MODAL 2: PROPERTY COMPARISON MATRIX */}
      {/* ========================================================================= */}
      {isCompareModalOpen && (
        <Modal
          isOpen={isCompareModalOpen}
          onClose={() => setIsCompareModalOpen(false)}
          title="Side-by-Side Property Comparison Matrix"
          maxWidth="xl"
        >
          <div className="space-y-6">
            <p className="text-xs text-text-secondary">
              Comparing {compareProperties.length} short-listed properties matched against client budget (₹1.50 Cr) and 6-month possession timeline.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-700 bg-slate-900/60 font-mono">
                    <th className="p-3 text-text-muted uppercase text-[10px]">Metric</th>
                    {compareProperties.map((p) => (
                      <th key={p.id} className="p-3 text-white font-bold min-w-[160px]">
                        <div>{p.name}</div>
                        <div className="text-[10px] text-cyan-400 font-normal">{p.developer}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 font-mono">
                  <tr>
                    <td className="p-3 text-text-muted font-sans font-semibold">Match Score</td>
                    {compareProperties.map((p) => (
                      <td key={p.id} className="p-3">
                        <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40">
                          {p.matchScore}%
                        </span>
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-text-muted font-sans font-semibold">All-in Price</td>
                    {compareProperties.map((p) => (
                      <td key={p.id} className="p-3 font-bold text-emerald-400">
                        {p.price}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-text-muted font-sans font-semibold">Carpet Area</td>
                    {compareProperties.map((p) => (
                      <td key={p.id} className="p-3 text-slate-200">
                        {p.carpetArea}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-text-muted font-sans font-semibold">Configuration</td>
                    {compareProperties.map((p) => (
                      <td key={p.id} className="p-3 text-slate-200">
                        {p.configuration}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-text-muted font-sans font-semibold">Parking Slot</td>
                    {compareProperties.map((p) => (
                      <td key={p.id} className="p-3 text-slate-200">
                        {p.parking}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="p-3 text-text-muted font-sans font-semibold">Possession</td>
                    {compareProperties.map((p) => (
                      <td key={p.id} className="p-3 text-cyan-300">
                        {p.possession}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-end pt-4 border-t border-aether-border">
              <Button variant="primary" size="sm" onClick={() => setIsCompareModalOpen(false)}>
                Done Comparing
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {/* ========================================================================= */}
      {/* MODAL 3: SCHEDULE VISIT & GATE PASS GENERATOR */}
      {/* ========================================================================= */}
      {scheduleProperty && (
        <Modal
          isOpen={!!scheduleProperty}
          onClose={() => setScheduleProperty(null)}
          title={`Schedule VIP Site Visit: ${scheduleProperty.name}`}
          maxWidth="md"
        >
          <div className="space-y-6">
            {!visitConfirmed ? (
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">{scheduleProperty.name}</div>
                    <div className="text-[11px] text-text-muted">{scheduleProperty.location}</div>
                  </div>
                  <Badge variant="primary" size="sm" className="font-mono text-[10px]">
                    {scheduleProperty.matchScore}% Match
                  </Badge>
                </div>

                {/* Slot Picker */}
                <div>
                  <label className="text-xs font-semibold text-text-primary uppercase tracking-wider block mb-2">
                    Select Available Showing Window
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Saturday, 11:00 AM',
                      'Saturday, 2:30 PM',
                      'Sunday, 11:30 AM',
                      'Sunday, 4:00 PM',
                    ].map((slot) => (
                      <button
                        key={slot}
                        onClick={() => setSelectedSlot(slot)}
                        className={cn(
                          'p-2.5 rounded-lg border text-xs font-mono text-left transition-all',
                          selectedSlot === slot
                            ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/60 font-bold'
                            : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                        )}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-text-muted space-y-1">
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Automated Security Clearance & Valet Reserved</span>
                  </div>
                  <p className="text-[11px] pl-5">
                    Assigned Project Relationship Manager: <strong className="text-white">Sameer Kapoor (Senior Specialist)</strong>
                  </p>
                </div>

                <div className="pt-3 border-t border-aether-border flex justify-end gap-2">
                  <Button variant="outline" size="sm" onClick={() => setScheduleProperty(null)}>
                    Cancel
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleConfirmVisit}
                    leftIcon={<Calendar className="w-3.5 h-3.5" />}
                  >
                    Confirm Booking & Issue Pass
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-5 animate-fade-in text-center py-2">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white">Site Visit Confirmed!</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Slot reserved for <span className="text-cyan-400 font-semibold">{selectedSlot}</span>
                  </p>
                </div>

                {/* Simulated WhatsApp Pass Dossier */}
                <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 text-left space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                    <span className="text-emerald-400 font-bold uppercase text-[10px]">
                      Digital Gate Pass Token
                    </span>
                    <span className="text-slate-400 text-[10px]">QR: #AETH-VISIT-982</span>
                  </div>
                  <div className="text-slate-300 text-[11px] space-y-1">
                    <div>Property: {scheduleProperty.name}</div>
                    <div>Location: {scheduleProperty.location}</div>
                    <div>Security Code: <span className="text-amber-400 font-bold">PW-4482</span></div>
                    <div>Sales Concierge: Sameer Kapoor (+91 98201 XXXXX)</div>
                  </div>
                </div>

                <Button variant="primary" size="sm" onClick={() => setScheduleProperty(null)} className="w-full">
                  Done
                </Button>
              </div>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
};
