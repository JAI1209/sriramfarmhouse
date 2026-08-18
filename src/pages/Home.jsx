import { Quote, Sparkles, Trees } from 'lucide-react';

import SEO from '../components/SEO';
import OccasionHero from '../components/OccasionHero';
import ExploreSpaces from '../components/ExploreSpaces';
import Showcases from '../components/Showcases';
import EnquiryForm from '../components/EnquiryForm';

const testimonials = [
  {
    quote:
      'The lawn was manicured to perfection with warm fairy lights hanging from the trees. Our wedding guests are still asking how we discovered this private oasis in Bihar Sharif.',
    name: 'Ritika & Siddharth S.',
    occasion: 'Grand Wedding, 450 Guests',
    date: 'Winter 2025',
  },
  {
    quote:
      'We had the entire pool, deck and cabanas reserved for our family reunion. The live barbecue, music setup, and zero strangers made it feel like a private luxury villa in Goa.',
    name: 'Aman K. & Friends',
    occasion: 'Private Pool Day',
    date: 'Spring 2025',
  },
  {
    quote:
      'The indoor hall was perfect for our executive strategy sessions with solid Wi-Fi and power backup. In the evening, the bonfire on the lawn gave the team a real breath of fresh air.',
    name: 'Priya D.',
    occasion: 'Corporate Leadership Offsite',
    date: 'Autumn 2025',
  },
];

export default function Home() {
  return (
    <div className="bg-[#FAF7F2]">
      {/* Dynamic SEO Meta & Schema.org */}
      <SEO />

      {/* 1. Cinematic Hero with Ken Burns transitions */}
      <OccasionHero />

      {/* 2. Editorial About The Estate Statement */}
      <section className="py-28 md:py-36 bg-[#FAF7F2] text-charcoal relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 text-eyebrow text-gold-dim mb-3">
              <Trees size={15} />
              <span>The Sanctuary</span>
            </div>
            <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl text-charcoal leading-[1.12]">
              Three acres of nature, held one booking at a time.
            </h2>
            <div className="w-16 h-[1px] bg-gold mt-6 mb-8" />
            <p className="font-body text-charcoal/70 text-sm md:text-base leading-relaxed">
              Located in Sohdih, just moments outside Bihar Sharif, Sri Ram Farm House offers an oasis of mature mango groves, an open-sky wedding lawn, a crystal chandelier banquet hall, and heated private pool cabanas.
            </p>
          </div>

          <div className="md:col-span-7 flex flex-col justify-center">
            <p className="font-body text-charcoal/75 text-base sm:text-lg leading-relaxed mb-10">
              We operate strictly under a <strong className="text-charcoal font-semibold">Single-Event Exclusivity Policy</strong>. When you book Sri Ram Farm House, you never share the grounds with another party. The entire 3-acre property, dedicated culinary team, and estate concierge are devoted solely to your celebration.
            </p>

            {/* Estate Key Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-charcoal/10">
              <div>
                <div className="font-display italic text-4xl text-gold font-semibold">3</div>
                <div className="text-eyebrow text-charcoal/60 mt-2 text-xs">Acres Estate</div>
              </div>
              <div>
                <div className="font-display italic text-4xl text-gold font-semibold">500+</div>
                <div className="text-eyebrow text-charcoal/60 mt-2 text-xs">Max Guests</div>
              </div>
              <div>
                <div className="font-display italic text-4xl text-gold font-semibold">8</div>
                <div className="text-eyebrow text-charcoal/60 mt-2 text-xs">Luxury Suites</div>
              </div>
              <div>
                <div className="font-display italic text-4xl text-gold font-semibold">100%</div>
                <div className="text-eyebrow text-charcoal/60 mt-2 text-xs">Private Exclusivity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dedicated 4-Card Image Showcase: Banquet Hall, Emerald Lawn, Pool, Rooms */}
      <ExploreSpaces />

      {/* 4. Rich Story Showcases per Occasion */}
      <Showcases />

      {/* 5. Editorial Testimonials */}
      <section className="bg-[#FAF7F2] py-28 md:py-36 text-charcoal border-t border-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-eyebrow text-gold-dim block mb-3">Distinguished Guests</span>
            <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl text-charcoal leading-tight">
              Words From Past Celebrations
            </h2>
            <div className="w-12 h-[1px] bg-gold mx-auto mt-5" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white p-8 md:p-10 border border-charcoal/10 shadow-sm flex flex-col justify-between hover:border-gold/50 transition-colors duration-300"
              >
                <div>
                  <Quote className="text-gold mb-6" size={28} />
                  <p className="font-display italic text-charcoal/80 text-lg md:text-xl leading-relaxed mb-8">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-charcoal/10">
                  <div className="font-display italic text-lg text-charcoal font-semibold">{t.name}</div>
                  <div className="text-eyebrow text-charcoal/50 text-[0.7rem] mt-1">{t.occasion}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Availability Check / Enquiry Banner */}
      <section id="enquire" className="bg-charcoal-deep py-28 md:py-36 border-t border-line text-ivory">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-eyebrow text-gold mb-3">
              <Sparkles size={14} />
              <span>Check Availability</span>
            </div>
            <h2 className="font-display italic text-3xl sm:text-4xl md:text-5xl text-ivory mt-2">
              Reserve Your Date at the Estate
            </h2>
            <p className="font-body text-ivory/60 text-sm md:text-base max-w-lg mx-auto mt-4 leading-relaxed">
              We hold dates strictly on a first-come reservation basis. Share your estimated date and guest count below to receive instant confirmation.
            </p>
          </div>

          <EnquiryForm dark />
        </div>
      </section>
    </div>
  );
}

