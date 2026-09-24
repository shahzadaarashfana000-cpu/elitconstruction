import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Upload } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  projectType: string;
  projectLocation: string;
  estimatedBudget: string;
  desiredStartDate: string;
  projectDescription: string;
  preferredContactMethod: string;
}

interface FormErrors {
  [key: string]: string | undefined;
}

export function RequestQuote() {
  return (
    <>
      <PageHero />
      <QuoteFormSection />
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
            Request a Quote
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance max-w-3xl">
            Start Your Project<br />With Elite Mind
          </h1>
          <p className="text-charcoal-300 text-lg mt-6 max-w-2xl leading-relaxed">
            Tell us about your construction project and our team will review your requirements and get back to you with next steps.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function QuoteFormSection() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    projectType: '',
    projectLocation: '',
    estimatedBudget: '',
    desiredStartDate: '',
    projectDescription: '',
    preferredContactMethod: 'email',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.projectType) newErrors.projectType = 'Please select a project type.';
    if (!formData.projectDescription.trim()) newErrors.projectDescription = 'Please provide a project description.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    try {
      // In production, this would send to the backend API
      // await fetch('/api/quotes', { method: 'POST', body: JSON.stringify(formData) });
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-lg border bg-white text-charcoal-900 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 ${
      errors[field] ? 'border-red-300' : 'border-charcoal-200'
    }`;

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {status === 'success' ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-10 text-center">
              <CheckCircle2 size={56} className="text-green-500 mx-auto mb-5" />
              <h2 className="font-heading text-2xl font-bold text-charcoal-900 mb-3">
                Project Request Received
              </h2>
              <p className="text-charcoal-500 max-w-md mx-auto leading-relaxed">
                Thank you. Your project request has been received. Our team will review your information and get back to you.
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-8 text-accent-500 font-semibold hover:text-accent-600"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-charcoal-50 rounded-xl p-8 md:p-10 border border-charcoal-100" noValidate>
              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8 flex items-start gap-3">
                  <AlertCircle size={18} className="text-red-500 mt-0.5 shrink-0" />
                  <p className="text-red-700 text-sm">Something went wrong. Please try again.</p>
                </div>
              )}

              {/* Contact Information */}
              <div className="mb-10">
                <h3 className="font-heading text-lg font-bold text-charcoal-900 mb-1">
                  Contact Information
                </h3>
                <p className="text-charcoal-400 text-sm mb-5">How can we reach you?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-charcoal-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={inputClass('fullName')}
                      placeholder="Your full name"
                    />
                    {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                  </div>
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium text-charcoal-700 mb-1.5">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className={inputClass('companyName')}
                      placeholder="Company name (optional)"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal-700 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass('email')}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal-700 mb-1.5">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass('phone')}
                      placeholder="[PHONE NUMBER]"
                    />
                  </div>
                </div>
              </div>

              {/* Project Information */}
              <div className="mb-10">
                <h3 className="font-heading text-lg font-bold text-charcoal-900 mb-1">
                  Project Information
                </h3>
                <p className="text-charcoal-400 text-sm mb-5">Tell us about your project.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-charcoal-700 mb-1.5">
                      Project Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={inputClass('projectType')}
                    >
                      <option value="">Select project type</option>
                      <option value="general-construction">General Construction</option>
                      <option value="residential">Residential Construction</option>
                      <option value="commercial">Commercial Construction</option>
                      <option value="renovation">Renovation & Remodeling</option>
                      <option value="project-management">Project Management</option>
                      <option value="site-development">Site Development</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>}
                  </div>
                  <div>
                    <label htmlFor="projectLocation" className="block text-sm font-medium text-charcoal-700 mb-1.5">
                      Project Location
                    </label>
                    <input
                      type="text"
                      id="projectLocation"
                      name="projectLocation"
                      value={formData.projectLocation}
                      onChange={handleChange}
                      className={inputClass('projectLocation')}
                      placeholder="City, State / Region"
                    />
                  </div>
                  <div>
                    <label htmlFor="estimatedBudget" className="block text-sm font-medium text-charcoal-700 mb-1.5">
                      Estimated Budget
                    </label>
                    <select
                      id="estimatedBudget"
                      name="estimatedBudget"
                      value={formData.estimatedBudget}
                      onChange={handleChange}
                      className={inputClass('estimatedBudget')}
                    >
                      <option value="">Select budget range</option>
                      <option value="under-50k">Under $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-250k">$100,000 - $250,000</option>
                      <option value="250k-500k">$250,000 - $500,000</option>
                      <option value="500k-1m">$500,000 - $1,000,000</option>
                      <option value="over-1m">Over $1,000,000</option>
                      <option value="undetermined">Not yet determined</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="desiredStartDate" className="block text-sm font-medium text-charcoal-700 mb-1.5">
                      Desired Start Date
                    </label>
                    <input
                      type="date"
                      id="desiredStartDate"
                      name="desiredStartDate"
                      value={formData.desiredStartDate}
                      onChange={handleChange}
                      className={inputClass('desiredStartDate')}
                    />
                  </div>
                </div>
                <div className="mt-5">
                  <label htmlFor="projectDescription" className="block text-sm font-medium text-charcoal-700 mb-1.5">
                    Project Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    rows={5}
                    className={`${inputClass('projectDescription')} resize-none`}
                    placeholder="Describe your project requirements, goals, and any specific details..."
                  />
                  {errors.projectDescription && <p className="text-red-500 text-xs mt-1">{errors.projectDescription}</p>}
                </div>
              </div>

              {/* Additional */}
              <div className="mb-8">
                <h3 className="font-heading text-lg font-bold text-charcoal-900 mb-1">
                  Additional
                </h3>
                <p className="text-charcoal-400 text-sm mb-5">Optional preferences.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-1.5">
                      Preferred Contact Method
                    </label>
                    <div className="flex gap-4">
                      {['email', 'phone'].map((method) => (
                        <label key={method} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContactMethod"
                            value={method}
                            checked={formData.preferredContactMethod === method}
                            onChange={handleChange}
                            className="w-4 h-4 text-accent-500 border-charcoal-300 focus:ring-accent-500"
                          />
                          <span className="text-sm text-charcoal-600 capitalize">{method}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-charcoal-700 mb-1.5">
                      Upload Files
                    </label>
                    <div className="flex items-center gap-3 px-4 py-3 border border-charcoal-200 rounded-lg bg-white">
                      <Upload size={18} className="text-charcoal-400" />
                      <span className="text-sm text-charcoal-400">PDF, JPG, PNG (max 10MB)</span>
                    </div>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-accent-500 hover:bg-accent-600 disabled:bg-accent-300 text-white font-semibold px-8 py-4 rounded transition-all flex items-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Submit Project Request
                  </>
                )}
              </button>

              <p className="text-charcoal-400 text-xs mt-4">
                Your information will be used only to respond to your project inquiry.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
