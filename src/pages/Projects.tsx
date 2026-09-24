import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import { IMAGES } from '../constants/images';

const categories = ['All', 'Commercial', 'Residential', 'Renovation', 'Development'];

const projects = [
  {
    id: '1',
    title: 'Modern Office Complex',
    slug: 'modern-office-complex',
    category: 'Commercial',
    location: '[Location]',
    description: 'A contemporary commercial office building designed for functionality, efficiency, and professional aesthetics.',
    image: IMAGES.project1,
  },
  {
    id: '2',
    title: 'Luxury Residence',
    slug: 'luxury-residence',
    category: 'Residential',
    location: '[Location]',
    description: 'A thoughtfully designed residential project focused on comfort, durability, and modern living standards.',
    image: IMAGES.project2,
  },
  {
    id: '3',
    title: 'Commercial Renovation',
    slug: 'commercial-renovation',
    category: 'Renovation',
    location: '[Location]',
    description: 'A comprehensive renovation project transforming an existing commercial space into a modern, functional environment.',
    image: IMAGES.project3,
  },
  {
    id: '4',
    title: 'Mixed-Use Development',
    slug: 'mixed-use-development',
    category: 'Development',
    location: '[Location]',
    description: 'A multi-purpose development project combining commercial and residential spaces in a coordinated design.',
    image: IMAGES.project1,
  },
  {
    id: '5',
    title: 'Residential Community',
    slug: 'residential-community',
    category: 'Residential',
    location: '[Location]',
    description: 'A planned residential community project emphasizing quality construction and thoughtful site planning.',
    image: IMAGES.project2,
  },
  {
    id: '6',
    title: 'Industrial Facility',
    slug: 'industrial-facility',
    category: 'Commercial',
    location: '[Location]',
    description: 'An industrial construction project designed for operational efficiency, safety, and long-term durability.',
    image: IMAGES.project3,
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const { ref, isInView } = useInView();

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <PageHero />
      <section className="section-padding bg-white" ref={ref}>
        <div className="container-custom">
          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-3 mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-accent-500 text-white'
                    : 'bg-charcoal-50 text-charcoal-600 hover:bg-charcoal-100 border border-charcoal-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8 p-4 bg-accent-50 border border-accent-100 rounded-lg"
          >
            <p className="text-accent-700 text-sm">
              <strong>Note:</strong> These are demonstration project entries. Replace with actual Elite Mind Construction projects when available.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  to={`/projects/${project.slug}`}
                  className="group block rounded-xl overflow-hidden border border-charcoal-100 hover:border-accent-200 hover:shadow-xl transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} - ${project.category} project by Elite Mind Construction`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-accent-500 text-xs font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-charcoal-900 mt-2 group-hover:text-accent-600 transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-charcoal-400 text-sm mt-2">
                      <MapPin size={14} />
                      {project.location}
                    </div>
                    <p className="text-charcoal-500 text-sm mt-3 leading-relaxed">
                      {project.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-accent-500 text-sm font-semibold mt-4 group-hover:gap-2 transition-all">
                      View Project <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
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
            Our Work
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance max-w-3xl">
            Projects That Reflect<br />Our Standards
          </h1>
          <p className="text-charcoal-300 text-lg mt-6 max-w-2xl leading-relaxed">
            A selection of projects representing our commitment to quality, precision, and professional execution.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
