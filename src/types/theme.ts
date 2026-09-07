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
    badgeBg: 'bg-[#9A6048]/10',
    badgeText: 'text-[#9A6048]',
    badgeBorder: 'border-[#9A6048]/25',
    accentText: 'text-[#9A6048]',
    accentBorder: 'border-[#9A6048]/30',
    accentBg: 'bg-[#9A6048]/10',
    glowBg: 'from-[#9A6048]/10 to-transparent',
    dotColor: 'bg-[#9A6048]',
  },
  emerald: {
    badgeBg: 'bg-[#4A6B53]/10',
    badgeText: 'text-[#4A6B53]',
    badgeBorder: 'border-[#4A6B53]/25',
    accentText: 'text-[#4A6B53]',
    accentBorder: 'border-[#4A6B53]/30',
    accentBg: 'bg-[#4A6B53]/10',
    glowBg: 'from-[#4A6B53]/10 to-transparent',
    dotColor: 'bg-[#4A6B53]',
  },
  amber: {
    badgeBg: 'bg-[#D9C36A]/20',
    badgeText: 'text-[#8A6F1D]',
    badgeBorder: 'border-[#D9C36A]/40',
    accentText: 'text-[#8A6F1D]',
    accentBorder: 'border-[#D9C36A]/40',
    accentBg: 'bg-[#D9C36A]/15',
    glowBg: 'from-[#D9C36A]/15 to-transparent',
    dotColor: 'bg-[#D9C36A]',
  },
  violet: {
    badgeBg: 'bg-[#A86E64]/10',
    badgeText: 'text-[#A86E64]',
    badgeBorder: 'border-[#A86E64]/25',
    accentText: 'text-[#A86E64]',
    accentBorder: 'border-[#A86E64]/30',
    accentBg: 'bg-[#A86E64]/10',
    glowBg: 'from-[#A86E64]/10 to-transparent',
    dotColor: 'bg-[#A86E64]',
  },
  rose: {
    badgeBg: 'bg-[#B06B52]/10',
    badgeText: 'text-[#B06B52]',
    badgeBorder: 'border-[#B06B52]/25',
    accentText: 'text-[#B06B52]',
    accentBorder: 'border-[#B06B52]/30',
    accentBg: 'bg-[#B06B52]/10',
    glowBg: 'from-[#B06B52]/10 to-transparent',
    dotColor: 'bg-[#B06B52]',
  },
  sky: {
    badgeBg: 'bg-[#9A6048]/10',
    badgeText: 'text-[#9A6048]',
    badgeBorder: 'border-[#9A6048]/25',
    accentText: 'text-[#9A6048]',
    accentBorder: 'border-[#9A6048]/30',
    accentBg: 'bg-[#9A6048]/10',
    glowBg: 'from-[#9A6048]/10 to-transparent',
    dotColor: 'bg-[#9A6048]',
  },
  teal: {
    badgeBg: 'bg-[#6D7A60]/10',
    badgeText: 'text-[#6D7A60]',
    badgeBorder: 'border-[#6D7A60]/25',
    accentText: 'text-[#6D7A60]',
    accentBorder: 'border-[#6D7A60]/30',
    accentBg: 'bg-[#6D7A60]/10',
    glowBg: 'from-[#6D7A60]/10 to-transparent',
    dotColor: 'bg-[#6D7A60]',
  },
  indigo: {
    badgeBg: 'bg-[#332A27]/10',
    badgeText: 'text-[#332A27]',
    badgeBorder: 'border-[#332A27]/25',
    accentText: 'text-[#332A27]',
    accentBorder: 'border-[#332A27]/30',
    accentBg: 'bg-[#332A27]/10',
    glowBg: 'from-[#332A27]/10 to-transparent',
    dotColor: 'bg-[#332A27]',
  },
  slate: {
    badgeBg: 'bg-[#E6DED2]',
    badgeText: 'text-[#332A27]',
    badgeBorder: 'border-[#D8CEC0]',
    accentText: 'text-[#332A27]',
    accentBorder: 'border-[#D8CEC0]',
    accentBg: 'bg-[#E6DED2]',
    glowBg: 'from-[#E6DED2] to-transparent',
    dotColor: 'bg-[#5C4E49]',
  },
};
