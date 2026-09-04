import React, { useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Tabs, TabItem } from '../components/ui/Tabs';
import { JourneyNavigator } from '../components/common/JourneyNavigator';
import { CTASection } from '../components/common/CTASection';
import { INDUSTRIES } from '../data/industries';
import { INDUSTRY_THEMES } from '../types/theme';
import { IndustryFocusCategory } from '../types';
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
  Layers,
  Compass,
  Play,
} from 'lucide-react';
import { cn } from '../utils/cn';

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

export const IndustriesIndexPage: React.FC = () => {
  const { openSolutionModal } = useOutletContext<{ openSolutionModal: () => void }>();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categoryTabs: TabItem[] = [
    { id: 'all', label: 'All Industries', count: '10' },
    { id: 'Customer-focused', label: 'Customer-focused', count: '6' },
    { id: 'Operations-focused', label: 'Operations-focused', count: '7' },
    { id: 'Sales-focused', label: 'Sales-focused', count: '3' },
    { id: 'Intelligence-heavy', label: 'Intelligence-heavy', count: '3' },
  ];

  const filteredIndustries = INDUSTRIES.filter((ind) => {
    if (selectedCategory === 'all') return true;
    return ind.categoryFocus.includes(selectedCategory as IndustryFocusCategory);
  });

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* Breadcrumb Trail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="flex items-center justify-between py-2 border-b border-aether-border-subtle">
          <div className="flex items-center gap-2 text-xs text-text-muted">
            <Link to="/" className="hover:text-text-primary transition-colors">Home</Link>
            <span>/</span>
            <span className="text-text-primary font-medium">Explore Industries</span>
          </div>

          <Link to="/demos">
            <Button variant="ghost" size="sm" rightIcon={<Play className="w-3.5 h-3.5 fill-current text-sky-400" />} className="text-xs">
              Open Demo Hub
            </Button>
          </Link>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 1. HEADER */}
      {/* ========================================================================= */}
      <section className="relative pt-4 sm:pt-8 pb-6 sm:pb-8 text-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="mb-4 animate-fade-in">
            <Badge variant="primary" dot size="md">
              Industry Gateway
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-text-primary leading-[1.15] max-w-3xl">
            Explore Industries
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl font-normal">
            Every business operates differently. Explore how Aether can adapt its intelligence to different industries.
          </p>

          <div className="mt-4 pt-3 flex items-center gap-2 text-xs font-mono text-text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Equal cognitive weight across all 10 demonstration domains</span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CATEGORY FILTER & 10 EQUAL INDUSTRY CARDS */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Simple Filter Tabs */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 overflow-x-auto no-scrollbar pb-2">
          <Tabs
            items={categoryTabs}
            activeId={selectedCategory}
            onChange={setSelectedCategory}
            variant="segmented"
            className="w-full sm:w-auto overflow-x-auto no-scrollbar"
          />
          <div className="text-xs text-text-muted font-mono self-end sm:self-auto shrink-0">
            Showing {filteredIndustries.length} of 10 Industries
          </div>
        </div>

        {/* 10 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredIndustries.map((ind) => {
            const theme = INDUSTRY_THEMES[ind.accentColor] || INDUSTRY_THEMES.cyan;
            return (
              <Card
                key={ind.id}
                className="flex flex-col justify-between h-full p-6 sm:p-7 hover:border-slate-600 transition-all duration-300 group"
              >
                <div>
                  {/* Top Bar: Icon & Category Badges */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={cn(
                        'w-11 h-11 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-105',
                        theme.badgeBg,
                        theme.badgeBorder,
                        theme.accentText
                      )}
                    >
                      {ICON_MAP[ind.iconName] || <Zap className="w-5 h-5" />}
                    </div>

                    <div className="flex items-center gap-1.5 flex-wrap justify-end">
                      {ind.categoryFocus.slice(0, 2).map((cat) => (
                        <span
                          key={cat}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 border border-aether-border-subtle text-text-muted"
                        >
                          {cat.replace('-focused', '').replace('-heavy', '')}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Industry Name */}
                  <h3 className="text-xl font-bold tracking-tight text-text-primary group-hover:text-sky-300 transition-colors mb-2">
                    {ind.name}
                  </h3>

                  {/* One-Line Transformation Statement */}
                  <p className={cn('text-xs sm:text-sm font-semibold mb-3 leading-snug', theme.accentText)}>
                    {ind.transformationStatement}
                  </p>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                    {ind.description}
                  </p>
                </div>

                {/* Bottom Action Area */}
                <div className="pt-4 border-t border-aether-border-subtle flex items-center justify-between">
                  <span className="text-xs text-text-muted font-mono">
                    Full Cognitive Experience
                  </span>

                  <Link to={`/industries/${ind.slug}`}>
                    <Button
                      variant="secondary"
                      size="sm"
                      rightIcon={<ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />}
                      className="text-xs font-semibold group-hover:border-sky-500/40"
                    >
                      Explore {ind.shortName}
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Guided Progression Journey */}
      <JourneyNavigator currentStage="explore" />

      {/* ========================================================================= */}
      {/* 3. CORE ADAPTABILITY PRINCIPLE CALLOUT */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-slate-900/50 border border-slate-700/80 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-2 text-center md:text-left">
            <Badge variant="primary" dot size="sm">
              Universal Architecture
            </Badge>
            <h3 className="text-xl sm:text-2xl font-bold text-text-primary">
              Aether adapts to many types of businesses.
            </h3>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              Whether your operational model centers around table covers, surgical appointments, client showings, gym turnstiles, or service bays, Aether normalizes telemetry and executes intelligent solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Button
              variant="primary"
              size="md"
              onClick={openSolutionModal}
              rightIcon={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto font-semibold"
            >
              Request Custom Vertical Scope
            </Button>
            <Link to="/demos" className="w-full sm:w-auto">
              <Button variant="secondary" size="md" className="w-full sm:w-auto">
                Test Live Demos
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
