import React from 'react';
import { Search, FileSearch, Compass, Scale, CheckCircle2 } from 'lucide-react';

export const OurProcess: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Requirement Discovery & Budget Planning',
      desc: 'We sit down with you to understand your commute priorities, family size, Vastu preferences, and loan eligibility to establish an unambiguous brief.',
      icon: Search,
    },
    {
      num: '02',
      title: 'Curated Shortlisting & Due Diligence',
      desc: 'Instead of bombarding you with hundreds of random listings, we shortlist 3–5 properties that pass our preliminary legal and developer audits.',
      icon: FileSearch,
    },
    {
      num: '03',
      title: 'Chauffeured On-Ground Site Visits',
      desc: 'We arrange private visits accompanied by our senior advisor to examine floor layout efficiency, natural lighting, water supply sources, and locality infrastructure.',
      icon: Compass,
    },
    {
      num: '04',
      title: 'Comprehensive Legal & Khata Audit',
      desc: 'We facilitate title scrutiny through trusted Bangalore property advocates—examining 30-year Encumbrance Certificates, conversion approvals, and BBMP/BDA Khata papers.',
      icon: Scale,
    },
    {
      num: '05',
      title: 'Transparent Negotiation & Registration',
      desc: 'We represent your interests to secure fair developer discounts, structure the sale agreement, coordinate bank loan approvals, and assist at the Sub-Registrar office.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="process" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#B8933D] tracking-wider uppercase mb-2">
            The Advisory Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            How DHANVI Enterprises Protects Your Property Journey
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our structured 5-step process ensures complete transparency, eliminating the anxiety and hidden clauses often encountered in real estate deals.
          </p>
        </div>

        {/* Step-by-Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-extrabold text-[#D4AF37] font-mono tabular-nums">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700">
                      <Icon className="w-5 h-5 text-[#0A192F]" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 font-medium">
                  Stage {step.num} of 05
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
