import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/common/Hero';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { JourneyNavigator } from '../components/common/JourneyNavigator';
import { INDUSTRIES } from '../data/industries';
import { CheckCircle2, Send, Sparkles, Building, Mail, User, ShieldCheck, ArrowLeft } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [industry, setIndustry] = useState('real-estate');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-12">
      {/* Breadcrumb Trail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center justify-between py-2 border-b border-aether-border-subtle">
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <Link to="/" className="hover:text-text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-text-primary font-medium">Request Solution</span>
          </div>

          <Link to="/impact">
            <Button variant="ghost" size="sm" leftIcon={<ArrowLeft className="w-3.5 h-3.5" />} className="text-xs">
              Back to Impact Analysis
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero */}
      <Hero
        badge="Executive Briefing & Pitch Intake"
        title={
          <>
            Request a Solution Briefing for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-sky-300 to-indigo-300">
              Your Business
            </span>
          </>
        }
        subtitle="Experience an executive walkthrough of Aether configured to your operational workflow. Receive a customized transformation blueprint and sandbox preview."
      />

      {/* Form Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="p-8 sm:p-10 card-gradient-surface border-slate-700/80 shadow-card-hover">
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4 animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-text-primary">
                Solution Request Received
              </h3>
              <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
                Thank you, {name || 'Executive'}. Your request for <strong>{company || 'your organization'}</strong> has been registered in the showcase prototype environment.
              </p>
              <div className="pt-4">
                <Button variant="outline" size="md" onClick={() => setIsSubmitted(false)}>
                  Submit Another Briefing Request
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-aether-border-subtle">
                <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  Executive Intake Form
                </span>
                <Badge variant="primary" size="sm">
                  Showcase Mode
                </Badge>
              </div>

              {/* Industry Select */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-2">
                  Target Industry Demonstration
                </label>
                <select
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-aether-surface border border-aether-border text-text-primary text-sm focus:outline-none focus:border-sky-500 transition-colors"
                >
                  {INDUSTRIES.map((ind) => (
                    <option key={ind.slug} value={ind.slug} className="bg-slate-900 text-slate-100">
                      {ind.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-aether-surface border border-aether-border text-text-primary text-sm focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
                    Corporate Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@organization.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-aether-surface border border-aether-border text-text-primary text-sm focus:outline-none focus:border-sky-500 transition-colors"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
                  Organization / Brand Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Acme Enterprises"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-aether-surface border border-aether-border text-text-primary text-sm focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-text-muted mb-1.5">
                  Key Operational Challenge / Specific Workflow Needs (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. We experience high friction during peak weekend scheduling..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-aether-surface border border-aether-border text-text-primary text-sm focus:outline-none focus:border-sky-500 transition-colors resize-none"
                />
              </div>

              <div className="p-3.5 rounded-lg bg-slate-900/60 border border-aether-border-subtle text-xs text-text-muted flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Simulated intake demonstration. Zero third-party CRM forwarding.</span>
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                isLoading={isSubmitting}
                className="w-full justify-center"
                rightIcon={<Send className="w-4 h-4" />}
              >
                Submit Solution Request
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
