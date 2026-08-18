import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2 } from 'lucide-react';

import SEO from '../components/SEO';
import Lightbox from '../components/Lightbox';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import { galleryCategories, galleryImages } from '../data/gallery';

export default function Gallery() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('cat') || 'All';
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  // Sync with searchParams if user changes query param
  useEffect(() => {
    const cat = searchParams.get('cat');
    if (cat && galleryCategories.includes(cat)) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      searchParams.delete('cat');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ cat: category });
    }
  };

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
  };

  return (
    <div className="pt-36 md:pt-44 pb-32 bg-[#FAF7F2] min-h-screen text-charcoal">
      {/* Dynamic SEO Tag */}
      <SEO />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-eyebrow text-gold-dim mb-3">
              <Sparkles size={14} />
              <span>Visual Portfolio</span>
            </div>
            <h1 className="font-display italic text-4xl sm:text-5xl md:text-6xl text-charcoal leading-tight">
              A Look Around The Estate
            </h1>
          </div>

          <p className="font-body text-charcoal/70 text-sm sm:text-base max-w-md leading-relaxed">
            High-resolution captures of our crystal banquet hall, 3-acre emerald lawns, private pool cabanas, and boutique accommodations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-14 border-b border-charcoal/10 pb-6">
          {galleryCategories.map((category) => {
            const isSelected = selectedCategory === category;
            const count =
              category === 'All'
                ? galleryImages.length
                : galleryImages.filter((i) => i.category === category).length;

            return (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`relative px-4 sm:px-5 py-2.5 text-eyebrow text-xs transition-all duration-300 flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-charcoal-deep text-gold border-charcoal-deep shadow-sm'
                    : 'bg-white text-charcoal/60 border-charcoal/10 hover:border-gold/50 hover:text-charcoal'
                }`}
              >
                <span>{category}</span>
                <span
                  className={`text-[0.65rem] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-gold text-charcoal-deep font-bold' : 'bg-charcoal/5 text-charcoal/50'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Image Grid with Smooth Layout Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id || image.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer bg-white border border-charcoal/10 shadow-sm overflow-hidden flex flex-col justify-between"
                onClick={() => openLightbox(index)}
              >
                {/* Photo Container */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <ImageWithSkeleton
                    src={image.src}
                    alt={image.alt}
                    aspectRatio="aspect-[4/3]"
                    className="group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/90 via-charcoal-deep/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                    <div className="flex justify-between items-center">
                      <span className="text-eyebrow text-gold text-[0.65rem] bg-charcoal-deep/80 px-2.5 py-1 border border-line">
                        {image.category}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-charcoal-deep/80 border border-line flex items-center justify-center text-ivory">
                        <Maximize2 size={14} className="text-gold" />
                      </span>
                    </div>

                    <div>
                      <h4 className="font-display italic text-lg text-ivory mb-1">
                        {image.title}
                      </h4>
                      <p className="font-body text-xs text-ivory/70 line-clamp-2">
                        {image.caption}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Static Caption Footer Below Image */}
                <div className="p-5 border-t border-charcoal/10 flex items-center justify-between">
                  <div>
                    <h3 className="font-display italic text-base text-charcoal group-hover:text-gold-rich transition-colors">
                      {image.title}
                    </h3>
                    <span className="text-eyebrow text-charcoal/40 text-[0.65rem] block mt-0.5">
                      {image.tag || image.category}
                    </span>
                  </div>

                  <span className="text-xs text-gold font-body">Enlarge +</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Component */}
      <Lightbox
        isOpen={lightboxOpen}
        images={filteredImages}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}

