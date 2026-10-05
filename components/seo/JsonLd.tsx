import React from 'react';

export default function JsonLd() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.sanskruti.ind.in';

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateListing",
        "@id": `${baseUrl}/#listing`,
        "name": "Codename Sanskruti by Motwani Constructions",
        "identifier": "RP/26/2026/01587",
        "description": "A luxury residential development in Bhubaneswar, Odisha inspired by traditional temple architecture and regional crafts.",
        "url": baseUrl,
        "image": `${baseUrl}/images/og-preview.jpg`,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Siula, near Uttara square, Beside NH 316",
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
        "@id": `${baseUrl}/#organization`,
        "name": "Motwani Constructions",
        "url": baseUrl,
        "logo": `${baseUrl}/logo.png`,
        "image": `${baseUrl}/images/og-preview.jpg`,
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
