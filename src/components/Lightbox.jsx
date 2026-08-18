import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function Lightbox({
  images = [],
  currentIndex = 0,
  isOpen = false,
  onClose,
  onPrev,
  onNext,
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll when lightbox is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !images || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal-deep/95 backdrop-blur-md"
        onClick={onClose}
      >
        {/* Top Control Bar */}
        <div
          className="absolute top-0 inset-x-0 h-20 px-6 md:px-12 flex items-center justify-between z-50 bg-gradient-to-b from-charcoal-deep/80 to-transparent"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3">
            <span className="text-eyebrow text-gold">
              {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </span>
            {currentImage.tag && (
              <span className="hidden sm:inline-block text-xs uppercase tracking-wider text-ivory/50 border border-line px-2.5 py-0.5">
                {currentImage.tag}
              </span>
            )}
          </div>

          <button
            onClick={onClose}
            className="p-2.5 text-ivory/70 hover:text-gold hover:bg-ivory/5 transition-all duration-200"
            aria-label="Close Lightbox"
          >
            <X size={24} />
          </button>
        </div>

        {/* Prev / Next Nav Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 text-ivory/70 hover:text-gold hover:bg-charcoal/80 border border-line z-50 transition-all duration-200"
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 text-ivory/70 hover:text-gold hover:bg-charcoal/80 border border-line z-50 transition-all duration-200"
              aria-label="Next Image"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Image Display & Caption Container */}
        <div
          className="relative max-w-6xl max-h-[85vh] w-full mx-4 md:mx-16 flex flex-col items-center justify-center p-2"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div
            key={currentImage.src}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="relative flex items-center justify-center max-h-[72vh] overflow-hidden"
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt || currentImage.title || 'Sri Ram Farm House'}
              className="max-h-[70vh] w-auto max-w-full object-contain shadow-2xl border border-line/40"
            />
          </motion.div>

          {/* Caption */}
          {(currentImage.title || currentImage.caption) && (
            <motion.div
              key={currentImage.src + '-caption'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.3 }}
              className="mt-4 text-center max-w-2xl px-4"
            >
              {currentImage.title && (
                <h3 className="font-display italic text-lg md:text-xl text-ivory">
                  {currentImage.title}
                </h3>
              )}
              {currentImage.caption && (
                <p className="font-body text-xs md:text-sm text-ivory/60 mt-1 leading-relaxed">
                  {currentImage.caption}
                </p>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
