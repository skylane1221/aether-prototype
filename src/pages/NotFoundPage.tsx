import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Compass, ArrowRight, Building2, Cpu, Home } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
      <SEO
        title="404 - Page Not Found | Aether"
        description="The requested page could not be found in the Aether platform."
        noindex={true}
      />
      <div className="max-w-2xl w-full text-center space-y-8 animate-fade-in">
        {/* Badge & Icon */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-2xl bg-sky-500/10 border border-sky-500/30 text-sky-400 flex items-center justify-center shadow-glow-subtle">
            <Compass className="w-8 h-8 animate-pulse" />
          </div>
          <Badge
            variant="outline"
            size="md"
            className="font-mono text-xs border-sky-500/30 text-sky-300"
          >
            404 // Route Signal Not Found
          </Badge>
        </div>

        {/* Heading & Explanation */}
        <div className="space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm sm:text-base text-text-secondary max-w-md mx-auto leading-relaxed">
            The requested path does not exist or has been restructured in the Aether intelligence
            architecture.
          </p>
        </div>

        {/* Quick Recovery Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
          <Link to="/" className="group">
            <Card className="p-4 h-full bg-slate-900/70 border-slate-800 group-hover:border-sky-500/50 transition-all flex flex-col justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-text-primary">
                  <Home className="w-3.5 h-3.5 text-sky-400" />
                  <span>Overview</span>
                </div>
                <p className="text-[11px] text-text-muted">
                  Return to the primary Aether prototype homepage.
                </p>
              </div>
              <div className="mt-3 text-[11px] font-mono text-sky-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>Go to Home</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </Card>
          </Link>

          <Link to="/industries" className="group">
            <Card className="p-4 h-full bg-slate-900/70 border-slate-800 group-hover:border-indigo-500/50 transition-all flex flex-col justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-text-primary">
                  <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                  <span>10 Industries</span>
                </div>
                <p className="text-[11px] text-text-muted">
                  Explore industry architectures & live sandboxes.
                </p>
              </div>
              <div className="mt-3 text-[11px] font-mono text-indigo-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>View Sectors</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </Card>
          </Link>

          <Link to="/solutions" className="group">
            <Card className="p-4 h-full bg-slate-900/70 border-slate-800 group-hover:border-cyan-500/50 transition-all flex flex-col justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-text-primary">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Solutions</span>
                </div>
                <p className="text-[11px] text-text-muted">
                  Diagnose operational problems with intelligence modules.
                </p>
              </div>
              <div className="mt-3 text-[11px] font-mono text-cyan-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                <span>Explore Solutions</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </Card>
          </Link>
        </div>

        {/* Primary CTA button */}
        <div>
          <Link to="/">
            <Button variant="primary" size="md" leftIcon={<Home className="w-4 h-4" />}>
              Return to Platform Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
