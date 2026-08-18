/**
 * Structured dataset for the 4 Primary Estate Spaces:
 * 1. Grand Banquet Hall
 * 2. 3-Acre Emerald Lawn
 * 3. Private Swimming Pool & Deck
 * 4. Boutique Rooms & Suites
 */

export const estateSpaces = [
  {
    id: 'banquet-hall',
    title: 'Grand Banquet Hall',
    category: 'Banquet Hall',
    subtitle: 'Air-Conditioned Royal Indoor Venue',
    tagline: 'Gilded chandeliers & regal dining',
    description:
      'A majestic 4,500 sq.ft indoor hall equipped with crystal chandeliers, acoustic wall panels, flexible stage rigging, and premium banquet dining for 350+ guests.',
    capacity: '350+ Guests',
    area: '4,500 sq.ft',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1400&q=80',
    alt: 'Grand air-conditioned banquet hall with chandeliers at Sri Ram Farm House',
    link: '/gallery?cat=Banquet+Hall',
    route: '/corporate-events',
    features: [
      'Centralized Climate Control & Air Conditioning',
      'Integrated Audio-Visual & Stage Lighting',
      'Dedicated Catering & Live Counter Setup',
      'Attached Groom & Speaker Green Rooms',
    ],
  },
  {
    id: 'emerald-lawn',
    title: '3-Acre Emerald Lawn',
    category: 'Emerald Lawn',
    subtitle: 'Open-Sky Manicured Grounds',
    tagline: 'Under the canopy of stars & fairy lights',
    description:
      'Vast expanses of manicured real grass bordered by mature trees. Designed for grand royal wedding mandaps, sangeet stages, and magnificent celebrations with 500+ attendees.',
    capacity: '500+ Guests',
    area: '3 Acres',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80',
    alt: 'Lush 3-acre emerald lawn prepared for luxury wedding at Sri Ram Farm House',
    link: '/gallery?cat=Emerald+Lawn',
    route: '/weddings',
    features: [
      'Levelled natural grass lawn for mandap & seating',
      'High-mast illumination & ambient fairy lighting',
      'Wide entrance promenade for baraat procession',
      'Dedicated power backup for heavy stage rigs',
    ],
  },
  {
    id: 'private-pool',
    title: 'Private Pool & Deck',
    category: 'Private Pool',
    subtitle: 'Exclusive Cabana Oasis',
    tagline: 'Held exclusively for your private party',
    description:
      'A temperature-regulated private swimming pool framed by teakwood sun decks, shaded private cabanas, dedicated poolside cocktail bar, and outdoor surround sound.',
    capacity: '60–80 Guests',
    area: '1,800 sq.ft Deck',
    image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1400&q=80',
    alt: 'Private swimming pool with cabanas and sun loungers at Sri Ram Farm House',
    link: '/gallery?cat=Private+Pool',
    route: '/pool-party',
    features: [
      '100% Private slot — no shared guests',
      'Shaded luxury cabanas & plush loungers',
      'Poolside live barbecue grill station',
      'Private changing suites & fresh towel service',
    ],
  },
  {
    id: 'luxury-rooms',
    title: 'Boutique Rooms & Suites',
    category: 'Rooms & Suites',
    subtitle: '8 Serene On-Site Residences',
    tagline: 'Wake up to morning birdsong and orchard views',
    description:
      'Eight handcrafted suites with private verandas, teakwood furnishings, plush king beds, and home-cooked culinary hospitality. Perfect for wedding families and overnight retreats.',
    capacity: '24–30 Overnight',
    area: '8 Private Suites',
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1400&q=80',
    alt: 'Executive luxury bedroom with king bed and veranda at Sri Ram Farm House',
    link: '/gallery?cat=Rooms+%26+Suites',
    route: '/rooms',
    features: [
      'Private sit-out verandas overlooking the farm',
      'In-room climate control & en-suite luxury baths',
      'Custom home-style meals prepared fresh',
      'Complimentary evening bonfire & lawn access',
    ],
  },
];
