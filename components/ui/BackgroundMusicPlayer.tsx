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
      {/* Non-blocking Audio Element (preload metadata for instant website loading) */}
      <audio
        ref={audioRef}
        src="/Codename-Cascade-Music.mp3"
        loop
        preload="metadata"
      />

      {/* Music Control Toggle Button */}
      <button
        onClick={toggleMusic}
        className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer select-none backdrop-blur-md ${
          isPlaying
            ? 'bg-brand-orange/90 text-white border-brand-orange/40 shadow-lg shadow-brand-orange/20'
            : 'bg-black/40 text-white/80 border-white/20 hover:bg-black/60 hover:text-white'
        }`}
        aria-label={isPlaying ? 'Mute Background Music' : 'Play Background Music'}
        title={isPlaying ? 'Mute Background Music' : 'Play Background Music'}
      >
        {isPlaying ? (
          <>
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-200 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <Volume2 className="w-4 h-4 text-white animate-pulse shrink-0" />
            <span className="font-sans text-[11px]">Music ON</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-white/70 shrink-0" />
            <span className="font-sans text-[11px] text-white/80">Music OFF</span>
          </>
        )}
      </button>
    </>
  );
}
