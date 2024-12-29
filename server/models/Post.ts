import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
  },
  excerpt: { type: String, required: true },
  markdown: { type: String, required: true },
  author: { type: String, required: true },
  imageUrl: { type: String, required: true },
  tags: [{ type: String }],
  date: { type: Date, default: Date.now },
}, {
  timestamps: true,
});

// Create slug from title before saving
postSchema.pre('save', function(next) {
  if (this.isModified('title')) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .replace(/\s+/g, '-');
  }
  next();
});

export const Post = mongoose.model('Post', postSchema);