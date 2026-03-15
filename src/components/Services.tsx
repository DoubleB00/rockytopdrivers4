import { Route, Plane, Briefcase, CalendarCheck, Star } from 'lucide-react';

const services = [
  {
    icon: Route,
    title: 'Long-Distance Private Rides',
    description:
      'Door-to-door private transportation across Tennessee and the Southeast. Skip the stress of highway driving — arrive relaxed and on time.',
  },
  {
    icon: Plane,
    title: 'Airport Transfers',
    description:
      'Private airport transportation with scheduled pickups and drop-offs. Direct service to McGhee Tyson, Nashville International, Charlotte Douglas, and Hartsfield-Jackson. Reliable, comfortable, and built around your travel schedule.',
  },
  {
    icon: Briefcase,
    title: 'Executive & Business Travel',
    description:
      'Discreet, professional service for business professionals. Clean vehicle, quiet ride, and reliable timing — every time.',
  },
  {
    icon: CalendarCheck,
    title: 'Scheduled Recurring Routes',
    description:
      'Consistent weekly or monthly routes for clients with predictable travel needs. Build a schedule once and count on it.',
  },
  {
    icon: Star,
    title: 'Special Event Transportation',
    description:
      'Weddings, concerts, sporting events, and private gatherings. Arrive and depart with comfort and peace of mind.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-charcoal-900 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <p className="section-label mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-gold-500" />
            What We Offer
          </p>
          <h2 className="section-heading mb-4">
            Services Built for Serious Travelers
          </h2>
          <p className="text-white/50 text-base leading-relaxed">
            We specialize in routes and clientele that require dependability, not volume. Every service is tailored around your schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`group card-glass p-8 transition-all duration-300 hover:bg-white/8 hover:border-gold-500/30 hover:-translate-y-1 ${
                i === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="w-12 h-12 flex items-center justify-center border border-gold-500/30 group-hover:border-gold-500/60 mb-6 transition-colors duration-300">
                <service.icon className="w-5 h-5 text-gold-500" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-white mb-3 leading-snug">
                {service.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
