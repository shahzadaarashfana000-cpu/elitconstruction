import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export function Contact() {
  return (
    <>
      <PageHero />
      <ContactSection />
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
            Contact Us
          </p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance max-w-3xl">
            Let's Build Something<br />Great Together.
          </h1>
          <p className="text-charcoal-300 text-lg mt-6 max-w-2xl leading-relaxed">
            Have a construction project in mind? Get in touch with Elite Mind Construction to discuss your requirements, project goals, and next steps.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { ref, isInView } = useInView();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) newErrors.message = 'Please provide a message.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    try {
      // In production, this would send to the backend API
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <h2 className="font-heading text-2xl font-bold text-charcoal-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-charcoal-500 leading-relaxed mb-8">
              We're here to help with your construction needs. Reach out through any of the channels below or use the contact form.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-50 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-accent-500" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-charcoal-900">Phone</h3>
                  <p className="text-charcoal-500 text-sm mt-1">[PHONE NUMBER]</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-50 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-accent-500" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-charcoal-900">Email</h3>
                  <p className="text-charcoal-500 text-sm mt-1">[EMAIL ADDRESS]</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-50 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-accent-500" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-charcoal-900">Office</h3>
                  <p className="text-charcoal-500 text-sm mt-1">[OFFICE ADDRESS]</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent-50 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-accent-500" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-charcoal-900">Business Hours</h3>
                  <p className="text-charcoal-500 text-sm mt-1">[BUSINESS HOURS]</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="font-heading text-xl font-bold text-charcoal-900 mb-2">
                  Message Received
                </h3>
                <p className="text-charcoal-500">
                  Thank you for contacting Elite Mind Construction. Our team will review your message and get back to you.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-6 text-accent-500 font-semibold hover:text-accent-600"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-charcoal-50 rounded-xl p-8 border border-charcoal-100" noValidate>
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-start gap-3">
                    <AlertCircle size={18} className="text-red-500 mt-0.5 shrink-0" />
                    <p className="text-red-700 text-sm">Something went wrong. Please try again.</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-lg border bg-white text-charcoal-900 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 ${
                        errors.name ? 'border-red-300' : 'border-charcoal-200'
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
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
                      className={`w-full px-4 py-3 rounded-lg border bg-white text-charcoal-900 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 ${
                        errors.email ? 'border-red-300' : 'border-charcoal-200'
                      }`}
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
                      className="w-full px-4 py-3 rounded-lg border border-charcoal-200 bg-white text-charcoal-900 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500"
                      placeholder="[PHONE NUMBER]"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-charcoal-700 mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-charcoal-200 bg-white text-charcoal-900 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500"
                      placeholder="Company name (optional)"
                    />
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border bg-white text-charcoal-900 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500/20 focus:border-accent-500 resize-none ${
                      errors.message ? 'border-red-300' : 'border-charcoal-200'
                    }`}
                    placeholder="Tell us about your project or inquiry..."
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="mt-6 bg-accent-500 hover:bg-accent-600 disabled:bg-accent-300 text-white font-semibold px-8 py-3.5 rounded transition-all flex items-center gap-2"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-charcoal-400 text-xs mt-4">
                  Your information will be used only to respond to your inquiry.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
