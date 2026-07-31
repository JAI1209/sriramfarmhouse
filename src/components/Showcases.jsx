import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';

const showcases = [
  {
    key: 'wedding',
    index: '01',
    eyebrow: 'Weddings',
    title: 'A wedding your guests won\u2019t stop talking about',
    desc: 'From baraat to vidaai, the entire estate is yours — mandap on real grass, a private stage for sangeet, and a kitchen team that has run five-hundred-plate nights without a single delay.',
    features: [
      'Open lawn for mandap, stage & seating up to 500',
      'In-house catering, live counters & full bar service',
      'Bridal suite for getting-ready shots',
      'Decor team on call — floral, lighting, entrance',
    ],
    stat: '500+',
    statLabel: 'guests hosted',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80',
    cta: 'Plan your wedding',
    link: '/weddings',
  },
  {
    key: 'stay',
    index: '02',
    eyebrow: 'Rooms & Stay',
    title: 'Wake up on the property, not just visit it',
    desc: 'Eight rooms set back from the main lawn, each with a private veranda facing the fields. Built for wedding parties staying over, or anyone who wants the farm at sunrise, not just sunset.',
    features: [
      'Private veranda in every room, AC & ceiling fan',
      'Home-style meals cooked to order, any hour',
      'Free lawn & pool access included in your stay',
      'Bonfire lit each evening for overnight guests',
    ],
    stat: '8',
    statLabel: 'rooms on site',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80',
    cta: 'See the rooms',
    link: '/rooms',
    reverse: true,
  },
  {
    key: 'pool',
    index: '03',
    eyebrow: 'Pool Parties',
    title: 'The pool, held entirely for your guests',
    desc: 'No shared timings, no strangers in the frame. Book the pool by the hour or take the whole day — heated water, cabana seating, a poolside grill and a DJ deck built in.',
    features: [
      'Private booking — pool is exclusively yours',
      'Cabana seating, umbrellas & sound system',
      'Poolside grill & bar, staffed through your slot',
      'Changing rooms & towels included',
    ],
    stat: '60+',
    statLabel: 'poolside seats',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1400&q=80',
    cta: 'Book the pool',
    link: '/pool-party',
  },
  {
    key: 'corporate',
    index: '04',
    eyebrow: 'Corporate & Private Events',
    title: 'Offsites, meetings & milestones — one flexible ground',
    desc: 'A change of scenery for the team, or a venue for whatever\u2019s next — birthdays, anniversaries, editorial shoots. Open lawn plus an indoor hall means it works rain or shine.',
    features: [
      'Indoor hall with seating for 80, projector & mic',
      'Reliable power backup & high-speed wifi',
      'Outdoor breakout zones on the lawn',
      'Catering packages for half-day & full-day offsites',
    ],
    stat: '10+',
    statLabel: 'event formats hosted',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1400&q=80',
    cta: 'Explore corporate & events',
    link: '/corporate-events',
    reverse: true,
  },
];

export default function Showcases() {
  return (
    <section className="bg-charcoal-deep">
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-36 pb-6">
        <span className="text-eyebrow text-gold">What We Host</span>
        <h2 className="font-display italic text-3xl md:text-4xl text-ivory mt-4 max-w-xl">
          Four occasions, each given the full run of the property
        </h2>
      </div>

      {showcases.map((s) => (
        <div key={s.key} className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 border-t border-line">
          <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${s.reverse ? 'md:[&>*:first-child]:order-2' : ''}`}>
            <div className="relative">
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-[420px] md:h-[520px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold text-charcoal-deep px-6 py-5 hidden sm:block">
                <div className="font-display italic text-3xl leading-none">{s.stat}</div>
                <div className="text-eyebrow mt-1.5">{s.statLabel}</div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-5">
                <span className="text-eyebrow text-gold">{s.index}</span>
                <span className="text-eyebrow text-ivory/40">{s.eyebrow}</span>
              </div>
              <h3 className="font-display italic text-3xl md:text-4xl text-ivory mb-6 leading-tight">
                {s.title}
              </h3>
              <p className="text-ivory/55 font-body leading-relaxed mb-8 max-w-lg">
                {s.desc}
              </p>
              <ul className="space-y-3 mb-9">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-ivory/70 font-body text-sm">
                    <Check size={15} className="text-gold mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to={s.link}
                className="inline-flex items-center gap-2 text-eyebrow text-ivory border border-gold/50 px-7 py-3.5 hover:bg-gold hover:text-charcoal-deep hover:border-gold transition-all duration-300"
              >
                {s.cta}
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
