import { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

// Paste your Web3Forms access key here — get one free at https://web3forms.com
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY ?? 'YOUR_ACCESS_KEY_HERE';

interface RideRequest {
  name: string;
  phone: string;
  email: string;
  pickup_location: string;
  dropoff_location: string;
  preferred_date: string;
  preferred_time: string;
  notes: string;
}

const initialForm: RideRequest = {
  name: '',
  phone: '',
  email: '',
  pickup_location: '',
  dropoff_location: '',
  preferred_date: '',
  preferred_time: '',
  notes: '',
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function BookingForm() {
  const [form, setForm] = useState<RideRequest>(initialForm);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    try {
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Ride Request from ${form.name}`,
        from_name: 'Rocky Top Drivers Website',
        name: form.name,
        phone: form.phone,
        email: form.email,
        'Pickup Location': form.pickup_location,
        'Drop-off Location': form.dropoff_location,
        'Preferred Date': form.preferred_date,
        'Preferred Time': form.preferred_time,
        notes: form.notes,
      };

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setForm(initialForm);
      } else {
        throw new Error(data.message ?? 'Submission failed');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again or call us directly.');
    }
  };

  const inputClass =
    'w-full bg-navy-800/60 border border-white/10 text-white placeholder-white/30 px-4 py-3.5 text-sm focus:outline-none focus:border-gold-500/60 focus:bg-navy-800/80 transition-all duration-200';

  if (status === 'success') {
    return (
      <section id="booking" className="bg-navy-950 py-24 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 flex items-center justify-center border border-gold-500/40">
              <CheckCircle className="w-8 h-8 text-gold-500" />
            </div>
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
            Request Received
          </h2>
          <p className="text-white/55 text-base leading-relaxed mb-8 max-w-md mx-auto">
            Thank you for reaching out. We'll review your request and get back to you within a few hours to confirm availability.
          </p>
          <p className="text-white/40 text-sm mb-8">
            For urgent inquiries, please call us directly at{' '}
            <a href="tel:+15035164973" className="text-gold-400 hover:text-gold-300 transition-colors">
              (503) 516-4973
            </a>
          </p>
          <button
            onClick={() => setStatus('idle')}
            className="btn-outline text-xs"
          >
            Submit Another Request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="bg-navy-950 py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 50% 100%, rgba(201,168,76,0.07) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="section-label mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-gold-500" />
              Get Started
            </p>
            <h2 className="section-heading mb-5">
              Request a Ride
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              Fill out the form and we'll confirm availability within a few hours. No commitment required — just a quick inquiry to get the conversation started.
            </p>

            <div className="flex flex-col gap-5 mb-8">
              {[
                { label: 'No booking fees', detail: 'Straightforward pricing, no hidden costs' },
                { label: 'Quick response', detail: 'We confirm within a few hours' },
                { label: 'Flexible scheduling', detail: 'We work around your timeline' },
              ].map(({ label, detail }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{label}</p>
                    <p className="text-white/40 text-xs mt-0.5">{detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="card-glass p-5 border-l-2 border-gold-500">
              <p className="text-white/60 text-sm">
                Prefer to talk?{' '}
                <a href="tel:+15035164973" className="text-gold-400 hover:text-gold-300 font-medium transition-colors">
                  Call (503) 516-4973
                </a>
                {' '}— we're happy to discuss your route and answer any questions.
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/50 text-xs tracking-wide uppercase mb-1.5">Full Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-white/50 text-xs tracking-wide uppercase mb-1.5">Phone *</label>
                  <input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="(865) 000-0000"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/50 text-xs tracking-wide uppercase mb-1.5">Email Address *</label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-white/50 text-xs tracking-wide uppercase mb-1.5">Pickup Location *</label>
                <input
                  name="pickup_location"
                  value={form.pickup_location}
                  onChange={handleChange}
                  required
                  placeholder="Address or city"
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-white/50 text-xs tracking-wide uppercase mb-1.5">Drop-off Location *</label>
                <input
                  name="dropoff_location"
                  value={form.dropoff_location}
                  onChange={handleChange}
                  required
                  placeholder="Address or city"
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/50 text-xs tracking-wide uppercase mb-1.5">Preferred Date</label>
                  <input
                    name="preferred_date"
                    type="date"
                    value={form.preferred_date}
                    onChange={handleChange}
                    className={inputClass + ' [color-scheme:dark]'}
                  />
                </div>
                <div>
                  <label className="block text-white/50 text-xs tracking-wide uppercase mb-1.5">Preferred Time</label>
                  <input
                    name="preferred_time"
                    type="time"
                    value={form.preferred_time}
                    onChange={handleChange}
                    className={inputClass + ' [color-scheme:dark]'}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/50 text-xs tracking-wide uppercase mb-1.5">Notes</label>
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Flight number, special requests, number of passengers, luggage info..."
                  className={inputClass + ' resize-none'}
                />
              </div>

              {status === 'error' && (
                <p className="text-red-400/80 text-sm">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary w-full justify-center mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending Request...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Request
                  </>
                )}
              </button>

              <p className="text-white/25 text-xs text-center">
                We'll respond within a few hours during business hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
