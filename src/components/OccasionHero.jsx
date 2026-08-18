import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

const occasions = [
  {
    key: 'wedding',
    index: '01',
    label: 'Royal Weddings',
    tagline: '3-Acre Lawn & Banquet Hall',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85',
    eyebrow: 'Est. for Grand Celebrations',
    headline: 'An estate wedding, without the compromises.',
    body: 'Three acres of manicured emerald lawn, a crystal chandelier banquet hall, bridal suites, and a culinary brigade accustomed to five-hundred covers a night.',
    link: '/weddings',
  },
  {
    key: 'pool',
    index: '02',
    label: 'Private Pool Parties',
    tagline: 'Exclusive Day Cabana Slots',
    image:
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=2000&q=85',
    eyebrow: '100% Private Reservation',
    headline: 'A heated pool, held exclusively for your guests.',
    body: 'Heated crystal water, teakwood cabanas, live barbecue grill station, and outdoor surround acoustics — the entire pool zone is yours alone.',
    link: '/pool-party',
  },
  {
    key: 'stay',
    index: '03',
    label: 'Boutique Farm Stays',
    tagline: '8 Suites with Verandas',
    image:
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=2000&q=85',
    eyebrow: 'Eight Suites Only',
    headline: 'Quiet suites, set back in the orchard fields.',
    body: 'Private verandas facing sunrise, farm-to-table meals cooked fresh to order, and an evening bonfire lit exclusively for our overnight guests.',
    link: '/rooms',
  },
  {
    key: 'corporate',
    index: '04',
    label: 'Conclaves & Offsites',
    tagline: 'Indoor Hall & Breakout Lawn',
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=85',
    eyebrow: 'Executive Retreats & Milestones',
    headline: 'A canvas designed around your signature occasion.',
    body: 'Strategic team offsites, milestone anniversaries, and fashion shoots — combining air-conditioned conference facilities with expansive outdoor breakout zones.',
    link: '/corporate-events',
  },
];

export default function OccasionHero() {
  const [active, setActive] = useState(occasions[0]);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-charcoal-deep flex flex-col justify-end">
      {/* Background Image Carousel with Ken Burns subtle scale */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.key}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <img
            src={active.image}
            alt={active.headline}
            className="w-full h-full object-cover"
          />
          {/* Dual Multi-layer Gradients for Maximum Legibility & Warmth */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/60 to-charcoal-deep/30" />
          <div className="absolute inset-0 bg-charcoal-deep/25" />
        </motion.div>
      </AnimatePresence>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-12 w-full flex-1 flex flex-col justify-end">
        {/* Single Event Exclusivity Pill */}
        <div className="inline-flex items-center gap-2 text-xs text-gold font-body bg-charcoal-deep/80 backdrop-blur-md px-3.5 py-1.5 border border-line w-fit mb-6">
          <ShieldCheck size={14} />
          <span>Single Event Exclusivity • One Booking at a Time</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.key + '-copy'}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-14"
          >
            <span className="text-eyebrow text-gold block mb-3">{active.eyebrow}</span>
            <h1 className="font-display italic text-ivory text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.04] mb-6">
              {active.headline}
            </h1>
            <p className="text-ivory/70 font-body text-base sm:text-lg md:text-xl max-w-xl mb-9 leading-relaxed">
              {active.body}
            </p>

            <div className="flex flex-wrap items-center gap-6">
              <Link
                to={active.link}
                className="inline-flex items-center gap-2 text-eyebrow text-charcoal-deep bg-gold hover:bg-gold-light hover:shadow-gold-glow px-8 py-3.5 transition-all duration-300 font-semibold"
              >
                <span>Explore {active.label}</span>
                <ArrowUpRight size={16} />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-eyebrow text-ivory hover:text-gold border-b border-gold/60 pb-1 transition-colors"
              >
                <span>Reserve Your Date</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom Occasion Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-line">
          {occasions.map((o) => {
            const isCurrent = active.key === o.key;
            return (
              <button
                key={o.key}
                onClick={() => setActive(o)}
                className={`text-left py-6 px-4 md:px-6 border-r border-line last:border-r-0 transition-all duration-300 relative ${
                  isCurrent
                    ? 'bg-ivory/5'
                    : 'opacity-60 hover:opacity-100 hover:bg-ivory/[0.02]'
                }`}
              >
                {/* Active Indicator Top Line */}
                {isCurrent && (
                  <motion.div
                    layoutId="activeHeroTab"
                    className="absolute top-0 left-0 right-0 h-0.5 bg-gold"
                  />
                )}

                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-eyebrow text-xs ${
                      isCurrent ? 'text-gold' : 'text-ivory/50'
                    }`}
                  >
                    {o.index}
                  </span>
                  <span className="text-[0.65rem] uppercase tracking-wider text-ivory/40 hidden sm:inline-block">
                    {o.tagline}
                  </span>
                </div>

                <span
                  className={`font-display italic text-lg sm:text-xl block transition-colors ${
                    isCurrent ? 'text-ivory' : 'text-ivory/75'
                  }`}
                >
                  {o.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

