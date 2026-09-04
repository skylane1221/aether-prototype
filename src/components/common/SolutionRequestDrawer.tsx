import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { INDUSTRIES } from '../../data/industries';
import { CheckCircle2, ArrowRight, Sparkles, Building, Layers, Zap } from 'lucide-react';

export interface SolutionRequestDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  defaultIndustrySlug?: string;
}

export const SolutionRequestDrawer: React.FC<SolutionRequestDrawerProps> = ({
  isOpen,
  onClose,
  defaultIndustrySlug,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedIndustry, setSelectedIndustry] = useState<string>(
    defaultIndustrySlug || 'real-estate'
  );
  const [bottleneck, setBottleneck] = useState<string>('capacity');
  const [companyName, setCompanyName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const bottlenecks = [
    { id: 'capacity', label: 'Schedule & Capacity Inefficiencies', desc: 'Dead slots, slow table/chair/bay turns' },
    { id: 'qualification', label: 'Delayed Inbound Lead Qualification', desc: 'Leads going cold before contact' },
    { id: 'retention', label: 'Silent Customer & Member Churn', desc: 'Unnoticed drop in repeat frequency' },
    { id: 'inventory', label: 'Inventory Spoilage or Stockouts', desc: 'Over-ordering or running out of critical SKUs' },
  ];

  const handleGenerate = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsGenerated(true);
      setStep(3);
    }, 900);
  };

  const handleReset = () => {
    setIsGenerated(false);
    setStep(1);
    onClose();
  };

  const currentIndustryObj = INDUSTRIES.find((ind) => ind.slug === selectedIndustry) || INDUSTRIES[0];

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title={step === 3 ? 'Transformation Blueprint Ready' : 'Request Aether Solution'}
      description={
        step === 3
          ? `Simulated architectural recommendation for ${companyName || 'your organization'}`
          : 'Configure an intelligent operational transformation prototype tailored to your vertical.'
      }
      maxWidth="2xl"
    >
      {/* Progress Indicators */}
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-aether-border-subtle">
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
            step === 1 ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30' : 'text-text-muted'
          }`}
        >
          1. Industry & Challenge
        </span>
        <span className="text-text-muted text-xs">/</span>
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
            step === 2 ? 'bg-sky-500/20 text-sky-400 border border-sky-500/30' : 'text-text-muted'
          }`}
        >
          2. Organization Scope
        </span>
        <span className="text-text-muted text-xs">/</span>
        <span
          className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
            step === 3 ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'text-text-muted'
          }`}
        >
          3. AI Blueprint
        </span>
      </div>

      {step === 1 && (
        <div className="space-y-5">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
              Select Demonstration Industry
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {INDUSTRIES.map((ind) => (
                <button
                  key={ind.slug}
                  type="button"
                  onClick={() => setSelectedIndustry(ind.slug)}
                  className={`p-2.5 rounded-lg text-left text-xs font-medium border transition-all ${
                    selectedIndustry === ind.slug
                      ? 'bg-sky-500/10 border-sky-500/50 text-sky-300 font-semibold'
                      : 'bg-aether-surface border-aether-border text-text-secondary hover:border-slate-700'
                  }`}
                >
                  {ind.shortName}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
              Primary Friction Area
            </label>
            <div className="space-y-2">
              {bottlenecks.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => setBottleneck(b.id)}
                  className={`w-full p-3 rounded-lg text-left border transition-all flex items-start justify-between ${
                    bottleneck === b.id
                      ? 'bg-slate-800/80 border-sky-500/50 text-text-primary'
                      : 'bg-aether-surface border-aether-border text-text-secondary hover:border-slate-700'
                  }`}
                >
                  <div>
                    <p className="text-sm font-medium text-text-primary">{b.label}</p>
                    <p className="text-xs text-text-muted mt-0.5">{b.desc}</p>
                  </div>
                  {bottleneck === b.id && (
                    <span className="w-2 h-2 rounded-full bg-sky-400 mt-1.5 shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <Button
              variant="primary"
              size="md"
              onClick={() => setStep(2)}
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              Continue to Scope
            </Button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
              Organization / Practice Name
            </label>
            <input
              type="text"
              placeholder="e.g. Apex Property Group / Summit Health"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-aether-surface border border-aether-border text-text-primary text-sm focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
              Executive Contact Email
            </label>
            <input
              type="email"
              placeholder="executive@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-aether-surface border border-aether-border text-text-primary text-sm focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

          <div className="p-3.5 rounded-lg bg-slate-900/60 border border-aether-border-subtle text-xs text-text-secondary flex items-start gap-2.5">
            <Sparkles className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <span>
              Aether will instantly synthesize an autonomous workflow architecture using benchmark data from <strong>{currentIndustryObj.name}</strong>.
            </span>
          </div>

          <div className="pt-4 flex items-center justify-between">
            <Button variant="ghost" size="md" onClick={() => setStep(1)}>
              Back
            </Button>
            <Button
              variant="primary"
              size="md"
              isLoading={isSubmitting}
              onClick={handleGenerate}
              rightIcon={<Zap className="w-4 h-4" />}
            >
              Generate Architecture Blueprint
            </Button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-5 animate-fade-in">
          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-emerald-300">
                Blueprint Synthesized Successfully
              </h4>
              <p className="text-xs text-emerald-400/80 mt-0.5">
                Targeted for {companyName || 'Enterprise Prototype'} ({currentIndustryObj.name})
              </p>
            </div>
          </div>

          {/* Blueprint Summary Card */}
          <div className="p-4 rounded-xl bg-aether-surface border border-aether-border space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-aether-border-subtle">
              <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                Recommended Solution Pipeline
              </span>
              <Badge variant="primary" size="sm">
                Estimated Impact: {currentIndustryObj.stats[0].value} {currentIndustryObj.stats[0].label}
              </Badge>
            </div>

            {currentIndustryObj.solutionMappings.slice(0, 3).map((mapItem, i) => (
              <div key={i} className="space-y-1">
                <div className="text-xs font-semibold text-text-primary">
                  {i + 1}. {mapItem.capabilityTag}: {mapItem.opportunity}
                </div>
                <p className="text-xs text-text-secondary pl-3 border-l border-slate-700">
                  {mapItem.solution}
                </p>
              </div>
            ))}
          </div>

          <div className="pt-2 flex items-center justify-between">
            <span className="text-xs text-text-muted">Simulated Showcase Mode</span>
            <Button variant="primary" size="md" onClick={handleReset}>
              Done & Return to Showcase
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};
