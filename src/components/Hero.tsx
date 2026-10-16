import React from 'react';
import { ArrowRight, ShieldCheck, MapPin, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface HeroProps {
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section className="relative bg-[#0A192F] text-white overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-20">
      {/* Subtle Background Lighting & Geometric Accents */}
      <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Hero: Text & Focal Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            {/* Clean unboxed category kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-[#D4AF37] uppercase">
              <span>Real Estate Consultancy</span>
              <span aria-hidden="true">·</span>
              <span>Bengaluru, Karnataka</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight [text-wrap:balance]">
              Premier Real Estate Advisory for Bangalore’s Growth Corridors
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
              DHANVI Enterprises delivers transparent, fiduciary guidance for homebuyers, villa seekers, plotted land investors, and commercial enterprises. Based in Parappana Agrahara with deep on-ground diligence across South Bengaluru.
            </p>

            {/* Quick Micro-Corridor Breadcrumb */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs text-slate-400 pt-1">
              <span className="text-slate-200 font-medium">Core Focus:</span>
              <span>Parappana Agrahara</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>Electronic City</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>HSR Layout</span>
              <span aria-hidden="true" className="text-slate-600">/</span>
              <span>Sarjapur Corridor</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#0A192F] bg-[#D4AF37] hover:bg-[#E5BE4A] rounded-lg transition-all shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D4AF37] whitespace-nowrap"
              >
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={COMPANY_INFO.whatsAppLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-white bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 rounded-lg transition-colors whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp Consultant</span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-slate-400" />
                <span className="tabular-nums">{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>

            {/* Fiduciary Commitment Note */}
            <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <span>Independent advisory · Verified legal titles · Zero pressure transactions</span>
            </div>
          </div>

          {/* Right Column: Dominant Focal Visual Asset */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/60 shadow-2xl bg-slate-900 group">
              <img
                src="/src/assets/images/hero_bangalore_luxury_villa_1792135590748.jpg"
                alt="Modern contemporary luxury residential villa with private garden in Bangalore"
                referrerPolicy="no-referrer"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover group-hover:scale-102 transition-transform duration-500"
              />
              {/* Measured contrast scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F]/90 via-[#0A192F]/30 to-transparent pointer-events-none" />

              <div className="absolute bottom-0 inset-x-0 p-5 space-y-1.5 text-white">
                <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>South Bengaluru Corridors</span>
                </div>
                <h3 className="text-base font-semibold text-white">
                  Curated Residential & Plotted Developments
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2">
                  Advising on gated villas, A-Khata flats, and BMRDA-approved villa sites near electronic corridors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Column KPI / Trust Strip Placed in a Full-Width Row Below Hero Split */}
        <div className="mt-14 pt-8 border-t border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-bold text-white tabular-nums flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#D4AF37]" />
              <span>100% Vetted</span>
            </div>
            <div className="text-xs text-slate-400 font-medium">Title & Legal Scrutiny</div>
            <p className="text-xs text-slate-500">Khata status, EC, and approvals verified before token advance.</p>
          </div>

          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-bold text-white tabular-nums flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#D4AF37]" />
              <span>Bangalore South</span>
            </div>
            <div className="text-xs text-slate-400 font-medium">Local Micro-Market Focus</div>
            <p className="text-xs text-slate-500">Parappana Agrahara, Kudlu, Electronic City & Sarjapur hubs.</p>
          </div>

          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-bold text-white tabular-nums flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#D4AF37]" />
              <span>Zero Conflict</span>
            </div>
            <div className="text-xs text-slate-400 font-medium">Client-First Fiduciary</div>
            <p className="text-xs text-slate-500">Unbiased evaluation with transparent advisory terms in writing.</p>
          </div>

          <div className="space-y-1">
            <div className="text-xl sm:text-2xl font-bold text-white tabular-nums flex items-center gap-2">
              <ArrowRight className="w-5 h-5 text-[#D4AF37]" />
              <span>End-to-End</span>
            </div>
            <div className="text-xs text-slate-400 font-medium">Site Visit to Registration</div>
            <p className="text-xs text-slate-500">Chauffeured visits, bank loan liaison & Sub-Registrar support.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
