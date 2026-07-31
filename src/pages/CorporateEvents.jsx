import { Presentation, Wifi, Zap, Trees, UtensilsCrossed, CalendarClock, Quote } from 'lucide-react';
import PageHero from '../components/PageHero';
import EnquiryForm from '../components/EnquiryForm';

const features = [
  { icon: Presentation, title: 'Indoor Hall', desc: 'Seating for up to 80, with a projector and mic set up for talks, workshops or town halls.' },
  { icon: Wifi, title: 'High-Speed Wifi', desc: 'Reliable connectivity across the hall and lawn — enough for video calls and live demos.' },
  { icon: Zap, title: 'Power Backup', desc: 'Full backup on site, so a rainy day or a grid outage never interrupts your schedule.' },
  { icon: Trees, title: 'Outdoor Breakouts', desc: 'Open lawn zones for team activities, breakout groups or an evening bonfire session.' },
  { icon: UtensilsCrossed, title: 'Catering Packages', desc: 'Half-day and full-day catering options, from working lunches to a sit-down dinner.' },
  { icon: CalendarClock, title: 'Flexible Formats', desc: 'From a half-day offsite to a milestone birthday or an editorial shoot — the ground adapts.' },
];

export default function CorporateEvents() {
  return (
    <div className="bg-ivory">
      <PageHero
        eyebrow="Corporate & Private Events"
        title="Offsites, meetings & milestones — one flexible ground."
        desc="An indoor hall for the work, open lawn for everything after. Built for teams, birthdays, anniversaries and shoots alike."
        image="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=80"
        stat="10+"
        statLabel="event formats hosted"
        ctaLabel="Enquire for your event"
      />

      {/* Overview */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="text-eyebrow text-charcoal/40">Work, Then Unwind</span>
            <h2 className="font-display italic text-3xl md:text-4xl text-charcoal mt-4 leading-tight">
              A change of scenery for the team.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 flex items-center">
            <p className="text-charcoal/60 font-body text-lg leading-relaxed">
              Meetings run indoors with proper power and wifi, then the team
              moves out to the lawn for a walk, a game or a fire in the
              evening. Rain or shine, the schedule doesn't have to change —
              and the same ground works just as well for a birthday or a
              shoot.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-charcoal-deep py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-eyebrow text-gold">What's Included</span>
          <h2 className="font-display italic text-3xl md:text-4xl text-ivory mt-4 mb-16 max-w-xl">
            Set up to run smoothly, indoors and out
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
          <span className="text-eyebrow text-charcoal/40">On the Grounds</span>
          <h2 className="font-display italic text-3xl md:text-4xl text-charcoal mt-4 mb-14 max-w-xl">
            The hall, the lawn, and the spaces between
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=700&q=80',
              'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=700&q=80',
              'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=700&q=80',
              'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=700&q=80',
            ].map((src, i) => (
              <img key={i} src={src} alt="Corporate event at Sri Ram Farm House" className="w-full h-56 md:h-72 object-cover" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-charcoal-deep py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <Quote className="text-gold/70 mx-auto mb-6" size={26} />
          <p className="text-ivory/80 font-display italic text-2xl md:text-3xl leading-relaxed mb-6">
            "Quiet enough for two days of real work, and the evening fire made it feel like more than an offsite."
          </p>
          <div className="text-eyebrow text-ivory/40">Priya D. — Corporate Offsite</div>
        </div>
      </section>

      {/* CTA / Enquiry */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <span className="text-eyebrow text-charcoal/40">Plan Your Event</span>
            <h2 className="font-display italic text-3xl md:text-4xl text-charcoal mt-4">
              Tell us about your group and dates
            </h2>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </div>
  );
}
