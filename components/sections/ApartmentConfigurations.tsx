'use client';

import React, { useState } from 'react';
import { Home, Compass, ShieldCheck, Maximize2, LayoutGrid, CheckCircle } from 'lucide-react';
import BookSiteVisitModal from '@/components/ui/BookSiteVisitModal';

export interface ConfigurationItem {
  type: string;
  area?: string;
  sba?: string;
  flatArea?: string;
  ca?: string;
  facing?: string;
  balcony?: string;
  layout?: string;
}

interface ApartmentConfigurationsProps {
  configurations: ConfigurationItem[];
}

export default function ApartmentConfigurations({ configurations }: ApartmentConfigurationsProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedConfig, setSelectedConfig] = useState<string>('');

  const handleRequestFloorPlan = (configType: string) => {
    setSelectedConfig(configType);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {configurations.map((c, idx) => (
          <div key={idx} className="bg-white p-6 border border-brand-terracotta/10 shadow-sm rounded-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="text-xs text-brand-orange font-bold uppercase tracking-widest block mb-2">Signature Suite</span>
              <h3 className="font-serif text-lg font-bold text-brand-charcoal mb-4 border-b border-brand-terracotta/10 pb-2">{c.type}</h3>
              
              <ul className="space-y-2.5 text-xs text-gray-600 mb-6">
                {c.sba && (
                  <li className="flex items-center gap-2">
                    <Maximize2 className="w-4 h-4 text-brand-orange shrink-0" />
                    <span><strong>SBA:</strong> {c.sba}</span>
                  </li>
                )}
                {c.flatArea && (
                  <li className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-brand-terracotta shrink-0" />
                    <span><strong>Flat Area:</strong> {c.flatArea}</span>
                  </li>
                )}
                {c.ca && (
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span><strong>Carpet Area (CA):</strong> {c.ca}</span>
                  </li>
                )}
                {c.area && !c.sba && (
                  <li className="flex items-center gap-2">
                    <Home className="w-4 h-4 text-brand-terracotta shrink-0" />
                    <span><strong>Area:</strong> {c.area}</span>
                  </li>
                )}
                {c.facing && (
                  <li className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-brand-terracotta shrink-0" />
                    <span><strong>Vastu Facing:</strong> {c.facing}</span>
                  </li>
                )}
                {c.balcony && (
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-brand-terracotta shrink-0" />
                    <span><strong>Balconies:</strong> {c.balcony}</span>
                  </li>
                )}
                {c.layout && (
                  <li className="flex items-start gap-2 pt-2 border-t border-dashed border-gray-200">
                    <LayoutGrid className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span><strong>Layout:</strong> {c.layout}</span>
                  </li>
                )}
              </ul>
            </div>

            <button
              type="button"
              onClick={() => handleRequestFloorPlan(c.type)}
              className="w-full text-center border border-brand-charcoal text-brand-charcoal hover:bg-brand-charcoal hover:text-white py-2.5 rounded-sm text-xs font-bold tracking-widest uppercase transition-colors duration-300 cursor-pointer"
            >
              Request Floor Plan
            </button>
          </div>
        ))}
      </div>

      <BookSiteVisitModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialConfig={selectedConfig}
      />
    </>
  );
}
