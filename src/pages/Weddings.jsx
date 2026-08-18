import { useState } from 'react';
import { Sparkles, UtensilsCrossed, Home as HomeIcon, Flower2, Music4, BedDouble, Quote, ShieldCheck, Heart } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import Lightbox from '../components/Lightbox';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import EnquiryForm from '../components/EnquiryForm';

const weddingFeatures = [
  {
    icon: Sparkles,
    title: 'Mandap on Natural Grass',
    desc: 'A vast, levelled section of the 3-acre lawn prepared for sacred phere, custom floral mandap canopy, and guest seating for up to 500.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Royal Gourmet Catering',
    desc: 'An in-house culinary brigade accustomed to 500-plate royal banquets with live chaat, tandoor, dessert counters, and full bar service.',
  },
  {
    icon: BedDouble,
    title: 'Dedicated Bridal Dressing Suite',
    desc: 'A private, air-conditioned suite set aside for the bride, groom, and family with full-length vanity mirrors and dressing foyer.',
  },
  {
    icon: Flower2,
    title: 'Complete Decor & Lighting',
    desc: 'A team of master floral artisans and light designers for entrance arches, high-mast illumination, fairy lights, and stage backdrops.',
  },
  {
    icon: Music4,
    title: 'Acoustic Sangeet Stage & DJ Deck',
    desc: 'A wide raised performance stage with professional acoustic sound, intelligent beam lights, and dance floor for high-energy sangeet nights.',
  },
  {
    icon: HomeIcon,
    title: '8 Luxury Suites On-Site',
    desc: 'Eight boutique suites on the property for the wedding couple, close family, and out-of-town guests staying the entire weekend.',
  },
];

const weddingGallery = [
  {
    src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80',
    title: 'Emerald Lawn Wedding Mandap',
    caption: 'Open-air mandap setup under mature trees illuminated by warm golden fairy lights.',
  },
  {
    src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=80',
    title: 'Grand Floral Entrance Gateway',
    caption: 'Traditional brass lanterns and fragrant marigold arches greeting baraat guests.',
  },
  {
    src: 'https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=1600&q=80',
    title: 'Bridal Portrait & Mandap Glow',
    caption: 'Timeless moments captured across the 3-acre manicured estate grounds.',
  },
  {
    src: 'https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=1600&q=80',
    title: 'Evening Sangeet & Reception Illumination',
    caption: 'Magical canopy of twilight lights over the dining promenade.',
  },
];

export default function Weddings() {
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
        eyebrow="Royal Destination Weddings"
        title="An estate wedding, from baraat to vidaai."
        desc="Three acres of manicured lawn, a 4,500 sq.ft banquet hall, bridal suites, and a culinary brigade executing 500-plate royal banquets with zero compromise — all held for your single weekend."
        image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
        stat="500+"
        statLabel="Guest Capacity"
        ctaLabel="Plan Your Wedding"
      />

      {/* Overview Section */}
      <section className="py-28 md:py-36 text-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 text-eyebrow text-gold-dim mb-3">
              <Heart size={14} />
              <span>One Wedding, One Weekend</span>
            </div>
            <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight">
              We host a single wedding a weekend.
            </h2>
            <div className="w-14 h-[1px] bg-gold mt-6" />
          </div>

          <div className="md:col-span-7 flex items-center">
            <p className="font-body text-charcoal/75 text-base sm:text-lg leading-relaxed">
              We do not split our 3-acre grounds across multiple functions. When you book Sri Ram Farm House, the entire estate — from the 3-acre emerald lawn and air-conditioned banquet hall to the bridal suites, kitchen brigade, and dedicated concierge — is devoted exclusively to your celebration, ensuring absolute privacy, seamless coordination, and timeless elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Inclusions Feature Grid */}
      <section className="bg-charcoal-deep text-ivory py-28 md:py-36 border-t border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-xl mb-20">
            <span className="text-eyebrow text-gold block mb-3">Wedding Inclusions</span>
            <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl text-ivory leading-tight">
              Everything Crafted For Your Grand Day
            </h2>
            <div className="w-14 h-[1px] bg-gold mt-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {weddingFeatures.map(({ icon: Icon, title, desc }) => (
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
              <span className="text-eyebrow text-gold-dim block mb-3">Wedding Glimpses</span>
              <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl text-charcoal">
                The Estate, Dressed For Celebration
              </h2>
            </div>
            <span className="text-xs text-charcoal/50 font-body">Click any image to enlarge</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {weddingGallery.map((img, i) => (
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
            "The lawn was set exactly as promised, and having the banquet hall for dinner meant the weather didn’t bother us at all. Truly five-star service in Bihar."
          </p>
          <div className="text-eyebrow text-gold text-xs">Ritika & Siddharth S. — Wedding, 450 Guests</div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-28 md:py-36 bg-[#FAF7F2] border-t border-charcoal/10 text-charcoal">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-eyebrow text-gold-dim block mb-3">Wedding Concierge</span>
            <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl text-charcoal">
              Reserve Your Wedding Weekend
            </h2>
            <p className="font-body text-charcoal/70 text-sm sm:text-base max-w-lg mx-auto mt-4">
              Share your prospective wedding dates and guest count. Our senior wedding concierge will get in touch with customized package details.
            </p>
          </div>

          <EnquiryForm />
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        images={weddingGallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + weddingGallery.length) % weddingGallery.length)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % weddingGallery.length)}
      />
    </div>
  );
}

