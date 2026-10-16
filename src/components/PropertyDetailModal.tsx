import React from 'react';
import { X, MapPin, CheckCircle, ShieldCheck, Ruler, Calendar, ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { PropertyItem } from '../types';
import { COMPANY_INFO } from '../data/mockData';

interface PropertyDetailModalProps {
  property: PropertyItem | null;
  onClose: () => void;
  onInquire: (propertyTitle: string) => void;
}

export const PropertyDetailModal: React.FC<PropertyDetailModalProps> = ({
  property,
  onClose,
  onInquire,
}) => {
  if (!property) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div>
            <span className="text-xs font-semibold text-[#B8933D] uppercase tracking-wide">
              {property.category} Property Consultation
            </span>
            <h3 className="text-lg font-bold text-slate-900 truncate max-w-md sm:max-w-xl">
              {property.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Main Visual Asset */}
          <div className="relative rounded-xl overflow-hidden h-64 sm:h-80 bg-slate-100">
            <img
              src={property.imageUrl}
              alt={property.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-[#0A192F]/90 backdrop-blur-xs text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-700">
              {property.microMarket}
            </div>
            <div className="absolute bottom-4 right-4 bg-white/95 text-slate-900 text-sm font-bold px-3.5 py-1.5 rounded-lg shadow-md tabular-nums border border-slate-200">
              {property.priceDisplay}
            </div>
          </div>

          {/* Quick Property Stats Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <div>
              <span className="text-slate-500 block mb-0.5">Configuration</span>
              <strong className="text-slate-900 font-semibold">{property.configuration}</strong>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Built-up / Plot Area</span>
              <strong className="text-slate-900 font-semibold">{property.areaSqFt}</strong>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Possession Status</span>
              <strong className="text-slate-900 font-semibold">{property.possessionStatus}</strong>
            </div>
            <div>
              <span className="text-slate-500 block mb-0.5">Title & RERA</span>
              <strong className="text-emerald-700 font-semibold">{property.reraStatus}</strong>
            </div>
          </div>

          {/* Location & Description */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <MapPin className="w-4 h-4 text-[#B8933D]" />
              <span>{property.location}</span>
            </div>
            <h4 className="text-sm font-bold text-slate-900">Consultancy Overview</h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {property.fullDesc}
            </p>
          </div>

          {/* Key Highlights */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wide">
              Key Features & Infrastructure
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {property.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle className="w-3.5 h-3.5 text-[#B8933D] shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Advisory Notice */}
          <div className="p-3.5 rounded-lg bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <p>
              <strong>DHANVI Enterprises Due Diligence:</strong> We verify all legal parent deeds, encumbrance certificates (EC Form 15), and ensure price parity before arranging private site visits.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-200 bg-slate-50 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-500">
            Target Audience: <strong className="text-slate-800">{property.idealFor}</strong>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/919626368833?text=Hi%20DHANVI%20Enterprises,%20I%20am%20interested%20in%20consultation%20for%20${encodeURIComponent(property.title)}%20(${encodeURIComponent(property.location)}).`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20BD5A] rounded-lg transition-colors whitespace-nowrap"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Details</span>
            </a>
            <button
              onClick={() => {
                onClose();
                onInquire(property.title);
              }}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-semibold text-white bg-[#0A192F] hover:bg-[#132A4A] rounded-lg transition-colors whitespace-nowrap"
            >
              <span>Schedule Site Visit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
