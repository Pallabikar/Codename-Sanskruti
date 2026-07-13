import dynamic from 'next/dynamic';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroVideo from '@/components/sections/HeroVideo';

// Dynamically import below-the-fold components to optimize initial JS load
const TempleEntrance = dynamic(() => import('@/components/sections/TempleEntrance'));
const KalingaArchitecture = dynamic(() => import('@/components/sections/KalingaArchitecture'));
const JaaliFacade = dynamic(() => import('@/components/sections/JaaliFacade'));
const PattachitraReception = dynamic(() => import('@/components/sections/PattachitraReception'));
const JagannathCulture = dynamic(() => import('@/components/sections/JagannathCulture'));
const CourtyardLiving = dynamic(() => import('@/components/sections/CourtyardLiving'));
const EarthTonePalette = dynamic(() => import('@/components/sections/EarthTonePalette'));
const MandapPavilions = dynamic(() => import('@/components/sections/MandapPavilions'));
const ClosingNarrative = dynamic(() => import('@/components/sections/ClosingNarrative'));
const CTAContactForm = dynamic(() => import('@/components/sections/CTAContactForm'));

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
