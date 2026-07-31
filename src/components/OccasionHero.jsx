import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const occasions = [
  {
    key: 'wedding',
    index: '01',
    label: 'Weddings',
    image:
      'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80',
    eyebrow: 'Est. for celebration',
    headline: 'An estate wedding, without the compromises.',
    body: 'Three acres of manicured lawn, a private stage and a culinary team accustomed to five-hundred covers a night.',
  },
  {
    key: 'pool',
    index: '02',
    label: 'Pool Parties',
    image:
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1800&q=80',
    eyebrow: 'Reserved by the day',
    headline: 'A private pool, held entirely for your guests.',
    body: 'Heated water, cabana seating and a dedicated bar — the property is yours alone for the hours you book.',
  },
  {
    key: 'stay',
    index: '03',
    label: 'Farm Stays',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=80',
    eyebrow: 'Eight rooms only',
    headline: 'Quiet rooms, set back from the fields.',
    body: 'Private verandas, meals prepared to order, and a fire lit each evening for the guests staying the night.',
  },
  {
    key: 'corporate',
    index: '04',
    label: 'Private Events',
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=80',
    eyebrow: 'By appointment',
    headline: 'A blank canvas for the occasion you have in mind.',
    body: 'Offsites, milestone birthdays, editorial shoots — the grounds are shaped around the day you\u2019re planning.',
  },
];

export default function OccasionHero() {
  const [active, setActive] = useState(occasions[0]);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-charcoal-deep">
      <AnimatePresence mode="wait">
        <motion.div
          key={active.key}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <img src={active.image} alt={active.headline} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal-deep/50 to-charcoal-deep/30" />
          <div className="absolute inset-0 bg-charcoal-deep/20" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-14 min-h-[100svh] flex flex-col justify-end">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.key + '-copy'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-14"
          >
            <span className="text-eyebrow text-gold">{active.eyebrow}</span>
            <h1 className="font-display italic text-ivory text-4xl sm:text-5xl md:text-6xl leading-[1.08] mt-4 mb-6">
              {active.headline}
            </h1>
            <p className="text-ivory/60 font-body text-base md:text-lg max-w-lg mb-9 leading-relaxed">
              {active.body}
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-eyebrow text-ivory border-b border-gold pb-1.5 hover:text-gold transition-colors"
            >
              Enquire about {active.label.toLowerCase()}
              <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        </AnimatePresence>

        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-line">
          {occasions.map((o) => (
            <button
              key={o.key}
              onClick={() => setActive(o)}
              className={`text-left py-6 pr-6 border-r border-line last:border-r-0 transition-colors ${
                active.key === o.key ? '' : 'opacity-50 hover:opacity-80'
              }`}
            >
              <span className={`text-eyebrow block mb-2 ${active.key === o.key ? 'text-gold' : 'text-ivory/50'}`}>
                {o.index}
              </span>
              <span className="font-display italic text-ivory text-lg">{o.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
