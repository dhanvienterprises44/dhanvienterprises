import React, { useState } from 'react';
import { MapPin, TrendingUp, Navigation, Train, Building } from 'lucide-react';
import { BANGALORE_CORRIDORS } from '../data/mockData';

export const BangaloreCorridors: React.FC = () => {
  const [activeCorridorId, setActiveCorridorId] = useState(BANGALORE_CORRIDORS[0].id);

  const activeCorridor = BANGALORE_CORRIDORS.find((c) => c.id === activeCorridorId) || BANGALORE_CORRIDORS[0];

  return (
    <section id="corridors" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#B8933D] tracking-wider uppercase mb-2">
            Local Micro-Market Intelligence
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            South Bengaluru Growth Corridors We Specialize In
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Real estate values in Bangalore differ significantly by micro-locality, road width, Khata category, and proximity to arterial expressways. Explore the strategic zones where DHANVI Enterprises focuses its advisory.
          </p>
        </div>

        {/* Interactive Corridor Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {BANGALORE_CORRIDORS.map((corridor) => {
            const isActive = corridor.id === activeCorridorId;
            return (
              <button
                key={corridor.id}
                onClick={() => setActiveCorridorId(corridor.id)}
                className={`p-4 rounded-xl text-left transition-all border ${
                  isActive
                    ? 'bg-[#0A192F] text-white border-[#0A192F] shadow-sm'
                    : 'bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-100/60'
                }`}
              >
                <div className="flex items-center gap-1.5 text-xs font-medium text-[#D4AF37] mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="truncate">Bengaluru Sector</span>
                </div>
                <div className={`font-bold text-sm ${isActive ? 'text-white' : 'text-slate-900'}`}>
                  {corridor.name}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Corridor Deep Dive Display */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Overview & Insights */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-semibold text-[#B8933D] uppercase tracking-wide">
                  {activeCorridor.tagline}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {activeCorridor.name}
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {activeCorridor.overview}
              </p>

              {/* Demand Drivers */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#B8933D]" />
                  <span>Key Value Drivers in this Micro-Market:</span>
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                  {activeCorridor.demandDrivers.map((driver, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#B8933D]" />
                      <span>{driver}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Connectivity Highlights */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#B8933D]" />
                  <span>Connectivity & Infrastructure:</span>
                </span>
                <div className="flex flex-wrap gap-2 text-xs">
                  {activeCorridor.connectivity.map((conn, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 rounded-md border border-slate-200/80"
                    >
                      <Train className="w-3.5 h-3.5 text-slate-500" />
                      <span>{conn}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Pricing & Yield Benchmark */}
            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <div className="text-xs text-slate-500 font-medium">Average Capital Benchmark</div>
                <div className="text-2xl font-extrabold text-[#0A192F] tabular-nums mt-1">
                  {activeCorridor.avgRateSqFt}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Based on recent registry & vetted developer base prices.
                </div>
              </div>

              <div className="border-b border-slate-200 pb-4">
                <div className="text-xs text-slate-500 font-medium">Estimated Rental Yield</div>
                <div className="text-xl font-bold text-emerald-700 tabular-nums mt-1">
                  {activeCorridor.rentalYield}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  Consistent high demand from tech personnel in South Bangalore.
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-900 block">
                  DHANVI Enterprises On-Ground Advisory:
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We maintain direct contacts with original landowners, layout developers, and vetted builder societies in {activeCorridor.name} to secure transparent terms without middlemen inflation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
