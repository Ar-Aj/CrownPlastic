'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

/**
 * VIDEO SPECIFICATIONS (for AI-generated clips):
 * - Duration: 5-10 seconds each, looped
 * - Codec: H.264 (MP4) or VP9 (WebM)
 * - Resolution: 720p max desktop, 480p mobile
 * - File size: Target < 2-3 MB per clip
 * - Frame rate: 24-30fps
 */

export interface VideoScene {
  id: string;
  label: string;
  src: string;
  poster?: string;
}

export const heroScenes: VideoScene[] = [
  {
    id: 'main',
    label: 'Factory Excellence',
    src: '/videos/hero-main.mp4',
    poster: '/images/hero-poster-main.jpg',
  },
  {
    id: 'water',
    label: 'Water & Drainage',
    src: '/videos/hero-water.mp4',
    poster: '/images/hero-poster-water.jpg',
  },
  {
    id: 'electric',
    label: 'Ducting & Conduit',
    src: '/videos/hero-electric.mp4',
    poster: '/images/hero-poster-electric.jpg',
  },
];

interface UseHeroVideoOptions {
  scenes: VideoScene[];
  defaultSceneId?: string;
}

export function useHeroVideo({ scenes, defaultSceneId = 'main' }: UseHeroVideoOptions) {
  const [activeSceneId, setActiveSceneId] = useState(defaultSceneId);
  const [isInView, setIsInView] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeScene = scenes.find((s) => s.id === activeSceneId) || scenes[0];

  // IntersectionObserver for lazy loading
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Handle scene switching
  const switchScene = useCallback((sceneId: string) => {
    if (sceneId === activeSceneId) return;

    const video = videoRef.current;
    if (video) {
      video.pause();
      setIsVideoLoaded(false);
    }

    setActiveSceneId(sceneId);
  }, [activeSceneId]);

  // Play video when scene changes and in view
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isInView) return;

    // Delay video loading to ensure poster LCP completes first
    const loadTimer = setTimeout(() => {
      video.load();
      
      const playVideo = async () => {
        try {
          await video.play();
        } catch {
          // Autoplay blocked - will show poster instead
          console.log('Autoplay blocked, showing poster');
        }
      };

      video.addEventListener('loadeddata', () => {
        setIsVideoLoaded(true);
        playVideo();
      });
    }, 100); // Small delay to prioritize poster rendering

    return () => {
      clearTimeout(loadTimer);
      video.pause();
    };
  }, [activeSceneId, isInView]);

  return {
    activeScene,
    activeSceneId,
    switchScene,
    isInView,
    isVideoLoaded,
    videoRef,
    containerRef,
    scenes,
  };
}
