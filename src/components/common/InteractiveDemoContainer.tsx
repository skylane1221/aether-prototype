import React, { useState } from 'react';
import { DemoSimulationScenario } from '../../data/demos';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Play, RotateCcw, CheckCircle2, Terminal, Cpu, Radio, Zap } from 'lucide-react';
import { cn } from '../../utils/cn';

export interface InteractiveDemoContainerProps {
  scenarios: DemoSimulationScenario[];
  className?: string;
}

export const InteractiveDemoContainer: React.FC<InteractiveDemoContainerProps> = ({
  scenarios,
  className,
}) => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [executionState, setExecutionState] = useState<'idle' | 'analyzing' | 'executed'>('idle');
  const [activeTab, setActiveTab] = useState<'pipeline' | 'telemetry'>('pipeline');

  const currentScenario = scenarios[selectedScenarioIndex] || scenarios[0];

  const handleRunSimulation = () => {
    setExecutionState('analyzing');
    setTimeout(() => {
      setExecutionState('executed');
    }, 1100);
  };

  const handleReset = () => {
    setExecutionState('idle');
  };

  return (
    <div className={cn('w-full', className)}>
      {/* Scenario Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-4 no-scrollbar">
        {scenarios.map((sc, idx) => {
          const isSelected = idx === selectedScenarioIndex;
          return (
            <button
              key={sc.id}
              onClick={() => {
                setSelectedScenarioIndex(idx);
                setExecutionState('idle');
              }}
              className={cn(
                'px-3.5 py-2 rounded-lg text-xs font-medium transition-all whitespace-nowrap border',
                isSelected
                  ? 'bg-aether-card text-text-primary border-sky-500/50 shadow-sm font-semibold'
                  : 'bg-aether-surface text-text-secondary border-aether-border hover:border-slate-700'
              )}
            >
              <span className="text-sky-400 font-mono mr-1.5">{sc.industryName}:</span>
              <span>{sc.badge}</span>
            </button>
          );
        })}
      </div>

      {/* Main Sandbox Frame */}
      <Card className="border-slate-700/80 p-0 overflow-hidden shadow-card-hover">
        {/* Sandbox Window Bar */}
        <div className="bg-slate-950 px-4 sm:px-6 py-3 border-b border-aether-border flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-mono text-text-muted hidden sm:inline">
              aether-engine // {currentScenario.industrySlug} // sandbox-env
            </span>
          </div>

          <div className="flex items-center gap-2">
            {executionState === 'idle' ? (
              <Button
                variant="primary"
                size="sm"
                onClick={handleRunSimulation}
                leftIcon={<Play className="w-3.5 h-3.5 fill-current" />}
              >
                Simulate Workflow
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={handleReset}
                leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
              >
                Reset State
              </Button>
            )}
          </div>
        </div>

        {/* Sandbox Content Area */}
        <div className="p-5 sm:p-7 space-y-6">
          {/* Header Description */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="primary" size="sm">
                {currentScenario.industryName} Demonstration
              </Badge>
              <Badge variant="neutral" size="sm" className="font-mono">
                Telemetry ID: {currentScenario.id}
              </Badge>
            </div>
            <h3 className="text-lg font-bold text-text-primary">{currentScenario.title}</h3>
            <p className="text-xs sm:text-sm text-text-secondary mt-1">
              {currentScenario.description}
            </p>
          </div>

          {/* 3-Stage Pipeline Display */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Stage 1: Incoming Signal */}
            <div className="p-4 rounded-xl bg-aether-surface border border-aether-border flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-aether-border-subtle mb-3">
                  <span className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5 text-sky-400" />
                    1. Signal Ingested
                  </span>
                  <span className="text-[10px] font-mono text-text-muted">
                    {currentScenario.incomingSignal.timestamp}
                  </span>
                </div>
                <div className="space-y-1.5 font-mono text-xs">
                  <div className="text-sky-400 font-semibold text-[11px]">
                    Source: {currentScenario.incomingSignal.source}
                  </div>
                  <div className="p-2.5 rounded bg-slate-950/80 border border-slate-800/80 text-[11px] space-y-1 text-slate-300">
                    {Object.entries(currentScenario.incomingSignal.payload).map(([k, v]: [string, any]) => (
                      <div key={k}>
                        <span className="text-text-muted">{k}: </span>
                        <span className="text-slate-200">{String(v)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-2 border-t border-aether-border-subtle text-[11px] text-text-muted">
                Status: Ingested & Normalized
              </div>
            </div>

            {/* Stage 2: Cognitive Analysis */}
            <div
              className={cn(
                'p-4 rounded-xl border flex flex-col justify-between transition-all duration-300',
                executionState === 'idle'
                  ? 'bg-aether-surface/40 border-aether-border opacity-50'
                  : 'bg-aether-surface border-indigo-500/40 shadow-glow-subtle'
              )}
            >
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-aether-border-subtle mb-3">
                  <span className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                    2. Cognitive Diagnosis
                  </span>
                  {executionState !== 'idle' && (
                    <Badge variant="primary" size="sm" className="font-mono text-[10px]">
                      {currentScenario.cognitiveAnalysis.confidenceScore} match
                    </Badge>
                  )}
                </div>

                {executionState === 'idle' ? (
                  <div className="py-6 text-center text-xs text-text-muted font-mono">
                    Awaiting simulation trigger...
                  </div>
                ) : (
                  <div className="space-y-2.5 text-xs">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-rose-400">
                        Friction Diagnosed:
                      </span>
                      <p className="text-text-secondary mt-0.5">
                        {currentScenario.cognitiveAnalysis.detectedBottleneck}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-400">
                        Prescribed Automation:
                      </span>
                      <p className="text-text-secondary mt-0.5">
                        {currentScenario.cognitiveAnalysis.recommendedAction}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-4 pt-2 border-t border-aether-border-subtle text-[11px] text-text-muted">
                Engine: Aether Heuristic Kernel
              </div>
            </div>

            {/* Stage 3: Autonomous Execution */}
            <div
              className={cn(
                'p-4 rounded-xl border flex flex-col justify-between transition-all duration-300',
                executionState !== 'executed'
                  ? 'bg-aether-surface/40 border-aether-border opacity-50'
                  : 'bg-emerald-500/5 border-emerald-500/40 shadow-glow-subtle'
              )}
            >
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-aether-border-subtle mb-3">
                  <span className="text-xs font-semibold text-text-primary flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-emerald-400" />
                    3. Autonomous Execution
                  </span>
                  {executionState === 'executed' && (
                    <Badge variant="success" size="sm" className="font-mono text-[10px]">
                      {currentScenario.automatedExecution.timeElapsed}
                    </Badge>
                  )}
                </div>

                {executionState !== 'executed' ? (
                  <div className="py-6 text-center text-xs text-text-muted font-mono">
                    {executionState === 'analyzing'
                      ? 'Dispatching multi-agent workflows...'
                      : 'Pending diagnosis completion...'}
                  </div>
                ) : (
                  <div className="space-y-2.5 text-xs animate-fade-in">
                    <div className="space-y-1">
                      {currentScenario.automatedExecution.actionsTaken.map((act: string, i: number) => (
                        <div key={i} className="flex items-start gap-1.5 text-slate-300 text-[11px]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{act}</span>
                        </div>
                      ))}
                    </div>
                    <div className="p-2 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-[11px] font-medium">
                      {currentScenario.automatedExecution.resultingOutcome}
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-4 pt-2 border-t border-aether-border-subtle text-[11px] text-text-muted">
                Telemetry: Verifiable & Logged
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
