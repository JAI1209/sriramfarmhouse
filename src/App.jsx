import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Code-split route level pages for maximum performance and faster initial paint
const Home = lazy(() => import('./pages/Home'));
const Weddings = lazy(() => import('./pages/Weddings'));
const PoolParty = lazy(() => import('./pages/PoolParty'));
const CorporateEvents = lazy(() => import('./pages/CorporateEvents'));
const Rooms = lazy(() => import('./pages/Rooms'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Contact = lazy(() => import('./pages/Contact'));

// Helper to scroll window to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// 5-Star Luxury Page Loading Shimmer Fallback
function LuxuryLoader() {
  return (
    <div className="min-h-screen w-full bg-charcoal-deep flex flex-col items-center justify-center text-ivory">
      <div className="relative mb-6">
        <div className="w-16 h-16 rounded-full border border-line border-t-gold animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
        </div>
      </div>
      <span className="font-display italic text-2xl text-ivory tracking-wider">
        Sri Ram Farm House
      </span>
      <span className="text-eyebrow text-gold text-xs mt-2 tracking-widest3">
        Bihar Sharif, Nalanda
      </span>
    </div>
  );
}

export default function App() {
  return (
    <div className="font-body min-h-screen flex flex-col bg-[#FAF7F2]">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<LuxuryLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/weddings" element={<Weddings />} />
            <Route path="/pool-party" element={<PoolParty />} />
            <Route path="/corporate-events" element={<CorporateEvents />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

