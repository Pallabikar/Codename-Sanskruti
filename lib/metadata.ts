import { Metadata } from 'next';

const BASE_URL = 'https://codenamesanskruti.com';

const DEFAULT_METADATA = {
  title: 'Sanskruti Bhubaneswar | Premium 2, 3 & 4 BHK Homes',
  description: 'Find your perfect home at Sanskruti, Bhubaneswar. Premium 2, 3 & 4 BHK apartments with world-class amenities, strategic location, and exclusive launch offers. Book a free site visit today.',
  keywords: [
    'Kalinga architecture apartments Bhubaneswar',
    'temple-inspired residences Odisha',
    'Pattachitra themed luxury homes',
    'Odisha heritage architecture apartments',
    'luxury flats in Bhubaneswar',
    'Motwani Constructions Bhubaneswar',
    'Codename Sanskruti'
  ],
  ogImage: `${BASE_URL}/images/og-preview.jpg`,
};

interface MetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  path: string;
  ogImage?: string;
}

export function constructMetadata({
  title,
  description,
  keywords = [],
  path,
  ogImage = DEFAULT_METADATA.ogImage,
}: MetadataProps): Metadata {
  const pageTitle = title || DEFAULT_METADATA.title;
  
  const pageDesc = description || DEFAULT_METADATA.description;
  const pageKeywords = Array.from(new Set([...DEFAULT_METADATA.keywords, ...keywords]));
  const canonicalUrl = `${BASE_URL}${path}`;

  return {
    title: pageTitle,
    description: pageDesc,
    keywords: pageKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: canonicalUrl,
      siteName: 'Codename Sanskruti',
      locale: 'en_IN',
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title || 'Codename Sanskruti - Premium Residences in Bhubaneswar',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDesc,
      images: [ogImage],
      creator: '@motwaniconstructions', // Example handle
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
