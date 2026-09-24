import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Projects', path: '/projects' },
  { label: 'Contact', path: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
      role="banner"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex flex-col leading-none group"
            aria-label="Elite Mind Construction - Home"
          >
            <span className={`font-heading text-lg sm:text-xl font-bold tracking-tight transition-colors ${
              isScrolled ? 'text-charcoal-900' : 'text-white'
            }`}>
              ELITE MIND
            </span>
            <span className={`text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase transition-colors ${
              isScrolled ? 'text-accent-500' : 'text-accent-300'
            }`}>
              Construction
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-accent-500 after:transition-all hover:after:w-full ${
                  location.pathname === link.path
                    ? 'text-accent-500 after:w-full'
                    : isScrolled
                    ? 'text-charcoal-700 hover:text-charcoal-900'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/request-quote"
              className="bg-accent-500 hover:bg-accent-600 text-white text-sm font-semibold px-6 py-2.5 rounded transition-all hover:shadow-lg hover:shadow-accent-500/20"
            >
              Request a Quote
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded transition-colors ${
              isScrolled ? 'text-charcoal-900' : 'text-white'
            }`}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 bg-charcoal-950/98 backdrop-blur-lg lg:hidden z-50"
          >
            <div className="flex flex-col h-full">
              <div className="container-custom flex items-center justify-between py-5">
                <Link to="/" className="flex flex-col leading-none">
                  <span className="font-heading text-xl font-bold tracking-tight text-white">
                    ELITE MIND
                  </span>
                  <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent-400">
                    Construction
                  </span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-white"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex-1 flex flex-col justify-center items-center gap-6" aria-label="Mobile navigation">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      className={`text-2xl font-heading font-semibold transition-colors ${
                        location.pathname === link.path
                          ? 'text-accent-400'
                          : 'text-white hover:text-accent-300'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4"
                >
                  <Link
                    to="/request-quote"
                    className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-3 rounded transition-all"
                  >
                    Request a Quote
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
