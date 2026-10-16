export type PropertyCategory = 'All' | 'Residential' | 'Villas' | 'Plots' | 'Commercial';

export interface PropertyItem {
  id: string;
  title: string;
  category: 'Residential' | 'Villas' | 'Plots' | 'Commercial';
  location: string;
  microMarket: string;
  priceDisplay: string;
  priceMinLakhs: number;
  configuration: string;
  areaSqFt: string;
  possessionStatus: string;
  reraStatus: string;
  imageUrl: string;
  highlights: string[];
  shortDesc: string;
  fullDesc: string;
  isFeatured: boolean;
  idealFor: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  keyDeliverables: string[];
  timeline: string;
  isProposed: boolean;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  propertyType: string;
  microMarket: string;
  quote: string;
  verifiedLabel: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Legal & Khata' | 'Finance & RERA' | 'Plots & Commercial';
}

export interface MicroMarketInfo {
  id: string;
  name: string;
  tagline: string;
  overview: string;
  avgRateSqFt: string;
  rentalYield: string;
  connectivity: string[];
  demandDrivers: string[];
}

export interface InquiryFormData {
  name: string;
  phone: string;
  email: string;
  propertyRequirement: string;
  budgetRange: string;
  preferredLocation: string;
  message: string;
  agreeConsent: boolean;
}
