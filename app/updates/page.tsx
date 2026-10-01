import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { constructMetadata } from '@/lib/metadata';
import { 
  Building2, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Compass, 
  Home, 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  Phone
} from 'lucide-react';

export const metadata: Metadata = constructMetadata({
  title: 'Motwani Construction | Residential Projects in Bhubaneswar',
  description: 'Explore Motwani Construction residential projects in Bhubaneswar, offering modern homes, thoughtful planning, contemporary amenities and Odisha-inspired architecture.',
  path: '/updates',
});

const KEY_CONSIDERATIONS = [
  'Thoughtfully planned residential spaces',
  'Modern architectural design',
  'Comfortable home layouts',
  'Lifestyle-oriented amenities',
  'Open and landscaped areas',
  'Convenient locations',
  'Connectivity to important parts of Bhubaneswar',
  'Residential environments designed for families',
];

const EVALUATION_FACTORS = [
  'Project location',
  'Connectivity',
  'Apartment configuration',
  'Construction specifications',
  'Amenities',
  'Open spaces',
  'Developer information',
  'Applicable RERA registration and approvals',
  'Payment plans and associated costs',
];

export default function UpdatesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-brand-cream text-brand-charcoal selection:bg-brand-orange selection:text-white">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-b from-brand-charcoal via-brand-charcoal-light to-brand-charcoal text-white overflow-hidden">
          {/* Subtle Background Pattern & Glow */}
          <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#E85C0D_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-brand-orange text-xs font-semibold tracking-wider uppercase mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Company Updates & Insights</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight font-medium">
              Motwani Construction: Building Modern Homes in Bhubaneswar
            </h1>

            <p className="text-base md:text-lg text-gray-300 leading-relaxed font-light mb-8 max-w-3xl">
              Motwani Construction is a growing name in the residential real estate sector in Bhubaneswar, Odisha, with a focus on creating thoughtfully planned homes for modern families.
            </p>

            <div className="p-6 md:p-8 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 text-gray-200 text-sm md:text-base leading-relaxed">
              As Bhubaneswar continues to expand, homebuyers are looking for residential projects that combine location, thoughtful planning, modern amenities, comfortable living spaces and long-term value. Motwani Construction aims to address these expectations through residential developments designed around contemporary lifestyles.
            </div>
          </div>
        </section>

        {/* Content Container */}
        <div className="max-w-5xl mx-auto px-6 pt-12 md:pt-16 space-y-16 md:space-y-24">

          {/* Section 1: About Motwani Construction */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-orange">
                <Building2 className="w-4 h-4" />
                <span>Overview</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif text-brand-charcoal">
                About Motwani Construction
              </h2>
              <div className="w-16 h-0.5 bg-brand-orange" />
              <p className="text-gray-700 leading-relaxed text-sm md:text-base pt-2">
                Motwani Construction focuses on residential development with an emphasis on planning, design and the evolving needs of homebuyers.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                The company's approach combines contemporary architecture with functional residential spaces, creating homes that are designed for comfortable everyday living.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                With Bhubaneswar developing rapidly across several residential corridors, Motwani Construction projects are positioned to cater to families looking for modern homes in and around the city's growing neighbourhoods.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-72 md:h-80 w-full rounded-xl overflow-hidden shadow-xl border border-brand-terracotta/10 group">
                <Image
                  src="/images/jaali-facade.jpg"
                  alt="Motwani Construction Modern Architecture in Bhubaneswar"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-4 right-4 text-[11px] font-medium text-white/90 drop-shadow">
                  Modern architectural design blended with regional nuances.
                </span>
              </div>
            </div>
          </section>

          {/* Section 2: Motwani Construction and Modern Residential Living */}
          <section className="space-y-8">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-orange">
                <Home className="w-4 h-4" />
                <span>Lifestyle Concept</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif text-brand-charcoal">
                Motwani Construction and Modern Residential Living
              </h2>
              <div className="w-16 h-0.5 bg-brand-orange" />
              <p className="text-gray-700 leading-relaxed text-sm md:text-base pt-2">
                The concept of a modern home has changed significantly. Homebuyers today consider more than just the size of an apartment. They also look at connectivity, lifestyle amenities, open spaces, design, convenience and the overall quality of the residential environment.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                This is why Motwani Construction focuses on creating residential developments where architecture and functionality work together.
              </p>
            </div>

            {/* Key Considerations Grid */}
            <div className="bg-white p-6 md:p-8 rounded-xl border border-brand-terracotta/10 shadow-sm space-y-6">
              <h3 className="text-lg font-serif font-semibold text-brand-charcoal border-b border-brand-terracotta/10 pb-3">
                Key Considerations for Modern Living
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {KEY_CONSIDERATIONS.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-brand-cream/60 hover:bg-brand-sandstone-light transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-lg border border-brand-terracotta/10 group">
              <Image
                src="/images/courtyard-living.jpg"
                alt="Modern Residential Living and Landscaped Open Spaces"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-orange">Landscaped Living</span>
                <p className="text-sm font-light text-gray-200">Open spaces and lifestyle-oriented amenities designed around family comfort.</p>
              </div>
            </div>
          </section>

          {/* Section 3: Inspired by Odisha's Heritage */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-brand-charcoal text-white p-8 md:p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-2xl pointer-events-none" />

            <div className="lg:col-span-7 space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-orange">
                <Compass className="w-4 h-4" />
                <span>Cultural Identity</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif text-white">
                Inspired by Odisha's Heritage
              </h2>
              <div className="w-16 h-0.5 bg-brand-orange" />
              <p className="text-gray-300 leading-relaxed text-sm md:text-base pt-2 font-light">
                Bhubaneswar is a modern and rapidly developing city, but it also has a strong connection with Odisha's architectural and cultural heritage.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base font-light">
                The temples of Odisha, Kalinga architecture, traditional craftsmanship and distinctive artistic details provide a unique source of inspiration for contemporary design.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base font-light">
                Motwani Construction brings elements of this regional identity into its residential vision, creating spaces where modern architecture can coexist with the cultural character of Odisha.
              </p>
              <p className="text-brand-sandstone-light leading-relaxed text-sm md:text-base font-medium pt-2 border-t border-white/10">
                This approach is particularly reflected in projects such as Codename Sanskruti, where the concept connects contemporary residential living with Odisha-inspired architectural elements.
              </p>
            </div>

            <div className="lg:col-span-5 relative z-10">
              <div className="relative h-72 md:h-80 w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl group">
                <Image
                  src="/images/kalinga-architecture.jpg"
                  alt="Kalinga Architecture and Odisha Heritage Inspiration"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
              </div>
            </div>
          </section>

          {/* Section 4: Codename Sanskruti Spotlight */}
          <section className="bg-gradient-to-r from-brand-orange/10 via-brand-sandstone-light to-brand-orange/10 p-8 md:p-10 rounded-2xl border border-brand-orange/20 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-terracotta">
              <Layers className="w-4 h-4" />
              <span>Flagship Project</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-brand-charcoal">
              Codename Sanskruti
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Codename Sanskruti represents a distinctive residential concept from Motwani Construction. The project brings together modern apartment living and design elements inspired by Odisha's cultural heritage.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              The idea behind Sanskruti is simple: a home should provide modern comfort while retaining a connection with the place and culture in which it exists. Through its design language and residential planning, the project seeks to create a contemporary living environment with a distinctly Odisha-inspired identity.
            </p>
            <div className="pt-2">
              <Link 
                href="/ongoing-projects/codename-sanskruti"
                className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase bg-brand-orange text-white px-6 py-3 rounded-sm hover:bg-brand-terracotta transition-colors shadow-md"
              >
                <span>Explore Codename Sanskruti</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>

          {/* Section 5: Motwani Construction Projects in Bhubaneswar */}
          <section className="space-y-8">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-orange">
                <Building2 className="w-4 h-4" />
                <span>Portfolio</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif text-brand-charcoal">
                Motwani Construction Projects in Bhubaneswar
              </h2>
              <div className="w-16 h-0.5 bg-brand-orange" />
              <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-3xl">
                Bhubaneswar is witnessing significant residential development as the city expands towards emerging locations and important connectivity corridors. Motwani Construction projects are part of this evolving residential landscape, offering homebuyers opportunities to explore contemporary apartments designed for modern family living.
              </p>
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="bg-white p-6 rounded-xl border border-brand-terracotta/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange font-bold text-sm">
                    01
                  </div>
                  <h3 className="text-xl font-serif text-brand-charcoal font-semibold group-hover:text-brand-orange transition-colors">
                    Codename Sanskruti
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    A residential project inspired by Odisha's cultural and architectural heritage, combining contemporary homes with a strong sense of regional identity.
                  </p>
                </div>
                <div className="pt-6">
                  <Link 
                    href="/ongoing-projects/codename-sanskruti"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-brand-terracotta tracking-wider uppercase"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-6 rounded-xl border border-brand-terracotta/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange font-bold text-sm">
                    02
                  </div>
                  <h3 className="text-xl font-serif text-brand-charcoal font-semibold group-hover:text-brand-orange transition-colors">
                    Motwani Anantam
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    A residential development designed around spacious family living, modern amenities and contemporary architecture.
                  </p>
                </div>
                <div className="pt-6">
                  <Link 
                    href="/ongoing-projects/motwani-anantam"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-brand-terracotta tracking-wider uppercase"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white p-6 rounded-xl border border-brand-terracotta/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow group">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange font-bold text-sm">
                    03
                  </div>
                  <h3 className="text-xl font-serif text-brand-charcoal font-semibold group-hover:text-brand-orange transition-colors">
                    Motwani Anandam
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    A residential project focused on comfortable modern living with thoughtfully planned homes and lifestyle-oriented spaces.
                  </p>
                </div>
                <div className="pt-6">
                  <Link 
                    href="/ongoing-projects/motwani-anandam"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-brand-terracotta tracking-wider uppercase"
                  >
                    <span>View Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-600 italic">
              Each project has its own design concept and location advantages, giving homebuyers different options based on their individual requirements.
            </p>

            {/* Image 4 */}
            <div className="relative h-64 md:h-80 w-full rounded-xl overflow-hidden shadow-lg border border-brand-terracotta/10 group">
              <Image
                src="/images/anandam-hero.jpg"
                alt="Motwani Construction Residential Projects Portfolio in Bhubaneswar"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 900px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </section>

          {/* Section 6: Why Location Matters When Buying a Home */}
          <section className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-orange">
              <MapPin className="w-4 h-4" />
              <span>Location Strategy</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-brand-charcoal">
              Why Location Matters When Buying a Home
            </h2>
            <div className="w-16 h-0.5 bg-brand-orange" />
            <p className="text-gray-700 leading-relaxed text-sm md:text-base pt-2">
              Location remains one of the most important factors when purchasing residential property. A well-connected location can provide easier access to workplaces, educational institutions, healthcare facilities, shopping destinations and major transportation routes.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              As Bhubaneswar continues to grow, developing residential corridors are attracting increasing interest from families and property buyers.
            </p>
            <div className="p-5 bg-amber-50 border-l-4 border-brand-orange text-xs md:text-sm text-gray-800 leading-relaxed rounded-r-md">
              When evaluating a Motwani Construction property, buyers should consider the project's location, connectivity, surrounding infrastructure, amenities and applicable project documentation before making a purchase decision.
            </div>
          </section>

          {/* Section 7: Homes Designed for Families */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative h-72 md:h-80 w-full rounded-xl overflow-hidden shadow-xl border border-brand-terracotta/10 group">
                <Image
                  src="/images/earth-palette.jpg"
                  alt="Homes Designed for Families in Bhubaneswar"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 450px"
                />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-orange">
                <Home className="w-4 h-4" />
                <span>Family Centric</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif text-brand-charcoal">
                Homes Designed for Families
              </h2>
              <div className="w-16 h-0.5 bg-brand-orange" />
              <p className="text-gray-700 leading-relaxed text-sm md:text-base pt-2">
                A home should support the way a family lives. From the layout of bedrooms and living areas to natural light, ventilation, common spaces and recreational facilities, residential planning can have a significant impact on everyday comfort.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Motwani Construction's residential philosophy focuses on combining these practical requirements with contemporary design.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base font-medium text-brand-terracotta">
                The objective is to create homes that are comfortable today and remain relevant as families grow and lifestyles change.
              </p>
            </div>
          </section>

          {/* Section 8: A Contemporary Vision for Bhubaneswar */}
          <section className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-orange">
              <Sparkles className="w-4 h-4" />
              <span>Urban Vision</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-brand-charcoal">
              A Contemporary Vision for Bhubaneswar
            </h2>
            <div className="w-16 h-0.5 bg-brand-orange" />
            <p className="text-gray-700 leading-relaxed text-sm md:text-base pt-2">
              Bhubaneswar is developing into a major urban centre in eastern India. With expanding infrastructure and new residential communities, the city's real estate landscape is continuing to evolve.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              For developers, this creates an opportunity to create homes that respond to changing expectations while remaining connected to the city's unique identity.
            </p>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base font-medium">
              Motwani Construction aims to contribute to this changing residential landscape through projects that combine modern design, functional planning and an appreciation of Odisha's architectural character.
            </p>
          </section>

          {/* Section 9: Choosing the Right Home */}
          <section className="bg-white p-6 md:p-10 rounded-2xl border border-brand-terracotta/10 shadow-sm space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-orange">
                <ShieldCheck className="w-4 h-4" />
                <span>Buyer Checklist</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-serif text-brand-charcoal">
                Choosing the Right Home
              </h2>
              <p className="text-sm text-gray-600">
                Buying a home is an important decision. Before selecting any residential project, prospective buyers should evaluate factors such as:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {EVALUATION_FACTORS.map((factor, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-md bg-brand-cream text-xs font-semibold text-brand-charcoal border border-brand-terracotta/5">
                  <div className="w-2 h-2 rounded-full bg-brand-orange shrink-0" />
                  <span>{factor}</span>
                </div>
              ))}
            </div>

            <p className="text-xs md:text-sm text-gray-500 italic pt-2">
              Conducting proper research and reviewing the latest project documentation can help buyers make an informed decision.
            </p>
          </section>

          {/* Section 10: The Motwani Construction Vision */}
          <section className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-brand-charcoal via-brand-charcoal-light to-black text-white space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-orange">
                <Sparkles className="w-4 h-4" />
                <span>Corporate Vision</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-serif text-white">
                The Motwani Construction Vision
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base font-light">
                The future of residential development is about creating more than individual apartments. It is about developing spaces where people can live comfortably, families can grow and communities can develop.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm md:text-base font-light">
                With its focus on residential development in Bhubaneswar, Motwani Construction is working towards creating homes that combine contemporary lifestyles with a connection to Odisha's distinctive architectural and cultural identity.
              </p>
              <p className="text-brand-orange font-medium text-base md:text-lg pt-2">
                From modern residential planning to heritage-inspired design, the vision is to create homes that are functional, comfortable and meaningful.
              </p>
            </div>
          </section>

          {/* Section 11: Explore Motwani Construction / CTA */}
          <section className="text-center py-10 px-6 rounded-2xl bg-white border border-brand-terracotta/20 shadow-md space-y-6">
            <h2 className="text-2xl md:text-3xl font-serif text-brand-charcoal">
              Explore Motwani Construction
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              If you are searching for Motwani Construction projects in Bhubaneswar, explore the available residential developments and learn more about their locations, configurations, amenities and project features.
            </p>
            <p className="text-sm md:text-base font-semibold text-brand-orange max-w-2xl mx-auto">
              Discover a new approach to modern residential living where contemporary design meets the character of Odisha.
            </p>

            <div className="py-2 text-base md:text-lg font-serif font-bold text-brand-charcoal tracking-wide border-y border-brand-terracotta/10 max-w-xl mx-auto py-4">
              Motwani Construction — Creating homes for modern families in Bhubaneswar.
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-orange text-white px-8 py-3.5 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-brand-terracotta transition-colors shadow-lg shadow-brand-orange/20"
              >
                <span>Browse All Projects</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="tel:+919777979501"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-brand-charcoal text-brand-charcoal px-8 py-3.5 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-brand-charcoal hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Contact Sales (+91 97779 79501)</span>
              </Link>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
