import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-charcoal-950 text-white" role="contentinfo">
      {/* CTA Band */}
      <div className="border-b border-white/10">
        <div className="container-custom py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-balance">
                Ready to start your project?
              </h3>
              <p className="text-charcoal-400 mt-2">
                Let's discuss your construction requirements.
              </p>
            </div>
            <Link
              to="/request-quote"
              className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-3.5 rounded transition-all hover:shadow-lg hover:shadow-accent-500/20 flex items-center gap-2 shrink-0"
            >
              Request a Quote
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex flex-col leading-none mb-4">
              <span className="font-heading text-xl font-bold tracking-tight text-white">
                ELITE MIND
              </span>
              <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-accent-400">
                Construction
              </span>
            </Link>
            <p className="text-charcoal-400 text-sm leading-relaxed mt-4">
              Building with precision. Delivering with confidence. Professional construction solutions for residential and commercial projects.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-charcoal-700 flex items-center justify-center text-charcoal-400 hover:text-accent-400 hover:border-accent-400 transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-charcoal-700 flex items-center justify-center text-charcoal-400 hover:text-accent-400 hover:border-accent-400 transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-charcoal-700 flex items-center justify-center text-charcoal-400 hover:text-accent-400 hover:border-accent-400 transition-colors"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-charcoal-200 mb-4">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', path: '/' },
                { label: 'About', path: '/about' },
                { label: 'Services', path: '/services' },
                { label: 'Projects', path: '/projects' },
                { label: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-charcoal-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-charcoal-200 mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                'General Construction',
                'Residential Construction',
                'Commercial Construction',
                'Renovation & Remodeling',
                'Project Management',
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-charcoal-400 hover:text-white text-sm transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-charcoal-200 mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-charcoal-400">
              <li>
                <span className="text-charcoal-300">Phone:</span>
                <br />
                [PHONE NUMBER]
              </li>
              <li>
                <span className="text-charcoal-300">Email:</span>
                <br />
                [EMAIL ADDRESS]
              </li>
              <li>
                <span className="text-charcoal-300">Office:</span>
                <br />
                [OFFICE ADDRESS]
              </li>
              <li>
                <span className="text-charcoal-300">Hours:</span>
                <br />
                [BUSINESS HOURS]
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-charcoal-500 text-xs">
            © 2026 Elite Mind Construction. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-charcoal-500 hover:text-charcoal-300 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-charcoal-500 hover:text-charcoal-300 text-xs transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
