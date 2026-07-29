'use client';

import React, { useState } from 'react';
import { Home, Compass, ShieldCheck } from 'lucide-react';
import BookSiteVisitModal from '@/components/ui/BookSiteVisitModal';

export interface ConfigurationItem {
  type: string;
  area: string;
  facing: string;
  balcony: string;
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
          <div key={idx} className="bg-white p-6 border border-brand-terracotta/5 shadow-sm rounded-sm flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <span className="text-xs text-brand-orange font-bold uppercase tracking-widest block mb-2">Signature Suite</span>
              <h3 className="font-serif text-lg text-brand-charcoal mb-4">{c.type}</h3>
              
              <ul className="space-y-2.5 text-xs text-gray-500 mb-6">
                <li className="flex items-center gap-2">
                  <Home className="w-4 h-4 text-brand-terracotta shrink-0" />
                  <span>Area: {c.area}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-brand-terracotta shrink-0" />
                  <span>Vastu Facing: {c.facing}</span>
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-terracotta shrink-0" />
                  <span>Balconies: {c.balcony}</span>
                </li>
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
