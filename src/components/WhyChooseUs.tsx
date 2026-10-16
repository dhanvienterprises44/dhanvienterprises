import React from 'react';
import { ShieldCheck, Eye, FileCheck, Users2, Award } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/mockData';

export const WhyChooseUs: React.FC = () => {
  const icons = [Eye, ShieldCheck, FileCheck, Users2];

  return (
    <section className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#B8933D] tracking-wider uppercase mb-2">
            The DHANVI Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Why Property Buyers & Investors Rely On Us
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Property transactions in Bangalore carry substantial legal, municipal, and financial intricacies. We act as your dedicated advocates from initial discovery to ownership handover.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_US.map((pillar, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition-all"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center border border-slate-200 text-[#0A192F] shadow-xs">
                    <IconComponent className="w-6 h-6 text-[#B8933D]" />
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-400 font-mono tracking-wider block mb-1">
                      0{index + 1}.
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      {pillar.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200 text-xs font-semibold text-[#0A192F]">
                  {pillar.metric}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
