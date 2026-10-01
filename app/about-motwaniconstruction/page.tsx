import React from 'react';
import type { Metadata } from 'next';
import UpdatesPage from '../updates/page';
import { constructMetadata } from '@/lib/metadata';

export const metadata: Metadata = constructMetadata({
  title: 'Motwani Construction | Residential Projects in Bhubaneswar',
  description: 'Explore Motwani Construction residential projects in Bhubaneswar, offering modern homes, thoughtful planning, contemporary amenities and Odisha-inspired architecture.',
  path: '/about-motwaniconstruction',
});

export default function AboutMotwaniConstructionPage() {
  return <UpdatesPage />;
}
