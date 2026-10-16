import React from 'react';
import { Home, Building2, Landmark, Briefcase, Handshake, ShieldCheck, Check, ArrowRight, HelpCircle } from 'lucide-react';
import { PROPOSED_SERVICES } from '../data/mockData';

interface ServicesSectionProps {
  onSelectService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-6 h-6 text-[#0A192F]" />;
      case 'Building2':
        return <Building2 className="w-6 h-6 text-[#0A192F]" />;
      case 'Landmark':
        return <Landmark className="w-6 h-6 text-[#0A192F]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#0A192F]" />;
      case 'Handshake':
        return <Handshake className="w-6 h-6 text-[#0A192F]" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-6 h-6 text-[#0A192F]" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#B8933D] tracking-wider uppercase mb-2">
            Consultancy Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Comprehensive Real Estate Advisory Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From preliminary market evaluation and developer diligence to Sub-Registrar registration, we provide specialized advisory tailored to each property asset class.
          </p>

          {/* Verification Notice required by brief */}
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 bg-amber-50/70 border border-amber-200/60 px-3.5 py-2.5 rounded-lg max-w-2xl">
            <HelpCircle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Note:</strong> Services listed below represent proposed consultation solutions structured for DHANVI Enterprises to verify and tailor to client requirements.
            </span>
          </div>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROPOSED_SERVICES.map((service, index) => {
            const editorialNumber = `0${index + 1}.`;

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 hover:shadow-md transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Top Bar with Editorial Index & Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center border border-slate-200/80">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-bold text-slate-400 font-mono tracking-wider">
                      {editorialNumber}
                    </span>
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-[#B8933D] uppercase tracking-wide">
                      {service.tagline}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mt-1">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Key Deliverables */}
                  <div className="pt-2 border-t border-slate-100 space-y-2">
                    <span className="text-xs font-semibold text-slate-900 block">
                      Scope & Deliverables:
                    </span>
                    <ul className="space-y-1.5">
                      {service.keyDeliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <span className="text-xs text-slate-400">
                    Typical Cycle: <strong className="text-slate-700 font-medium">{service.timeline}</strong>
                  </span>
                  <button
                    onClick={() => onSelectService(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0A192F] hover:text-[#B8933D] transition-colors whitespace-nowrap focus-visible:outline-2"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
