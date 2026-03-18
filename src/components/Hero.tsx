import { Phone, ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollDown = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Private executive vehicle on open road"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/85 to-navy-900/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
      </div>

      <div className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.08) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 flex flex-col items-center text-center">
            <img
              src="/5BA9AE3F-CFAE-4201-8752-8EE9398DC39D_(1).PNG"
              alt="Rocky Top Drivers LLC"
              className="h-40 sm:h-48 md:h-56 lg:h-64 xl:h-72 w-auto object-contain mb-6"
            />
            <h2 className="text-orange-500 font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-wide leading-tight whitespace-nowrap mb-4">
              The Bunny Hive – Knoxville
            </h2>
            <p className="text-white/60 text-base sm:text-lg md:text-xl font-light tracking-wider leading-relaxed">
              A social club for littles and their adults
            </p>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-tight mb-6 text-balance text-center">
            Private Long-Distance
            <span className="block text-gold-400">&amp; Executive</span>
            Ride Service
          </h1>

          <p className="text-white/65 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl font-light text-center mx-auto">
            Reliable private transportation between Knoxville, Nashville, Charlotte &amp; Atlanta. No rideshare uncertainty — just a trusted driver, on your schedule.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://rockyropdrivers.setmore.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book a Ride
            </a>
            <a href="tel:+15035164973" className="btn-outline">
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>

          <div className="mt-16 flex items-center justify-center gap-8 pt-8 border-t border-white/10">
            {[
              { value: '2025', label: 'Established' },
              { value: '100%', label: 'Private Rides' },
              { value: '24/7', label: 'Availability' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-serif text-2xl font-semibold text-orange-500">{value}</div>
                <div className="text-white/50 text-xs tracking-wide uppercase mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/40 hover:text-white/80 transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-7 h-7" />
      </button>
    </section>
  );
}
