import { useState } from 'react';

const categories = ['All', 'Weddings', 'Pool', 'Rooms', 'Lawn'];

const images = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80', cat: 'Weddings' },
  { src: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=900&q=80', cat: 'Weddings' },
  { src: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=900&q=80', cat: 'Pool' },
  { src: 'https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=900&q=80', cat: 'Pool' },
  { src: 'https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=900&q=80', cat: 'Rooms' },
  { src: 'https://images.unsplash.com/photo-1595576508898-0ad5c879a061?auto=format&fit=crop&w=900&q=80', cat: 'Rooms' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80', cat: 'Lawn' },
  { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80', cat: 'Lawn' },
  { src: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80', cat: 'Lawn' },
];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const shown = filter === 'All' ? images : images.filter((i) => i.cat === filter);

  return (
    <div className="pt-40 pb-28 bg-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <span className="text-eyebrow text-charcoal/40">Gallery</span>
        <h1 className="font-display italic text-4xl md:text-5xl text-charcoal mt-4 mb-12 max-w-2xl leading-tight">
          A look around the estate
        </h1>

        <div className="flex flex-wrap gap-x-8 gap-y-3 mb-14 border-b border-charcoal/10 pb-6">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`text-eyebrow transition-colors ${
                filter === c ? 'text-gold' : 'text-charcoal/40 hover:text-charcoal'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {shown.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={`${img.cat} at Sri Ram Farm House`}
              className="w-full break-inside-avoid hover:opacity-85 transition-opacity"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
