import { MapPin, ArrowRight } from 'lucide-react';

const primaryArea = {
  label: 'Primary Service Area',
  location: 'Knoxville and surrounding areas',
  note: 'Our home base. Local and regional service throughout East Tennessee.',
};

const extendedRoutes = [
  {
    from: 'Knoxville',
    to: 'Nashville',
    distance: '~175 miles',
    via: 'I-40 West',
  },
  {
    from: 'Knoxville',
    to: 'Charlotte',
    distance: '~175 miles',
    via: 'I-40 East',
  },
  {
    from: 'Knoxville',
    to: 'Atlanta',
    distance: '~180 miles',
    via: 'I-75 South',
  },
  {
    from: 'Knoxville',
    to: 'Chattanooga',
    distance: '~110 miles',
    via: 'I-75 South',
  },
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="bg-navy-900 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <p className="section-label mb-4 flex items-center gap-3">
            <span className="w-8 h-px bg-gold-500" />
            Where We Operate
          </p>
          <h2 className="section-heading mb-4">
            Service Areas &amp; Routes
          </h2>
          <p className="text-white/50 text-base leading-relaxed">
            Based in East Tennessee, we run established routes throughout the Southeast. All routes are direct — no transfers, no delays.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 bg-gold-500/10 border border-gold-500/30 p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full -translate-y-16 translate-x-16" />
            <p className="text-gold-400 text-xs font-semibold tracking-widest uppercase mb-6">
              {primaryArea.label}
            </p>
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-gold-500" />
              <span className="font-serif text-2xl font-semibold text-white">{primaryArea.location}</span>
            </div>
            <div className="border-t border-gold-500/20 pt-6">
              <p className="text-white/50 text-sm leading-relaxed">{primaryArea.note}</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <p className="text-white/40 text-xs font-semibold tracking-widest uppercase mb-6">
              Extended Routes
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {extendedRoutes.map((route) => (
                <div
                  key={`${route.from}-${route.to}`}
                  className="card-glass p-6 hover:bg-white/8 hover:border-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-2 mb-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-white font-medium text-sm truncate">{route.from}</p>
                      <div className="flex items-center gap-1 my-1.5">
                        <ArrowRight className="w-3 h-3 text-gold-500/60 flex-shrink-0" />
                        <div className="h-px flex-1 bg-white/10" />
                        <ArrowRight className="w-3 h-3 text-gold-500 flex-shrink-0" />
                      </div>
                      <p className="text-white font-medium text-sm truncate">{route.to}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                    <span className="text-gold-500 text-sm font-semibold">{route.distance}</span>
                    <span className="text-white/35 text-xs">{route.via}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 card-glass p-5 border-l-2 border-gold-500">
              <p className="text-white/70 text-sm leading-relaxed">
                <span className="text-white font-medium">Custom routes available upon request.</span> Need travel to a city not listed above? Reach out directly — we accommodate special routing on a case-by-case basis throughout Tennessee and the Southeast.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
