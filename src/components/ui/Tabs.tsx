import React from 'react';
import { cn } from '../../utils/cn';

export interface TabItem {
  id: string;
  label: string;
  count?: number | string;
  icon?: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  activeId: string;
  onChange: (id: string) => void;
  variant?: 'pill' | 'underline' | 'segmented';
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  activeId,
  onChange,
  variant = 'segmented',
  className,
}) => {
  if (variant === 'segmented') {
    return (
      <div
        role="tablist"
        aria-label="Navigation Tabs"
        className={cn(
          'inline-flex items-center p-1 bg-aether-surface border border-aether-border rounded-xl max-w-full overflow-x-auto no-scrollbar',
          className
        )}
      >
        {items.map((tab) => {
          const isActive = tab.id === activeId;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onChange(tab.id)}
              className={cn(
                'flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400',
                isActive
                  ? 'bg-aether-card text-text-primary shadow-sm border border-aether-border-bright/80 font-semibold'
                  : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.02]'
              )}
            >
              {tab.icon && (
                <span className="w-4 h-4" aria-hidden="true">
                  {tab.icon}
                </span>
              )}
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span
                  className={cn(
                    'text-[10px] px-1.5 py-0.5 rounded-full font-mono',
                    isActive ? 'bg-sky-500/20 text-sky-400' : 'bg-slate-800 text-slate-400'
                  )}
                >
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    );
  }

  // Underline variant
  return (
    <div
      role="tablist"
      aria-label="Navigation Tabs"
      className={cn(
        'flex border-b border-aether-border overflow-x-auto no-scrollbar gap-6',
        className
      )}
    >
      {items.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onChange(tab.id)}
            className={cn(
              'flex items-center gap-2 pb-3 text-sm font-medium border-b-2 transition-all whitespace-nowrap -mb-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400',
              isActive
                ? 'border-aether-primary text-text-primary font-semibold'
                : 'border-transparent text-text-secondary hover:text-text-primary hover:border-slate-700'
            )}
          >
            {tab.icon && (
              <span className="w-4 h-4" aria-hidden="true">
                {tab.icon}
              </span>
            )}
            <span>{tab.label}</span>
            {tab.count !== undefined && (
              <span className="text-xs px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                {tab.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};
