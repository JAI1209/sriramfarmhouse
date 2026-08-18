import { useState } from 'react';
import { Waves, Umbrella, Music4, UtensilsCrossed, ShieldCheck, Sun, Quote, Sparkles, Droplets } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import Lightbox from '../components/Lightbox';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import EnquiryForm from '../components/EnquiryForm';

const poolFeatures = [
  {
    icon: Waves,
    title: '100% Private Slot Reservation',
    desc: 'The swimming pool and surrounding teakwood deck are reserved entirely for your party — zero public access and zero shared time.',
  },
  {
    icon: Umbrella,
    title: 'Shaded Cabanas & Sun Loungers',
    desc: 'Artisanal shaded wooden cabanas, plush waterproof loungers, and wide canvas umbrellas set for all-day comfort.',
  },
  {
    icon: Music4,
    title: 'DJ Deck & Outdoor Acoustics',
    desc: 'A dedicated poolside audio deck wired for resident DJs or your private playlist running crisp sound throughout the afternoon.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Poolside Live Grill & Bar',
    desc: 'An open-air barbecue grill station serving fresh kebabs, snacks, mocktails, and beverage service staffed through your booking.',
  },
  {
    icon: ShieldCheck,
    title: 'Changing Suites & Fresh Towels',
    desc: 'Private air-conditioned changing rooms, clean showers, fresh linen towels, and on-site lifeguards included standard.',
  },
  {
    icon: Sun,
    title: 'Flexible Daytime & Sunset Slots',
    desc: 'Book a 4-hour afternoon escape under the sun, or reserve the full day extending into an evening poolside cocktail glow.',
  },
];

const poolGallery = [
  {
    src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1600&q=80',
    title: 'Private Swimming Pool & Sun Loungers',
    caption: 'Crystal-clear temperature-regulated water framed by manicured green grass.',
  },
  {
    src: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=1600&q=80',
    title: 'Sunset Deck & Ambient Lighting',
    caption: 'Golden hour reflection over the pool during an intimate celebration.',
  },
  {
    src: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1600&q=80',
    title: 'Shaded Teakwood Cabanas',
    caption: 'Private lounge cabanas for relaxed poolside dining and conversation.',
  },
  {
    src: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=1600&q=80',
    title: 'Poolside Barbecue & Social Lounge',
    caption: 'Live culinary stations serving sizzling snacks right by the water.',
  },
];

export default function PoolParty() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-[#FAF7F2]">
      {/* SEO Metadata */}
      <SEO />

      {/* Page Hero */}
      <PageHero
        eyebrow="Private Pool & Day Escapes"
        title="A private heated pool, held exclusively for your guests."
        desc="Crystal heated water, teakwood cabana seating, live barbecue grill station, and outdoor surround acoustics — reserved by the afternoon or full day with zero shared access."
        image="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=2000&q=85"
        stat="60+"
        statLabel="Poolside Seats"
        ctaLabel="Reserve The Pool"
      />

      {/* Overview Section */}
      <section className="py-28 md:py-36 text-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 text-eyebrow text-gold-dim mb-3">
              <Droplets size={14} />
              <span>Uncompromised Privacy</span>
            </div>
            <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight">
              Your group, your pool, your playlist.
            </h2>
            <div className="w-14 h-[1px] bg-gold mt-6" />
          </div>

          <div className="md:col-span-7 flex items-center">
            <p className="font-body text-charcoal/75 text-base sm:text-lg leading-relaxed">
              We never double-book the swimming pool. Once your slot is confirmed, the pool, wooden deck, luxury cabanas, barbecue staff, and audio systems are dedicated 100% to your party — whether it is a milestone birthday, an energetic college reunion, a pre-wedding cocktail, or a private family holiday.
            </p>
          </div>
        </div>
      </section>

      {/* Inclusions Feature Grid */}
      <section className="bg-charcoal-deep text-ivory py-28 md:py-36 border-t border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-xl mb-20">
            <span className="text-eyebrow text-gold block mb-3">Pool Amenities</span>
            <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl text-ivory leading-tight">
              Everything Ready For An Unforgettable Day
            </h2>
            <div className="w-14 h-[1px] bg-gold mt-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {poolFeatures.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="border-t border-line pt-8">
                <Icon size={26} className="text-gold mb-5" strokeWidth={1.5} />
                <h3 className="font-display italic text-2xl text-ivory mb-3">{title}</h3>
                <p className="font-body text-ivory/60 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Strip with Lightbox Click */}
      <section className="py-28 md:py-36 text-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
            <div>
              <span className="text-eyebrow text-gold-dim block mb-3">Poolside Visuals</span>
              <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl text-charcoal">
                Around The Deck & Cabanas
              </h2>
            </div>
            <span className="text-xs text-charcoal/50 font-body">Click any image to enlarge</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {poolGallery.map((img, i) => (
              <div
                key={i}
                className="group cursor-pointer overflow-hidden border border-charcoal/10 shadow-sm"
                onClick={() => openLightbox(i)}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <ImageWithSkeleton
                    src={img.src}
                    alt={img.title}
                    aspectRatio="aspect-[4/5]"
                    className="group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-charcoal-deep/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-eyebrow text-ivory text-xs bg-charcoal-deep/80 px-3 py-1.5 border border-line">
                      Enlarge +
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white border-t border-charcoal/10">
                  <h4 className="font-display italic text-base text-charcoal">{img.title}</h4>
                  <p className="font-body text-xs text-charcoal/60 line-clamp-1 mt-1">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Banner */}
      <section className="bg-[#100F0C] py-24 md:py-32 border-t border-line text-ivory">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <Quote className="text-gold mx-auto mb-6" size={32} />
          <p className="font-display italic text-2xl sm:text-3xl md:text-4xl text-ivory/90 leading-relaxed mb-6">
            "We had the pool entirely to ourselves for the afternoon. Nothing felt shared or rushed — the barbecue service was top tier."
          </p>
          <div className="text-eyebrow text-gold text-xs">Aman K. — Private Pool Party</div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-28 md:py-36 bg-[#FAF7F2] border-t border-charcoal/10 text-charcoal">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-eyebrow text-gold-dim block mb-3">Pool Concierge</span>
            <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl text-charcoal">
              Book Your Private Pool Slot
            </h2>
            <p className="font-body text-charcoal/70 text-sm sm:text-base max-w-lg mx-auto mt-4">
              Select your preferred date, timings, and headcount. Slots are reserved on a strict first-come basis.
            </p>
          </div>

          <EnquiryForm />
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        images={poolGallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + poolGallery.length) % poolGallery.length)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % poolGallery.length)}
      />
    </div>
  );
}

