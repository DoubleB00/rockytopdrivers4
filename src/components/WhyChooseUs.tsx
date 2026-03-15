import { Clock, Shield, Car, MessageCircle, Ban } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'Reliable & Punctual',
    description:
      'Your time is valuable. We arrive on time, every time — with built-in buffer planning for traffic and flight delays.',
  },
  {
    icon: Shield,
    title: 'Private & Professional',
    description:
      'Your ride is yours alone. No shared vehicles, no strangers, and complete discretion for business or personal travel.',
  },
  {
    icon: Car,
    title: 'Comfortable Vehicle Experience',
    description:
      'Ride in a clean, well-maintained vehicle with ample space for luggage, a smooth cabin environment, and a quiet atmosphere.',
  },
  {
    icon: MessageCircle,
    title: 'Direct Communication',
    description:
      'Reach your driver directly. No apps, no phone trees. Simple, clear communication before and during every trip.',
  },
  {
    icon: Ban,
    title: 'No Rideshare Uncertainty',
    description:
      'No surge pricing. No unknown drivers. No cancellations at the last minute. Just consistent, dependable service you can plan around.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-charcoal-800 py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 80% 20%, rgba(201,168,76,0.06) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <p className="section-label mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-gold-500" />
              The Difference
            </p>
            <h2 className="section-heading mb-6">
              Why Clients Choose Rocky Top Drivers
            </h2>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              We built this service around the clients who need more than a rideshare — those who value consistency, professionalism, and a driver they can trust over the long term.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                Locally owned and operated
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                Long-term client relationships
              </div>
              <div className="flex items-center gap-3 text-white/60 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                Consistent routes, consistent driver
              </div>
            </div>

            <div className="mt-10">
              <img
                src="/5B4D09AA-527A-4636-AF3E-D856B22429FE.JPG"
                alt="White GMC Acadia - Premium executive transportation vehicle"
                className="w-full h-56 object-cover object-center opacity-90 border border-white/10"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="flex gap-5 p-6 border border-white/8 hover:border-gold-500/30 hover:bg-white/3 transition-all duration-300 group"
              >
                <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center border border-white/15 group-hover:border-gold-500/40 transition-colors duration-300">
                  <reason.icon className="w-5 h-5 text-gold-500/70 group-hover:text-gold-500 transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-white mb-2">{reason.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{reason.description}</p>
                </div>
                <div className="ml-auto flex-shrink-0 text-white/15 font-light text-xs self-start pt-0.5">
                  0{i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
