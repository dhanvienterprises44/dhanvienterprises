import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface FloatingContactBarProps {
  onOpenConsultation: () => void;
}

export const FloatingContactBar: React.FC<FloatingContactBarProps> = ({ onOpenConsultation }) => {
  return (
    <>
      {/* Mobile Bottom Quick Action Bar (adheres to < 15% viewport height) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-lg">
        <div className="flex items-center justify-between gap-2 max-w-md mx-auto">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold text-slate-800 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5 text-[#0A192F]" />
            <span>Call Now</span>
          </a>

          <a
            href={COMPANY_INFO.whatsAppLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20BD5A] rounded-lg transition-colors whitespace-nowrap shadow-xs"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={onOpenConsultation}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-2 text-xs font-semibold text-white bg-[#0A192F] hover:bg-[#132A4A] rounded-lg transition-colors whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Book Visit</span>
          </button>
        </div>
      </div>

      {/* Desktop Quick Floating WhatsApp Button (Bottom Right) */}
      <div className="hidden md:block fixed bottom-6 right-6 z-40">
        <a
          href={COMPANY_INFO.whatsAppLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-full shadow-xl transition-transform hover:scale-105 duration-200 group border border-white/20"
          aria-label="Chat with DHANVI Enterprises on WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-xs font-semibold whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </a>
      </div>
    </>
  );
};
