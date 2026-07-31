import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PageHero({ eyebrow, title, desc, image, stat, statLabel, ctaLabel = 'Enquire now' }) {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden bg-charcoal-deep">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/55 to-charcoal-deep/25" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 h-full flex flex-col justify-end pb-16 pt-40">
        <span className="text-eyebrow text-gold mb-4">{eyebrow}</span>
        <h1 className="font-display italic text-4xl sm:text-5xl md:text-6xl text-ivory leading-[1.06] max-w-3xl mb-6">
          {title}
        </h1>
        <p className="text-ivory/60 font-body text-lg max-w-xl leading-relaxed mb-9">{desc}</p>
        <div className="flex flex-wrap items-center gap-8">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-eyebrow text-charcoal-deep bg-gold px-7 py-3.5 hover:bg-gold-light transition-colors"
          >
            {ctaLabel}
            <ArrowUpRight size={15} />
          </Link>
          {stat && (
            <div className="flex items-baseline gap-2">
              <span className="font-display italic text-3xl text-gold">{stat}</span>
              <span className="text-eyebrow text-ivory/50">{statLabel}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
