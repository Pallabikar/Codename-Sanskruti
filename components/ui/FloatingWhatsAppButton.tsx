'use client';

import React from 'react';

export default function FloatingWhatsAppButton() {
  const whatsappUrl = "https://wa.me/919437170733?text=Hello!%20I%20am%20interested%20in%20Codename%20Sanskruti.%20Please%20share%20more%20details.";

  return (
    <div className="fixed bottom-22 right-6 z-40">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-12 h-12 bg-[#25D366] hover:bg-[#1EBE57] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 transform hover:scale-110 active:scale-95 border border-white/20 cursor-pointer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp (+91 94371 70733)"
      >
        <span className="relative flex h-2.5 w-2.5 absolute top-0 right-0 -mt-0.5 -mr-0.5 z-10">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-200 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
        {/* Official WhatsApp Vector SVG Icon ONLY */}
        <svg
          className="w-6 h-6 fill-current shrink-0"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.099 4.017 4.142-1.086zm11.091-6.425c-.29-.145-1.714-.847-1.98-.943-.265-.096-.458-.145-.65.145-.194.291-.749.943-.919 1.137-.17.194-.34.218-.63.073-.29-.145-1.226-.452-2.336-1.441-.864-.77-1.447-1.721-1.617-2.012-.17-.29-.018-.447.127-.591.131-.13.29-.34.435-.509.145-.17.194-.291.291-.485.097-.194.049-.364-.024-.509-.073-.145-.65-1.566-.891-2.146-.235-.566-.475-.489-.65-.499-.17-.008-.364-.01-.558-.01-.194 0-.509.073-.776.364-.267.291-1.018.994-1.018 2.427 0 1.433 1.043 2.815 1.189 3.009.145.194 2.053 3.136 4.973 4.397.695.3 1.238.479 1.661.614.698.222 1.334.191 1.837.116.561-.084 1.714-.701 1.956-1.378.243-.678.243-1.26.17-.137-.073-.146-.363-.291-.653-.436z"/>
        </svg>
      </a>
    </div>
  );
}
