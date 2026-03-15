import { Calendar, Clock, CheckCircle } from 'lucide-react';

export default function BookNow() {
  return (
    <section id="booking" className="bg-gradient-to-br from-navy-900 via-charcoal-900 to-navy-950 py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 70% 30%, rgba(249,115,22,0.08) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-gold-500" />
              Online Booking
            </p>
            <h2 className="section-heading mb-6">
              Schedule Your Ride in Minutes
            </h2>
            <p className="text-white/55 text-base leading-relaxed mb-8">
              Check availability and book your private transportation directly online. Our scheduling system makes it easy to secure your ride — whether you're planning ahead or need service soon.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-gold-500/30 mt-0.5">
                  <Calendar className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1">Real-Time Availability</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    View open time slots and pick the date and time that works for your schedule.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-gold-500/30 mt-0.5">
                  <Clock className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1">Instant Confirmation</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Receive immediate booking confirmation with all trip details via email.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center border border-gold-500/30 mt-0.5">
                  <CheckCircle className="w-5 h-5 text-gold-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-base mb-1">Simple Process</h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Select your service, choose your time, and provide your trip details — all in one place.
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://rockyropdrivers.setmore.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm"
            >
              Schedule Your Ride
            </a>
          </div>

          <div className="lg:pl-8">
            <div className="card-glass p-8 lg:p-10 border-l-2 border-gold-500">
              <h3 className="font-serif text-2xl font-semibold text-white mb-6">
                Booking Information
              </h3>

              <div className="space-y-6 text-white/55 text-sm leading-relaxed">
                <div>
                  <p className="text-white font-medium mb-2">What You'll Need:</p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 mt-1">•</span>
                      <span>Pickup and drop-off locations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 mt-1">•</span>
                      <span>Preferred date and time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 mt-1">•</span>
                      <span>Number of passengers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold-500 mt-1">•</span>
                      <span>Contact information</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-white font-medium mb-2">Need Help?</p>
                  <p>
                    If you have questions about booking or need assistance with a custom route, feel free to call us directly. We're here to help make your travel arrangements as smooth as possible.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <a
                    href="tel:+15035164973"
                    className="text-gold-400 hover:text-gold-300 font-medium transition-colors duration-200"
                  >
                    Call (503) 516-4973
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
