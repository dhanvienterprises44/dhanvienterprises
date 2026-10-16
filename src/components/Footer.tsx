import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { LegalModalType } from './LegalModals';

interface FooterProps {
  onOpenLegal: (type: LegalModalType) => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal, onOpenConsultation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A192F] text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Purpose (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-white text-[#0A192F] flex items-center justify-center font-serif text-lg font-bold border border-[#D4AF37]/50">
                D
              </span>
              <span className="text-xl font-extrabold tracking-tight text-white">
                DHANVI <span className="text-[#D4AF37] font-medium">Enterprises</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Professional Real Estate Consultant in Bangalore. Specializing in verified residential apartments, luxury villas, approved plotted layouts, and commercial properties across South Bengaluru.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#0A192F] bg-[#D4AF37] hover:bg-[#E5BE4A] rounded-lg transition-colors shadow-xs"
              >
                <span>Request Free Consultation</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation (Col 5-6) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#properties" className="hover:text-white transition-colors">
                  Property Portfolio
                </a>
              </li>
              <li>
                <a href="#corridors" className="hover:text-white transition-colors">
                  Bangalore Corridors
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  EMI & Stamp Duty
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Core Bangalore Focus Areas (Col 7-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Micro-Market Expertise
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Parappana Agrahara Main Road</li>
              <li>Sai Baba Layout (Southern Winds)</li>
              <li>Kudlu Gate & Hosur Road</li>
              <li>Electronic City Phase 1 & 2</li>
              <li>HSR Layout & Haralur Road</li>
              <li>Sarjapur Road Corridor</li>
              <li>Chandapura – Anekal Plotted Belts</li>
            </ul>
          </div>

          {/* Verified Contact Details (Col 9-12) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Registered Office
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="hover:text-white transition-colors tabular-nums font-medium text-slate-200"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={COMPANY_INFO.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] hover:underline"
                >
                  WhatsApp: +91 96263 68833
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-[11px] text-slate-500 leading-relaxed">
          <p>
            <strong>Regulatory & Advisory Disclosure:</strong> DHANVI Enterprises operates as an independent property consultancy firm headquartered in Bengaluru, Karnataka. All property listings, floor plans, dimensions, and prices are proposed market representations subject to developer revisions and legal verification. Prospective buyers are advised to verify the project's RERA registration number and municipal approvals before finalizing any financial transactions.
          </p>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="mt-6 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={() => onOpenLegal('rera')}
              className="hover:text-white transition-colors"
            >
              RERA Disclaimer
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Scroll back to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
