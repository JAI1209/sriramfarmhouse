import { useState } from 'react';
import { Presentation, Wifi, Zap, Trees, UtensilsCrossed, CalendarClock, Quote, Sparkles, Building2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import Lightbox from '../components/Lightbox';
import ImageWithSkeleton from '../components/ImageWithSkeleton';
import EnquiryForm from '../components/EnquiryForm';

const corporateFeatures = [
  {
    icon: Presentation,
    title: '4,500 sq.ft Air-Conditioned Hall',
    desc: 'Flexible indoor theater or round-table seating for 80–350 guests with high-lumen projector, audio mixer, and presenter mics.',
  },
  {
    icon: Wifi,
    title: 'High-Speed Enterprise Wi-Fi',
    desc: 'Dedicated high-bandwidth connectivity covering the indoor hall, boutique suites, and outdoor lawn for live streaming & video calls.',
  },
  {
    icon: Zap,
    title: '100% Redundant Power Backup',
    desc: 'Heavy-duty silent on-site diesel generators ensuring your conferences and presentations run without a split-second interruption.',
  },
  {
    icon: Trees,
    title: '3-Acre Lawn Breakout Zones',
    desc: 'Manicured outdoor lawns under ancient mango trees for team building activities, fireside chats, and evening cocktail mixers.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Executive Catering Packages',
    desc: 'Custom corporate dining packages ranging from high-tea, live working buffet lunches to formal multi-course dinners and barbecues.',
  },
  {
    icon: CalendarClock,
    title: 'Flexible Offsite & Event Formats',
    desc: 'Customized setups for single-day corporate conclaves, multi-day executive board retreats, milestone 50th birthdays, and shoots.',
  },
];

const corporateGallery = [
  {
    src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80',
    title: 'Executive Conference Hall Setup',
    caption: 'Air-conditioned hall configured for strategic leadership presentations.',
  },
  {
    src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80',
    title: 'Grand Banquet Dining Setup',
    caption: 'Elegant crystal chandelier hall prepared for an annual awards dinner.',
  },
  {
    src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80',
    title: 'Interactive Team Workshops',
    caption: 'Engaging breakout session in a natural, light-filled environment.',
  },
  {
    src: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1600&q=80',
    title: 'Cocktail & Evening Mixer Table',
    caption: 'Fine dining and networking under ambient evening illumination.',
  },
];

export default function CorporateEvents() {
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
        eyebrow="Corporate Conclaves & Milestones"
        title="Offsites, conferences & milestones — one versatile estate."
        desc="An air-conditioned banquet hall with audio-visual equipment, open lawns for team breakout sessions, and farm-to-table dining — built for strategic teams and milestone celebrations."
        image="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=2000&q=85"
        stat="10+"
        statLabel="Event Formats"
        ctaLabel="Enquire For Your Event"
      />

      {/* Overview Section */}
      <section className="py-28 md:py-36 text-charcoal">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 text-eyebrow text-gold-dim mb-3">
              <Building2 size={14} />
              <span>Inspiring Scenery</span>
            </div>
            <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight">
              Work with clarity, then unwind in nature.
            </h2>
            <div className="w-14 h-[1px] bg-gold mt-6" />
          </div>

          <div className="md:col-span-7 flex items-center">
            <p className="font-body text-charcoal/75 text-base sm:text-lg leading-relaxed">
              Meetings and keynote presentations run seamlessly indoors with dedicated power backup, projector screens, and high-speed Wi-Fi. Afterwards, teams step out into 3 acres of tranquil greenery for team building, poolside mocktails, or an evening bonfire on the lawn.
            </p>
          </div>
        </div>
      </section>

      {/* Inclusions Feature Grid */}
      <section className="bg-charcoal-deep text-ivory py-28 md:py-36 border-t border-line">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-xl mb-20">
            <span className="text-eyebrow text-gold block mb-3">Event Amenities</span>
            <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl text-ivory leading-tight">
              Configured For Productive Gatherings
            </h2>
            <div className="w-14 h-[1px] bg-gold mt-6" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">
            {corporateFeatures.map(({ icon: Icon, title, desc }) => (
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
              <span className="text-eyebrow text-gold-dim block mb-3">Estate Grounds</span>
              <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl text-charcoal">
                The Hall, Lawn & Breakout Spaces
              </h2>
            </div>
            <span className="text-xs text-charcoal/50 font-body">Click any image to enlarge</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {corporateGallery.map((img, i) => (
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
            "Quiet enough for two full days of intense strategy work, and the evening bonfire made it feel like far more than a typical hotel conference room."
          </p>
          <div className="text-eyebrow text-gold text-xs">Priya D. — Corporate Leadership Offsite</div>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-28 md:py-36 bg-[#FAF7F2] border-t border-charcoal/10 text-charcoal">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <span className="text-eyebrow text-gold-dim block mb-3">Corporate Events Team</span>
            <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl text-charcoal">
              Plan Your Corporate Offsite
            </h2>
            <p className="font-body text-charcoal/70 text-sm sm:text-base max-w-lg mx-auto mt-4">
              Submit your team size and schedule requirements. We provide full day delegate rates (DDR) and custom offsite packages.
            </p>
          </div>

          <EnquiryForm />
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightboxOpen}
        images={corporateGallery}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + corporateGallery.length) % corporateGallery.length)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % corporateGallery.length)}
      />
    </div>
  );
}

