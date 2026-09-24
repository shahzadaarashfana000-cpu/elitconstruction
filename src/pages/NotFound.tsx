import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

export function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-charcoal-50 pt-20">
      <div className="container-custom text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent-500 text-8xl md:text-9xl font-heading font-bold opacity-20">
            404
          </p>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-charcoal-900 -mt-8 mb-4">
            Page Not Found
          </h1>
          <p className="text-charcoal-500 max-w-md mx-auto leading-relaxed">
            The page you're looking for may have moved or no longer exists. Please check the URL or navigate back to our homepage.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded mt-8 transition-all"
          >
            <Home size={18} />
            Return Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
