import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Target, Clock, Users, Eye, Ruler } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { IMAGES } from '../constants/images';

export function About() {
  return (
    <>
      <PageHero />
      <MissionSection />
      <ValuesSection />
      <ApproachSection />
      <CTABand />
    </>
  );
}

function PageHero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 bg-charcoal-950 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-500/20 to-transparent" />
      </div>
      <div className="relative container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent-400 text-xs font-semibold tracking-[0.15em] uppercase mb-4">
            About Us
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance max-w-3xl">
            Built on Experience.<br />Driven by Excellence.
          </h1>
          <p className="text-charcoal-300 text-lg mt-6 max-w-2xl leading-relaxed">
            Elite Mind Construction is committed to delivering professional construction solutions with quality, safety, and precision at every stage.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function MissionSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <img
              src={IMAGES.about}
              alt="Elite Mind Construction team reviewing project plans"
              className="w-full aspect-[4/3] object-cover rounded-lg"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-accent-500 text-xs font-semibold tracking-[0.15em] uppercase mb-3">
              Our Mission
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal-900 leading-tight">
              Creating Environments That Endure
            </h2>
            <p className="text-charcoal-500 mt-6 leading-relaxed">
              At Elite Mind Construction, we believe great construction is about more than putting materials together. It is about creating environments that serve people, support businesses, and stand the test of time.
            </p>
            <p className="text-charcoal-500 mt-4 leading-relaxed">
              Our approach combines thoughtful planning, skilled workmanship, responsible project management, and a commitment to quality at every stage. We work closely with our clients to understand their goals and deliver practical, durable, and professionally executed results.
            </p>
            <p className="text-charcoal-500 mt-4 leading-relaxed">
              Every project we undertake reflects our dedication to precision, safety, and client satisfaction. We take pride in building structures that our clients can rely on for years to come.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const { ref, isInView } = useInView();

  const values = [
    { icon: Target, title: 'Quality', description: 'We maintain rigorous standards in materials, workmanship, and finishing on every project.' },
    { icon: Shield, title: 'Safety', description: 'Site safety and responsible construction practices are non-negotiable.' },
    { icon: Clock, title: 'Reliability', description: 'We focus on dependable delivery, clear timelines, and consistent communication.' },
    { icon: Users, title: 'Client Focus', description: 'We listen carefully to client needs and align our approach with their objectives.' },
    { icon: Eye, title: 'Precision', description: 'Attention to detail drives our planning, execution, and quality review processes.' },
    { icon: Ruler, title: 'Integrity', description: 'We operate with transparency, honesty, and accountability in all our dealings.' },
  ];

  return (
    <section className="section-padding bg-charcoal-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-accent-500 text-xs font-semibold tracking-[0.15em] uppercase mb-3">
            Our Values
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal-900 text-balance">
            What Guides Our Work
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white rounded-lg p-7 border border-charcoal-100"
            >
              <div className="w-12 h-12 rounded-lg bg-accent-50 flex items-center justify-center mb-5">
                <value.icon size={22} className="text-accent-500" />
              </div>
              <h3 className="font-heading text-lg font-bold text-charcoal-900 mb-2">
                {value.title}
              </h3>
              <p className="text-charcoal-500 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent-500 text-xs font-semibold tracking-[0.15em] uppercase mb-3">
              Our Approach
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal-900 leading-tight">
              Thoughtful Planning.<br />Skilled Execution.
            </h2>
            <p className="text-charcoal-500 mt-6 leading-relaxed">
              We approach every project with a structured methodology that balances careful planning with efficient execution. Our team coordinates closely with clients, subcontractors, and suppliers to ensure smooth project delivery.
            </p>
            <ul className="mt-6 space-y-4">
              {[
                'Comprehensive project assessment and planning',
                'Clear communication at every project stage',
                'Rigorous quality control and safety protocols',
                'Efficient resource coordination and scheduling',
                'Thorough review before project handover',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent-50 flex items-center justify-center mt-0.5 shrink-0">
                    <div className="w-2 h-2 rounded-full bg-accent-500" />
                  </div>
                  <span className="text-charcoal-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src={IMAGES.project1}
              alt="Construction site showing organized project management"
              className="w-full aspect-[4/3] object-cover rounded-lg"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function CTABand() {
  return (
    <section className="bg-charcoal-950 py-16 md:py-20">
      <div className="container-custom text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-balance">
          Ready to Work With Elite Mind?
        </h2>
        <p className="text-charcoal-400 mt-4 max-w-lg mx-auto">
          Let's discuss your project requirements and explore how we can help.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            to="/request-quote"
            className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded transition-all"
          >
            Request a Quote
          </Link>
          <Link
            to="/contact"
            className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded transition-all hover:bg-white/5 flex items-center justify-center gap-2"
          >
            Contact Us <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
