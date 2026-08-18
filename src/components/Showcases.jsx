import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Sparkles } from 'lucide-react';
import ImageWithSkeleton from './ImageWithSkeleton';

const showcases = [
  {
    key: 'wedding',
    index: '01',
    eyebrow: 'Royal Weddings',
    subtitle: 'Lawn & Grand Banquet',
    title: 'A wedding your guests won’t stop talking about',
    desc: 'From the grand baraat procession to the peaceful vidaai, the entire 3-acre estate is solely yours. A natural grass mandap under mature trees, a 4,500 sq.ft banquet hall with crystal chandeliers, and an in-house catering brigade executing 500-plate banquets with zero compromise.',
    features: [
      '3-Acre levelled lawn for mandap, sangeet stage & seating up to 500',
      'Air-conditioned 4,500 sq.ft banquet hall with bridal green rooms',
      'In-house royal multi-cuisine catering, live counters & full bar service',
      'Decor team on call — floral arches, stage lighting & entrance promenade',
    ],
    stat: '500+',
    statLabel: 'Guest Capacity',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80',
    cta: 'Plan Your Wedding',
    link: '/weddings',
  },
  {
    key: 'stay',
    index: '02',
    eyebrow: 'Boutique Stay',
    subtitle: '8 Orchard Suites',
    title: 'Wake up to the estate at dawn, not just an evening visit',
    desc: 'Eight handcrafted suites set back from the main lawns, each with a private sit-out veranda overlooking mango orchards and morning birds. Designed for wedding parties staying overnight, executive retreats, or families escaping for the weekend.',
    features: [
      'Private verandas, individual climate control & artisanal wood finishes',
      'Authentic farm-to-table meals cooked fresh to order by personal chefs',
      'Full lawn, pool, and lounge grounds access included in your stay',
      'Complimentary evening bonfire session lit for overnight guests',
    ],
    stat: '8',
    statLabel: 'Boutique Suites',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=80',
    cta: 'View The Suites',
    link: '/rooms',
    reverse: true,
  },
  {
    key: 'pool',
    index: '03',
    eyebrow: 'Private Pool',
    subtitle: 'Exclusive Day Cabanas',
    title: 'The pool, held 100% exclusively for your party',
    desc: 'Zero shared hours, zero strangers in your photos. Book the pool by the afternoon or take the entire day — heated crystal waters, teakwood sun cabanas, live barbecue grill station, and outdoor surround acoustics.',
    features: [
      '100% Private booking — the pool and deck are yours alone',
      'Shaded luxury cabana seating, plush loungers & umbrellas',
      'Dedicated poolside cocktail bar & live barbecue station',
      'Private changing suites, clean showers & fresh towel service',
    ],
    stat: '60+',
    statLabel: 'Poolside Loungers',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1400&q=80',
    cta: 'Book The Pool',
    link: '/pool-party',
  },
  {
    key: 'corporate',
    index: '04',
    eyebrow: 'Corporate & Events',
    subtitle: 'Conclaves & Shoots',
    title: 'Offsites, milestones & shoots — one versatile estate',
    desc: 'A refreshing change of pace for executive leadership offsites, or a grand canvas for milestone 50th birthdays, anniversaries, and editorial photography. Combining indoor air-conditioned presentation facilities with lush open grounds.',
    features: [
      'Indoor hall with acoustic panels, projector, audio & seating for 80+',
      '100% enterprise power backup & high-speed estate-wide Wi-Fi',
      'Multiple open-air lawn breakout zones under ancient trees',
      'Tailored full-day catering packages from working lunches to barbecues',
    ],
    stat: '10+',
    statLabel: 'Event Formats',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80',
    cta: 'Explore Offsites & Events',
    link: '/corporate-events',
    reverse: true,
  },
];

export default function Showcases() {
  return (
    <section className="bg-charcoal-deep text-ivory">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-8">
        <div className="flex items-center gap-2 text-eyebrow text-gold mb-3">
          <Sparkles size={14} />
          <span>Occasion Portfolio</span>
        </div>
        <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl text-ivory mt-2 max-w-2xl leading-tight">
          Four distinct celebrations, each given complete exclusivity of the estate
        </h2>
      </div>

      {/* Staggered Story Rows */}
      {showcases.map((s) => (
        <div
          key={s.key}
          className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28 border-t border-line"
        >
          <div
            className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${
              s.reverse ? 'md:[&>*:first-child]:order-2' : ''
            }`}
          >
            {/* Image Box with Floating Gold Stat */}
            <div className="relative group">
              <div className="overflow-hidden border border-line">
                <ImageWithSkeleton
                  src={s.image}
                  alt={s.title}
                  aspectRatio="aspect-[4/3] md:aspect-[5/4]"
                  className="group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-gold text-charcoal-deep px-6 py-5 shadow-2xl border border-gold-light/40">
                <div className="font-display italic text-3xl md:text-4xl leading-none font-bold">
                  {s.stat}
                </div>
                <div className="text-eyebrow text-charcoal text-[0.65rem] mt-2 font-semibold">
                  {s.statLabel}
                </div>
              </div>
            </div>

            {/* Narrative Box */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-eyebrow text-gold text-sm">{s.index}</span>
                <span className="text-ivory/30 text-xs">—</span>
                <span className="text-eyebrow text-ivory/50 text-xs">{s.eyebrow}</span>
                <span className="text-ivory/30 text-xs">•</span>
                <span className="text-xs text-gold/80 font-body">{s.subtitle}</span>
              </div>

              <h3 className="font-display italic text-3xl sm:text-4xl text-ivory mb-6 leading-tight">
                {s.title}
              </h3>

              <p className="text-ivory/60 font-body text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                {s.desc}
              </p>

              {/* Key Features Checkmarks */}
              <ul className="space-y-3.5 mb-10">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3.5 text-ivory/80 font-body text-sm"
                  >
                    <span className="w-5 h-5 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-gold" />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={s.link}
                className="inline-flex items-center gap-2 text-eyebrow text-ivory border border-gold/60 px-8 py-3.5 hover:bg-gold hover:text-charcoal-deep hover:border-gold transition-all duration-300 font-medium"
              >
                <span>{s.cta}</span>
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

