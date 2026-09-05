import React from 'react';

interface PageFallbackProps {
  message?: string;
}

export const PageFallback: React.FC<PageFallbackProps> = ({
  message = 'Loading experience...',
}) => {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center p-8 space-y-4 animate-fade-in">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-2 border-slate-700/60" />
        <div className="absolute inset-0 rounded-full border-2 border-cyan-400 border-t-transparent animate-spin" />
      </div>
      <p className="text-xs font-mono uppercase tracking-widest text-text-muted">{message}</p>
    </div>
  );
};
