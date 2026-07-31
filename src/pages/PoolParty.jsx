import { Waves, Umbrella, Music4, UtensilsCrossed, ShieldCheck, Sun, Quote } from 'lucide-react';
import PageHero from '../components/PageHero';
import EnquiryForm from '../components/EnquiryForm';

const features = [
  { icon: Waves, title: 'Private Booking', desc: 'The pool is reserved entirely for your group — no shared timings, no strangers in the frame.' },
  { icon: Umbrella, title: 'Cabana Seating', desc: 'Shaded cabanas and loungers set around the deck, built for a full day in and out of the water.' },
  { icon: Music4, title: 'DJ & Sound', desc: 'A poolside deck wired for a DJ or your own playlist, running through the afternoon.' },
  { icon: UtensilsCrossed, title: 'Grill & Bar', desc: 'A poolside grill station and bar, staffed for the length of your booking.' },
  { icon: ShieldCheck, title: 'On-Site Safety', desc: 'Trained staff present through the booking, with changing rooms and towels included.' },
  { icon: Sun, title: 'Half-Day or Full-Day', desc: 'Book by the hour for a quick escape, or take the whole day and stay past sunset.' },
];

export default function PoolParty() {
  return (
    <div className="bg-ivory">
      <PageHero
        eyebrow="Pool Parties"
        title="A private pool, held entirely for your guests."
        desc="Heated water, cabana seating and a poolside bar — reserved by the hour or the day, with no one else on the property."
        image="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1800&q=80"
        stat="60+"
        statLabel="poolside seats"
        ctaLabel="Book the pool"
      />

      {/* Overview */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="text-eyebrow text-charcoal/40">Exclusive Access</span>
            <h2 className="font-display italic text-3xl md:text-4xl text-charcoal mt-4 leading-tight">
              Your slot, your pool.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 flex items-center">
            <p className="text-charcoal/60 font-body text-lg leading-relaxed">
              We don't double-book the pool across groups. Once your slot is
              confirmed, the water, deck, cabanas and staff are given
              entirely to your booking — a birthday, a college reunion, or
              just a Sunday you want to remember.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-charcoal-deep py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-eyebrow text-gold">What's Included</span>
          <h2 className="font-display italic text-3xl md:text-4xl text-ivory mt-4 mb-16 max-w-xl">
            Everything you need for the day
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title}>
                <Icon size={22} className="text-gold mb-5" strokeWidth={1.5} />
                <h3 className="font-display italic text-xl text-ivory mb-3">{title}</h3>
                <p className="text-ivory/50 font-body text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery strip */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-eyebrow text-charcoal/40">Around the Pool</span>
          <h2 className="font-display italic text-3xl md:text-4xl text-charcoal mt-4 mb-14 max-w-xl">
            A look at the deck and cabanas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=700&q=80',
              'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=700&q=80',
              'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=700&q=80',
              'https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=700&q=80',
            ].map((src, i) => (
              <img key={i} src={src} alt="Pool at Sri Ram Farm House" className="w-full h-56 md:h-72 object-cover" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-charcoal-deep py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <Quote className="text-gold/70 mx-auto mb-6" size={26} />
          <p className="text-ivory/80 font-display italic text-2xl md:text-3xl leading-relaxed mb-6">
            "We had the pool entirely to ourselves for the afternoon. Nothing felt shared or rushed."
          </p>
          <div className="text-eyebrow text-ivory/40">Aman K. — Pool Party</div>
        </div>
      </section>

      {/* CTA / Enquiry */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <span className="text-eyebrow text-charcoal/40">Reserve Your Slot</span>
            <h2 className="font-display italic text-3xl md:text-4xl text-charcoal mt-4">
              Pick your date and headcount
            </h2>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </div>
  );
}
