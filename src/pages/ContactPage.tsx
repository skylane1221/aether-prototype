import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/common/Hero';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { JourneyNavigator } from '../components/common/JourneyNavigator';
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
  ArrowLeft,
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
  MessageSquare
} from 'lucide-react';
import { cn } from '../utils/cn';

// 10 Industries + Other
const INDUSTRY_OPTIONS = [
  { slug: 'real-estate', name: 'Real Estate', icon: <Building2 className="w-4 h-4" /> },
  { slug: 'restaurants', name: 'Restaurants & Food', icon: <UtensilsCrossed className="w-4 h-4" /> },
  { slug: 'gyms', name: 'Gyms & Fitness', icon: <Dumbbell className="w-4 h-4" /> },
  { slug: 'salons', name: 'Salons & Beauty', icon: <Scissors className="w-4 h-4" /> },
  { slug: 'cafes', name: 'Cafes & Quick-Serve', icon: <Coffee className="w-4 h-4" /> },
  { slug: 'retail', name: 'Retail & Commerce', icon: <ShoppingBag className="w-4 h-4" /> },
  { slug: 'hotels', name: 'Hotels & Hospitality', icon: <Hotel className="w-4 h-4" /> },
  { slug: 'healthcare', name: 'Healthcare & Clinics', icon: <Stethoscope className="w-4 h-4" /> },
  { slug: 'automotive', name: 'Automotive & Service', icon: <Car className="w-4 h-4" /> },
  { slug: 'education', name: 'Education & Training', icon: <GraduationCap className="w-4 h-4" /> },
  { slug: 'other', name: 'Other Business', icon: <Sparkles className="w-4 h-4" /> },
];

// 8 Improvement Goals
const IMPROVEMENT_OPTIONS = [
  { id: 'manual-work', label: 'Reduce manual work', icon: <Clock className="w-3.5 h-3.5" /> },
  { id: 'customer-exp', label: 'Improve customer experience', icon: <Sparkles className="w-3.5 h-3.5" /> },
  { id: 'operational-eff', label: 'Improve operational efficiency', icon: <Zap className="w-3.5 h-3.5" /> },
  { id: 'sales-conversion', label: 'Improve sales/conversion', icon: <TrendingUp className="w-3.5 h-3.5" /> },
  { id: 'demand-forecast', label: 'Improve demand forecasting', icon: <BrainCircuit className="w-3.5 h-3.5" /> },
  { id: 'automate-workflows', label: 'Automate workflows', icon: <Workflow className="w-3.5 h-3.5" /> },
  { id: 'business-visibility', label: 'Improve business visibility', icon: <Eye className="w-3.5 h-3.5" /> },
  { id: 'other-improvement', label: 'Other', icon: <MessageSquare className="w-3.5 h-3.5" /> },
];

const INDUSTRY_CHALLENGE_PROMPTS: Record<string, string> = {
  'real-estate': 'e.g. Leads from 99acres and WhatsApp arrive unorganized; agents take hours to qualify buyers and coordinate site visits...',
  restaurants: 'e.g. High food waste on fresh proteins during slow weekdays, while peak dinner rushes bottleneck the kitchen line...',
  gyms: 'e.g. Members stop attending for weeks without front desk noticing until cancellation; classes have empty spots while walk-ins wait...',
  salons: 'e.g. Clients forget to rebook their next appointment on time; prime weekend chair slots suffer from last-minute no-shows...',
  cafes: 'e.g. Morning commuter lines cause customer walk-aways, and bakery items are over-baked causing afternoon waste...',
  retail: 'e.g. Frequent stockouts on high-velocity SKUs while excess slow-moving inventory sits tied up in storage...',
  hotels: 'e.g. Guests wait too long during peak 3 PM check-in, and late housekeeping turnovers cause room readiness delays...',
  healthcare: 'e.g. Paper intake clipboards delay appointments by 15 minutes, and late cancellations leave provider slots unbilled...',
  automotive: 'e.g. Vehicles disassembled on lift bays waiting for parts delivery; service advisors struggle to balance technician load...',
  education: 'e.g. Prospective student inquiries take 4 days to answer; verifying transcripts manually creates admissions bottlenecks...',
  other: 'e.g. Describe where repetitive administrative friction, customer wait times, or communication drop-offs occur in your daily operations...',
};

export const ContactPage: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('real-estate');
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

  const toggleImprovement = (optionLabel: string) => {
    setSelectedImprovements((prev) =>
      prev.includes(optionLabel)
        ? prev.filter((item) => item !== optionLabel)
        : [...prev, optionLabel]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
  };

  const activeIndustryObj =
    INDUSTRY_OPTIONS.find((ind) => ind.slug === selectedIndustry) || INDUSTRY_OPTIONS[0];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Breadcrumb Trail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center justify-between py-2 border-b border-aether-border-subtle">
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <Link to="/" className="hover:text-text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-text-primary font-medium">Tell Aether Your Problem</span>
          </div>

          <Link to="/solutions">
            <Button
              variant="ghost"
              size="sm"
              leftIcon={<ArrowLeft className="w-3.5 h-3.5" />}
              className="text-xs"
            >
              Explore Platform Solutions
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section: Central Concept */}
      <Hero
        badge="Problem-First Intelligence"
        title={
          <>
            Don't Choose a Product.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-300">
              Tell Aether Your Problem.
            </span>
          </>
        }
        subtitle="Traditional software forces you to adapt your business to rigid tools and pre-packaged features. Aether begins with your actual operational friction and designs the intelligent cognitive pipeline around you."
      />

      {/* Main Experience Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-6 sm:p-10 card-gradient-surface border-slate-700/80 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

          {isSubmitted ? (
            /* ========================================================================= */
            /* POLISHED PROTOTYPE CONFIRMATION STATE */
            /* ========================================================================= */
            <div className="space-y-8 py-4 animate-fade-in">
              {/* Top Success Header */}
              <div className="text-center space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto shadow-glow-subtle">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div className="inline-block">
                  <Badge variant="success" size="sm" className="font-mono text-[10px] uppercase tracking-wider">
                    Prototype Intake Captured
                  </Badge>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                  Your business challenge has been captured.
                </h2>
                <p className="text-sm sm:text-base text-sky-300 font-medium max-w-xl mx-auto leading-relaxed">
                  An Aether solution analysis could identify potential opportunities across your workflow.
                </p>
              </div>

              {/* Simulated Diagnostic Summary Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs font-mono">
                  <span className="text-sky-400 font-bold uppercase flex items-center gap-1.5">
                    <BrainCircuit className="w-4 h-4" />
                    Simulated Cognitive Diagnostic Dossier
                  </span>
                  <span className="text-text-muted">Target: {business || 'Your Organization'}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-text-muted">Business Domain</span>
                    <div className="text-sm font-bold text-text-primary flex items-center gap-2">
                      <span className="text-sky-400">{activeIndustryObj.icon}</span>
                      <span>{activeIndustryObj.name}</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1">
                    <span className="text-[10px] uppercase font-mono text-text-muted">Contact Registered</span>
                    <div className="text-sm font-bold text-text-primary truncate">
                      {name || 'Executive Stakeholder'} • <span className="text-text-secondary text-xs">{email || 'Not provided'}</span>
                    </div>
                  </div>
                </div>

                {/* Captured Improvement Goals */}
                <div className="space-y-2">
                  <span className="text-[10px] uppercase font-mono text-text-muted">Identified Priority Goals</span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedImprovements.map((imp, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-sky-500/10 border border-sky-500/25 text-sky-300 text-xs font-medium flex items-center gap-1.5"
                      >
                        <Check className="w-3 h-3 text-sky-400" />
                        <span>{imp}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenge Summary */}
                {challengeText && (
                  <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800/80 space-y-1.5">
                    <span className="text-[10px] uppercase font-mono text-amber-400 font-semibold">
                      Specified Operational Challenge
                    </span>
                    <p className="text-xs text-text-secondary leading-relaxed italic">
                      "{challengeText}"
                    </p>
                  </div>
                )}

                {/* Next Steps in Real Deployment */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-sky-950/40 via-indigo-950/30 to-slate-900 border border-sky-500/20 space-y-2">
                  <div className="text-xs font-bold text-sky-300 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                    <span>How Aether Would Approach This In Production:</span>
                  </div>
                  <ol className="text-xs text-text-secondary space-y-1 pl-4 list-decimal leading-relaxed">
                    <li><strong className="text-text-primary">Connect:</strong> Ingest existing operational telemetry (CRM, POS, schedules, messaging).</li>
                    <li><strong className="text-text-primary">Diagnose:</strong> Quantify bottlenecks, idle capacity, and drop-off points automatically.</li>
                    <li><strong className="text-text-primary">Deploy:</strong> Activate autonomous recommendation and execution pipelines with human oversight.</li>
                  </ol>
                </div>
              </div>

              {/* Notice & Next Action Controls */}
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    <strong>Prototype Demonstration:</strong> This interaction demonstrates Aether's problem-first intake methodology. Live lead processing is not executed.
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Button
                  variant="outline"
                  size="md"
                  onClick={handleReset}
                  leftIcon={<RotateCcw className="w-4 h-4" />}
                  className="w-full sm:w-auto"
                >
                  Describe Another Challenge
                </Button>

                {selectedIndustry !== 'other' && (
                  <Link to={`/industries/${selectedIndustry}`} className="w-full sm:w-auto">
                    <Button
                      variant="secondary"
                      size="md"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                      className="w-full sm:w-auto"
                    >
                      Explore {activeIndustryObj.name}
                    </Button>
                  </Link>
                )}

                <Link to="/solutions" className="w-full sm:w-auto">
                  <Button
                    variant="primary"
                    size="md"
                    rightIcon={<ArrowRight className="w-4 h-4" />}
                    className="w-full sm:w-auto"
                  >
                    View Platform Solutions
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            /* ========================================================================= */
            /* INTERACTIVE BUSINESS CHALLENGE FORM */
            /* ========================================================================= */
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-aether-border-subtle">
                <div>
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 block">
                    STEP-BY-STEP INTAKE
                  </span>
                  <h3 className="text-lg font-bold text-text-primary mt-0.5">
                    Tell us what you are trying to solve
                  </h3>
                </div>
                <Badge variant="outline" size="sm" className="font-mono text-[10px] text-sky-300 border-sky-400/30">
                  Prototype Sandbox
                </Badge>
              </div>

              {/* ========================================================================= */}
              {/* 1. What type of business are you? */}
              {/* ========================================================================= */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-text-primary flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center text-[10px]">
                      1
                    </span>
                    <span>What type of business are you?</span>
                  </label>
                  <span className="text-[11px] text-text-muted font-mono">
                    Select your primary sector
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                  {INDUSTRY_OPTIONS.map((ind) => {
                    const isSelected = selectedIndustry === ind.slug;
                    return (
                      <button
                        key={ind.slug}
                        type="button"
                        onClick={() => setSelectedIndustry(ind.slug)}
                        className={cn(
                          'p-3 rounded-xl border text-left text-xs font-medium transition-all duration-200 flex items-center gap-2.5 group',
                          isSelected
                            ? 'bg-sky-500/15 border-sky-500/80 text-white shadow-sm ring-1 ring-sky-500/50'
                            : 'bg-slate-900/70 border-slate-800 text-text-secondary hover:border-slate-700 hover:text-text-primary hover:bg-slate-850'
                        )}
                      >
                        <span
                          className={cn(
                            'shrink-0 transition-colors',
                            isSelected ? 'text-sky-300' : 'text-text-muted group-hover:text-text-primary'
                          )}
                        >
                          {ind.icon}
                        </span>
                        <span className="truncate">{ind.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ========================================================================= */}
              {/* 2. What would you like to improve? */}
              {/* ========================================================================= */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-text-primary flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center text-[10px]">
                      2
                    </span>
                    <span>What would you like to improve?</span>
                  </label>
                  <span className="text-[11px] text-text-muted font-mono">
                    Select all that apply
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {IMPROVEMENT_OPTIONS.map((opt) => {
                    const isChecked = selectedImprovements.includes(opt.label);
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => toggleImprovement(opt.label)}
                        className={cn(
                          'p-3 rounded-xl border text-left text-xs font-medium transition-all duration-200 flex items-center justify-between group',
                          isChecked
                            ? 'bg-indigo-950/40 border-indigo-500/60 text-white shadow-sm ring-1 ring-indigo-500/40'
                            : 'bg-slate-900/70 border-slate-800 text-text-secondary hover:border-slate-700 hover:text-text-primary'
                        )}
                      >
                        <div className="flex items-center gap-2.5">
                          <span
                            className={cn(
                              'transition-colors',
                              isChecked ? 'text-indigo-300' : 'text-text-muted group-hover:text-text-primary'
                            )}
                          >
                            {opt.icon}
                          </span>
                          <span>{opt.label}</span>
                        </div>

                        <div
                          className={cn(
                            'w-4 h-4 rounded-md border flex items-center justify-center transition-all',
                            isChecked
                              ? 'bg-indigo-500 border-indigo-400 text-slate-950'
                              : 'border-slate-700 bg-slate-950/60'
                          )}
                        >
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {selectedImprovements.includes('Other') && (
                  <div className="pt-2 animate-fade-in">
                    <input
                      type="text"
                      placeholder="Specify your specific improvement goal..."
                      value={customImprovement}
                      onChange={(e) => setCustomImprovement(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-text-primary text-xs focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>
                )}
              </div>

              {/* ========================================================================= */}
              {/* 3. Tell us about your challenge */}
              {/* ========================================================================= */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-text-primary flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center text-[10px]">
                      3
                    </span>
                    <span>Tell us about your challenge</span>
                  </label>
                  <span className="text-[11px] text-text-muted font-mono">
                    Describe your bottleneck
                  </span>
                </div>

                <div className="relative">
                  <textarea
                    rows={4}
                    required
                    placeholder={
                      INDUSTRY_CHALLENGE_PROMPTS[selectedIndustry] ||
                      INDUSTRY_CHALLENGE_PROMPTS.other
                    }
                    value={challengeText}
                    onChange={(e) => setChallengeText(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-slate-800 text-text-primary text-sm focus:outline-none focus:border-sky-500 transition-colors placeholder:text-slate-600 resize-none leading-relaxed"
                  />
                  <div className="absolute bottom-3 right-3 text-[10px] font-mono text-slate-600 pointer-events-none">
                    {challengeText.length} characters
                  </div>
                </div>
              </div>

              {/* ========================================================================= */}
              {/* 4. Contact details */}
              {/* ========================================================================= */}
              <div className="space-y-3 pt-2">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-text-primary flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center text-[10px]">
                    4
                  </span>
                  <span>Contact details</span>
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  {/* Name */}
                  <div className="space-y-1">
                    <label className="block text-[11px] font-medium text-text-secondary">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        required
                        placeholder="Marcus Vance"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-text-primary text-xs focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Business */}
                  <div className="space-y-1">
                    <label className="block text-[11px] font-medium text-text-secondary">
                      Business / Organization
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        required
                        placeholder="Acme Holdings"
                        value={business}
                        onChange={(e) => setBusiness(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-text-primary text-xs focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="block text-[11px] font-medium text-text-secondary">
                      Work Email
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-text-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="email"
                        required
                        placeholder="marcus@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full pl-9 pr-3.5 py-2.5 rounded-xl bg-slate-950/90 border border-slate-800 text-text-primary text-xs focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Disclaimer Note */}
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-text-muted flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>
                  <strong>Interactive Prototype Notice:</strong> Demonstrates problem-to-solution intake mapping without storing real customer data.
                </span>
              </div>

              {/* Submit CTA */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={isSubmitting}
                className="w-full justify-center text-sm font-semibold shadow-glow-subtle bg-sky-500 hover:bg-sky-400 text-slate-950"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Explore What Aether Could Do
              </Button>
            </form>
          )}
        </Card>
      </section>

      {/* Guided Progression Journey */}
      <JourneyNavigator currentStage="request" />
    </div>
  );
};
