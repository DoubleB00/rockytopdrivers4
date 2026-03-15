import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Service Areas', href: '#areas' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'About', href: '#about' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-900/98 backdrop-blur-md shadow-xl shadow-black/30 border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-24">
          <a
            href="#"
            className="flex items-center gap-3 group"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <img
              src="/5BA9AE3F-CFAE-4201-8752-8EE9398DC39D_(1).PNG"
              alt="Rocky Top Drivers LLC"
              className="h-16 sm:h-20 md:h-24 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white/70 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <a
              href="https://rockyropdrivers.setmore.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs px-6 py-3"
            >
              Book a Ride
            </a>
          </nav>

          <button
            className="md:hidden text-white/80 hover:text-white transition-colors p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-navy-900/98 backdrop-blur-md border-t border-white/5 px-6 py-6">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-white/70 hover:text-white text-base font-medium tracking-wide transition-colors duration-200 text-left py-2 border-b border-white/5"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://rockyropdrivers.setmore.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs mt-2 justify-center"
            >
              Book a Ride
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
