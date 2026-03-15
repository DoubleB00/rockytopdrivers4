export default function About() {
  return (
    <section id="about" className="bg-charcoal-900 py-24 lg:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative bg-charcoal-700 flex items-center justify-center">
              <img
                src="/image0_(1).jpeg"
                alt="Rocky Top Drivers owners - Family-owned business"
                className="w-full h-80 lg:h-[520px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-charcoal-900/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-gold-500/20 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border border-white/5 -z-10" />

            <div className="absolute bottom-6 left-6 right-6 bg-charcoal-900/90 backdrop-blur-sm border border-white/10 p-6 shadow-lg">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 flex-shrink-0">
                  <img
                    src="/5BA9AE3F-CFAE-4201-8752-8EE9398DC39D_(1).PNG"
                    alt="Rocky Top Drivers LLC"
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-base">Rocky Top Drivers, LLC</p>
                  <p className="text-white/60 text-sm">Family-Owned • Knoxville, Tennessee</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="section-label mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-gold-500" />
              About Us
            </p>
            <h2 className="section-heading mb-6">
              A Tennessee-Based Service Built on Trust
            </h2>

            <div className="space-y-5 text-white/55 text-base leading-relaxed">
              <p>
                Rocky Top Drivers, LLC is a locally owned private transportation company based in East Tennessee. We were built with a simple purpose: to provide the kind of reliable, personal service that busy professionals and frequent travelers can actually count on.
              </p>
              <p>
                We don't operate like a rideshare platform. We focus on building long-term relationships with a steady client base — people who travel regularly throughout the Southeastern United States, fly in and out of regional airports, and need transportation they can schedule and forget about.
              </p>
              <p>
                Our primary service area is the Southeastern United States, but we're also available for private long-distance trips anywhere in the United States upon request. When you book with us, you're not taking a chance on a random driver. You know who's picking you up, when they'll be there, and how the ride will go.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 pt-8 border-t border-white/10">
              {[
                { value: 'East TN', label: 'Based In' },
                { value: 'Southeast', label: 'Coverage Area' },
                { value: 'Discreet', label: 'Service Style' },
                { value: 'Direct', label: 'Communication' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="font-serif text-xl font-semibold text-gold-400">{value}</p>
                  <p className="text-white/40 text-xs uppercase tracking-wide mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
