import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroVideo from '@/components/sections/HeroVideo';
import TempleEntrance from '@/components/sections/TempleEntrance';
import KalingaArchitecture from '@/components/sections/KalingaArchitecture';
import JaaliFacade from '@/components/sections/JaaliFacade';
import PattachitraReception from '@/components/sections/PattachitraReception';
import JagannathCulture from '@/components/sections/JagannathCulture';
import CourtyardLiving from '@/components/sections/CourtyardLiving';
import EarthTonePalette from '@/components/sections/EarthTonePalette';
import MandapPavilions from '@/components/sections/MandapPavilions';
import ClosingNarrative from '@/components/sections/ClosingNarrative';
import CTAContactForm from '@/components/sections/CTAContactForm';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        {/* Cinematic Intro Banner with dust fallback */}
        <HeroVideo />

        {/* 8 Scroll Storytelling Pillars */}
        <TempleEntrance />
        <KalingaArchitecture />
        <JaaliFacade />
        <PattachitraReception />
        <JagannathCulture />
        <CourtyardLiving />
        <EarthTonePalette />
        <MandapPavilions />

        {/* Morph Closing Narrative */}
        <ClosingNarrative />

        {/* Validated Enquiry Lead Capture Form */}
        <CTAContactForm />
      </main>
      <Footer />
    </>
  );
}
