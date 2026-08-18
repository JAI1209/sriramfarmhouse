import { useState } from 'react';
import { ArrowUpRight, Check, ShieldCheck, Sparkles } from 'lucide-react';

const occasionOptions = [
  'Wedding & Reception',
  'Private Pool Party',
  'Boutique Stay & Rooms',
  'Corporate Offsite & Conference',
  'Milestone Birthday & Private Event',
];

export default function EnquiryForm({ dark = false }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    occasion: occasionOptions[0],
    date: '',
    guestCount: '',
    message: '',
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const base = dark
    ? 'text-ivory placeholder:text-ivory/30 border-line focus:border-gold'
    : 'text-charcoal placeholder:text-charcoal/30 border-charcoal/20 focus:border-gold';

  const fieldClass = `w-full bg-transparent border-0 border-b py-3 font-body focus:outline-none transition-colors text-sm md:text-base ${base}`;
  const labelClass = `text-eyebrow mb-2 block text-xs ${
    dark ? 'text-ivory/50' : 'text-charcoal/60'
  }`;

  if (submitted) {
    return (
      <div className="text-center py-12 px-6 border border-gold/40 bg-gold/5 max-w-xl mx-auto">
        <span className="w-16 h-16 rounded-full border border-gold flex items-center justify-center mx-auto mb-6 bg-charcoal-deep shadow-gold-glow">
          <Check className="text-gold" size={28} />
        </span>
        <span className="text-eyebrow text-gold block mb-2">Reservation Request Received</span>
        <h3
          className={`font-display italic text-3xl mb-4 ${
            dark ? 'text-ivory' : 'text-charcoal'
          }`}
        >
          Thank you, {form.name.split(' ')[0] || 'Esteemed Guest'}
        </h3>
        <p
          className={`font-body text-sm md:text-base max-w-md mx-auto leading-relaxed mb-6 ${
            dark ? 'text-ivory/60' : 'text-charcoal/70'
          }`}
        >
          Our estate manager has received your enquiry for{' '}
          <strong className="text-gold font-normal">
            {form.occasion}
          </strong>{' '}
          {form.date ? `on ${form.date}` : ''}. We will reach out to{' '}
          <span className="underline">{form.phone || 'your phone'}</span> shortly with current availability and pricing.
        </p>

        <div className="inline-flex items-center gap-2 text-xs text-gold/80 font-body">
          <ShieldCheck size={14} />
          <span>Held under Single-Event Exclusivity Policy</span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
      <div>
        <label className={labelClass}>Full Name *</label>
        <input
          className={fieldClass}
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="e.g. Aditya Sharma"
          required
        />
      </div>

      <div>
        <label className={labelClass}>Phone Number (WhatsApp) *</label>
        <input
          className={fieldClass}
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="+91 98765 43210"
          required
        />
      </div>

      <div>
        <label className={labelClass}>Select Occasion *</label>
        <select
          className={fieldClass}
          name="occasion"
          value={form.occasion}
          onChange={handleChange}
        >
          {occasionOptions.map((o) => (
            <option key={o} value={o} className="bg-charcoal-deep text-ivory">
              {o}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass}>Preferred Date</label>
        <input
          className={fieldClass}
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
        />
      </div>

      <div>
        <label className={labelClass}>Estimated Guest Count</label>
        <input
          className={fieldClass}
          name="guestCount"
          type="text"
          value={form.guestCount}
          onChange={handleChange}
          placeholder="e.g. 200 Guests / 8 Rooms"
        />
      </div>

      <div>
        <label className={labelClass}>Email Address</label>
        <input
          className={fieldClass}
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="name@domain.com"
        />
      </div>

      <div className="sm:col-span-2">
        <label className={labelClass}>Specific Requirements & Details</label>
        <textarea
          className={fieldClass}
          name="message"
          rows={3}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about catering, timing, pool access, or special decor requirements..."
        />
      </div>

      <div className="sm:col-span-2 pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 text-eyebrow text-charcoal-deep bg-gold hover:bg-gold-light hover:shadow-gold-glow px-9 py-4 transition-all duration-300 font-semibold cursor-pointer"
        >
          <span>Send Booking Request</span>
          <ArrowUpRight size={16} />
        </button>

        <div className="flex items-center gap-2 text-xs text-gold/70 font-body">
          <Sparkles size={13} />
          <span>Typically confirmed within 2 to 4 hours</span>
        </div>
      </div>
    </form>
  );
}

