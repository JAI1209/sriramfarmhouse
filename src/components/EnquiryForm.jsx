import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';

const occasionOptions = ['Wedding', 'Pool Party', 'Farm Stay', 'Private Event'];

export default function EnquiryForm({ dark = false }) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', occasion: occasionOptions[0], date: '', message: '' });

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired yet — this just confirms receipt in the UI.
    setSubmitted(true);
  };

  const base = dark
    ? 'text-ivory placeholder:text-ivory/30 border-line focus:border-gold'
    : 'text-charcoal placeholder:text-charcoal/30 border-charcoal/15 focus:border-gold';

  const fieldClass = `w-full bg-transparent border-0 border-b py-3 font-body focus:outline-none transition-colors ${base}`;
  const labelClass = `text-eyebrow mb-2.5 block ${dark ? 'text-ivory/40' : 'text-charcoal/40'}`;

  if (submitted) {
    return (
      <div className="text-center py-10">
        <span className="w-14 h-14 rounded-full border border-gold flex items-center justify-center mx-auto mb-6">
          <Check className="text-gold" size={22} />
        </span>
        <h3 className={`font-display italic text-2xl mb-3 ${dark ? 'text-ivory' : 'text-charcoal'}`}>
          Thank you, {form.name.split(' ')[0] || 'we\u2019ll be in touch'}
        </h3>
        <p className={dark ? 'text-ivory/50' : 'text-charcoal/50'}>
          A member of our team will call {form.phone || 'you'} shortly to confirm the date.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-7">
      <div>
        <label className={labelClass}>Full Name</label>
        <input className={fieldClass} name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
      </div>
      <div>
        <label className={labelClass}>Phone</label>
        <input className={fieldClass} name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="10-digit mobile" required />
      </div>
      <div>
        <label className={labelClass}>Occasion</label>
        <select className={fieldClass} name="occasion" value={form.occasion} onChange={handleChange}>
          {occasionOptions.map((o) => (
            <option key={o} value={o} className="bg-charcoal-deep text-ivory">{o}</option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClass}>Preferred Date</label>
        <input className={fieldClass} name="date" type="date" value={form.date} onChange={handleChange} />
      </div>
      <div className="sm:col-span-2">
        <label className={labelClass}>Notes</label>
        <textarea className={fieldClass} name="message" rows={3} value={form.message} onChange={handleChange} placeholder="Guest count, rooms needed, anything else" />
      </div>
      <div className="sm:col-span-2 pt-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2 text-eyebrow text-gold border border-gold px-7 py-3.5 hover:bg-gold hover:text-charcoal-deep transition-all duration-300"
        >
          Submit Enquiry
          <ArrowUpRight size={15} />
        </button>
      </div>
    </form>
  );
}
