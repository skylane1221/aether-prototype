import React from 'react';
import { Link } from 'react-router-dom';
import { IndustryData } from '../../types';
import { INDUSTRY_THEMES } from '../../types/theme';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import {
  Building2,
  Utensils,
  Dumbbell,
  Sparkles,
  Coffee,
  ShoppingBag,
  BedDouble,
  Stethoscope,
  Car,
  GraduationCap,
  ArrowRight,
  Zap,
} from 'lucide-react';
import { cn } from '../../utils/cn';

const ICON_MAP: Record<string, React.ReactNode> = {
  Building2: <Building2 className="w-5 h-5" />,
  Utensils: <Utensils className="w-5 h-5" />,
  Dumbbell: <Dumbbell className="w-5 h-5" />,
  Sparkles: <Sparkles className="w-5 h-5" />,
  Coffee: <Coffee className="w-5 h-5" />,
  ShoppingBag: <ShoppingBag className="w-5 h-5" />,
  BedDouble: <BedDouble className="w-5 h-5" />,
  Stethoscope: <Stethoscope className="w-5 h-5" />,
  Car: <Car className="w-5 h-5" />,
  GraduationCap: <GraduationCap className="w-5 h-5" />,
};

export interface IndustryCardProps {
  industry: IndustryData;
  className?: string;
}

export const IndustryCard: React.FC<IndustryCardProps> = ({ industry, className }) => {
  const theme = INDUSTRY_THEMES[industry.accentColor] || INDUSTRY_THEMES.cyan;
  const topStat = industry.stats[0];

  return (
    <Link
      to={`/industries/${industry.slug}`}
      className="block group h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-xl"
      aria-label={`Explore Aether solutions for ${industry.name}`}
    >
      <Card
        interactive
        className={cn(
          'h-full flex flex-col justify-between transition-all duration-200 group-hover:border-slate-600 p-5 sm:p-6',
          className
        )}
      >
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between gap-2 mb-3.5">
            <div
              className={cn(
                'w-9 h-9 rounded-lg flex items-center justify-center border transition-colors',
                theme.badgeBg,
                theme.badgeBorder,
                theme.accentText
              )}
              aria-hidden="true"
            >
              {ICON_MAP[industry.iconName] || <Zap className="w-4 h-4" />}
            </div>

            {topStat && (
              <Badge variant="outline" size="sm" className="font-mono text-[11px] px-2 py-0.5">
                <span className={cn('font-semibold mr-1', theme.accentText)}>{topStat.value}</span>
                <span className="text-text-muted">{topStat.label}</span>
              </Badge>
            )}
          </div>

          <h3 className="text-base font-semibold text-text-primary group-hover:text-sky-300 transition-colors">
            {industry.name}
          </h3>

          <p className="mt-2 text-xs sm:text-[13px] text-text-secondary leading-relaxed line-clamp-3">
            {industry.tagline}
          </p>
        </div>

        {/* Action Button Footer */}
        <div className="mt-5 pt-3 border-t border-aether-border-subtle flex items-center justify-between">
          <span className="text-xs font-semibold text-sky-400 group-hover:text-sky-300 transition-colors flex items-center gap-1">
            Explore {industry.shortName}
          </span>
          <div
            className="w-6 h-6 rounded-full bg-slate-800/80 group-hover:bg-sky-500/20 flex items-center justify-center text-text-muted group-hover:text-sky-400 transition-all"
            aria-hidden="true"
          >
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </Card>
    </Link>
  );
};
