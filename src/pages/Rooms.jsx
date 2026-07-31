import { Link } from 'react-router-dom';
import { ArrowUpRight, Quote } from 'lucide-react';
import PageHero from '../components/PageHero';

const rooms = [
  {
    name: 'Veranda Room',
    image: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1000&q=80',
    desc: 'A ground-floor room with a private sit-out facing the mango grove. Best suited to families.',
    sleeps: '2–3 guests',
  },
  {
    name: 'Field View Room',
    image: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=1000&q=80',
    desc: 'First-floor room with the widest window onto the open lawn, and good light through the day.',
    sleeps: '2 guests',
  },
  {
    name: 'Family Suite',
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=80',
    desc: 'Two connected rooms with a shared sit-out, built for wedding parties travelling together.',
    sleeps: '4–5 guests',
  },
];

const amenities = [
  'Air conditioning in every room',
  'Meals prepared to order',
  'Full access to the lawn and pool',
  'A fire lit each evening for guests staying overnight',
];

export default function Rooms() {
  return (
    <div className="bg-ivory">
      <PageHero
        eyebrow="Rooms & Stay"
        title="Wake up on the property, not just visit it."
        desc="Eight rooms set back from the main lawn, each with a private veranda facing the fields — built for wedding guests, families and offsite teams staying over."
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80"
        stat="8"
        statLabel="rooms on site"
        ctaLabel="Check availability"
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
        <span className="text-eyebrow text-charcoal/40">The Rooms</span>
        <h2 className="font-display italic text-3xl md:text-4xl text-charcoal mt-4 mb-16 max-w-xl">
          Three room types, all a short walk from the lawn
        </h2>

        <div className="space-y-20 mb-24">
          {rooms.map((r, i) => (
            <div
              key={r.name}
              className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              <img src={r.image} alt={r.name} className="w-full h-80 object-cover" />
              <div>
                <span className="text-eyebrow text-gold">0{i + 1}</span>
                <h3 className="font-display italic text-3xl text-charcoal mt-3 mb-4">{r.name}</h3>
                <p className="text-charcoal/60 font-body leading-relaxed mb-5 max-w-md">{r.desc}</p>
                <span className="text-eyebrow text-charcoal/40">{r.sleeps}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-charcoal-deep px-8 py-16 md:p-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display italic text-2xl md:text-3xl text-ivory mb-8">
              Included with every stay
            </h2>
            <ul className="space-y-4">
              {amenities.map((label) => (
                <li key={label} className="flex items-start gap-3 text-ivory/70 font-body border-t border-line pt-4 first:border-t-0 first:pt-0">
                  <span className="text-gold mt-0.5">—</span>
                  {label}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-ivory/50 font-body mb-8 leading-relaxed">
              Rates vary by season and wedding-weekend demand. Send your
              dates and group size for an exact quote.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-eyebrow text-gold border border-gold px-7 py-3.5 hover:bg-gold hover:text-charcoal-deep transition-all duration-300"
            >
              Check availability
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      <section className="bg-charcoal-deep py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <Quote className="text-gold/70 mx-auto mb-6" size={26} />
          <p className="text-ivory/80 font-display italic text-2xl md:text-3xl leading-relaxed mb-6">
            "Quiet, comfortable, and close enough to the lawn that we never once needed a car during the stay."
          </p>
          <div className="text-eyebrow text-ivory/40">Neha M. — Family Stay, 2 nights</div>
        </div>
      </section>
    </div>
  );
}
