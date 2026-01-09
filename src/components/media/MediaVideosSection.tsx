'use client';

import { useState } from 'react';
import Image from 'next/image';
// Note: Using inline SVG for video icon since 'video' is not in Icon component

// ─────────────────────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────────────────────
export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnailSrc: string;
  videoSrc: string; // Will be actual MP4/stream URL later
  orientation: '9:16' | '16:9';
}

interface MediaVideosSectionProps {
  title: string;
  subtitle?: string;
  videos: VideoItem[];
}

// ─────────────────────────────────────────────────────────────
// Video Card Component
// ─────────────────────────────────────────────────────────────
function VideoCard({ video, onPlay }: { video: VideoItem; onPlay: (video: VideoItem) => void }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow group">
      {/* Thumbnail Area - 9:16 aspect ratio */}
      <div 
        className="relative bg-gradient-to-br from-primary/20 to-secondary/20 cursor-pointer"
        style={{ aspectRatio: '9/16', maxHeight: '400px' }}
        onClick={() => onPlay(video)}
      >
        {video.thumbnailSrc ? (
          <Image
            src={video.thumbnailSrc}
            alt={video.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
            <svg className="w-16 h-16 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Duration Badge (placeholder) */}
        <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
          1:30
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-gray-900 text-lg mb-2 line-clamp-2">
          {video.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {video.description}
        </p>
        <button
          onClick={() => onPlay(video)}
          className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
          Play Video
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Video Modal Component
// ─────────────────────────────────────────────────────────────
function VideoModal({ 
  video, 
  isOpen, 
  onClose 
}: { 
  video: VideoItem | null; 
  isOpen: boolean; 
  onClose: () => void;
}) {
  if (!isOpen || !video) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="relative bg-black rounded-2xl overflow-hidden max-w-md w-full mx-4"
        style={{ aspectRatio: '9/16', maxHeight: '80vh' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video Player Placeholder */}
        {video.videoSrc ? (
          <video
            src={video.videoSrc}
            controls
            autoPlay
            className="w-full h-full object-contain"
            playsInline
          >
            Your browser does not support video playback.
          </video>
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <svg className="w-16 h-16 mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <p className="text-lg font-medium">{video.title}</p>
            <p className="text-sm text-white/60 mt-2">Video coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Main Section Component
// ─────────────────────────────────────────────────────────────
export default function MediaVideosSection({ title, subtitle, videos }: MediaVideosSectionProps) {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayVideo = (video: VideoItem) => {
    setActiveVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setActiveVideo(null);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {/* Video Grid - 2 columns for desktop, 1 for mobile */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {videos.map((video) => (
            <VideoCard 
              key={video.id} 
              video={video} 
              onPlay={handlePlayVideo}
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        video={activeVideo}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
