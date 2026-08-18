import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, AtSign, ArrowUpRight, Clock, ShieldCheck } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="bg-charcoal-deep text-ivory pt-24 pb-12 border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-20">
        {/* Brand & Editorial Narrative */}
        <div className="md:col-span-5 flex flex-col justify-between">
          <div>
            <Link to="/" className="inline-block group mb-6">
              <span className="font-display italic text-3xl md:text-4xl text-ivory group-hover:text-gold transition-colors">
                Sri Ram Farm House
              </span>
              <span className="text-eyebrow text-gold block mt-2 text-xs tracking-widest3">
                Luxury Estate • Bihar Sharif, Nalanda
              </span>
            </Link>

            <p className="text-ivory/60 font-body text-sm md:text-base max-w-md leading-relaxed mb-8">
              A private 3-acre sanctuary dedicated to one booking at a time. Designed with cinematic green lawns, a crystal chandelier banquet hall, private pool cabanas, and boutique accommodations for extraordinary celebrations.
            </p>

            <div className="flex items-center gap-3 text-xs text-gold/90 font-body border-y border-line py-3 max-w-sm">
              <ShieldCheck size={16} className="text-gold shrink-0" />
              <span>Exclusive Estate Reservation — Single Event Exclusivity</span>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-4 text-xs text-ivory/50">
            <span className="flex items-center gap-2">
              <Clock size={14} className="text-gold" />
              <span>Site visits by appointment (10 AM – 6 PM)</span>
            </span>
          </div>
        </div>

        {/* Explore Spaces & Pages */}
        <div className="md:col-span-3">
          <h3 className="text-eyebrow text-gold mb-6">Explore Grounds</h3>
          <ul className="space-y-3.5 font-body text-ivory/70 text-sm">
            <li>
              <Link to="/corporate-events" className="hover:text-gold transition-colors flex items-center justify-between group">
                <span>Grand Banquet Hall</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
              </Link>
            </li>
            <li>
              <Link to="/weddings" className="hover:text-gold transition-colors flex items-center justify-between group">
                <span>3-Acre Emerald Lawn</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
              </Link>
            </li>
            <li>
              <Link to="/pool-party" className="hover:text-gold transition-colors flex items-center justify-between group">
                <span>Private Pool & Cabanas</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
              </Link>
            </li>
            <li>
              <Link to="/rooms" className="hover:text-gold transition-colors flex items-center justify-between group">
                <span>Boutique Rooms & Suites</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-gold transition-colors flex items-center justify-between group">
                <span>Estate Photo Gallery</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-gold" />
              </Link>
            </li>
          </ul>
        </div>

        {/* Concierge & Location */}
        <div className="md:col-span-4">
          <h3 className="text-eyebrow text-gold mb-6">Concierge & Visits</h3>
          <ul className="space-y-4 font-body text-ivory/70 text-sm">
            <li className="flex items-start gap-3.5">
              <MapPin size={17} className="mt-0.5 shrink-0 text-gold" />
              <span>Sohdih, near Bihar Sharif, Nalanda, Bihar – 803118</span>
            </li>
            <li className="flex items-center gap-3.5">
              <Phone size={17} className="shrink-0 text-gold" />
              <a href="tel:+919999999999" className="hover:text-gold transition-colors">
                +91 99999 99999 (Direct Hotline)
              </a>
            </li>
            <li className="flex items-center gap-3.5">
              <Mail size={17} className="shrink-0 text-gold" />
              <a href="mailto:hello@sriramfarmhouse.in" className="hover:text-gold transition-colors">
                hello@sriramfarmhouse.in
              </a>
            </li>
            <li className="flex items-center gap-3.5">
              <AtSign size={17} className="shrink-0 text-gold" />
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold transition-colors"
              >
                @sriramfarmhouse
              </a>
            </li>

          </ul>

          <div className="mt-8 pt-6 border-t border-line">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-eyebrow text-ivory border border-gold/40 px-5 py-2.5 hover:bg-gold hover:text-charcoal-deep transition-all duration-300 text-xs"
            >
              <span>Schedule Private Tour</span>
              <ArrowUpRight size={13} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Credit Strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 text-ivory/40 text-xs font-body">
        <span>© {new Date().getFullYear()} Sri Ram Farm House. All rights reserved.</span>
        <span className="italic font-display text-ivory/50 text-sm">
          Held by appointment only • Single Booking Exclusivity
        </span>
      </div>
    </footer>
  );
}

