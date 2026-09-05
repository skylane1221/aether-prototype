import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowLeft, Play, TrendingUp, Home } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { cn } from '../../utils/cn';

export interface IndustryBreadcrumbProps {
  industrySlug: string;
  industryName: string;
  accentColor?: string;
  className?: string;
}

export const IndustryBreadcrumb: React.FC<IndustryBreadcrumbProps> = ({
  industrySlug,
  industryName,
  accentColor = 'cyan',
  className,
}) => {
  return (
    <div
      className={cn(
        'w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-aether-border-subtle mb-6',
        className
      )}
    >
      {/* Breadcrumb Navigation Trail */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 text-xs text-text-muted flex-wrap"
      >
        <Link
          to="/"
          className="hover:text-text-primary flex items-center gap-1 transition-colors p-1 rounded hover:bg-slate-800/40"
        >
          <Home className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Home</span>
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <Link
          to="/industries"
          className="hover:text-text-primary transition-colors p-1 rounded hover:bg-slate-800/40 font-medium"
        >
          Industries
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
        <span className="text-text-primary font-semibold p-1">{industryName}</span>
      </nav>

      {/* Quick Jump Actions */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
        <Link to="/industries">
          <Button
            variant="ghost"
            size="sm"
            leftIcon={<ArrowLeft className="w-3.5 h-3.5" />}
            className="text-xs h-7 px-2.5 text-text-secondary hover:text-text-primary"
          >
            All Industries
          </Button>
        </Link>
        <Link to={`/demos?industry=${industrySlug}`}>
          <Button
            variant="secondary"
            size="sm"
            leftIcon={<Play className="w-3 h-3 text-sky-400 fill-current" />}
            className="text-xs h-7 px-2.5"
          >
            Live Demo
          </Button>
        </Link>
        <Link to="/impact">
          <Button
            variant="outline"
            size="sm"
            leftIcon={<TrendingUp className="w-3 h-3 text-emerald-400" />}
            className="text-xs h-7 px-2.5 hidden md:flex"
          >
            ROI Impact
          </Button>
        </Link>
      </div>
    </div>
  );
};
