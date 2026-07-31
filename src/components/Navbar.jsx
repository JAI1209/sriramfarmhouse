import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const occasionLinks = [
  { to: '/weddings', label: 'Weddings' },
  { to: '/pool-party', label: 'Pool Parties' },
  { to: '/corporate-events', label: 'Corporate & Events' },
];

const links = [
  { to: '/', label: 'Home' },
  { to: '/rooms', label: 'Rooms & Stay' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Enquire' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [mobileDropOpen, setMobileDropOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
        scrolled ? 'bg-charcoal-deep/90 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-24">
        <Link to="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-display italic text-ivory text-xl tracking-tight">Sri Ram</span>
          <span className="text-eyebrow text-gold mt-1">Farm House</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <NavLink
            to="/"
            className={({ isActive }) => `text-eyebrow transition-colors ${isActive ? 'text-gold' : 'text-ivory/60 hover:text-ivory'}`}
          >
            Home
          </NavLink>

          <div
            className="relative"
            ref={dropRef}
            onMouseEnter={() => setDropOpen(true)}
            onMouseLeave={() => setDropOpen(false)}
          >
            <button
              className={`text-eyebrow flex items-center gap-1.5 transition-colors ${isOccasionActive ? 'text-gold' : 'text-ivory/60 hover:text-ivory'}`}
            >
              Occasions
              <ChevronDown size={13} className={`transition-transform ${dropOpen ? 'rotate-180' : ''}`} />
            </button>
            {dropOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56">
                <div className="bg-charcoal-deep border border-line py-2">
                  {occasionLinks.map((l) => (
                    <NavLink
                      key={l.to}
                      to={l.to}
                      className={({ isActive }) =>
                        `block px-5 py-3 text-eyebrow transition-colors ${isActive ? 'text-gold' : 'text-ivory/70 hover:text-ivory hover:bg-ivory/5'}`
                      }
                    >
                      {l.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>

          {links.slice(1).map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `text-eyebrow transition-colors ${isActive ? 'text-gold' : 'text-ivory/60 hover:text-ivory'}`}
            >
              {l.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="text-eyebrow text-ivory border border-gold/50 px-6 py-3 hover:bg-gold hover:text-charcoal-deep hover:border-gold transition-all duration-300"
          >
            Reserve
          </Link>
        </nav>

        <button className="md:hidden text-ivory" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-charcoal-deep px-6 pb-8 flex flex-col gap-1 border-t border-line">
          <NavLink to="/" className={({ isActive }) => `text-eyebrow py-3 border-b border-line ${isActive ? 'text-gold' : 'text-ivory/70'}`}>
            Home
          </NavLink>

          <button
            onClick={() => setMobileDropOpen((v) => !v)}
            className={`text-eyebrow py-3 border-b border-line flex items-center justify-between ${isOccasionActive ? 'text-gold' : 'text-ivory/70'}`}
          >
            Occasions
            <ChevronDown size={13} className={`transition-transform ${mobileDropOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileDropOpen && (
            <div className="pl-4 flex flex-col">
              {occasionLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) => `text-eyebrow py-2.5 border-b border-line ${isActive ? 'text-gold' : 'text-ivory/55'}`}
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          )}

          {links.slice(1).map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => `text-eyebrow py-3 border-b border-line ${isActive ? 'text-gold' : 'text-ivory/70'}`}>
              {l.label}
            </NavLink>
          ))}

          <Link to="/contact" className="text-eyebrow text-center text-charcoal-deep bg-gold px-6 py-3.5 mt-4">
            Reserve
          </Link>
        </div>
      )}
    </header>
  );
}
