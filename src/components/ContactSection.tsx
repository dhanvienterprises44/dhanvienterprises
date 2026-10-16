import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { InquiryFormData } from '../types';

interface ContactSectionProps {
  initialRequirement?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialRequirement = '' }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    phone: '',
    email: '',
    propertyRequirement: initialRequirement || 'Residential Apartment',
    budgetRange: '₹75 Lakhs – ₹1.5 Cr',
    preferredLocation: 'Parappana Agrahara / Kudlu',
    message: '',
    agreeConsent: true,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Validate form fields
  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required.';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required.';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/[\s\-\+]/g, '').slice(-10))) {
      errs.phone = 'Please provide a valid 10-digit mobile number.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.agreeConsent) {
      errs.agreeConsent = 'Please agree to allow DHANVI Enterprises to contact you.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const copyInquiryDetails = () => {
    const summary = `DHANVI Enterprises Property Inquiry:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nRequirement: ${formData.propertyRequirement}\nBudget: ${formData.budgetRange}\nLocation: ${formData.preferredLocation}\nMessage: ${formData.message || 'None'}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsAppDirectUrl = `https://wa.me/919626368833?text=${encodeURIComponent(
    `Hello DHANVI Enterprises, I have submitted an inquiry:\nName: ${formData.name}\nPhone: ${formData.phone}\nRequirement: ${formData.propertyRequirement}\nBudget: ${formData.budgetRange}\nLocation: ${formData.preferredLocation}\nMessage: ${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold text-[#B8933D] tracking-wider uppercase mb-2">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Consult With DHANVI Enterprises Today
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Whether you are ready to visit shortlisted properties or want preliminary legal advice regarding a property in Bangalore, our team is ready to assist.
          </p>
        </div>

        {/* 2-Column Grid: Form & Verified Contact Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Lead Capture Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            {isSubmitted ? (
              <div className="space-y-6 py-4 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Your inquiry has been registered. An advisor from DHANVI Enterprises will review your requirements and reach out via phone or email shortly.
                  </p>
                </div>

                {/* Submitted Summary Box */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1.5 text-slate-700">
                  <div className="font-semibold text-slate-900 mb-2">Inquiry Summary:</div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Requirement:</span>
                    <span className="font-medium text-slate-900">{formData.propertyRequirement}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Budget Range:</span>
                    <span className="font-medium text-slate-900">{formData.budgetRange}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Preferred Area:</span>
                    <span className="font-medium text-slate-900">{formData.preferredLocation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Phone:</span>
                    <span className="font-medium text-slate-900 tabular-nums">{formData.phone}</span>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={whatsAppDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20BD5A] rounded-lg transition-colors whitespace-nowrap"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send on WhatsApp Now</span>
                  </a>

                  <button
                    onClick={copyInquiryDetails}
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copied to Clipboard' : 'Copy Summary'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        propertyRequirement: 'Residential Apartment',
                        budgetRange: '₹75 Lakhs – ₹1.5 Cr',
                        preferredLocation: 'Parappana Agrahara / Kudlu',
                        message: '',
                        agreeConsent: true,
                      });
                    }}
                    className="text-xs text-slate-500 hover:text-slate-900 underline underline-offset-2 ml-auto"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3">
                  <h3 className="text-lg font-bold text-slate-900">
                    Schedule a Consultation
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fill out the form below. We will provide objective guidance and curated property portfolios.
                  </p>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full px-3.5 py-2.5 text-xs bg-slate-50 border rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A192F] focus:bg-white ${
                        errors.name ? 'border-red-500' : 'border-slate-200'
                      }`}
                    />
                    {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 font-medium">
                        +91
                      </span>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="98765 43210"
                        className={`w-full pl-11 pr-3.5 py-2.5 text-xs bg-slate-50 border rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A192F] focus:bg-white tabular-nums ${
                          errors.phone ? 'border-red-500' : 'border-slate-200'
                        }`}
                      />
                    </div>
                    {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Email & Property Requirement */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className={`w-full px-3.5 py-2.5 text-xs bg-slate-50 border rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A192F] focus:bg-white ${
                        errors.email ? 'border-red-500' : 'border-slate-200'
                      }`}
                    />
                    {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Property Requirement *
                    </label>
                    <select
                      value={formData.propertyRequirement}
                      onChange={(e) => setFormData({ ...formData, propertyRequirement: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0A192F] focus:bg-white"
                    >
                      <option value="Residential Apartment">Residential Apartment (2/3/4 BHK)</option>
                      <option value="Luxury Villa / Row House">Luxury Villa / Row House</option>
                      <option value="Land & Residential Plot">Land & Residential Plot (BMRDA/BDA)</option>
                      <option value="Commercial Office / Retail">Commercial Office / Retail Space</option>
                      <option value="Selling My Existing Property">Selling My Existing Property</option>
                      <option value="Legal Title Verification & Advice">Legal Title Verification & Due Diligence</option>
                    </select>
                  </div>
                </div>

                {/* Budget Range & Preferred Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Budget Range
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0A192F] focus:bg-white"
                    >
                      <option value="Under ₹50 Lakhs">Under ₹50 Lakhs</option>
                      <option value="₹50 Lakhs – ₹75 Lakhs">₹50 Lakhs – ₹75 Lakhs</option>
                      <option value="₹75 Lakhs – ₹1.25 Cr">₹75 Lakhs – ₹1.25 Cr</option>
                      <option value="₹1.25 Cr – ₹2.5 Cr">₹1.25 Cr – ₹2.5 Cr</option>
                      <option value="₹2.5 Cr – ₹5 Cr">₹2.5 Cr – ₹5 Cr</option>
                      <option value="Above ₹5 Cr">Above ₹5 Cr</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Target Bangalore Locality
                    </label>
                    <select
                      value={formData.preferredLocation}
                      onChange={(e) => setFormData({ ...formData, preferredLocation: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0A192F] focus:bg-white"
                    >
                      <option value="Parappana Agrahara / Kudlu">Parappana Agrahara / Kudlu Gate</option>
                      <option value="Electronic City Phase 1 & 2">Electronic City Phase 1 & 2</option>
                      <option value="HSR Layout / Haralur Road">HSR Layout / Haralur Road</option>
                      <option value="Sarjapur Road Corridor">Sarjapur Road Corridor</option>
                      <option value="Chandapura / Anekal Corridor">Chandapura / Anekal Corridor</option>
                      <option value="Other Bangalore Locality">Other Bangalore Locality</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Specific Requirements / Questions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your preferred possession date, floor preference, or questions..."
                    className="w-full px-3.5 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A192F] focus:bg-white resize-none"
                  />
                </div>

                {/* Consent */}
                <div>
                  <label className="flex items-start gap-2 text-xs text-slate-600 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreeConsent}
                      onChange={(e) => setFormData({ ...formData, agreeConsent: e.target.checked })}
                      className="mt-0.5 rounded border-slate-300 text-[#0A192F] focus:ring-[#0A192F]"
                    />
                    <span>
                      I authorize DHANVI Enterprises to contact me via phone, email, or WhatsApp regarding this property consultation request.
                    </span>
                  </label>
                  {errors.agreeConsent && (
                    <p className="text-[11px] text-red-600 mt-1">{errors.agreeConsent}</p>
                  )}
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-xs font-semibold text-white bg-[#0A192F] hover:bg-[#132A4A] rounded-lg transition-colors shadow-sm focus-visible:outline-2"
                >
                  <Send className="w-4 h-4 text-[#D4AF37]" />
                  <span>Submit Consultation Request</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Verified Office Credentials & Google Map */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Contact Card */}
            <div className="bg-[#0A192F] text-white p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-md space-y-5">
              <div>
                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider block mb-1">
                  Bangalore Office
                </span>
                <h3 className="text-xl font-bold text-white">DHANVI Enterprises</h3>
                <p className="text-xs text-slate-400">Real Estate Consultant</p>
              </div>

              <div className="space-y-4 pt-2 border-t border-slate-800 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <div className="text-slate-300">
                    <span className="font-semibold text-white block mb-0.5">Address:</span>
                    {COMPANY_INFO.address}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <div>
                    <span className="font-semibold text-white block mb-0.5">Phone:</span>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-slate-300 hover:text-white transition-colors tabular-nums font-semibold"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <div>
                    <span className="font-semibold text-white block mb-0.5">Email:</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-slate-300 hover:text-white transition-colors break-all"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                  <div>
                    <span className="font-semibold text-white block mb-0.5">Consultation Hours:</span>
                    <span className="text-slate-300">{COMPANY_INFO.workingHours}</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action Button */}
              <div className="pt-2">
                <a
                  href={COMPANY_INFO.whatsAppLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20BD5A] rounded-lg transition-colors whitespace-nowrap"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Embedded Verified Google Map */}
            <div className="bg-white rounded-2xl border border-slate-200 p-3 shadow-xs overflow-hidden space-y-2">
              <div className="flex items-center justify-between px-2 pt-1">
                <span className="text-xs font-semibold text-slate-800 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#B8933D]" />
                  <span>Office Location Map</span>
                </span>
                <a
                  href="https://maps.google.com/?q=Sai+Baba+Layout+Parappana+Agrahara+Main+Road+Bengaluru+560100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-slate-500 hover:text-[#0A192F] inline-flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="relative w-full h-56 rounded-xl overflow-hidden border border-slate-200">
                <iframe
                  title="DHANVI Enterprises Location on Google Maps"
                  src={COMPANY_INFO.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              <div className="text-[11px] text-slate-500 px-2 pb-1">
                Landmark: Near Food Max Hypermarket, Parappana Agrahara Main Road.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
