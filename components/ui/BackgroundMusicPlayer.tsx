'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function BackgroundMusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const savedMutePreference = localStorage.getItem('siteMusicMuted');
    const isExplicitlyMuted = savedMutePreference === 'true';

    const handleFirstInteraction = () => {
      if (audioRef.current && !hasInteracted) {
        setHasInteracted(true);
        if (!isExplicitlyMuted) {
          audioRef.current
            .play()
            .then(() => setIsPlaying(true))
            .catch((err) => console.log('Audio autoplay handled:', err));
        }
      }
    };

    window.addEventListener('click', handleFirstInteraction, { once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { once: true });
    window.addEventListener('scroll', handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };
  }, [hasInteracted]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      localStorage.setItem('siteMusicMuted', 'true');
    } else {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          localStorage.setItem('siteMusicMuted', 'false');
        })
        .catch((err) => console.error('Audio play error:', err));
    }
  };

  return (
    <>
      {/* Non-blocking Audio Element (preload metadata for instant page loading) */}
      <audio
        ref={audioRef}
        src="/Codename-Cascade-Music.mp3"
        loop
        preload="metadata"
      />

      {/* Floating Music Control Icon Only (Right Side, Positioned Above Back to Top) */}
      <div className="fixed bottom-34 right-6 z-40">
        <button
          onClick={toggleMusic}
          className={`group relative flex items-center justify-center w-12 h-12 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 active:scale-95 border border-white/20 cursor-pointer ${
            isPlaying
              ? 'bg-brand-orange hover:bg-brand-terracotta text-white shadow-brand-orange/40'
              : 'bg-brand-charcoal/90 text-white/80 hover:bg-brand-charcoal hover:text-white'
          }`}
          aria-label={isPlaying ? 'Mute Background Music' : 'Play Background Music'}
          title={isPlaying ? 'Music ON (Click to Mute)' : 'Music OFF (Click to Play)'}
        >
          {isPlaying ? (
            <Volume2 className="w-5 h-5 text-white animate-pulse shrink-0" />
          ) : (
            <VolumeX className="w-5 h-5 text-white/80 shrink-0" />
          )}
        </button>
      </div>
    </>
  );
}
