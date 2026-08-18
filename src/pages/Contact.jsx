import { MapPin, Phone, Mail, Clock, Sparkles, Navigation } from 'lucide-react';

import SEO from '../components/SEO';
import EnquiryForm from '../components/EnquiryForm';

const contactChannels = [
  {
    icon: MapPin,
    label: 'Estate Address',
    value: 'Sohdih, near Bihar Sharif, Nalanda District, Bihar – 803118',
    sub: 'Easily accessible via NH-31 & Patna-Bakhtiyarpur 4-lane highway.',
  },
  {
    icon: Phone,
    label: 'Direct Concierge Phone',
    value: '+91 99999 99999',
    sub: 'Available 8 AM – 9 PM for immediate date inquiries.',
    isLink: 'tel:+919999999999',
  },
  {
    icon: Mail,
    label: 'Official Email',
    value: 'hello@sriramfarmhouse.in',
    sub: 'Proposals, rate cards & catering package inquiries.',
    isLink: 'mailto:hello@sriramfarmhouse.in',
  },
  {
    icon: Clock,
    label: 'Private Site Visits',
    value: 'Daily, 10:00 AM – 6:00 PM',
    sub: 'By prior appointment to ensure active bookings are uninterrupted.',
  },
];

export default function Contact() {
  return (
    <div className="pt-36 md:pt-44 pb-32 bg-charcoal-deep text-ivory min-h-screen">
      {/* SEO Metadata */}
      <SEO />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header Banner */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-2 text-eyebrow text-gold mb-3">
            <Sparkles size={14} />
            <span>Concierge & Reservations</span>
          </div>
          <h1 className="font-display italic text-4xl sm:text-5xl md:text-6xl text-ivory leading-tight mb-6">
            Let's Talk About Your Date
          </h1>
          <p className="font-body text-ivory/60 text-base sm:text-lg leading-relaxed">
            Whether you are planning a destination wedding, an exclusive pool party, an executive offsite, or a farm stay — submit your dates below or call our concierge directly.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Contact Details & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              {contactChannels.map(({ icon: Icon, label, value, sub, isLink }) => (
                <div
                  key={label}
                  className="bg-[#14130F] p-6 border border-line flex items-start gap-4 hover:border-gold/40 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <span className="text-eyebrow text-gold text-[0.65rem] block mb-1">
                      {label}
                    </span>
                    {isLink ? (
                      <a
                        href={isLink}
                        className="font-display italic text-xl text-ivory hover:text-gold transition-colors block"
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="font-display italic text-xl text-ivory">{value}</div>
                    )}
                    <p className="font-body text-xs text-ivory/50 mt-1 leading-relaxed">{sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map Box */}
            <div className="border border-line overflow-hidden relative group">
              <div className="p-3.5 bg-[#14130F] border-b border-line flex items-center justify-between text-xs font-body text-ivory/70">
                <span className="flex items-center gap-2">
                  <Navigation size={14} className="text-gold" />
                  <span>Sohdih, Bihar Sharif (Live Map)</span>
                </span>
                <a
                  href="https://maps.google.com/?q=Sohdih,Bihar+Sharif,Nalanda,Bihar+803118"
                  target="_blank"
                  rel="noreferrer"
                  className="text-gold text-eyebrow hover:underline text-[0.65rem]"
                >
                  Open in Maps
                </a>
              </div>
              <div className="h-64 w-full">
                <iframe
                  title="Sri Ram Farm House Google Map Location"
                  src="https://www.google.com/maps?q=Sohdih,Bihar+Sharif,Nalanda,Bihar+803118&output=embed"
                  width="100%"
                  height="100%"
                  style={{
                    border: 0,
                    filter: 'grayscale(0.6) invert(0.92) contrast(0.85)',
                  }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Reservation Enquiry Form */}
          <div className="lg:col-span-7 bg-[#14130F] p-8 sm:p-12 border border-line">
            <div className="mb-10 pb-6 border-b border-line">
              <span className="text-eyebrow text-gold block mb-2">Reservation Request</span>
              <h3 className="font-display italic text-2xl sm:text-3xl text-ivory">
                Check Dates & Request Proposal
              </h3>
              <p className="font-body text-xs sm:text-sm text-ivory/60 mt-2">
                All inquiries receive a personal response and price estimate from our estate manager within 2–4 hours.
              </p>
            </div>

            <EnquiryForm dark />
          </div>
        </div>
      </div>
    </div>
  );
}

