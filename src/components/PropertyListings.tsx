import React, { useState, useMemo } from 'react';
import { Search, MapPin, CheckCircle, ArrowRight, Info, Eye } from 'lucide-react';
import { PropertyItem, PropertyCategory } from '../types';
import { PROPERTY_SHOWCASE } from '../data/mockData';
import { PropertyDetailModal } from './PropertyDetailModal';

interface PropertyListingsProps {
  onInquireProperty: (propertyTitle: string) => void;
}

export const PropertyListings: React.FC<PropertyListingsProps> = ({ onInquireProperty }) => {
  const [selectedCategory, setSelectedCategory] = useState<PropertyCategory>('All');
  const [budgetFilter, setBudgetFilter] = useState<'All' | 'Under1Cr' | '1to2Cr' | 'Above2Cr'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activePropertyModal, setActivePropertyModal] = useState<PropertyItem | null>(null);

  const categories: PropertyCategory[] = ['All', 'Residential', 'Villas', 'Plots', 'Commercial'];

  const filteredProperties = useMemo(() => {
    return PROPERTY_SHOWCASE.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      // Budget filter
      if (budgetFilter === 'Under1Cr' && item.priceMinLakhs > 100) return false;
      if (budgetFilter === '1to2Cr' && (item.priceMinLakhs < 100 || item.priceMinLakhs > 200)) return false;
      if (budgetFilter === 'Above2Cr' && item.priceMinLakhs < 200) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesLocation = item.location.toLowerCase().includes(query);
        const matchesMicroMarket = item.microMarket.toLowerCase().includes(query);
        const matchesConfig = item.configuration.toLowerCase().includes(query);
        if (!matchesTitle && !matchesLocation && !matchesMicroMarket && !matchesConfig) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, budgetFilter, searchQuery]);

  return (
    <section id="properties" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold text-[#B8933D] tracking-wider uppercase mb-2">
              Curated Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Featured Bangalore Property Opportunities
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Explore handpicked residential apartments, luxury villas, approved plotted enclaves, and commercial spaces across South Bengaluru.
            </p>
          </div>

          {/* Quick Disclaimer required by prompt */}
          <div className="text-xs text-slate-500 bg-slate-50 border border-slate-200 p-3 rounded-xl max-w-sm">
            <span className="font-semibold text-slate-700 block mb-0.5">Consultation Showcase</span>
            Listings represent market inventory and advisory opportunities handled by DHANVI Enterprises.
          </div>
        </div>

        {/* Interactive Filter Toolbar */}
        <div className="space-y-4 mb-10">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-3 bg-slate-50 rounded-2xl border border-slate-200">
            {/* Category Filter Tabs (Interactive Segmented Control) */}
            <div className="flex flex-wrap items-center gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap focus-visible:outline-2 ${
                    selectedCategory === cat
                      ? 'bg-[#0A192F] text-white shadow-xs'
                      : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
                  }`}
                >
                  {cat === 'All' ? 'All Properties' : cat}
                </button>
              ))}
            </div>

            {/* Search Input & Budget Selectors */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative min-w-[220px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search locality or type..."
                  className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0A192F] focus:border-transparent"
                />
              </div>

              {/* Budget Segmented Pills */}
              <div className="flex items-center gap-1 p-1 bg-white rounded-lg border border-slate-200 text-xs">
                <button
                  onClick={() => setBudgetFilter('All')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors whitespace-nowrap ${
                    budgetFilter === 'All' ? 'bg-[#0A192F] text-white font-medium' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  All Budgets
                </button>
                <button
                  onClick={() => setBudgetFilter('Under1Cr')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors whitespace-nowrap ${
                    budgetFilter === 'Under1Cr' ? 'bg-[#0A192F] text-white font-medium' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  &lt; ₹1 Cr
                </button>
                <button
                  onClick={() => setBudgetFilter('1to2Cr')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors whitespace-nowrap ${
                    budgetFilter === '1to2Cr' ? 'bg-[#0A192F] text-white font-medium' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  ₹1 Cr – ₹2 Cr
                </button>
                <button
                  onClick={() => setBudgetFilter('Above2Cr')}
                  className={`px-2.5 py-1 rounded text-xs transition-colors whitespace-nowrap ${
                    budgetFilter === 'Above2Cr' ? 'bg-[#0A192F] text-white font-medium' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  &gt; ₹2 Cr
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Property Grid */}
        {filteredProperties.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200 p-8">
            <Info className="w-8 h-8 text-slate-400 mx-auto mb-3" />
            <h3 className="text-base font-semibold text-slate-900">No matching properties found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-md mx-auto">
              Try adjusting your category, budget filter, or search keywords. Alternatively, contact DHANVI Enterprises directly for off-market inventory.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setBudgetFilter('All');
                setSearchQuery('');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-[#0A192F] bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Visual Asset */}
                  <div className="relative h-56 overflow-hidden bg-slate-100">
                    <img
                      src={prop.imageUrl}
                      alt={prop.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                    {/* Unboxed Micro-Market Location Tag */}
                    <div className="absolute top-3 left-3 bg-[#0A192F]/85 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md border border-slate-700">
                      {prop.microMarket}
                    </div>

                    {/* Price in Bottom Right */}
                    <div className="absolute bottom-3 right-3 bg-white/95 text-[#0A192F] text-xs font-bold px-3 py-1 rounded-md shadow-xs tabular-nums border border-slate-200">
                      {prop.priceDisplay}
                    </div>
                  </div>

                  {/* Card Body - Leads directly with title without pill sandwich */}
                  <div className="p-5 space-y-3">
                    {/* Clean unboxed metadata with bullet separators */}
                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <span className="font-semibold text-slate-700">{prop.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate">{prop.configuration}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{prop.areaSqFt}</span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#B8933D] transition-colors leading-snug">
                      {prop.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500">
                      <MapPin className="w-3.5 h-3.5 text-[#B8933D] shrink-0" />
                      <span className="truncate">{prop.location}</span>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {prop.shortDesc}
                    </p>

                    {/* RERA and Possession metadata */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span className="text-emerald-700 font-medium truncate max-w-[170px]">
                        {prop.reraStatus}
                      </span>
                      <span className="text-slate-600 font-medium">
                        {prop.possessionStatus}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-5 pt-0 flex items-center gap-2">
                  <button
                    onClick={() => setActivePropertyModal(prop)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors whitespace-nowrap"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  <button
                    onClick={() => onInquireProperty(prop.title)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-white bg-[#0A192F] hover:bg-[#132A4A] rounded-lg transition-colors whitespace-nowrap"
                  >
                    <span>Inquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal View */}
        <PropertyDetailModal
          property={activePropertyModal}
          onClose={() => setActivePropertyModal(null)}
          onInquire={(title) => onInquireProperty(title)}
        />
      </div>
    </section>
  );
};
