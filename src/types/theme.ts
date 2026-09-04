import { IndustryThemeColor } from './index';

export interface ThemeStyles {
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  accentText: string;
  accentBorder: string;
  accentBg: string;
  glowBg: string;
  dotColor: string;
}

export const INDUSTRY_THEMES: Record<IndustryThemeColor, ThemeStyles> = {
  cyan: {
    badgeBg: 'bg-cyan-500/10',
    badgeText: 'text-cyan-400',
    badgeBorder: 'border-cyan-500/20',
    accentText: 'text-cyan-400',
    accentBorder: 'border-cyan-500/30',
    accentBg: 'bg-cyan-500/10',
    glowBg: 'from-cyan-500/10 to-transparent',
    dotColor: 'bg-cyan-400',
  },
  emerald: {
    badgeBg: 'bg-emerald-500/10',
    badgeText: 'text-emerald-400',
    badgeBorder: 'border-emerald-500/20',
    accentText: 'text-emerald-400',
    accentBorder: 'border-emerald-500/30',
    accentBg: 'bg-emerald-500/10',
    glowBg: 'from-emerald-500/10 to-transparent',
    dotColor: 'bg-emerald-400',
  },
  amber: {
    badgeBg: 'bg-amber-500/10',
    badgeText: 'text-amber-400',
    badgeBorder: 'border-amber-500/20',
    accentText: 'text-amber-400',
    accentBorder: 'border-amber-500/30',
    accentBg: 'bg-amber-500/10',
    glowBg: 'from-amber-500/10 to-transparent',
    dotColor: 'bg-amber-400',
  },
  violet: {
    badgeBg: 'bg-violet-500/10',
    badgeText: 'text-violet-400',
    badgeBorder: 'border-violet-500/20',
    accentText: 'text-violet-400',
    accentBorder: 'border-violet-500/30',
    accentBg: 'bg-violet-500/10',
    glowBg: 'from-violet-500/10 to-transparent',
    dotColor: 'bg-violet-400',
  },
  rose: {
    badgeBg: 'bg-rose-500/10',
    badgeText: 'text-rose-400',
    badgeBorder: 'border-rose-500/20',
    accentText: 'text-rose-400',
    accentBorder: 'border-rose-500/30',
    accentBg: 'bg-rose-500/10',
    glowBg: 'from-rose-500/10 to-transparent',
    dotColor: 'bg-rose-400',
  },
  sky: {
    badgeBg: 'bg-sky-500/10',
    badgeText: 'text-sky-400',
    badgeBorder: 'border-sky-500/20',
    accentText: 'text-sky-400',
    accentBorder: 'border-sky-500/30',
    accentBg: 'bg-sky-500/10',
    glowBg: 'from-sky-500/10 to-transparent',
    dotColor: 'bg-sky-400',
  },
  teal: {
    badgeBg: 'bg-teal-500/10',
    badgeText: 'text-teal-400',
    badgeBorder: 'border-teal-500/20',
    accentText: 'text-teal-400',
    accentBorder: 'border-teal-500/30',
    accentBg: 'bg-teal-500/10',
    glowBg: 'from-teal-500/10 to-transparent',
    dotColor: 'bg-teal-400',
  },
  indigo: {
    badgeBg: 'bg-indigo-500/10',
    badgeText: 'text-indigo-400',
    badgeBorder: 'border-indigo-500/20',
    accentText: 'text-indigo-400',
    accentBorder: 'border-indigo-500/30',
    accentBg: 'bg-indigo-500/10',
    glowBg: 'from-indigo-500/10 to-transparent',
    dotColor: 'bg-indigo-400',
  },
  slate: {
    badgeBg: 'bg-slate-700/30',
    badgeText: 'text-slate-300',
    badgeBorder: 'border-slate-700/50',
    accentText: 'text-slate-300',
    accentBorder: 'border-slate-700',
    accentBg: 'bg-slate-800/40',
    glowBg: 'from-slate-700/10 to-transparent',
    dotColor: 'bg-slate-400',
  },
};
