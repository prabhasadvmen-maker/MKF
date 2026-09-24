import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Eye, Play } from 'lucide-react';

const Gallery = () => {
  const [media, setMedia] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const imageModules = import.meta.glob('/src/assets/images/*.{jpeg,jpg,png,webp}', { eager: true });
    const videoModules = import.meta.glob('/src/assets/images/*.{mp4,webm}', { eager: true });

    const images = Object.entries(imageModules).map(([path, mod]) => ({
      src: mod.default,
      type: 'image',
      name: path,
    }));

    const videos = Object.entries(videoModules).map(([path, mod]) => ({
      src: mod.default,
      type: 'video',
      name: path,
    }));

    setMedia([...images, ...videos]);
  }, []);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextMedia = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const prevMedia = (e) => {
    e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  return (
    <section id="gallery" className="py-24 bg-[var(--color-primary)]">
      <div className="container mx-auto px-4 md:px-8">

        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[var(--color-dark-brown)] mb-4">
            OUR GALLERY
          </h2>
          <p className="text-[var(--color-dark-brown)]/80 text-lg md:text-xl font-light italic max-w-2xl mx-auto">
            "A glimpse into the MFK Studio experience."
          </p>
          <div className="w-24 h-[1px] bg-[var(--color-gold)] mx-auto mt-6" />
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
          {media.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden group cursor-pointer aspect-square bg-black/5"
              onClick={() => openLightbox(index)}
            >
              {item.type === 'image' ? (
                <img
                  src={item.src}
                  alt={`MFK Studio Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              ) : (
                <video
                  src={item.src}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  muted
                  playsInline
                  preload="metadata"
                />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-[var(--color-gold)]/0 group-hover:bg-[var(--color-gold)]/30 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="bg-white/95 text-[var(--color-dark-brown)] px-3 py-1.5 md:px-5 md:py-2 rounded-full font-medium tracking-wider text-[10px] md:text-sm flex items-center gap-1.5 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-400">
                  {item.type === 'video' ? <Play size={12} className="md:w-[15px] md:h-[15px]" /> : <Eye size={12} className="md:w-[15px] md:h-[15px]" />}
                  <span className="hidden sm:inline">{item.type === 'video' ? 'PLAY' : 'VIEW'}</span>
                </span>
              </div>

              {/* Video badge */}
              {item.type === 'video' && (
                <div className="absolute top-2 right-2 bg-black/60 text-white text-[9px] md:text-xs px-2 py-1 rounded-full flex items-center gap-1">
                  <Play size={8} className="md:w-[10px] md:h-[10px]" /> VIDEO
                </div>
              )}
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[110]"
              onClick={closeLightbox}
            >
              <X size={36} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 md:left-10 text-white/50 hover:text-white transition-colors z-[110] p-4 hidden sm:block"
              onClick={prevMedia}
            >
              <ChevronLeft size={48} />
            </button>

            {/* Media */}
            <div className="relative w-full max-w-5xl max-h-[90vh] px-4 md:px-20 flex justify-center items-center">
              <AnimatePresence mode="wait">
                {media[selectedIndex]?.type === 'image' ? (
                  <motion.img
                    key={selectedIndex}
                    src={media[selectedIndex].src}
                    alt={`Gallery ${selectedIndex + 1}`}
                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.35 }}
                    onClick={(e) => e.stopPropagation()}
                  />
                ) : (
                  <motion.video
                    key={selectedIndex}
                    src={media[selectedIndex]?.src}
                    className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
                    controls
                    autoPlay
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.35 }}
                    onClick={(e) => e.stopPropagation()}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Next */}
            <button
              className="absolute right-4 md:right-10 text-white/50 hover:text-white transition-colors z-[110] p-4 hidden sm:block"
              onClick={nextMedia}
            >
              <ChevronRight size={48} />
            </button>

            {/* Mobile Controls */}
            <div className="absolute bottom-8 left-0 w-full flex justify-center gap-12 sm:hidden z-[110]">
              <button className="text-white/70 hover:text-white p-2" onClick={prevMedia}>
                <ChevronLeft size={36} />
              </button>
              <button className="text-white/70 hover:text-white p-2" onClick={nextMedia}>
                <ChevronRight size={36} />
              </button>
            </div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm hidden sm:block">
              {selectedIndex + 1} / {media.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
