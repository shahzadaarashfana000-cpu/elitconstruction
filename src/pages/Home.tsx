import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Shield, Target, Clock, CheckCircle2, Users, Eye, Building2, HardHat, Ruler, ClipboardList, TreePine, Wrench } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { IMAGES } from '../constants/images';

export function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <AboutPreview />
      <ServicesSection />
      <WhyChooseSection />
      <ProjectsPreview />
      <ProcessSection />
      <CTASection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/80 to-charcoal-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-custom pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-accent-400 text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase mb-6"
          >
            Construction • Engineering • Project Management
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] text-balance"
          >
            Building the Future<br />
            <span className="text-accent-400">With Precision.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-charcoal-300 text-base sm:text-lg md:text-xl mt-6 max-w-xl leading-relaxed"
          >
            Elite Mind Construction delivers professional construction solutions with a focus on quality, safety, precision, and dependable project delivery.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <Link
              to="/request-quote"
              className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded transition-all hover:shadow-xl hover:shadow-accent-500/20 text-center"
            >
              Request a Quote
            </Link>
            <Link
              to="/projects"
              className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded transition-all hover:bg-white/5 text-center"
            >
              Explore Our Projects
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <a href="#trust" aria-label="Scroll to content" className="text-white/50 hover:text-white/80 transition-colors">
          <ChevronDown size={24} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}

function TrustSection() {
  const { ref, isInView } = useInView();

  const items = [
    { icon: Target, title: 'Quality First', description: 'Every project is approached with careful planning and attention to detail.' },
    { icon: Shield, title: 'Safety Focused', description: 'Safety is integrated into every stage of our construction process.' },
    { icon: Clock, title: 'Reliable Delivery', description: 'Clear communication, organized execution, and dependable project management.' },
  ];

  return (
    <section id="trust" className="section-padding bg-warm-50" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="w-14 h-14 rounded-lg bg-accent-50 border border-accent-100 flex items-center justify-center mb-5 mx-auto md:mx-0">
                <item.icon size={24} className="text-accent-500" />
              </div>
              <h3 className="font-heading text-xl font-bold text-charcoal-900 mb-2">
                {item.title}
              </h3>
              <p className="text-charcoal-500 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutPreview() {
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
            <div className="relative">
              <img
              src={IMAGES.about}
              alt="Professional construction team working on a modern building project"
              className="w-full aspect-[4/3] object-cover rounded-lg"
              loading="lazy"              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-500/10 rounded-lg -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border-2 border-accent-200 rounded-lg -z-10" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-accent-500 text-xs font-semibold tracking-[0.15em] uppercase mb-3">
              About Elite Mind
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal-900 leading-tight text-balance">
              Built on Experience.<br />Driven by Excellence.
            </h2>
            <p className="text-charcoal-500 mt-6 leading-relaxed">
              At Elite Mind Construction, we believe great construction is about more than putting materials together. It is about creating environments that serve people, support businesses, and stand the test of time.
            </p>
            <p className="text-charcoal-500 mt-4 leading-relaxed">
              Our approach combines thoughtful planning, skilled workmanship, responsible project management, and a commitment to quality at every stage. We work closely with our clients to understand their goals and deliver practical, durable, and professionally executed results.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-accent-500 font-semibold mt-8 hover:text-accent-600 transition-colors group"
            >
              Discover Elite Mind
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const { ref, isInView } = useInView();

  const services = [
    { icon: Building2, title: 'General Construction', description: 'Complete construction solutions managed with attention to quality, schedule, safety, and project requirements.' },
    { icon: HardHat, title: 'Residential Construction', description: 'Thoughtfully planned residential projects designed around functionality, durability, comfort, and modern living.' },
    { icon: Building2, title: 'Commercial Construction', description: 'Professional construction services for commercial spaces designed to meet operational, functional, and aesthetic requirements.' },
    { icon: Wrench, title: 'Renovation & Remodeling', description: 'Transform existing spaces through carefully planned renovations, upgrades, and remodeling solutions.' },
    { icon: ClipboardList, title: 'Project Management', description: 'Coordinated project management focused on planning, communication, execution, quality control, and efficient delivery.' },
    { icon: TreePine, title: 'Site Development', description: 'Organized site preparation and development solutions supporting safe, efficient, and successful construction projects.' },
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
            What We Do
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal-900 text-balance">
            Construction Expertise From Concept to Completion
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-white rounded-lg p-7 border border-charcoal-100 hover:border-accent-200 hover:shadow-lg hover:shadow-charcoal-100/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-charcoal-50 border border-charcoal-100 flex items-center justify-center mb-5 group-hover:bg-accent-50 group-hover:border-accent-200 transition-colors">
                <service.icon size={22} className="text-charcoal-600 group-hover:text-accent-500 transition-colors" />
              </div>
              <h3 className="font-heading text-lg font-bold text-charcoal-900 mb-2">
                {service.title}
              </h3>
              <p className="text-charcoal-500 text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <Link
                to="/services"
                className="text-accent-500 text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const { ref, isInView } = useInView();

  const reasons = [
    { icon: CheckCircle2, title: 'Quality Without Compromise', description: 'We maintain a consistent focus on workmanship, materials, planning, and finishing quality.' },
    { icon: ClipboardList, title: 'Professional Project Management', description: 'Clear coordination and organized execution help keep projects moving efficiently.' },
    { icon: Shield, title: 'Safety First', description: 'We take a responsible approach to site safety and construction practices.' },
    { icon: Users, title: 'Transparent Communication', description: 'Clients deserve clear communication throughout the project lifecycle.' },
    { icon: Eye, title: 'Attention to Detail', description: 'Small details can make a significant difference in the quality of the final result.' },
    { icon: Ruler, title: 'Built for the Long Term', description: 'We focus on durable solutions designed to provide lasting value.' },
  ];

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-accent-500 text-xs font-semibold tracking-[0.15em] uppercase mb-3">
            Why Elite Mind
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal-900 text-balance">
            Why Clients Choose Elite Mind
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="flex gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-50 flex items-center justify-center shrink-0">
                <reason.icon size={18} className="text-accent-500" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-charcoal-900 mb-1">
                  {reason.title}
                </h3>
                <p className="text-charcoal-500 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsPreview() {
  const { ref, isInView } = useInView();

  const projects = [
    { title: 'Modern Office Complex', category: 'Commercial', location: '[Location]', image: IMAGES.project1 },
    { title: 'Luxury Residence', category: 'Residential', location: '[Location]', image: IMAGES.project2 },
    { title: 'Commercial Renovation', category: 'Renovation', location: '[Location]', image: IMAGES.project3 },
  ];

  return (
    <section className="section-padding bg-charcoal-950" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <p className="text-accent-400 text-xs font-semibold tracking-[0.15em] uppercase mb-3">
              Our Work
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white text-balance">
              Featured Projects
            </h2>
            <p className="text-charcoal-400 mt-3 max-w-lg">
              A selection of projects representing our commitment to quality, precision, and professional execution.
            </p>
          </div>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-accent-400 font-semibold hover:text-accent-300 transition-colors group shrink-0"
          >
            View All Projects
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg aspect-[4/3]"
            >
              <img
                src={project.image}
                alt={`${project.title} - ${project.category} project`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-accent-400 text-xs font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="font-heading text-xl font-bold text-white mt-1">
                  {project.title}
                </h3>
                <p className="text-charcoal-300 text-sm mt-1">{project.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const { ref, isInView } = useInView();

  const steps = [
    { number: '01', title: 'Consultation', description: 'We begin by understanding your requirements, goals, budget considerations, and project expectations.' },
    { number: '02', title: 'Planning', description: 'Our team develops a clear project approach covering scope, resources, timelines, and execution requirements.' },
    { number: '03', title: 'Preparation', description: 'We coordinate the necessary resources, site requirements, materials, and project logistics.' },
    { number: '04', title: 'Construction', description: 'Our team executes the work with attention to quality, safety, coordination, and detail.' },
    { number: '05', title: 'Quality Review', description: 'We review completed work and address outstanding requirements before project handover.' },
    { number: '06', title: 'Completion', description: 'We complete the final handover and ensure the project is delivered according to the agreed requirements.' },
  ];

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-accent-500 text-xs font-semibold tracking-[0.15em] uppercase mb-3">
            How We Work
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal-900 text-balance">
            Our Process
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative p-6 rounded-lg border border-charcoal-100 hover:border-accent-200 transition-colors"
            >
              <span className="text-4xl font-heading font-bold text-accent-100">
                {step.number}
              </span>
              <h3 className="font-heading text-lg font-bold text-charcoal-900 mt-3 mb-2">
                {step.title}
              </h3>
              <p className="text-charcoal-500 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <img
          src={IMAGES.cta}
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-charcoal-950/85" />
      </div>

      <div className="relative container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
            Ready to Build Something<br />Exceptional?
          </h2>
          <p className="text-charcoal-300 mt-5 text-lg">
            Tell us about your project and our team will help you explore the next steps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              to="/request-quote"
              className="bg-accent-500 hover:bg-accent-600 text-white font-semibold px-8 py-4 rounded transition-all hover:shadow-xl hover:shadow-accent-500/20"
            >
              Request a Quote
            </Link>
            <Link
              to="/contact"
              className="border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded transition-all hover:bg-white/5"
            >
              Contact Our Team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
