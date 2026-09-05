import React, { useState } from 'react';
import {
  GraduationCap,
  Clock,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
  Award,
  Users,
  CheckCircle2,
} from 'lucide-react';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { EDUCATION_BI_DATA } from '../../../data/educationData';

export const EducationBiDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'admissions' | 'counselors' | 'retention'>(
    'admissions'
  );

  return (
    <div className="space-y-6">
      {/* Top Level BI Metric Flash Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 bg-gradient-to-br from-zinc-900/90 to-black border-white/10">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-2">
            <span>APP TURNAROUND</span>
            <Clock className="w-4 h-4 text-rose-400" />
          </div>
          <div className="text-2xl font-bold text-white font-mono">
            {EDUCATION_BI_DATA.admissionsYield.inquiryToEnrollmentTurnaround}
          </div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono mt-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>vs {EDUCATION_BI_DATA.admissionsYield.traditionalAverage} traditional</span>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-zinc-900/90 to-black border-white/10">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-2">
            <span>LEAD CONVERSION</span>
            <Award className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl font-bold text-emerald-400 font-mono">
            {EDUCATION_BI_DATA.admissionsYield.leadConversionRate}
          </div>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono mt-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>3x competitor baseline</span>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-zinc-900/90 to-black border-white/10">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-2">
            <span>COURSE COMPLETION</span>
            <GraduationCap className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl font-bold text-purple-400 font-mono">
            {EDUCATION_BI_DATA.retentionWatchdog.onTimeCourseCompletionRate}
          </div>
          <div className="flex items-center gap-1 text-[11px] text-purple-300 font-mono mt-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>Retention Watchdog active</span>
          </div>
        </Card>

        <Card className="p-4 bg-gradient-to-br from-zinc-900/90 to-black border-white/10">
          <div className="flex items-center justify-between text-zinc-400 text-xs font-mono mb-2">
            <span>RECOVERED LEARNERS</span>
            <Sparkles className="w-4 h-4 text-rose-400" />
          </div>
          <div className="text-2xl font-bold text-rose-400 font-mono">
            {EDUCATION_BI_DATA.retentionWatchdog.atRiskStudentsRecovered}
          </div>
          <div className="flex items-center gap-1 text-[11px] text-rose-300 font-mono mt-1">
            <ArrowUpRight className="w-3 h-3" />
            <span>Early intervention yield</span>
          </div>
        </Card>
      </div>

      {/* Tab Navigation */}
      <div className="flex items-center gap-2 border-b border-white/10 pb-3">
        <button
          onClick={() => setActiveTab('admissions')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'admissions'
              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          Admissions Yield & Pipeline Velocity
        </button>
        <button
          onClick={() => setActiveTab('counselors')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'counselors'
              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          Admissions Advisor Performance
        </button>
        <button
          onClick={() => setActiveTab('retention')}
          className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
            activeTab === 'retention'
              ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 shadow-sm'
              : 'text-zinc-400 hover:text-zinc-200'
          }`}
        >
          Retention Watchdog & Academic Success
        </button>
      </div>

      {/* Tab 1: Admissions */}
      {activeTab === 'admissions' && (
        <Card className="p-6 bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950 border-white/10 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <h4 className="text-base font-bold text-white">
                Application Pipeline Velocity & Yield
              </h4>
              <p className="text-xs text-zinc-400">
                Cognitive transcript verification and instant admissions packages reduce enrollment
                turnaround from 14 days to 1.4 days.
              </p>
            </div>
            <Badge
              variant="primary"
              size="sm"
              className="text-xs bg-rose-500/20 text-rose-300 border-rose-500/30"
            >
              Instant Triage Active
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-2">
              <span className="text-xs font-mono text-zinc-400">Aether Accelerated Enrollment</span>
              <div className="text-3xl font-extrabold text-white font-mono">
                {EDUCATION_BI_DATA.admissionsYield.inquiryToEnrollmentTurnaround}
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                24/7 conversational advisor handles prerequisite triage and syllabus matching
                instantly upon inquiry.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-2">
              <span className="text-xs font-mono text-zinc-400">
                Traditional Academic Admissions
              </span>
              <div className="text-3xl font-extrabold text-zinc-500 font-mono">
                {EDUCATION_BI_DATA.admissionsYield.traditionalAverage}
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Slow manual email correspondence and backlog in registrar offices cause 40%+
                prospective student drop-off.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <p className="text-xs text-rose-200/90 leading-relaxed">
              <strong>Matriculation Yield:</strong> Realized lead conversion reached{' '}
              <strong>{EDUCATION_BI_DATA.admissionsYield.leadConversionRate}</strong> (vs{' '}
              {EDUCATION_BI_DATA.admissionsYield.traditionalLeadConversion} industry baseline).
            </p>
          </div>
        </Card>
      )}

      {/* Tab 2: Counselors */}
      {activeTab === 'counselors' && (
        <Card className="p-6 bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950 border-white/10 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <h4 className="text-base font-bold text-white">
                Admissions Advisor & Program Director Roster
              </h4>
              <p className="text-xs text-zinc-400">
                Advisors supported by AI inquiry summarization and prerequisite pre-scoring.
              </p>
            </div>
            <span className="text-xs font-mono text-zinc-400">
              {EDUCATION_BI_DATA.counselorPerformance.length} Active Advisors
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {EDUCATION_BI_DATA.counselorPerformance.map((counselor, idx: number) => (
              <div key={idx} className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-rose-500/20 border border-rose-500/30 flex items-center justify-center text-rose-400 font-bold text-xs">
                      {counselor.advisor.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{counselor.advisor}</div>
                      <div className="text-[10px] text-zinc-400 font-mono">
                        Response Time: {counselor.responseTimeAvg}
                      </div>
                    </div>
                  </div>
                  <Badge
                    variant="primary"
                    size="sm"
                    className="text-[10px] bg-rose-500/20 text-rose-300 border-rose-500/30 font-mono"
                  >
                    ★ {counselor.satisfaction}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5 text-center font-mono">
                  <div className="p-2 rounded-lg bg-white/[0.02]">
                    <div className="text-[10px] text-zinc-400">Inquiries Handled</div>
                    <div className="text-xs font-bold text-white mt-0.5">
                      {counselor.inquiriesHandled} Leads
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-white/[0.02]">
                    <div className="text-[10px] text-zinc-400">Matriculation Yield</div>
                    <div className="text-xs font-bold text-emerald-400 mt-0.5">
                      {counselor.enrollmentYield}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Tab 3: Retention Watchdog */}
      {activeTab === 'retention' && (
        <Card className="p-6 bg-gradient-to-br from-zinc-900/90 via-black to-zinc-950 border-white/10 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <h4 className="text-base font-bold text-white">
                LMS Retention Watchdog & Dropout Prevention
              </h4>
              <p className="text-xs text-zinc-400">
                Monitors assignment submission intervals, lab activity, and forum engagement to
                prevent silent dropouts.
              </p>
            </div>
            <Badge variant="success" size="sm" className="text-xs font-mono">
              Retention Watchdog Active
            </Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
              <span className="text-[10px] uppercase font-mono text-zinc-400">
                Cohort Completion Rate
              </span>
              <div className="text-2xl font-bold text-emerald-400 font-mono">
                {EDUCATION_BI_DATA.retentionWatchdog.onTimeCourseCompletionRate}
              </div>
              <p className="text-[11px] text-zinc-400">Across full-time & hybrid cohorts</p>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
              <span className="text-[10px] uppercase font-mono text-zinc-400">
                Intervention Success
              </span>
              <div className="text-2xl font-bold text-rose-400 font-mono">
                {EDUCATION_BI_DATA.retentionWatchdog.earlyInterventionSuccess}
              </div>
              <p className="text-[11px] text-zinc-400">Week 3 faculty check-in recovery</p>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-1">
              <span className="text-[10px] uppercase font-mono text-zinc-400">
                Recovered Tuition ARR
              </span>
              <div className="text-2xl font-bold text-purple-400 font-mono">$1.8M+</div>
              <p className="text-[11px] text-zinc-400">From prevented mid-semester withdrawals</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
