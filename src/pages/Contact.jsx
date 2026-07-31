import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import EnquiryForm from '../components/EnquiryForm';

const info = [
  { icon: MapPin, label: 'Location', value: 'Sohdih, Bihar Sharif, Nalanda – 803118' },
  { icon: Phone, label: 'Phone', value: '+91 99999 99999' },
  { icon: Mail, label: 'Email', value: 'hello@sriramfarmhouse.in' },
  { icon: Clock, label: 'Site Visits', value: 'Daily, 10 AM – 6 PM, by appointment' },
];

export default function Contact() {
  return (
    <div className="pt-40 pb-28 bg-charcoal-deep min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <span className="text-eyebrow text-gold">Get In Touch</span>
        <h1 className="font-display italic text-4xl md:text-5xl text-ivory mt-4 mb-6 max-w-2xl leading-tight">
          Let's talk about your date
        </h1>
        <p className="text-ivory/50 font-body text-lg max-w-xl mb-20 leading-relaxed">
          Send your date and occasion below, or call directly — we usually
          confirm availability within a few hours.
        </p>

        <div className="grid lg:grid-cols-5 gap-16">
          <div className="lg:col-span-2 space-y-8">
            {info.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 border-t border-line pt-6 first:border-t-0 first:pt-0">
                <Icon size={17} className="text-gold mt-0.5 shrink-0" />
                <div>
                  <div className="text-eyebrow text-ivory/40 mb-1.5">{label}</div>
                  <div className="text-ivory/85 font-body">{value}</div>
                </div>
              </div>
            ))}

            <div className="h-56 border border-line">
              <iframe
                title="Sri Ram Farm House location"
                src="https://www.google.com/maps?q=Sohdih,Bihar+Sharif,Nalanda,Bihar+803118&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.4) invert(0.92) contrast(0.9)' }}
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-line pt-12 lg:pt-0 lg:pl-16">
            <EnquiryForm dark />
          </div>
        </div>
      </div>
    </div>
  );
}
