import React, { useState } from 'react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { Button } from '../../ui/Button';
import {
  Play,
  RotateCcw,
  CheckCircle2,
  AlertTriangle,
  Package,
  TrendingUp,
  ShoppingCart,
  Truck,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Sparkles,
  Layers,
  Clock,
  Building2,
  FileText,
  DollarSign,
} from 'lucide-react';
import { cn } from '../../../utils/cn';
import { RETAIL_DEMO_PRODUCTS, RetailProductDemoItem } from '../../../data/retailData';

export const RetailInventoryDemo: React.FC = () => {
  const [selectedProductId, setSelectedProductId] = useState<string>('running-shoes-9');
  const [demoState, setDemoState] = useState<'idle' | 'analyzing' | 'executed'>('idle');
  const [activeTab, setActiveTab] = useState<'overview' | 'po' | 'telemetry'>('overview');

  const product: RetailProductDemoItem =
    RETAIL_DEMO_PRODUCTS.find((p) => p.id === selectedProductId) || RETAIL_DEMO_PRODUCTS[0];

  const handleRunAether = () => {
    setDemoState('analyzing');
    setTimeout(() => {
      setDemoState('executed');
    }, 550);
  };

  const handleReset = () => {
    setDemoState('idle');
    setActiveTab('overview');
  };

  const handleSelectProduct = (id: string) => {
    setSelectedProductId(id);
    setDemoState('idle');
    setActiveTab('overview');
  };

  return (
    <Card className="border-slate-700/80 p-0 overflow-hidden shadow-card-hover bg-slate-950">
      {/* Top Bar with Prominent SIMULATED DEMO Tag */}
      <div className="bg-slate-900/95 px-4 sm:px-6 py-3.5 border-b border-aether-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5 shrink-0">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* High-visibility SIMULATED DEMO Badge */}
            <Badge
              variant="outline"
              size="sm"
              className="bg-sky-500/10 border-sky-400/40 text-sky-300 font-mono text-[10px] tracking-widest font-bold uppercase py-0.5 px-2.5"
            >
              SIMULATED DEMO
            </Badge>
            <span className="text-xs font-mono text-text-muted hidden md:inline">
              aether-retail-engine // inventory-risk-orchestrator
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {demoState === 'idle' ? (
            <Button
              variant="primary"
              size="sm"
              onClick={handleRunAether}
              leftIcon={<Play className="w-3.5 h-3.5 fill-current" />}
              className="shadow-glow-subtle font-semibold"
            >
              Run Aether
            </Button>
          ) : (
            <Button
              variant="outline"
              size="sm"
              onClick={handleReset}
              leftIcon={<RotateCcw className="w-3.5 h-3.5" />}
              className="text-xs"
            >
              Reset Demo
            </Button>
          )}
        </div>
      </div>

      {/* Main Sandbox Container */}
      <div className="p-5 sm:p-7 space-y-6">
        {/* Product Selector Ribbon */}
        <div>
          <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>Select Product Scenario:</span>
            <span className="font-mono text-[11px] text-sky-400">4 Live SKU Profiles</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
            {RETAIL_DEMO_PRODUCTS.map((prod) => {
              const isSelected = prod.id === selectedProductId;
              return (
                <button
                  key={prod.id}
                  onClick={() => handleSelectProduct(prod.id)}
                  className={cn(
                    'p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between',
                    isSelected
                      ? 'bg-sky-500/15 border-sky-500/60 shadow-glow-subtle'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                  )}
                >
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-[10px] font-mono text-text-muted">{prod.sku}</span>
                    <span
                      className={cn(
                        'text-[9px] font-mono px-1.5 py-0.2 rounded uppercase font-bold',
                        prod.stockoutRisk.includes('Critical')
                          ? 'bg-rose-500/20 text-rose-300'
                          : prod.stockoutRisk.includes('High')
                            ? 'bg-amber-500/20 text-amber-300'
                            : 'bg-indigo-500/20 text-indigo-300'
                      )}
                    >
                      {prod.stockoutRisk.replace(' (< 2 Days)', '').replace(' (< 4 Days)', '')}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-text-primary line-clamp-1">
                    {prod.name}
                  </div>
                  <div className="text-[11px] font-mono text-sky-300 mt-1">{prod.price}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Product Metric Board */}
        <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-4 sm:p-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-sky-400 font-bold">{product.sku}</span>
                <span className="text-xs text-text-muted">• {product.category}</span>
              </div>
              <h3 className="text-lg sm:text-xl font-extrabold text-text-primary mt-0.5">
                {product.name}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-[10px] font-mono text-text-muted uppercase">
                  Retail Unit Price
                </div>
                <div className="text-lg font-mono font-bold text-text-primary">{product.price}</div>
              </div>
              <div className="h-8 w-px bg-slate-800" />
              <div className="text-right">
                <div className="text-[10px] font-mono text-text-muted uppercase">Unit Cost</div>
                <div className="text-sm font-mono text-text-secondary">{product.unitCost}</div>
              </div>
            </div>
          </div>

          {/* 7 Core Requested Product Attributes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mt-4">
            {/* 1. Current Stock */}
            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
                Current Stock
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span
                  className={cn(
                    'text-xl font-mono font-extrabold',
                    product.currentStock < 10
                      ? 'text-rose-400'
                      : product.currentStock < 20
                        ? 'text-amber-400'
                        : 'text-text-primary'
                  )}
                >
                  {product.currentStock}
                </span>
                <span className="text-[10px] text-text-muted font-mono">units</span>
              </div>
            </div>

            {/* 2. Recent Sales */}
            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
                Recent Sales (7d)
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl font-mono font-extrabold text-sky-400">
                  {product.recentSales}
                </span>
                <span className="text-[10px] text-text-muted font-mono">units</span>
              </div>
            </div>

            {/* 3. Average Daily Demand */}
            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
                Avg Daily Demand
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl font-mono font-extrabold text-slate-200">
                  {product.averageDailyDemand}
                </span>
                <span className="text-[10px] text-text-muted font-mono">/ day</span>
              </div>
            </div>

            {/* 4. Predicted Demand */}
            <div className="p-3 rounded-lg bg-sky-500/10 border border-sky-500/25 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-sky-300 uppercase tracking-wider flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                <span>Predicted Demand</span>
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl font-mono font-extrabold text-sky-300">
                  {product.predictedDemand}
                </span>
                <span className="text-[10px] text-sky-300/80 font-mono">next 7d</span>
              </div>
            </div>

            {/* 5. Stockout Risk */}
            <div
              className={cn(
                'p-3 rounded-lg border flex flex-col justify-between',
                product.stockoutRisk.includes('Critical')
                  ? 'bg-rose-500/10 border-rose-500/30'
                  : product.stockoutRisk.includes('High')
                    ? 'bg-amber-500/10 border-amber-500/30'
                    : 'bg-indigo-500/10 border-indigo-500/30'
              )}
            >
              <span
                className={cn(
                  'text-[10px] font-mono uppercase tracking-wider flex items-center gap-1',
                  product.stockoutRisk.includes('Critical')
                    ? 'text-rose-300'
                    : product.stockoutRisk.includes('High')
                      ? 'text-amber-300'
                      : 'text-indigo-300'
                )}
              >
                <AlertTriangle className="w-3 h-3" />
                <span>Stockout Risk</span>
              </span>
              <div
                className={cn(
                  'text-xs font-bold font-mono mt-1',
                  product.stockoutRisk.includes('Critical')
                    ? 'text-rose-400'
                    : product.stockoutRisk.includes('High')
                      ? 'text-amber-400'
                      : 'text-indigo-400'
                )}
              >
                {product.stockoutRisk}
              </div>
            </div>

            {/* 6. Recommended Reorder */}
            <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/25 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-emerald-300 uppercase tracking-wider flex items-center gap-1">
                <Truck className="w-3 h-3" />
                <span>Rec. Reorder</span>
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl font-mono font-extrabold text-emerald-400">
                  {product.recommendedReorder}
                </span>
                <span className="text-[10px] text-emerald-300/80 font-mono">units</span>
              </div>
            </div>

            {/* 7. Lead Time */}
            <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 flex flex-col justify-between">
              <span className="text-[10px] font-mono text-text-muted uppercase tracking-wider">
                Supplier Lead Time
              </span>
              <div className="flex items-baseline gap-1 mt-1">
                <span className="text-xl font-mono font-extrabold text-slate-300">
                  {product.leadTimeDays}
                </span>
                <span className="text-[10px] text-text-muted font-mono">days</span>
              </div>
            </div>
          </div>

          {/* Suggested Action Bar */}
          <div className="mt-4 p-3 rounded-lg bg-slate-950/90 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-sky-400 font-bold uppercase tracking-wider font-mono text-[10px]">
                Suggested Action:
              </span>
              <span className="text-slate-300">{product.suggestedAction}</span>
            </div>
            <span className="text-[10px] font-mono text-rose-400 shrink-0">
              Revenue at Risk: {product.projectedRevenueAtRisk}
            </span>
          </div>
        </div>

        {/* Live Simulation Execution Panel */}
        <div
          className={cn(
            'p-5 sm:p-6 rounded-2xl border transition-all duration-300',
            demoState === 'idle'
              ? 'bg-slate-900/40 border-slate-800/80 opacity-75'
              : demoState === 'analyzing'
                ? 'bg-slate-900/80 border-sky-500/40 shadow-glow-subtle'
                : 'bg-slate-900/90 border-emerald-500/40 shadow-glow-subtle'
          )}
        >
          {demoState === 'idle' && (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mx-auto">
                <Cpu className="w-6 h-6 animate-pulse" />
              </div>
              <h4 className="text-base font-bold text-text-primary">
                Aether Ready to Analyze {product.name}
              </h4>
              <p className="text-xs text-text-muted max-w-md mx-auto">
                Click <span className="text-sky-400 font-semibold">"Run Aether"</span> to simulate
                cognitive telemetry ingestion, stockout risk diagnosis, and automated supplier
                reorder generation.
              </p>
              <div className="pt-2">
                <Button
                  variant="primary"
                  size="md"
                  onClick={handleRunAether}
                  leftIcon={<Play className="w-4 h-4 fill-current" />}
                  className="font-semibold shadow-md"
                >
                  Run Aether Engine
                </Button>
              </div>
            </div>
          )}

          {demoState === 'analyzing' && (
            <div className="text-center py-10 space-y-4 animate-fade-in">
              <div className="w-12 h-12 rounded-full border-2 border-sky-400 border-t-transparent animate-spin mx-auto" />
              <div className="space-y-1">
                <h4 className="text-base font-bold text-sky-300">
                  Diagnosing Inventory Velocity & Lead Time...
                </h4>
                <p className="text-xs text-text-muted font-mono">
                  Synthesizing POS stream • Calculating size depletion curves • Generating supplier
                  EDI payload
                </p>
              </div>
            </div>
          )}

          {demoState === 'executed' && (
            <div className="space-y-6 animate-fade-in">
              {/* Top Result Banner */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold">
                      Aether Autonomous Diagnosis & Reorder Complete
                    </div>
                    <div className="text-sm font-semibold text-text-primary">
                      {product.recommendedReorder > 0
                        ? `Reorder recommendation of ${product.recommendedReorder} units generated. Zero stockout gap guaranteed.`
                        : 'Overstock mitigation active. Reorder paused and promotional liquidation initiated.'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="success" size="sm" className="font-mono text-[10px]">
                    Latency: 480ms
                  </Badge>
                  <span className="text-[10px] font-mono text-emerald-400">Verified Outcome</span>
                </div>
              </div>

              {/* Tab Selector for Output Views */}
              <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-xs font-medium transition-colors',
                    activeTab === 'overview'
                      ? 'bg-slate-800 text-sky-300 font-bold'
                      : 'text-text-muted hover:text-slate-300'
                  )}
                >
                  Result: Diagnostic Synthesis
                </button>
                <button
                  onClick={() => setActiveTab('po')}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5',
                    activeTab === 'po'
                      ? 'bg-slate-800 text-emerald-300 font-bold'
                      : 'text-text-muted hover:text-slate-300'
                  )}
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Recommended Action: Purchase Order</span>
                </button>
                <button
                  onClick={() => setActiveTab('telemetry')}
                  className={cn(
                    'px-3 py-1.5 rounded-lg text-xs font-medium transition-colors',
                    activeTab === 'telemetry'
                      ? 'bg-slate-800 text-indigo-300 font-bold'
                      : 'text-text-muted hover:text-slate-300'
                  )}
                >
                  Store Telemetry Stream
                </button>
              </div>

              {/* View 1: Overview */}
              {activeTab === 'overview' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                    <div className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Cpu className="w-4 h-4" />
                      <span>Root Cause Diagnosis</span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {product.aetherDiagnosis.rootCause}
                    </p>
                    <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300 space-y-1">
                      <div>
                        <span className="text-text-muted">Velocity Surge: </span>
                        <span className="text-emerald-400 font-semibold">
                          {product.aetherDiagnosis.velocityChange}
                        </span>
                      </div>
                      <div>
                        <span className="text-text-muted">Lead Time Match: </span>
                        <span className="text-sky-300">
                          {product.aetherDiagnosis.leadTimeBuffer}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                    <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Layers className="w-4 h-4" />
                      <span>Cross-Store Inventory Rebalancing</span>
                    </div>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {product.aetherDiagnosis.crossLocationStock}
                    </p>
                    <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                      <div className="text-emerald-400 font-semibold">
                        ✓ High-Intent Waitlist Protected (18 wishlist users reserved)
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* View 2: Generated Reorder PO */}
              {activeTab === 'po' && (
                <div className="p-5 rounded-xl bg-slate-950/90 border border-emerald-500/30 font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-emerald-400" />
                      <span className="text-slate-200 font-bold">
                        {product.generatedReorderPO.poNumber}
                      </span>
                    </div>
                    <Badge variant="success" size="sm">
                      Status: Auto-Dispatched via EDI
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px]">
                    <div>
                      <span className="text-text-muted">Supplier: </span>
                      <span className="text-slate-200">
                        {product.generatedReorderPO.supplierName}
                      </span>
                    </div>
                    <div>
                      <span className="text-text-muted">Units Ordered: </span>
                      <span className="text-emerald-400 font-bold">
                        {product.generatedReorderPO.units} Units
                      </span>
                    </div>
                    <div>
                      <span className="text-text-muted">PO Total: </span>
                      <span className="text-slate-200 font-bold">
                        {product.generatedReorderPO.totalAmount}
                      </span>
                    </div>
                    <div>
                      <span className="text-text-muted">Fulfillment: </span>
                      <span className="text-sky-300">
                        {product.generatedReorderPO.deliveryMethod}
                      </span>
                    </div>
                    <div>
                      <span className="text-text-muted">Est. Arrival: </span>
                      <span className="text-amber-300 font-semibold">
                        {product.generatedReorderPO.estimatedArrival}
                      </span>
                    </div>
                    <div>
                      <span className="text-text-muted">Destination: </span>
                      <span className="text-slate-200">
                        {product.generatedReorderPO.warehouseDestination}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* View 3: 7-Day Stock Trajectory Table */}
              {activeTab === 'telemetry' && (
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead>
                      <tr className="border-b border-slate-800 text-text-muted text-[10px] uppercase">
                        <th className="pb-2">Timeline</th>
                        <th className="pb-2">Without Aether (Unassisted)</th>
                        <th className="pb-2">With Aether Auto-Reorder</th>
                        <th className="pb-2">Delta Protection</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-850">
                      {product.stockTrajectory.map((t, idx) => (
                        <tr key={idx} className="hover:bg-slate-900/40">
                          <td className="py-2 text-slate-300">{t.day}</td>
                          <td className="py-2">
                            <span
                              className={cn(
                                t.unassistedStock === 0
                                  ? 'text-rose-400 font-bold'
                                  : 'text-slate-400'
                              )}
                            >
                              {t.unassistedStock === 0
                                ? 'STOCKOUT (0)'
                                : `${t.unassistedStock} units`}
                            </span>
                          </td>
                          <td className="py-2 text-emerald-400 font-bold">
                            {t.projectedStock} units
                          </td>
                          <td className="py-2 text-[11px] text-sky-400">
                            {t.projectedStock - t.unassistedStock > 0
                              ? `+${t.projectedStock - t.unassistedStock} units protected`
                              : 'Healthy runway'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
