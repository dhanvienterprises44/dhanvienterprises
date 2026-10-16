import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenConsultation: (initialTopic?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Utility Contact Bar */}
      <div className="bg-[#0A192F] text-slate-300 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 text-xs font-normal">
            <span className="text-slate-400 hidden sm:inline">Bangalore Real Estate Consultancy</span>
            <span className="hidden sm:inline text-slate-600" aria-hidden="true">·</span>
            <span className="text-slate-300 truncate max-w-xs md:max-w-md">Parappana Agrahara, Bengaluru – 560100</span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-medium tabular-nums">{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <span className="text-slate-700" aria-hidden="true">|</span>
            <a
              href={COMPANY_INFO.whatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] hover:text-[#20BD5A] font-medium transition-colors whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Strict 3-Zone Contract */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
          {/* Zone 1: Brand Wordmark (Single Text Element) */}
          <a
            href="#"
            className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#0A192F] whitespace-nowrap shrink-0 group"
          >
            <span className="w-8 h-8 rounded-lg bg-[#0A192F] text-[#D4AF37] flex items-center justify-center font-serif text-lg font-bold border border-[#D4AF37]/30 group-hover:scale-105 transition-transform">
              D
            </span>
            <span className="tracking-tight text-slate-900 font-extrabold text-xl">
              DHANVI <span className="text-[#B8933D] font-medium">Enterprises</span>
            </span>
          </a>

          {/* Zone 2: Nav Links (Clean Single-Line Text) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a href="#about" className="hover:text-[#0A192F] transition-colors whitespace-nowrap shrink-0">
              About Us
            </a>
            <a href="#services" className="hover:text-[#0A192F] transition-colors whitespace-nowrap shrink-0">
              Our Services
            </a>
            <a href="#properties" className="hover:text-[#0A192F] transition-colors whitespace-nowrap shrink-0">
              Properties
            </a>
            <a href="#corridors" className="hover:text-[#0A192F] transition-colors whitespace-nowrap shrink-0">
              Bangalore Corridors
            </a>
            <a href="#process" className="hover:text-[#0A192F] transition-colors whitespace-nowrap shrink-0">
              Our Process
            </a>
            <a href="#calculator" className="hover:text-[#0A192F] transition-colors whitespace-nowrap shrink-0">
              EMI Calculator
            </a>
            <a href="#faqs" className="hover:text-[#0A192F] transition-colors whitespace-nowrap shrink-0">
              FAQs
            </a>
            <a href="#contact" className="hover:text-[#0A192F] transition-colors whitespace-nowrap shrink-0">
              Contact
            </a>
          </nav>

          {/* Zone 3: Single Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenConsultation()}
              className="hidden sm:inline-flex items-center justify-center px-4 py-2.5 text-xs font-semibold text-white bg-[#0A192F] hover:bg-[#132A4A] rounded-lg transition-all shadow-xs border border-slate-800 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A192F]"
            >
              Book Free Consultation
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors focus-visible:outline-2 focus-visible:outline-[#0A192F]"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3">
            <nav className="flex flex-col space-y-2 text-sm font-medium text-slate-700">
              <a
                href="#about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                About Us
              </a>
              <a
                href="#services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                Our Services
              </a>
              <a
                href="#properties"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                Properties
              </a>
              <a
                href="#corridors"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                Bangalore Corridors
              </a>
              <a
                href="#process"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                Our Process
              </a>
              <a
                href="#calculator"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                EMI Calculator
              </a>
              <a
                href="#faqs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                FAQs
              </a>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-slate-100 transition-colors"
              >
                Contact Us
              </a>
            </nav>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full py-2.5 px-4 text-center text-xs font-semibold text-white bg-[#0A192F] rounded-lg shadow-sm"
              >
                Book Free Consultation
              </button>
              <div className="flex items-center justify-between text-xs text-slate-600 px-1 pt-1">
                <span>Direct Call:</span>
                <a href={`tel:${COMPANY_INFO.phone}`} className="font-semibold text-slate-900">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
