import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '../../data/navigation';
import { Layers, ShieldCheck, Activity } from 'lucide-react';
import { Badge } from '../ui/Badge';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-aether-border bg-aether-surface/60 text-text-secondary relative overflow-hidden">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group inline-flex select-none">
              <div className="w-7 h-7 rounded-lg bg-slate-900 border border-aether-border flex items-center justify-center">
                <Layers className="w-4 h-4 text-sky-400" />
              </div>
              <span className="text-base font-bold tracking-tight text-text-primary">AETHER</span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
              An intelligent business transformation platform demonstrating how enterprise and
              mid-market organizations diagnose operational friction and deploy autonomous
              solutions.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <Badge variant="neutral" size="sm" dot dotColor="bg-emerald-400">
                Showcase Prototype v1.0
              </Badge>
              <span className="text-xs text-text-muted">Simulated Environment</span>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.platform.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="hover:text-text-primary transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary mb-4">
              10 Industry Verticals
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.industries.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="hover:text-text-primary transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Transformation Engine */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-text-primary mb-4">
              Transformation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {FOOTER_LINKS.transformation.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="hover:text-text-primary transition-colors inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Global Prototype Disclaimer Banner */}
        <div className="mb-8 p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-muted">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
            <span className="font-medium text-text-secondary">
              Prototype Disclaimer: Metrics shown in this prototype are illustrative demonstrations
              and are not guaranteed production results.
            </span>
          </div>
          <Badge variant="neutral" size="sm" className="font-mono text-[10px] shrink-0">
            Illustrative Model Data
          </Badge>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-aether-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>
            © {new Date().getFullYear()} Aether Technologies. Showcase Prototype for Executive
            Briefings.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Zero Production Data Dependencies</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-sky-400" />
              <span>Simulated Prototype Data</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
