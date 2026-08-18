/**
 * Centralized SEO & Structured Data Config
 * Supplies page titles, meta descriptions, Open Graph, Twitter cards,
 * and Schema.org JSON-LD (LodgingBusiness / EventVenue).
 */

const BASE_URL = 'https://sriramfarmhouse.in';
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80';

export const baseSchema = {
  '@context': 'https://schema.org',
  '@type': ['LodgingBusiness', 'EventVenue'],
  name: 'Sri Ram Farm House',
  alternateName: 'Sri Ram Farmhouse Bihar Sharif',
  description: 'A premier 3-acre luxury farmhouse in Bihar Sharif featuring a grand banquet hall, 3-acre emerald lawn, private swimming pool, and 8 boutique rooms for weddings, parties, and corporate events.',
  url: BASE_URL,
  logo: `${BASE_URL}/leaf.svg`,
  image: DEFAULT_IMAGE,
  telephone: '+91-99999-99999',
  email: 'hello@sriramfarmhouse.in',
  priceRange: '₹₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sohdih, near Bihar Sharif',
    addressLocality: 'Bihar Sharif',
    addressRegion: 'Bihar',
    postalCode: '803118',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '25.1982',
    longitude: '85.5186',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Swimming Pool', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Grand Banquet Hall', value: true },
    { '@type': 'LocationFeatureSpecification', name: '3-Acre Wedding Lawn', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Boutique Guest Rooms', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Private Catering & Bar', value: true },
    { '@type': 'LocationFeatureSpecification', name: '100% Power Backup', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Valet Parking', value: true },
  ],
};

export const seoRoutes = {
  '/': {
    title: 'Sri Ram Farm House | Luxury Farmhouse for Weddings, Pool Parties & Events in Bihar',
    description:
      'Sri Ram Farm House is a premier 3-acre luxury estate in Bihar Sharif. Discover our grand banquet hall, expansive green lawns, heated private pool, and boutique suites for unforgettable weddings and events.',
    canonical: `${BASE_URL}/`,
    ogImage: DEFAULT_IMAGE,
    keywords: 'farmhouse in bihar, luxury wedding venue bihar sharif, private pool party bihar, best farm stay nalanda, banquet hall bihar',
  },
  '/rooms': {
    title: 'Luxury Rooms & Suites | Sri Ram Farm House Bihar',
    description:
      'Experience serene estate living in our 8 boutique guest suites with private verandas overlooking lush orchards. Perfect for wedding guests, family holidays, and executive retreats.',
    canonical: `${BASE_URL}/rooms`,
    ogImage: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
    keywords: 'farmhouse rooms bihar, luxury stay bihar sharif, resort rooms nalanda, weekend getaway bihar',
  },
  '/gallery': {
    title: 'Photo Gallery — Banquet Hall, Lawn, Pool & Rooms | Sri Ram Farm House',
    description:
      'Explore high-resolution photographs of Sri Ram Farm House: grand banquet hall chandeliers, 3-acre emerald wedding lawn, private swimming pool, and luxury boutique rooms.',
    canonical: `${BASE_URL}/gallery`,
    ogImage: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1200&q=80',
    keywords: 'sri ram farmhouse photos, farmhouse gallery bihar, wedding venue pictures bihar sharif',
  },
  '/weddings': {
    title: 'Royal Destination Weddings & Receptions | Sri Ram Farm House Bihar',
    description:
      'Host your dream wedding across 3 acres of pristine green lawns and a grand banquet hall. In-house gourmet catering, dedicated bridal suites, and complete private estate exclusivity.',
    canonical: `${BASE_URL}/weddings`,
    ogImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    keywords: 'wedding farmhouse bihar, marriage lawn bihar sharif, destination wedding bihar, mandap lawn bihar',
  },
  '/pool-party': {
    title: 'Private Pool Parties & Day Escapes | Sri Ram Farm House',
    description:
      'Book a 100% private swimming pool slot with luxury cabana seating, live poolside barbecue grill, and sound system. Reserved exclusively for your group.',
    canonical: `${BASE_URL}/pool-party`,
    ogImage: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80',
    keywords: 'pool party venue bihar, private pool rental bihar sharif, day outing farm bihar',
  },
  '/corporate-events': {
    title: 'Corporate Offsites, Conclaves & Private Celebrations | Sri Ram Farm House',
    description:
      'Indoor air-conditioned hall with audio-visual equipment and open-air breakout lawns. Tailored full-day catering packages and high-speed wifi for strategic company offsites.',
    canonical: `${BASE_URL}/corporate-events`,
    ogImage: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    keywords: 'corporate offsite bihar, conference hall bihar sharif, milestone birthday party venue nalanda',
  },
  '/contact': {
    title: 'Enquire & Reserve Your Date | Sri Ram Farm House Bihar',
    description:
      'Connect with the estate concierge to check date availability, request a custom quote, or schedule a personal walkthrough of Sri Ram Farm House.',
    canonical: `${BASE_URL}/contact`,
    ogImage: DEFAULT_IMAGE,
    keywords: 'contact sri ram farmhouse, booking inquiry bihar farmhouse, site visit appointment',
  },
};
