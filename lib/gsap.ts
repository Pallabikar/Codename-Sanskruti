import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  
  // Set default scroll values
  ScrollTrigger.config({
    limitCallbacks: true,
  });
}

export { gsap, ScrollTrigger };
