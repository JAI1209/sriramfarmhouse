import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, AtSign } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-deep text-ivory pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <span className="font-display italic text-2xl block mb-1">Sri Ram Farm House</span>
          <span className="text-eyebrow text-gold block mb-6">Bihar Sharif, Nalanda</span>
          <p className="text-ivory/50 font-body max-w-sm leading-relaxed">
            A private estate held for weddings, pool days, farm stays and
            events shaped around the occasion — one property, taken one
            booking at a time.
          </p>
        </div>

        <div>
          <h3 className="text-eyebrow text-gold mb-5">Explore</h3>
          <ul className="space-y-3 font-body text-ivory/60 text-sm">
            <li><Link to="/rooms" className="hover:text-ivory transition-colors">Rooms</Link></li>
            <li><Link to="/gallery" className="hover:text-ivory transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-ivory transition-colors">Enquire</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-eyebrow text-gold mb-5">Reach Us</h3>
          <ul className="space-y-3.5 font-body text-ivory/60 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={15} className="mt-0.5 shrink-0 text-gold/70" />
              Sohdih, Bihar Sharif, Nalanda – 803118
            </li>
            <li className="flex items-center gap-3">
              <Phone size={15} className="shrink-0 text-gold/70" />
              <a href="tel:+919999999999" className="hover:text-ivory">+91 99999 99999</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={15} className="shrink-0 text-gold/70" />
              <a href="mailto:hello@sriramfarmhouse.in" className="hover:text-ivory">hello@sriramfarmhouse.in</a>
            </li>
            <li className="flex items-center gap-3">
              <AtSign size={15} className="shrink-0 text-gold/70" />
              <a href="#" className="hover:text-ivory">@sriramfarmhouse</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-line flex flex-col sm:flex-row justify-between gap-2 text-ivory/30 text-xs font-body">
        <span>© {new Date().getFullYear()} Sri Ram Farm House. All rights reserved.</span>
        <span className="italic font-display">By appointment only.</span>
      </div>
    </footer>
  );
}
