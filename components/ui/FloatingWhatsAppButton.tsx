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
        className="group relative flex items-center justify-center w-12 h-12 bg-[#25D366] hover:bg-[#1EBE57] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 transform hover:scale-110 active:scale-95 border border-white/20 cursor-pointer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp (+91 94371 70733)"
      >
        {/* Authentic WhatsApp Vector SVG Icon */}
        <svg
          className="w-7 h-7 fill-white shrink-0"
          viewBox="0 0 24 24"
        >
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.758.459 3.474 1.33 4.988l-1.413 5.161 5.281-1.385c1.458.796 3.104 1.215 4.79 1.216h.004c5.505 0 9.988-4.478 9.989-9.984.001-2.668-1.034-5.176-2.919-7.062-1.885-1.886-4.393-2.923-7.062-2.923zm5.952 14.34c-.252.71-1.464 1.353-2.018 1.415-.515.057-1.186.082-3.447-.852-2.895-1.196-4.757-4.148-4.901-4.34-.144-.192-1.171-1.562-1.171-2.981 0-1.419.743-2.117 1.008-2.406.265-.288.577-.361.769-.361.192 0 .385.002.553.01.18.008.421-.069.658.5.252.603.864 2.106.938 2.259.075.153.125.334.026.531-.099.197-.15.321-.297.493-.147.172-.31.385-.443.518-.147.147-.301.309-.13.603.172.294.763 1.251 1.637 2.03 1.125.999 2.073 1.309 2.367 1.456.294.147.466.123.638-.073.172-.196.738-.857.935-1.151.197-.294.393-.246.661-.147.268.098 1.704.803 1.998.948.294.145.49.217.562.339.072.122.072.709-.18 1.419z"/>
        </svg>
      </a>
    </div>
  );
}
