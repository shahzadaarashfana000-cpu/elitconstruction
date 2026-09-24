import mongoose, { Schema, Document } from 'mongoose';

export interface IQuoteRequest extends Document {
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
  attachments: string[];
  status: 'new' | 'reviewing' | 'quoted' | 'accepted' | 'declined';
  createdAt: Date;
  updatedAt: Date;
}

const QuoteRequestSchema = new Schema<IQuoteRequest>(
  {
    fullName: { type: String, required: true, trim: true, maxlength: 100 },
    companyName: { type: String, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, trim: true, maxlength: 20 },
    projectType: { type: String, required: true, trim: true },
    projectLocation: { type: String, trim: true, maxlength: 200 },
    estimatedBudget: { type: String, trim: true },
    desiredStartDate: { type: String, trim: true },
    projectDescription: { type: String, required: true, trim: true, maxlength: 10000 },
    preferredContactMethod: {
      type: String,
      enum: ['email', 'phone'],
      default: 'email',
    },
    attachments: [{ type: String }],
    status: {
      type: String,
      enum: ['new', 'reviewing', 'quoted', 'accepted', 'declined'],
      default: 'new',
    },
  },
  { timestamps: true }
);

QuoteRequestSchema.index({ email: 1 });
QuoteRequestSchema.index({ status: 1 });
QuoteRequestSchema.index({ createdAt: -1 });

export const QuoteRequest = mongoose.model<IQuoteRequest>('QuoteRequest', QuoteRequestSchema);
