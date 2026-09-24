import mongoose, { Schema, Document } from 'mongoose';

export interface IProject extends Document {
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
  status: 'draft' | 'published' | 'archived';
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true, trim: true, maxlength: 200 },
    slug: { type: String, required: true, unique: true, trim: true, lowercase: true },
    category: {
      type: String,
      enum: ['Residential', 'Commercial', 'Renovation', 'Development'],
      required: true,
    },
    location: { type: String, trim: true, maxlength: 200 },
    description: { type: String, required: true, trim: true, maxlength: 500 },
    overview: { type: String, required: true, trim: true, maxlength: 5000 },
    scopeOfWork: [{ type: String, trim: true }],
    challenges: [{ type: String, trim: true }],
    solutions: [{ type: String, trim: true }],
    features: [{ type: String, trim: true }],
    images: [{ type: String }],
    featured: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ['draft', 'published', 'archived'],
      default: 'draft',
    },
  },
  { timestamps: true }
);

ProjectSchema.index({ slug: 1 });
ProjectSchema.index({ category: 1 });
ProjectSchema.index({ featured: 1 });
ProjectSchema.index({ status: 1 });
ProjectSchema.index({ createdAt: -1 });

export const Project = mongoose.model<IProject>('Project', ProjectSchema);
