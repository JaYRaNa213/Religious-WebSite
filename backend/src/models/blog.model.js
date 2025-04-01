import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  tags: {
    type: [String],
    default: [], // Example: ["Puja", "Festival"]
  },
  category: {
    type: String,
    enum: ['Puja', 'Festival', 'Aarti', 'Religious Books'],
    required: true,
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
