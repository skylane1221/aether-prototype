import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import {
  Building2,
  UtensilsCrossed,
  Dumbbell,
  Scissors,
  Coffee,
  ShoppingBag,
  Hotel,
  Stethoscope,
  Car,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  ShieldCheck,
  User,
  Building,
  Mail,
  Zap,
  BrainCircuit,
  Workflow,
  TrendingUp,
  Clock,
  Eye,
  Check,
  MessageSquare,
} from 'lucide-react';
import { cn } from '../../utils/cn';

export interface SolutionRequestDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  defaultIndustrySlug?: string;
}

// 10 Industries + Other
const INDUSTRY_OPTIONS = [
  { slug: 'real-estate', name: 'Real Estate', icon: <Building2 className="w-3.5 h-3.5" /> },
  {
    slug: 'restaurants',
    name: 'Restaurants & Food',
    icon: <UtensilsCrossed className="w-3.5 h-3.5" />,
  },
  { slug: 'gyms', name: 'Gyms & Fitness', icon: <Dumbbell className="w-3.5 h-3.5" /> },
  { slug: 'salons', name: 'Salons & Beauty', icon: <Scissors className="w-3.5 h-3.5" /> },
  { slug: 'cafes', name: 'Cafes & Quick-Serve', icon: <Coffee className="w-3.5 h-3.5" /> },
  { slug: 'retail', name: 'Retail & Commerce', icon: <ShoppingBag className="w-3.5 h-3.5" /> },
  { slug: 'hotels', name: 'Hotels & Hospitality', icon: <Hotel className="w-3.5 h-3.5" /> },
  {
    slug: 'healthcare',
    name: 'Healthcare & Clinics',
    icon: <Stethoscope className="w-3.5 h-3.5" />,
  },
  { slug: 'automotive', name: 'Automotive & Service', icon: <Car className="w-3.5 h-3.5" /> },
  {
    slug: 'education',
    name: 'Education & Training',
    icon: <GraduationCap className="w-3.5 h-3.5" />,
  },
  { slug: 'other', name: 'Other Business', icon: <Sparkles className="w-3.5 h-3.5" /> },
];

// 8 Improvement Goals
const IMPROVEMENT_OPTIONS = [
  { id: 'manual-work', label: 'Reduce manual work', icon: <Clock className="w-3.5 h-3.5" /> },
  {
    id: 'customer-exp',
    label: 'Improve customer experience',
    icon: <Sparkles className="w-3.5 h-3.5" />,
  },
  {
    id: 'operational-eff',
    label: 'Improve operational efficiency',
    icon: <Zap className="w-3.5 h-3.5" />,
  },
  {
    id: 'sales-conversion',
    label: 'Improve sales/conversion',
    icon: <TrendingUp className="w-3.5 h-3.5" />,
  },
  {
    id: 'demand-forecast',
    label: 'Improve demand forecasting',
    icon: <BrainCircuit className="w-3.5 h-3.5" />,
  },
  {
    id: 'automate-workflows',
    label: 'Automate workflows',
    icon: <Workflow className="w-3.5 h-3.5" />,
  },
  {
    id: 'business-visibility',
    label: 'Improve business visibility',
    icon: <Eye className="w-3.5 h-3.5" />,
  },
  { id: 'other-improvement', label: 'Other', icon: <MessageSquare className="w-3.5 h-3.5" /> },
];

const INDUSTRY_CHALLENGE_PROMPTS: Record<string, string> = {
  'real-estate':
    'e.g. Inbound buyer leads arrive unorganized across portals; agents spend hours manually qualifying and scheduling site visits...',
  restaurants:
    'e.g. High food wastage during slow periods and ticket bottlenecks during peak dinner rushes...',
  gyms: 'e.g. Members stop attending for weeks without staff noticing; class capacities remain unoptimized...',
  salons:
    'e.g. Clients delay rebooking color and treatments; prime weekend slots suffer from last-minute empty chair gaps...',
  cafes: 'e.g. Morning commuter queue walk-aways and afternoon pastry spoilage...',
  retail: 'e.g. Frequent stockouts on best-selling SKUs and slow inventory replenishment cycles...',
  hotels:
    'e.g. Check-in lines during peak arrival hours and delayed room readiness from housekeeping...',
  healthcare:
    'e.g. Paper intake delays clinic appointments and late patient cancellations leave provider hours unbilled...',
  automotive:
    'e.g. Lift bays blocked while waiting for replacement parts and uneven technician allocation...',
  education:
    'e.g. Slow inquiry turnaround for prospective students and manual transcript verification delays...',
  other:
    'e.g. Describe where administrative friction, customer wait times, or manual coordination slow down your operations...',
};

export const SolutionRequestDrawer: React.FC<SolutionRequestDrawerProps> = ({
  isOpen,
  onClose,
  defaultIndustrySlug,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>(
    defaultIndustrySlug || 'real-estate'
  );
  const [selectedImprovements, setSelectedImprovements] = useState<string[]>([
    'Reduce manual work',
    'Improve operational efficiency',
  ]);
  const [customImprovement, setCustomImprovement] = useState<string>('');
  const [challengeText, setChallengeText] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [business, setBusiness] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const toggleImprovement = (optionLabel: string) => {
    setSelectedImprovements((prev) =>
      prev.includes(optionLabel)
        ? prev.filter((item) => item !== optionLabel)
        : [...prev, optionLabel]
    );
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!challengeText.trim()) {
      newErrors.challenge = 'Please describe your operational challenge or bottleneck.';
    } else if (challengeText.trim().length < 10) {
      newErrors.challenge = 'Please provide at least 10 characters of context.';
    }

    if (!name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    if (!business.trim()) {
      newErrors.business = 'Please specify your organization name.';
    }

    if (!email.trim()) {
      newErrors.email = 'Please provide your work email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please provide a valid work email format.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    validateForm();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ challenge: true, name: true, business: true, email: true });
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 750);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setChallengeText('');
    setSelectedImprovements(['Reduce manual work', 'Improve operational efficiency']);
    setCustomImprovement('');
    setErrors({});
    setTouched({});
    onClose();
  };

  const activeIndustryObj =
    INDUSTRY_OPTIONS.find((ind) => ind.slug === selectedIndustry) || INDUSTRY_OPTIONS[0];

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title={
        isSubmitted
          ? 'Business Challenge Captured'
          : "Don't Choose a Product. Tell Aether Your Problem."
      }
      description={
        isSubmitted
          ? 'Prototype cognitive analysis & workflow opportunity synthesis.'
          : 'Aether starts with your operational reality rather than a predefined feature list.'
      }
      maxWidth="3xl"
    >
      {isSubmitted ? (
        /* ========================================================================= */
        /* POLISHED PROTOTYPE CONFIRMATION STATE */
        /* ========================================================================= */
        <div className="space-y-6 pt-2 animate-fade-in">
          {/* Top Success Header */}
          <div className="text-center space-y-2.5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <Badge
              variant="success"
              size="sm"
              className="font-mono text-[10px] uppercase tracking-wider"
            >
              Prototype Intake Captured
            </Badge>
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
              Your business challenge has been captured.
            </h3>
            <p className="text-xs sm:text-sm text-sky-300 font-medium max-w-lg mx-auto leading-relaxed">
              An Aether solution analysis could identify potential opportunities across your
              workflow.
            </p>
          </div>

          {/* Simulated Dossier Card */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-[10px] uppercase font-mono text-text-muted">
                  Business Domain
                </span>
                <div className="text-xs font-bold text-text-primary flex items-center gap-1.5">
                  <span className="text-sky-400">{activeIndustryObj.icon}</span>
                  <span>{activeIndustryObj.name}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-[10px] uppercase font-mono text-text-muted">
                  Organization & Contact
                </span>
                <div className="text-xs font-bold text-text-primary truncate">
                  {business || 'Your Organization'} •{' '}
                  <span className="text-text-secondary">{name || 'Executive'}</span>
                </div>
              </div>
            </div>

            {/* Improvement Priorities */}
            <div className="space-y-1.5">
              <span className="text-[10px] uppercase font-mono text-text-muted">
                Identified Improvement Priorities
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedImprovements.map((imp, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-lg bg-sky-500/10 border border-sky-500/25 text-sky-300 text-[11px] font-medium flex items-center gap-1"
                  >
                    <Check className="w-3 h-3 text-sky-400" />
                    <span>{imp}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Challenge Snippet */}
            {challengeText && (
              <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 space-y-1">
                <span className="text-[10px] uppercase font-mono text-amber-400 font-semibold">
                  Captured Operational Challenge
                </span>
                <p className="text-[11px] text-text-secondary leading-relaxed italic">
                  "{challengeText}"
                </p>
              </div>
            )}

            {/* Aether Production Architecture Approach */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-sky-950/40 via-indigo-950/30 to-slate-900 border border-sky-500/20 space-y-1.5">
              <div className="text-xs font-bold text-sky-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>Simulated Cognitive Architecture Plan:</span>
              </div>
              <p className="text-[11px] text-text-secondary leading-relaxed">
                Aether would overlay your existing operational systems to ingest real-time signals,
                diagnose throughput friction, and trigger context-aware recommendations
                autonomously.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 text-[11px] text-text-muted flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>
              <strong>Prototype Sandbox:</strong> Simulated intake mode. No production lead routing
              executed.
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-2.5 pt-2 border-t border-slate-800">
            <Button variant="outline" size="sm" onClick={() => setIsSubmitted(false)}>
              Describe Another Challenge
            </Button>
            {selectedIndustry !== 'other' && (
              <Link to={`/industries/${selectedIndustry}`} onClick={handleReset}>
                <Button
                  variant="secondary"
                  size="sm"
                  rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Explore {activeIndustryObj.name}
                </Button>
              </Link>
            )}
            <Button variant="primary" size="sm" onClick={handleReset}>
              Close & Return to Showcase
            </Button>
          </div>
        </div>
      ) : (
        /* ========================================================================= */
        /* INTERACTIVE BUSINESS CHALLENGE FORM */
        /* ========================================================================= */
        <form
          onSubmit={handleSubmit}
          className="space-y-6 pt-1 max-h-[75vh] overflow-y-auto pr-1 scrollbar-none"
        >
          {/* ========================================================================= */}
          {/* 1. What type of business are you? */}
          {/* ========================================================================= */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-text-primary flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center text-[10px]">
                  1
                </span>
                <span>What type of business are you?</span>
              </label>
              <span className="text-[10px] text-text-muted font-mono">Select Sector</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {INDUSTRY_OPTIONS.map((ind) => {
                const isSelected = selectedIndustry === ind.slug;
                return (
                  <button
                    key={ind.slug}
                    type="button"
                    onClick={() => setSelectedIndustry(ind.slug)}
                    className={cn(
                      'p-2.5 rounded-xl border text-left text-xs font-medium transition-all duration-200 flex items-center gap-2 group',
                      isSelected
                        ? 'bg-sky-500/15 border-sky-500 text-white shadow-sm ring-1 ring-sky-500/50'
                        : 'bg-slate-900/70 border-slate-800 text-text-secondary hover:border-slate-700 hover:text-text-primary'
                    )}
                  >
                    <span
                      className={cn(
                        'shrink-0 transition-colors',
                        isSelected
                          ? 'text-sky-300'
                          : 'text-text-muted group-hover:text-text-primary'
                      )}
                    >
                      {ind.icon}
                    </span>
                    <span className="truncate text-[11px]">{ind.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* 2. What would you like to improve? */}
          {/* ========================================================================= */}
          <div className="space-y-2.5 pt-1">
            <div className="flex items-center justify-between">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-text-primary flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center text-[10px]">
                  2
                </span>
                <span>What would you like to improve?</span>
              </label>
              <span className="text-[10px] text-text-muted font-mono">Select Priorities</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {IMPROVEMENT_OPTIONS.map((opt) => {
                const isChecked = selectedImprovements.includes(opt.label);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => toggleImprovement(opt.label)}
                    className={cn(
                      'p-2.5 rounded-xl border text-left text-xs font-medium transition-all duration-200 flex items-center justify-between group',
                      isChecked
                        ? 'bg-indigo-950/40 border-indigo-500/60 text-white shadow-sm ring-1 ring-indigo-500/40'
                        : 'bg-slate-900/70 border-slate-800 text-text-secondary hover:border-slate-700 hover:text-text-primary'
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          'transition-colors',
                          isChecked
                            ? 'text-indigo-300'
                            : 'text-text-muted group-hover:text-text-primary'
                        )}
                      >
                        {opt.icon}
                      </span>
                      <span className="text-xs">{opt.label}</span>
                    </div>

                    <div
                      className={cn(
                        'w-3.5 h-3.5 rounded border flex items-center justify-center transition-all',
                        isChecked
                          ? 'bg-indigo-500 border-indigo-400 text-slate-950'
                          : 'border-slate-700 bg-slate-950/60'
                      )}
                    >
                      {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {selectedImprovements.includes('Other') && (
              <div className="pt-1 animate-fade-in">
                <input
                  type="text"
                  placeholder="Specify other improvement goal..."
                  value={customImprovement}
                  onChange={(e) => setCustomImprovement(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-text-primary text-xs focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>
            )}
          </div>

          {/* ========================================================================= */}
          {/* 3. Tell us about your challenge */}
          {/* ========================================================================= */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="drawer-challenge-text"
                className="text-xs font-mono font-bold uppercase tracking-wider text-text-primary flex items-center gap-2"
              >
                <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center text-[10px]">
                  3
                </span>
                <span>Tell us about your challenge</span>
              </label>
              <span className="text-[10px] text-text-muted font-mono">
                {challengeText.length} chars
              </span>
            </div>

            <textarea
              id="drawer-challenge-text"
              rows={3}
              required
              aria-required="true"
              aria-invalid={!!(touched.challenge && errors.challenge)}
              placeholder={
                INDUSTRY_CHALLENGE_PROMPTS[selectedIndustry] || INDUSTRY_CHALLENGE_PROMPTS.other
              }
              value={challengeText}
              onChange={(e) => {
                setChallengeText(e.target.value);
                if (touched.challenge && e.target.value.trim().length >= 10) {
                  setErrors((prev) => {
                    const updated = { ...prev };
                    delete updated.challenge;
                    return updated;
                  });
                }
              }}
              onBlur={() => handleBlur('challenge')}
              className={cn(
                'w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-text-primary text-xs focus:outline-none focus:visible:ring-2 transition-colors placeholder:text-slate-600 resize-none leading-relaxed',
                touched.challenge && errors.challenge
                  ? 'border-rose-500/80 focus:border-rose-500 focus-visible:ring-rose-500/40'
                  : 'border-slate-800 focus:border-sky-500 focus-visible:ring-sky-400'
              )}
            />
            {touched.challenge && errors.challenge && (
              <p role="alert" className="text-[11px] text-rose-400 font-medium animate-fade-in">
                {errors.challenge}
              </p>
            )}
          </div>

          {/* ========================================================================= */}
          {/* 4. Contact details */}
          {/* ========================================================================= */}
          <div className="space-y-2 pt-1">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-text-primary flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center text-[10px]">
                4
              </span>
              <span>Contact details</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <div className="space-y-1">
                <label
                  htmlFor="drawer-contact-name"
                  className="block text-[10px] font-medium text-text-muted uppercase font-mono"
                >
                  Name
                </label>
                <div className="relative">
                  <User
                    className="w-3.5 h-3.5 text-text-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    aria-hidden="true"
                  />
                  <input
                    id="drawer-contact-name"
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={!!(touched.name && errors.name)}
                    placeholder="Marcus Vance"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (touched.name && e.target.value.trim()) {
                        setErrors((prev) => {
                          const updated = { ...prev };
                          delete updated.name;
                          return updated;
                        });
                      }
                    }}
                    onBlur={() => handleBlur('name')}
                    className={cn(
                      'w-full pl-8 pr-3 py-2 rounded-xl bg-slate-950 border text-text-primary text-xs focus:outline-none transition-colors',
                      touched.name && errors.name
                        ? 'border-rose-500/80 focus:border-rose-500 focus-visible:ring-2 focus-visible:ring-rose-500/40'
                        : 'border-slate-800 focus:border-sky-500 focus-visible:ring-2 focus-visible:ring-sky-400'
                    )}
                  />
                </div>
                {touched.name && errors.name && (
                  <p role="alert" className="text-[10px] text-rose-400 font-medium animate-fade-in">
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="drawer-contact-business"
                  className="block text-[10px] font-medium text-text-muted uppercase font-mono"
                >
                  Business
                </label>
                <div className="relative">
                  <Building
                    className="w-3.5 h-3.5 text-text-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    aria-hidden="true"
                  />
                  <input
                    id="drawer-contact-business"
                    type="text"
                    required
                    aria-required="true"
                    aria-invalid={!!(touched.business && errors.business)}
                    placeholder="Acme Holdings"
                    value={business}
                    onChange={(e) => {
                      setBusiness(e.target.value);
                      if (touched.business && e.target.value.trim()) {
                        setErrors((prev) => {
                          const updated = { ...prev };
                          delete updated.business;
                          return updated;
                        });
                      }
                    }}
                    onBlur={() => handleBlur('business')}
                    className={cn(
                      'w-full pl-8 pr-3 py-2 rounded-xl bg-slate-950 border text-text-primary text-xs focus:outline-none transition-colors',
                      touched.business && errors.business
                        ? 'border-rose-500/80 focus:border-rose-500 focus-visible:ring-2 focus-visible:ring-rose-500/40'
                        : 'border-slate-800 focus:border-sky-500 focus-visible:ring-2 focus-visible:ring-sky-400'
                    )}
                  />
                </div>
                {touched.business && errors.business && (
                  <p role="alert" className="text-[10px] text-rose-400 font-medium animate-fade-in">
                    {errors.business}
                  </p>
                )}
              </div>

              <div className="space-y-1">
                <label
                  htmlFor="drawer-contact-email"
                  className="block text-[10px] font-medium text-text-muted uppercase font-mono"
                >
                  Email
                </label>
                <div className="relative">
                  <Mail
                    className="w-3.5 h-3.5 text-text-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
                    aria-hidden="true"
                  />
                  <input
                    id="drawer-contact-email"
                    type="email"
                    required
                    aria-required="true"
                    aria-invalid={!!(touched.email && errors.email)}
                    placeholder="marcus@company.com"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (
                        touched.email &&
                        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value.trim())
                      ) {
                        setErrors((prev) => {
                          const updated = { ...prev };
                          delete updated.email;
                          return updated;
                        });
                      }
                    }}
                    onBlur={() => handleBlur('email')}
                    className={cn(
                      'w-full pl-8 pr-3 py-2 rounded-xl bg-slate-950 border text-text-primary text-xs focus:outline-none transition-colors',
                      touched.email && errors.email
                        ? 'border-rose-500/80 focus:border-rose-500 focus-visible:ring-2 focus-visible:ring-rose-500/40'
                        : 'border-slate-800 focus:border-sky-500 focus-visible:ring-2 focus-visible:ring-sky-400'
                    )}
                  />
                </div>
                {touched.email && errors.email && (
                  <p role="alert" className="text-[10px] text-rose-400 font-medium animate-fade-in">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-[11px] text-text-muted flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
            <span>Interactive prototype mode. Zero third-party data tracking.</span>
          </div>

          {/* Submit CTA */}
          <div className="pt-2 flex justify-end gap-2.5 border-t border-slate-800">
            <Button variant="ghost" size="md" onClick={handleReset} type="button">
              Cancel
            </Button>
            <Button
              type="submit"
              variant="primary"
              size="md"
              isLoading={isSubmitting}
              disabled={isSubmitting}
              className="font-semibold shadow-glow-subtle bg-sky-500 hover:bg-sky-400 text-slate-950 disabled:opacity-60"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              {isSubmitting ? 'Processing Intake...' : 'Explore What Aether Could Do'}
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
