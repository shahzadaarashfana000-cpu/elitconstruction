import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, HardHat, Wrench, ClipboardList, TreePine, Shield, CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const services = [
  {
    icon: Building2,
    title: 'General Construction',
    description: 'Complete construction solutions managed with attention to quality, schedule, safety, and project requirements.',
    features: ['Full project coordination', 'Quality assurance', 'Schedule management', 'Safety compliance'],
  },
  {
    icon: HardHat,
    title: 'Residential Construction',
    description: 'Thoughtfully planned residential projects designed around functionality, durability, comfort, and modern living.',
    features: ['Custom home building', 'Multi-family construction', 'Energy-efficient design', 'Modern finishes'],
  },
  {
    icon: Building2,
    title: 'Commercial Construction',
    description: 'Professional construction services for commercial spaces designed to meet operational, functional, and aesthetic requirements.',
    features: ['Office buildings', 'Retail spaces', 'Industrial facilities', 'Tenant improvements'],
  },
  {
    icon: Wrench,
    title: 'Renovation & Remodeling',
    description: 'Transform existing spaces through carefully planned renovations, upgrades, and remodeling solutions.',
    features: ['Interior renovation', 'Structural modifications', 'System upgrades', 'Aesthetic improvements'],
  },
  {
    icon: ClipboardList,
    title: 'Project Management',
    description: 'Coordinated project management focused on planning, communication, execution, quality control, and efficient delivery.',
    features: ['Scope planning', 'Budget management', 'Timeline coordination', 'Quality control'],
  },
  {
    icon: TreePine,
    title: 'Site Development',
    description: 'Organized site preparation and development solutions supporting safe, efficient, and successful construction projects.',
    features: ['Site assessment', 'Grading and preparation', 'Utility coordination', 'Environmental compliance'],
  },
];

export function Services() {
  return (
    <>
      <PageHero />
      <ServicesGrid />
      <WhyChooseBand />
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
            Our Services
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance max-w-3xl">
            Construction Expertise<br />From Concept to Completion
          </h1>
          <p className="text-charcoal-300 text-lg mt-6 max-w-2xl leading-relaxed">
            We provide comprehensive construction services tailored to meet the specific requirements of each project, from initial planning through final delivery.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ServicesGrid() {
  const { ref, isInView } = useInView();

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-xl p-8 border border-charcoal-100 hover:border-accent-200 hover:shadow-xl hover:shadow-charcoal-100/50 transition-all group"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-lg bg-charcoal-50 border border-charcoal-100 flex items-center justify-center shrink-0 group-hover:bg-accent-50 group-hover:border-accent-200 transition-colors">
                  <service.icon size={26} className="text-charcoal-600 group-hover:text-accent-500 transition-colors" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-charcoal-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-charcoal-500 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs text-charcoal-600">
                        <CheckCircle2 size={12} className="text-accent-500 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseBand() {
  const { ref, isInView } = useInView();

  const points = [
    { icon: Shield, text: 'Safety integrated into every process' },
    { icon: CheckCircle2, text: 'Quality without compromise' },
    { icon: ClipboardList, text: 'Professional project management' },
  ];

  return (
    <section className="section-padding bg-charcoal-50" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal-900 text-balance">
            Why Work With Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={point.text}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-full bg-accent-50 border border-accent-100 flex items-center justify-center mx-auto mb-4">
                <point.icon size={24} className="text-accent-500" />
              </div>
              <p className="text-charcoal-700 font-medium">{point.text}</p>
            </motion.div>
          ))}
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
          Need a Construction Partner?
        </h2>
        <p className="text-charcoal-400 mt-4 max-w-lg mx-auto">
          Tell us about your project and let's explore how Elite Mind Construction can help.
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
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
