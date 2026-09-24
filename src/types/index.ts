export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'Residential' | 'Commercial' | 'Renovation' | 'Development';
  location: string;
  description: string;
  overview: string;
  scopeOfWork: string[];
  challenges: string[];
  solutions: string[];
  features: string[];
  images: string[];
  featured: boolean;
  status: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export interface QuoteFormData {
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

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
