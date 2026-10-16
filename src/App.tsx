import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { ServicesSection } from './components/ServicesSection';
import { PropertyListings } from './components/PropertyListings';
import { BangaloreCorridors } from './components/BangaloreCorridors';
import { WhyChooseUs } from './components/WhyChooseUs';
import { OurProcess } from './components/OurProcess';
import { EmiCalculator } from './components/EmiCalculator';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { LegalModals, LegalModalType } from './components/LegalModals';
import { FloatingContactBar } from './components/FloatingContactBar';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationTopic, setConsultationTopic] = useState<string>('General Property Consultation');
  const [activeLegalModal, setActiveLegalModal] = useState<LegalModalType>(null);
  const [contactFormRequirement, setContactFormRequirement] = useState<string>('');

  const handleOpenConsultation = (topic?: string) => {
    if (topic) {
      setConsultationTopic(topic);
    } else {
      setConsultationTopic('General Property Consultation');
    }
    setIsConsultationOpen(true);
  };

  const handleInquireProperty = (propertyTitle: string) => {
    setConsultationTopic(`Inquiry for: ${propertyTitle}`);
    setIsConsultationOpen(true);
  };

  const handleSelectService = (serviceTitle: string) => {
    setConsultationTopic(`Advisory Service: ${serviceTitle}`);
    setContactFormRequirement(serviceTitle);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] flex flex-col selection:bg-[#D4AF37]/20 selection:text-slate-900 pb-16 md:pb-0">
      {/* 3-Zone Top Navigation Bar */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Hero Section */}
      <main className="flex-1">
        <Hero onOpenConsultation={() => handleOpenConsultation('Comprehensive Property Search')} />

        {/* About DHANVI Enterprises */}
        <AboutUs />

        {/* Proposed Advisory Services */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* Curated Property Consultation Showcase */}
        <PropertyListings onInquireProperty={handleInquireProperty} />

        {/* Bangalore Micro-Market Growth Corridors */}
        <BangaloreCorridors />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* 5-Step Advisory Process */}
        <OurProcess />

        {/* Home Loan EMI & Karnataka Stamp Duty Estimator */}
        <EmiCalculator onOpenConsultation={() => handleOpenConsultation('Bank Loan & Legal Diligence')} />

        {/* Authentic Customer Testimonials */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Contact Us Section with Lead Generation Form & Verified Map */}
        <ContactSection initialRequirement={contactFormRequirement} />
      </main>

      {/* Professional Footer with Legal Links & RERA Disclosure */}
      <Footer
        onOpenLegal={(type) => setActiveLegalModal(type)}
        onOpenConsultation={() => handleOpenConsultation()}
      />

      {/* Floating Mobile Contact Bar & Desktop WhatsApp Float */}
      <FloatingContactBar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialTopic={consultationTopic}
      />

      {/* Legal & Regulatory Modals */}
      <LegalModals
        activeType={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </div>
  );
}
