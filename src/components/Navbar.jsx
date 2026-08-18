import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, PhoneCall } from 'lucide-react';

const occasionLinks = [
  { to: '/weddings', label: 'Weddings & Receptions' },
  { to: '/pool-party', label: 'Private Pool Parties' },
  { to: '/corporate-events', label: 'Corporate & Celebrations' },
];

const mainLinks = [
  { to: '/', label: 'Home' },
  { to: '/rooms', label: 'Rooms & Stay' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropOpen(false);
    setMobileDropOpen(false);
  }, [location.pathname]);

  const isOccasionActive = occasionLinks.some((l) => l.to === location.pathname);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal-deep/95 backdrop-blur-md border-b border-line shadow-luxury py-3'
          : 'bg-gradient-to-b from-charcoal-deep/80 via-charcoal-deep/30 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex flex-col leading-none group"
          onClick={() => setOpen(false)}
        >
          <span className="font-display italic text-ivory text-xl sm:text-2xl tracking-tight group-hover:text-gold-light transition-colors">
            Sri Ram
          </span>
          <span className="text-eyebrow text-gold mt-1 text-[0.65rem] tracking-widest2">
            Farm House • Bihar
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-9">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-eyebrow transition-colors gold-underline-link ${
                isActive ? 'text-gold' : 'text-ivory/70 hover:text-ivory'
              }`
            }
          >
            Home
          </NavLink>

          {/* Occasions Dropdown */}
          <div
            className="relative"
            ref={dropRef}
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
          >
            <button
              className={`text-eyebrow flex items-center gap-1.5 transition-colors py-2 ${
                isOccasionActive ? 'text-gold' : 'text-ivory/70 hover:text-ivory'
              }`}
            >
              Occasions
              <ChevronDown
                size={13}
                className={`transition-transform duration-300 ${dropOpen ? 'rotate-180 text-gold' : ''}`}
              />
            </button>

            {dropOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-64 animate-in fade-in slide-in-from-top-1 duration-200">
                <div className="bg-charcoal-deep/98 backdrop-blur-lg border border-line shadow-2xl py-2">
                  {occasionLinks.map((l) => (
                    <NavLink
                      key={l.to}
                      to={l.to}
                      className={({ isActive }) =>
                        `block px-5 py-3 text-eyebrow text-xs transition-colors ${
                          isActive
                            ? 'text-gold bg-ivory/5'
                            : 'text-ivory/70 hover:text-ivory hover:bg-ivory/5'
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          <NavLink
            to="/rooms"
            className={({ isActive }) =>
              `text-eyebrow transition-colors gold-underline-link ${
                isActive ? 'text-gold' : 'text-ivory/70 hover:text-ivory'
              }`
            }
          >
            Rooms & Stay
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `text-eyebrow transition-colors gold-underline-link ${
                isActive ? 'text-gold' : 'text-ivory/70 hover:text-ivory'
              }`
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-eyebrow transition-colors gold-underline-link ${
                isActive ? 'text-gold' : 'text-ivory/70 hover:text-ivory'
              }`
            }
          >
            Enquire
          </NavLink>

          {/* Reserve Action */}
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-eyebrow text-charcoal-deep bg-gold px-6 py-2.5 hover:bg-gold-light hover:shadow-gold-glow transition-all duration-300 font-medium"
          >
            <span>Book A Visit</span>
          </Link>
        </nav>

        {/* Mobile Toggle Button */}
        <div className="flex md:hidden items-center gap-4">
          <a
            href="tel:+919999999999"
            className="text-gold p-2 border border-line"
            aria-label="Call Sri Ram Farm House"
          >
            <PhoneCall size={18} />
          </a>

          <button
            className="text-ivory p-2 focus:outline-none"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden bg-charcoal-deep/98 backdrop-blur-xl px-6 pt-4 pb-8 flex flex-col gap-1 border-t border-line mt-3 shadow-2xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-eyebrow py-3.5 border-b border-line ${
                isActive ? 'text-gold' : 'text-ivory/80'
              }`
            }
          >
            Home
          </NavLink>

          <button
            onClick={() => setMobileDropOpen((v) => !v)}
            className={`text-eyebrow py-3.5 border-b border-line flex items-center justify-between text-left ${
              isOccasionActive ? 'text-gold' : 'text-ivory/80'
            }`}
          >
            Occasions
            <ChevronDown
              size={14}
              className={`transition-transform duration-300 ${
                mobileDropOpen ? 'rotate-180 text-gold' : ''
              }`}
            />
          </button>

          {mobileDropOpen && (
            <div className="pl-4 flex flex-col bg-ivory/5 my-1">
              {occasionLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `text-eyebrow text-xs py-3 px-3 border-b border-line last:border-b-0 ${
                      isActive ? 'text-gold' : 'text-ivory/60'
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          )}

          <NavLink
            to="/rooms"
            className={({ isActive }) =>
              `text-eyebrow py-3.5 border-b border-line ${
                isActive ? 'text-gold' : 'text-ivory/80'
              }`
            }
          >
            Rooms & Stay
          </NavLink>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `text-eyebrow py-3.5 border-b border-line ${
                isActive ? 'text-gold' : 'text-ivory/80'
              }`
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-eyebrow py-3.5 border-b border-line ${
                isActive ? 'text-gold' : 'text-ivory/80'
              }`
            }
          >
            Contact & Location
          </NavLink>

          <Link
            to="/contact"
            className="text-eyebrow text-center text-charcoal-deep bg-gold px-6 py-3.5 mt-5 font-semibold"
          >
            Book A Visit / Check Dates
          </Link>
        </div>
      )}
    </header>
  );
}

