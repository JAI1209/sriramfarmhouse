import { Quote } from 'lucide-react';
import OccasionHero from '../components/OccasionHero';
import Showcases from '../components/Showcases';
import EnquiryForm from '../components/EnquiryForm';

const testimonials = [
  { quote: 'The lawn was set exactly as shown to us beforehand. Guests are still asking where we found this place.', name: 'Ritika S.', occasion: 'Wedding, 400 guests' },
  { quote: 'We had the pool entirely to ourselves for the afternoon. Nothing felt shared or rushed.', name: 'Aman K.', occasion: 'Pool Party' },
  { quote: 'Quiet enough for two days of real work, and the evening fire made it feel like more than an offsite.', name: 'Priya D.', occasion: 'Corporate Offsite' },
];

export default function Home() {
  return (
    <div>
      <OccasionHero />

      {/* About strip */}
      <section className="bg-ivory py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="text-eyebrow text-charcoal/40">The Estate</span>
            <h2 className="font-display italic text-3xl md:text-4xl text-charcoal mt-4 leading-tight">
              Three acres,
              <br />
              held one booking at a time.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 flex flex-col justify-center">
            <p className="text-charcoal/60 font-body text-lg leading-relaxed mb-10">
              Sri Ram Farm House sits in Sohdih, just outside Bihar Sharif — mature trees, a
              working pool and open lawn, none of it staged for photographs
              alone. We host a single wedding a weekend, hold the pool by
              appointment, and keep the rooms unpretentious enough that a
              two-day offsite never feels like a conference room.
            </p>
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-charcoal/10">
              <div>
                <div className="font-display italic text-3xl text-gold">3</div>
                <div className="text-eyebrow text-charcoal/40 mt-2">Acres</div>
              </div>
              <div>
                <div className="font-display italic text-3xl text-gold">8</div>
                <div className="text-eyebrow text-charcoal/40 mt-2">Rooms</div>
              </div>
              <div>
                <div className="font-display italic text-3xl text-gold">500</div>
                <div className="text-eyebrow text-charcoal/40 mt-2">Capacity</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rich per-occasion showcase: Weddings, Rooms & Stay, Pool Party, Corporate & Events */}
      <Showcases />

      {/* Testimonials */}
      <section className="bg-ivory py-24 md:py-36">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-eyebrow text-charcoal/40">From Past Guests</span>
          <h2 className="font-display italic text-3xl md:text-4xl text-charcoal mt-4 mb-16 max-w-xl">
            After the day was over
          </h2>
          <div className="grid md:grid-cols-3 gap-x-10 gap-y-12">
            {testimonials.map((t) => (
              <div key={t.name}>
                <Quote className="text-gold/70 mb-5" size={22} />
                <p className="text-charcoal/75 font-display italic text-lg leading-relaxed mb-6">
                  {t.quote}
                </p>
                <div className="text-eyebrow text-charcoal/40">{t.name} — {t.occasion}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Enquiry */}
      <section id="enquire" className="bg-charcoal-deep py-24 md:py-36">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <span className="text-eyebrow text-gold">Check Availability</span>
            <h2 className="font-display italic text-3xl md:text-4xl text-ivory mt-4">
              Tell us the date, we'll confirm what's open
            </h2>
          </div>
          <EnquiryForm dark />
        </div>
      </section>
    </div>
  );
}
