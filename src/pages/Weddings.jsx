import { Sparkles, UtensilsCrossed, Home as HomeIcon, Flower2, Music4, BedDouble, Quote } from 'lucide-react';
import PageHero from '../components/PageHero';
import EnquiryForm from '../components/EnquiryForm';

const features = [
  { icon: Sparkles, title: 'Mandap on the Lawn', desc: 'A cleared, level section of the main lawn built out for mandap, phere and seating up to 500 guests.' },
  { icon: UtensilsCrossed, title: 'In-House Catering', desc: 'A kitchen team used to five-hundred-plate nights, with live counters, buffet and full bar service.' },
  { icon: BedDouble, title: 'Bridal Suite', desc: 'A private room set aside for the bride and family through the getting-ready hours and photos.' },
  { icon: Flower2, title: 'Decor & Lighting', desc: 'A decor team on call for floral work, entrance arches, fairy lights and stage backdrops.' },
  { icon: Music4, title: 'Sound & Stage', desc: 'A raised stage with sound and lighting rigged for sangeet, DJ nights and the reception.' },
  { icon: HomeIcon, title: 'Guest Rooms Nearby', desc: 'Eight rooms on the property for close family and out-of-town guests staying the night.' },
];

export default function Weddings() {
  return (
    <div className="bg-ivory">
      <PageHero
        eyebrow="Weddings"
        title="An estate wedding, from baraat to vidaai."
        desc="Three acres of open lawn, a private stage and a kitchen that has run five-hundred covers a night — the whole property held for your one weekend."
        image="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80"
        stat="500+"
        statLabel="guests hosted"
        ctaLabel="Plan your wedding"
      />

      {/* Overview */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="text-eyebrow text-charcoal/40">One Wedding, One Weekend</span>
            <h2 className="font-display italic text-3xl md:text-4xl text-charcoal mt-4 leading-tight">
              We take one wedding at a time.
            </h2>
          </div>
          <div className="md:col-span-7 md:col-start-6 flex items-center">
            <p className="text-charcoal/60 font-body text-lg leading-relaxed">
              We don't split the property across two functions on the same
              day. When you book Sri Ram Farm House, the lawn, kitchen, rooms
              and staff are given entirely to your event — from the first
              haldi function to the last dance at the reception.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-charcoal-deep py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <span className="text-eyebrow text-gold">What's Included</span>
          <h2 className="font-display italic text-3xl md:text-4xl text-ivory mt-4 mb-16 max-w-xl">
            Everything built around the day itself
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
          <span className="text-eyebrow text-charcoal/40">From Recent Weddings</span>
          <h2 className="font-display italic text-3xl md:text-4xl text-charcoal mt-4 mb-14 max-w-xl">
            A glimpse of the lawn, dressed for the day
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=80',
              'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=700&q=80',
              'https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=700&q=80',
              'https://images.unsplash.com/photo-1544923246-77307dd654cb?auto=format&fit=crop&w=700&q=80',
            ].map((src, i) => (
              <img key={i} src={src} alt="Wedding at Sri Ram Farm House" className="w-full h-56 md:h-72 object-cover" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="bg-charcoal-deep py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">
          <Quote className="text-gold/70 mx-auto mb-6" size={26} />
          <p className="text-ivory/80 font-display italic text-2xl md:text-3xl leading-relaxed mb-6">
            "The lawn was set exactly as shown to us beforehand. Guests are still asking where we found this place."
          </p>
          <div className="text-eyebrow text-ivory/40">Ritika S. — Wedding, 400 guests</div>
        </div>
      </section>

      {/* CTA / Enquiry */}
      <section className="py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="text-center mb-14">
            <span className="text-eyebrow text-charcoal/40">Reserve Your Date</span>
            <h2 className="font-display italic text-3xl md:text-4xl text-charcoal mt-4">
              Tell us your wedding date
            </h2>
          </div>
          <EnquiryForm />
        </div>
      </section>
    </div>
  );
}
