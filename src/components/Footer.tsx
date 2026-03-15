import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const serviceAreas = [
  'Knoxville, TN',
  'Nashville, TN',
  'Charlotte, NC',
  'Atlanta, GA',
  'East Tennessee Region',
];

const services = [
  'Long-Distance Private Rides',
  'Airport Transfers',
  'Executive & Business Travel',
  'Scheduled Recurring Routes',
  'Special Event Transportation',
];

export default function Footer() {
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 border-t border-white/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="lg:col-span-1">
            <div className="mb-5">
              <img
                src="/5BA9AE3F-CFAE-4201-8752-8EE9398DC39D_(1).PNG"
                alt="Rocky Top Drivers LLC"
                className="h-24 w-auto object-contain"
              />
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Private transportation built for reliability. Serving Knoxville, Nashville, Charlotte, and Atlanta.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/share/1GVcMbLmbP/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center border border-white/10 hover:border-gold-500/40 hover:text-gold-500 text-white/40 transition-all duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/rockytopdrivers?igsh=bDhmNzgwcGNpMmZk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center border border-white/10 hover:border-gold-500/40 hover:text-gold-500 text-white/40 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollToSection('#services')}
                    className="text-white/40 hover:text-white/70 text-sm transition-colors duration-200 text-left"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">Service Areas</h4>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-gold-500/50 flex-shrink-0" />
                  <span className="text-white/40 text-sm">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs font-semibold tracking-widest uppercase mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+15035164973"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 flex items-center justify-center border border-white/10 group-hover:border-gold-500/40 flex-shrink-0 mt-0.5 transition-colors duration-200">
                    <Phone className="w-3.5 h-3.5 text-gold-500/60 group-hover:text-gold-500 transition-colors duration-200" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wide mb-0.5">Phone</p>
                    <p className="text-white/70 group-hover:text-white text-sm transition-colors duration-200">(503) 516-4973</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:rockytopdrivers@gmail.com"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-8 h-8 flex items-center justify-center border border-white/10 group-hover:border-gold-500/40 flex-shrink-0 mt-0.5 transition-colors duration-200">
                    <Mail className="w-3.5 h-3.5 text-gold-500/60 group-hover:text-gold-500 transition-colors duration-200" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wide mb-0.5">Email</p>
                    <p className="text-white/70 group-hover:text-white text-sm transition-colors duration-200 break-all">rockytopdrivers@gmail.com</p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center border border-white/10 flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-gold-500/60" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wide mb-0.5">Based In</p>
                  <p className="text-white/70 text-sm">Knoxville, Tennessee</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Rocky Top Drivers, LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-white/20 text-xs">Knoxville &middot; Nashville &middot; Charlotte &middot; Atlanta</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
