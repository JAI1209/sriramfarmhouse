import { ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function PageHero({
  eyebrow,
  title,
  desc,
  image,
  stat,
  statLabel,
  ctaLabel = 'Enquire now',
  ctaLink = '/contact',
}) {
  return (
    <section className="relative min-h-[68vh] md:min-h-[76vh] w-full overflow-hidden bg-charcoal-deep flex flex-col justify-end">
      {/* Background Image with Ken Burns Zoom */}
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover scale-105 animate-in fade-in zoom-in-105 duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/65 to-charcoal-deep/30" />
        <div className="absolute inset-0 bg-charcoal-deep/20" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-44 pb-16 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-eyebrow text-gold">{eyebrow}</span>
            <span className="text-ivory/30 text-xs">•</span>
            <span className="text-xs text-ivory/60 font-body flex items-center gap-1.5">
              <ShieldCheck size={13} className="text-gold" />
              <span>Exclusive Access</span>
            </span>
          </div>

          <h1 className="font-display italic text-4xl sm:text-5xl md:text-6xl text-ivory leading-[1.06] mb-6">
            {title}
          </h1>

          <p className="text-ivory/70 font-body text-base sm:text-lg max-w-2xl leading-relaxed mb-9">
            {desc}
          </p>

          <div className="flex flex-wrap items-center gap-8 pt-2">
            <Link
              to={ctaLink}
              className="inline-flex items-center gap-2 text-eyebrow text-charcoal-deep bg-gold hover:bg-gold-light hover:shadow-gold-glow px-8 py-3.5 transition-all duration-300 font-semibold"
            >
              <span>{ctaLabel}</span>
              <ArrowUpRight size={16} />
            </Link>

            {stat && (
              <div className="flex items-baseline gap-2.5 px-4 py-2 border-l border-gold/40">
                <span className="font-display italic text-3xl md:text-4xl text-gold">
                  {stat}
                </span>
                <span className="text-eyebrow text-ivory/60 text-xs">{statLabel}</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

