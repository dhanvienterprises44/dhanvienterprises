import React from 'react';
import { MapPin, Shield, CheckCircle, FileText, Phone, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#B8933D] tracking-wider uppercase mb-2">
            Company Profile & Values
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Independent, Fact-Based Real Estate Advisory in Bengaluru
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            DHANVI Enterprises was founded on a simple conviction: property transactions in Bangalore should be rooted in clear legal facts, transparent pricing, and zero high-pressure salesmanship.
          </p>
        </div>

        {/* Content Split: Narrative & Detail Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Narrative Column */}
          <div className="lg:col-span-7 space-y-6 text-slate-700 leading-relaxed">
            <p>
              Navigating Bangalore’s rapid urban expansion can be daunting. With diverse zoning authorities like BBMP, BDA, and BMRDA, along with complex nuances like A-Khata vs B-Khata, homebuyers and investors need an experienced, local partner who inspects every detail before contracts are signed.
            </p>
            <p>
              Headquartered at Sai Baba Layout on Parappana Agrahara Main Road, <strong className="text-slate-900 font-semibold">DHANVI Enterprises</strong> specializes in South and East Bengaluru’s primary growth sectors. We bridge the critical corridor connecting HSR Layout, Kudlu Gate, Electronic City, and the Sarjapur IT boulevard.
            </p>
            <p>
              Whether you are an IT professional seeking an apartment with minimal commute to tech hubs, an NRI family acquiring a secure gated plot, or an enterprise seeking commercial retail space, we provide objective market comparisons and rigorous due diligence.
            </p>

            {/* Core Working Commitments */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                  <Shield className="w-4 h-4 text-[#B8933D]" />
                  <span>Uncompromised Due Diligence</span>
                </div>
                <p className="text-xs text-slate-600">
                  We audit 30-year Encumbrance Certificates, sanction plans, commencement certificates (CC), and occupancy certificates (OC).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-2 text-slate-900 font-semibold text-sm">
                  <CheckCircle className="w-4 h-4 text-[#B8933D]" />
                  <span>Transparent Representation</span>
                </div>
                <p className="text-xs text-slate-600">
                  We disclose genuine carpet areas, actual maintenance models, and realistic rental yield estimates with zero inflated promises.
                </p>
              </div>
            </div>
          </div>

          {/* Business Credentials Card */}
          <div className="lg:col-span-5 bg-[#0A192F] text-white p-7 rounded-2xl border border-slate-800 shadow-lg space-y-6">
            <div>
              <div className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-1">
                Consultancy Headquarters
              </div>
              <h3 className="text-xl font-bold text-white">DHANVI Enterprises</h3>
              <p className="text-xs text-slate-400 mt-0.5">Professional Real Estate Consultant</p>
            </div>

            <div className="space-y-4 pt-2 border-t border-slate-800 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-300 leading-snug">
                  <span className="font-semibold text-white block mb-0.5">Registered Office Address:</span>
                  {COMPANY_INFO.address}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <div className="text-xs sm:text-sm text-slate-300">
                  <span className="font-semibold text-white block mb-0.5">Direct Line:</span>
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors tabular-nums">
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <div className="text-xs sm:text-sm text-slate-300">
                  <span className="font-semibold text-white block mb-0.5">Official Inquiries:</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors break-all">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                <div className="text-xs text-slate-400 leading-relaxed">
                  <span className="font-semibold text-white block mb-0.5">Consultation Scope:</span>
                  Advisory covers residential apartments, plotted villa communities, independent houses, and commercial leases across Greater Bengaluru.
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-800">
              <div className="text-xs text-slate-400">
                Operating Hours: <span className="text-white font-medium">{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
