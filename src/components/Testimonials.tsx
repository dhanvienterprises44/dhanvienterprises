import React from 'react';
import { Quote, CheckCircle, MapPin } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#B8933D] tracking-wider uppercase mb-2">
            Client Experiences
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            What Homebuyers & Investors Say About Our Advisory
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Real feedback from IT professionals, business leaders, and NRI investors who navigated Bangalore’s property market with DHANVI Enterprises.
          </p>
        </div>

        {/* 3-Column Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl border border-slate-200 p-7 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-[#D4AF37]/60" />
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                  <span>{t.clientName}</span>
                </div>
                <div className="text-xs text-slate-500 font-medium">{t.role}</div>

                <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400">
                  <MapPin className="w-3 h-3 text-[#B8933D]" />
                  <span>{t.microMarket}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-600 font-medium">{t.propertyType}</span>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>{t.verifiedLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
