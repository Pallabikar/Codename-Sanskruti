import React from 'react';

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateListing",
        "@id": "https://codenamesanskruti.com/#listing",
        "name": "Codename Sanskruti by Motwani Constructions",
        "description": "A luxury residential development in Bhubaneswar, Odisha inspired by traditional temple architecture and regional crafts.",
        "url": "https://codenamesanskruti.com",
        "image": "https://codenamesanskruti.com/images/og-preview.jpg",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bhubaneswar",
          "addressRegion": "Odisha",
          "addressCountry": "IN"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "On Request",
          "availability": "https://schema.org/PreOrder",
          "validFrom": "2026-07-12"
        }
      },
      {
        "@type": "RealEstateAgent",
        "@id": "https://codenamesanskruti.com/#organization",
        "name": "Motwani Constructions",
        "url": "https://codenamesanskruti.com",
        "logo": "https://codenamesanskruti.com/logo.png",
        "image": "https://codenamesanskruti.com/images/og-preview.jpg",
        "telephone": "+91-9777979501",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bhubaneswar",
          "addressRegion": "Odisha",
          "addressCountry": "IN"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
