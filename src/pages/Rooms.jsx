import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Quote, Check, Maximize2, ShieldCheck, Sparkles } from 'lucide-react';

import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import Lightbox from '../components/Lightbox';
import ImageWithSkeleton from '../components/ImageWithSkeleton';

const roomTypes = [
  {
    id: 'heritage-suite',
    name: 'Executive Heritage Suite',
    tagline: 'King Bed • Private Orchard Veranda',
    mainImage: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=80',
        title: 'Executive Heritage Suite — Master Bedroom',
        caption: 'Handcrafted teakwood king bed with Egyptian cotton linen, ambient reading lights, and direct patio access.',
        tag: 'Master Bedroom',
      },
      {
        src: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=80',
        title: 'Veranda Sit-Out & Garden View',
        caption: 'Private shaded terrace facing the mango trees, equipped with artisanal cane chairs for morning chai.',
        tag: 'Private Veranda',
      },
      {
        src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1600&q=80',
        title: 'En-Suite Marble Bathroom',
        caption: 'Rain shower, custom brass fittings, and organic botanical bath amenities.',
        tag: 'En-Suite Bath',
      },
    ],
    desc: 'Our premier suite, positioned for complete privacy overlooking the orchard. Featuring handcrafted teakwood furnishings, high ceilings, an expansive king bed, and a private covered sit-out where sunrise tea is served.',
    sleeps: '2–3 Guests',
    size: '420 sq.ft',
    bed: '1 Ultra King Bed',
    features: ['Private Sit-Out Veranda', 'Climate Control AC', 'En-suite Rain Shower', 'Tea & Coffee Bar'],
  },
  {
    id: 'veranda-room',
    name: 'Ground Veranda Room',
    tagline: 'Direct Lawn Access • Shaded Patio',
    mainImage: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1600&q=80',
        title: 'Ground Veranda Room Interior',
        caption: 'Spacious ground-floor haven with natural light and easy step-free access to the main lawn.',
        tag: 'Room View',
      },
      {
        src: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1600&q=80',
        title: 'Patio & Morning Sunlight',
        caption: 'Wake up to the sound of peacocks and garden breezes right outside your veranda.',
        tag: 'Garden Patio',
      },
    ],
    desc: 'A serene ground-floor room that opens directly into the lush garden path. Ideal for elder family members or guests who appreciate immediate, step-free access to the open lawns and pool deck.',
    sleeps: '2 Guests',
    size: '360 sq.ft',
    bed: '1 Queen Bed',
    features: ['Direct Garden Access', 'Step-Free Entrance', 'High-Speed Wi-Fi', 'Daily Turndown Service'],
  },
  {
    id: 'field-view-suite',
    name: 'Field View Deluxe Suite',
    tagline: 'Panoramic Views • Upper Level',
    mainImage: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1600&q=80',
        title: 'Field View Deluxe Bedroom',
        caption: 'Upper-level suite with wide picture windows capturing panoramic views of the open estate lawn.',
        tag: 'Panoramic View',
      },
      {
        src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=80',
        title: 'Lounge Nook & Teak Desk',
        caption: 'Cozy seating corner for quiet reading or evening unwinding after celebrations.',
        tag: 'Lounge Corner',
      },
    ],
    desc: 'Located on the first floor with the widest perspective over the entire 3-acre property. Floor-to-ceiling panoramic glass captures the changing colors of the Bihar sunset over open fields.',
    sleeps: '2 Guests',
    size: '390 sq.ft',
    bed: '1 King Bed',
    features: ['Panoramic Field Views', 'Quiet Upper Floor', 'Acoustic Insulation', 'Custom Wardrobes'],
  },
  {
    id: 'family-suite',
    name: 'Presidential Family Suite',
    tagline: 'Two Connected Suites • Bridal Living Foyer',
    mainImage: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1600&q=80',
        title: 'Presidential Family Suite — Living Foyer',
        caption: 'Two interconnected bedroom chambers sharing a private lounge foyer, tailored for wedding families.',
        tag: 'Living Suite',
      },
      {
        src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1600&q=80',
        title: 'Bridal Preparation & Vanity Area',
        caption: 'Full-length dressing mirrors and salon lighting for wedding makeup and bridal photoshoot preparation.',
        tag: 'Bridal Vanity',
      },
    ],
    desc: 'Crafted specifically for bridal parties and extended families. Two interconnected master bedrooms with separate en-suite bathrooms and a common hospitality foyer for wedding preparations.',
    sleeps: '4–5 Guests',
    size: '680 sq.ft',
    bed: '2 King Beds + Lounge Divan',
    features: ['Interconnected Dual Rooms', 'Full-Length Bridal Vanity', 'Two En-suite Baths', 'Family Lounge Foyer'],
  },
];

const includedAmenities = [
  'Individual Climate Control (AC & Heating) in all 8 suites',
  'Artisanal farm-to-table breakfast prepared fresh to your schedule',
  'Full, unshared access to the 3-acre emerald lawn and private swimming pool',
  'Nightly bonfire session with acoustic seating on the lawn for overnight guests',
  '100% uninterrupted enterprise power backup & estate-wide Wi-Fi',
  'Personal estate concierge & luggage assistance on check-in/out',
];

export default function Rooms() {
  const [lightboxState, setLightboxState] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
  });

  const openRoomLightbox = (gallery, index = 0) => {
    setLightboxState({
      isOpen: true,
      images: gallery,
      currentIndex: index,
    });
  };

  const handlePrev = () => {
    setLightboxState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
    }));
  };

  const handleNext = () => {
    setLightboxState((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length,
    }));
  };

  return (
    <div className="bg-[#FAF7F2]">
      {/* SEO Metadata */}
      <SEO />

      {/* Page Hero */}
      <PageHero
        eyebrow="Boutique Accommodations"
        title="Wake up to the estate at dawn, not just an evening visit."
        desc="Eight handcrafted boutique suites set back in the orchard fields, each with private verandas facing sunrise — built for wedding families, executive retreats, and peaceful weekend escapes."
        image="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=2000&q=85"
        stat="8"
        statLabel="Private Suites"
        ctaLabel="Reserve Your Stay"
      />

      {/* Rooms Showcase Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-36">
        <div className="max-w-2xl mb-20">
          <div className="flex items-center gap-2 text-eyebrow text-gold-dim mb-3">
            <Sparkles size={14} />
            <span>Suite Portfolio</span>
          </div>
          <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight">
            Four Suite Configurations, All Steps From The Lawn
          </h2>
          <div className="w-14 h-[1px] bg-gold mt-6" />
        </div>

        {/* Detailed Room Cards */}
        <div className="space-y-28 mb-32">
          {roomTypes.map((room, index) => (
            <div
              key={room.id}
              className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center bg-white p-6 sm:p-10 md:p-12 border border-charcoal/10 shadow-sm"
            >
              {/* Photo & Thumbnail Gallery Column */}
              <div className="lg:col-span-6 flex flex-col gap-4">
                <div
                  className="relative group cursor-pointer overflow-hidden border border-charcoal/10"
                  onClick={() => openRoomLightbox(room.gallery, 0)}
                >
                  <ImageWithSkeleton
                    src={room.mainImage}
                    alt={room.name}
                    aspectRatio="aspect-[4/3]"
                    className="group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-charcoal-deep/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 text-eyebrow text-ivory bg-charcoal-deep/80 px-4 py-2 border border-line">
                      <Maximize2 size={14} className="text-gold" />
                      <span>View Photos ({room.gallery.length})</span>
                    </span>
                  </div>
                </div>

                {/* Mini Thumbnails */}
                {room.gallery.length > 1 && (
                  <div className="grid grid-cols-3 gap-3">
                    {room.gallery.map((img, thumbIdx) => (
                      <div
                        key={thumbIdx}
                        onClick={() => openRoomLightbox(room.gallery, thumbIdx)}
                        className="cursor-pointer overflow-hidden border border-charcoal/10 hover:border-gold transition-colors aspect-[16/10]"
                      >
                        <img
                          src={img.src}
                          alt={img.title}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Room Specifications & Narrative */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-eyebrow text-gold font-semibold text-xs">0{index + 1}</span>
                    <span className="text-charcoal/30 text-xs">—</span>
                    <span className="text-eyebrow text-charcoal/50 text-xs">{room.tagline}</span>
                  </div>

                  <h3 className="font-display italic text-3xl sm:text-4xl text-charcoal mb-4">
                    {room.name}
                  </h3>

                  <p className="font-body text-charcoal/70 text-sm sm:text-base leading-relaxed mb-8">
                    {room.desc}
                  </p>

                  {/* Room Key Specs */}
                  <div className="grid grid-cols-3 gap-4 py-5 border-y border-charcoal/10 mb-8">
                    <div>
                      <div className="text-eyebrow text-charcoal/40 text-[0.65rem]">Capacity</div>
                      <div className="font-display italic text-lg text-charcoal mt-1">{room.sleeps}</div>
                    </div>
                    <div>
                      <div className="text-eyebrow text-charcoal/40 text-[0.65rem]">Room Size</div>
                      <div className="font-display italic text-lg text-charcoal mt-1">{room.size}</div>
                    </div>
                    <div>
                      <div className="text-eyebrow text-charcoal/40 text-[0.65rem]">Bedding</div>
                      <div className="font-display italic text-lg text-charcoal mt-1">{room.bed}</div>
                    </div>
                  </div>

                  {/* Feature Bullets */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                    {room.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-charcoal/80 font-body">
                        <Check size={14} className="text-gold shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Room Action */}
                <div className="flex items-center gap-6 pt-4">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-eyebrow text-charcoal-deep bg-gold hover:bg-gold-light hover:shadow-gold-glow px-7 py-3.5 transition-all duration-300 font-semibold"
                  >
                    <span>Enquire Availability</span>
                    <ArrowUpRight size={15} />
                  </Link>

                  <button
                    onClick={() => openRoomLightbox(room.gallery, 0)}
                    className="text-eyebrow text-charcoal/60 hover:text-charcoal text-xs underline underline-offset-4 decoration-gold/40 hover:decoration-gold"
                  >
                    Enlarge Suite Photos
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 5-Star Stay Inclusions Banner */}
        <div className="bg-charcoal-deep text-ivory p-8 sm:p-12 md:p-16 border border-line shadow-2xl">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-7">
              <div className="flex items-center gap-2 text-eyebrow text-gold mb-3">
                <ShieldCheck size={15} />
                <span>Signature Hospitality</span>
              </div>
              <h3 className="font-display italic text-3xl sm:text-4xl text-ivory mb-8">
                Included With Every Estate Stay
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {includedAmenities.map((amenity, aIdx) => (
                  <div
                    key={aIdx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-ivory/80 font-body border-t border-line pt-3"
                  >
                    <span className="text-gold font-bold">—</span>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-5 md:border-l md:border-line md:pl-12">
              <p className="font-body text-ivory/60 text-sm leading-relaxed mb-8">
                Room reservations during peak wedding weekends are prioritized for whole-estate bookings. For standalone family retreats and offsites, submit your dates below for customized packages.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-eyebrow text-charcoal-deep bg-gold hover:bg-gold-light px-8 py-4 font-semibold transition-all duration-300 w-full justify-center"
              >
                <span>Reserve Entire 8-Suite Estate</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="bg-[#100F0C] py-24 md:py-32 border-t border-line text-ivory">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <Quote className="text-gold mx-auto mb-6" size={32} />
          <p className="font-display italic text-2xl sm:text-3xl md:text-4xl text-ivory/90 leading-relaxed mb-6">
            "Quiet, comfortable, and close enough to the lawn that we never once needed a car during the stay. Waking up to chai on the veranda was bliss."
          </p>
          <div className="text-eyebrow text-gold text-xs">Neha & Harsh M. — Family Stay, 2 Nights</div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        images={lightboxState.images}
        currentIndex={lightboxState.currentIndex}
        onClose={() => setLightboxState((prev) => ({ ...prev, isOpen: false }))}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </div>
  );
}

