import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Tag, CheckCircle2 } from 'lucide-react';
import { IMAGES } from '../constants/images';

const projectData: Record<string, {
  title: string;
  slug: string;
  category: string;
  location: string;
  overview: string;
  scopeOfWork: string[];
  challenges: string[];
  solutions: string[];
  features: string[];
  image: string;
}> = {
  'modern-office-complex': {
    title: 'Modern Office Complex',
    slug: 'modern-office-complex',
    category: 'Commercial',
    location: '[Location]',
    overview: 'A contemporary commercial office building designed for functionality, efficiency, and professional aesthetics. The project demonstrates our capability in delivering large-scale commercial construction with attention to structural integrity, modern design requirements, and operational efficiency.',
    scopeOfWork: ['Foundation and structural work', 'Complete building envelope', 'Interior fit-out coordination', 'Mechanical and electrical systems', 'Landscaping and site works'],
    challenges: ['Coordinating multiple subcontractors', 'Meeting strict timeline requirements', 'Integrating modern building systems', 'Ensuring minimal disruption to surrounding area'],
    solutions: ['Detailed project planning and scheduling', 'Dedicated site management team', 'Advanced coordination systems', 'Phased construction approach'],
    features: ['Modern architectural design', 'Energy-efficient systems', 'Flexible floor plans', 'Premium finishes', 'Sustainable materials'],
    image: IMAGES.project1,
  },
  'luxury-residence': {
    title: 'Luxury Residence',
    slug: 'luxury-residence',
    category: 'Residential',
    location: '[Location]',
    overview: 'A thoughtfully designed residential project focused on comfort, durability, and modern living standards. This project showcases our residential construction expertise with attention to detail, quality materials, and client-specific requirements.',
    scopeOfWork: ['Complete residential construction', 'Custom interior finishes', 'Landscaping and outdoor spaces', 'Smart home integration', 'Garage and auxiliary structures'],
    challenges: ['Custom design requirements', 'High-quality finish expectations', 'Integration of modern systems', 'Site-specific considerations'],
    solutions: ['Close client collaboration', 'Skilled craftsman coordination', 'Quality control at every stage', 'Careful material selection'],
    features: ['Custom architectural design', 'Premium materials throughout', 'Energy-efficient construction', 'Modern amenities', 'Quality craftsmanship'],
    image: IMAGES.project2,
  },
  'commercial-renovation': {
    title: 'Commercial Renovation',
    slug: 'commercial-renovation',
    category: 'Renovation',
    location: '[Location]',
    overview: 'A comprehensive renovation project transforming an existing commercial space into a modern, functional environment. The project required careful planning to minimize disruption while delivering a complete transformation of the space.',
    scopeOfWork: ['Structural assessment and modifications', 'Complete interior demolition and rebuild', 'Updated mechanical systems', 'Modern electrical and data infrastructure', 'New finishes and fixtures'],
    challenges: ['Working within existing structure', 'Minimizing business disruption', 'Meeting current building codes', 'Integrating new and existing systems'],
    solutions: ['Phased renovation approach', 'Detailed pre-construction planning', 'Careful demolition sequencing', 'Systematic quality checks'],
    features: ['Modern open-plan design', 'Updated building systems', 'Improved accessibility', 'Energy-efficient upgrades', 'Professional finishes'],
    image: IMAGES.project3,
  },
  'mixed-use-development': {
    title: 'Mixed-Use Development',
    slug: 'mixed-use-development',
    category: 'Development',
    location: '[Location]',
    overview: 'A multi-purpose development project combining commercial and residential spaces in a coordinated design. This project demonstrates our ability to manage complex, multi-use construction projects.',
    scopeOfWork: ['Site development', 'Multi-story structure', 'Commercial space construction', 'Residential unit construction', 'Shared amenity spaces'],
    challenges: ['Coordinating different use types', 'Complex structural requirements', 'Multiple stakeholder management', 'Phased delivery requirements'],
    solutions: ['Comprehensive project planning', 'Dedicated management team', 'Clear communication protocols', 'Systematic quality assurance'],
    features: ['Mixed-use functionality', 'Modern design integration', 'Quality construction throughout', 'Efficient space planning', 'Professional execution'],
    image: IMAGES.project1,
  },
  'residential-community': {
    title: 'Residential Community',
    slug: 'residential-community',
    category: 'Residential',
    location: '[Location]',
    overview: 'A planned residential community project emphasizing quality construction and thoughtful site planning. This project demonstrates our capability in managing multi-unit residential developments.',
    scopeOfWork: ['Site planning and development', 'Multiple residential units', 'Community infrastructure', 'Roads and utilities', 'Common area construction'],
    challenges: ['Managing multiple simultaneous builds', 'Consistent quality across units', 'Infrastructure coordination', 'Timeline management'],
    solutions: ['Standardized quality processes', 'Efficient resource allocation', 'Clear project phasing', 'Dedicated site supervision'],
    features: ['Consistent quality standards', 'Thoughtful site planning', 'Modern construction methods', 'Community-focused design', 'Durable construction'],
    image: IMAGES.project2,
  },
  'industrial-facility': {
    title: 'Industrial Facility',
    slug: 'industrial-facility',
    category: 'Commercial',
    location: '[Location]',
    overview: 'An industrial construction project designed for operational efficiency, safety, and long-term durability. The project required specialized knowledge of industrial construction requirements.',
    scopeOfWork: ['Industrial structure construction', 'Heavy-duty flooring', 'Loading and logistics areas', 'Utility infrastructure', 'Safety systems installation'],
    challenges: ['Heavy-duty structural requirements', 'Specialized system integration', 'Safety compliance', 'Operational efficiency design'],
    solutions: ['Specialized engineering coordination', 'Industrial-grade materials', 'Comprehensive safety planning', 'Efficient layout design'],
    features: ['Heavy-duty construction', 'Operational efficiency', 'Safety-focused design', 'Durable materials', 'Professional execution'],
    image: IMAGES.project3,
  },
};

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectData[slug] : null;

  if (!project) {
    return (
      <section className="pt-40 pb-20 text-center">
        <div className="container-custom">
          <h1 className="font-heading text-3xl font-bold text-charcoal-900">Project Not Found</h1>
          <p className="text-charcoal-500 mt-4">The project you're looking for doesn't exist.</p>
          <Link to="/projects" className="text-accent-500 font-semibold mt-6 inline-block hover:text-accent-600">
            ← Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-charcoal-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt=""
            className="w-full h-full object-cover opacity-20"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-charcoal-950/80" />
        </div>
        <div className="relative container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-charcoal-400 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-accent-500/20 text-accent-300 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                <Tag size={12} /> {project.category}
              </span>
              <span className="text-charcoal-400 text-sm flex items-center gap-1">
                <MapPin size={14} /> {project.location}
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white leading-tight">
              {project.title}
            </h1>
            <p className="text-charcoal-300 text-lg mt-4 max-w-2xl leading-relaxed">
              Designed With Purpose. Built With Precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Overview */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-charcoal-900 mb-4">Project Overview</h2>
                <p className="text-charcoal-500 leading-relaxed">{project.overview}</p>
              </div>

              {/* Scope of Work */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-charcoal-900 mb-4">Scope of Work</h2>
                <ul className="space-y-3">
                  {project.scopeOfWork.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-accent-500 mt-0.5 shrink-0" />
                      <span className="text-charcoal-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="font-heading text-xl font-bold text-charcoal-900 mb-4">Challenges</h2>
                  <ul className="space-y-3">
                    {project.challenges.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-charcoal-300 mt-2 shrink-0" />
                        <span className="text-charcoal-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-heading text-xl font-bold text-charcoal-900 mb-4">Solutions</h2>
                  <ul className="space-y-3">
                    {project.solutions.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-accent-500 mt-2 shrink-0" />
                        <span className="text-charcoal-600 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Features */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-charcoal-900 mb-4">Key Features</h2>
                <div className="flex flex-wrap gap-3">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-charcoal-50 border border-charcoal-100 text-charcoal-700 text-sm px-4 py-2 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-charcoal-50 rounded-xl p-6 border border-charcoal-100">
                <h3 className="font-heading text-lg font-bold text-charcoal-900 mb-4">Project Details</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-xs text-charcoal-400 uppercase tracking-wider">Category</dt>
                    <dd className="text-charcoal-700 font-medium mt-1">{project.category}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-charcoal-400 uppercase tracking-wider">Location</dt>
                    <dd className="text-charcoal-700 font-medium mt-1">{project.location}</dd>
                  </div>
                  <div>
                    <dt className="text-xs text-charcoal-400 uppercase tracking-wider">Status</dt>
                    <dd className="text-charcoal-700 font-medium mt-1">[Status]</dd>
                  </div>
                </dl>
                <div className="mt-6 pt-6 border-t border-charcoal-200">
                  <Link
                    to="/request-quote"
                    className="block w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold px-6 py-3 rounded text-center transition-all"
                  >
                    Start Your Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
