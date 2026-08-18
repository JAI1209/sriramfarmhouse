import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { estateSpaces } from '../data/spaces';
import ImageWithSkeleton from './ImageWithSkeleton';

export default function ExploreSpaces() {
  return (
    <section className="bg-[#100F0C] py-28 md:py-36 text-ivory border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6">
          <div>
            <div className="flex items-center gap-2 text-eyebrow text-gold mb-3">
              <Sparkles size={14} />
              <span>The Estate Grounds</span>
            </div>
            <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl text-ivory leading-tight max-w-xl">
              Explore Our Spaces
            </h2>
          </div>
          <p className="font-body text-ivory/60 text-sm md:text-base max-w-md leading-relaxed">
            From the grand air-conditioned banquet hall to the open-sky emerald lawn and heated pool cabanas — four distinct settings designed for singular hospitality.
          </p>
        </div>

        {/* 4 Large Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {estateSpaces.map((space, idx) => (
            <div
              key={space.id}
              className="group relative flex flex-col bg-charcoal-deep border border-line hover:border-gold/50 transition-all duration-500 overflow-hidden"
            >
              {/* Image Container with Hover Zoom */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <ImageWithSkeleton
                  src={space.image}
                  alt={space.alt}
                  aspectRatio="aspect-[16/10]"
                  className="group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

                {/* Top Badge: Index & Capacity */}
                <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none">
                  <span className="text-eyebrow text-gold bg-charcoal-deep/80 backdrop-blur-sm px-3 py-1.5 border border-line">
                    0{idx + 1}
                  </span>
                  <span className="text-eyebrow text-ivory/90 bg-charcoal-deep/80 backdrop-blur-sm px-3 py-1.5 border border-line">
                    {space.capacity}
                  </span>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="text-eyebrow text-gold/80">{space.subtitle}</span>
                    <span className="text-ivory/30 text-xs">•</span>
                    <span className="text-eyebrow text-ivory/50">{space.area}</span>
                  </div>

                  <h3 className="font-display italic text-2xl sm:text-3xl text-ivory mb-4 group-hover:text-gold-light transition-colors duration-300">
                    {space.title}
                  </h3>

                  <p className="font-body text-ivory/60 text-sm md:text-base leading-relaxed mb-6">
                    {space.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8 pt-4 border-t border-line">
                    {space.features.slice(0, 2).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-ivory/70 font-body">
                        <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-6 border-t border-line">
                  <Link
                    to={space.route}
                    className="inline-flex items-center gap-2 text-eyebrow text-ivory group-hover:text-gold transition-colors"
                  >
                    <span>View Venue Details</span>
                    <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>

                  <Link
                    to={space.link}
                    className="text-eyebrow text-ivory/50 hover:text-ivory text-xs underline underline-offset-4 decoration-gold/40 hover:decoration-gold transition-all"
                  >
                    View Photos
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
