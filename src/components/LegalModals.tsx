import React from 'react';
import { X, ShieldCheck, Scale, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export type LegalModalType = 'privacy' | 'terms' | 'rera' | null;

interface LegalModalsProps {
  activeType: LegalModalType;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ activeType, onClose }) => {
  if (!activeType) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[85vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            {activeType === 'privacy' && <ShieldCheck className="w-5 h-5 text-[#B8933D]" />}
            {activeType === 'terms' && <Scale className="w-5 h-5 text-[#B8933D]" />}
            {activeType === 'rera' && <FileText className="w-5 h-5 text-[#B8933D]" />}
            <h3 className="text-base font-bold text-slate-900">
              {activeType === 'privacy' && 'Privacy Policy'}
              {activeType === 'terms' && 'Terms of Consultation Service'}
              {activeType === 'rera' && 'RERA & Real Estate Advisory Disclaimer'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
          {activeType === 'privacy' && (
            <>
              <p>
                <strong>DHANVI Enterprises</strong> respects your privacy and is committed to protecting your personal data. This policy explains how we handle contact details submitted via our website.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">1. Information Collection</h4>
              <p>
                We only collect information you voluntarily provide through our lead generation and consultation booking forms—such as your name, phone number, email address, preferred property location, and budget.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">2. Use of Information</h4>
              <p>
                Your contact information is strictly utilized to respond to your specific property inquiries, schedule site visits, and provide curated real estate recommendations. We do not sell, rent, or distribute your phone number or email to external marketing databases.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">3. Contacting Us</h4>
              <p>
                If you have questions regarding your data or wish to have your details removed from our records, contact us directly at <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-900 font-semibold underline">{COMPANY_INFO.email}</a>.
              </p>
            </>
          )}

          {activeType === 'terms' && (
            <>
              <p>
                Welcome to the website of <strong>DHANVI Enterprises</strong>. By using this website and requesting our consultancy services, you acknowledge the following terms.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">1. Nature of Advisory Services</h4>
              <p>
                DHANVI Enterprises acts as an independent real estate consultant assisting prospective buyers, sellers, and investors in identifying, inspecting, and negotiating real estate properties in Bangalore. We do not act as the developer or construction contractor.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">2. Independent Legal Scrutiny</h4>
              <p>
                While DHANVI Enterprises assists with preliminary document compilation and due diligence checks, clients are always encouraged to have title deeds vetted by independent legal counsel before signing final conveyance deeds.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">3. Pricing & Market Fluctuations</h4>
              <p>
                Property prices, availability, and developer offers displayed on this website are indicative and subject to change based on actual market conditions and developer revisions.
              </p>
            </>
          )}

          {activeType === 'rera' && (
            <>
              <h4 className="font-bold text-slate-900 text-sm">Karnataka Real Estate Regulatory Authority (K-RERA) Advisory</h4>
              <p>
                Under the Real Estate (Regulation and Development) Act, 2016 (RERA), homebuyers are advised to verify that ongoing residential and commercial projects are duly registered with the Karnataka Real Estate Regulatory Authority (K-RERA) before booking.
              </p>
              <h4 className="font-bold text-slate-900 text-sm">Title Due Diligence & Khata Advisory</h4>
              <p>
                DHANVI Enterprises strongly advises buyers to inspect the project’s RERA registration number, BBMP/BDA plan sanction, Commencement Certificate (CC), and Occupancy Certificate (OC) where applicable. We assist in obtaining and inspecting all relevant documentation for our recommended developments.
              </p>
              <p className="text-slate-500 text-[11px] pt-2 border-t border-slate-100">
                Registered office: {COMPANY_INFO.address}
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
